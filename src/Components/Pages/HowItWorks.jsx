import React, { useEffect } from "react";
import { GroupMen, Icon, Icon1, Icon2, Icon3 } from "../../assets";
import "./style.scss";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const HowItWorks = () => {
  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once while scrolling down
    });
  }, []);

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
              {/* Image on the left with fade-right animation */}
              <div className="guys-read" data-aos="fade-right">
                <img src={GroupMen} alt="Group of Men" />
              </div>
              {/* Text content on the right with fade-left animation */}
              <div className="it-works-text" data-aos="fade-left">
                {/* Step 1 */}
                <div className="icon">
                  <img src={Icon} alt="Browse Products Icon" />
                  <p>
                    <span>Browse Products</span>
                  </p>
                  <p>Find the items you need at true wholesale prices</p>
                </div>
                {/* Step 2 */}
                <div className="icon">
                  <img src={Icon1} alt="Join a Bulk Buy Icon" />
                  <p>
                    <span>Join a Bulk Buy</span>
                  </p>
                  <p>Contribute to a shared purchase with other members</p>
                </div>
                {/* Step 3 */}
                <div className="icon">
                  <img src={Icon2} alt="Pay Your Share of Wholesale Price Icon" />
                  <p>
                    <span>Pay Your Share of Wholesale Price</span>
                  </p>
                  <p>Only pay for the portion you order.</p>
                </div>
                {/* Step 4 */}
                <div className="icon">
                  <img src={Icon3} alt="Enjoy Icon" />
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
