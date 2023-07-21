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

function AllTenantOne()
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
        <CommonHeader title="All Tenant" color="#52796F" />

        <div style={{ display: "flex", justifyContent: "space-between" , marginBottom:"20px"}}>
          <div style={{ marginRight: "8px" }}>
              
              {archiveData ? 
              (
              <CommonTopButton
              bgColor= "#D2D7D6"
              borderColor= "#DAF0EE"
              color="#77A8A4"
               text="Wating For Property"
               onclicked={handlePageAvailable}
            />
              )
              : 
              (
              <CommonTopButton
              bgColor= "#52796F"
              borderColor= "#DAF0EE"
              color="#DAF0EE"
              text="Waiting For Property"
              onclicked={handlePageAvailable}
            />

              )}
          

          </div>
          <div >
          {archiveData ? 
              (

                <CommonTopButton
                bgColor= "#D2D7D6"
                borderColor= "#DAF0EE"
                color="#77A8A4"
                text="Shortlisted"
                onclicked={handlePageAvailable}
             />

              )
              : 
              (
         
             <CommonTopButton
             bgColor= "#D2D7D6"
             borderColor= "#DAF0EE"
             color="#77A8A4"
             text="Shortlisted"
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

        {/* -------------------------------------------------------------------------------- */}
        <div style={{ display: "flex", justifyContent: "space-between" , marginBottom:"20px",marginTop:"-10px"}}>
          <div style={{ marginRight: "8px" }}>
              
              {archiveData ? 
              (
              <CommonTopButton
              bgColor= "#D2D7D6"
              borderColor= "#DAF0EE"
              color="#77A8A4"
               text="Currently Viewing"
               onclicked={handlePageAvailable}
            />
              )
              : 
              (
              <CommonTopButton
              bgColor= "#D2D7D6"
              borderColor= "#DAF0EE"
              color="#77A8A4"
              text="Currently Viewing"
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
                text="Archived"
                onclicked={handlePageAvailable}
             />

              )
              : 
              (
         
             <CommonTopButton
             bgColor= "#D2D7D6"
             borderColor= "#DAF0EE"
             color="#77A8A4"
             text="Archived"
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


        <SearchBar onSearch={handleSearch} placeholder="Search by Tenant name"/>
       
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
                  text="Rented Outside"
                  bgColor="#D2D7D6"
                  borderColor="#A9C0BA"
                  color="#77A8A4"
                  // margin="0px 0px 0px 1px"
                  />
                  </div>

            </div>
            <div style={{marginTop:"10px", width:"30px", marginRight:"10px"}}>
            <CommonTopButton
            text="Others"
            bgColor="#D2D7D6"
            borderColor="#A9C0BA"
            color="#77A8A4"
            margin="0px 0px 0px 0px"

            />
          
            </div>
          
          <p style={{textAlign:"left"}}> Hey Yash,<br/>
          Here are all the tenants that you have onboarded
         </p>
  

        </>
          ) : (
                    

        <p style={{textAlign:"left"}}>Hey Yash, <br/>
        Here are all the tenants that you have onboarded
       </p>
          ) } 
        
           



  

        <Footer/>
        </div>
        </>
        
    );


}
export default AllTenantOne;