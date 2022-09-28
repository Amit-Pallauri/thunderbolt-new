import React from "react";

const PlansCard = () => {
  return (
    <div className="plans-card-container">
      <p className="tag">Economy</p>
      <p className="plans-info">
        Launch your online platform, your way, with ease
      </p>
      <div className="plan-price">
        <p className="price">
          <span className="price-symbol">&#x20b9;</span>
          50
        </p>
        <p className="price-info">per month</p>
      </div>
      <p className="price-info-bold">Upto 10 Pages HTML Website**</p>
      <button className="get-started">Get started</button>
      <p className="pricing-read-more">Read more</p>
    </div>
  );
};

export default PlansCard;
