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
    full_name: "",
    password: "",
    c_password: "",
    icode: "",
    phone: "",
    status: "true",
  });

  const [formError, setFormError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    // phone: ""
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
      c_password: "",
      phone: "",
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

    if (formData.c_password !== formData.password) {
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

    axios
      .post("http://localhost:5000/backend/posts/", formData)
      .then((response) => {
        console.log(response.data);
        // do something with the response
        const token = response.data.token;
        const username = response.data.name;

        //set JWT token to local
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);

        //set token to axios common header
        //  setAuthToken(token);

        alert("You're Registerd!");
        //redirect user to Dashboard
        window.location.href = "/FrontLogin";
      })
      .catch((error) => {
        console.log(error);
        // handle the error
      });
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

              <label htmlFor="full_name" className="label-full-name">
                Enter your full name
              </label>
              <input
                type="text"
                id="full_name"
                value={formData.full_name}
                onChange={handleChange}
                name="full_name"
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

              <label htmlFor="c_password" className="label-confirm-password">
                Confirm password
              </label>
              <input
                type="password"
                id="c_password"
                value={formData.c_password}
                onChange={handleChange}
                name="c_password"
                required
              />
              <p className="error-message">{formError.c_password}</p>

              <label htmlFor="icode" className="label-invitation-code">
                Invitation Code
              </label>
              <input
                type="text"
                id="icode"
                value={formData.registration_number}
                onChange={handleChange}
                name="icode"
              />

              <label htmlFor="phone" className="label-phone">
                Enter mobile number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
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
