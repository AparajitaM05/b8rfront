import React, { Component, useState, useEffect } from "react";
import CommonHeader from "../CommonHeader";
import CommonBtn from "../CommonButton";
import CommonTopButton from "../CommonTopButton";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import oneBg from "../Assets/Images/Sale/AllPropertyBg.png";
import SearchBar from "../SearchBar";
import { BsSearchHeart } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import searchImg from "../Assets/Search.png";
import propertyComp from "./propertyComp";

function AllTenantOneS() {
  const [waitingProperyData, setwaitingPropery] = useState(false);
  const [shortListedData, setshortListed] = useState(false);
  const [currentViewData, setcurrentView] = useState(false);
  const [archiveData, setArchiveData] = useState(false);

  const [ActivebgColor, setActivebgColor] = useState("#D2D7D6");
  const [ActiveBorderColor, setBorderColor] = useState("#A9C0BA");
  const [activeColor, setColor] = useState("#77A8A4");

  const handleSearch = (searchValue) => {
    // Custom search handling logic
    console.log("Searching for:", searchValue);

    // Perform search operations here
  };

  const handlePageAvailable = () => {
    // Custom search handling logic
    if (archiveData) {
      setArchiveData(false);
    } else {
      setArchiveData(true);
      setActivebgColor("#52796F");
      setBorderColor("#DAF0EE");
    }
  };


  return (
    <>
      <div
        className="form"
        style={{
          borderRadius: "16px",
          marginTop: "10%",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${oneBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <CommonHeader title="All Buyer" color="#1E0058" />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <div style={{ marginRight: "8px" }}>
            {waitingProperyData ? (
              <CommonTopButton
                bgColor="#1E0058"
                borderColor="#DAF0EE"
                color="#DAF0EE"
                text="Wating For Property"
                onclicked={() => setwaitingPropery((current) => !current)}
              />
            ) : (
              <CommonTopButton
                bgColor="#F5F5F5"
                borderColor="#B3A8C8"
                color="#B3A8C8"
                text="Waiting For Property"
                onclicked={() => setwaitingPropery((current) => !current)}
              />
            )}
          </div>
          <div>
            {shortListedData ? (
              <CommonTopButton
                bgColor="#1E0058"
                borderColor="#DAF0EE"
                color="#DAF0EE"
                text="Shortlisted"
                onclicked={() => setshortListed((current) => !current)}
              />
            ) : (
              <CommonTopButton
                bgColor="#F5F5F5"
                borderColor="#B3A8C8"
                color="#B3A8C8"
                text="Shortlisted"
                onclicked={() => setshortListed((current) => !current)}
              />
            )}


          </div>
          {/* Listing */}
        </div>

        {/* -------------------------------------------------------------------------------- */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
            marginTop: "-10px",
          }}
        >
          <div style={{ marginRight: "8px" }}>
            {currentViewData ? (
              <CommonTopButton
                bgColor="#D2D7D6"
                borderColor="#A9C0BA"
                color="#77A8A4"
                text="Currently Viewing"
                onclicked={() => setcurrentView((current) => !current)}
              />
            ) : (
              <CommonTopButton
                bgColor="#F5F5F5"
                borderColor="#B3A8C8"
                color="#B3A8C8"
                text="Currently Viewing"
                onclicked={() => setcurrentView((current) => !current)}
              />
            )}
          </div>
          <div>
            {archiveData ? (
              <CommonTopButton
                bgColor="#1E0058"
                borderColor="#A9C0BA"
                color="#A9C0BA"
                text="Archived"
                onclicked={handlePageAvailable}
              />
            ) : (
              <CommonTopButton
                bgColor="#F5F5F5"
                borderColor="#B3A8C8"
                color="#B3A8C8"
                text="Archived"
                onclicked={handlePageAvailable}
              />
            )}

    
          </div>
          {/* Listing */}
        </div>

        <SearchBar onSearch={handleSearch} placeholder="Search by Buyer name" />

        {archiveData ? (
          <>
            {/* <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between" , marginRight:"10px"}}> */}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <div style={{ marginRight: "8px" }}>
                <CommonTopButton
                  text="Sold On B8R"
                  bgColor="#F5F5F5"
                  borderColor="#B3A8C8"
                  color="#B3A8C8"
                />
              </div>

              <div>
                <CommonTopButton
                  text="Sold Outside"
                  bgColor="#F5F5F5"
                  borderColor="#B3A8C8"
                  color="#B3A8C8"
                  // margin="0px 0px 0px 1px"
                />
              </div>
            </div>
            <div
              style={{ marginTop: "10px", width: "30px", marginRight: "10px" }}
            >
              <CommonTopButton
                text="Others"
                bgColor="#F5F5F5"
                borderColor="#B3A8C8"
                color="#B3A8C8"
                margin="0px 0px 0px 0px"
              />
            </div>

            <p style={{ textAlign: "left" }}>
              {" "}
              Hey Yash,
              <br />
              Here are all the buyers that you have onboarded
            </p>
          </>
        ) : (
          <p style={{ textAlign: "left" }}>
            Hey Yash, <br />
            Here are all the buyers that you have onboarded
          </p>
        )}

        <Footer />
      </div>
    </>
  );
}
export default AllTenantOneS;
