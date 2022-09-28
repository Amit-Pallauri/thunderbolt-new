import React from "react";
import Layout from "../components/Layout";
import TheyTrustUs from "../components/TheyTrustUs";

import PlansSection from "../screens/home/PlansSection";
import HighPerformancceSection from "../screens/home/HighPerformancceSection";
import FAQs from "../screens/home/FAQs";
import SuperfastDotCom from "../screens/home/SuperfastDotCom";
import HowItWorks from "../screens/home/HowItWorks";
import { FrameworkStatistics } from "../screens/home/FrameworkStatistics";
import FasterStats from "../screens/home/FasterStats";
import HeroSection from "../screens/home/HeroSection";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <FasterStats />
      <FrameworkStatistics />
      <HowItWorks />
      <SuperfastDotCom />
      <PlansSection />
      <HighPerformancceSection />
      <FAQs />
      <TheyTrustUs />
    </Layout>
  );
};

export default Home;
