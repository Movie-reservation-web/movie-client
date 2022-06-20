import axios from "@/axios";
import {useCookies} from "vue3-cookies";
const configHeaders = {
  "content-type": "application/json; charset=utf-8",
};
const jwt = require("jsonwebtoken");
const {cookies} = useCookies();
class AuthService {


  /**
   * 로그인
   */
  login(email, password) {
    let request = {
      email: email,
      password: password,
    };
    console.log(request);
    return axios
      .post("/auth/login", JSON.stringify(request), {
        headers: configHeaders,
      })
      .then((res) => {
        let token = res.data.data.accessToken;
        localStorage.setItem("token", token);
        let email = jwt.decode(token).sub;
        localStorage.setItem("user", email);
        return email;
      });
  }
  reissue() {
    return axios.post("/auth/reissue").then((res) => {
      let token = res.data.data.accessToken;
      localStorage.setItem("token", token);
    });
  }
  /**
   * 로그아웃
   */
  logout() {
    let token = localStorage.getItem("token");
    console.log(token);
    return axios
      .post(
        "/auth/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data.message);
        cookies.remove("Refresh-Token");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      });
  }

  /**
   * 비밀번호 재확인
   */
  reCheckPassword(username, password) {
    let request = {
      loginId: username,
      password: password,
    };
    return axios
      .post("/auth/re-check-password", JSON.stringify(request), {
        headers: configHeaders,
      })
      .then((response) => {
        return response.data.data;
      });
  }
}

export default new AuthService();
