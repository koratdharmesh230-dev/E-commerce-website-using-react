import React from "react";
import {Link} from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <Link to="/" className="navbar-logo"> TechStore</Link>

                {/* Links */}
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-link"> Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link"> Login </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cart" className="nav-link cart-link">
                            <FaShoppingCart/>
                            <span className="cart-badge"> 0 </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;