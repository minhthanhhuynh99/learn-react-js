import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
const Header = () => {

    const [orders, setOrder] = useState([])

    useEffect(() => {
        setTimeout(() => {
            loadOrder()
        }, 200);
    }, [])



    const loadOrder = async () => {
        const response = await axios.get('http://localhost:2000/order')
        setOrder(response.data);
    }

    return (
        <header className='header'>
            <div>
                <h1>
                    <Link to='/' className='logo'>
                        Clothing-Shop
                    </Link>
                </h1>
            </div>
            <div className='header-link'>
                <ul>
                    <li>
                        <Link to='/home'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/add-product'>
                            Create my Product
                        </Link>
                    </li>
                    <li>
                        <Link to='/order-cart'>
                            <i className='fas fa-shopping-cart'></i>
                            <span>{orders.length}</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;