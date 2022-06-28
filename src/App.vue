<template>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css"
  />
  <div id="app">
    <header-ad />
    <div id="header" class="header">
      <main-header />
    </div>
    <router-view />
    <div id="footer">
      <main-footer />
    </div>
  </div>
</template>

<script>
import HeaderAd from "./components/layout/HeaderAd";
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import "@/assets/css/style.css";

export default {
  name: "app",
  components: {
    "header-ad": HeaderAd,
    "main-header": Header,
    "main-footer": Footer,
  },
};
</script>
<style scoped>
#footer {
  background-color: #2e4750;
}
</style>
