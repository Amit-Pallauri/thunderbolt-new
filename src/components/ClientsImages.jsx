import React from "react";
import ImageConstants from "../constants/imageConstants";

const ClientsImages = () => {
  return (
    <div className="container">
      <div className="row clients-img">
        <div className="col-lg-2 col-4">
          <img loading="lazy" src={ImageConstants.clientVodafone} alt="" />
        </div>
        <div className="col-lg-2 col-4">
          <img loading="lazy" src={ImageConstants.clientMpay} alt="" />
        </div>
        <div className="col-lg-2 col-4">
          <img
            loading="lazy"
            src={ImageConstants.clientTomorrowStreet}
            alt=""
          />
        </div>
        <div className="col-lg-2 col-4">
          <img loading="lazy" src={ImageConstants.clientAudi} alt="" />
        </div>
        <div className="col-lg-2 col-4">
          <img loading="lazy" src={ImageConstants.clientGeMoney} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ClientsImages;
