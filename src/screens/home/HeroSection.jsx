import React from "react";
import ClientsImages from "../../components/ClientsImages";
import HomeBanner from "../../images/home-banner.webp";

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
            <button className="get-started">
              <a
                target={"_blank"}
                href="https://7femb23k3scb.upmind.app/order/shop?catid=57052d13-7e08-d241-11a7-495163789e68"
              >
                Get Started
              </a>
            </button>
            <ClientsImages />
          </div>
          <div className="col-sm-12 col-lg-6 banner-img">
            <img src={HomeBanner} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
