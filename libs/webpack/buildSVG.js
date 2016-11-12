/*
• SVG sprite webpack loader
*/

exports.default = () =>
  ({
    module: {
      loaders: [
        {
          test: /\.svg$/,
          loader: 'svg-inline',
          query: {
            removeTags: true,
            removingTags: [
              'title',
              'desc',
              'defs',
              'style',
            ],
          },
        },
      ],
    },
  });
