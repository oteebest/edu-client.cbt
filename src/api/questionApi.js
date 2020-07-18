import cbtApi from "./index";

export async function LoadQuestions(pageSize, pageNumber) {
  return cbtApi.get(
    `api/v1/question?pageSize=${pageSize}&pageNumber=${pageNumber}`
  );
}

export async function AddQuestion(question) {
  return cbtApi.post(`api/v1/question`, question);
}

export async function UpdateQuestion(id, question) {
  return cbtApi.put(`api/v1/question/${id}`, question);
}

export async function DeleteQuestion(id) {
  return cbtApi.DeleteQuestion(`api/v1/question/${id}`);
}
