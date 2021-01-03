module.exports = {
  publicPath:'',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/sass/main.scss"`
      },
    }
  }
}