import React from 'react';
import './Header.css';
import {Link } from "react-router-dom";
import { logo } from '../Data';
import { alt } from '../Data';
import { FaUserAlt } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";

const Header = () => {
  return (
    <div className='payAfrik_main_header'>
      <div className="logo">
        <Link to="/">
            <img src={logo} alt={alt} className="payFrikLogo"/>
        </Link>
      </div>
      <div className="searchbar">
        <input placeholder='Search'/>
      </div>
      <div className="menu">
            <div className="menu_item">
                <div className="menu_icon">
                <FaWallet/>
                </div>
                <div className="menu_text">
                    <a href="#">Wallet</a>
                </div>
            </div>
            <div className="menu_item">
                <div className="menu_icon">
                <FaUserAlt/>
                </div>
                <div className="menu_text">
                    <a href="#">Account</a>
                </div>
            </div>
            
      </div>
    </div>
  )
}

export default Header
