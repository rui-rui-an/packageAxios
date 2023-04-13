module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      // 给 less-loader 传递 Less.js 相关选项
      less: {
        // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
        // `primary` is global variables fields name
        globalVars: {
          bgColor: "#0094ff",
        },
      },
    },
  },
  devServer: {
    proxy: {
      // change xxx-api/login => mock/login
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.BASE_API]: {
        target: `http://localhost:${8080}/mock`,
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.BASE_API]: "",
        },
      },
    },
  },
}
