import { GET_PLANNER, ACTIVE_PLANNER } from "../actions/action";

const defaultState = {
  content: [],
  activePlanner: null,
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
    default:
      return state;
  }
};
