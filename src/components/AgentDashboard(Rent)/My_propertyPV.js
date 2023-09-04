import React, { Component, useState, useEffect } from "react";

import Dashboardcss from "../Dashboard.css";
import { Link } from "react-router-dom";
import axios from "axios";
import UserLoginDetails from "../UserLoginDetails";
import homeDown from "../Assets/Images/AgentDashboard/homeDown.png";
import peopleDown from "../Assets/Images/AgentDashboard/peopleDown.png";
import Footer from "../Footer";
import vector from "../Assets/Images/AgentDashboard/vector.png";
import backgroundSecond from "../Assets/Images/AgentDashboard/other_bg.png";
import rentedOut from "../Assets/Images/AgentDashboard/rentedOut.png";
import sharedOut from "../Assets/Images/AgentDashboard/sharedOut.png";
import shortListed from "../Assets/Images/AgentDashboard/shortListed.png";
import yetShared from "../Assets/Images/AgentDashboard/yetShared.png";
import PVbackground from "../Assets/Images/AgentDashboard/Pvbackground.png";
import imgOne from "../Assets/Images/AgentDashboard/imgOne.png";
import checkP from "../Assets/Images/AgentDashboard/CheckP.png";
import noImg from "../Assets/Images/AgentDashboard/noImg.png";
import AllPropertiesComp from "./AllPropertiesComp";
import CommonHeader from "../CommonHeader";
import CommonBtn from "../CommonButton";
import CommonTopButton from "../CommonTopButton";

function My_propertyPV() {
  const [loading, setLoading] = useState(false);
  const [responseTenat, setresponseTenat] = useState();
  const [fieldAgentStatus, setFieldAgentStatus] = useState("Pending"); // Default status
  const [imagesApproved, setimagesApproved] = useState("Pending"); // Default status

  const token = localStorage.getItem("token");
//   console.log(token);

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Basic ${token}`,
    },
  };
  useEffect(() => {
    // event.preventDefault();
    const fetchPosts = async () => {
      setLoading(true);
      axios
        .get(
          `https://b8rliving.com/property?fieldAgentStatus=${fieldAgentStatus}&imagesApproved=${imagesApproved}`,
          axiosConfig
        )
        .then((response) => {
          console.log(response.data.data);
          // var myArrayPropertyCount = response.data.data.properties;
          setresponseTenat(response.data.data);
          // console.log(myArrayPropertyCount.length);

          // if(response.data.data.properties.propertyInfo.purposeRent==true){
          // }

          // alert("Your data has been submitted");
          // do something with the response
        })
        .catch((error) => {
          console.log(error);
          // handle the error
        });
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    alert("You have been logged out.");
  };

  const username = localStorage.getItem("username");
  const name = username.substring(0, username.indexOf(" "));


  // Function to update both fieldAgentStatus and imagesApproved
  const updateFilterConditions = (newStatus, newImagesApproved) => {
    setFieldAgentStatus(newStatus);
    setimagesApproved(newImagesApproved);
  };



  return (
    <>
      <div
        className="form"
        style={{
          borderRadius: "16px",
          marginTop: "10%",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${PVbackground})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        {/* <h2 style={{color:"#52796F"}}>My Properties</h2> */}
        <CommonHeader title="My Properties" color="#52796F" />

        {/* -------------------------------button---------------------------------------------- */}
        <div>
          <CommonTopButton
            bgColor="#52796F"
            borderColor="#DAF0EE"
            color="#DAF0EE"
            text="Pending Verification"
            onClick={() => updateFilterConditions('Pending', false)}
            //        onclicked={handlePageAvailable}
          />
          <Link to="/My_PropertyYTS">
            <CommonTopButton
              bgColor="#D2D7D6"
              borderColor="#DAF0EE"
              color="#77A8A4"
              text="Yet to Share "
              onClick={() => updateFilterConditions('Completed', true)}
            />
          </Link>
        </div>
        <div style={{ marginTop: "10px" }}>
          <Link to="/My_PropertyS">
            <CommonTopButton
              bgColor="#D2D7D6"
              borderColor="#DAF0EE"
              color="#77A8A4"
              text="Shortlisted"
            //   onClick={() => updateFieldAgentStatus('verified')}
            />
          </Link>
          <Link to="/My_PropertySNA">
            <CommonTopButton
              bgColor="#D2D7D6"
              borderColor="#DAF0EE"
              color="#77A8A4"
              text="Shared, No Action "
            //   onClick={() => updateFieldAgentStatus('verified')}
            />
          </Link>
        </div>
        {/* -------------------------------button---------------------------------------------- */}

        {/* BODY */}
        <div style={{ textAlign: "left", marginTop: "40px" }}>
          <text>
            Hey {name},<br />
            Properties shown here are <b>NOT VERIFIED</b>. Correct wherever
            necessary to get them ready to share
          </text>
        </div>
        {/* --------------------------------------first tab-------------------------------------------- */}
        <AllPropertiesComp />
        {/* --------------------------------------Second tab-------------------------------------------- */}

        <Footer />
      </div>
    </>
  );
}
export default My_propertyPV;
