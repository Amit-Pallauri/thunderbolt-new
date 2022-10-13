import React from "react";
import ClientsImages from "../../components/ClientsImages";
import HomeBanner from "../../images/home-banner.webp";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row hero-container">
          <div className="col-sm-12 col-lg-6 content-section">
            <h1 className="title">It’s time to fix your web</h1>
            <h2 className="sub-title">
              Whether 20, or 200 pages, we are here to fix your core web vitals
              & deliver a blazing fast experience
            </h2>
            <button className="get-started">
              <a
                target={"_blank"}
                href="https://7femb23k3scb.upmind.app/order/shop?catid=57052d13-7e08-d241-11a7-495163789e68"
              >
                Get Started
              </a>
            </button>
          </div>
          <div className="col-sm-12 col-lg-6 banner-img">
            <img src={HomeBanner} alt="" width={"100%"} height={"100%"} />
          </div>
        </div>
        <ClientsImages />
      </div>
    </section>
  );
};

export default HeroSection;
