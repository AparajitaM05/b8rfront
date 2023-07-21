import React, { useState } from "react";
import TenantSideBack from "../Assets/Images/TenantSideView/TenantSideBack.png";
import bgm from "../Assets/Images/TenantSideView/TenantSideImg.png";
import Footer from "../Footer";
import CommonBtn from "../CommonButton";
import style from "./OtpScreen.css";

function OTPscreen() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOTP] = useState("");

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleOTPChange = (e) => {
    setOTP(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the mobileNumber and otp values here
    console.log("Mobile Number:", mobileNumber);
    console.log("OTP:", otp);
  };

  return (
    <div className="startPage">
      <div
        className="form"
        style={{
          borderRadius: "16px",
          marginTop: "10%",
          backgroundImage: `url(${TenantSideBack})`,
          backgroundSize: "100% 100%",
        }}
      >
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="header">
            <img src={bgm} height={163} alt="headImage" />
          </div>

          <div className="TenantSideF">
            <p className="titleF"><b>
              Welcome to betterhomes
              </b>
            </p>
            <br />
            <p style={{textAlign:"left",marginLeft:"10px",marginRight:"10px"}}>
              Your agent has shared 4 awesome properties. <br />


              Log in using xxxxx 25921, mobile number to view details
            </p>
          </div>

          <div>
            <label className="Inputfield" htmlFor="mobileNumber">Enter Mobile Number</label>
            <input
              type="text"
              id="mobileNumber"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              style={{height:"40px",width:"311px",borderColor:"#52796F",border:"3px"}} 
            />
            <CommonBtn title="Send OTP" margin="25%" fontweight="bolder" color="#DAF0EE" />
          </div>
          

          <div className="SpaceAbove" >
            <label className="Inputfield" htmlFor="otp">Enter OTP</label>
            <input 
            className="InputF" 
            type="text" 
            id="otp" 
            value={otp} 
            onChange={handleOTPChange} 
            style={{height:"40px",width:"311px",borderColor:"#52796F",border:"3px"}}/>
            <CommonBtn title="Confirm OTP" margin="25%" fontweight="bolder" color="#DAF0EE" />
          </div>

         

          <Footer />
        </form>
        <br />
      </div>
    </div>
  );
}

export default OTPscreen;
