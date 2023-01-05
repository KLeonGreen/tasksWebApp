import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { plannerReducer } from "../reducers/plannerReducer";

const bigReducer = combineReducers({
  planner: plannerReducer,
  //task: taskReducer,
});

export const store = configureStore({
  reducer: bigReducer,
});
