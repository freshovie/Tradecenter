import React, { useEffect, useState } from "react";
import { Brand, Brand1, Brand2, Brand3, Brand4, Brand5 } from "../../assets";
import "./style.scss";

const Brands = () => {
  // State to keep track of the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Effect to handle the auto-sliding functionality
  useEffect(() => {
    // Set an interval to change the current slide every 1 second
    const interval = setInterval(() => {
      // Update the current slide, cycling back to the first slide after the last one
      setCurrentSlide((prevSlide) => (prevSlide + 1) % brandImages.length);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Array of brand images
  const brandImages = [Brand, Brand1, Brand2, Brand3, Brand4, Brand5];

  return (
    <div className="brand">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
          <div className="brands">
            <h3>We Are Trusted By</h3>
            {/* Container for larger screens */}
            <div className="brands-lg">
              {brandImages.map((src, index) => (
                <React.Fragment key={index}>
                  <img src={src} alt={`Brand ${index}`} />
                  {index < brandImages.length - 1 && <div className="vertical-line"></div>}
                </React.Fragment>
              ))}
            </div>
            {/* Container for smaller screens */}
            <div className="brands-md">
              {brandImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Brand ${index}`}
                  className={`mySlides ${currentSlide === index ? "active" : ""}`}
                  style={{ display: currentSlide === index ? "block" : "none" }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </div>
  );
};

export default Brands;
