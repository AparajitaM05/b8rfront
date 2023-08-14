import React, { Component }  from 'react';
import Dashboardcss from '../Dashboard.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import UserLoginDetails from "../UserLoginDetails";
import homeDown from "../Assets/Images/FieldAgent/homeDown.png";
import peopleDown from "../Assets/Images/FieldAgent/peopleDown.png";
import Footer from "../Footer";
import vector from "../vector.png"
// import backgroundSecond from "../Assets/Images/AgentDashboard/other_bg.png";
import backgroundSecond from "../Assets/Images/RegisterLoginUser/other_bg.png";
import fieldAgent from "../Assets/Images/FieldAgent/FieldAgent.png";
import DashComponent from "./DashComponent";
import rentedOut from "../Assets/Images/FieldAgent/rentedOut.png";
import sharedOut from "../Assets/Images/FieldAgent/sharedOut.png";
import shortListed from "../Assets/Images/FieldAgent/shortListed.png";
import yetShared from "../Assets/Images/FieldAgent/yetShared.png";
import ActiveListing from "../Assets/Images/AgentDashboard/ActiveListing.png";
// import YashImg from "./Yash.png";
import House from "../Assets/Images/FieldAgent/House.png";
import pending from "../Assets/Images/FieldAgent/Group 51 (1).png";
import done from "../Assets/Images/FieldAgent/Group 54.png";
import BackButton from "../CommonButtonBack";
import CommonHeader from "../CommonHeader";
import CommonBtn from "../CommonButton";
import CommonTopButton from "../CommonTopButton";



function FieldAgentHomeN(){


    const token = localStorage.getItem("token");
    console.log(token);
    
    const handleSubmit = event => {
	event.preventDefault();
       localStorage.removeItem("token");
			alert("You have been logged out.");
	  };


    return(
        <>

        <div className="form" style={{ borderRadius: "16px", marginTop: "10%", backgroundRepeat: 'no-repeat' , backgroundImage: `url(${backgroundSecond})`, backgroundRepeat: 'no-repeat' , backgroundSize : '100% 100%',  width: "100%"}}>
            {/* <h2 style={{color:"#52796F"}}> Field Agent Home</h2> */}
            <CommonHeader title="Field Agent Home" color="#52796F"/>
        <div className="containered form" style={{height:"90px", borderRadius:"15px",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
            <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            
                {/* for title and text */}
                <div style={{textAlign:"left"}}>

                
                <label>Hey <b>Yash,</b></label><br/>
                <h5 style={{fontWeight:"lighter"}}>Please Complete all the properties at the earliest</h5>
                </div>
                <div>

                </div>
            </div>
            
        </div>
         {/* BODY */}
                    {/* for icon */}
                    <div>
                        <img  src={House} style={{height:"50px",borderRadius:"25px 25px 25px 25px"}}/>
                    </div>
                

                
                 {/* <img src={pending}/> */}
                 <div>

                 
                 <DashComponent img={fieldAgent} title="Properties" number="10"/>
                 </div>
                 <div style={{position:"absolute"}}>

                
                <CommonBtn title="Check & Complete" margin="70px" />
                </div>
               <div style={{ margin: "25% 0"}}>
                <DashComponent img={ActiveListing} title="Properties" number="10"/>
                </div>
               
                {/* <img src={done} style={{marginTop:"70px"}}/> */}

            

        

            <Footer/>
        </div>
        </>
    );
}
export default FieldAgentHomeN;