<template>
  <div id="container">
    <div
      id="contents"
      class="set-bg"
      v-bind:style="{ backgroundImage: 'url(' + backgroundUrl + ')' }"
    >
      <div class="login-wrap">
        <div class="login-form">
          <div class="row justify-content-center px-5 mt-2 form-logo">
            <FormLogo :reverse="true"></FormLogo>
          </div>
          <div class="row justify-content-center p-0">
            <div class="col-md-10">
              <form class="form" @submit.prevent="handleSubmit">
                <ErrorField :error="error"></ErrorField>
                <Input
                  :label="$t('member.loginId')"
                  v-model="username"
                  :error="''"
                  class="mt-3"
                ></Input>
                <PasswordInput
                  :label="$t('member.password')"
                  v-model="password"
                  :error="''"
                >
                </PasswordInput>
                <FormButton :label="$t('member.login')" :is-pending="isPending">
                </FormButton>
              </form>
              <KaKaoLogin></KaKaoLogin>
              <p class="text-lg-end col">
                <router-link tag="a" to="/find-id" class="mx-2"
                  >{{ $t("member.findId") }}
                </router-link>
                <router-link tag="a" to="/find-pw"
                  >{{ $t("member.findPw") }}
                </router-link>
              </p>

              <p class="text-center">
                {{ $t("member.notMember") }}
                <router-link tag="a" to="/sign-up"
                  >{{ $t("member.signUp") }}
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useLogin } from "@/composables/login";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Input from "@/components/slot/Input";
import PasswordInput from "@/components/slot/PasswordInput";
import FormButton from "@/components/slot/FormButton";
import ErrorField from "@/components/slot/ErrorField";
import FormLogo from "@/components/slot/FormLogo";
import KaKaoLogin from "@/components/oauth/KaKaoLogin";
import CategoryService from "@/services/category.service";

export default {
  name: "Login",
  components: {
    FormLogo,
    ErrorField,
    Input,
    PasswordInput,
    FormButton,
    KaKaoLogin,
  },
  setup() {
    const { error, login, isPending } = useLogin();
    const store = new useStore();
    const router = useRouter();

    const username = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await login(username.value, password.value);
      if (store.getters["auth/isLoggedIn"]) {
        await router.push({ name: "Home" });
      }
    };
    const genderTypes = ref(CategoryService.getGenderType());

    const backgroundUrl = computed(() => {
      return store.state.loginBackground;
    });

    return {
      backgroundUrl,
      username,
      password,
      handleSubmit,
      error,
      isPending,
      genderTypes,
    };
  },
};
</script>

<style scoped>
#contents {
  clear: both;
  padding-bottom: 50px;
}
.login-wrap {
  position: relative;
  padding: 30px 30px 0;
  height: 900px;
}
.login-wrap .login-form {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 19%;
  height: 53%;
  margin: 0 auto;
  background: rgba(255, 223, 162, 0.8);
  box-shadow: rgba(148, 57, 57, 0.4) 5px 5px, rgba(148, 57, 57, 0.3) 10px 10px,
    rgba(148, 57, 57, 0.2) 15px 15px, rgba(148, 57, 57, 0.1) 20px 20px,
    rgba(148, 57, 57, 0.05) 25px 25px;
  border-radius: 10px;
  align-content: center;
}

.login-wrap .login-form .form-logo img {
  background-color: transparent;
  opacity: 0.9;
  filter: alpha(opacity=90);
}

.login-wrap .icon span {
  color: #fff;
}

/* Hide the browser's default checkbox */
.checkbox-wrap input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

a,
a:hover {
  color: #943939;
}
</style>
