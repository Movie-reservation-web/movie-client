<template>
  <img
    class="kakao_btn"
    :src="kakaoLoginLogo"
    @click="loginWithKakao"
  />
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'KaKaoLogin',
  components: {},
  setup () {
    const store = new useStore()
    const kakaoLoginLogo = computed(() => {
      return store.state.kakaoLoginLogo
    })
    return {
      kakaoLoginLogo,
    }
  },
  methods: {
    loginWithKakao () {
      const params = {
        redirectUri: 'http://localhost:8080/oauth2/login/kakao',
        state: 'imovie'
      }
      window.Kakao.Auth.authorize(params).then(
    )
    }
  }
}
</script>

<style>
.kakao_btn {
  cursor: pointer;
}
</style>
