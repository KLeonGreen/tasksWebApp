export const GET_PLANNER = "GET_PLANNER";
export const ACTIVE_PLANNER = "ACTIVE_PLANNER";

export const getPlanner = () => {
  return async (dispatch, useState) => {
    let response = await fetch("http://localhost:3000/planner/");
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
