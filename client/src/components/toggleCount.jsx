import React from 'react';

const ToggleCount = props => {
  return (
    <div className='toggle-count'>
      <p
        className='minus-button'
        onClick={() => {
          props.decreaseCount(props.product);
        }}
      >
        -
      </p>
      {props.cart[props.product.id] ? props.cart[props.product.id].count : 0}
      <p
        className='plus-button'
        onClick={() => {
          props.increaseCount(props.product);
        }}
      >
        +
      </p>
    </div>
  );
};

export default ToggleCount;
