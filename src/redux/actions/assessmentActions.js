import * as types from "./actionTypes";
import * as assessmentApi from "../../api/assessmentApi";
import _ from "lodash";

export const DeleteAssessment = (id) => async (dispatch) => {
  await assessmentApi.DeleteAssessment(id);

  dispatch({ type: types.DELETE_ASSESSMENT_SUCCESS, id });
};

export const ManageAssessment = (assessment) => async (dispatch) => {
  let response;
  if (assessment.id) {
    response = await assessmentApi.UpdateAssessment(assessment.id, assessment);
    dispatch({
      type: types.UPDATE_ASSESSMENT_SUCCESS,
      assessment: response.data.data,
    });
  } else {
    response = await assessmentApi.CreateAssessment(assessment);
    dispatch({
      type: types.CREATE_ASSESSMENT_SUCCESS,
      assessment: response.data.data,
    });
  }
};

export const LoadAssessment = () => async (dispatch) => {
  const response = await assessmentApi.loadAssessment();

  dispatch({
    type: types.LOAD_ASSESSMENT_SUCCESS,
    assessments: response.data.data,
  });
};
