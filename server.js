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

// const dbPool = require('./db');

const app = express();

app.use(cors());
app.use(express.json());


app.use(express.static(path.join( __dirname, 'client', 'build')));

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
  res.send('signup');
})




app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`);
})