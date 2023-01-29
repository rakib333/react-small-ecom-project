import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo.svg'

const Header = () => {
    return (
        <>
            <div className='header-main'>
                <img src={logo} alt="logo" />
                <nav className='navbar'>
                    <ul>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/orders">Order</Link></li>
                        <li><Link to="/inventory">Inventory</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Header;