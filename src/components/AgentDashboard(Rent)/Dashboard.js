import React, { Component, useEffect, useState } from "react";
import Dashboardcss from  "./Dashboard.css";
// import "./DashComponent.css";
import { Link } from "react-router-dom";
import axios from "axios";
import UserLoginDetails from "../UserLoginDetails";
import DashComponent from "./DashComponent";

import Footer from "../Footer";
import vector from "../Assets/Images/vector.png";
import backgroundSecond from "../Assets/Images/other_bg.png";
import listing from "../Assets/Images/AgentDashboard/listing.png";

import CommonHeader from "../CommonHeader";
import CommonBtn from "../CommonButton";
import CommonTopButton from "../CommonTopButton";
import Tenimg from "../Assets/Images/AgentDashboard/tenantimg.png";
import AvailaibleProperty from "../Assets/Images/AgentDashboard/AvailableProperties.png";
import ActiveListing from "../Assets/Images/AgentDashboard/ActiveListing.png";
import PendingVerification from "../Assets/Images/AgentDashboard/PendingVerification.png";
import yetToShare from "../Assets/Images/AgentDashboard/yetToShare.png";
import sharedOut from "../Assets/Images/AgentDashboard/sharedOut.png";
import shortlisted from "../Assets/Images/AgentDashboard/shortListed.png";
import tenantI from "../Assets/Images/AgentDashboard/tenantI.png";
import CurrentlyViewing from "../Assets/Images/AgentDashboard/CurrentlyViewing.png";
import ActiveLeads from "../Assets/Images/AgentDashboard/activeLeads.png";

import ExtraCommonButton from "../ExtraCommonButton";

function Dashboard() {

  const [responseCountProperties, setresponseCountProperties] = useState();
	const [loading, setLoading] = useState(false);
  

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
			.get("http://b8rhomes-api.ap-south-1.elasticbeanstalk.com:8080/property", axiosConfig)
			.then((response) => {
			  console.log(response.data.data.properties);
        var myArrayPropertyCount = response.data.data.properties;
        setresponseCountProperties(myArrayPropertyCount.length);
			  console.log(myArrayPropertyCount.length);

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

  return (
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
        {/* <h2 style={{color:"#52796F"}}>Agent Dashboard</h2> */}
        <CommonHeader title="My Dashboard" color="#52796F" />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ marginRight: "8px" }}>
            <CommonTopButton
              text="For Rent"
              bgcolor="#1E0058"
             

              borderColor="#DAF0EE"
              color="#DAF0EE"
            />
          </div>
          <div>
            <Link to="/DashboardS"><CommonTopButton
              text="For Sale"
              bgColor="#F5F5F5"
              borderColor="#B3A8C8"
              color="#B3A8C8"
            /></Link>
          </div>
          {/* Listing */}
        </div>

        {/* BODY */}
        <div className="mainDashboardContainer d-flex">
          {/* left starts */}
          <div className="leftDashboard">
            <div className="lMenusHead">
              <img src={listing} height={30} />
              <label style={{ color: "#52796F" }}>Listings</label>
            </div>

           
              

               
            <div>

            </div>
            <div className="newboxSizingl">

           
                <Link className="leftlink" to="/AvailablePropertyrental" ><DashComponent img={AvailaibleProperty} title="Available Properties" number={responseCountProperties}/></Link>
                <div style={{ marginTop: "5px" }}></div>
               <Link to="/My_propertyPV" className="leftlink" > <DashComponent img={PendingVerification} title="Pending Verification" number="0"/></Link>
                <div style={{ marginTop: "5px" }}></div>
                <Link to="/AllProperty" className="leftlink" ><DashComponent img={ActiveListing} title="Active Listing" number="0"/></Link>
                <div style={{ marginTop: "5px" }}></div>
                <Link to="/My_PropertyYTS" className="leftlink" ><DashComponent img={yetToShare} title="Yet To Share" number="0"/></Link>
                <div style={{ marginTop: "5px" }}></div>
                <Link to="/My_PropertySNA" className="leftlink" ><DashComponent img={sharedOut} title="Shared" number="0"/></Link>
                <div style={{ marginTop: "5px" }}></div>
                <Link to="/My_PropertyS" className="leftlink" ><DashComponent img={shortlisted} title="Shortlisted" number="0"/></Link>
                
            
                </div>
                <label>0 Rented Out</label>
                

            {/* left end */}
          </div>

          {/* Right starts */}

          <div className="rightDashboard">
            <div className="rMenusHead">
              <img src={Tenimg} height={30} />
              <label className="labelH" style={{color:"#000000 !important"}}>Tenants</label>
            </div>

        
            <div className="newboxSizingr" >
            
            <Link className="Link" to="/ActiveLeads"><DashComponent img={ActiveLeads} title="Active Leads" number="0"/></Link>
            <div style={{ marginTop: "5px"}}></div>
            <Link className="Link" to="/AllTenantOne"><DashComponent img={PendingVerification} title="Waiting For Property" number="0"/></Link>
            <div style={{ marginTop: "5px" }}></div>
            <Link to="/AllTenantOne" className="Link"><DashComponent img={CurrentlyViewing} title="Currently Viewing" number="0"/></Link>
            <div style={{ marginTop: "5px" }}></div>
            <Link to="/AllTenantOne" className="Link"><DashComponent img={shortlisted} title="ShortListed" number="0"/></Link>
           
            
            </div>
            <label>0 Rented Out</label>
            {/* Right ENd */}
          </div>

          {/* Container ENd */}
        </div>

    <div className="btnGroup">

            <div className="btnGroupOne" style={{display:"flex", flexDirection:"row" }}>
            <Link to="/AllProperty"><CommonBtn title="All Properties"  margin="" fontweight="bolder" bgColor="#5D6560" /></Link>
            <Link to="/AllTenantOne"><CommonBtn title="All Tenants"  margin="50%" fontweight="bolder" /></Link>
            </div>
       

        

            {/* <div className="btnGroupTwo" style={{display:"flex", flexDirection:"row",marginTop:"80px" }}>
            
            <CommonBtn style={{display:"flex"}} title="Add New Property"  margin="3px" fontweight="bolder" bgColor="#5D6560" isHeight="true" />
            <CommonBtn title="Add New Tenant"  margin="40%" fontweight="bolder" isHeight="true" />
            </div> */}


            <div className="btnGroupTwo" style={{display:"flex", flexDirection:"row",marginTop:"80px", justifyContent:"space-between" }}>
            
            <Link to="/Propertyinfo"><ExtraCommonButton title="Add New Property"  margin="25px" fontweight="bolder" bgColor="#5D6560" isHeight="true" /></Link>
            <Link to="/AddTenant"><ExtraCommonButton title="Add New Tenant"  margin="25px 1px" fontweight="bolder" isHeight="true" /></Link>
            </div>
            

      </div>

       

        <Footer />
      </div>
    </>
  );
}
export default Dashboard;