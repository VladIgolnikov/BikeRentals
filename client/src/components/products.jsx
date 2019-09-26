import React from 'react';

const Products = props => {
  return (
    <div className='products'>
      <h2>Bicycles</h2>
      <ul className='bicycles'>
        {props.bicycles.map(bicycle => {
          const price = bicycle.price.toFixed(2);
          return (
            <li className='product-card' key={bicycle.id}>
              <div className='product-container'>
                <div className='image-container'>
                  <img className='product-image' src={bicycle.image} />
                </div>
                <div className='product-info'>
                  <p className='product-title'>{bicycle.name}</p>
                  <p className='product-price'>${price}</p>
                </div>
              </div>
              <div className='add-to-cart-container'>
                {/* "Add to cart" component goes here */}
              </div>
            </li>
          );
        })}
      </ul>
      <h2>Accessories</h2>
      <ul className='accessories'>
        {props.accessories.map(accessory => {
          const price = accessory.price.toFixed(2);
          return (
            <li className='product-card' key={accessory.id}>
              <div className='product-container'>
                <div className='image-container'>
                  <img className='product-image' src={accessory.image} />
                </div>
                <div className='product-info'>
                  <p className='product-title'>{accessory.name}</p>
                  <p className='product-price'>${price}</p>
                </div>
              </div>
              <div className='add-to-cart-container'>
                {/* "Add to cart" component goes here */}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
