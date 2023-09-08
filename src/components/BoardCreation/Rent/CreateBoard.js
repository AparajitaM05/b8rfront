import React, { Component, useEffect, useState } from "react";

import backgroundImg from "../../Assets/Images/BoardCreation/BackgroundBoard.png";
import CommonHeader from "../../CommonHeader";
import CommonBtn from "../../CommonButton";
import CommonTopButton from "../../CommonTopButton";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import CreateBoardUpper from "../../Assets/CreateBoardUpper.png";
import CreateBoardAmm from "../../Assets/CreateBoardAmm.png";
import ApartmentType from "../../Assets/Images/BoardCreation/ApartmentType.png";
import area from "../../Assets/Images/BoardCreation/area.png";
import Group from "../../Assets/Images/BoardCreation/Group.png";
import parking from "../../Assets/Images/BoardCreation/parking.png";
import Money from "../../Assets/Images/BoardCreation/Money.png";

import axios from "axios";
import searchImg from "../../Assets/Search.png";
import SearchBar from "../../SearchBar";
import  "./CreateBoard.css";

function CreateBoard() {
  const queryParameters = new URLSearchParams(window.location.search);
  const name = queryParameters.get("name");
  const tenantId = queryParameters.get("tenantId");

  const [searchValue, setSearchValue] = useState("");
  const [responseDataTenant, setResponseDataTenant] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const [booleanValues, setBooleanValues] = useState([]); // Store boolean values here
 

  const handleSearch = (searchTerm) => {
    setSearchValue(searchTerm);

    // If search term is empty, show all properties
    // if (searchTerm === '') {
    //   setfilteredData(props);
    // } else {
    //   // Filter properties based on houseName
    //   const filtered = props.filter((property) =>
    //     property.houseName.toLowerCase().includes(searchTerm.toLowerCase())
    //   );
    //   setfilteredData(filtered);
    // }
  };

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Basic ${token}`,
    },
  };

  useEffect(() => {
    const fetchTenantDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://b8rliving.com/tenant/${tenantId}`,
          axiosConfig
        );

        const responseData = response.data.data.tenant.tenantDetails;

        // Update the formData state with the response data
        setResponseDataTenant(responseData);

        // Separate boolean values and store them in booleanValues state
        const booleanValues = [];
        responseData.forEach(tenant => {
          for (const key in tenant) {
            if (typeof tenant[key] === 'boolean') {
              booleanValues[key] = tenant[key];
            }
          }
        });

        setBooleanValues(booleanValues);

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false when the request is complete
      }
    };

    fetchTenantDetails(); // Call the fetch function
  }, [tenantId]);

  console.log(booleanValues);

  return (
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
        <CommonHeader title="Create/Add to Board" color="#52796F" />

        {/* <img src={CreateBoardUpper} style={{height:"190px"}}/> */}
        {/* upper component */}
        <div
          style={{
            height: "200px",
            width: "90%",
            background: "#DAF0EE",
            marginTop: "20px",
            marginLeft: "20px",
            borderRadius: "6px",
          }}
        >
          <h3 style={{ marginLeft: "-140px", marginTop: "10px" }}>
            Tenant name: {name} 
          </h3>
          <h5 style={{ marginLeft: "-140px" }}>
            <b>
              <u>Preference of Tenant</u>
            </b>
          </h5>
          {responseDataTenant.map((values, index) => (
        <div key={index}>
         
           

          <div
            style={{
              height: "45px",
              width: "90%",
              background: "#FAFAFA",
              marginLeft: "20px",
              borderRadius: "8px",
              boxShadow: "0px 2px 7px rgba(0, 0, 0, 0.4)",
              display: "flex",
            }}
          >
            <img
              src={area}
              height={15}
              style={{ marginTop: "10px", marginLeft: "10px" }}
            /> <p  style={{ fontSize: "12px"}}>{values.houseConfiguration}</p> 
            <img
              src={Group}
              height={15}
              style={{ marginTop: "10px", marginLeft: "30px" }}
            /> <p style={{ fontSize: "12px"}}>{values.furnishingType}</p> 
            <img
              src={parking}
              height={18}
              style={{ marginTop: "10px", marginLeft: "10px" }}
            /> {values.carParking && values.bikeParking ? (
              values.carParking ? (
                <p  style={{ fontSize: "12px"}} >Car Parking Available</p>
              ) : (
                <p>Bike Parking Available</p>
              )
            ) : (
              <p>Neither Car nor Bike Parking Available</p>
            )}
            
          </div>
          <div>
            <img
              src={Money}
              height={20}
              style={{ marginLeft: "-270px", marginTop: "10px" }}
            />
           <p style={{marginLeft:"-200px",marginTop:"-23px"}}>{values.rent}</p> 
            <div
              style={{
                height: "25px",
                width: "40%",
                background: "#3B413D",
                marginLeft: "200px",
                borderRadius: "6px",
                marginTop: "-35px",
              }}
            >
              <img
                src={ApartmentType}
                style={{ marginLeft: "-110px", marginTop: "3px" }}
              />
              <p style={{color:"white",marginTop:"-20px",fontSize:"11px",padding:"1%"}}>{values.houseType}</p> 
            </div>
          </div>
         

        <div
          style={{
            height: "170px",
            width: "94%",
            background: "#F5F5F5",
            border: "1px solid #000",
            marginLeft: "12px",
            borderRadius: "5px",
            marginTop: "20%",
          }}
        >
          <h5 style={{ marginLeft: "-130px" }} >
            <u>Amenities & Other Preference </u>
          </h5>
      
          <div className="grid">
      
          {/* {booleanValues.map((valuesBool, index) => (
            <div key={index} >
              {valuesBool}
              <div className="grid-item"><img src={ApartmentType} /> {valuesBool.ac} </div>
              </div>
          ))} */}

{/* <p>True Values:</p> */}
        {/* <ul> */}
          {Object.entries(booleanValues).map(([key, value]) => {
            if (value === true) {
              // return <li key={key}>{key}</li>;
              return <div className="grid-item"><img src={ApartmentType} /> {key} </div> ;
            }
            return null; // Skip false values
          })}
        {/* </ul> */}


        </div>
        </div>
        </div>
      ))}

        <input
          type="text"
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search by property Name"
        />

        <CommonBtn title="View Board" margin="90px" />

        <Footer />
      </div>
      </div>
    </>
  );
}
export default CreateBoard;
