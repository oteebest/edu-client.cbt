import * as types from "../actions/actionTypes";
import InitialState from "./initialState";
import _ from "lodash";

export default function dataReducer(
  state = InitialState.predefinedData,
  action
) {
  switch (action.type) {
    case types.LOAD_PREDEFINED_DATA_SUCCESS:
      return { ...action.predefinedData };
    default:
      return state;
  }
}
