// import React from 'react';
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import imgOne from "../Assets/Images/AgentDashboard/imgOne.png";
import checkP from "../Assets/Images/AgentDashboard/CheckP.png";
import ActiveListing from "../Assets/Images/AgentDashboard/ActiveListing.png";
import PendingVerification from "../Assets/Images/AgentDashboard/PendingVerification.png";
import SearchBar from "../SearchBar";

const AvailablePropertyComp = ({ properties , name }) => {

        const [filteredProperties, setFilteredProperties] = useState(properties);
        const [searchValue, setSearchValue] = useState('');
      
        const handleSearch = (searchTerm) => {
                setSearchValue(searchTerm);
            
                // If search term is empty, show all properties
                if (searchTerm === '') {
                  setFilteredProperties(properties);
                } else {
                  // Filter properties based on houseName
                  const filtered = properties.filter((property) =>
                    property.houseName.toLowerCase().includes(searchTerm.toLowerCase())
                  );
                  setFilteredProperties(filtered);
                }
              };

              useEffect(() => {
                // Initialize filteredProperties with all properties when the component loads
                setFilteredProperties(properties);
              }, [properties]);
    
  return (
    <>
{/*    
   <SearchBar value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search by property Name" /> */}
   <input
        type="text"
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search by property Name"
      />
        <p style={{textAlign:"left"}}>Hey <b>{name}</b>, 

        Here are all the rent properties that are available for renting out.</p>

   {/* Mapping */}
   {filteredProperties.map((property, index) => (
        <div key={index}>

        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" ,marginTop:"10px", padding: "5%"}}>
                {/* left side */}
            <div style={{height:"78px",width:"302px",background:"#FFFFFF",border:"1px solid #DAF0EE",borderRadius:"15px",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)", display:"flex"}}>
                    {/* img */}
                    <div>
                            <img src={imgOne} alt="imgOne" style={{marginLeft:"10px", marginTop:"10px"}}/>
                    </div>
                            {/* <p style={{fontSize:"12px", marginLeft:"20px", width:"400%"}}>904, Central Park Homes</p> */}
                    <div style={{display: "flex", flexDirection: "column", marginLeft: "20px", textAlign:"left"}}>
                            <p style={{fontSize: "12px"}}>{property.houseName},</p>
                            <p style={{fontSize: "12px",marginTop:"-10px"}}>{property.societyName}</p>
                            </div>
                    <div style={{marginTop:"10px",marginLeft:"-30px"}}>
                    {property.imagesApproved ? 
                          
                          <img style={{ marginLeft:"20px"}} src={ActiveListing} height={30}/>
                          :
                          <img src={PendingVerification} height={25}/>

                    }
                            <div style={{width:"150px",height:"20px",borderRadius:"10px",marginTop:"10px",marginLeft:"90px"}}>
                            {property.imagesApproved ? 
                                <text style={{fontSize:"12px",color:"#2F9E3A",marginLeft:"-100px",fontFamily:"Inter",fontStyle:"normal",fontWeight:"bold"}}>Active Listing</text>
                                : 
                                <text style={{fontSize:"12px",color:"#E13018",marginLeft:"-120px",fontFamily:"Inter",fontStyle:"normal",fontWeight:"bold"}}>Pending Verification</text>


                        }</div>

                    </div>
            </div>
           
            <Link to={`/propertyInfo?propertyId=${property._id}`} ><div style={{height:"75px",width:"52px",background:"#E8E7E7",borderRadius:"10px",marginLeft:"10px"}}> 

            <img src={checkP} style={{height:"27px",marginTop:"20px",marginBottom:"-8px"}}/>
            <text style={{fontSize:"15px",color:"#5D6560",fontWeight:"bold"}}>Edit</text>
                
            </div></Link>
               
         </div>      
         </div>
      ))}
        </>
  );
};

export default AvailablePropertyComp;
