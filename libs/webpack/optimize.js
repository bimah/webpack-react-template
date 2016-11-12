/*
• DedupePlugin remove duplicate code in the bundle
• UglifyJsPlugin minimize the script in the bundle
• OccurenceOrderPlugin analize and prioritize often used modules
*/

const webpack = require('webpack');

exports.default = () =>
  ({
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(true),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false,
        },
        compress: {
          warnings: false,
          screw_ie8: true,
        },
      }),
    ],
  });
