import React from "react";
import SideNav from "./SideNav";
import PlannerSection from "./PlannerSection";
import TaskSection from "./TaskSection";
import "./mainSection.css";

const MainSection = () => {
  return (
    <div className="main-container d-flex">
      <SideNav />
      <PlannerSection />
      <TaskSection />
    </div>
  );
};

export default MainSection;
