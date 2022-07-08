import axios from "../axios";

export const expandTable = (data) =>
  axios({
    url: "/expandTable",
    method: "get",
    params: data,
  });

export const dragTable = () =>
  axios({
    url: "/dragTable",
    method: "get",
  });

export const editTable = (data) =>
  axios({
    url: "/tableList",
    method: "get",
    params: data,
  });

export const treeTable = () =>
  axios({
    url: "/treeTable",
    method: "get",
  });
