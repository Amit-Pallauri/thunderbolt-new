import React from "react";
import buildIcon from "../../images/icons/build.png";
import customiseIcon from "../../images/icons/customise.png";
import purchasePackageIcon from "../../images/icons/purchase-package.png";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h1 className="section-title">How it works</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4 how-it-works-card">
            <img src={purchasePackageIcon} alt="" />
            <h3>Purchase a package or book a call</h3>
            <p>Simply purchase a package that suits your needs...</p>
          </div>
          <div className="col-md-4 how-it-works-card">
            <img src={customiseIcon} alt="" />
            <h3 className="w-50">Customise on the fly</h3>
            <p>Easy and quick design customisations on the go…</p>
          </div>
          <div className="col-md-4 how-it-works-card">
            <img src={buildIcon} alt="" />
            <h3 className="w-50">Build & Launch</h3>
            <p>We will share a review link for your website before…</p>
          </div>
        </div>
      </div>
      <button>Know more</button>
    </section>
  );
};

export default HowItWorks;
