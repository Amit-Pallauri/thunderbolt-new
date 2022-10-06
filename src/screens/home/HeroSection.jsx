import { graphql } from "gatsby";
import React from "react";
import ClientsImages from "../../components/ClientsImages";
import { StaticImage } from "gatsby-plugin-image";

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
            <ClientsImages />
          </div>
          <div className="col-sm-12 col-lg-6 banner-img">
            {/* <img loading="lazy" src={HomeBanner} alt="" /> */}
            <StaticImage
              src={"../../images/home-banner.png"}
              alt="A banner"
              placeholder="tracedSVG"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
