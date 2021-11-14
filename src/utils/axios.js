import axios from "axios";

const instance = axios.create({
  baseURL: "https://job-api-nodejs-react.herokuapp.com/api/v1",
});

export default instance;
