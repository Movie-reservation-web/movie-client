const target = "http://localhost:8081";

module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      "^/v1/api": {
        target,
        changeOrigin: true,
      },
    },
  },

  pluginOptions: {
    i18n: {
      locale: "ko_KR",
      fallbackLocale: "en_US",
      localeDir: "locales",
      enableLegacy: undefined,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },
};
