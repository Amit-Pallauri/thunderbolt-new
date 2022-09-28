import React from "react";
import SwiperCore, { Autoplay } from "swiper";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "../styles/style.css";
import "../styles/responsive.css";

const Layout = ({ children }) => {
  SwiperCore.use([Autoplay]);
  React.useEffect(() => {
    if (!window.console) window.console = {};
    var methods = ["log", "debug", "warn", "info", "error"];
    for (var i = 0; i < methods.length; i++) {
      console[methods[i]] = function () {};
    }
  }, []);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
