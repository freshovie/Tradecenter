import React, {useEffect}from "react";
import { Banner, Banner1, Banner2, Banner3 } from "../../assets";
import "./style.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Featured = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          once: true, // Whether animation should happen only once - while scrolling down
        });
      }, []);
  return (
    <React.Fragment>
      <div className="featured">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <div className="col-sm-12 col-md-12 col-lg-10">
            <h2>Featured Products</h2>
            <div className="product-card">
              <div className="products" data-aos="fade-up">
                <img src={Banner} alt="" style={{ width: "100%" }} />
                <div className="product-edit">
                  <p>SUMMER SALE</p>
                  <h3>FMCGS</h3>
                  <p>
                    Up to &nbsp;<span>64% OFF</span>
                  </p>
                  <button>
                    Shop Now &nbsp;
                    <FaArrowRightLong />
                  </button>
                </div>
              </div>
              <div className="products" data-aos="fade-down">
                <img src={Banner1} alt="" style={{ width: "100%" }} />
                <div className="product-edit">
                  <p>BEST DEALS</p>
                  <h3>Farm Produce</h3>
                  <div className="timep">
                    <div className="secs">
                      <p>00 :</p>
                      <p className="secs-sm">DAYS</p>
                    </div>
                    <div className="secs">
                      <p>02 :</p>
                      <p className="secs-sm">HOURS</p>
                    </div>
                    <div className="secs">
                      <p>18 :</p>
                      <p className="secs-sm">MINS</p>
                    </div>
                    <div className="secs">
                      <p>46</p>
                      <p className="secs-sm">SECS</p>
                    </div>
                  </div>
                  <button
                    style={{ backgroundColor: "white", color: "#f01c1c" }}
                  >
                    Shop Now &nbsp;
                    <FaArrowRightLong />
                  </button>
                </div>
              </div>
              <div className="products" data-aos="fade-up">
                <img src={Banner2} alt="" style={{ width: "100%" }} />
                <div className="product-edit">
                  <p className="darkp">85% FAT FREE</p>
                  <h3 className="darkf3">Gadgets</h3>
                  <p className="darkp">
                    Started at &nbsp;<span>$79.99</span>
                  </p>
                  <button>
                    Shop Now &nbsp;
                    <FaArrowRightLong />
                  </button>
                </div>
              </div>
              <div className="products" data-aos="fade-down">
                <img src={Banner3} alt="" style={{ width: "100%" }} />
                <div className="product-edit">
                  <p className="darkp">85% FAT FREE</p>
                  <h3 className="darkf3">Construction</h3>
                  <p className="darkp">
                    Started at &nbsp;<span>$79.99</span>
                  </p>
                  <button>
                    Shop Now &nbsp;
                    <FaArrowRightLong />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Featured;
