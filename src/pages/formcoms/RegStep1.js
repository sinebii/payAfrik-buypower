import axios, { Axios } from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './RegSteps.css';
import Header from '../../utils/header/Header';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const RegStep1 = ({page, setPage}) => {

    const initialValues = {fullname:"", phoneNumber:"", email:"", password:"", confirmpassword:""};
    const [formValues, setFormValues]= useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit]=useState(false);
    const [loading, setLoading]=useState("");

    const handleChange=(e)=>{ 
        const {name, value}=e.target;
        setFormValues({...formValues, [name]:value})
        // console.log(formValues);
    }
    const handleNextbtn= (e)=>{
        e.preventDefault();
        setFormErrors(validateForm(formValues));
        //   setPage(page + 1);
            setIsSubmit(true);
        
    }

    const validateForm=(values)=>{

        const errors ={};
        const regex = "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$";
        if(!values.fullname) errors.fullname = "Full name is invalid";
        if(!values.phoneNumber) errors.phoneNumber = "Invalid Phone Number";
        if(!values.email) {
            errors.email = "Email is required or invalid";
        }
        if(!values.password){
            errors.password = "Password is required";
        }else if(values.password.length <= 6){
            errors.password = "Password is too short";
        };
        if(values.password !== values.confirmpassword) errors.password="Passwords do not match";
        return errors;
    }

    useEffect(()=>{
        
        if(Object.keys(formErrors).length===0 && isSubmit){
            setLoading("Loading.....");
            let userInfo;
        
            userInfo = {
                name: formValues.fullname,
                phone:formValues.phoneNumber,
                email:formValues.email,
                password:formValues.password,
                accountType:"USER"
            }
            // saveToStorage(userInfo);
            axios.post('https://apiv2.payafrik.io/users', userInfo)
            .then((res) => {
                console.log("This is the output "+res.data)
            }).catch((error) => {
                console.log(error);
            });
            setTimeout(()=>{
                setPage(page + 1);
                setLoading("");
                
            },3000)
            
        }
    });

    const getFromStorage=()=>{
                let users;

            // if something exist on storage then we get the value, otherwise create an empty array
            if(localStorage.getItem('users') === null) {
                users = [];
            } else {
                users = JSON.parse(localStorage.getItem('users') );
            }
            console.log(users);
            return users;
    }

    const saveToStorage =(user)=>{
        let users = getFromStorage();

     // add the course into the array
        users.push(user);

     // since storage only saves strings, we need to convert JSON into String
     localStorage.setItem('users', JSON.stringify(users) );
    }
  return (
    <div className='payAfrik_signup_container'>
      <Header/>
      <div className="payAfrik_mainRegistration_container">
        <div className="create_account_header">
            <h1>Create an Account</h1>
            <p>Please create an account</p>
        </div>
        <div className="create_account_form">
            <form autoComplete='off'>
                <div className="formControl">
                    <label htmlFor='fullname'></label>
                    <input type="text" 
                    name="fullname" 
                    id="" 
                    placeholder='Name' 
                    value={formValues.fullname}
                    onChange={handleChange}/>
                    <p>{formErrors.fullname}</p>
                </div>
                
                <div className="formControl">
                    <label htmlFor='phone'></label>
                    <input type="text" 
                    name="phoneNumber" 
                    id="" 
                    placeholder='Phone Number' 
                    value={formValues.phoneNumber}
                    onChange={handleChange}/>
                    <p>{formErrors.phoneNumber}</p>
                </div>
                
                <div className="formControl">
                    <label htmlFor='email'></label>
                    <input type="email" 
                    name="email" 
                    id="" 
                    placeholder='Enter Email' 
                    value={formValues.email}
                    onChange={handleChange}/>
                    <p>{formErrors.email}</p>
                </div>
                
                <div className="formControl">
                    <label htmlFor='email'></label>
                    <input type="password" 
                    autoComplete='new-password'
                    name="password" 
                    id="" 
                    placeholder='Password' 
                    value={formValues.password}
                    onChange={handleChange}/>
                    <p>{formErrors.password}</p>
                </div>
                
                <div className="formControl">
                    <label htmlFor='confirmpassword'></label>
                    <input type="password" 
                    autoComplete='off'
                    name="confirmpassword" 
                    id="" 
                    placeholder='Confirm Password' 
                    value={formValues.confirmpassword}
                    onChange={handleChange}
                    />
                    <p>{formErrors.confirmpassword}</p>
                </div>
                
                <div className="formControl">
                    <button className='regBtn'
                    onClick={handleNextbtn}><FaArrowRight/> Next</button>
                </div>
            </form>
            {loading}
        </div>
        <div className="login_link">
            <p>Already registered? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default RegStep1
