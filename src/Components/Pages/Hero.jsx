import React, {useEffect} from "react";
import "./style.scss";
import { IoCartOutline } from "react-icons/io5";
import { Couple } from "../../assets";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Hero = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          once: true, // Whether animation should happen only once - while scrolling down
        });
      }, []);
  return (
    <React.Fragment>
        <div className="heros">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
            
        <div className="col-sm-12 col-md-12 col-lg-10">
          <div className="hero">
            <div className="heroedit" data-aos="fade-right">
              <h4>Get <span>Wholesale Prices <br /> Without</span> Buying <br /> Wholesale <span>Quantities</span></h4>
              <p>
                Join our community and unlock access to wholesale prices on
                everyday essentials through shared bulk purchases.
              </p>
              <button className="herobtn">
                Start Shopping <IoCartOutline />
              </button>
            </div>
            <div className="heroimg" data-aos="fade-left">
              <img src={Couple} alt="Couple" />
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
        </div>
    </React.Fragment>
  );
};

export default Hero;
