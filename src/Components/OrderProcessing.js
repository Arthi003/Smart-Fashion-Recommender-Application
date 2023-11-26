import React from 'react';

const OrderProcessing = ({ cartItems, onSubmitOrder }) => {
  return (
    <div id="order-processing" className="mt-4">
      <h2>Order Processing</h2>
      <ShoppingCart cartItems={cartItems} />
      <button className="btn btn-primary" onClick={onSubmitOrder}>
        Submit Order
      </button>
    </div>
  );
};

export default OrderProcessing;