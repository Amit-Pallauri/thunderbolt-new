import React from "react";
import ImageConstants from "../../constants/imageConstants";

const PayMonthlyWebsite = ({
  showBootom = true,
  showFeaturs = true,
  isExtraAddOn = false,
  showDescription = true,
  showSub = false,
  currency,
  isMonthly
}) => {
  const convertPrice = (price) => {
    return {
      currency,
      price,
    };
  };
  const cards = [
    {
      title: "Brochure Style Website",
      des: "Launch your online platform, your way, with ease",
      price: convertPrice(60),
      features: [
        "Free Custom Design 1-5 Pages, additional pages at extra cost",
        "Terms and Privacy Pages Included",
        "Unlimited pages/Content",
        "Contact forms and gallaries",
        "Includes CMS Backend (Content Management System)",

        "Basic on-page SEO",
        " Google Search Console Index ",
        " Up to 3 Built Concurrency ",
        "Google Analytics ",
        "30 Minutes of our Monthly Time ",
        " Monthly Updates, Backups, Reporting ",

        "Blog/News",
        "Newsletter Subscription",
        "Live Chat",
        "Event Calendar",
        "Booking/Appointment system",
      ],
    },
    {
      title: "Standard",
      des: "The complete solution for your business growth",
      price: convertPrice(80),
      features: [
        "Standard Performance ",
        "  1 website",
        "Up to 10 Pages HTML Website",
        " 100 GB storage ",
        " 10 Databases ",
        "4 GB RAM ",
        "100 GB Bandwidth ",
        " Up to 5M Server Request ",
        " Up to 3 Built Concurrency ",
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
      title: "Ultimate",
      des: "Perfect for growing your high traffic sites",
      price: convertPrice(200),
      features: [
        "Standard Performance ",
        "  1 website",
        "Up to 10 Pages HTML Website",
        " 100 GB storage ",
        " 10 Databases ",
        "4 GB RAM ",
        "100 GB Bandwidth ",
        " Up to 5M Server Request ",
        " Up to 3 Built Concurrency ",
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
  ];
  return (
    <div className="row ">
      {cards?.map((d, key) => {
        return (
          <>
            <div className="col-md-4">
              <div className="monthly-card pay-monthly-card m-md-2 mt-2 mb-5 mb-md-0  text-center  flex-fill">
                <div className="bg-white rounded-lg ">
                  <div className="mb-2 space">{"s"}</div>
                  <p className="monthly-card-title  ">{d.title}</p>

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

                    <span> per {isMonthly ? "month":"year"}</span>

                    <br />
                  </p>

                  <button className=" mt-3 get-started-btn mt-0 mb-5">
                    Get started
                  </button>
                </div>
                {showFeaturs && (
                  <div className="points p-3  mb-5 ">
                    {d.features.map((f, i) => {
                      const isDisable = i >= 10;
                      return (
                        <>
                          <div
                            className={
                              i === 0
                                ? "mt-0"
                                : isDisable
                                ? "disbale-text mt-2"
                                : "mt-2"
                            }
                          >
                            <img
                              loading="lazy"
                              src={ImageConstants.featureIcon}
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
  );
};
export default PayMonthlyWebsite;
