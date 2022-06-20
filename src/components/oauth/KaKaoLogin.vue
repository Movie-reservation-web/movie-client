<template>
  <div class="form-group">
    <button class="rounded submit my-3 kakao_btn">
      <img :src="kakaoLoginLogo" @click="loginWithKakao" alt="" />
    </button>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "KaKaoLogin",
  components: {},
  props: {
    socialType: String,
  },
  setup() {
    const store = new useStore();
    const kakaoLoginLogo = computed(() => {
      return store.state.kakaoLoginLogo;
    });
    const loginWithKakao = () => {
      const params = {
        redirectUri: "http://localhost:8080/oauth2/login/kakao",
        state: "imovie",
      };
      window.Kakao.Auth.authorize(params).then();
    };
    return {
      loginWithKakao,
      kakaoLoginLogo,
    };
  },
  methods: {},
};
</script>

<style>
.kakao_btn {
  position: relative;
  width: 100%;
  cursor: pointer;
  box-shadow: -6px -6px 5px rgba(201, 140, 110, 0.8), 3px 3px 10px;
}

.kakao_btn:hover {
  box-shadow: inset -3px -3px 5px rgba(201, 140, 110, 0.5),
    inset 8px 0px 16px rgba(201, 140, 110, 0.1);
}

.kakao_btn img {
  width: 100%;
  padding: 0;
}
</style>
