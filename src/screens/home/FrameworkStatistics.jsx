import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { statsSlider } from "../../constants/swiperConstants";
import greenCircle from "../../images/green-circle.png";
import thunderboltIcon from "../../images/icons/thunderbolt-icon.webp";
import orangeClrcle from "../../images/orange-circle.png";
import setUpQuery from "../../utils/pageSpeedInsights";
import { isValidUrl } from "../../utils/utils";

export const FrameworkStatistics = () => {
  const [baseUrl, setBaseUrl] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [categories, setCategories] = useState(false);
  const [metrics, setMetrics] = useState({
    performance: 63,
    accessibility: 93,
    "best-practices": 82,
    seo: 83,
  });

  const handleChange = (e) => {
    setBaseUrl(e.target.value);
    const valid = isValidUrl(e.target.value);
    if (!valid) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const runPageSpeed = (rawUrl) => {
    const res = isValidUrl(rawUrl);
    if (!res) return;
    else {
      const url = setUpQuery(rawUrl);
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setCategories(json.lighthouseResult.categories);
          setLoading(false);
        })
        .catch((err) => {
          setClicked(false);
          setLoading(false);
          setDisabled(false);
          setError(true);
        });
    }
  };

  useEffect(() => {
    if (clicked) {
      runPageSpeed(baseUrl);
      setClicked(false);
    }
  }, [clicked]);

  useEffect(() => {
    if (categories) {
      let res = {};
      for (let category in categories) {
        res[category] = categories[category].score * 100;
      }
      setMetrics(res);
      setCategories(null);
      setBaseUrl("");
    }
  }, [categories]);

  useEffect(() => {
    if (clicked && !categories) {
      setError(false);
      setLoading(true);
    }
  }, [clicked, categories]);

  return (
    <>
      <section className="web-vitals-section">
        <h2 className="title">Discover your core web vitals</h2>
        <div className="stats">
          <div className="container">
            <div className="row stats-container">
              <div className="col-md-3 col-6 circle-contain">
                <div className="circle">
                  <img
                    loading="lazy"
                    src={metrics.performance < 90 ? orangeClrcle : greenCircle}
                    alt=""
                  />
                  <p
                    className={
                      metrics.performance < 90
                        ? "circle-text-red"
                        : "circle-text-green"
                    }
                  >
                    {metrics.performance}
                  </p>
                </div>
                <p className="circle-info">Performance</p>
              </div>
              <div className="col-md-3 col-6 circle-contain">
                {" "}
                <div className="circle">
                  <img
                    loading="lazy"
                    src={
                      metrics.accessibility < 90 ? orangeClrcle : greenCircle
                    }
                    alt=""
                  />
                  <p
                    className={
                      metrics.accessibility < 90
                        ? "circle-text-red"
                        : "circle-text-green"
                    }
                  >
                    {metrics.accessibility}
                  </p>
                </div>
                <p className="circle-info">Accessibiity</p>
              </div>
              <div className="col-md-3 col-6 circle-contain">
                {" "}
                <div className="circle">
                  <img
                    loading="lazy"
                    src={
                      metrics["best-practices"] < 90
                        ? orangeClrcle
                        : greenCircle
                    }
                    alt=""
                  />
                  <p
                    className={
                      metrics["best-practices"] < 90
                        ? "circle-text-red"
                        : "circle-text-green"
                    }
                  >
                    {metrics["best-practices"]}
                  </p>
                </div>
                <p className="circle-info">Best Practices</p>
              </div>
              <div className="col-md-3 col-6 circle-contain">
                {" "}
                <div className="circle">
                  <img
                    loading="lazy"
                    src={metrics.seo < 90 ? orangeClrcle : greenCircle}
                    alt=""
                  />
                  <p
                    className={
                      metrics.seo < 90 ? "circle-text-red" : "circle-text-green"
                    }
                  >
                    {metrics.seo}
                  </p>
                </div>
                <p className="circle-info">SEO</p>
              </div>
            </div>
          </div>
        </div>

        <div className="search-webpage">
          <h3>How fast is your website?</h3>
          <div className="search-box">
            <input
              value={baseUrl}
              onChange={handleChange}
              placeholder="Enter your webpage URL"
              type="text"
            />
            <button
              disabled={disabled || isLoading}
              onClick={() => setClicked(true)}
            >
              {isLoading ? "Calculating..." : "Analyze"}
            </button>
          </div>
          {error && <p className="danger-info">Please insert a valid url</p>}
        </div>
      </section>

      <section className="framework-statistics parallax">
        <div className="container">
          <h1 className="section-title">
            A lightning fast framework which loads your website in less than 2
            seconds.
          </h1>
          <div className="row web-view-flex">
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
                <img
                  loading="lazy"
                  width={"70px"}
                  src={thunderboltIcon}
                  alt=""
                />
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
            <Swiper className="pl-3" {...statsSlider}>
              <div className="swiper-wrapper">
                <SwiperSlide>
                  <div className="stats-card-mob">
                    <h3>60%</h3>
                    <p>Faster Page Load Speed</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="stats-card-mob">
                    <h3>50%</h3>
                    <p>More Time Spent</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="stats-card-mob">
                    <h3>50%</h3>
                    <p>Less Bounce Rate</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="stats-card-mob">
                    <h3>3x</h3>
                    <p>ROI of marketing campaigns</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="stats-card-mob">
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
