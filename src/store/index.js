import { createStore } from "vuex";
import modules from "@/store/modules";

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
  modules,
});

export default store;
