<template>
  <header class="header-section">
    <div class="hs-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-2">
            <div class="logo">
              <router-link tag="a" :to="{ name: 'Home' }"
              ><img :src="logoUrl" alt=""
              /></router-link>
            </div>
          </div>
          <div class="col-lg-10">
            <div class="ht-widget pt-4" v-if="!loggedIn">
              <router-link tag="a" to="/login" class="hw-btn"
              >{{ $t('member.login') }}
              </router-link>
              <router-link tag="a" to="/sign-up" class="hw-btn"
              >{{ $t('member.signUp') }}
              </router-link>
            </div>
            <div class="ht-widget pt-4" v-else>
              <a
                type="button"
                @click="logout"
                class="hw-btn text-decoration-none"
              >
                {{ $t('member.logout') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'main-header',
  data () {
    return {}
  },
  setup () {
    const router = useRouter()
    const store = useStore()
    const loggedIn = computed(() => {
      return store.state.auth.status.loggedIn
    })
    const loggedInName = computed(() => {
      return store.state.auth.user.name
    })
    const logoUrl = computed(() => {
      return store.state.logo
    })

    const logout = async () => {
      await store.dispatch('auth/logout')
      if (!store.getters['auth/isLoggedIn']) {
        await router.push({ name: 'Login' })
      }
    }
    return {
      logoUrl,
      loggedIn,
      logout,
      loggedInName
    }
  }
}
</script>
<style scoped>
.hs-nav {
}
</style>
