/*
• Compile CSS Modules styles
• Extract generated inline style to  file 'components.css' (only for production env)
• Lint CSS using airbnb CSS rules
*/

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SassLintPlugin = require('sasslint-webpack-plugin');
const autoprefixer = require('autoprefixer');

const extractComponent = new ExtractTextPlugin('components.min.css', { allChunks: true });

const CompSassLoder = () => {
  if (process.env.npm_lifecycle_event === 'build') {
    return extractComponent.extract(
    'style',
    'css?modules&importLoaders=1&allowMultiple=true&localIdentName=mxp-[name]-[local]-[hash:base64:5]!postcss-loader!sass?sourceMap=map');
  }
  return 'style!css?modules&allowMultiple=true&localIdentName=mxp-[name]-[local]_[hash:base64:5]!postcss-loader!sass?sourceMap=map';
};

exports.default = options =>
  ({
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loader: CompSassLoder(),
          include: options.main,
        },
      ],
    },
    postcss: () => [autoprefixer],
    plugins: [
      extractComponent,
      new SassLintPlugin({
        configFile: options.lint,
        glob: '**/*.scss',
        quiet: false,
        failOnWarning: false,
        failOnError: false,
        testing: false,
        context: options.main,
        ignoreFiles: [],
        ignorePlugins: [],
      }),
    ],
  });
