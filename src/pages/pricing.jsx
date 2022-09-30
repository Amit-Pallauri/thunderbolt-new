import React from "react";
import { useState } from "react";
import Layout from "../components/Layout";
import ExtraAddOnsCards from "../components/Pricing/ExtraAddOnsCards";
import MonthlyCards from "../components/Pricing/MonthlyCards";
import StandaredFeaturesSlider from "../components/StandaredFeaturesSlider";
import PayMonthlyWebsite from "../components/Pricing/PayMonthlyWebsite";
const Home = () => {
  const [isMonthly, setMonthly] = useState(true);
  const [currency, setCurrency] = useState("euro");
  return (
    <Layout>
      <div className="pricing--main-box bg-white p-md-5 p-4 ">
        <div className=" d- align-items-center justify-content-center">
          <div class="p-md-5 p-0 m-0  mb-2 jumbotron text-center jumbotron-fluid">
            <div class="container p-0 m-0 ">
              <span class="display-4  pricing-h1">
                Plans to suit your needs -<br /> <span>Save upto 20%</span> when
                billed annually
              </span>{" "}
              <p class="lead pricing-p  px-5 ">
                With Built-in Security and speed Optimzations for <br /> your
                site performance.
              </p>
            </div>
          </div>
          <div className="tab-btn d-md-flex  mb-100 position-relative  align-items-center justify-content-center  position-realtive">
            <div className="price-tab-container  pricing-switch-btn">
              <p
                className={`${
                  isMonthly
                    ? "price-tab price-tab-active pricing-monthly"
                    : "price-tab text-white"
                }`}
                onClick={() => setMonthly(true)}
              >
                Monthly
              </p>
              <p
                className={`${
                  !isMonthly
                    ? "price-tab price-tab-active "
                    : "price-tab pricing-yearly"
                }`}
                onClick={() => setMonthly(false)}
              >
                Yearly
              </p>
            </div>
            <div className="pricing-selector px-5 d-flex">
              <label className="form-label mx-3 ">Select Currency</label>
              <select
                class=""
                aria-label=".form-select-sm example"
                onChange={(e) => {
                  setCurrency(e.target.value);
                }}
              >
                <option value="pound">£</option>
                <option selected value="euro">
                  €
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-1-card-container px-4">
        <MonthlyCards showSub={false} currency={currency} />
      </div>

      <div className="hero-2 d- align-items-center justify-content-center">
        <div class="p-md-5 p-sm-3 jumbotron text-center jumbotron-fluid">
          <div class="container  ">
            <h1 className="pricing-hero-section-two">
              Enrich your plan with Add-ons
            </h1>
            <p class="display-4 pricing-hero-section-two-h2">
              <strong>Pay Monthly Websites</strong>
            </p>{" "}
            <p class="lead pricing-p2 px-5 ">
              No Contracts and all plans include unlimited website pages and
              Modern Website with flexible payment options to suit your
              business, pay monthly or pay yearly with 20% off, No Set Up feesm
              unlimited content updates
            </p>
          </div>
        </div>
      </div>
      <div className=" p-3 mb-3 card-container hero-two text-center">
        <PayMonthlyWebsite showBootom={false} showDescription={false} />
        <div className="">
          <p className="stand ">Standard website features</p>
          <StandaredFeaturesSlider />
        </div>
      </div>

      <div className=" extra-addon-conatiner  text-center">
        <h2 className="extra  mb-5">Extra Add-Ons</h2>
        <ExtraAddOnsCards
          showFeaturs={false}
          showSub={true}
          showBootom={false}
          isExtraAddOn={true}
          showDescription={false}
        />
      </div>
    </Layout>
  );
};

export default Home;
