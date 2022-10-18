import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8082/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "hello");
  }
  
}

export default new UserService();
