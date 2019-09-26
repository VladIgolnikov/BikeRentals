import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Products from './components/products.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bicycles: [],
      accessories: []
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

  render() {
    const bicycles = this.state.bicycles;
    const accessories = this.state.accessories;

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
              <img className='cart' src='./img/cart-icon.png' />
            </div>
          </div>
        </header>
        <div className='main'>
          <Products bicycles={bicycles} accessories={accessories} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
