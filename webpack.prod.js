import { merge } from "webpack-merge";
import common from "./webpack.common.js";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { importLoaders: 2 } },
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  output: {
    filename: "[name].[contenthash].js",
  },
});
