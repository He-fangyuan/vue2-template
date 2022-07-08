import axios from "../axios";

export const getUserList = (data) =>
  axios({
    url: "/getUserList",
    method: "get",
    params: data,
  });
