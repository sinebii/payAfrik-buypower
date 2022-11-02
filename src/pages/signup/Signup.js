import React from 'react';
import './Signup.css';
import { useState } from 'react';
import Step1 from '../formcoms/Step1';
import Step2 from '../formcoms/Step2';
import Step3 from '../formcoms/Step3';
import Step4 from '../formcoms/Step4';

const Signup = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        username: "",
        password: "",
        nickname: "",
        email: "",
        address: "",
        nationality: "",
        zipcode: "",
        highestQualification: "", 
        occupation: "",
        about: "",
      });
    const [page, setPage] = useState(0);
    const componentList = [
        <Step1
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
        />,
        <Step2
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
        />,
        <Step3 
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
        />,
        <Step4
        formData={formData}
        setFormData={setFormData}
            page={page}
            setPage={setPage}
        />,
      ];

  return (
    <div className="signup">
      <div className="progress-bar">
        <div style={{width: 
            page === 0? "25%":
            page === 1? "50%":
            page === 2? "75%":
        "100%"}}>
        </div>
      </div>
      <div>{componentList[page]}</div>
    </div>
  )
}

export default Signup
