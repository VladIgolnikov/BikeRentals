# TopView Bike Rentals

A Practical Test Web App 

*Rent bikes and bike accessories for pretend!*


[bit.ly/TopViewBikes](http://bit.ly/TopViewBikes)


## Table of Contents

1. [Functionality](#Functionality)
2. [Notes](#Notes)
3. [Requirements](#Requirements)
4. [Development](#Development)


## Functionality: 

On page load, the application sends an API request to fetch Bicycles and Accessories from a remote database.  
Products are displayed on product cards containing quantity selectors, which are rendered in responsive grid.
Updating a product's quantity will add/remove it from the shopping cart.
Clicking the cart icon displays a summary of the shopping cart contents, as well as a checkout button.
Accessories can only be checked out with a bike selection.


## Notes

This application uses React and JavaScript on the front end, bundled via webpack. The back end uses Node.js and Express, as well as a SQLite database.


## Requirements
- Node v10.15.3


## Development

### Install Dependencies
From within the project directory root:
```sh
npm install
```

### Populate the Database
From within the project directory root:
```sh
npm run seed
```

### Build the webpack bundle
From within the root directory root:
To build in production mode:
```sh
npm run build
```
To build in development mode:
```sh
npm run dev
```

### Start the server
From within the project directory root:
```sh
npm start
```
(The server port is set to 3000)

### Run Tests
From within the project directory root:
```sh
npm test
```
(Tests are written in Jest)