import * as types from "../actions/actionTypes";
import InitialState from "./initialState";
import _ from "lodash";

export default function assessmentReducer(
  state = InitialState.assessments,
  action
) {
  switch (action.type) {
    case types.CREATE_ASSESSMENT_SUCCESS:
      return ManageAssessment(state, action.assessment);
    case types.UPDATE_ASSESSMENT_SUCCESS:
      return ManageAssessment(state, action.assessment);
    case types.DELETE_ASSESSMENT_SUCCESS:
      return DeleteAssessment(state, action.id);
    case types.LOAD_ASSESSMENT_SUCCESS:
      return { ..._.mapKeys(action.assessments, "id") };
    case types.FILTER_ASSESSMENT_SUCCESS:
      return FilterAssessment(state, action.searchText);
    default:
      return state;
  }

  function DeleteAssessment(assessments, id) {
    return _.omit(assessments, [id]);
  }

  function ManageAssessment(assessments, asssessment) {
    const managedAssessment = { [asssessment.id]: asssessment };

    return { ...assessments, ...managedAssessment };
  }

  function FilterAssessment(assessments, searchText) {
    var objectValues = Object.values(assessments);

    var filteredAssessments = objectValues.filter((u) =>
      u.name.includes(searchText)
    );

    console.log(filteredAssessments);

    return { ..._.mapKeys(filteredAssessments, "id") };
  }
}
