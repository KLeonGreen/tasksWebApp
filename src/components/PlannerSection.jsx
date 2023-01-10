import React from "react";
import "./planner-section.css";
import { Form, FormControl, Button, Modal, Accordion, Card } from "react-bootstrap";
import add from "../assets/icons/add.svg";
import PlannerCard from "./PlannerCard";
import { useEffect } from "react";
import { getPlanner } from "../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addPlanner } from "../redux/actions/action";

function PlannerSection() {
  const planners = useSelector((state) => state.planner.content);
  const dispatch = useDispatch();
  const [addplanner, setAddplanner] = useState("Enter Planner Title");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addedPlanner = {
    name: addplanner,
  };

  useEffect(() => {
    dispatch(getPlanner());
  }, []);

  //console.log(planners);

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
        <Button className="add-button" onClick={handleShow}>
          <img src={add} alt="" />
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create planner</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Planner Title</Form.Label>
                <Form.Control
                  type="email"
                  placeholder={addplanner}
                  onChange={(e) => {
                    setAddplanner(e.target.value);
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
                dispatch(addPlanner(addedPlanner));
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
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
