import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import {
  ApplePay,
  Cart,
  Discover,
  Logo2,
  Mastercard,
  Visa,
} from "../../assets";

const Footer = () => {
  return (
    <React.Fragment>
      <section className="footer">
        <div className="container">
          <div className="footer-row">
            <div className="footer-col text-center first">
              <img src={Logo2} alt="" />
              <p className="text-center">
                Morbi cursus porttitor enim lobortis molestie. Duis gravida
                turpis dui, eget bibendum magna congue nec.
              </p>
              <p className="text-center">
                <span>(219) 555 - 0114</span> or <span>Proxy@gmail.com</span>
              </p>
            </div>
            <div className="footer-container">
            <div className="footer-col">
              <h4>My Account</h4>
              <ul className="links">
                <li>
                  <Link to="#">My Account</Link>
                </li>
                <li>
                  <Link to="#">Order History</Link>
                </li>
                <li>
                  <Link to="#">Shopping Cart</Link>
                </li>
                <li>
                  <Link to="#">Wishlist</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Help</h4>
              <ul className="links">
                <li>
                  <Link to="#">Contact</Link>
                </li>
                <li>
                  <Link to="#">Faqs</Link>
                </li>
                <li>
                  <Link to="#">Terms & Condition</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Proxy</h4>
              <ul className="links">
                <li>
                  <Link to="#">About</Link>
                </li>
                <li>
                  <Link to="#">Shop</Link>
                </li>
                <li>
                  <Link to="#">Product</Link>
                </li>
                <li>
                  <Link to="#">Track Order</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Categories</h4>
              <ul className="links">
                <li>
                  <Link to="#">Fruit & Vegetables</Link>
                </li>
                <li>
                  <Link to="#">Meat & Fish</Link>
                </li>
                <li>
                  <Link to="#">Bread & Bakery</Link>
                </li>
                <li>
                  <Link to="#">Beauty & Health</Link>
                </li>
              </ul>
            </div>
            </div>
          </div>
          <hr />
          {/* <!-- Copyright --> */}
          <div
            className="p-3 foot-head"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.05)",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <a className="text-body foot-head" href="https://mdbootstrap.com/">
              Trade Center eCommerce © 2021. All Rights Reserved
            </a>
            <div className="payment">
              <img src={ApplePay} alt="" />
              <img src={Visa} alt="" />
              <img src={Discover} alt="" />
              <img src={Mastercard} alt="" />
              <img src={Cart} alt="" />
            </div>
          </div>
          {/* <!-- Copyright --> */}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Footer;
