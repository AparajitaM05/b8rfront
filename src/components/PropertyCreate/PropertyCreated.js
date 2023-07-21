import React, { Component,useState }  from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './LandlordInfo.css';
import backgroundSecond from "../Assets/Images/other_bg.png";
import Footer from '../Footer';
import { useEffect } from 'react';

import vector from "../Assets/Images/vector.png"
import num_2 from "../Assets/Images/num_2.png"
import hamburger_1 from "../PropertyAdditionPageIcons/hamburger_1/24.png";
import logo from "../Assets/Images/Logo.png";
import loadingImg from "../Assets/Images/loading.gif";
import BackButton from "../CommonButtonBack";
import CommonHeader from "../CommonHeader";
import CommonBtn from "../CommonButton";
import CommonTopButton from "../CommonTopButton";


function PropertyCreated(){

	const [responseTenant, setresponseTenant] = useState();
	const [loading, setLoading] = useState(false);
  
	const token = localStorage.getItem("token");
	console.log(token);
  
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
			.get("http://localhost:5000/backend/propertyinfo", axiosConfig)
			.then((response) => {
			  setresponseTenant(response.data);
			  console.log(responseTenant);
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
	
	  

    return(
		<>
		<div className='login-page form' style={{height:"730PX",width:"370PX",backgroundColor:"#FFFFFF",marginLeft:"35%",borderRadius:"15px"}}>
			<div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
			{/* <img src={logo} alt={logo} height={25} style={{marginTop:"20px",marginLeft:"10px"}}/> */}
			{/* <h3 style={{color:"#52796F",marginLeft:"70px", marginTop: "15px"}}>Property Created</h3> */}
			<CommonHeader title="Property Created" color="#52796F"/>
			{/* <img src={hamburger_1} alt={hamburger_1} style={{marginLeft:"50px"}} height={25}/> */}
			</div>

			<div style={{ display: "flex",justifyContent: "center",alignItems: "center",flexDirection: "column"}}>
			  	<h4>Property Created</h4>
				<h4>(ID:)</h4>
				<h4>Location</h4>
				<h4>Name</h4>
				<h4>Features</h4>
				<h4>Rent Details</h4>

			</div>
		
		<Link to="/dashboard"><CommonBtn title="Go to Agent Dashboard" margin="60px"/></Link>	
<Footer/>
		
		</div>


		</>
		
		 
		
    );
};
export default PropertyCreated;