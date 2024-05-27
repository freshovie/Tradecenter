import React from "react";
import { Bg1, Icon, Icon1, Icon2, Icon3, Men } from "../../assets";
import "./style.scss";

const HowItWorks = () => {
  return (
    <React.Fragment>
      {/* How it Works section */}
      <div className="how-it-works">
        <div className="row">
          {/* Empty column for spacing on larger screens */}
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          {/* Main content column */}
          <div className="col-sm-12 col-md-12 col-lg-10">
            {/* Heading */}
            <h3>How it Works</h3>
            <div className="it-works">
              {/* Background image */}
              <img src={Bg1} alt="Background" />
              {/* Overlaying image */}
              <div className="guys-read">
                <img src={Men} alt="Foreground" />
              </div>
              {/* Text content */}
              <div className="it-works-text">
                {/* Step 1 */}
                <div className="icon">
                  <img src={Icon} alt="" />
                  <p>
                    <span>Browse Products</span>
                  </p>
                  <p>Find the items you need at true wholesale prices</p>
                </div>
                {/* Step 2 */}
                <div className="icon">
                  <img src={Icon1} alt="" />
                  <p>
                    <span>Join a Bulk Buy</span>
                  </p>
                  <p>Contribute to a shared purchase with other members</p>
                </div>
                {/* Step 3 */}
                <div className="icon">
                  <img src={Icon2} alt="" />
                  <p>
                    <span>Pay Your Share of Wholesale Price</span>
                  </p>
                  <p>Only pay for the portion you order.</p>
                </div>
                {/* Step 4 */}
                <div className="icon">
                  <img src={Icon3} alt="" />
                  <p>
                    <span>Enjoy</span>
                  </p>
                  <p>Receive high-quality products directly at your doorstep.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Empty column for spacing on larger screens */}
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HowItWorks;
