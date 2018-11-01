'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1540891018161_6566';

  config.view = {
    root: path.join(appInfo.baseDir, 'app/view'),
    mapping: {
      '.html': 'nunjucks',
    },
  };

  config.assets = {
    publicPath: '/public',
    devServer: {
      command: 'umi dev',
      port: 8000,
      env: {
        APP_ROOT: path.join(__dirname, '../app/web'),
        BROWSER: 'none',
        SOCKET_SERVER: 'http://127.0.0.1:8000',
      },
      debug: true,
    },
  };

  config.security = {
    csrf: false,
  };

  config.alinode = {
    // 从 `Node.js 性能平台` 获取对应的接入参数
    // https://node.console.aliyun.com/
    appid: process.env.EGG_ALINODE_APPID 
    secret: process.env.EGG_ALINODE_SECRET 
  };

  config.apiPath = 'http://127.0.0.1:7004';

  config.cluster = {
    listen: {
      port: 3101,
      hostname: '127.0.0.1',
      // path: '/var/run/egg.sock',
    },
  };

  return config;
};
