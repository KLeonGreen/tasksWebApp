export const GET_PLANNER = "GET_PLANNER";
export const ACTIVE_PLANNER = "ACTIVE_PLANNER";
export const GET_PLANNER_ID = "GET_PLANNER_ID";

export const getPlanner = () => {
  return async (dispatch, useState) => {
    const apiURL = process.env.REACT_APP_BE_URL;
    let response = await fetch(`${apiURL}/planner`);
    let planners = await response.json();
    dispatch({
      type: GET_PLANNER,
      payload: planners,
    });
  };
};

export const getActivePlanner = (planner) => {
  return async (dispatch, useState) => {
    dispatch({
      type: ACTIVE_PLANNER,
      payload: planner,
    });
  };
};

export const addPlanner = (planner) => {
  return async (dispatch, useState) => {
    const apiURL = process.env.REACT_APP_BE_URL;
    const postHeaders = {
      method: "POST",
      body: JSON.stringify(planner),
      headers: { "Content-Type": "application/json" },
    };

    let response = await fetch(`${apiURL}/planner/`, postHeaders);
    console.log(response);
  };
};

export const getPlannerId = (plannerId) => {
  return async (dispatch, useState) => {
    dispatch({ type: GET_PLANNER_ID, payload: plannerId });
    console.log(plannerId);
  };
};

export const addTask = (task, plannerId) => {
  return async (dispatch, useState) => {
    const apiURL = process.env.REACT_APP_BE_URL;
    const postHeaders = {
      method: "POST",
      body: JSON.stringify(task),
      headers: { "Content-Type": "application/json" },
    };

    let response = await fetch(`${apiURL}/task/${plannerId}`, postHeaders);
    console.log(response);
  };
};
