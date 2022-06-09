import { createStore } from "vuex";
import modules from "@/store/modules";

const store = createStore({
  state() {
    return {
      logo: require("@/assets/img/logo.png"),
      kakaoLoginLogo: require("@/assets/img/kakao_login.png"),
      footerLogo: require("@/assets/img/logo_footer.png"),
      loginBackground: require("@/assets/img/login_background.jpg"),
      defaultProfile: require("@/assets/img/default.jpg"),
    };
  },
  modules,
});

export default store;
