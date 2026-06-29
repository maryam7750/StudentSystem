import axios from "axios";

const API = axios.create({

  baseURL: "https://localhost:7094/api"

});

export default API;