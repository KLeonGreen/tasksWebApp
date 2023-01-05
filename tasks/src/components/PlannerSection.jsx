import React from "react";
import "./planner-section.css";
import { Form, FormControl, Button } from "react-bootstrap";
import add from "../assets/icons/add.svg";
import PlannerCard from "./PlannerCard";

function PlannerSection() {
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
        <PlannerCard />
        <PlannerCard />
        <PlannerCard />
        <PlannerCard />
        <PlannerCard />
        <PlannerCard />
      </div>
    </div>
  );
}

export default PlannerSection;
