import React, { useState } from "react";
import "./navbar.scss";
import { Logo } from "../../assets";
import { CiSearch } from "react-icons/ci";
import { MdToc } from "react-icons/md";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBInputGroup,
} from "mdb-react-ui-kit";

const Navbar = () => {
  const [showBasic, setShowBasic] = useState(false);

  return (
          <MDBNavbar expand="lg" light bgColor="#c80606" className="d-flex">
            <MDBContainer fluid>
              <MDBNavbarBrand href="#">
                <img src={Logo} alt="Logo" />
              </MDBNavbarBrand>
              <MDBNavbarToggler
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setShowBasic(!showBasic)}
              >
                <MDBIcon icon="bars" fas />
              </MDBNavbarToggler>
              <MDBCollapse navbar show={showBasic} id="navbarSupportedContent">
                <MDBNavbarNav className="mr-auto">
                <MDBInputGroup tag="form" className="d-flex w-auto mb-3">
                <CiSearch  className=""/>
                  <input className="form-control" placeholder="Search essentials, groceries and more..." type="search" />
                  <MdToc className=""/>
                </MDBInputGroup>
                  <MDBContainer>
                  <MDBNavbarItem className="nav-item active">
                    <MDBNavbarLink href="#">
                      Home <span className="sr-only">(current)</span>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem className="nav-item">
                    <MDBNavbarLink href="#">Find a doctor</MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem className="nav-item">
                    <MDBNavbarLink href="#">Apps</MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem className="nav-item">
                    <MDBNavbarLink href="#">Testimonials</MDBNavbarLink>
                  </MDBNavbarItem>
                  </MDBContainer>
                </MDBNavbarNav>

                <MDBContainer className="flex-row">
                    <button>About Us</button>
                    <button>Products</button>
                    <button>Start Shopping</button>
                </MDBContainer>


              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
  );
};

export default Navbar;
