const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'DBname.db');

const db = new sqlite3.Database(dbPath, err => {
  if (err) {
    console.error('ERROR >> could not connect to Vlad DB', err.message);
  } else {
    console.log('<< Connected to Vlad DB >>');
  }
});

module.exports = db;