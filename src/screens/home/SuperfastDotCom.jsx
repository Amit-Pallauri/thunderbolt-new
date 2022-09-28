import React, { useState } from "react";
import gatsbyLogo from "../../images/logos/gatsby-logo.png";
import strapiLogo from "../../images/logos/strapi-logo.png";
import awsLogo from "../../images/logos/aws-logo.png";
import worldClassUserExperience from "../../images/superfast-dot-com/world-class-user-experience.jpg";
import betterGoogleRanking from "../../images/superfast-dot-com/better-google-ranking.jpg";
import improvedCustomerRetention from "../../images/superfast-dot-com/improved-customer-retention-rate.jpg";
import increasedWebsiteConversion from "../../images/superfast-dot-com/increase-website-conversions.jpg";
import lessBounceRate from "../../images/superfast-dot-com/less-bounce-rate.jpg";
import scaleEffortlessly from "../../images/superfast-dot-com/scale-effortlessly.jpg";
import thunderboltIcon from "../../images/icons/thunderbolt-icon.png";

const SuperfastDotCom = () => {
  const [activeTab, setActiveTab] = useState(1);
  const data = [
    {
      id: 1,
      title: "World Class User Experience",
      image: worldClassUserExperience,
      data: "No one likes to wait or stare at a loading website. A superfast website will give your users what they want fast, improving user experience and satisfaction. ",
    },

    {
      id: 2,
      title: "Better Google Ranking",
      image: betterGoogleRanking,
      data: "Do you ever visit Google search page 2? Didn’t think so. A superfast dot com will rank up higher in Google search results, making it easier for users to find your website easily.",
    },

    {
      id: 3,
      image: increasedWebsiteConversion,
      title: "Increase Website Conversions",
      data: "Converting users into customers is one of the hardest things of all. A superfast website gives your users what they want in a jiffy. ",
    },

    {
      id: 4,
      image: improvedCustomerRetention,
      title: "Improved Customer Retention Rate",
      data: "Users are less likely to revisit your website if it is slower than your competitors even by 250 milliseconds. ",
    },

    {
      id: 5,
      image: lessBounceRate,
      title: "Less Bounce Rate",
      data: "Faster loading website attracts organic traffic as it is more likely to be shared. Users can seamlessly move around your site if your web pages load fast giving you a much lower bounce rate.",
    },

    {
      id: 6,
      image: scaleEffortlessly,
      title: "Scale effortlessly",
      data: "Faster websites consume less computational power meaning a user with 1GB Ram will have the same experience as the one with 8 GB. This allows you to cater to a larger group of users without any hassle.",
    },
  ];
  return (
    <section className="superfast-dotcom-section">
      <h1 className="superfast-title mb-5 mt-5">
        Why do you need a superfast dot com
      </h1>
      <div className="why-you-need">
        <div className="why-you-need-content">
          <div className="row">
            <div className="col-md-6 content-section">
              <img className="icon" src={thunderboltIcon} alt="" />
              <img
                className="hero-img"
                src={data.find((el) => el.id === activeTab).image}
                alt=""
              />
              <div className="section-info">
                <p>{data.find((el) => el.id === activeTab).data}</p>
              </div>
            </div>
            <div className="col-md-6 list-section">
              <ul>
                {data.map((el) => {
                  return (
                    <li
                      onClick={() => setActiveTab(el.id)}
                      className={`${
                        el.id === activeTab
                          ? "list-option-active"
                          : "list-option"
                      }`}
                    >
                      {el.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="techs-we-use">
        <h1 className="title">Technologies we use</h1>
        <p className="subtitle">
          Thunderbolt is built upon ‘best in class’ technologies that shape the
          modern web
        </p>
        <div className="techs-img">
          <img className="picture-big" src={gatsbyLogo} alt="" />
          <img className="picture-big" src={strapiLogo} alt="" />
          <img className="picture-small" src={awsLogo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default SuperfastDotCom;
