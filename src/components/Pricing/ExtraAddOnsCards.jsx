import React from "react";
import ImageConstants from "../../constants/imageConstants";

const ExtraAddOnsCards = (
  showFeaturs = false,
  showSub = true,
  isExtraAddOn,
  showDescription
) => {
  const slides = [
    {
      title: "Subscription Services",
      des: "We set up and add a newsletter subscription form to your website from any 3rd party provider such as Mailchimp.",
      sub: "One-off Cost. Works with all Plans",
      cost: "200",
      symbol: "£",
      buttonText: "Get Started",
    },
    {
      title: "Custom Forms",
      des: "A dedicated project team of min 3-5 developments, UI/UX designers, project managers who works with you",
      sub: "One-off Cost. Works with all Plans",
      cost: "48",
      symbol: "£",
      buttonText: "Get Started",
    },
    {
      title: "Abandoned Basket",
      des: "Remind your customers who have left items in their shopping basket with automatic emails at set intervals.",
      sub: "One-off Cost. Works with all Plans",
      cost: "200",
      symbol: "£",
      buttonText: "Get Started",
    },
    {
      title: "Membership System",
      des: "We add a full-featured membership solution to your website. Lock away content and give access to valued members.",
      sub: "One-off Cost. Works with all Plans",
      cost: "280",
      symbol: "£",
      buttonText: "Get Started",
    },
    {
      title: "Paid Subscriptions",
      des: "Capture recurring revenue with a variety of paid subscriptions for physical or virtual products and services.",
      sub: "One-off Cost. Works with all Plans",
      cost: "360",
      symbol: "£",
      buttonText: "Get Started",
    },
    {
      title: "On-Demand Developer",
      des: "Any Developers L5 Range (React/Node Js/Python/Php/Wordpress) & Application Support (Testers & Maintenance) for Man Day (7 Hours)",
      sub: "One-off Cost. Works with all Plans",
      cost: "12",
      symbol: "£",
      buttonText: "Get Started",
    },
  ];
  return (
    <div className="row mx-0">
      {slides.map((s, index) => {
        return (
          <div key={index} className="col-md-4 mt-3 p-0 m-0 mb-3 gy-5">
            <div className="extra-card-width monthly-card">
              <div className="bg-white rounded-lg ">
                <div className="mb-2 space">{"s"}</div>
                <p className="monthly-card-title  ">{s.title}</p>
                <p className="monthly-cost px-5 ">
                  <strong className="price-symbol">{s.symbol}</strong>
                  <strong>{s.cost}</strong>
                  <span> per month</span>
                  <br />
                  <span className="monthly-cost-sub-description">{s.sub}</span>
                </p>
                <p className={"text-black monthly-card-description mt-4 px-4"}>
                  {s.des}
                </p>
                <br />
                <button className="get-started-btn mt-0 mb-5">
                  {s.buttonText}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ExtraAddOnsCards;
