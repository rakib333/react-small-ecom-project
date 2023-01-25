import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <div className="order-details">
        <h2>Order Summery</h2>
        <div>
          <h3>Added product:{cart.length} </h3>
          <h3>Total price: </h3>
          <h3>Total charge:</h3>
          <h3>Tax</h3>
          <h2>Grand Total: </h2>
        </div>
        <div>
          <button>Delete Order</button>
          <button>Review order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
