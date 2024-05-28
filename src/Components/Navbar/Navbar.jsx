import React, {useEffect} from 'react';
import './navbar.scss'; // Import your custom styles if needed
import { Logos } from '../../assets';
import { IoCartOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Navbar = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          once: true, // Whether animation should happen only once - while scrolling down
        });
      }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand me-2" href="https://mdbgo.com/" data-aos="fade-right">
          <img
            src={Logos}
            height="16"
            alt="MDB Logo"
            className='w-100 h-100'
            loading="lazy"
            style={{ marginTop: '1px' }}
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars />
        </button>

        <div className="collapse navbar-collapse" id="navbarButtonsExample">
          <div className="d-flex ml-auto" data-aos="fade-left">
            <button type="button" className="btn btn-link">
              About us
            </button>
            <button type="button" className="btn btn-link">
              Products
            </button>
            <button className="btn btn-light">
              Start Shopping 
              <IoCartOutline />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
