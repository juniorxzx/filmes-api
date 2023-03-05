import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

const Navbar = (props) => {
  return (
    <Container>
      <div className="navbar">
        <div className="container nav-container">
          <input className="checkbox" type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <div className="menu-items">
            {props.children}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
