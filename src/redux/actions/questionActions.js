import * as types from "./actionTypes";
import * as questionApi from "../../api/questionApi";
import _ from "lodash";

export const DeleteQuestion = (id) => async (dispatch) => {
  await questionApi.DeleteQuestion(id);

  dispatch({ type: types.DELETE_QUESTION_SUCCESS, id });
};

export const LoadQuestions = (
  subjectId,
  difficultyLevelId,
  pageSize,
  pageNumber
) => async (dispatch) => {
  const response = await questionApi.LoadQuestions(
    subjectId,
    difficultyLevelId,
    pageSize,
    pageNumber
  );

  dispatch({
    type: types.LOAD_QUESTION_SUCCESS,
    questions: response.data.data,
  });
};

export const ManageQuestion = (question) => async (dispatch) => {
  if (!question.id) {
    const response = await questionApi.AddQuestion(question);

    dispatch({
      type: types.CREATE_QUESTION_SUCCESS,
      question: response.data.data,
    });
  } else {
    const response = await questionApi.UpdateQuestion(question.id, question);

    dispatch({
      type: types.UPDATE_QUESTION_SUCCESS,
      question: response.data.data,
    });
  }
};
