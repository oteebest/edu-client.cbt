import { combineReducers } from "redux";
import assessments from "./assessmentReducers";
import questions from "./questionReducers";
import predefinedData from "./predefinedDataReducer";

const rootReducer = combineReducers({
  assessments,
  questions,
  predefinedData,
});

export default rootReducer;
