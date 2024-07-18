import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";

export default {
  mode: "development",
  entry: "./src/app/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: [/node_modules/, /opentype.module.js/],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/app/index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "src/app/styles.css", to: "styles.css" }],
    }),
  ],
  devServer: {
    static: {
      directory: path.join("public"),
    },
    compress: true,
    port: 9000,
  },
  output: {
    filename: "bundle.js",
    path: path.resolve("dist/app"),
  },
};
