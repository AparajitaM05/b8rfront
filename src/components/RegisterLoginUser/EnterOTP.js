import React, { Component, useState, useEffect } from "react";
import "./UserLoginDetails.css";
import "./EnterOTP.css";
import { Link } from "react-router-dom";
import axios from "axios";
import vector from "../Assets/Images/RegisterLoginUser/vector.png";
import Footer from "../Footer";
import backgroundthird from "../Assets/Images/RegisterLoginUser/other_bg.png";
import CommonBtn from "../CommonButton";
import BackButton from "../CommonButtonBack";
import logo from "../Assets/Images/Logo.png";

function EnterOTP(props) {
  const queryParameters = new URLSearchParams(window.location.search);
  const OTP_SESSION = queryParameters.get("sessionId");
  const phone = queryParameters.get("phone");

  const [formData, setFormData] = useState({
    enter_otp: "",
    password: "",
    c_password: "",
    phone: phone,
  });

  const [timer, setTimer] = useState(60); // Initial timer value of 60 seconds

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData["enter_otp"]);
    const enter_otp = formData["enter_otp"];

    console.log(
      `https://2factor.in/API/V1/c68dfb13-f09f-11ed-addf-0200cd936042/SMS/VERIFY/${OTP_SESSION}/${enter_otp}`
    );
    try {
      axios
        .get(
          `https://2factor.in/API/V1/c68dfb13-f09f-11ed-addf-0200cd936042/SMS/VERIFY/${OTP_SESSION}/${enter_otp}`,
          formData
        )
        .then((response) => {
          console.log(response.data);
          alert(response.data);
          const OTP_CHECK = response.data.Details;
          alert(OTP_CHECK);
          console.log(OTP_CHECK);

          axios
            .put("http://localhost:5000/backend/updatepassword", formData)
            .then((response) => {
              console.log(response.data);
              alert(response.data);

              alert("Your Password has been Updated!");
            })
            .catch((error) => {
              console.log(error);
            });

          window.location.href = "/FrontLogin";
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log("ASYNC ERROR:", error);
    }
  };

  return (
    <>
      <div className="startPage login-page">
        <div className="login-page">
          <div
            className="form"
            style={{
              borderRadius: "16px",
              marginTop: "10%",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${backgroundthird})`,
              backgroundSize: "100% 100%",
            }}
          >
            <div className="MainLogoDesign">
              <Link to="/dashboard">
                <img src={logo} height={40} alt="fireSpot" />
              </Link>
            </div>
            <form onSubmit={handleSubmit} className="login-form">
              <h3 className="Htitle">Reset Password</h3>

              <label htmlFor="enter_otp" className="form-label">
                Enter OTP (Check Phone)
              </label>
              <input
                type="text"
                id="enter_otp"
                value={formData.enter_otp}
                onChange={handleChange}
                name="enter_otp"
                required
              />
              <p
                style={{
                  marginTop: "-9px",
                  marginRight: "-230px",
                  fontSize: "10px",
                }}
              >
                <b>
                  <u>Resend OTP? ({timer}s)</u>
                </b>
              </p>

              <label htmlFor="password" className="form-label">
                Enter New Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                name="password"
                required
              />

              <label htmlFor="c_password" className="form-label">
                Confirm New Password
              </label>
              <input
                type="password"
                id="c_password"
                value={formData.c_password}
                onChange={handleChange}
                name="c_password"
                required
              />

              <div style={{ display: "flex", flexDirection: "row" }}>
                <BackButton title="Back" margin="" fontweight="bolder" />
                <CommonBtn
                  title="Set Password"
                  margin="40%"
                  fontweight="bolder"
                />
              </div>

              <Footer />
            </form>

            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default EnterOTP;
