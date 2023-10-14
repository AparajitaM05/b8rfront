import React, { useEffect, useState } from "react";

// import Dashboardcss from '../Dashboard.css';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import CommonBtn from "../CommonButton";
// import logo from "../Assets/Images/Logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import DetailView1 from "../Assets/Images/TenantSideView/DetailView1.png";
import DetailView2 from "../Assets/Images/TenantSideView/DetailView2.png";
import DetailView3 from "../Assets/Images/TenantSideView/DetailView3.png";
import Heart from "react-animated-heart";
import "./DetailView.css";
import Footer from "../Footer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import gatedSecurity from "../Assets/Images/PropertyAdditionPageIcons/gatedsecurity_1/24.png";
import powerBackup from "../Assets/Images/PropertyAdditionPageIcons/Power_backup/24.png";
import ac from "../Assets/Images/PropertyAdditionPageIcons/air_cond/airconditioner/24.png";
import carParking from "../Assets/Images/PropertyAdditionPageIcons/car_parking/24.png";
import bikeParking from "../Assets/Images/PropertyAdditionPageIcons/car_parking/24.png";
import clubHouse from "../Assets/Images/PropertyAdditionPageIcons/club_house/24.png";

import groceryStore from "../Assets/Images/PropertyAdditionPageIcons/convenience_store/24.png";

import gym from "../Assets/Images/PropertyAdditionPageIcons/gym_1/24.png";

import bathroom from "../Assets/Images/PropertyAdditionPageIcons/number_of_bathroom_1/24.png";
import onboarded from "../Assets/Images/PropertyAdditionPageIcons/Power_backup/24.png";

import swimmingPool from "../Assets/Images/PropertyAdditionPageIcons/swimming_pool/24.png";
import nonVeg from "../Assets/Images/PropertyAdditionPageIcons/veg_non-veg_1/24.png";

function DetailView() {
  const queryParameters = new URLSearchParams(window.location.search);
  const boardId = queryParameters.get("boardId");
  console.log(boardId);



  const [isClick, setClick] = useState(false);
  const [responseDataProperty, setResponseDataProperty] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const [booleanValues, setBooleanValues] = useState([]); // Store boolean values here

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

      //Get All Properties
      try {
        setLoading(true);
        const response = await axios.get(
          `https://b8rliving.com/board/${boardId}`,
          axiosConfig
        );

        // const responseData = response.data.data.board.propertyId;
        const responseData = response.data.data.board.propertyId;

        // Update the formData state with the response data
        setResponseDataProperty(responseData);

         // Separate boolean values and store them in booleanValues state
         const booleanValues = [];
         responseData.forEach((tenant) => {
           for (const key in tenant) {
             if (typeof tenant[key] === "boolean") {
               booleanValues[key] = tenant[key];
             }
           }
         });
 
         setBooleanValues(booleanValues);
         console.log(setBooleanValues);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false when the request is complete
      }
    };

    fetchTenantDetails(); // Call the fetch function
  }, [boardId]);

  console.log(responseDataProperty)

  const keyNames = {
    carParking: "Car Parking",
    bikeParking: "Bike Parking",
    gatedSecurity: "Gated Security",
    powerBackup: "Power Backup",
    groceryStore: "Grocery Store",
    swimmingPool: "Swimming Pool",
    gym: "Gym",
    clubHouse: "Club House",
    AirCondition: "Air Conditioning",
    nonVeg: "Non-Veg",
    bathroom: "Bathroom",
  };

  return (
    <>
     {responseDataProperty.map((property, index) => (
        <div key={index}>
      <div
        className="form"
        style={{
          borderRadius: "9px",
          marginTop: "10%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
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
          {/* <Link to="/DetailImgView"><img
            src={DetailView1}
            alt="Tenant"
            height={373}
            style={{marginLeft:"-14px",marginTop:"-14px"}}

          /></Link> */}
         
          <Carousel showArrows={true}>
            {property.images.map((image, index) => (
              <div key={index}>
                <img src={image} />
                <p className="legend" style={{color:"#FFFFF",fontSize:"16px",fontWeight:"bolder"}}>{property.houseName}</p>
              </div>
            ))}
          </Carousel>
        </div>

        <Link to={property.tourLink3D}><div id="container" style={{ marginTop:"-98px", marginLeft:"3%"}}>
          <img id="someimg" src={property.images[0]} height={25} width={10} />
          <div id="overlay" style={{color:"white", fontSize:"15px", fontWeight:"bold"}}><p>3D Virtual Tour</p></div>
        </div></Link>

        {/* <div className="legend"  style={{ marginLeft:"-65%",marginTop:"-95px"}}>
          <Link to={property.tourLink3D}>
            <img src={property.images[0]} height={55} width={100} style={{position:"relative", background:"rgba(0, 0, 0, 0.7)", textAlign:"center", padding:"0px"}}/></Link>
          <p style={{color:"white", fontSize:"16px", fontWeight:"bold"}}>3D Tour</p>
        </div> */}
        
        <div
        //   className="containered form"
        //   style={{
        //     height: '300px',
        //     borderRadius: '5px',
        //     boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        //     background: '#DAF0EE',
        //   }}
        >
          <b>
            <h2 style={{marginBottom:"-10px"}}> {property.houseName}</h2>
          </b>
          <div
            style={{
              marginLeft: "20px",
              height: "140px",
              width: "370px",
              borderRadius: "8px",
              backgroundColor: "#E8E7E7",
            }}
          >
            <h3 style={{marginLeft:"-150px",marginTop:"10px"}}>About the Society</h3>
            <div
                    className="grid"
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      padding: "0 6%",
                      width: "100%",
                      marginTop: "-18px",
                    }}
                  >
                    {Object.entries(booleanValues).map(([key, value]) => {
                      if (value === true) {
                        const imageSources = {
                          gatedSecurity: gatedSecurity,
                          powerBackup: powerBackup,
                          groceryStore: groceryStore,
                          swimmingPool: swimmingPool,
                          gym: gym,
                          clubHouse: clubHouse,
                          AirCondition: ac,
                          carParking: carParking,
                          bikeParking: bikeParking,
                          nonVeg: nonVeg,
                          bathroom: bathroom,
                        };
                        // Use the key to dynamically select the image source
                        const imageSrc = imageSources[key]; // You can set a default image source if needed

                        // return <li key={key}>{key}</li>;
                        return (
                          <div
                            className=""
                            style={{ width: "60px", padding: "3%" }}
                          >
                            <img
                              src={imageSrc}
                              height={22}
                              style={{ marginLeft: "10px" }}
                            />{" "}
                            <p style={{ fontSize: "10px" }}>
                              {" "}
                              {keyNames[key]}{" "}
                            </p>{" "}
                          </div>
                        );
                      }
                      return null; // Skip false values
                    })}
                  </div>
          </div>

          {/* <img
            src={DetailView2}
            alt="Tenant"
            height={180}
            style={{ marginLeft: "-14px", marginTop: "14px" }}
          /> */}
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
          <div
            style={{
              marginLeft:"20px",
              height: "320px",
              width: "370px",
              backgroundColor: "#DAF0EE",
              borderRadius: "5px",
            }}
          >
            <h3 style={{marginLeft:"-170px"}}>House Details</h3>
          </div>
          {/* <img
            src={DetailView3}
            alt="Tenant"
            height={280}
            style={{ marginLeft: "-14px", marginTop: "14px" }}
          /> */}
          <p
            style={{
              fontStyle: "Glida Display",
              bottomMargin: "-50px",
              fontSize: "28px",
            }}
          >
            {" "}
            Loved this property?
          </p>
          <div className="Apps">
            <Heart isClick={isClick} onClick={() => setClick(!isClick)} /> 
          </div>

          {isClick ? (
            <p
              style={{
                fontStyle: "Glida Display",
                fontSize: "28px",
                color: "#B30808",
                fontWeight: "bold",
                color: "#B30808",
              }}
            >
              {" "}
              Shortlisted{" "}
            </p>
          ) : (
            <p
              style={{
                fontStyle: "Glida Display",
                fontSize: "28px",
                color: "#B30808",
                fontWeight: "bold",
              }}
            >
              {" "}
              Shortlist{" "}
            </p>
          )}

          <button className="newBtn">See other properties</button>
        </div>
        <Footer />
      </div>
      </div>
      ))}
    </>
  );
}
export default DetailView;
