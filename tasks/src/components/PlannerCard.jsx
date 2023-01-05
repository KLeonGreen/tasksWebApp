import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getActivePlanner } from "../redux/actions/action";

function PlannerCard({ planner, plannersArray }) {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);

  const changeStatus = () => {
    if (clicked === false) {
      setClicked(true);
    } else if (clicked === true) {
      setClicked(false);
    }
  };

  return (
    <div
      //className="planner-card"
      className={clicked ? "clicked" : "planner-card"}
      onClick={() => {
        dispatch(getActivePlanner(planner));
        changeStatus();
      }}
    >
      <div className="title-planner">{planner.name}</div>
      <div className="tasks-planner">{plannersArray.length}</div>
      <div className="date-planner">{planner.createdAt}</div>
    </div>
  );
}

export default PlannerCard;
