import React from "react";
import "./style.scss";
import { IoCartOutline } from "react-icons/io5";
import { Girl, Guy, SideImage } from "../../assets";

const Hero = () => {
  return (
    <React.Fragment>
      {/* Row to contain the hero section */}
      <div className="row">
        {/* Empty column for spacing on larger screens */}
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        {/* Main content column */}
        <div className="col-sm-12 col-md-12 col-lg-10">
          <div className="hero">
            {/* Content section */}
            <div className="heroedit">
              {/* Heading */}
              <h4>
                Get <span>Wholesale Prices <br /> Without</span> Buying <br /> Wholesale <span>Quantities</span>
              </h4>
              {/* Description */}
              <p>
                Join our community and unlock access to  wholesale prices on
                everyday essentials through shared bulk purchases.
              </p>
              {/* Button */}
              <button className="herobtn">
                Start Shopping <IoCartOutline />
              </button>
            </div>
            {/* Image section */}
            <div className="heroimg">
              {/* Side image */}
              <img src={SideImage} alt="" className="w-100 " />
              {/* People images */}
              <div className="heropeople">
                <img src={Guy} alt="" />
                <img src={Girl} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Empty column for spacing on larger screens */}
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </React.Fragment>
  );
};

export default Hero;
