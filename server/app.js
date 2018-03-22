const express = require('express')
const mysql = require("mysql")
const session = require("express-session")
const myParser = require("body-parser")
const path = require('path')

require('dotenv').config();

const language = require('./language')

const app = express()

// minify the code and remove extra white-space 
app.use( express.static( `${__dirname}/../build` ) );


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Cache-Control');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// Json Encode
app.use(myParser.json());

// Set session
app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: true,
	saveUninitialized: true,
    domain: process.env.REACT_APP_API_DOMAIN
}));

// Always return the main index.html, so react-router render the route in the client
// app.get('*', (req, res)=>{
// 	res.sendFile(path.join(__dirname, '../build/index.html'));
// })

app.use('/language', language)


module.exports = app;