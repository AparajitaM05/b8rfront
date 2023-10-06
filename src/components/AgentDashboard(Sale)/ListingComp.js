import React from "react";
import "./DashboardS.css";
import "./ListingComp.css";

import imgOne from "../Assets/Images/AgentDashboard/imgOne.png";
import checkP from "../Assets/Images/AgentDashboard/CheckP.png";
import Seen from "../Assets/Images/Seen.png";
import shared from "../Assets/Images/shared.png";
import noImg from "../Assets/Images/AgentDashboard/noImg.png";
// import ActiveLeads from "./ActiveLeads";

function ListingComp(props) {
  const { img, title , status, statusTitle , snum, vnum } = props;

  return (
    <>
    {status ? 
    (
        <div class="left-container">
        {/* <!-- left side --> */}
        <div class="left-content">
          {/* <!-- img --> */}
          <div class="left-image">
            <img src={imgOne} alt="imgOne" />
          </div>
          <div class="left-text-container">
            <text class="left-address-text">{title}</text>

            <div class="left-info-box">
              <text class="left-info-text">Under Review</text>
            </div>
          </div>
        </div>
        {/* <!-- right side --> */}
        <div class="right-container">
          <img src={checkP} class="right-image" />
          <text class="right-text">Email</text>
        </div>
      </div>
    ) : (

        <div class="left-container">
        {/* <!-- left side --> */}
        <div class="left-content">
          {/* <!-- img --> */}
          <div class="left-image">
            <img src={imgOne} alt="imgOne" />
          </div>
          <div class="left-text-container">
            <text class="left-address-text">{title}</text>
<br></br>
            { snum ? (
            <div class="left-info-box-shared-main">
                <div class="left-info-box-shared">  
                     <img src={shared} height={22} alt="shared" />
                     <text class="left-address-text-s"><b>Shared <br></br> {snum} Clients</b></text>
                </div>
                <div class="left-info-box-seen">  
                     <img src={Seen} height={12} alt="Seen" />
                     <text class="left-address-text-s"><b>Viewed <br></br> {vnum} Clients</b></text>
                </div>
              </div>

            ) : (
                <div class="left-info-box-await">
                  <p>Pending Photos from Field Agent</p>
              <text class="left-info-text-await">Awaiting Photos</text>
            </div>

            ) } 

            {/* <div class="left-info-box-await">
              <text class="left-info-text-await">Awaiting Photos</text>
            </div> */}



          </div>
        </div>
        {/* <!-- right side --> */}
        <div class="right-container">
          <img src={checkP} class="right-image" />
          <text class="right-text">Email</text>
        </div>
      </div>

    ) }





    </>
  );
}
export default ListingComp;
