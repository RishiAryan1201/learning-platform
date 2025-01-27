import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";
import logo from "../../assets/images/logo-img.png";
import { Link } from "react-router-dom";

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className="d-flex align-items-center gap-1">
               <img src={logo} alt="logo"  className="logo_img"/> StreetSmartWale
            </h2>
          </div>
          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef}>
              <ul className="nav__list">
                  <li className="nav__item">
                    <Link to="/">Home</Link>
                  </li>
                <li>
                  <Link to="/registration"><button className="btn btn-success">Register</button></Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
