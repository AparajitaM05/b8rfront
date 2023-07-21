
import React, { useEffect, useRef, useState } from 'react';
import Dashboardcss from '../Dashboard.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from "../Footer";
import CommonBtn from "../CommonButton";
import logo from "../Assets/Images/Logo.png";
import DetailImg1 from "../Assets/Images/TenantSideView/DetailImgV1.png";
import DetailImg2 from "../Assets/Images/TenantSideView/DetailsImgV2.png";

import DetailImg3 from "../Assets/Images/TenantSideView/DetailImgV3.png";
import DetailImg4 from "../Assets/Images/TenantSideView/DeatilImgV4.png";
import DetailView2 from "../Assets/Images/TenantSideView/DetailView2.png";
import DetailView3 from "../Assets/Images/TenantSideView/DetailView3.png";
import Heart from "react-animated-heart";
import "./OtpScreen.css";


function DetailImgView()
{
  const [isClick, setClick] = useState(false);
    return(
        <>
    
      <div
        className="form"
        style={{
          borderRadius: '9px',
          marginTop: '10%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        }}
      >
        <div
        //   className="containered form"
        //   style={{
        //     height: '300px',
        //     borderRadius: '5px',
        //     boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        //     background: '#DAF0EE',
        //   }}
        >

          <img
            src={DetailImg1}
            alt="Tenant"
            height={289}
            style={{marginLeft:"-14px",marginTop:"-14px"}}

          />
         
       
        </div>
        <div
        //   className="containered form"
        //   style={{
        //     height: '300px',
        //     borderRadius: '5px',
        //     boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        //     background: '#DAF0EE',
        //   }}
        >
          <Link to="https://kuula.co/share/collection/7FVHk?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1"><img
            src={DetailImg4}
            alt="Tenant"
            height={188}
            style={{marginLeft:"-14px",marginTop:"10px"}}

          /></Link>
         
       
        </div>
        <div
        //   className="containered form"
        //   style={{
        //     height: '300px',
        //     borderRadius: '5px',
        //     boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        //     background: '#DAF0EE',
        //   }}
        >
          <img
            src={DetailImg2}
            alt="Tenant"
            height={280}
            style={{marginLeft:"-14px",marginTop:"14px"}}

          />
         
       
        </div>
        <div
        //   className="containered form"
        //   style={{
        //     height: '300px',
        //     borderRadius: '5px',
        //     boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        //     background: '#DAF0EE',
        //   }}
        >
          <img
            src={DetailImg3}
            alt="Tenant"
            height={270}
            style={{marginLeft:"-14px",marginTop:"14px"}}

          />
         
       
        </div>
        <div
        //   className="containered form"
        //   style={{
        //     height: '300px',
        //     borderRadius: '5px',
        //     boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        //     background: '#DAF0EE',
        //   }}
        >
          <img
            src={DetailView2}
            alt="Tenant"
            height={180}
            style={{marginLeft:"-14px",marginTop:"14px"}}

          />
         
       
        </div>
        <div
        //   className="containered form"
        //   style={{
        //     height: '300px',
        //     borderRadius: '5px',
        //     boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        //     background: '#DAF0EE',
        //   }}
        >
          <img
            src={DetailView3}
            alt="Tenant"
            height={280}
            style={{marginLeft:"-14px",marginTop:"14px"}}

          />
           <p style={{fontStyle:"Glida Display",bottomMargin:"-50px", fontSize:"18px"}}> Loved this property?</p>
         <div className="Apps">
          <Heart isClick={isClick} onClick={() => setClick(!isClick)} /> 

        </div>
        { isClick ?  
        ( <p style={{fontStyle:"Glida Display" , fontSize:"28px",color:"#B30808",fontWeight:"bold", color:"#B30808"}}> Shortlisted </p> ) :
        (  <p style={{fontStyle:"Glida Display" , fontSize:"28px",color:"#B30808",fontWeight:"bold"}}> Shortlist </p>   )}
         
        <button className="newBtn">See other properties</button>
       
        </div>
        <Footer />
      </div>
    </>
  );

  

}
export default DetailImgView;