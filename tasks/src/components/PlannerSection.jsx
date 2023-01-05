import React from "react";
import "./planner-section.css";
import { Form, FormControl, Button } from "react-bootstrap";
import add from "../assets/icons/add.svg";
import PlannerCard from "./PlannerCard";
import { useEffect } from "react";
import { getPlanner } from "../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";

function PlannerSection() {
  const planners = useSelector((state) => state.planner.content);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlanner());
  }, []);

  console.log(planners);

  return (
    <div className="planner-section">
      <h2>
        Hi! <p>You have 23 tasks in 7 planners</p>{" "}
      </h2>
      <div className="mt-3">
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2 search-area" />
        </Form>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <h3>Planners</h3>
        <Button className="add-button">
          <img src={add} alt="" />
        </Button>
      </div>

      <div className="planners-cards">
        {planners.map((planner) => (
          <PlannerCard key={planner.id} planner={planner} plannersArray={planners} />
        ))}
      </div>
    </div>
  );
}

export default PlannerSection;
