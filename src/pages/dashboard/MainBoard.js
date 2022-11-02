import React from 'react';
import './Dashboard.css';
import {Link } from "react-router-dom";

const MainBoard = ({utilities}) => {
  return (
    <div className='payAfrik_main_board'>
    <div className="board">
        {utilities.map(utility=>{
            return <Link to={utility.link}><div key={utility.id}className="box util">
                <div className="icon">
                    <img src={utility.icon} alt="image"/>
                </div>
                <div className="utility_name">
                    {utility.name}
                </div>
            </div>
            </Link>
        })} 
    </div>
    </div>
  )
}

export default MainBoard
