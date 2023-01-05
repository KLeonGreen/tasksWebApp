import React from "react";
import "./task-section.css";
import { Form, FormControl, Button } from "react-bootstrap";
import add from "../assets/icons/add.svg";
import CheckBox from "./CheckBox";
import { useDispatch, useSelector } from "react-redux";

function TaskSection() {
  const tasksPlanner = useSelector((state) => state.planner.activePlanner);
  const tasks = tasksPlanner ? tasksPlanner.tasks : [];

  return (
    <div className="task-section">
      <h2>Planner title</h2>
      <div className="tasks-add d-flex align-items-center justify-content-between">
        <h3>Planners</h3>
        <Button className="add-button2">
          <img src={add} alt="" />
        </Button>
      </div>
      <div>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2 search-area2" />
        </Form>
      </div>
      <div className="mt-3">
        {tasksPlanner &&
          tasks &&
          tasks.map((task) => {
            return <CheckBox key={task.id} task={task} />;
          })}
      </div>
    </div>
  );
}

export default TaskSection;
