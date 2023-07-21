import React, { Component, useState, useEffect } from "react";
// import Signp from "./SignUp.css";
import { Link } from "react-router-dom";
import axios from "axios";
// import vector from "../Assets/Images/RegisterLoginUser/vector.png";
import bgm from "../Assets/Images/BuyerAdditionFlow/BuyerBg.png";
import "./BuyerDesign.css";

import Footer from "../Footer";
import CommonBtn from "../CommonButton";
import BackButton from "../CommonButtonBack";
import CommonHeader from "../CommonHeader";

function AddBuyer() {


  const [data, setData] = useState(null);

  const [formData, setFormData] = useState({
    email: "",
    full_name: "",
    pan_card: "",
    phone: "",
    status: "true",
  });

  const [formError, setFormError] = useState({
    email: "",
    phone: ""
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
      phone: "",
    };


    if (!formData.email) {
      setFormError({
        ...inputError,
        email: "Enter valid email address",
      });
      return;
    }

    if (formData.phone) {
      setFormError({
        ...inputError,
        phone: "Enter 10 Digit Mobile Number",
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
      <div className="startPage">
        <div className="">
          <div
            className="form"
            style={{
              borderRadius: "16px",
              marginTop: "10%",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${bgm})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
          >

          <CommonHeader title="Add Buyer" color="#1E0058"/>

            <form onSubmit={handleSubmit} className="login-form inner-background-add">


            <label htmlFor="full_name" className="fieldTitle">
                Buyer Name
              </label>
              <input
               className={"fieldInput-add"}
                type="text"
                id="full_name"
                value={formData.full_name}
                onChange={handleChange}
                name="full_name"
                required
              />

              <label htmlFor="email" className="fieldTitle">
                Buyer Email
              </label>
              <input
                className={"fieldInput-add"}
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                name="email"
                required
              />
              <p className="error-message">{formError.email}</p>

          


              <label htmlFor="phone" className="fieldTitle">
                Buyer mobile number
              </label>
              <input
              className={"fieldInput-add"}
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <label htmlFor="phone" className="fieldTitle">
               Pan Card Number
              </label>
              <input
              className={"fieldInput-add"}
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />

                <div style={{ display: "flex", flexDirection: "row" }}>
                    <BackButton title="Back" margin="" fontweight="bolder" />
                    <CommonBtn title="Submit" margin="50%" fontweight="bolder" color="#DAF0EE" bgColor="#3F007F" />
                    </div>
            {/* <CommonHeader /> */}
              
              <Footer />
            </form>
            <br />
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
}
export default AddBuyer;
