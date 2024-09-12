import { merge } from "webpack-merge";
import common from "./webpack.common.js";

export default merge(common, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", { loader: "css-loader", options: { importLoaders: 2 } }, "postcss-loader", "sass-loader"],
      },
    ],
  },
  output: {
    filename: "[name].bundle.js",
  },
  devServer: {
    static: "./dist",
    hot: true,
  },
  devtool: "inline-source-map",
});
