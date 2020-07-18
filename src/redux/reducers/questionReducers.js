import * as types from "../actions/actionTypes";
import InitialState from "./initialState";
import _ from "lodash";

export default function questionReducer(
  questions = InitialState.questions,
  action
) {
  switch (action.type) {
    case types.LOAD_QUESTION_SUCCESS:
      return { ...action.questions };
    case types.CREATE_QUESTION_SUCCESS:
      return ManageQuestion(questions, action.question);
    case types.UPDATE_QUESTION_SUCCESS:
      return ManageQuestion(questions, action.question);
    default:
      return questions;
  }

  function ManageQuestion(questions, question) {
    const mappedKeyQuestion = { [question.id]: question };

    return { ...questions, ...mappedKeyQuestion };
  }
}
