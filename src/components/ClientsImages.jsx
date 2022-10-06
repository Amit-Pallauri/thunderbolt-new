import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const ClientsImages = () => {
  return (
    <div className="container">
      <div className="row clients-img">
        <div className="col-lg-2 col-4">
          <StaticImage
            src="../images/logos/client-vodafone.png"
            placeholder="tracedSVG"
            alt=""
          />
        </div>
        <div className="col-lg-2 col-4">
          <StaticImage
            src="../images/logos/client-mpay.png"
            placeholder="tracedSVG"
            alt=""
          />
        </div>
        <div className="col-lg-2 col-4">
          <StaticImage
            src={"../images/logos/client-tomorrow-street.png"}
            placeholder="tracedSVG"
            alt=""
          />
        </div>
        <div className="col-lg-2 col-4">
          <StaticImage
            src={"../images/logos/client-audi.png"}
            placeholder="tracedSVG"
            alt=""
          />
        </div>
        <div className="col-lg-2 col-4">
          <StaticImage
            src={"../images/logos/client-ge-money.png"}
            placeholder="tracedSVG"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ClientsImages;
