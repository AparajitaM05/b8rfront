import React, {useEffect,useState} from "react";

import backgroundImg from "../../Assets/Images/BoardCreation/BackgroundBoard.png";
import CommonHeader from "../../CommonHeader";
import CommonBtn from "../../CommonButton";
import CommonTopButton from "../../CommonTopButton";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import deactivateImg from "../../Assets/Deactivate.png";
import CreateB from "../../Assets/Images/BoardCreation/CreateB.png";
import loadingGif from "../../Assets/Images/loading.gif";
import PropertyComp from "./PropertyComp";
import ViewBoardComp from "./ViewBoardComp";


function PropertyViewBoard() {
  const queryParameters = new URLSearchParams(window.location.search);
  const name = queryParameters.get("name");
  const boardId = queryParameters.get("boardId");
  console.log(boardId);

  const [responseDataBoard, setResponseDataBoard] = useState([]);
  const [responseDataProperty, setResponseDataProperty] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");


  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Basic ${token}`,
    },
  };
  
  useEffect(() => {
    const fetchBoardDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://b8rliving.com/board/${boardId}`,
          axiosConfig
        );

        // const responseData = response.data.data.tenant.tenantDetails;
        const responseDataBoardData = response.data.data.board;
        const responseDataPropertiesData = response.data.data.board.propertyId;
        console.log(responseDataBoardData);
        console.log(responseDataPropertiesData);

        // Update the formData state with the response data
        setResponseDataBoard(responseDataBoardData);
        setResponseDataProperty(responseDataPropertiesData);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false when the request is complete
      }
    }
    fetchBoardDetails(); // Call the fetch function
    }, [boardId]); 

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


          <ViewBoardComp props={responseDataProperty} loading={loading} Id={boardId} responseDataTenantData={responseDataBoard} />
            

        <div style={{display:"flex",marginTop:"10%"}}>
        <CommonBtn title="Add More" margin="90px" />
        <CommonBtn title="Share Board" marginRight="-5px"/>
        </div>
       

          <Link to={`/DeactivateTenant?tenantId=${boardId}&name=${name} `} ><img src={deactivateImg} style={{ marginTop: "100px" }} /></Link>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default PropertyViewBoard;
