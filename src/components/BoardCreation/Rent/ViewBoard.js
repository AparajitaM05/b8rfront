import React from "react";
import backgroundImg from "../../Assets/Images/BoardCreation/BackgroundBoard.png";
import CommonHeader from "../../CommonHeader";
import CommonBtn from "../../CommonButton";
import CommonTopButton from '../../CommonTopButton';
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import axios from 'axios';
import deactivateImg from "../../Assets/Deactivate.png";

function ViewBoard()
{
    return(
        <>
         <div
        className="form"
        style={{
          borderRadius: "16px",
          marginTop: "10%",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${backgroundImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <CommonHeader title="View Board"/>
        <img src={deactivateImg} style={{marginTop:"100px"}}/>

        <Footer/>
        </div>
        </>
        
    );


}
export default ViewBoard;