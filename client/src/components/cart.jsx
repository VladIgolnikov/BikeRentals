import React from 'react';
import ToggleCount from './toggleCount.jsx';

const Cart = props => {
  const products = Object.values(props.cart);

  const getTotal = items => {
    let total = 0;
    if (items.length > 0) {
      for (let item of items) {
        total += item.price * item.count;
      }
    }
    return total.toFixed(2);
  };

  const checkout = items => {
    let bikes = 0;
    for (let item of items) {
      if (item.product_type === 'bike') {
        bikes++;
      }
    }
    return bikes;
  };

  const total = getTotal(products);

  const bikes = checkout(products);

  return (
    <div className='cart'>
      <p className='toggle-cart' onClick={()=>{props.toggleCart()}}>{`< Back`}</p>
      <div className='cart-card'>
        {products.length < 1 ? (
          <h2 className='no-items'>No items selected</h2>
        ) : (
          <div>
            <h2>Review your order</h2>
            <ul className='cart'>
              {products.map(product => {
                const price = product.price.toFixed(2);
                const subtotal = (product.price * product.count).toFixed(2);

                return (
                  <li className='product-line' key={product.id}>
                    <div className='add-to-cart-container'>
                      <div className='toggle-quantity'>
                        <ToggleCount
                          product={product}
                          cart={props.cart}
                          decreaseCount={props.decreaseCount}
                          increaseCount={props.increaseCount}
                        />
                      </div>
                    </div>
                    <div className='product-info'>
                      <p className='cart-name'>{product.name}</p>
                      <p className='cart-price'>${price}</p>
                    </div>
                    <p className='equals'>=</p>
                    <p className='subtotal'>${subtotal}</p>
                  </li>
                );
              })}
            </ul>
            <div className='total-line' />
            <p className='total'>
              Total:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${total}
            </p>
            <div className='place-order'>
              {bikes > 0 ? (
                <button className='checkout'>Place your order</button>
              ) : (
                <div>
                  <h3>
                    Accessories can only be reserved with a bike selection
                  </h3>
                  <button className='checkout' disabled>
                    Place your order
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
