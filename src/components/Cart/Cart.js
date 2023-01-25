import React from "react";

const Cart = ({ cart }) => {
  let price = 0;
  let shipping = 0;
  let quantity = 0;
  for (let product of cart) {
    quantity = quantity + product.quantity;
    price = price + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }

  // let tax = (price * .1).toFixed(2);
  let tax = Math.round(price * 0.1);
  return (
    <div>
      <div className="order-details">
        <h2>Order Summery</h2>
        <div>
          <h3>Added product:{quantity} </h3>
          <h3>Total price:${price} </h3>
          <h3>Total Shipping:${shipping}</h3>
          <h3>Tax: ${tax}</h3>
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
