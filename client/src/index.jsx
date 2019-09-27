import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Products from './components/products.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bicycles: [],
      accessories: [],
      cart: {}
    };

    this.getProducts = this.getProducts.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
    this.increaseCount = this.increaseCount.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    Axios.get('/products')
      .then(response => {
        const products = response.data;
        let bicycles = [];
        let accessories = [];

        for (let product of products) {
          if (product.product_type === 'bike') {
            bicycles.push(product);
          } else {
            accessories.push(product);
          }
        }

        this.setState({
          bicycles: bicycles,
          accessories: accessories
        });
      })
      .catch(error => {
        console.log(`Error getting products --> ${error}`);
      });
  }

  decreaseCount(product) {
    let newCart = this.state.cart;

    if (newCart[product.id]) {
      if (newCart[product.id].count > 1) {
        newCart[product.id].count--;
      } else {
        delete newCart[product.id];
      }
    }

    this.setState({
      cart: newCart
    });
  }

  increaseCount(product) {
    let newCart = this.state.cart;

    if (newCart[product.id]) {
      newCart[product.id].count++;
    } else {
      newCart[product.id] = product;
      newCart[product.id].count = 1;
    }

    this.setState({
      cart: newCart
    });
  }

  render() {
    const { bicycles, accessories, cart } = this.state;

    return (
      <div className='app'>
        <header className='navbar'>
          <div className='nav-header'>
            <div className='page-title'>
              <h1>TopView Bike Rentals</h1>
            </div>
            <div className='nav-right'>
              <img className='cart' src={Object.keys(cart).length > 0 ? './img/cart-filled-icon.png' : './img/cart-icon.png'}/>
            </div>
          </div>
        </header>
        <div className='main'>
          <div className='products'>
            <h2>Select Bicycles</h2>
            <Products
              products={bicycles}
              cart={cart}
              decreaseCount={this.decreaseCount}
              increaseCount={this.increaseCount}
            />
          </div>
          <div className='products'>
            <h2>Add Accessories</h2>
          </div>
          <Products
            products={accessories}
            cart={cart}
            decreaseCount={this.decreaseCount}
            increaseCount={this.increaseCount}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
