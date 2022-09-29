import { Link } from "gatsby";
import React from "react";
import routes from "../constants/routes";
import logo from "../images//logos/logo.svg";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light container">
        <Link to={routes.home} className="navbar-brand">
          <img src={logo} alt="logo" />
        </Link>
        <div
          className="collapse navbar-collapse nav-items-container"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav nav-items">
            <li className="nav-item">
              <a className="nav-link" href="#">
                How It Works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={routes.pricing}>
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Log In
              </a>
            </li>
          </ul>
          <div className="nav-btn">
            <button>Get Started</button>
            <img src="" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
