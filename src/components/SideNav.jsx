import React from "react";
import "./side-bar.css";
import logo from "../assets/icons/logo.svg";
import task from "../assets/icons/task.svg";

const SideNav = () => {
  return (
    <>
      <div className=" side-bar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div>
          <div className="task-button d-flex align-items-center">
            <img src={task} alt="" /> Tasks
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
