import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Layout from "../components/Layout";
import MonthlyCards from "../components/Pricing/MonthlyCards";
import imageConstants from "../constants/imageConstants";
import homeSlider from "../constants/swiperConstants";
const Home = () => {
  return (
    <Layout>
      <div className="pricing--main-box bg-white p-md-5 p-4 ">
        <div className="h-100 d- align-items-center justify-content-center">
          <div class="p-md-5  mb-5 jumbotron text-center jumbotron-fluid">
            <div class="container ">
              <h1 class="display-4 pricing-h1">
                <strong>
                  Plans to suit your needs -<br /> <span>Save upto 20%</span>{" "}
                  when billed annually
                </strong>
              </h1>{" "}
              <p class="lead pricing-p px-5 ">
                With Built-in Security and speed Optimzations for <br /> your
                site performance.
              </p>
            </div>
          </div>
        </div>
        <div className="d-md-flex mb-100  align-items-center justify-content-center">
          <div className="pricing-switch-btn bd-highlight col-example">
            <div class="container">
              <div class="row">
                <button class="col-6   pricing-monthly">
                  <span>Monthly</span>
                </button>
                <button class="col-6  pricing-yearly">
                  <span>Yearly</span>
                </button>
              </div>
            </div>
          </div>
          <div className="pricing-selector d-flex">
            <label className="form-label mx-3 ">Select Currency</label>
            <select class="" aria-label=".form-select-sm example">
              <option value="1">£</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <MonthlyCards showSub={false} />
      </div>

      <div className="h-100 d- align-items-center justify-content-center">
        <div class="p-md-5 p-sm-3 jumbotron text-center jumbotron-fluid">
          <div class="container  ">
            <h1 className="pricing-hero-section-two">
              Enrich your plan with Add-ons
            </h1>
            <p class="display-4 pricing-hero-section-two-h2">
              <strong>Pay Monthly Websites</strong>
            </p>{" "}
            <p class="lead pricing-p2 px-5 ">
              Modern Website with flexible payment options to suit your
              business, pay monthly or pay yearly with 20% off, No Set Up feesm
              No Contracts and all plans include unlimited website pages and
              unlimited content updates
            </p>
          </div>
        </div>
      </div>
      <div className="p-md-5 p-3 mb-5 card-container hero-two text-center">
        <MonthlyCards showBootom={false} showDescription={false} />
        <div className="">
          <p className="stand ">Standard website features</p>
        </div>
        <Swiper
          observeParents={true}
          observer={true}
          slidesPerView={5.5}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5.5,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide>
            <div className="smile-card p-5">
              <img className="mt-md-3" src={imageConstants.Smile} />
              <p>Save thousands on upfront traditional design fee</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="smile-card p-5">
              <img className="mt-md-3" src={imageConstants.Smile} />
              <p>Save thousands on upfront traditional design fee</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="smile-card p-5">
              <img className="mt-md-3" src={imageConstants.Smile} />
              <p>Save thousands on upfront traditional design fee</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="smile-card p-5">
              <img className="mt-md-3" src={imageConstants.Smile} />
              <p>Save thousands on upfront traditional design fee</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="smile-card p-5">
              <img className="mt-md-3" src={imageConstants.Smile} />
              <p>Save thousands on upfront traditional design fee</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="smile-card p-5">
              <img className="mt-md-3" src={imageConstants.Smile} />
              <p>Save thousands on upfront traditional design fee</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="smile-card p-5">
              <img className="mt-md-3" src={imageConstants.Smile} />
              <p>Save thousands on upfront traditional design fee</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="smile-card p-5">
              <img className="mt-md-3" src={imageConstants.Smile} />
              <p>Save thousands on upfront traditional design fee</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="smile-card p-5">
              <img className="mt-md-3" src={imageConstants.Smile} />
              <p>Save thousands on upfront traditional design fee</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="smile-card mb-5 p-5">
              <img className="mt-md-3" src={imageConstants.Smile} />
              <p>Save thousands on upfront traditional design fee</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="text-center p-md-5 mb-5 px-4">
        <h2 className="extra mb-5">Extra Add-Ons</h2>
        <MonthlyCards
          showFeaturs={false}
          showSub={true}
          showBootom={false}
          isExtraAddOn={true}
          showDescription={false}
        />
      </div>
    </Layout>
  );
};

export default Home;
