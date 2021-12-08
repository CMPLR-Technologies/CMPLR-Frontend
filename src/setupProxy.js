const proxy = require("http-proxy-middleware");
module.exports = (app) => {
   app.use(
      "/api/",
      proxy({
         target: "http://243d-193-227-10-6.ngrok.io",
         changeOrigin: true,
         pathRewrite: {
            "^/api/": "/"
         },
      })
   );
};