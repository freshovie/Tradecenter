import React, {useEffect} from 'react';
import './style.scss';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS



const Subscribe = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          once: true, // Whether animation should happen only once - while scrolling down
        });
      }, []);
    return ( 
        <React.Fragment>
            <div className="subscribe">
                <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
            <div className="subscribe-edit">
                <div className="subscribe-words" data-aos="fade-right">
                    <h3>Subscribe our Newsletter</h3>
                    <p>Pellentesque eu nibh eget mauris congue mattis mattis nec <br />tellus. Phasellus imperdiet elit eu magna.</p>
                </div>
                <div className="subscribe-btn">
                    <input type="text" placeholder='Your email address' />
                    <button>Subscribe</button>
                </div>
                <div className="subscribe-icons" data-aos="fade-left">
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