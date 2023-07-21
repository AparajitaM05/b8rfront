import React from "react";
import CommonHeader from "../CommonHeader";
import CommonBtn from "../CommonButton";
import CommonTopButton from '../CommonTopButton';
import Footer from "../Footer";
import { Link } from "react-router-dom";
import axios from 'axios';
import oneBg from "../Assets/Images/AgentDashboard/oneBg.png";
import searchImg from "../Assets/Search.png";
import SearchBar from "../SearchBar";
import AvailablePropertiesRentalI from "../Assets/Images/AgentDashboard/AvailablePropertyRentalsI.png";
import AvailablePropertiesRentalI2 from "../Assets/Images/AgentDashboard/AvailablePropertyRentalsI2.png"

function AvailablePropertyrental()

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
          backgroundImage: `url(${oneBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <CommonHeader title="Available Properties Rentals" color="#52796F" />
        <SearchBar onSearch={handleSearch} placeholder="Search by property Name"/>
        <p style={{textAlign:"left"}}>Hey Yash, 

        Here are all the rent properties that are available for renting out</p>

        <img src={AvailablePropertiesRentalI} height={70} style={{marginBottom:"20px"}}/>
        <img src={AvailablePropertiesRentalI2} height={75}/>
        <Footer/>
        </div>
        </>
        
    );



}

export default AvailablePropertyrental;