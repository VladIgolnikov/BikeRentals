import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Products from './components/products';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };

    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    Axios.get('/products')
      .then(response => {
        const products = response.data;
        this.setState({
          products: products
        });
      })
      .catch(error => {
        console.log(`Error getting products --> ${error}`);
      });
  }

  render() {
    const products = this.state.products;

    return (
      <div className='app'>
        <header className='navbar'>
          <div className='nav-header'>
            <div className='nav-left'>
              <span className='logo'>
                <img className='logo-image' src='./img/bike-logo.png' />
              </span>
            </div>
            <div className='page-title'>
              <h1>TopView Bike Rentals</h1>
            </div>
            <div className='nav-right'>
              <img className='cart' src='./img/gear-logo.png' />
            </div>
          </div>
        </header>
        <div className='main'>
          <Products products={products} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
