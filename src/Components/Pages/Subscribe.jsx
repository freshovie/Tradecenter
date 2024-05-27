import React from 'react';
import './style.scss';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Subscribe = () => {
    return ( 
        <React.Fragment>
            <div className="subscribe">
                <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
            <div className="subscribe-edit">
                <div className="subscribe-words">
                    <h3>Subscribe our Newsletter</h3>
                    <p>Pellentesque eu nibh eget mauris congue mattis mattis nec <br />tellus. Phasellus imperdiet elit eu magna.</p>
                </div>
                <div className="subscribe-btn">
                    <input type="text" placeholder='Your email address' />
                    <button>Subscribe</button>
                </div>
                <div className="subscribe-icons">
                <FaFacebook className='i-icon' />
                <FaTwitter className='i-icon'/>
                <FaInstagram className='i-icon'/>
                </div>
            </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Subscribe;