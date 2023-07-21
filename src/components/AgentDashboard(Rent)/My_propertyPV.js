import React, { Component }  from 'react';
import Dashboardcss from '../Dashboard.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import UserLoginDetails from "../UserLoginDetails";
import homeDown from "../Assets/Images/AgentDashboard/homeDown.png";
import peopleDown from "../Assets/Images/AgentDashboard/peopleDown.png";
import Footer from "../Footer";
import vector from "../Assets/Images/AgentDashboard/vector.png"
import backgroundSecond from "../Assets/Images/AgentDashboard/other_bg.png";
import rentedOut from "../Assets/Images/AgentDashboard/rentedOut.png";
import sharedOut from "../Assets/Images/AgentDashboard/sharedOut.png";
import shortListed from "../Assets/Images/AgentDashboard/shortListed.png";
import yetShared from "../Assets/Images/AgentDashboard/yetShared.png";
import PVbackground from "../Assets/Images/AgentDashboard/Pvbackground.png";
import imgOne from "../Assets/Images/AgentDashboard/imgOne.png";
import checkP from "../Assets/Images/AgentDashboard/CheckP.png";
import noImg from "../Assets/Images/AgentDashboard/noImg.png";

import CommonHeader from "../CommonHeader";
import CommonBtn from "../CommonButton";
import CommonTopButton from "../CommonTopButton";


function My_propertyPV(){


    const token = localStorage.getItem("token");
    console.log(token);
    
    const handleSubmit = event => {
	event.preventDefault();
       localStorage.removeItem("token");
        alert("You have been logged out.");
	  };


    return(
        <>

        <div className="form" style={{ borderRadius: "16px", marginTop: "10%", backgroundRepeat: 'no-repeat' , backgroundImage: `url(${PVbackground})`, backgroundRepeat: 'no-repeat' , backgroundSize : '100% 100%'}}>
            {/* <h2 style={{color:"#52796F"}}>My Properties</h2> */}
            <CommonHeader title="My Properties" color="#52796F" />
        

            
            {/* -------------------------------button---------------------------------------------- */}
            <div>

           
            <CommonTopButton
              bgColor= "#52796F"
              borderColor= "#DAF0EE"
              color="#DAF0EE"
               text="Pending Verification"
        //        onclicked={handlePageAvailable}
            />
              <Link to="/My_PropertyYTS"><CommonTopButton
              bgColor= "#D2D7D6"
              borderColor= "#DAF0EE"
              color="#77A8A4"
               text="Yet to Share "
        //        onclicked={handlePageAvailable}
            /></Link>
             </div>
             <div style={{marginTop:"10px"}}>
             <Link to="/My_PropertyS"><CommonTopButton
              bgColor= "#D2D7D6"
              borderColor= "#DAF0EE"
              color="#77A8A4"
               text="Shortlisted"
        //        onclicked={handlePageAvailable}
            /></Link>
              <Link to="/My_PropertySNA"> 
              <CommonTopButton
              bgColor= "#D2D7D6"
              borderColor= "#DAF0EE"
              color="#77A8A4"
               text="Shared, No Action "
        //        onclicked={handlePageAvailable}
            /></Link>

             </div>
        {/* -------------------------------button---------------------------------------------- */}
       
         {/* BODY */}
         <div style={{textAlign:"left",marginTop:"40px"}}>
            <text>
                Hey Yash,<br/>Properties shown here are <b>NOT VERIFIED</b>. Correct wherever necessary to get them ready to share
            </text>
         </div>
         {/* --------------------------------------first tab-------------------------------------------- */}
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" ,marginTop:"10px"}}>
                {/* left side */}
            <div style={{height:"78px",width:"302px",background:"#FFFFFF",border:"1px solid #DAF0EE",borderRadius:"15px",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)", display:"flex"}}>
                    {/* img */}
                    <div>
                            <img src={imgOne} alt="imgOne" style={{marginLeft:"10px", marginTop:"10px"}}/>
                    </div>
                    <div style={{marginTop:"10px"}}>
                            <text style={{fontSize:"13px"}}>904, Central Park Homes</text>

                            <div style={{width:"150px",height:"25px",background:"#FFEEDB",borderRadius:"10px",marginTop:"20px",marginLeft:"10px"}}>
                                    <text style={{fontSize:"12px",color:"#BA7B28",marginLeft:"-50px",fontFamily:"Inter",fontStyle:"normal",fontWeight:"bold"}}>Incorrect Info</text>
                            </div>

                    </div>
            </div>
            {/* right side */}
            <div style={{height:"75px",width:"52px",background:"#E8E7E7",borderRadius:"10px",marginLeft:"10px"}}> 

            <img src={checkP} style={{height:"27px",marginTop:"20px",marginBottom:"-8px"}}/>
            <text style={{fontSize:"12px",color:"#5D6560",fontWeight:"bold"}}>Check</text>
                
            </div>
               

               
               
       
        {/* --------------------------------------first tab-------------------------------------------- */}
         
               

               
               
        </div>
         {/* --------------------------------------Second tab-------------------------------------------- */}
        

            <Footer/>
        </div>
        </>
    );
}
export default My_propertyPV;