import React from 'react';

const Products = props => {
  return (
    <ul className='products'>
      {props.products.map(product => {
        return (
          <li className='product-card' key={product.id}>
            <div className='product-container'>
              <div className='image-container'>
                <img className='product-image' src={product.image} />
              </div>
              <div className='product-info'>
                <p className='product-title'>{product.name}</p>
                <p className='product-price'>${product.price}</p>
              </div>
            </div>
            <div className='add-to-cart-container'>
              {/* "Add to cart" component goes here */}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Products;
