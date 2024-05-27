import React from "react";
import "./style.scss";
import { Picture, Picture1, Picture2 } from "../../assets";

const Choose = () => {
  return (
    <React.Fragment>
      <div className="choose">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <div className="col-sm-12 col-md-12 col-lg-10">
            <div className="choice">
              <div className="choice-text">
                <h3>Why <span>Choose</span> Us </h3>
                <p> &#x2022; <span>Savings:</span> We help you save a lot of money if you purchase from us.</p>
                <p> &#x2022; <span>Trusted Network:</span> We work directly with reputable distributors and manufacturers.</p>
                <p> &#x2022; <span>Convenience of Group Buying:</span> Enjoy the benefits of bulk buying without the hassle.</p>
                <p> &#x2022; <span>Global Reach:</span> Discover unique products from around the world through international group buying. Explore new brands and expand your shopping horizons!</p>
              </div>
              <div className="choice-img ml-4">
                <div className="choice-pic">
                    <img src={ Picture } alt="Pictur" />
                  <img src={Picture1} alt="Picture1" />
                </div>
                <img src={Picture2} alt="Picture2" className="me-2" />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Choose;
