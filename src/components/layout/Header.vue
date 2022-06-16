<template>
  <div class="header_content">
    <div class="contents">
      <div class="logo">
        <a href="/">
          <img :src="logoUrl" alt="logo"/>
        </a>
      </div>
      <ul class="login_wrap">
        <li v-if="!loggedIn">
          <router-link tag="a" to="/login">
            <img :src="loginLogoUrl" alt="로그인"/>
            <span>{{ $t("member.login") }}</span>
          </router-link>
        </li>
        <li v-if="!loggedIn">
          <router-link tag="a" to="/sign-up">
            <img :src="signupLogoUrl" alt="회원가입"/>
            <span>{{ $t("member.signUp") }}</span>
          </router-link>
        </li>
        <li v-if="loggedIn">
          <a
            type="button"
            @click="logout"
            class="hw-btn text-decoration-none"
          >
            <img :src="logoutLogoUrl" alt="로그아웃"/>
            <span>{{ $t("member.logout") }}</span>
          </a>
        </li>
        <li>
          <router-link tag="a" to="/sign-up">
            <img :src="myPageLogoUrl" alt="마이페이지"/>
            <span>{{ $t("member.myPage") }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
  <div class="nav" style="left: 0px">
    <HeaderNav/>
  </div>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import HeaderNav from "./HeaderNav";

export default {
  name: "main-header",
  components: {
    HeaderNav
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const loggedIn = computed(() => {
      return store.state.auth.status.loggedIn;
    });
    const loggedInName = computed(() => {
      return store.state.auth.user.name;
    });
    const logoUrl = computed(() => {
      return store.state.logo;
    });
    const myPageLogoUrl = computed(() => {
      return store.state.myPageLogo;
    });
    const loginLogoUrl = computed(() => {
      return store.state.loginLogo;
    });
    const logoutLogoUrl = computed(() => {
      return store.state.logoutLogo;
    });
    const signupLogoUrl = computed(() => {
      return store.state.signupLogo;
    });

    const logout = async () => {
      await store.dispatch("auth/logout");
      if (!store.getters["auth/isLoggedIn"]) {
        await router.push({name: "Login"});
      }
    };
    return {
      logoUrl,
      loginLogoUrl,
      logoutLogoUrl,
      signupLogoUrl,
      myPageLogoUrl,
      loggedIn,
      logout,
      loggedInName
    };
  }
};
</script>
<style scoped>
.hs-nav {
}
</style>
