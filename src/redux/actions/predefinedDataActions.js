import * as types from "./actionTypes";
import * as dataApi from "../../api/dataApi";
import _ from "lodash";

export const LoadPredefinedData = () => async (dispatch) => {
  var response = await dataApi.loadPredefinedData();

  dispatch({
    type: types.LOAD_PREDEFINED_DATA_SUCCESS,
    predefinedData: response.data,
  });
};
