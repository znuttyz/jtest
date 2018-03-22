const express = require('express')
const next = require('next')
const mysql = require("mysql")
const session = require("express-session")
const myParser = require("body-parser");


const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
	const server = express()

	// Json Encode
	server.use(myParser.json());

  	// Set session
	server.use(session({
		secret: 'my-Secret-Key-558df2d3',
		resave: true,
		saveUninitialized: true,
	    domain: 'localhost:3000',
	    cookie: {
		    secure: true,
		}
	}));

  	// Database Connection
	const con = mysql.createConnection({
	  host: "localhost",
	  user: "root",
	  password: "root",
	  database: "jewelry"
	});

	server.get('/getLanguage', (req, res) => {
		console.log('/getLanguage', req.session.lang)
		res.send({ lang: req.session.lang })
	})

	server.post('/getCat', (req, res) => {
		if(!req.session.lang) req.session.lang = "en";
		console.log('/getCat ', req.session.lang)
		let nav = ['ALL', 'RUBY', 'SAPPHIRE', 'JADE', 'SPINEL'];
		if(req.body.lang === 'th') {
			nav = ['ทั้งหมด', 'ทับทิม', 'ไพลิน', 'หยก', 'สปิเนล'];
		} 
		res.send({nav});
	})

	server.post('/setLanguage', (req, res) => {
		console.log('/setLanguage', req.body.lang)
		console.log('session before', req.session.lang)
		req.session.lang = req.body.lang;
		console.log('session after', req.session.lang)
		res.send({lang: req.session.lang})
	})

	server.get('*', (req, res) => {
		return handle(req, res)
	})

	server.listen(port, (err) => {
		if (err) throw err
		console.log(`> Ready on http://localhost:${port}`)
	})
})