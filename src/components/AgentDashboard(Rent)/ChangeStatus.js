import React, { Component, useState, useEffect } from "react";
import Dashboardcss from "../Dashboard.css";
import { Link } from "react-router-dom";
import axios from "axios";
import UserLoginDetails from "../UserLoginDetails";
import homeDown from "../Assets/Images/AgentDashboard/homeDown.png";
import peopleDown from "../Assets/Images/AgentDashboard/peopleDown.png";
import Footer from "../Footer";
import vector from "../Assets/Images/AgentDashboard/vector.png";
import backgroundSecond from "../Assets/Images/AgentDashboard/other_bg.png";
import rentedOut from "../Assets/Images/AgentDashboard/rentedOut.png";
import sharedOut from "../Assets/Images/AgentDashboard/sharedOut.png";
import shortListed from "../Assets/Images/AgentDashboard/shortListed.png";
import yetShared from "../Assets/Images/AgentDashboard/yetShared.png";
import PVbackground from "../Assets/Images/AgentDashboard/Pvbackground.png";
import newImg from "../Assets/Images/AgentDashboard/newImg.png";
import searchImg from "../Assets/Search.png";
import SearchBar from "../SearchBar";
import CommonHeader from "../CommonHeader";
import CommonBtn from "../CommonButton";
import CommonTopButton from "../CommonTopButton";
import BackButton from "../CommonButtonBack";
import editButton from "../Assets/Button.png";

function ChangeStatus() {
  const queryParameters = new URLSearchParams(window.location.search);
  const idProperty = queryParameters.get("propertyId");
  console.log("id" + idProperty);

  const [stateRender, setStateRender] = useState("rent");
  const [propertyDetails, setPropertyDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");
  console.log(token);

  
  const [formData, setFormData] = useState({
		duration_of_stay: '',
		deposit_comfortable_for: '',
    house_conf:'',
		type_of_furnishing: '',
    house_type:'',
    movein_from:'',
    location: ''
	  });


  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Basic ${token}`,
    },
  };
  useEffect(() => {
    const fetchpropertyDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://b8rliving.com/property/${idProperty}`,
          axiosConfig
        );

        const responseData = response.data.data.property;
        setPropertyDetails(responseData);
      } catch (error) {
        // Handle any errors that occur during the API request
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false when the request is complete
      }
    };

    fetchpropertyDetails(); // Call the fetch function
  }, [idProperty]); // Make sure to include idProperty in the dependency array if it's dynamic.

  const handlePageAvailable = (value) => {
    // Custom search handling logic
    // e.preventDefault();
    console.log(value);
    console.log("hit hai");
    setStateRender(value);
    // setActivebgColor("#52796F");
    // setBorderColor("#DAF0EE");
    // activeColor("")

    // Perform search operations here
  };

  const handleChange = event => {
		const { name, value } = event.target;
		setFormData(prevState => ({ ...prevState, [name]: value }));
	  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log();
    axios
      .post("http://127.0.0.1:5000/backend/tenantpref", formData)
      .then((response) => {
        console.log(response.data);
        alert("Your tenant preferences has been submitted");
        // do something with the response
        window.location.href = "/tenantpref2";
      })
      .catch((error) => {
        console.log(error);
        // handle the error
      });
  };

  return (
    <>
      <div
        className="form"
        style={{
          borderRadius: "16px",
          marginTop: "10%",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${PVbackground})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <CommonHeader title="Change Status/ Edit Property" color="#52796F" />
        <div
          className="containered form"
          style={{
            height: "110px",
            borderRadius: "15px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            border: "1px solid #DAF0EE",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* for image */}
            <div>
              <img src={newImg} />
            </div>
            {/* for title and text */}

            <div
              style={{
                marginTop: "-5px",
                margintLeft: "10px",
                marginBottom: "-5px",
              }}
            >
              <h5 style={{ marginLeft: "10px" }}>
                {" "}
                {propertyDetails.houseName}{" "}
              </h5>
              <br />
              <h5 style={{ marginTop: "-40px" }}>
                {propertyDetails.societyName}
              </h5>
            </div>
            <Link to="/EditPropertyInfo">
              <img src={editButton} />
            </Link>
          </div>
        </div>

        {/* -----------------------------------------------2nd div----------------------------------------------------- */}
        <div
          className="containered form"
          style={{
            height: "250px",
            borderRadius: "15px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              marginTop: "10px",
              whiteSpace: "nowrap",
            }}
          >
            <h4>Close Listing</h4>
            <div>
              <CommonTopButton
                bgColor="#52796F"
                borderColor="#DAF0EE"
                color="#FFFFFF"
                text="Rented On B8R"
                onclicked={() => handlePageAvailable("rent")}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <CommonTopButton
                bgColor="#D2D7D6"
                borderColor="#DAF0EE"
                color="#77A8A4"
                text="Delist(Owner Denied)"
                onclicked={() => handlePageAvailable("delist")}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <CommonTopButton
                bgColor="#D2D7D6"
                borderColor="#DAF0EE"
                color="#77A8A4"
                text="Rented Outside"
                onclicked={() => handlePageAvailable("rented")}
              />
            </div>

            {/* </div> */}
            {/* for title and text */}
          </div>
        </div>

        {/* -----------------------------------------------2nd div----------------------------------------------------- */}

        {/* -----------------------------------------------3rd div----------------------------------------------------- */}
        {stateRender == "rent" ? (
          <form className="login-form" onSubmit={handleSubmit}>
            <div
              className="containered form"
              style={{
                height: "500px",
                borderRadius: "15px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {/* for image */}
                <div>
                  <b>Enter Details if Rented on B8R</b>
                </div>
                {/* for title and text */}

                <div style={{ marginTop: "20px" }}>
                  <label
                    for="map"
                    style={{
                      textAlign: "left",
                      display: "block",
                      marginBottom: "0.5rem",
                      fontWeight: "300",
                      float: "left",
                    }}
                  >
                    Select Tenant Name
                  </label>
                  <input
                    type="text"
                    id="map"
                    name="map"
                    value={formData.name}
                    onChange={handleChange}
                    // placeholder="Google Maps Plug-in"
                    style={{
                      backgroundColor: "#F5F5F5",
                      padding: "10px",
                      borderRadius: "10pxpx",
                      border: "1px solid #52796F",
                    }}
                  />

                  <label
                    for="map"
                    style={{
                      textAlign: "left",
                      display: "block",
                      marginBottom: "0.5rem",
                      fontWeight: "300",
                      float: "left",
                    }}
                  >
                    Select Rent Amaount (Rent + Maintenance)
                  </label>
                  <input
                    type="text"
                    id="map"
                    name="map"
                    //   value={formData.map}
                    //   onChange={handleChange}
                    // placeholder="Google Maps Plug-in"
                    style={{
                      backgroundColor: "#F5F5F5",
                      padding: "10px",
                      borderRadius: "10pxpx",
                      border: "1px solid #52796F",
                    }}
                  />

                  <label
                    for="map"
                    style={{
                      textAlign: "left",
                      display: "block",
                      marginBottom: "0.5rem",
                      fontWeight: "300",
                      float: "left",
                    }}
                  >
                    Enter Tenant Contact Number
                  </label>
                  <input
                    type="text"
                    id="map"
                    name="map"
                    //   value={formData.map}
                    //   onChange={handleChange}
                    // placeholder="Google Maps Plug-in"
                    style={{
                      backgroundColor: "#F5F5F5",
                      padding: "10px",
                      borderRadius: "10pxpx",
                      border: "1px solid #52796F",
                    }}
                  />

                  <label
                    for="map"
                    style={{
                      textAlign: "left",
                      display: "block",
                      marginBottom: "0.5rem",
                      fontWeight: "300",
                      float: "left",
                    }}
                  >
                    Tenancy Start Date
                  </label>
                  <input
                    type="text"
                    id="map"
                    name="map"
                    //   value={formData.map}
                    //   onChange={handleChange}
                    // placeholder="Google Maps Plug-in"
                    style={{
                      backgroundColor: "#F5F5F5",
                      padding: "10px",
                      borderRadius: "10pxpx",
                      border: "1px solid #52796F",
                    }}
                  />
                  <label
                    for="map"
                    style={{
                      textAlign: "left",
                      display: "block",
                      marginBottom: "0.5rem",
                      fontWeight: "300",
                      float: "left",
                    }}
                  >
                    Agreement For
                  </label>
                  <input
                    type="text"
                    id="map"
                    name="map"
                    //   value={formData.map}
                    //   onChange={handleChange}
                    // placeholder="Google Maps Plug-in"
                    style={{
                      backgroundColor: "#F5F5F5",
                      padding: "10px",
                      borderRadius: "10pxpx",
                      border: "1px solid #52796F",
                    }}
                  />
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <BackButton title="Go Back" margin="" fontweight="bolder" />
              <CommonBtn
                title="Yes, close listing"
                margin="40%"
                fontweight="bolder"
              />
            </div>
          </form>
        ) : null}
        {/* -----------------------------------------------3rd div----------------------------------------------------- */}
        {/* BODY */}

        {stateRender == "delist" ? (
          <div>
            <p>
              <b>Write your Feedback here</b>
            </p>
            <div
              className="containered form"
              style={{
                height: "250px",
                width: "320px",
                borderRadius: "15px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <p>TEXT</p>
            </div>
          </div>
        ) : null}
        {/* ---------------------------------------------------------------------------------------------------------------- */}
        {stateRender == "rented" ? (
          <div
            className="containered form"
            style={{
              height: "400px",
              borderRadius: "15px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* for image */}
              <div>
                <b>Enter Details if Rented outside</b>
              </div>
              {/* for title and text */}

              <div style={{ marginTop: "20px" }}>
                <label
                  for="map"
                  style={{
                    textAlign: "left",
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "300",
                    float: "left",
                  }}
                >
                  Select Tenant Name
                </label>
                <input
                  type="text"
                  id="map"
                  name="map"
                  //   value={formData.map}
                  //   onChange={handleChange}
                  placeholder="Google Maps Plug-in"
                  style={{
                    backgroundColor: "#F5F5F5",
                    padding: "10px",
                    borderRadius: "10pxpx",
                    border: "1px solid #52796F",
                  }}
                />

                <label
                  for="map"
                  style={{
                    textAlign: "left",
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "300",
                    float: "left",
                  }}
                >
                  Select Rent Amaount (Rent + Maintenance)
                </label>
                <input
                  type="text"
                  id="map"
                  name="map"
                  //   value={formData.map}
                  //   onChange={handleChange}
                  placeholder="Google Maps Plug-in"
                  style={{
                    backgroundColor: "#F5F5F5",
                    padding: "10px",
                    borderRadius: "10pxpx",
                    border: "1px solid #52796F",
                  }}
                />

                <label
                  for="map"
                  style={{
                    textAlign: "left",
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "300",
                    float: "left",
                  }}
                >
                  Enter Tenant Contact Number
                </label>
                <input
                  type="text"
                  id="map"
                  name="map"
                  //   value={formData.map}
                  //   onChange={handleChange}
                  placeholder="Google Maps Plug-in"
                  style={{
                    backgroundColor: "#F5F5F5",
                    padding: "10px",
                    borderRadius: "10pxpx",
                    border: "1px solid #52796F",
                  }}
                />

                <label
                  for="map"
                  style={{
                    textAlign: "left",
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "300",
                    float: "left",
                  }}
                >
                  Agreement For
                </label>
                <input
                  type="text"
                  id="map"
                  name="map"
                  //   value={formData.map}
                  //   onChange={handleChange}
                  placeholder="Google Maps Plug-in"
                  style={{
                    backgroundColor: "#F5F5F5",
                    padding: "10px",
                    borderRadius: "10pxpx",
                    border: "1px solid #52796F",
                  }}
                />
              </div>
            </div>
          </div>
        ) : null}

        <Footer />
      </div>
    </>
  );
}
export default ChangeStatus;
