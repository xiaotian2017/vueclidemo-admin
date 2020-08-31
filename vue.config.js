module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/e-sun-manage/' : '/',
  devServer: {
    port: 3344,
    open: true
    // 设置代理，使客户端通过服务器的方式与服务器通信，解决跨域问题
    // proxy: {}
  },
  // css相关的配置
  css: {
    loaderOptions: {
      sass: {
        // 这里data换成 prependData  并且重启vue项目即可
        // 设置相对路径
        prependData: `@import "@/assets/scss/_variable.scss";`
      }
    }
  }
}
