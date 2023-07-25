import React, { Component, useState, useEffect } from "react";
import Signp from "./SignUp.css";
import { Link } from "react-router-dom";
import axios from "axios";
import vector from "../Assets/Images/RegisterLoginUser/vector.png";
import bgm from "../Assets/Images/RegisterLoginUser/bg_img.png";
import background from "../Assets/Images/RegisterLoginUser/main_bg.png";

import Footer from "../Footer";
import CommonBtn from "../CommonButton";

function SignUp() {
  const [data, setData] = useState(null);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    inviteCode: "",
    phoneNumber: "",
    // status: "true",
  });

  const [formError, setFormError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //Validation

    let inputError = {
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
    };

    if (!formData.email && !formData.password) {
      setFormError({
        ...inputError,
        email: "Enter valid email address",
        password: "Password should not be empty",
      });
      return;
    }

    if (!formData.email) {
      setFormError({
        ...inputError,
        email: "Enter valid email address",
      });
      return;
    }

    if (formData.confirmPassword !== formData.password) {
      setFormError({
        ...inputError,
        confirmPassword: "Password and confirm password should be same",
      });
      return;
    }

    if (!formData.password) {
      setFormError({
        ...inputError,
        password: "Password should not be empty",
      });
      return;
    }

    setFormError(inputError);

    console.log("Submit Clicked");
    console.log(formData["phoneNumber"]);
    const phone = formData["phoneNumber"];

    axios
      .post("http://b8rhomes-api.ap-south-1.elasticbeanstalk.com:8080/user/signup", formData)
      .then((response) => {
        console.log(response.data);
        // do something with the response
        const token = response.data.token;
        const username = response.data.name;

        //set JWT token to local
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);

        // Get OTP
          axios
            .get(`https://2factor.in/API/V1/c68dfb13-f09f-11ed-addf-0200cd936042/SMS/+91.${phone}/AUTOGEN`, formData)
            .then((response) => {
              console.log(response.data);
              // do something with the response
              // const token = response.data.token;
            

              const OTP_SESSION = response.data.Details;
      
              // //set JWT token to local
              // localStorage.setItem("token", token);
              // localStorage.setItem("username", username);
      
              //set token to axios common header
              //  setAuthToken(token);
      
              alert("OTP has been send!");
              //redirect user to Dashboard
              window.location.href = `/ConfirmOTPAgent?sessionId=${OTP_SESSION}&phone=${phone}&username=${username}`;
            })
            .catch((error) => {
              console.log(error);
              // handle the error
            });
    


        //set token to axios common header
        //  setAuthToken(token);

        alert("You're Registerd!");
        //redirect user to Dashboard
        // window.location.href = "/FrontLogin";
      })
      .catch((error) => {
        console.log(error);
        // handle the error
      });

      //Handle Submit
  };

  return (
    <>
      <div className="startPage ">
        
          <div
            className="form"
            style={{
              borderRadius: "16px",
              marginTop: "10%",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${background})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
          >
            <form onSubmit={handleSubmit} className="login-form">
              <div className="header">
                <img src={bgm} height={163} alt="headImage" />
              </div>

              <div className="SignInContainer">
                <p className="para">Already a member?</p>

                <Link to="/FrontLogin">
                  {/* <button className="CommonnButton">
            Sign In
            <img className="vector" src={vector} alt="fireSpot" />
          </button> */}
                  <CommonBtn title="Sign In" margin="5%" fontweight="bolder"  color="#DAF0EE" />
                </Link>
              </div>

              <Link to="/FrontLogin">
                <p className="message">
                  New Here? <a href="#">Create new account</a>
                </p>
              </Link>

              <label htmlFor="email" className="label-email">
                Enter email-ID
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                name="email"
                required
              />
              <p className="error-message">{formError.email}</p>

              <label htmlFor="name" className="label-name">
                Enter your full name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                name="name"
                required
              />

              <label htmlFor="password" className="label-password">
                Enter password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                name="password"
                required
              />
              <p className="error-message">{formError.password}</p>

              <label htmlFor="confirmPassword" className="label-confirmPassword">
                Confirm password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                name="confirmPassword"
                required
              />
              <p className="error-message">{formError.confirmPassword}</p>

              <label htmlFor="inviteCode" className="label-inviteCode">
                Invitation Code
              </label>
              <input
                type="text"
                id="inviteCode"
                value={formData.inviteCode}
                onChange={handleChange}
                name="inviteCode"
              />

              <label htmlFor="phoneNumber" className="label-phoneNumber">
                Enter mobile number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />

              {/* <button className="CommonnButton button-create-account">
                Create Account
                <img className="vectorSignUp" src={vector} alt="fireSpot" />
              </button> */}

              <CommonBtn title="Send OTP" margin="25%" fontweight="bolder"  color="#DAF0EE" />
              
              <Footer />
            </form>
            <br />
          </div>
        </div>
    

      {/* </div> */}
    </>
  );
}
export default SignUp;
