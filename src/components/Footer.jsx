import React from "react";
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
  const newLinks = [
    {
      name: "Check Pagespeed Insights",
      link: routes.howItWorks,
    },
    {
      name: "Pricing",
      link: routes.howItWorks,
    },
  ];
  return (
    <footer className="site-footer">
      <div className="footer-container row">
        <div className="col-12 mt-md-0 mt-5 col-md-4 footer-logo-conatiner ">
          <img
            className="footer-logo px-3 px-md-3"
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
        <div
          className="col-12 mt-md-0 mt-3 col-md-4 d-flex footer-links "
          style={{ marginLeft: "0px" }}
        >
          <ul>
            {Array.from(links).map((l, key) => {
              return (
                <li>
                  <a href={l.link}>{l.name}</a>
                </li>
              );
            })}
          </ul>
          <ul>
            {Array.from(newLinks).map((l, key) => {
              return (
                <li>
                  <a href={l.link}>{l.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-12 col-md-2"></div>
        <div className="col-md-2 col-12 px-md-5 px-3">
          <div className="d-grid justify-content-between  text-center">
            <button className=" px-md-0 footer-action-btn">
              <a
                href="https://7femb23k3scb.upmind.app/order/shop?catid=57052d13-7e08-d241-11a7-495163789e68"
                target={"_blank"}
              >
                Get Started
              </a>
            </button>
            <button className="footer-action-btn">Book a call</button>
          </div>
          <div className="mt-3 footer-social-icons justify-content-between mb-md-3 mt-md-2">
            <a hre="#" className="mt-3 pointer">
              <img src={ImageConstants.InstaIcon} width="20px" />
            </a>
            <a hre="#" className="px-3 pointer">
              <img src={ImageConstants.LinkdinIcon} width="20px" />
            </a>
          </div>
          <div className=" d-md-none d-flex footer-bootom-links">
            <a href={routes.privacyPolicy} className="px-5 pointer">
              Privacy Policy
            </a>
            <a href={routes.Terms} className="pointer">
              Terms
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom  d-md-flex ">
        <p>2022 @Razr Tech Sarl</p>
        <div className=" d-md-flex d-none footer-bootom-links">
          <a href={routes.privacyPolicy} className="px-5 pointer">
            Privacy Policy
          </a>
          <a href={routes.Terms} className="pointer">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
