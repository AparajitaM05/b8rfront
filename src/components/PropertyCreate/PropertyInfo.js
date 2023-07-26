import React, { Component, useState } from "react";
import PropertyInfocss from "./PropertyInfo.css";
import { Link } from "react-router-dom";
import axios from "axios";
import backgroundSecond from "../Assets/Images/other_bg.png";
import Footer from "../Footer";
import vector from "../Assets/Images/vector.png";
import num_1 from "../Assets/Images/num.png";
import CommonBtn from "../CommonButton";
import CommonHeader from "../CommonHeader";

function PropertyInfo() {
  const [formData, setFormData] = useState({
    house_type: "",
    house_conf: "",
    house_num: "",
    society_type: "",
    pin_code: "",
    area: "",
    map: "",
    // rented: "false",
    rent: "",
    sale: "",
});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const token = localStorage.getItem("token");
  console.log(token);
  console.log(formData);
  
  const pincodeRegex = /^\d{6}$/;

  const validatePincode = () => {
    console.log("blur");
    if (pincodeRegex.test(formData.pin_code)) {
      alert('Valid PIN code');
    } else {
      alert('Invalid PIN code');
    }
  };

  
  //API REQUEST
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Basic ${token}`,
    },
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:5000/backend/propertyinfo", formData, axiosConfig)
      .then((response) => {
        // console.log(response.data);
        console.log(response.data.propertyInfoc);
        const propertyid = response.data.propertyInfoc._id;
        console.log(propertyid)
        alert("Your data has been submitted");
        window.location.href = `/landlordinfo?propertyid=${propertyid}&continue=true`;
        // window.location.href = "/PropertyDI";

        // do something with the response
      })
      .catch((error) => {
        console.log(error);
        // handle the error
      });
  };

  

  return (
    <div>
      <div className="login-page">
        <div
          class="form"
          style={{
            borderRadius: "16px",
            marginTop: "10%",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${backgroundSecond})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
          
        >
          {/* <h2 style={{ color:"#52796f" }}>Create New Listing </h2> */}
          <CommonHeader title="Create New Listing" color="#52796f"/>
				  <img src={num_1} alt="Image description" height={55} width={300} />

          <form className="login-form inner-background" onSubmit={handleSubmit}>
          <h4 style={{ color:"#52796f" }} > Let's get some basic details in</h4>

            <label for="house_type" style={{textAlign: "left",display: "block",marginBottom: "0.5rem",fontWeight: "300",float: "left",}}>What is the House type?</label>
            <select
              id="house_type"
              name="house_type"
              value={formData.house_type}
              onChange={handleChange}
              style={{
                      backgroundColor: "white",
                      padding: "10px",
                      borderRadius: "5px",
                      border: "1px solid #52796F",
                     
                    }}
            >
			 
              <option value="Selectfromdropdown" >Select from Drop Down</option>
              <option value="Flat(ingatedsociety)">Flat(in Gated Society)</option>
              <option value="Individual"> Individual Builder Floor</option>
              <option value="Indvidualhouse"> Individual House(in Gated Society)</option>
              <option value="standalonehouse">
                Standalone Individual House
              </option>
            </select>
            <br></br>

		  	{/* house configuration */}
            <label for="house_conf" style={{textAlign: "left",display: "block",marginBottom: "0.5rem",fontWeight: "300",float: "left",}}>What is the house configuration? </label>
            <select
              id="house_conf"
              name="house_conf"
              value={formData.house_conf}
              onChange={handleChange}
              style={{
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #52796F",
               
              }}
            >
              <option value="gated_apartment">Select from Drop Down</option>
              <option value="Studio">
                Studio
              </option>
              <option value="1BHK">1BHK</option>
              <option value="2BHK">2BHK</option>
              <option value="2.5BHK">2.5BHK</option>
              <option value="3BHK">3BHK</option>
              <option value="3.BHK">3.5BHK</option>
              <option value="4BHK">4BHK</option>
              <option value="4.5BHK">4.5BHK</option>
            </select>
            <br></br>

	

            	{/* house_num type */}

              <label for="house_num" style={{textAlign: "left",display: "block" ,marginBottom: "0.5rem",fontWeight: "300",float: "left",}}>
              House Number/ Flat Number/ Name
            </label>
            <input
              type=""
              id="house_num"
              value={formData.house_num}
              onChange={handleChange}
              name="house_num"
              placeholder="Text Input (Do not Enter Block Number"
              style={{
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #52796F",
                
              }}
            ></input>

            
			{/* Society type */}

            <label for="society_type" style={{textAlign: "left",display: "block" ,marginBottom: "0.5rem",fontWeight: "300",float: "left",}}>
              What is the Society?
            </label>
            <input
              type=""
              id="society_type"
              value={formData.society_type}
              onChange={handleChange}
              name="society_type"
              placeholder="for eg(Oceanus Triton or Sushant Estate)"
              style={{
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #52796F",
                
              }}
            ></input>

			{/* Pin code */}

            <label for="pin_code" style={{textAlign: "left",display: "block",marginBottom: "0.5rem",fontWeight: "300",float: "left",}}>Pin Code</label>
            <input
              type="number"
              id="pin_code"
              name="pin_code"
              value={formData.pin_code}
              onChange={handleChange}
              onBlur={validatePincode} 
              placeholder="Pin code"
			  style={{
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #52796F",
                
              }}
            ></input>
            <br></br>
            {/* Area */}
            <label for="address" style={{textAlign: "left",display: "block",marginBottom: "0.5rem",fontWeight: "300",float: "left"}}>Area/Locality</label>
            <input
              type="text"
              id="area"
              name="area"
              value={formData.area}
              onChange={handleChange}
              placeholder="Area/Locality"
              style={{
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #52796F",
                
              }}
            ></input>
            <br></br>

              {/* Map */}
            <label for="map" style={{textAlign: "left",display: "block",marginBottom: "0.5rem",fontWeight: "300",float: "left",}}>Select Map Location</label>
            <input
              type="text"
              id="map"
              name="map"
              value={formData.map}
              onChange={handleChange}
              placeholder="Google Maps Plug-in"
              style={{
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #52796F",
                
              }}
            />
            <br></br>
           
            <div className="checkContainer">
  <label
    htmlFor="checkboxGroup"
    style={{
      textAlign: "left",
      display: "block",
      marginBottom: "0.5rem",
      fontWeight: "300",
      float: "left",
    }}
  >
    Select Purpose:<br/>
    (select both if property is open for sale as well as rent)
  </label>
  <br></br>
<div className="checkboxes">
    <input
      type="checkbox"
      id="checkboxRent"
      name="rent"
      style={{ width:"10px", padding:"1%", boxShadow:"none", zoom:"2", borderRadius: "0px"}}
      // checked={rentChecked}
      onChange={handleChange}
    />
  <label for="checkboxRent">For Rent</label>

  </div>
  <div className="checkboxes">
    <input
      style={{ width:"10px", padding:"1%", boxShadow:"none", zoom:"2"}}
      type="checkbox"
      id="checkboxSale"
      name="sale"
      // checked={saleChecked}
      onChange={handleChange}
    />
  <label htmlFor="checkboxSale">For Sale</label>

  </div>
</div>



         
          </form>
          <div style={{marginTop:"10px"}}>
            <CommonBtn title="Save & Next" margin="70px"/>
            </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default PropertyInfo;
