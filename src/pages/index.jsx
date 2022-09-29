import React from "react";
import Layout from "../components/Layout";
import TheyTrustUs from "../components/TheyTrustUs";
import PlansSection from "../screens/home/PlansSection";
import HighPerformanceSection from "../screens/home/HighPerformanceSection";
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
      <FAQs />
      <TheyTrustUs />
    </Layout>
  );
};

export default Home;
