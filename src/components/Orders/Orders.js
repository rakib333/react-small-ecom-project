import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import OrderItems from '../OrderItems/OrderItems';

const Orders = () => {
    const { products, initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart)
    return (
        <div className='order-main'>
            <div className='ordered-product'>
                {
                    cart.map(product => <OrderItems
                        key={product.id}
                        product={product}
                    ></OrderItems>)
                }
            </div>
            <div className='order-information'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;