import React from 'react';
import './Sidebar.css';
import { utilities } from '../Data';
import {Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
        
      {utilities.map(utility=>{
        return <div key={utility.id}className="sidebar_item">
            <div className="icon2">
                <img src={utility.icon} alt={utility.name}/>
            </div>
            <div className="item_name">
                {utility.name}
            </div>
        </div>
      })}
    </div>
  )
}

export default Sidebar
