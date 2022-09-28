import React from "react";
import PlansCard from "../../components/PlansCard";

const HighPerformancceSection = () => {
  return (
    <section className="high-performance">
      <h1>High Performing Pay Monthly Managed Websites</h1>
      <p className="sub-title">
        We provides affordable digital solution for one monthly fees to design,
        deploy and managed your business sites.
      </p>
      <div className="cards-container">
        {[1, 2, 3].map(() => {
          return <PlansCard />;
        })}
      </div>
      <div className="high-performance-footer">
        <p>
          Your business requires a digital strategy & stunning high converting
          websites that generate enquires and grow online.
        </p>
      </div>
    </section>
  );
};

export default HighPerformancceSection;
