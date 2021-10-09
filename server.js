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
      id SERIAL INT UNIQUE,
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
  res.send({
    success: true,
  });
})

app.post('/signup', (req, res)=>{
  console.log('signup req.body: ', req.body);

  // some kind of email validation...
  const results = postSignup(req, res);
  // console.log('results: ', results);

  
  res.send({
    success: true,
  });
})

async function postSignup(req, res){
  const results = await dbPool.query(`
    INSERT INTO users (email, username, password)
    VALUES ($1, $2, $3)
    ON CONFLICT (email) DO NOTHING
    RETURNING id, email, username
  `, [req.body.email, req.body.username, req.body.password])
  console.log('results: ', results);
  return results;
}





app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`);
})