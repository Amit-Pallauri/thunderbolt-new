import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { homeSkillSlider } from "../constants/swiperConstants";

const TheyTrustUs = () => {
  const slides = [];
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-home">
              <h2 className="commontitle">They trust us</h2>
            </div>
          </div>
        </div>
      </div>
      <Swiper className="homeskillslider" {...homeSkillSlider}>
        <div className="swiper-wrapper">
          {slides?.map((s) => {
            return (
              <SwiperSlide>
                <div>
                  <img loading="lazy" src={s} alt="castrol" />
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </section>
  );
};

export default TheyTrustUs;
