import { createStore } from "vuex";
import createVuexPersistedState from "vuex-persistedstate";
import auth from "@/store/modules/auth";
import category from "@/store/modules/category";
import movie from "@/store/modules/movie";
const store = createStore({
  state() {
    return {
      logo: require("@/assets/img/logo.png"),
      logo_reverse: require("@/assets/img/logo_reverse.png"),
      myPageLogo: require("@/assets/img/logo/mypage.png"),
      loginLogo: require("@/assets/img/logo/login.png"),
      logoutLogo: require("@/assets/img/logo/logout.png"),
      signupLogo: require("@/assets/img/logo/signup.png"),
      kakaoLoginLogo: require("@/assets/img/kakao_login.png"),
      footerLogo: require("@/assets/img/logo_footer.png"),
      loginBackground: require("@/assets/img/login_background.jpg"),
      defaultProfile: require("@/assets/img/default.jpg"),
    };
  },
  modules: {
    movie,
    auth,
    category,
  },
  plugins: [
    createVuexPersistedState({
      paths: ["movie"],
      key: "movieChart", // storate의 item 이름 설정
      storage: window.sessionStorage,
    }),
  ],
});

export default store;
