if( process.env.NODE_ENV === 'production' ){
  console.log('Node Env: ', process.env.NODE_ENV, ' db url: ', process.env.DATABASE_URL);
}else{
  require('dotenv').config();
  console.log('Node Env: ', process.env.NODE_ENV, ' PGUSER: ', process.env.PGUSER);
}
const PORT = process.env.PORT || 8080;


const express = require('express');
const cors = require('cors');
const path = require('path');

const dbPool = require('./db');

const app = express();

app.use(cors());
app.use(express.json());


app.use(express.static(path.join( __dirname, 'client', 'build')));


async function checkForTables(){
  const results = await dbPool.query(`
    CREATE TABLE IF NOT EXISTS users (
      email VARCHAR(50) PRIMARY KEY,
      id SERIAL UNIQUE,
      username VARCHAR(50) NOT NULL,
      password VARCHAR(256) NOT NULL
    );
    CREATE TABLE IF NOT EXISTS posts (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id),
      title VARCHAR(255) NOT NULL,
      body TEXT NOT NULL
    );
  `);
  // console.log('checkForTables results: ', results);
}

checkForTables();






app.get('/ping',(req, res)=>{
  res.send('pong');
})


app.get('/',(req, res)=>{
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
})


app.post('/login', (req, res)=>{
  console.log('login req.body: ', req.body);

  checkUserLogin(req.body.email, req.body.password)


  res.send({
    success: true,
  });
})

async function checkUserLogin(userEmail, userPassword){
  dbPool.query(`
    SELECT FROM USERS WHERE email = $1 AND password = $2;
  `, [userEmail, userPassword], (err, results)=>{
    if(err){
      console.log('checkUserLogin err: ', err);
      return false;
    }
    console.log('checkUserLogin results: ', results);
    return results;
  })
}



app.post('/signup', (req, res)=>{
  console.log('signup req.body: ', req.body);

  // some kind of email validation...

  // Add user to db


  const results = postSignup(req, res);
  // console.log('results: ', results);

  results.then(
    (results)=>{
      console.log('results: ', results.rows);
      if(results.rows.length === 0){
        res.send({
          success: false,
          message: 'Email already exists'
        })
      }else{
        res.send({
          success: true,
          message: 'User created',
        });
      }
    }, (err)=>{console.log(err)}
  )
  
})

  async function postSignup(req, res){
  const results = await dbPool.query(`
    INSERT INTO users (email, username, password)
    VALUES ($1, $2, $3)
    ON CONFLICT (email) DO NOTHING
    RETURNING id, email, username
  `, [req.body.email, req.body.username, req.body.password])
  console.log('results: ', results.rows);
  return results;
}





app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`);
})