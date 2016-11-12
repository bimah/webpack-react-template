/*
• Compile main SASS 'app/sass/'
• Extract generated inline style to  file 'main.css' (only for production env)
• Lint CSS using airbnb CSS rules
*/

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SassLintPlugin = require('sasslint-webpack-plugin');
const autoprefixer = require('autoprefixer');

const extractMain = new ExtractTextPlugin('main.min.css', { allChunks: true });

const mainSassLoder = () => {
  if (process.env.npm_lifecycle_event === 'build') {
    return extractMain.extract('style', 'css!postcss-loader!sass?sourceMap=map');
  }
  return 'style!css!sass';
};
exports.default = options =>
  ({
    module: {
      loaders: [
        {
          test: /(\.scss|\.css)$/,
          loader: mainSassLoder(),
          include: options.main,
        },
      ],
    },
    postcss: () => [autoprefixer({ browsers: ['ios_saf 7'] })],
    plugins: [
      extractMain,
      new SassLintPlugin({
        configFile: options.lint,
        glob: '**/*.scss',
        quiet: false,
        failOnWarning: false,
        failOnError: false,
        testing: false,
        context: options.context,
        ignoreFiles: [],
        ignorePlugins: [],
      }),
    ],
  });
