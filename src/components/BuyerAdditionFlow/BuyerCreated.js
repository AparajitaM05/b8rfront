import React, { Component, useState, useEffect } from "react";
// import Signp from "./SignUp.css";
import { Link } from "react-router-dom";
import axios from "axios";
// import vector from "../Assets/Images/RegisterLoginUser/vector.png";
import bgm from "../Assets/Images/BuyerAdditionFlow/BuyerBg.png";
import "./BuyerDesign.css";

import Footer from "../Footer";
import CommonBtn from "../CommonButton";
import CommonHeader from "../CommonHeader";
import greenTick from "../Assets/Images/greenTick.png";

function BuyerCreated() {



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

          <CommonHeader title="Buyer Created" color="#1E0058"/>

            <form  className="login-form inner-background-add">
            <h2 style={{color:"#1E0058"}}>Buyer Created</h2>

            <div  style={{marginTop:"40px"}}>
                <img src={greenTick} style={{borderRadius:"65px"}}/>
                <h4 style={{fontWeight:"lighter"}}>Buyer Added</h4>
            </div>

            {/* -----------for name----------- */}
            <div style={{marginTop:"70px"}}>
            <h4 style={{fontWeight:"lighter",textDecoration:"underline"}}>Name</h4>
            <h2 style={{color:"#1E0058",fontWeight:"bolder"}}>Buyer Name</h2>
            </div>

             {/* -----------budget details----------- */}
             <div  style={{marginTop:"40px"}}>
             <h4 style={{fontWeight:"lighter",textDecoration:"underline"}}>Budget Details</h4>
             <h2 style={{color:"#1E0058",fontWeight:"bolder"}}>2 Cr</h2>
             </div>


            <CommonBtn title="Go to Agent Dashboard" margin="11%" fontweight="bolder"  color="#DAF0EE" bgColor="#3F007F" />
      
              
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
export default BuyerCreated;
