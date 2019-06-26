const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv/config')

const app = express();

//Middleware

//Everytime request comes, run the body parser
app.use(bodyParser.json());

//Import routes

// All urls with posts
const postsRoutes = require('./routes/posts')

//ROUTES
app.get('/',(req,res) =>{
    res.send('We are on home')
})

// use resembles middleware
app.use('/posts',postsRoutes)

//connect to db
// readyState are decoded here
//0: disconnected
//1: connected
//2: connecting
//3: disconnecting

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => {
        console.log(mongoose.connection.readyState);
        if(mongoose.connection.readyState == 0)
        return console.error("DB connection failed");
        console.log('connected to db');
    }
);

// How to we start listening to server
app.listen(3000);