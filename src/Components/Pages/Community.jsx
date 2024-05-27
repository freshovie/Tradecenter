import React from "react";
import "./style.scss";
import { Desktop } from "../../assets";
import { IoCartOutline } from "react-icons/io5";


const Community = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
          <div className="comm-unity">
            <img src={Desktop} alt="Desktop" style={{width: '100%'}} />
            <div className="community-text">
              <center>
                <h2>
                  Join a Community of Global Shoppers. Join Different Shipment
                  Groups Across Different Product Categories.
                </h2>
                <button className="startshop">Start Shopping <IoCartOutline /> </button>
              </center>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </React.Fragment>
  );
};

export default Community;
