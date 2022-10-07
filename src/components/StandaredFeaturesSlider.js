import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageConstants from "../constants/imageConstants";
import { PricingSkillSlider } from "../constants/swiperConstants";
const StandaredFeaturesSlider = () => {
  const slides = [
    {
      title: "Save thousands on upfront traditional design fee",
      logo: ImageConstants.Smile,
    },
    {
      title: "No WordPress Templates, all is custom built for you",
      logo: ImageConstants.Bulb,
    },
    {
      title:
        "No hourly Rates Edits, Just *Free Monthly content edits as standard",
      logo: ImageConstants.EditIcon,
    },
    {
      title: "Secure private Hosting with 99.99% uptime",
      logo: ImageConstants.Secure,
    },
    {
      title: "Responsive Design",
      logo: ImageConstants.DeskstopIcon,
    },
    {
      title: "Lighting fast loading times",
      logo: ImageConstants.flashIcon,
    },
    {
      title: "SEO Friendly structure",
      logo: ImageConstants.SearchIcon,
    },
    {
      title: "Free SSL",
      logo: ImageConstants.lockIcon,
    },
    {
      title: "Tech Support",
      logo: ImageConstants.techSupport,
    },
  ];
  return (
    <section className="ml-md-5 py-md-1 px-md-5 they-trust-us-section">
      <Swiper {...PricingSkillSlider}>
        {slides.map((s, key) => {
          const isBigTitle = s?.title?.length < 13;
          const isGreen = s?.title.includes("free")
          return (
            <SwiperSlide className="custom-swiper-slide" style={{background:"transparent"}}>
              <div  className="smile-card   mt-5 mt-md-5  mb-5 ">
                <img
                  loading="lazy"
                  className="mt-md-4 mt-4"
                  src={s.logo}
                  alt=""
                />
                <p className={isBigTitle ? "mb-5 padding-three" : "mb-5 px-4"}>
                  {s.title}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default StandaredFeaturesSlider;
