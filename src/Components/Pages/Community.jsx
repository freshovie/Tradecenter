import React, { useEffect } from "react";
import "./style.scss";
import { Desktop } from "../../assets"; // Importing the desktop image asset
import { IoCartOutline } from "react-icons/io5"; // Importing the cart icon from react-icons
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS for animations

const Community = () => {
  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once while scrolling down
    });
  }, []);

  return (
    <React.Fragment>
      <div className="community">
        <div className="row">
          {/* Empty column for spacing on larger screens */}
          <div className="col-12 col-lg-1"></div>
          {/* Main content column */}
          <div className="col-12 col-lg-10">
            <div className="comm-unity" data-aos="fade-right">
              <img src={Desktop} alt="Desktop" />
              <div className="community-text">
                <h2>
                  Join a Community of Global Shoppers. Join Different Shipment
                  Groups Across Different Product Categories.
                </h2>
                <button className="startshop">
                  Start Shopping <IoCartOutline />
                </button>
              </div>
            </div>
          </div>
          {/* Empty column for spacing on larger screens */}
          <div className="col-12 col-lg-1"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Community;
