import React from "react";
import WeeklySalesCard from "../WeeklySalesCard";
import Header from "../Header";
import SideBar from "../SideBar";
import AreaChartCard from "../AreaChartCard";
import VariationCards from "../VariationCards";
import SocialMediaCards from "../SocialMediaCards";

import "./index.css";

const Home = () => {
  return (
    <div id="home-container">
      <SideBar />
      <div className="right-panel">
        <Header className="Headercontainer" />
        <div className="content-section">
          <VariationCards />
          <div className="charts-container">
            <AreaChartCard />
            <WeeklySalesCard />
          </div>
          <SocialMediaCards />
        </div>
      </div>
    </div>
  );
};

export default Home;
