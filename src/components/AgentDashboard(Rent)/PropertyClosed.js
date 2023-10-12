import React from "react";
import CommonHeader from "../CommonHeader";
import CommonBtn from "../CommonButton";
import CommonTopButton from '../CommonTopButton';
import Footer from "../Footer";
import { Link } from "react-router-dom";
import axios from 'axios';
import backgroundSecond from "../Assets/Images/other_bg.png";
import PropertyClosedimg from "../Assets/Images/PropertyClosed/PropertyImg.png";

function PropertyClosed()
{
    return(
        <>
         <div
        className="form"
        style={{
          borderRadius: "16px",
          marginTop: "10%",
        
        }}
      >
       
        <CommonHeader title="Property CLosed" color="#52796F" />
        <img src={PropertyClosedimg} style={{height:"150px", borderRadius:"10px"}}/>
        <CommonBtn title="Go to Agent Dashboard" margin="50px"/>
        <Footer/>
        </div>
        </>
        
    );

}
export default PropertyClosed;