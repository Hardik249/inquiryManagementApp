import React from "react";
import VerifyJwtSession from './verifyJwtSession'
// import "./topbar.css";


function Topbar() {
  return (
    <div className="Topbar mt-2 row">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Inquiry</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            {/*<span>Logged In User</span>*/}
          </div>
          <div className="topbarIconContainer">
            <span><VerifyJwtSession/></span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Topbar;