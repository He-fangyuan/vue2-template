import axios from "../axios";

export const excelExport = () =>
  axios({
    url: "/excelExport",
    method: "get",
  });
