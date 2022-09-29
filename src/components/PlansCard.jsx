import React from "react";
import { Link } from "gatsby";
import routes from "../constants/routes";

const PlansCard = ({ data, isMonthly }) => {
  return (
    <div className="plans-card-container">
      <p className="tag">{data?.tag}</p>
      <p className="plans-info">{data?.info}</p>
      <div className="plan-price">
        {data?.isCustom === false ? (
          <>
            <p className="price">
              <span className="price-symbol">
                {data?.price.currency === "euro" ? "€" : "£"}
              </span>
              {data?.price?.price}
            </p>
            <p className="price-info">{isMonthly ? "per month" : "per year"}</p>
          </>
        ) : (
          <p className="custom-text">Contact Sales</p>
        )}
      </div>
      <p className="price-info-bold">{data?.pages}</p>
      <button className="get-started">Get started</button>
      <p className="pricing-read-more">
        <Link to={routes.pricing}>Read more</Link>
      </p>
    </div>
  );
};

export default PlansCard;
