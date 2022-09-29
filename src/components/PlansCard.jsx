import React from "react";
import { Link } from "gatsby";
import routes from "../constants/routes";

const PlansCard = () => {
  return (
    <div className="plans-card-container">
      <p className="tag">Economy</p>
      <p className="plans-info">
        Launch your online platform, your way, with ease
      </p>
      <div className="plan-price">
        <p className="price">
          <span className="price-symbol">&#163;</span>
          50
        </p>
        <p className="price-info">per month</p>
      </div>
      <p className="price-info-bold">Upto 10 Pages HTML Website**</p>
      <button className="get-started">Get started</button>
      <p className="pricing-read-more">
        <Link to={routes.pricing}>Read more</Link>
      </p>
    </div>
  );
};

export default PlansCard;
