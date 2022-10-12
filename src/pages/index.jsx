import React, { useEffect } from "react";
import Layout from "../components/Layout";
import TheyTrustUs from "../components/TheyTrustUs";
import FAQs from "../screens/home/FAQs";
import FasterStats from "../screens/home/FasterStats";
import { FrameworkStatistics } from "../screens/home/FrameworkStatistics";
import HeroSection from "../screens/home/HeroSection";
import HowItWorks from "../screens/home/HowItWorks";
import PlansSection from "../screens/home/PlansSection";
import SuperfastDotCom from "../screens/home/SuperfastDotCom";
import run from "../utils/pageSpeedInsights";
import reportWebVitals from "../utils/reportWebVitals";
import sendToAnalytics from "../utils/webVital";

const Home = () => {
  // useEffect(() => {
  //   run();
  // }, []);

  return (
    <Layout>
      <HeroSection />
      <FasterStats />
      <FrameworkStatistics />
      <HowItWorks />
      <SuperfastDotCom />
      <PlansSection />
      <FAQs />
      <TheyTrustUs />
    </Layout>
  );
};

export default Home;
