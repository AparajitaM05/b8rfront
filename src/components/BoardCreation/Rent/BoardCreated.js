import React from "react";

import backgroundImg from "../../Assets/Images/BoardCreation/BackgroundBoard.png";
import CommonHeader from "../../CommonHeader";
import CommonBtn from "../../CommonButton";
import CommonTopButton from '../../CommonTopButton';
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import axios from 'axios';

function BoardCreated()
{
    return(
        <>
         <div
        className="form"
        style={{
          borderRadius: "16px",
          marginTop: "10%",
          height:"740px"
         
        }}
      >
        <CommonHeader title="Board Created"/>
        <div >
          <div>
            <p>Added to the Board</p>
            <p>Tenant Name</p>
            <p>Log-in Mobile Number</p>
          </div>
        <CommonBtn title="Preview Board" margin="90px"/>

        </div>
       <div style={{marginTop:"70px"}}>

       
        <Link to="/OTPscreen"><CommonBtn title="Share Link with" margin="90px"/></Link>
        </div>

        <div style={{marginTop:"460px"}}>
        <Footer/>

        </div>
        
        </div>
        </>
        
    );



}
export default BoardCreated;