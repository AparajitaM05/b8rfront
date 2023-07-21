import React from "react";
import backgroundImg from "../../Assets/Images/Sale/RestBg.png";
import CommonHeader from "../../CommonHeader";
import CommonBtn from "../../CommonButton";
import CommonTopButton from '../../CommonTopButton';
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import CreateBoardUpper from "../../Assets/Byerboard.png";
import CreateBoardAmm from "../../Assets/CreateBoardAmm.png";
import axios from 'axios';
import searchImg from "../../Assets/Search.png";
import SearchBar from "../../SearchBar";


function CreateBoardS()
{
  const handleSearch = (searchValue) => {
    // Custom search handling logic
    console.log("Searching for:", searchValue);

    // Perform search operations here
  };
    return(
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
        <CommonHeader title="Create/Add to Board"/>

        <img src={CreateBoardUpper} style={{height:"190px"}}/>
        <img src={CreateBoardAmm} style={{height:"180px"}}/>

        <h3 style={{color:"#1E0058"}}>Create Buyer Board</h3>

        <SearchBar onSearch={handleSearch} placeholder="Search by Property Name"/>

        <CommonBtn title="View Board" margin="90px" bgColor="#3F007F"/>

        <Footer/>
        </div>
        </>
        
    );


}
export default CreateBoardS;