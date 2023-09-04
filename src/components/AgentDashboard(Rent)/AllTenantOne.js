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
import checkP from "../Assets/Images/AgentDashboard/CheckP.png";
import PendingVerification from "../Assets/Images/AgentDashboard/PendingVerification.png";
import TenantComp from "./TenantComp";

function AllTenantOne()
{
  
  const [archiveData, setArchiveData] = useState(false);
  const [ActivebgColor, setActivebgColor] = useState("#D2D7D6");
  const [ActiveBorderColor, setBorderColor] = useState("#A9C0BA");
  const [activeColor, setColor] = useState("#77A8A4");
	const [loading, setLoading] = useState(false);


  const [responseTenat, setresponseTenat] = useState();
  const [responseTenatWaitingForProperty, setresponseTenatWaitingForProperty] = useState();
  
  
  const token = localStorage.getItem("token");
  // console.log(token);


  let axiosConfig = {
		headers: {
		  "Content-Type": "application/json;charset=UTF-8",
		  "Access-Control-Allow-Origin": "*",
		  Authorization: `Basic ${token}`,
		},
	  };
  useEffect(() => {
		// event.preventDefault();
		const fetchPosts = async () => {
		  setLoading(true);
		  axios
			.get("https://b8rliving.com/tenant", axiosConfig)
			.then((response) => {
			  console.log(response.data.data.tenants);
        // var myArrayPropertyCount = response.data.data.properties;
        setresponseTenat(response.data.data);
			  // console.log(myArrayPropertyCount.length);

        if(response.data.data.properties.propertyInfo.purposeRent==true){
        }

			  // alert("Your data has been submitted");
			  // do something with the response
			})
			.catch((error) => {
			  console.log(error);
			  // handle the error
			});
		  setLoading(false);
		};
	
		fetchPosts();
	  }, []);

  const handleSearch = (searchValue) => {
    // Custom search handling logic
    console.log("Searching for:", searchValue);

    // Perform search operations here
  };

  
    // Perform search operations here
  
  const WaitingForProperty = (query) => {
    // Custom search handling logic
    console.log("WaitingForProperty:", query);
    const fetchPosts = async () => {
		  setLoading(true);
		  axios
			.get("https://b8rliving.com/tenant?filter=WaitingForProperty", axiosConfig)
			.then((response) => {
			  console.log(response.data.data.tenants);
        // var myArrayPropertyCount = response.data.data.properties;
        setresponseTenatWaitingForProperty(response.data.data);
			  // console.log(myArrayPropertyCount.length);

        if(response.data.data.properties.propertyInfo.purposeRent==true){
        }

			  // alert("Your data has been submitted");
			  // do something with the response
			})
			.catch((error) => {
			  console.log(error);
			  // handle the error
			});
		  setLoading(false);
		};

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
  const username = localStorage.getItem("username");
  const name = username.substring(0, username.indexOf(' ')); 

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
          
          <p style={{textAlign:"left"}}> Hey <b>{name}</b>,<br/>
          Here are all the tenants that you have onboarded
         </p>
  

        </>
          ) : (
                    

        <p style={{textAlign:"left"}}>Hey <b>{name}</b>, <br/>
        Here are all the tenants that you have onboarded
       </p>
          ) } 

          <TenantComp/>
        
        <Footer/>
        </div>
        </>
        
    );


}
export default AllTenantOne;