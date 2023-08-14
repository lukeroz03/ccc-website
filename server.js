const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname,'build')));

// const members = [
	// {
		// name:"Lewis (Joey) Thornberry",
		// link:"something.something.com",
		// grade:"Class of 2026"
	// },
	// { 
		// name: "Luke Dreamy-Rozmajzl",
		// link: "something.something.com",
		// grade: "Class of 2026"
	// }
// ];


app.get('/api/members', (req, res) => {
	const db = new sqlite3.Database('./mainsite.db', (err) => {
		if (err) {
			console.error(err.message);
		}
	});
	const query = `SELECT * FROM members`;
	db.all(query, [], (err, rows) => {
		if (err) {
			throw err;
		}
		res.json(rows);
		db.close();
	});

});

app.get('/api/projects', (req, res) => {
	const db = new sqlite3.Database('./mainsite.db', (err) => {
		if (err) {
			console.error(err.message);
		}
	});
	const query = `SELECT * FROM projects`;
	db.all(query, [], (err, rows) => {
		if (err) {
			throw err;
		}
		res.json(rows);
		db.close();
	});

});

// app.get('*', (req, res) => {
	// res.sendFile(path.join(__dirname,'build','index.html'));
// });

const port = 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
