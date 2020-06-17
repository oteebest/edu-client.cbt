import cbtApi from "./index";

export async function loadAssessment() {
  return cbtApi.get("api/v1/assessment");
}

export async function DeleteAssessment(id) {
  return cbtApi.delete(`api/v1/assessment/${id}`);
}

export async function CreateAssessment(assessment) {
  return cbtApi.post(`api/v1/assessment`, { ...assessment });
}

export async function UpdateAssessment(id, assessment) {
  return cbtApi.put(`api/v1/assessment/${id}`, { ...assessment });
}
