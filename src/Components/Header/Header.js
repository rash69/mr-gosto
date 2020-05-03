import React from 'react';
import logo from '../../images/logo.jpg';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <nav className='navbar navbar-dark bg-dark'>
                <a className='navbar-brand' href="/">
                    <img src={logo}  className='w-25' alt=""/>
                </a>
                <div className='content d-flex'>
                    <a href="/">Home</a>
                    <a href="#specialItems">Special Dishes</a>
                    <a href="#offerItems">Offer Foods</a>
                    <a href="/"><FontAwesomeIcon icon={faCartPlus} /></a>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Signup</Link>
                    <form action="" className='form-inline'>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name="" id=""/>
                        <button  className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Header;