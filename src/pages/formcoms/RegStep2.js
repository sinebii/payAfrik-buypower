import React from 'react'
import { useState } from 'react';
import OTPInput, { ResendOTP } from "otp-input-react";

const RegStep2 = () => {
    const [OTP, setOTP] = useState("");
    const handleChange = (e)=>{
        console.log("Hello "+OTP);
    }
  return (
    <div className='step2'>
        <div className="main_otp">
          <h1>Enter OTP</h1>
          <p>Please enter the OTP that was sent email and phone number</p>
          <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} secure inputClassName="otp_key"/>
          {/* <ResendOTP onResendClick={() => console.log(OTP)} /> */}
          <button onClick={handleChange}>Confirm</button>
        </div>
      
    </div>
  )
}

export default RegStep2
