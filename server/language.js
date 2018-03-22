const express = require('express')
const mysql = require("mysql")

require('dotenv').config();

const router = express.Router()

// Database Connection
const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  socketPath: process.env.DB_SOCKETPATH
});

router.get('/getLanguage', (req, res) => {
	console.log('/getLanguage', req.session.lang)
	if(!req.session.lang) req.session.lang = "th";
	res.send({ lang: req.session.lang })
})


router.post('/getCat', (req, res) => {
	console.log('/getCat ', req.session.lang)
	if(!req.session.lang) req.session.lang = "th";
	let nav = [];
	if(req.session.lang === "en") {
		nav = ['ALL', 'RUBY', 'SAPPHIRE', 'JADE', 'SPINEL'];
		con.query("SELECT cat_name_en FROM tbl_cat ORDER BY cat_id ASC", (err, rows) => {
			if(err) throw err;
			console.log('Data received from Db(tbl_cat):\n');
			console.log(rows)

			res.send({nav: rows});
		});
	} else if(req.session.lang === "th") {
		con.query("SELECT cat_name_th FROM tbl_cat", (err, rows) => {
			if(err) throw err;
			console.log('Data received from Db(tbl_cat):\n');
			console.log(rows)

			res.send({nav: rows});
		});
	} 
})

router.post('/setLanguage', (req, res) => {
	console.log('/setLanguage', req.body.lang)
	console.log('session before', req.session.lang)
	req.session.lang = req.body.lang;
	console.log('session after', req.session.lang)
	res.send({lang: req.session.lang})
})

router.post('/getTitle', (req, res) => {
	console.log('/getTitle')
	if(!req.session.lang) req.session.lang = "th";
	if(req.session.lang === "en") {
		con.query('SELECT title_en FROM tbl_title WHERE title_page_id = ? ORDER BY title_position ASC', req.body.page, (err, rows) => {
			if(err) throw err;
			console.log('Data received from Db(tbl_title):\n');
			console.log(rows);

			res.send(rows)
		});
	} else if(req.session.lang === "th") {
		con.query('SELECT title_th FROM tbl_title WHERE title_page_id = ? ORDER BY title_position ASC', req.body.page, (err, rows) => {
			if(err) throw err;
			console.log('Data received from Db(tbl_title):\n');
			console.log(rows);

			res.send(rows)
		});
	}
})

router.post('/getDesc', (req, res) => {
	console.log('/getDesc')
	if(!req.session.lang) req.session.lang = "th";
	if(req.session.lang === "en") {
		con.query('SELECT desc_en FROM tbl_description WHERE desc_page_id = ? ORDER BY desc_title_id ASC', req.body.page, (err, rows) => {
			if(err) throw err;
			console.log('Data received from Db(tbl_description):\n');
			console.log(rows);

			res.send(rows)
		});
	} else if(req.session.lang === "th") {
		con.query('SELECT desc_th FROM tbl_description WHERE desc_page_id = ? ORDER BY desc_title_id ASC', req.body.page, (err, rows) => {
			if(err) throw err;
			console.log('Data received from Db(tbl_description):\n');
			console.log(rows);

			res.send(rows)
		});
	}
})

router.get('/getFooter', (req, res) => {
	console.log('/getFooter')
	if(!req.session.lang) req.session.lang = "th";
	if(req.session.lang === "en") {
		con.query('SELECT footer_en FROM tbl_footer ORDER BY footer_id', (err, rows) => {
			if(err) throw err;
			console.log('Data received from Db(tbl_footer):\n');
			console.log(rows);

			res.send(rows)
		})
	} else if(req.session.lang = "th") {
		con.query('SELECT footer_th FROM tbl_footer ORDER BY footer_id', (err, rows) => {
			if(err) throw err;
			console.log('Data received from Db(tbl_footer):\n');
			console.log(rows);

			res.send(rows)
		})
	}
})

module.exports = router
