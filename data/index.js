const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'Products.db');

const db = new sqlite3.Database(dbPath, err => {
  if (err) {
    console.error('ERROR >> could not connect to the Bike Rentals DB', err.message);
  } else {
    console.log('<< Connected to the Bike Rentals DB >>');
  }
});

module.exports = db;