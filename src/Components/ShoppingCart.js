import React from 'react';

const ShoppingCart = ({ cartItems }) => {
  return (
    <div id="shopping-cart" className="mt-4">
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;