import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'

const Product = ({ product,handleAddToCart }) => {
    const { name, price, img, ratings } = product;
    return (
        <div className='product-container'>
            <img src={img} alt="product-img" />
            <h2>Name: {name}</h2>
            <h3>Price: {price}</h3>
            <p>Ratings: {ratings}</p>

            <div className='btn-cart'>
                <button onClick={()=>handleAddToCart(product)}>Add To cart <BeakerIcon className='icon-size'/></button>
            </div>
        </div>
    );
};

export default Product;