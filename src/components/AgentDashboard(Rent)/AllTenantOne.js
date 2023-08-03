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

function AllTenantOne()
{
  
  const [archiveData, setArchiveData] = useState(false);
  const [ActivebgColor, setActivebgColor] = useState("#D2D7D6");
  const [ActiveBorderColor, setBorderColor] = useState("#A9C0BA");
  const [activeColor, setColor] = useState("#77A8A4");
	const [loading, setLoading] = useState(false);
  const [responseTenat, setresponseTenat] = useState();
  

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
			.get("http://b8rhomes-api.ap-south-1.elasticbeanstalk.com:8080/tenant", axiosConfig)
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
        {/* ------------------------------------First Tab-------------------------------------------------- */}
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" ,marginTop:"10px"}}>
                {/* left side */}
            <div style={{height:"78px",width:"302px",background:"#FFFFFF",border:"1px solid #DAF0EE",borderRadius:"15px",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)", display:"flex"}}>
                    {/* img */}
                    <div style={{display:"flex"}}>
                            <img src={PendingVerification} alt="imgOne" style={{marginLeft:"10px", marginTop:"25px"}} height={30}/>
                            <h6 style={{marginLeft:"-5px"}}>Waiting for property</h6>
                            <hr style={{ flex: "1", marginLeft: "-1px" }} />

                    </div>
                    <div style={{marginTop:"10px"}}>
                            <text style={{fontSize:"13px"}}>904, Central Park Homes</text>

                            <div style={{width:"150px",height:"25px",background:"#FFEEDB",borderRadius:"10px",marginTop:"20px",marginLeft:"10px"}}>
                                    <text style={{fontSize:"12px",color:"#BA7B28",marginLeft:"-50px",fontFamily:"Inter",fontStyle:"normal",fontWeight:"bold"}}>Incorrect Info</text>
                            </div>

                    </div>
            </div>
            {/* right side */}
            
            <div style={{height:"75px",width:"52px",background:"#E8E7E7",borderRadius:"10px",marginLeft:"10px"}}> 

                <Link to="">
            <img src={checkP} style={{height:"27px",marginTop:"20px",marginBottom:"-8px"}}/>
            <text style={{fontSize:"12px",color:"#5D6560",fontWeight:"bold"}}>Take Action</text>
            </Link>
            </div>
               


            </div>
  
        {/* ------------------------------------First Tab END-------------------------------------------------- */}
        <Footer/>
        </div>
        </>
        
    );


}
export default AllTenantOne;