import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import ImageConstants from "../constants/imageConstants";
import routes from "../constants/routes";
import hambarIcon from "../images/icons/hambar.webp";
import headerHome from "../images/icons/header-home.webp";
import closeIcon from "../images/icons/close-icon.webp";
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [pathName, setPathName] = useState();
  const location = useLocation();

  useEffect(() => {
    setPathName(location?.pathname);
  }, [location?.pathname]);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light container">
        <Link to={routes.home} className="navbar-brand">
          <img loading="lazy" src={ImageConstants.logo} alt="logo" />
        </Link>
        <div
          className="collapse navbar-collapse nav-items-container"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav nav-items">
            <li
              className={
                pathName === routes.howItWorks
                  ? "nav-item active-link"
                  : "nav-item "
              }
            >
              <Link className={"nav-link"} to={routes.howItWorks}>
                How It Works
              </Link>
            </li>
            <li
              className={
                pathName === routes.pricing
                  ? "nav-item active-link"
                  : "nav-item "
              }
            >
              <Link className="nav-link" to={routes.pricing}>
                Pricing
              </Link>
            </li>
          </ul>
          <div className="header-btns">
            <button className="login">Log In</button>
            <button className="get-started">
              <a
                target={"_blank"}
                href="https://7femb23k3scb.upmind.app/order/shop?catid=57052d13-7e08-d241-11a7-495163789e68"
              >
                Get Started
              </a>
            </button>
          </div>
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
          <Link to={routes.home}>
            <img loading="lazy" src={headerHome} alt="" />
          </Link>
        </div>
        <div className="close-btn-section" onClick={() => setOpen(false)}>
          <img loading="lazy" src={closeIcon} alt="" />
        </div>

        <div className="offcanvas-body">
          <div className="left-sidebar">
            <div className="container">
              <p
                className={
                  pathName === routes.howItWorks
                    ? " active-link"
                    : "nav-item-canvas"
                }
              >
                <Link to={routes.howItWorks}>How it works</Link>
              </p>
              <p
                className={
                  pathName === routes.pricing
                    ? "nav-item-canvas active-link"
                    : "nav-item-canvas"
                }
              >
                <Link to={routes.pricing}>Pricing</Link>
              </p>
              <p className="nav-item-canvas">
                <Link>Advantages</Link>
              </p>
              <p className="nav-item-canvas">
                <Link>Check Pagespeed Insights</Link>
              </p>
            </div>
          </div>
          <div className="right-sidebar">
            <div className="sidebar-content">
              <h2 className="title">
                The best way to Build, deploy & scale Thunderbolt sites
              </h2>

              <div className="buttons">
                <div className="btn-container active-btn">
                  <button>
                    <a
                      href="https://7femb23k3scb.upmind.app/order/shop?catid=57052d13-7e08-d241-11a7-495163789e68"
                      target={"_blank"}
                    >
                      Get Started
                    </a>
                  </button>
                  {/* <img loading="lazy" src={rightArrow} alt="" /> */}
                </div>
                <div className="btn-container">
                  <button>Book a Call</button>
                  {/* <img loading="lazy" src={rightArrow} alt="" /> */}
                </div>
              </div>

              <div className="sidebar-footer">
                <p>Privacy Policy</p>
                <p>Terms</p>
                <a href="#">Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
