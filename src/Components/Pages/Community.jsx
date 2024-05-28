import React, {useEffect} from "react";
import "./style.scss";
import { Desktop } from "../../assets";
import { IoCartOutline } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Community = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          once: true, // Whether animation should happen only once - while scrolling down
        });
      }, []);
  return (
    <React.Fragment>
        <div className="community">
      <div className="row">
        <div className="col-12 col-lg-1"></div>
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
        <div className="col-12 col-lg-1"></div>
      </div>
        </div>
    </React.Fragment>
  );
};

export default Community;
