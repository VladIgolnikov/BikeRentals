import React from 'react';
import ToggleCart from './toggleCart.jsx'

const Products = props => {
  return (
    <ul className='products'>
      {props.products.map(product => {
        const price = product.price.toFixed(2);
        return (
          <li className='product-card' key={product.id}>
            <div className='product-container'>
              <div className='image-container'>
                <img className='product-image' src={product.image} />
              </div>
              <div className='product-info'>
                <p className='product-title'>{product.name}</p>
                <p className='product-price'>${price}</p>
              </div>
            </div>
            <div className='add-to-cart-container'>
              <div className='toggle-quantity'>
                <ToggleCart
                  product={product}
                  cart={props.cart}
                  decreaseCount={props.decreaseCount}
                  increaseCount={props.increaseCount}
                />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Products;
