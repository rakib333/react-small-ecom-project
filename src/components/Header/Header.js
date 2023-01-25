import React from 'react';
import logo from '../../assets/images/Logo.svg'

const Header = () => {
    return (
        <>
            <div className='header-main'>
                <img src={logo} alt="logo" />
                <nav className='navbar'>
                    <ul>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/order">Order</a></li>
                        <li><a href="/inventory">Inventory</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Header;