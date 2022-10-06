import React from "react";
import footerLogo from "../images/logos/footer-logo.png";
import InstaIcon from "../images/icons/insta-icon.png";
import linkedInIcon from "../images/icons/linkedin-icon.png";
import callIcon from "../images/icons/call-icon.png";
import indianIcon from "../images/icons/ind-flag.png";
import luxFlagIcon from "../images/icons/lux-flag.png";
import ukFLagIcon from "../images/icons/uk-flag.png";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container row">
        <div className="social-links col-md-3 mt-3 footer-web">
          <div className="social-container">
            <StaticImage
              src="../images/icons/insta-icon.png"
              placeholder="tracedSVG"
              alt="insta icon"
            />
          </div>
          <div className="social-container">
            <StaticImage
              src="../images/icons/linkedin-icon.png"
              placeholder="tracedSVG"
              alt="linkedin icon"
            />
          </div>
        </div>

        <div className="footer-mob footer-navs">
          <div className="social-links col-md-3 mt-3">
            <div className="social-container">
              <StaticImage
                src="../images/icons/insta-icon.png"
                placeholder="tracedSVG"
                alt="insta icon"
              />
            </div>
            <div className="social-container">
              <StaticImage
                src="../images/icons/linkedin-icon.png"
                placeholder="tracedSVG"
                alt="linkedin icon"
              />
            </div>
          </div>
          <div className="call-btn footer-call-btn col-md-3 mt-3">
            <button className="book-call-btn">
              <img loading="lazy" src={callIcon} alt="" />
              <span>Book a Call</span>
            </button>
          </div>
        </div>
        <div className="footer-content col-md-6">
          <StaticImage
            className="footer-logo"
            src="../images/logos/footer-logo.png"
            placeholder="tracedSVG"
            alt="insta icon"
          />
          <div className="d-flex flex-column align-items-center mt-5">
            <p style={{ color: "#1DB954", fontSize: "20px" }}>Quick Links</p>
            <div className="links-container">
              <p>Pay Monthly Websites</p>
              <p>Check Pagespeed Insights</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className="flags d-flex">
            <StaticImage
              src="../images/icons/uk-flag.png"
              placeholder="tracedSVG"
              alt="india"
            />
            <StaticImage
              src="../images/icons/lux-flag.png"
              placeholder="tracedSVG"
              alt="india"
            />
            <StaticImage
              src="../images/icons/ind-flag.png"
              placeholder="tracedSVG"
              alt="india"
            />
          </div>
        </div>
        <div className="call-btn footer-call-btn col-md-3 mt-3 footer-web">
          <button className="book-call-btn">
            <img loading="lazy" src={callIcon} alt="" />
            <span>Book a Call</span>
          </button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>2022 @Razr Tech Sarl</p>
      </div>
    </footer>
  );
};

export default Footer;
