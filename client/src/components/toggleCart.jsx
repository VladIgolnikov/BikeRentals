import React from 'react';

const ToggleCart = props => {
  return (
    <div className='toggle-count'>
      <img className='minus-button' src='./img/minus-icon.png'
        onClick={() => {
          props.decreaseCount(props.product);
        }}
      />
      {props.cart[props.product.id] ? props.cart[props.product.id].count : 0}
      <img className='plus-button' src='./img/plus-icon.png'
        onClick={() => {
          props.increaseCount(props.product);
        }}
      />
    </div>
  );
};

export default ToggleCart;
