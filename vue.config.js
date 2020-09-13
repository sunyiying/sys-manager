module.exports = {
  devServer: {
    open: false,
    port: 3333
    // proxy:{}
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_variable.scss";`
      }
    }
  }
};
