import { Link } from "gatsby";
import React, { useState } from "react";
import routes from "../constants/routes";
import logo from "../images/logos/thunderbolt-logo.png";
import hambarIcon from "../images/icons/hambar.png";
import headerHome from "../images/icons/header-home.png";
import closeIcon from "../images/icons/close-icon.png";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light container">
        <Link to={routes.home} className="navbar-brand">
          <img loading="lazy" src={logo} alt="logo" />
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
              <Link className="nav-link" to={routes.pricing}>
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Log In
              </a>
            </li>
            <li className="nav-item">
              <div className="nav-btn">
                <button>Get Started</button>
                <img loading="lazy" src="" alt="" />
              </div>
            </li>
          </ul>
        </div>
        <div className="hambar" onClick={() => setOpen(true)}>
          <img loading="lazy" src={hambarIcon} alt="" />
        </div>
      </nav>

      <div
        className={`offcanvas offcanvas-top canvas-container ${
          isOpen ? "show" : ""
        }`}
        tabindex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="home-button" onClick={() => setOpen(false)}>
          <img loading="lazy" src={headerHome} alt="" />
        </div>
        <div className="close-btn-section" onClick={() => setOpen(false)}>
          <img loading="lazy" src={closeIcon} alt="" />
        </div>

        <div className="offcanvas-body">
          <div className="left-sidebar">
            <div className="container">
              <p>
                <Link>How it works</Link>
              </p>
              <p>
                <Link to={routes.pricing}>Pricing</Link>
              </p>
              <p>
                <Link>Advantages</Link>
              </p>
              <p>
                <Link>Pagespeed Insights</Link>
              </p>
            </div>
          </div>
          <div className="right-sidebar">
            <div className="sidebar-content">
              <h2 className="title">
                The best way to Build, deploy & scale Thunderbolt sites
              </h2>

              <div className="buttons">
                <button className="get-started">Get Started</button>
                <button>Book a Call</button>
              </div>

              <div className="sidebar-footer">
                <p>Privacy Policy</p>
                <p>Terms</p>
                <p>Login</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
