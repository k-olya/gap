const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "gap.js",
    library: "gap",
    libraryTarget: "umd",
    globalObject: "this",
    // library: {
    //   name: "gap",
    //   type: "umd",
    // },
  },
  //    externals: {
  //      lodash: {
  //        commonjs: 'lodash',
  //        commonjs2: 'lodash',
  //        amd: 'lodash',
  //        root: '_',
  //      },
  //    },
};
