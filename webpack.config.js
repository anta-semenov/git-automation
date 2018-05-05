const path = require("path");
const slsw = require("serverless-webpack");

module.exports = {
  entry: slsw.lib.entries,
  devtool: "inline-source-map",
  output: {
    libraryTarget: "commonjs",
    path: path.join(__dirname, ".webpack"),
    filename: "[name].js",
  },
  target: "node",
  module: {
    loaders: [
      {
        test: /\.ts(x?)$/,
        loader: "ts-loader",
        exclude: [/\.(spec|e2e)\.ts$/],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
