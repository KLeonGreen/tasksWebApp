import React from "react";
import "./task-section.css";
import { Form, FormControl, Button, Modal } from "react-bootstrap";
import add from "../assets/icons/add.svg";
import CheckBox from "./CheckBox";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTask } from "../redux/actions/action";

function TaskSection() {
  const dispatch = useDispatch();

  const tasksPlanner = useSelector((state) => state.planner.activePlanner);
  const IDPlanner = useSelector((state) => state.planner.plannerId);
  const tasks = tasksPlanner ? tasksPlanner.tasks : [];

  const [addedtask, setAddedtask] = useState("Add task name");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(IDPlanner);

  const taskAdded = {
    content: addedtask,
    done: false,
  };

  return (
    <>
      {tasksPlanner && (
        <div className="task-section">
          <h2>{tasksPlanner.name}</h2>
          <div className="tasks-add d-flex align-items-center justify-content-between">
            <h3>All Tasks ({tasks.length})</h3>
            <Button className="add-button2" onClick={handleShow}>
              <img src={add} alt="" />
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Create Task</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Task name</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder={addedtask}
                      onChange={(e) => {
                        setAddedtask(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    handleClose();
                    dispatch(addTask(taskAdded, IDPlanner));
                  }}
                >
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
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
      )}
    </>
  );
}

export default TaskSection;
