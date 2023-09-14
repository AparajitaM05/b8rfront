import React, { useEffect, useRef , useState } from 'react';
import Dashboardcss from '../Dashboard.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Housimg from "../Assets/Images/TenantSideView/TenantSideViewS.png";
import Footer from '../Footer';
import logo from "../Assets/Images/Logo.png";
import TenantSideViewComp from './TenantSideViewComp';


function TenantSideView() {
  const Name= "Prashant"
  const [loading, setLoading] = useState(false);
  const [responseBoards, setresponseBoards] = useState([]);

  const token = localStorage.getItem("token");
//   console.log(token);

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Basic ${token}`,
    },
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://b8rliving.com/board/64e8afdb9609518e5beb7c9a",
          axiosConfig
        );
  
        setresponseBoards(response.data.data.board.propertyId);
      } catch (error) {
        console.log(error);
        // Handle the error here if needed
      } finally {
        setLoading(false);
      }
    };
  
    fetchPosts();
  }, []);
  
  // This useEffect will log the updated state after it has been set.
  useEffect(() => {
    console.log(responseBoards);
  }, [responseBoards]);

  return (
    <>

    
    
      <div
        className="form"
        style={{
          borderRadius: '16px',
          marginTop: '10%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        }}
      >
        <div className="MainLogoDesign">
        <Link to="/dashboard"><img  src={logo} height={40} alt="fireSpot"/></Link>
      </div>
        <h2 style={{ color: '#52796F' }}>Welcome</h2>
        <h3 style={{ textAlign: 'left' }}>Hey, {Name}</h3>
        <h5 style={{ textAlign: 'left' }}>
          Your agent, Mr. Rohit, has shared 4 awesome properties with you!
          <br />
          Check them out and pick which you like.
        </h5>

        <div
          // className="containered form"
          // style={{
          //   height: '300px',
          //   borderRadius: '5px',
          //   boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          //   background: '#DAF0EE',
          // }}
        >
          {/* <Link to="/DetailView"><img
            src={Housimg}
            alt="Tenant"
            height={320}
          /></Link> */}
        
       
        
        <TenantSideViewComp boards={responseBoards} />
          
          <h3 style={{fontFamily:"GlidaDisplay"}}>That’s All for the Day!<br/>
        Hope you love the properties shared.</h3>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default TenantSideView;



