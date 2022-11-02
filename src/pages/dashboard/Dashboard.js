import React from 'react';
import './Dashboard.css';
import Header from '../../utils/header/Header';
import { utilities } from '../../utils/Data';
import MainBoard from './MainBoard';


const Dasboard = () => {
  return (
    <>
    <Header/>
    <MainBoard utilities={utilities}/>

    </>
  )
}

export default Dasboard
