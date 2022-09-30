import { features } from "process";
import React, { useState } from "react";
import { ImageConstants } from "../../constants/imageConstants";

const MonthlyCards = ({
  showBootom = true,
  showFeaturs = true,
  isExtraAddOn = false,
  showDescription = true,
  showSub = false,
  currency,
  isMonthly,
}) => {
  const convertPrice = (price) => {
    return {
      currency,
      price,
    };
  };
  const cards = [
    {
      title: "Economy",
      des: "Launch your online platform, your way, with ease",
      price: convertPrice(40),
      features: [
        "Standard Performance ",
        "  1 website",
        "Up to 10 Pages HTML Website",
        " 100 GB storage ",
        " 10 Databases ",
        "4 GB RAM ",
        "100 GB Bandwidth ",
        " Up to 3 Built Concurrency ",
        " Up to 5M Server Request ",
        "2 CPUs ",
        "Free SSL for your websites ",
        "Server Type AWS with 99%  ",
        "Guarantee Uptime",
        " Daily Back Up  ",
        " Up to 5000 Optimised Images ",
        "Onboarding & Migration Assistance ",
        " Data Centre Global",
        "   Email Support",
        "Dedicated Account Rep",
      ],
    },
    {
      title: "Standard",
      des: "The complete solution for your business growth",
      price: convertPrice(80),
      features: [
        "Standard Performance",
        " 1 website",
        "Up to 20 Pages HTML Website",
        "200 GB storage",
        "25 Databases",
        "8 GB RAM",
        " Up to 1 TB Bandwidth",
        "Up to 10M Server Request ",
        "Up to 3 Built Concurrency",
        "4 CPUs",
        "Free, unlimited SSL for all your websites",
        " Server Type AWS with 99% ",
        "Guarantee Uptime",
        " Daily Back Up ",
        "Up to 10000 Optimised Images",
        " Onboarding & Migration Assistance",
        " Data Centre Global",
        " Email Support",
        "Dedicated Account Rep",
      ],
    },
    {
      title: "Ultimate",
      des: "Perfect for growing your high traffic sites",
      price: convertPrice(200),
      features: [
        "Standard Performance ",
        "1 website",
        " Upto 35 Pages HTML Website**",
        " 500 GB storage",
        "50 Databases",
        "8 GB RAM ",
        "Upto 2 TB Bandwidth ",
        "Up to 20M Server Request",
        " Upto 3 Built Concurrency ",
        "8 CPUs ",
        "Unlimited SSL for all your websites",
        " Server Type AWS with 99% Guarantee Uptime",
        " Daily back Up ",
        "Upto 10000 OptimiSed Images",
        " Onboarding & Migration Assistance**",
        " Data Centre Global",
        " Email Support",
        " Dedicated Account Rep",
      ],
    },
    {
      title: "Maximum",
      des: "Perfect for Enterprise business",
      symbol: false,
      price: convertPrice("Contact Sales"),
      features: [
        "High Processing power",
        "1 website ",
        "Custom ",
        "1 TB+ storage",
        " 100 Databases ",
        "8+ GB RAM",
        " Custom ",
        "Custom",
        "Custom",
        "Custom",
        "Free SSL for your websites",
        " Server Type AWS with 99% Guarantee",
        " Uptime",
        " Daily back Up",
        " Custom ",
        "Onboarding & Migration Assistance**",
        "Data Centre Global",
        "Email Support ",
        " Dedicated Account Rep",
      ],
    },
  ];
  return (
    <>
      <div className="row">
        <div className="d-md-flex   " style={{ zIndex: "1111" }}>
          {cards?.map((d, key) => {
            return (
              <>
                <div className="col-md-3  ">
                  <div className="monthly-card m-md-2 mt-2 mb-5 mb-md-0  text-center  flex-fill">
                    <div className="bg-white rounded-lg ">
                      <div className="mb-2 space">{"s"}</div>
                      <p className="monthly-card-title  ">{d.title}</p>
                      {showDescription && (
                        <p
                          className={
                            d.symbol === false
                              ? "contact-align"
                              : "monthly-card-description px-4"
                          }
                        >
                          {d.des}
                        </p>
                      )}
                      <p
                        className={
                          d?.symbol === false
                            ? "contact-sales "
                            : "monthly-cost px-5 "
                        }
                      >
                        {d?.symbol !== false && (
                          <strong className="price-symbol">
                            {d?.price.currency === "euro" ? "€" : "£"}
                          </strong>
                        )}
                        <strong>{d.price.price}</strong>
                        {showFeaturs && d?.symbol !== false && (
                          <span> per {isMonthly ? "month" : "year"}</span>
                        )}
                        <br />
                        {showSub && (
                          <span className="monthly-cost-sub-description">
                            One-off Cost. Works with all Plans
                          </span>
                        )}
                      </p>
                      {showSub && (
                        <p
                          className={
                            isExtraAddOn
                              ? "text-black monthly-card-description mt-4 px-4"
                              : "monthly-card-description mt-4 px-4"
                          }
                        >
                          We set up and add a newsletter subscription form to
                          your website from any 3rd party provider such as
                          Mailchimp.
                        </p>
                      )}
                      <br />
                      <button className="get-started-btn mt-0 mb-5">
                        Get started
                      </button>
                    </div>
                    {showFeaturs && (
                      <div className="points p-3 mb-5 ">
                        {d.features.map((f, i) => {
                          return (
                            <>
                              <div className={i === 0 ? "mt-0" : "mt-2"}>
                                <img
                                  loading="lazy"
                                  src={ImageConstants.featureIcon}
                                  alt=""
                                />
                                <span>{f}</span>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      {showBootom && (
        <div className="mt-5 position-relative vat-box">
          <p>
            {" "}
            * VAT/Taxes to be charged additional as per country of purchase
          </p>
          <p className="vat-text px-5">
            ** One-Off Set Up Cost for migration of your existing to new
            framework - USD 250 if you have exisiting site for 5 HTML pages +
            Additional USD 10 per page
          </p>
        </div>
      )}
    </>
  );
};

export default MonthlyCards;
