
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'web',
      dll: false,
      routes: {
        exclude: [],
      },
      hardSource: false,
    }],
  ],
  proxy: {
    "/api/v1": {
      "target": "http://127.0.0.1:7004",
      "changeOrigin": true,
      "pathRewrite": { "^/api/v1": "" }
    },
    // "/api/v2": {
    //   "target": "http://192.168.0.110",
    //   "changeOrigin": true,
    //   "pathRewrite": { "^/api/v2" : "/api/v2" }
    // }
  },
}
