import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageConstants from "../constants/imageConstants";
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
  ];
  return (
    <section className="ml-5 they-trust-us-section">
      <Swiper
        
      >
        {slides.map((s, key) => {
          return (
            <SwiperSlide>
              <div className="smile-card text-center mb-5 p-5">
                <img className="mt-md-3" src={s.logo} />
                <p className="mb-5">{s.title}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default StandaredFeaturesSlider;
