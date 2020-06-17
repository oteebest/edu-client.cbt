import { combineReducers } from "redux";
import assessments from "./assessmentReducers";

const rootReducer = combineReducers({
  assessments,
});

export default rootReducer;
