const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const bikeRentals = require('./bikerentals.json');

const { products } = bikeRentals;

const dbPath = path.join(__dirname, 'Products.db');

const db = new sqlite3.Database(dbPath, err => {
  if (err) {
    console.error(
      `ERROR >> could not connect to Bike Rentals DB >> ${err.message}`
    );
  } else {
    console.log(`<< Connected to Bike Rentals DB >>`);
  }
});

db.serialize(() => {
  db.run(`DROP TABLE IF EXISTS products`)
  .run(
    `CREATE TABLE products (id INTEGER PRIMARY KEY, name TEXT, price REAL, image TEXT, product_type TEXT)`,
    err => {
      if (err) {
        console.error(
          `ERROR >> could not create products table >> ${err.message}`
        );
      } else {
        console.log(`- Created products table -`);
      }
    }
  );
});

for (let product of products) {
  db.run(
    `INSERT OR IGNORE INTO products (id, name, price, image, product_type) VALUES (?, ?, ?, ?, ?)`,
    [
      product.id,
      product.name,
      product.price,
      product.image,
      product.product_type
    ],
    err => {
      if (err) {
        console.error(
          `ERROR >> could not seed products table >> ${err.message}`
        );
      }
    }
  );
}

db.close(err => {
  if (err) {
    return console.error(err.message);
  }
  console.log(`<< Closed Bike Rentals DB connection >>`);
});
