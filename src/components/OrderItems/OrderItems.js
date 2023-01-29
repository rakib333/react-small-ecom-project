import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const OrderItems = ({ product }) => {
  console.log(product);
  const { name, img, price, quantity } = product;
  return (
    <div className="review-items">
      <img src={img} alt="" />
      <div className="item-details">
        <div className="details">
          <h3>{name}</h3>
          <h4>Price: {price}</h4>
          <p>Quantity: {quantity}</p>
        </div>
        <button className="order-btn">
            <FontAwesomeIcon className="btn-icon" icon={ faTrashAlt }></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default OrderItems;
