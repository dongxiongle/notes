const mock = require('./mock');
module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    }
  },
  devServer: {
    compress: true,
    port: 9010,
    disableHostCheck: true,
    before: (app) => {
      mock(app);
    }
  }
}