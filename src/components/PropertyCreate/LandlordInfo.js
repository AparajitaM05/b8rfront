import React, { Component,useState }  from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './LandlordInfo.css';
import backgroundSecond from "../Assets/Images/other_bg.png";
import Footer from "../Footer";
import vector from "../Assets/Images/vector.png"
import num_2 from "../Assets/Images/num_2.png"
import BackButton from "../CommonButtonBack";
import CommonHeader from "../CommonHeader";
import CommonBtn from "../CommonButton";
import CommonTopButton from "../CommonTopButton";


function LandlordInfo(){

	
	const queryParameters = new URLSearchParams(window.location.search)
	const propertyid = queryParameters.get("propertyid");
	const isContinue = queryParameters.get("continue")
	console.log(propertyid);

	const [formData, setFormData] = useState({
		propertyid: propertyid,
		landlord_first_name: '',
		landlord_last_name: '',
		contact_number: '', 
		pan_card: '',
		residing_country: '',
	  });
	
	  const handleChange = event => {
		const { name, value } = event.target;
		setFormData(prevState => ({ ...prevState, [name]: value }));
	  };

	      //API REQUEST
		  const token = localStorage.getItem("token");
		  console.log(token);
	  
		  let axiosConfig = {
		  headers: {
			'Content-Type': 'application/json;charset=UTF-8',
			"Access-Control-Allow-Origin": "*",
			'Authorization': `Basic ${token}` 
			}
		  }
	
	
	  const handleSubmit = event => {
		event.preventDefault();
		console.log()
		axios.post('http://localhost:5000/backend/addlandlord', formData , axiosConfig )
		  .then(response => {


			console.log(response.data.LandlordInfoc);
			const propertyid = response.data.LandlordInfoc.propertyid;
			console.log(propertyid)
			alert("Your data has been submitted");
			window.location.href = `/PropertyDI?propertyid=${propertyid}&continue=true`;

		//redirect user to UploadPhotos

		  })
		  .catch(error => {
			console.log(error);
			// handle the error
		  });
	  };

	   //STYLES
         
	   const styles = {
        backgroundColor:"white",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid grey",
        boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)",
      };


    return(
        <div>
      <div className="login-page " >
		<div class="form" style={{  borderRadius: "16px", marginTop: "10%", backgroundRepeat: 'no-repeat' , backgroundImage: `url(${backgroundSecond})`, backgroundRepeat: 'no-repeat' , backgroundSize : '100% 100%' }}>
				  {/* <h2> Add Landlord Details </h2> */}
				  <CommonHeader  title="Add Landlord/Owner Details" color="#52796F"/>
				  <img src={num_2} alt="Image description" height={55} />
        <form onSubmit={handleSubmit} style={{ borderRadius: "16px" }} className="inner-background">
			{/* Landlord FIRST NAME */}
			<h4 style={{ color:"#52796f" }} > Who owns this Property?</h4>

		<label for="first" style={{textAlign: "left",display: "block",marginBottom: "0.5rem",fontWeight: "300",float: "left",}}>Landlord First Name* </label>
		<input type="text" id="first" placeholder="Landlord First Name" name="first" value={formData.OwnerInfo.name.first} onChange={handleChange} style={ styles }/><br></br>
		{/* Landlord LAST NAME */}
		 <label for="last" style={{textAlign: "left",display: "block",marginBottom: "0.5rem",fontWeight: "300",float: "left",}}>Landlord Last Name* </label>
		<input type="text" id="last" placeholder = "Landlord last name" name="last" value={formData.OwnerInfo.name.last} onChange={handleChange} style={ styles }/><br></br> 
		
		
		{/* CONTACT NUM */}
		<label for="phoneNumber" style={{textAlign: "left",display: "block",marginBottom: "0.5rem",fontWeight: "300",float: "left"}}>Contact Number*</label>
		<input type="tel" id="phoneNumber" placeholder="contact number" name="phoneNumber" value={formData.OwnerInfo.phoneNumber} onChange={handleChange} style={ styles }/><br></br>
			{/* PAN CARD */}
		<label for="panNumber" style={{textAlign: "left",display: "block",marginBottom: "0.5rem",fontWeight: "300",float: "left",}}>Pan Card(Useful for Rental Agreement)</label>
		<input type="number" id="panNumber" placeholder="pan number" name="panNumber" value={formData.OwnerInfo.panNumber} onChange={handleChange} style={ styles }/><br></br>
		{/* Residing Country */}
		<label for="country" style={{textAlign: "left",display: "block",marginBottom: "0.5rem",fontWeight: "300",float: "left",}}>Country of residence of Landlord*</label>
		<input type="text" id="country" placeholder="residing country" name="country" value={formData.OwnerInfo.country} onChange={handleChange} style={ styles }/><br></br>

		<label for="city" style={{textAlign: "left",display: "block",marginBottom: "0.5rem",fontWeight: "300",float: "left",}}>City of residence of Landlord*</label>
		<input type="text" id="city" placeholder="residing city" name="city" value={formData.OwnerInfo.city} onChange={handleChange} style={ styles }/><br></br>
		
		
		
		<br></br>
		{/* <hr></hr> */}

		{/* <Link to="/UploadPhotos"><button  style={{  fontWeight: "900" }}>Skip</button></Link> */}
		{/* <button className="CommonnBackButton" style={{  color: "white", fontWeight: "1000" , textAlign: "left", fontStyle: "normal", width: "105%" }}><img className="vectorBack" src={vector} alt="fireSpot"/>Back</button> */}
		
		{/* <div class="buttonBackNext">
		<button className="CommonnBackButton" style={{  fontSize: "16px", fontWeight: "1000" , textAlign: "right", fontStyle: "normal", width: "35%" }}>Back <img className="vectorBack" src={vector} alt="fireSpot"  style={{ float: "left", marginLeft: "-5%" }}/></button>
		<button className="CommonnButton" style={{  fontWeight: "1000" , textAlign: "left", fontStyle: "normal", width: "55%" }}>Save and Next <img className="vectorSignIn" src={vector} alt="fireSpot"/></button>
		</div> */}
	

	</form>
	<div className='n' style={{ marginTop:"10px", marginLeft:"-7px"}}>
            
            <BackButton title="Back" fontweight="bolder" />
            <CommonBtn title="Save and next" margin="40%" fontweight="bolder" />
        </div>
	<Footer/>
            </div>
			{/* </div> */}
        </div>
        </div>

		
    );
}
export default LandlordInfo;