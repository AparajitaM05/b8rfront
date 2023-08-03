import React, { Component }  from 'react';
import './DashboardS.css';
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
import PVbackground from "../Assets/Images/Sale/AllPropertyBg.png";
import imgOne from "../Assets/Images/AgentDashboard/imgOne.png";
import checkP from "../Assets/Images/AgentDashboard/CheckP.png";
import noImg from "../Assets/Images/AgentDashboard/noImg.png";
import like from "../Assets/Images/AgentDashboard/Like.png";
import CommonHeader from "../CommonHeader";
import CommonBtn from "../CommonButton";
import CommonTopButton from "../CommonTopButton";
import ListingComp2 from "./ListingComp2";


function My_PropertySS(){


    const token = localStorage.getItem("token");
    console.log(token);
    
    const handleSubmit = event => {
	event.preventDefault();
       localStorage.removeItem("token");
			alert("You have been logged out.");
	  };


    return(
        <>

        <div className="form" style={{ borderRadius: "16px", marginTop: "10%", backgroundRepeat: 'no-repeat' , backgroundImage: `url(${PVbackground})`, backgroundRepeat: 'no-repeat' , backgroundSize : '100% 100%',height:"850px"}}>
            {/* <h2 style={{color:"#52796F"}}>My Properties</h2> */}
            <CommonHeader title="Sale Properties" color= "#1E0058" />
        

            
            {/* -------------------------------button---------------------------------------------- */}
            <div>

           
            <Link to="/My_PropertyPVS"><CommonTopButton
  bgColor= "#F5F5F5"
  borderColor= "#B3A8C8"
  color="#B3A8C8"
   text="Pending Verification"
//        onclicked={handlePageAvailable}
/></Link>
  <Link to="/My_PropertyYTSS"><CommonTopButton
  bgColor= "#F5F5F5"
  borderColor= "#B3A8C8"
  color="#B3A8C8"
   text="Yet to Share "
//        onclicked={handlePageAvailable}
/></Link>
 </div>
 <div style={{marginTop:"10px"}}>
 <Link to="/My_PropertySS"><CommonTopButton
  bgColor= "#1E0058"
  borderColor= "#F5F5F5"
  color="#DAF0EE"
   text="Shortlisted"
//        onclicked={handlePageAvailable}
/></Link>
   <Link to="/MyPropSNAS"><CommonTopButton
  bgColor= "#F5F5F5"
  borderColor= "#B3A8C8"
  color="#B3A8C8"
   text="Shared, No Action "
//        onclicked={handlePageAvailable}
/></Link>

 </div>
        {/* -------------------------------button---------------------------------------------- */}
       
         {/* BODY */}
         <div style={{textAlign:"left",marginTop:"40px"}}>
            <text>
                Hey Yash,<br/>Awesome news, <b>1 Properties are shortlisted by Tenant</b>.
            </text>
         </div>


         {/* --------------------------------------first tab-------------------------------------------- */}
         <ListingComp2 img={imgOne} title="1018, Tower 1,Prestige Shantiniketan" number="4"/>
         <ListingComp2 img={imgOne} title="1018, Tower 1,Prestige Shantiniketan" number="2"/>
      
            
               

               
               
       
        {/* --------------------------------------first tab-------------------------------------------- */}
        
        
        <div style={{marginTop:"310px"}}></div>

            <Footer/>
        </div>
        </>
    );
}
export default My_PropertySS;