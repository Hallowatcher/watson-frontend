var webpack = require('webpack');

module.exports = {
  entry: "./src/index.tsx",
  target: "web",
  output: {
    filename: "bundle.js",
    path: __dirname + "/../assets/js"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  // ES6 Promise
  files: ['./node_modules/es6-promise/dist/es6-promise.js'],

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader", exclude: /(node_modules)/ },
      { enforce: 'pre', test: /\.js$/, loader: "source-map-loader", exclude: /(node_modules)/ }
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};
