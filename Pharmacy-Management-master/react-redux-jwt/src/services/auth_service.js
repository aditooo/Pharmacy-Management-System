import axios from "axios";

const API_URL = "http://localhost:8082/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "auth/signin", { username, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(name, phNo, email, doctor_password) {
    return axios.post(API_URL + "signup", {
      name,
      phNo,
      email,
      doctor_password
    });
  }
}

export default new AuthService();
