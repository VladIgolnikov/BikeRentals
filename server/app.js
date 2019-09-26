const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const getProducts = require('./../data/helpers');

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => {
  res.send('Welcome to TopView Bike Rentals!');
});

app.get('/products', (req, res) => {
  getProducts()
    .then(results => {
      res.send(results);
    })
    .catch(error => {
      console.log(`Error retrieving products --> ${error}`);
    });
});

module.exports = app;
