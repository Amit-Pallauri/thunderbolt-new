import React, { useState } from "react";
import PlansCard from "../../components/PlansCard";

const PlansSection = () => {
  const [isMonthly, setMonthly] = useState(true);
  return (
    <section className="plans-section">
      <div className="container">
        <div className="row">
          <div>
            <h1 className="plans-title">
              Plans for delivering super fast websites
            </h1>
            <p className="plans-subtitle">
              Simple pricing no hidden costs - we maintain, host and provide
              technical support
            </p>
          </div>
        </div>
        <div className="currency-option-container">
          <div className="price-tab-container">
            <p
              className={`${
                isMonthly ? "price-tab price-tab-active" : "price-tab"
              }`}
              onClick={() => setMonthly(true)}
            >
              Monthly
            </p>
            <p
              className={`${
                !isMonthly ? "price-tab price-tab-active" : "price-tab"
              }`}
              onClick={() => setMonthly(false)}
            >
              Yearly
            </p>
          </div>
          <div className="select-currency-container">
            <p>Select Currency</p>
            <select className="form-select" aria-label="Default select example">
              <option value="pound">£</option>
              <option selected value="euro">
                €
              </option>
            </select>
          </div>
        </div>
        <div className="cards-container">
          {[1, 2, 2, 4].map(() => {
            return <PlansCard />;
          })}
        </div>
        <div className="container">
          <p style={{ color: "#FFFFFF", marginTop: "30px" }}>
            * VAT/Taxes to be charged additional as per country of purchase
          </p>
          <p className="price-footer-info">
            ** One-Off Set Up Cost for migration of your existing to new
            framework - USD 250 if you have exisiting site for 5 HTML pages +
            Additional USD 10 per page
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
