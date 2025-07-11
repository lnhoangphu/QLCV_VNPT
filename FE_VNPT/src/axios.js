import axios from "axios";
import _ from "lodash";


const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  // withCredentials: true,
});



instance.interceptors.response.use(
  (response) => {
    return response.data;
  }
);

export default instance;
