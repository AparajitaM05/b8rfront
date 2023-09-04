import React from 'react';
import { Link } from 'react-router-dom';
import PendingVerification from "../Assets/Images/AgentDashboard/PendingVerification.png";
import checkP from "../Assets/Images/AgentDashboard/CheckP.png";

const TenantComp = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" ,marginTop:"10px"}}>
    {/* left side */}
<div style={{height:"78px",width:"302px",background:"#FFFFFF",border:"1px solid #DAF0EE",borderRadius:"15px",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)", display:"flex"}}>
        {/* img */}
        <div style={{display:"flex"}}>
                <img src={PendingVerification} alt="imgOne" style={{marginLeft:"10px", marginTop:"25px"}} height={30}/>
                <div style={{display: "flex",alignItems: "left"}}>
                <h6 style={{marginRight: "0px"}}>Waiting For property</h6>
               
                </div>

                <hr style={{ flex: "1", marginLeft: "-1px"}} />

        </div>
        <div style={{marginTop:"10px"}}>
                <text style={{fontSize:"13px"}}>Nmae of the tenant</text>

                <div style={{width:"150px",height:"25px",borderRadius:"10px",marginTop:"20px",marginLeft:"10px"}}>
                        <text style={{fontSize:"12px",marginLeft:"-50px",fontFamily:"Inter",fontStyle:"normal"}}><u>Prefference</u></text>
                        <p style={{fontSize:"12px",marginLeft:"-50px",fontFamily:"Inter",fontStyle:"normal",marginTop:"-0px",fontWeight:"bold"}}>Rs.</p>
                </div>

        </div>
</div>
{/* right side */}

<div style={{height:"75px",width:"52px",background:"#E8E7E7",borderRadius:"10px",marginLeft:"10px"}}> 

    <Link to="">
<img src={checkP} style={{height:"27px",marginTop:"20px",marginBottom:"-8px"}}/>
<text style={{fontSize:"12px",color:"#5D6560",fontWeight:"bold"}}>Take Action</text>
</Link>
</div>
   


</div>

  );
};

export default TenantComp;
