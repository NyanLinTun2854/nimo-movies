import axios from "axios";
import React from "react";

const ApiRequest = async (value) => {
  let result,
    responseType,
    parameter,
    path = "https://api.themoviedb.org/3/movie/";

  const userToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjlmYjg4YWNhOWZlYjEwYzM5NTg4ZTk0NDlmMWZlMSIsInN1YiI6IjY0OWE1YmUxZDM1ZGVhMDEwYjgwNGNmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.faqh-TOsoAJ8qumSlm15trkP93-PoQ-l-gpyVoiYAew";

  // Set the AUTH token for any request
  axios.interceptors.request.use((config) => {
    config.headers = {
      Authorization: `Bearer ${userToken}`,
      Accept: "application/json",
    };
    return config;
  });

  // to decide responseType is exists or not
  value.type !== undefined ? (responseType = value.type) : (responseType = "");
  if (
    value.method === "post" ||
    value.method === "patch" ||
    value.method === "put" ||
    value.method === "delete"
  ) {
    parameter = {
      baseURL: path,
      method: value.method,
      url: value.url,
      data: value.params,
      responseType,
    };
  } else {
    parameter = {
      baseURL: path,
      method: value.method,
      url: value.url,
      params: value.params,
      responseType,
    };
  }
  // calling api
  await axios(parameter)
    .then((response) => {
      result = response;
    })
    .catch((err) => (result = err));
  return result;
};

export default ApiRequest;
