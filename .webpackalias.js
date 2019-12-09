const path = require('path');
module.exports = {
  entry: '', //入口文件
  output: {},
  module: {},
//其他解决方案配置
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  //插件
};
