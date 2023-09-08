import React from "react";
import backgroundImg from "../../Assets/Images/BoardCreation/BackgroundBoard.png";
import CommonHeader from "../../CommonHeader";
import CommonBtn from "../../CommonButton";
import CommonTopButton from "../../CommonTopButton";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import deactivateImg from "../../Assets/Deactivate.png";
import CreateB from "../../Assets/Images/BoardCreation/CreateB.png";
function ViewBoard() {
  const queryParameters = new URLSearchParams(window.location.search);
  const name = queryParameters.get("name");
  const tenantId = queryParameters.get("tenantId");

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
        <CommonHeader title="View Board" color="#52796F" />

        <div style={{ Display: "flex" }}>
          <div>
            <h2>
              <u>{name}</u>
            </h2>
          </div>

          <h3>No Properties Shared Yet</h3>
          <Link to={`/CreateBoard?tenantId=${tenantId}&name=${name} `}>
            <img src={CreateB} height={400} />
          </Link>
          <img src={deactivateImg} style={{ marginTop: "100px" }} />
        </div>
        <Footer />
      </div>
    </>
  );
}
export default ViewBoard;
