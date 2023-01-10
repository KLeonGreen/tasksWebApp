import { GET_PLANNER, ACTIVE_PLANNER, GET_PLANNER_ID } from "../actions/action";

const defaultState = {
  content: [],
  activePlanner: null,
  plannerId: null,
};

export const plannerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PLANNER:
      return {
        ...state,
        content: action.payload,
      };

    case ACTIVE_PLANNER:
      return {
        ...state,
        activePlanner: action.payload,
      };

    case GET_PLANNER_ID:
      return {
        ...state,
        plannerId: action.payload,
      };
    default:
      return state;
  }
};
