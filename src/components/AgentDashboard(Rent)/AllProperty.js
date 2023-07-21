// import React from "react";
import React, { Component, useState, useEffect } from "react";
import CommonHeader from "../CommonHeader";
import CommonBtn from "../CommonButton";
import CommonTopButton from '../CommonTopButton';
import Footer from "../Footer";
import { Link } from "react-router-dom";
import axios from 'axios';
import oneBg from "../Assets/Images/AgentDashboard/oneBg.png";
import SearchBar from "../SearchBar";
import { BsSearchHeart } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import searchImg from "../Assets/Search.png";
import propertyComp from "./propertyComp";

function AllProperty()
{
  
  const [archiveData, setArchiveData] = useState(false);
  const [ActivebgColor, setActivebgColor] = useState("#D2D7D6");
  const [ActiveBorderColor, setBorderColor] = useState("#A9C0BA");
  const [activeColor, setColor] = useState("#77A8A4");



  const handleSearch = (searchValue) => {
    // Custom search handling logic
    console.log("Searching for:", searchValue);

    // Perform search operations here
  };


  const handlePageAvailable = () => {
    // Custom search handling logic
   
    if(archiveData){
      setArchiveData(false);

    } else {
      setArchiveData(true);
      setActivebgColor("#52796F");
      setBorderColor("#DAF0EE");
    }
      // setActivebgColor("#52796F");
      // setBorderColor("#DAF0EE");
      // activeColor("")
    
 
    // Perform search operations here
  };
  
  
  const handlePage = () => {
    // Custom search handling logic
    setArchiveData(true);
    // setActivebgColor("#52796F");
    // setBorderColor("#DAF0EE");

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
        <CommonHeader title="All Properties" color="#52796F" />

        <div style={{ display: "flex", justifyContent: "space-between" , marginBottom:"20px"}}>
          <div style={{ marginRight: "8px" }}>
              
              {archiveData ? 
              (
              <CommonTopButton
              bgColor= "#D2D7D6"
              borderColor= "#DAF0EE"
              color="#77A8A4"
               text="Available Properties"
               onclicked={handlePageAvailable}
            />
              )
              : 
              (
              <CommonTopButton
              bgColor= "#52796F"
              borderColor= "#DAF0EE"
              color="#DAF0EE"
              text="Available Properties"
              onclicked={handlePageAvailable}
            />

              )}
          

          </div>
          <div >
          {archiveData ? 
              (

                <CommonTopButton
                bgColor= "#52796F"
                borderColor= "#DAF0EE"
                color="#DAF0EE"
                text="Archived Properties"
                onclicked={handlePageAvailable}
             />

              )
              : 
              (
         
             <CommonTopButton
             bgColor= "#D2D7D6"
             borderColor= "#DAF0EE"
             color="#77A8A4"
             text="Archived Properties"
             onclicked={handlePageAvailable}
           />
              )}

            {/* <CommonTopButton
              text="Archived Properties"
              bgColor= {setActivebgColor}
              borderColor= {setBorderColor}
              color={activeColor}
              onclicked={handlePage}

            /> */}
          </div>
          {/* Listing */}
        </div>


        <SearchBar onSearch={handleSearch} placeholder="Search by Property name"/>
       
       {archiveData ? 
          (
            <>
            
              {/* <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between" , marginRight:"10px"}}> */}

              <div style={{ display: "flex", justifyContent: "space-between" , marginBottom:"20px"}}>
                <div style={{ marginRight: "8px" }}>
                  <CommonTopButton
                    text="Rented On B8R"
                    bgColor="#D2D7D6"
                    borderColor="#A9C0BA"
                    color="#77A8A4"
                  />
                  </div>
                  
                  <div>
                  <CommonTopButton
                  text="Delisted Owner"
                  bgColor="#D2D7D6"
                  borderColor="#A9C0BA"
                  color="#77A8A4"
                  // margin="0px 0px 0px 1px"
                  />
                  </div>

            </div>
            <div style={{marginTop:"10px", width:"30px", marginRight:"10px"}}>
            <CommonTopButton
            text="Rented Outside"
            bgColor="#D2D7D6"
            borderColor="#A9C0BA"
            color="#77A8A4"
            margin="0px 0px 0px 0px"

            />
          
            </div>
          
          <p style={{textAlign:"left"}}>Hey Yash, <br/>

         

Here are all the properties which are either rented on b8r, rented Outside or have delisted owner.</p>
  

        </>
          ) : (
                    

        <p style={{textAlign:"left"}}>Hey Yash, <br/>

        Here are all the <b>rent</b> properties that are available for renting out</p>
          ) } 
        
           



  

        <Footer/>
        </div>
        </>
        
    );


}

export default AllProperty;