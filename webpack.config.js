import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";

export default {
	mode:"development",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
	new CopyPlugin({
		patterns: [
		  { from: "src/styles.css", to: "styles.css" },
		],
	  })
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
    path: path.resolve("dist"),
  },
};
