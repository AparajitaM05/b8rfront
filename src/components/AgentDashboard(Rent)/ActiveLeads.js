import React from "react";
import CommonHeader from "../CommonHeader";
import CommonBtn from "../CommonButton";
import CommonTopButton from '../CommonTopButton';
import Footer from "../Footer";
import { Link } from "react-router-dom";
import axios from 'axios';
import backgroundSecond from "../Assets/Images/other_bg.png";
import searchImg from "../Assets/Search.png";
import SearchBar from "../SearchBar";
import ActiveLeadsI from "../Assets/Images/AgentDashboard/ActiveLeadsI.png";

function ActiveLeads()
{

  const handleSearch = (searchValue) => {
    // Custom search handling logic
    console.log("Searching for:", searchValue);

    // Perform search operations here
  };

    return(
        <>
         <div
        className="form"
        style={{
          borderRadius: "16px",
          marginTop: "10%",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${backgroundSecond})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <CommonHeader title="Active Leads" color="#52796F" />

        <SearchBar onSearch={handleSearch} placeholder="Search by Tenant Name"/>

        <p style={{textAlign:"left"}}>Hey, <br/>

        Here are all the tenants that you have onboarded </p>
        <img src={ActiveLeadsI} height={80} style={{borderRadius:"20px"}}/>
        <Footer/>
        </div>
        </>
        
    );

}
export default ActiveLeads;