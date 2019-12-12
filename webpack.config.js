var webpack = require("webpack");
var path = require("path");
var CompressionPlugin = require("compression-webpack-plugin");
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = getConfiguration;

function getConfiguration(env) {
  var outFilePath = __dirname + "\\public";
  var pluginsUsed = [];
  var modeUsed = "development";
  var optimize = {};

  if (env === "prod") {
    modeUsed = "production";
    //outFilePath = path.resolve(__dirname, appPath);
    pluginsUsed = [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify("production")
      }),
      //new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
      new webpack.NoEmitOnErrorsPlugin(),
      new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0
      })
    ];

    optimize = {
      minimizer: [
        // we specify a custom UglifyJsPlugin here to get source maps in production
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          uglifyOptions: {
            compress: false,
            ecma: 6,
            mangle: true
          },
          sourceMap: true
        })
      ]
    };
  } else {
    console.log("Unknown env " + env + ". Defaults to dev");
  }

  function getConfigOutput() {
    var outObject = {
      entry: ["babel-polyfill", "./src/index.js"],
      output: {
        filename: "bundle.js",
        path: outFilePath
      },
      //mode : modeUsed,
      plugins: pluginsUsed,
      //optimization: optimize,
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: "babel-loader"
            }
          }
        ]
      },
      resolve: {
        modules: [
          path.resolve(__dirname + "/src"),
          path.resolve(__dirname + "/node_modules")
        ]
      },
      node: {
        fs: "empty",
        net: "empty",
        tls: "empty"
      }
    };
    return outObject;
  }

  var finalOut = [];
  finalOut.push(getConfigOutput());
  return finalOut;
}
