import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getActivePlanner } from "../redux/actions/action";
import { getPlannerId } from "../redux/actions/action";
import { useSelector } from "react-redux";

function PlannerCard({ planner, plannersArray }) {
  const dispatch = useDispatch();
  const plannerId = useSelector((state) => state.planner.plannerId);
  const [clicked, setClicked] = useState(false);

  const changeStatus = () => {
    if (clicked === false) {
      setClicked(true);
    } else if (clicked === true) {
      setClicked(false);
    }
  };

  //console.log(plannerId);

  return (
    <div
      //className="planner-card"
      className={clicked ? "clicked" : "planner-card"}
      onClick={() => {
        dispatch(getActivePlanner(planner));
        changeStatus();
        dispatch(getPlannerId(planner.id));
      }}
    >
      <div className="title-planner">{planner.name}</div>

      {planner.tasks ? <div className="tasks-planner">{planner.tasks.length}</div> : <div className="tasks-planner">0</div>}

      <div className="date-planner">{planner.createdAt}</div>
    </div>
  );
}

export default PlannerCard;
