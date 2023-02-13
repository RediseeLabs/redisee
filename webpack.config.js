const path = require("path");
const HtmLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./client/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"),
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, "./build"),
    },
    port: 8080,
    // proxy: {
    //   '/': 'http://localhost:3000',
    // },
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/i,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.png/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmLWebpackPlugin({
      template: path.join(__dirname, "/index.html"),
    }),
  ],
  resolve: {
    extensions: [".jsx", ".js"],
  },
};
