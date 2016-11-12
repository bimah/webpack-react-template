/*
• Compile fonts 'app/fonts/'
*/

exports.default = () =>
    ({
      module: {
        loaders: [
          {
            test: /\.(woff|eot|ttf)$/,
            loader: 'file-loader?name=fonts/[name].[ext]',
          },
        ],
      },
    });
