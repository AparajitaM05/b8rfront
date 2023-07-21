import React, { useEffect, useRef } from 'react';
import Dashboardcss from '../Dashboard.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import UserLoginDetails from '../UserLoginDetails';
// import homeDown from '../Assets/Images/homeDown.png';
// import peopleDown from '../Assets/Images/peopleDown.png';
import Housimg from "../Assets/Images/TenantSideView/TenantSideViewS.png";
import Footer from '../Footer';
import logo from "../Assets/Images/Logo.png";


function TenantSideView() {
  const Name= "Prashant"
  const token = localStorage.getItem('token');
  console.log(token);

  const containerRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.removeItem('token');
    alert('You have been logged out.');
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.kuula.io/embed.js';
    script.async = true;
    script.setAttribute(
      'data-kuula',
      'https://kuula.co/share/collection/7FVHk?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1'
    );
    script.setAttribute('data-width', '100%');
    script.setAttribute('data-height', '640px');

    containerRef.current.appendChild(script);

    return () => {
      containerRef.current.innerHTML = '';
    };
  }, []);

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
          <Link to="/DetailView"><img
            src={Housimg}
            alt="Tenant"
            height={320}
          /></Link>
          <img
            
            style={{ height: '40px', cursor: 'pointer' }}
            onClick={() => {
              window.open(
                'https://kuula.co/share/collection/7FVHk?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1',
                '_blank'
              );
            }}
          />
          <div ref={containerRef}></div>
          <div>
            <h5></h5>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default TenantSideView;



