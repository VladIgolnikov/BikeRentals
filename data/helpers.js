const db = require('./index');

const getProducts = () => {
  return new Promise((res, rej) => {
    db.all(`SELECT * FROM products`, (err, rows) => {
      if (err) {
        console.log(`Error retrieving products from Bike Rentals DB >> ${err}`);
        rej(err);
      } else {
        console.log(`Success! Retrieved products from Bike Rentals DB`);
        res(rows);
      }
    });
  });
};

module.exports = getProducts;