const webpack = require("webpack");
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  publicPath: isProd ? "/" : "",
  configureWebpack: {
    // Set up all the aliases we use in our app.
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6,
      }),
    ],
  },
  pwa: {
    name: "Alfie Designs",
    themeColor: "#ffffff",
    msTileColor: "#ffffff",
    appleMobileWebAppCapable: "yes",
    disableWebAppManifestInjection: true,
    appleMobileWebAppStatusBarStyle: "#ffffff",
    workboxPluginMode: "InjectManifest",
    // workboxOptions: {
    //   // swSrc is required in InjectManifest mode.
    //   swSrc: "./service-worker.js",
    //   // ...other Workbox options...
    // },
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== "production",
  },
};
