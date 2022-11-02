import React from 'react';
import Header from '../../utils/header/Header';
import Sidebar from '../../utils/sidebar/Sidebar';
import Signup from '../signup/Signup';
import './BuyElectricity.css';

const BuyElectricity = () => {
  return (
    <div className='buy_electricity_main'>
      <Header/>
      <div className="sub_container">
        <Sidebar/>
        <Signup/>
      </div>
    </div>
  )
}

export default BuyElectricity
