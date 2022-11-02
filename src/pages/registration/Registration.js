import React from 'react';
import './Registration.css';
import RegStep1 from '../formcoms/RegStep1';
import RegStep2 from '../formcoms/RegStep2';
import { useState } from "react";

const Registration = () => {
    const [page, setPage] = useState(0);
    const componentList = [
        <RegStep1
        page={page}
        setPage={setPage}
        />,
        <RegStep2
        page={page}
        setPage={setPage}
        />
      ];
  return (
    <div>
        <div className="progress-bar"></div>       
        <div>{componentList[page]}</div>
    </div>
  )
}

export default Registration
