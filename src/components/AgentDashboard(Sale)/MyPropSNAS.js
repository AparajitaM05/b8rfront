import React, { Component }  from 'react';
import  './DashboardS.css';
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
import CommonHeader from "../CommonHeader";
import CommonBtn from "../CommonButton";
import CommonTopButton from "../CommonTopButton";
import Listing3 from "./ListingComp3";
import ListingComp from './ListingComp';


function MyPropSNAS(){


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
            <CommonHeader  title="Sale Properties" color= "#1E0058" />
        

            
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
  bgColor= "#F5F5F5"
  borderColor= "#B3A8C8"
  color="#B3A8C8"
   text="Shortlisted"
//        onclicked={handlePageAvailable}
/></Link>
   <Link to="/MyPropSNAS"><CommonTopButton
  bgColor= "#1E0058"
  borderColor= "#F5F5F5"
  color="#DAF0EE"
   text="Shared, No Action "
//        onclicked={handlePageAvailable}
/></Link>

 </div>

        {/* -------------------------------button---------------------------------------------- */}
       
         {/* BODY */}
         <div style={{textAlign:"left",marginTop:"40px"}}>
            <p>Hey Yash, <br/>

                Properties shown here are ready to be <b>rented out</b> & but are not yet shared with any tenant </p>
         </div>
        
        
         
       
       
            
         <ListingComp  img={imgOne} title="xxx_1, Tower Y Society ZZZZZZ" snum="2" vnum="4" />

         
               
              
               
        
         
        

            <Footer/>
        </div>
        </>
    );
}
export default MyPropSNAS;