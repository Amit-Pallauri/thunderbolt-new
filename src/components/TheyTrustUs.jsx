import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ImageConstants } from "../constants/imageConstants";
import { homeSkillSlider } from "../constants/swiperConstants";

const TheyTrustUs = () => {
  const slides = [];
  return (
    <section className="they-trust-us-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-home">
              <h2 className="title">They trust us</h2>
            </div>
          </div>
        </div>
      </div>
      <Swiper className="homeskillslider" {...homeSkillSlider}>
        <div className="swiper-wrapper">
          <SwiperSlide>
            <div>
              <img src={ImageConstants.clientCastrol} alt="castrol" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={ImageConstants.clientToi} alt="toi" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={ImageConstants.clientGoeres} alt="goeres" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={ImageConstants.clientFirstpost} alt="firstpost" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={ImageConstants.clientLt} alt="l-t" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={ImageConstants.clientFlipkart} alt="flipkart" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={ImageConstants.clientLatestly} alt="latestly" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={ImageConstants.clientTeamup} alt="teamup" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={ImageConstants.clientIronman} alt="ironman" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={ImageConstants.fiveRing} alt="5_Ring" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={ImageConstants.twoImirates} alt="2_Emirates" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={ImageConstants.threeMgs} alt="3_MG" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={ImageConstants.sevenGMC} alt="7_GMC" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={ImageConstants.sevenChevrolet} alt="7_Chevrolet" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={ImageConstants.oneIsuzu} alt="1_Isuzu" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={ImageConstants.sixRoyalEnfield} alt="6_Royal-Enfield" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={ImageConstants.fourLoreal} alt="4_Loreal" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={ImageConstants.nineBp} alt="9_bp" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={ImageConstants.clientVodafone} alt="client-vodafone" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={ImageConstants.clientGeMoney} alt="client-ge-money" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={ImageConstants.clientAudi} alt="client-audi" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={ImageConstants.clientArcelor} alt="client-arcelor" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={ImageConstants.clientTomorrowStreet}
                alt="tomorrow-street"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={ImageConstants.clientCna} alt="client-cna" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={ImageConstants.clientTechnoport}
                alt="client-technoport"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={ImageConstants.clientChronicle}
                alt="client-chronicle"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={ImageConstants.clientEy} alt="client-ey" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={ImageConstants.clientMpay} alt="client-mpay" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={ImageConstants.clientWikiStage}
                alt="client-WikiStage"
              />
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </section>
  );
};

export default TheyTrustUs;
