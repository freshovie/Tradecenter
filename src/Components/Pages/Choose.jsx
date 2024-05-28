import React, { useEffect } from "react";
import "./style.scss";
import { Picture, Picture1, Picture2 } from "../../assets";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Choose = () => {
  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once while scrolling down
    });
  }, []);

  return (
    <React.Fragment>
      <div className="choose">
        <div className="row">
          {/* Empty column for spacing on larger screens */}
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          {/* Main content column */}
          <div className="col-sm-12 col-md-12 col-lg-10">
            <div className="choice">
              {/* Text content with fade-right animation */}
              <div className="choice-text" data-aos="fade-right">
                <h3>
                  Why <span>Choose</span> Us
                </h3>
                <p>
                  &#x2022; <span>Savings:</span> We help you save a lot of money if you purchase from us.
                </p>
                <p>
                  &#x2022; <span>Trusted Network:</span> We work directly with reputable distributors and manufacturers.
                </p>
                <p>
                  &#x2022; <span>Convenience of Group Buying:</span> Enjoy the benefits of bulk buying without the hassle.
                </p>
                <p>
                  &#x2022; <span>Global Reach:</span> Discover unique products from around the world through international group buying. Explore new brands and expand your shopping horizons!
                </p>
              </div>
              {/* Image content with fade-left animation */}
              <div className="choice-img ml-4" data-aos="fade-left">
                <div className="choice-pic">
                  <img src={Picture} alt="Picture" />
                  <img src={Picture1} alt="Picture1" />
                </div>
                <img src={Picture2} alt="Picture2" className="me-2 w-100" />
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

export default Choose;
