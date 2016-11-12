/*
• Compile images 'images/'
*/

exports.default = path =>
  ({
    module: {
      loaders: [
        {
          test: /\.(jpg|jpeg|gif|png)$/,
          exclude: /node_modules/,
          loader: 'url-loader?limit=1024&name=images/[name].[ext]',
          include: path,
        },
      ],
    },
  });
