import React from "react";
import thunderboltIcon from "../../images/icons/thunderbolt-icon.png";
import orangeClrcle from "../../images/orange-circle.png";
import greenCircle from "../../images/green-circle.png";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  homeSkillSlider,
  statsSlider,
  workSlider,
} from "../../constants/swiperConstants";

export const FrameworkStatistics = () => {
  return (
    <>
      <section className="web-vitals-section">
        <h2 className="title">Discover your core web vitals</h2>
        <div className="stats">
          <div className="container">
            <div className="row stats-container">
              <div className="col-sm-3 circle-contain">
                <div className="circle">
                  <img src={orangeClrcle} alt="" />
                  <p>63</p>
                </div>
                <p className="circle-info">Performance</p>
              </div>
              <div className="col-sm-3 circle-contain">
                {" "}
                <div className="circle">
                  <img src={greenCircle} alt="" />
                  <p>63</p>
                </div>
                <p className="circle-info">Accessibiity</p>
              </div>
              <div className="col-sm-3 circle-contain">
                {" "}
                <div className="circle">
                  <img src={orangeClrcle} alt="" />
                  <p>63</p>
                </div>
                <p className="circle-info">Best Practices</p>
              </div>
              <div className="col-sm-3 circle-contain">
                {" "}
                <div className="circle">
                  <img src={orangeClrcle} alt="" />
                  <p>8</p>
                </div>
                <p className="circle-info">SEO</p>
              </div>
            </div>
          </div>
        </div>

        <div className="search-webpage">
          <h3>How fast is your website?</h3>
          <div className="search-box">
            <input placeholder="Enter your webpage URL" type="text" />
            <button>Analyze</button>
          </div>
        </div>
      </section>

      <section className="framework-statistics">
        <div className="container">
          <h1 className="section-title">
            A lightning fast framework which loads your website in
            <span style={{ color: "#1DB954" }}> less than 2 seconds.</span>
          </h1>
          <div className="row web-view">
            <div className="col-4">
              <div className="stats-card mb-5">
                <h3>60%</h3>
                <p>Faster Page Load Speed</p>
              </div>
              <div className="stats-card">
                <h3>3x</h3>
                <p>ROI of marketing campaigns</p>
              </div>
            </div>
            <div className="col-4 middle-col">
              <div className="icon">
                <img width={"70px"} src={thunderboltIcon} alt="" />
              </div>
              <div className="stats-card">
                <h3>50%</h3>
                <p>Less Bounce Rate</p>
              </div>
            </div>
            <div className="col-4">
              <div className="stats-card mb-5">
                <h3>50%</h3>
                <p>More Time Spent</p>
              </div>
              <div className="stats-card">
                <h3>2x</h3>
                <p>Impact of Integrated SEO</p>
              </div>
            </div>
          </div>

          <div className="mob-view">
            <div className="thunderbolt-icon">
              <img width={"70px"} src={thunderboltIcon} alt="" />
            </div>
            <Swiper className="workslider pl-3" {...statsSlider}>
              <div className="swiper-wrapper">
                <SwiperSlide>
                  <div className="stats-card">
                    <h3>60%</h3>
                    <p>Faster Page Load Speed</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="stats-card">
                    <h3>3x</h3>
                    <p>ROI of marketing campaigns</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="stats-card">
                    <h3>50%</h3>
                    <p>Less Bounce Rate</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="stats-card">
                    <h3>50%</h3>
                    <p>More Time Spent</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="stats-card">
                    <h3>2x</h3>
                    <p>Impact of Integrated SEO</p>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
