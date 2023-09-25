import React, { useState } from "react";
import "../Dashboard.css";
import Heart from "react-animated-heart";
// import "./DashComponent.css";
import homeDown from "../Assets/Images/FieldAgent/homeDown.png";
import Rupee from "../Assets/Images/TenantSide/Ruppee.png";
import space from "../Assets/Images/TenantSide/area.png";
import Sofa from "../Assets/Images/TenantSide/Sofa.png";
import HouseConfig from "../Assets/Images/TenantSide/HouseConfig.png";
import Parking from "../Assets/Images/TenantSide/Parking.png";
import Parking2 from "../Assets/Images/TenantSide/Parking2.png";
// import ActiveLeads from "./ActiveLeads";

function TenantSideViewComp({ boards }) {
  // const { img, rent, area, houseConfig, FurnishingType, parking } = props;
  const [isClick, setClick] = useState(false);
console.log(boards);

  return (
    <>
         {/* Mapping */}
         {boards.map((board, index) => (
        <div key={index}>

      {/* Full Div */}

      <div style={{ display: "flex", flexDirection : "column", backgroundColor: "#DAF0EE", borderRadius: "20px",margin: "1%" }}>
        <div
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "20px",
            color: "#DAF0EE",
          }}
        >
          {/* For Images */}
          <img src={homeDown} alt="Los Angeles" />
        </div>

        {/* For Details */}
        <div style={{ display: "flex", flexDirection : "row" , justifyContent: "space-between"}}>
         <div style={{ textAlign: "centre" , ItemAlign: "centre", display: "flex", flexDirection : "row" }}><img style={{marginTop:"20px"}} src={Rupee} height={19} /><h6 style={{ textAlign: "centre" , ItemAlign: "centre", display: "flex", flexDirection : "row" }}>35,000/month<p style={{marginTop:"0px"}}>(incl. Maintenance )</p></h6></div> 
          <div className="Apps" style={{ display: "flex", flexDirection : "row-reverse", zoom:"0.5" }}>
            <Heart height={10} isClick={isClick} onClick={() => setClick(!isClick)} />
            {isClick ? (
            <p
              style={{
                fontStyle: "Glida Display",
                fontSize: "20px",
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
                fontSize: "20px",
                color: "#B30808",
                fontWeight: "bold",
                margin: "40px -30px 0 10px"
              }}
            >
           
              Shortlist{" "}
            </p>
          )}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection : "row" , justifyContent: "space-around"}}>

                <div  style={{display:"flex",flexDirection : "row"}}>
                <img src={space} height={17}/>
                <h6 style={{marginTop:"0px"}}> 1220 sqft</h6>
                </div>

                <div  style={{display:"flex",flexDirection : "row"}}>
                <img src={HouseConfig} height={17}/>
                <h6 style={{marginTop:"0px"}}> 1220 sqft</h6>
                </div>


                <div  style={{display:"flex",flexDirection : "row"}}>
                <img src={Sofa} height={17}/>
                <h6 style={{marginTop:"0px"}}> 1220 sqft</h6>
                </div>


                <div  style={{display:"flex",flexDirection : "row"}}>
                <img src={Parking} height={17}/>
                <h6 style={{marginTop:"0px"}}> 1220 sqft</h6>
                </div>




        </div>
      </div>

      </div>
      ))}
    </>
  );
}
export default TenantSideViewComp;
