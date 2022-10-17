import React from "react";
import ImageConstants from "../../constants/imageConstants";

const PayMonthlyWebsite = ({
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
      title: "Brochure Style Website",
      des: "Launch your online platform, your way, with ease",
      price: convertPrice(isMonthly ? 75 : 60),
      features: [
        "Free Custom Design 1-5 Pages, additional pages at extra cost",
        "Terms and Privacy Pages Included",
        "Unlimited pages/Content",
        "Contact forms and gallaries",
        "Includes CMS Backend (Content Management System)",
        "Mobile and tablet Optimized",
        "Basic on-page SEO",
        "Google Search Console Index",
        "Google Analytics",
        "30 Minutes of our Monthly Time",
        "Monthly Updates, Backups, Reporting",
        "Blog/News",
        "Newsletter Subscription",
        "Live Chat",
        "Event Calendar",
        "Booking/Appointment system",
        "Sell Products/Services",
        "Payment Gateway integration",
      ],
      garyAfter: 10,
    },
    {
      title: "Booking Style Website",
      des: "The complete solution for your business growth",
      price: convertPrice(isMonthly ? 125 : 100),
      features: [
        "Free Custom Design 1-8 Pages, additional pages at extra cost",
        " Terms and Privacy Pages Included",
        "Unlimited pages/Content",
        " Contact forms and gallaries ",
        " Includes CMS Backend (Content Management System) ",
        "Mobile and tablet Optimized",
        "Basic on-page SEO ",
        " Google Search Console Index ",
        " Google Analytics ",
        "30 Minutes of our Monthly Time",
        "Monthly Updates, Backups, Reporting ",
        "Blog/News  ",
        "Newsletter Subscription",
        "Live Chat",
        "Event Calendar",
        "Booking/Appointment system",
        "Sell Products/Services",
        "Payment Gateway integration",
      ],
      garyAfter: 15,
    },
    {
      title: "E-commerce Website",
      des: "Perfect for growing your high traffic sites",
      price: convertPrice(isMonthly ? 150 : 120),
      features: [
        "Free Custom Design 1-10 Pages, additional pages at extra cost ",
        "Terms and Privacy Pages Included",
        "Unlimited pages/Content",
        "Contact forms and gallaries",
        "Includes CMS Backend (Content Management System)",
        "Mobile and tablet Optimized",
        "Basic on-page SEO",
        "Google Search Console Index",
        "Google Analytics",
        "30 Minutes of our Monthly Time",
        "Monthly Updates, Backups, Reporting",
        "Blog/News",
        "Newsletter Subscription",
        "Live Chat",
        "Event Calendar",
        "Booking/Appointment system",
        "Sell Products/Services",
        "Payment Gateway integration",
      ],
      garyAfter: false,
    },
  ];
  return (
    <div className="row ">
      {cards?.map((d, key) => {
        return (
          <>
            <div className="col-md-4">
              <div className="monthly-card pay-monthly-card text-center flex-fill">
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

                    <span> per {isMonthly ? "month" : "year"}</span>

                    <br />
                  </p>

                  <a
                    target={"_blank"}
                    href="https://dashboard.thunderboltjs.com/"
                  >
                    <button className=" mt-3 get-started-btn mt-0 mb-5">
                      Get Started
                    </button>
                  </a>
                </div>
                {showFeaturs && (
                  <div className="points p-3  mb-5 ">
                    {d.features.map((f, i) => {
                      const isDisable =
                        d.garyAfter === false ? false : i >= d.garyAfter + 1;
                      return (
                        <>
                          <div className="d-flex px-2 position-realtive">
                            <img
                              className="position-absolute  point-img"
                              src={
                                isDisable
                                  ? ImageConstants.mutedFeatureIcon
                                  : ImageConstants.featureIcon
                              }
                            />
                            <p
                              className={
                                isDisable
                                  ? "point-text-muted"
                                  : "text-start point-text "
                              }
                            >
                              {f}
                            </p>
                          </div>
                          {/* <div className={"d-flex px-2 position-realtive"}>
                            <img
                              className="position-absolute point-img"
                              loading="lazy"
                              src={ImageConstants.featureIcon}
                            />
                            <p className="text-start ">{f}</p>
                          </div> */}
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
