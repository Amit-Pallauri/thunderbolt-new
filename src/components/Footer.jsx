import React from "react";
import footerLogo from "../images/logos/footer-logo.png";
import InstaIcon from "../images/icons/insta-icon.png";
import linkedInIcon from "../images/icons/linkedin-icon.png";
import callIcon from "../images/icons/call-icon.png";
import indianIcon from "../images/icons/ind-flag.png";
import luxFlagIcon from "../images/icons/lux-flag.png";
import ukFLagIcon from "../images/icons/uk-flag.png";
import ImageConstants from "../constants/imageConstants";
import routes from "../constants/routes";

const Footer = () => {
  const links = [
    {
      name: "How It Works",
      link: routes.howItWorks,
    },
    {
      name: "Why ThunderboltJS",
      link: routes.howItWorks,
    },
    {
      name: "Who Uses",
      link: routes.howItWorks,
    },
    {
      name: "Advantages",
      link: routes.howItWorks,
    },
  ];
  const newLinks =[
    {
      name: "Check Pagespeed Insights",
      link: routes.howItWorks,
    },
    {
      name: "Pricing",
      link: routes.howItWorks,
    },
  ]
  return (
    <footer className="site-footer">
      <div className="footer-container row">
        <div className="col-12 mt-md-0 mt-5 col-md-4 footer-logo-conatiner ">
          <img
            className="footer-logo"
            src={ImageConstants.logo}
            style={{
              width: "250px",
              height: "100px",
              objectFit: "contain",
              margiinTop: "-250px",
            }}
          />
          <p className="footer-description px-3">
            ThunderboltJS is a framework, a compiler that improves your core web
            vitals which results in your site loading superfast. A new way of
            rendering websites basically.
          </p>
        </div>
        <div className="col-12 mt-md-0 mt-3 col-md-4 d-flex footer-links " style={{marginLeft:"-45px"}}>
          <ul>
            {Array.from(links).map((l, key) => {
              return (
                <li>
                  <a href={l.link}>{l.name}</a>
                </li>
              );
            })}
          </ul>
          <ul >
          {Array.from(newLinks).map((l, key) => {
              return (
                <li>
                  <a href={l.link}>{l.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-12 col-md-2">
          
        </div>
        <div className="col-md-2 col-12 px-md-5 px-3">
         <div className="d-grid justify-content-between  text-center">
         <button className=" px-md-0 footer-action-btn">
          Get Started
         </button>
         <button className="footer-action-btn">
         Book a call
         </button>
         </div>
         <div className="mt-3 footer-social-icons justify-content-between mb-md-3 mt-md-2">
          <a hre="#" className="mt-3 pointer"><img src={ImageConstants.InstaIcon} width="20px"/></a>
          <a hre="#" className="px-3 pointer"><img src={ImageConstants.LinkdinIcon} width="20px" /></a>
         </div>
         <div className=" d-md-none d-flex footer-bootom-links">
        <a href={routes.privacyPolicy} className="px-5 pointer">Privacy Policy</a>
        <a href={routes.Terms} className="pointer">Terms</a>
        </div>
        </div>
        {/* <div className="social-links col-md-3 mt-3 footer-web">
          <div className="social-container">
            <img loading="lazy" src={InstaIcon} alt="" />
          </div>
          <div className="social-container">
            <img loading="lazy" src={linkedInIcon} alt="" />
          </div>
        </div> */}

        {/* <div className="footer-mob footer-navs">
          <div className="social-links col-md-3 mt-3">
            <div className="social-container">
              <img loading="lazy" src={InstaIcon} alt="" />
            </div>
            <div className="social-container">
              <img loading="lazy" src={linkedInIcon} alt="" />
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
          <img className="footer-logo" loading="lazy" src={footerLogo} alt="" />
          <div className="d-flex flex-column align-items-center mt-5">
            <p style={{ color: "#1DB954", fontSize: "20px" }}>Quick Links</p>
            <div className="links-container">
              <p>Pay Monthly Websites</p>
              <p>Check Pagespeed Insights</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className="flags d-flex">
            <img loading="lazy" src={ukFLagIcon} alt="" />
            <img loading="lazy" src={luxFlagIcon} alt="" />
            <img loading="lazy" src={indianIcon} alt="" />
          </div>
        </div>
        <div className="call-btn footer-call-btn col-md-3 mt-3 footer-web">
          <button className="book-call-btn">
            <img loading="lazy" src={callIcon} alt="" />
            <span>Book a Call</span>
          </button>
        </div> */}
      </div>
      <div className="footer-bottom  d-md-flex ">
        <p>2022 @Razr Tech Sarl</p>
        <div className=" d-md-flex d-none footer-bootom-links">
        <a href={routes.privacyPolicy} className="px-5 pointer">Privacy Policy</a>
        <a href={routes.Terms} className="pointer">Terms</a>
        </div>
      </div>
    </footer>
  );
};  

export default Footer;
