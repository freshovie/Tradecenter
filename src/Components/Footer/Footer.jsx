import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = () => {
  return (
    <React.Fragment>
      <section className="footer">
        <div className="footer-row">
          <div className="footer-col">
            <h4>Newsletter</h4>
            <p>
              Subscribe to our newsletter for a weekly dose
              of news, updates, helpful tips, and
              exclusive offers.
            </p>
          </div>
          <div className="footer-col">
            <h4>Info</h4>
            <ul className="links">
              <li><Link to="#">About Us</Link></li>
              <li><Link to="#">Compressions</Link></li>
              <li><Link to="#">Customers</Link></li>
              <li><Link to="#">Service</Link></li>
              <li><Link to="#">Collection</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Parties</h4>
            <ul className="links">
              <li><Link to="#">Ntnaija</Link></li>
              <li><Link to="#">Represent</Link></li>
              <li><Link to="#">Customers Party</Link></li>
              <li><Link to="#">Party Services</Link></li>
              <li><Link to="#">Party Collection</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul className="links">
              <li><Link to="#">Free Designs</Link></li>
              <li><Link to="#">Latest Designs</Link></li>
              <li><Link to="#">Themes</Link></li>
              <li><Link to="#">Popular Designs</Link></li>
              <li><Link to="#">Art Skills</Link></li>
              <li><Link to="#">New Uploads</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul className="links">
              <li><Link to="#">Customer Agreement</Link></li>
              <li><Link to="#">Privacy Policy</Link></li>
              <li><Link to="#">GDPR</Link></li>
              <li><Link to="#">Security</Link></li>
              <li><Link to="#">Testimonials</Link></li>
              <li><Link to="#">Media Kit</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Footer;
