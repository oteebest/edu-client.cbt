import cbtApi from "./index";

export async function loadPredefinedData() {
  return cbtApi.get("api/v1/data");
}
