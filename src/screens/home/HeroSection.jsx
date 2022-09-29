import React from "react";
import { ImageConstants } from "../../constants/imageConstants";
import HomeBanner from "../../images/home-banner.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row hero-container">
          <div className="col-sm-12 col-lg-6">
            <h1 className="title">It’s time for a faster website</h1>
            <h2 className="sub-title">
              Thunderbolt is a framework built on opensource tech from strapi &
              gatsbyjs powered by react to load your platform in a matter of
              seconds.
            </h2>
            <button className="get-started">Get Started</button>
          </div>
          <div className="col-sm-12 col-lg-6 banner-img">
            <img src={HomeBanner} alt="" />
          </div>
        </div>
        <div className="container">
          <div className="row clients-img">
            <div className="col-lg-2 col-4">
              <img src={ImageConstants.clientVodafone} alt="" />
            </div>
            <div className="col-lg-2 col-4">
              <img src={ImageConstants.clientMpay} alt="" />
            </div>
            <div className="col-lg-2 col-4">
              <img src={ImageConstants.clientTomorrowStreet} alt="" />
            </div>
            <div className="col-lg-2 col-4">
              <img src={ImageConstants.clientAudi} alt="" />
            </div>
            <div className="col-lg-2 col-4">
              <img src={ImageConstants.clientGeMoney} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
