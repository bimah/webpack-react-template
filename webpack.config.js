const path = require('path');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const parts = require('./libs/webpack/');
const pkg = require('./package.json');

let config;

process.env.BABEL_ENV = process.env.npm_lifecycle_event;


const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
  componentsSASS: path.join(__dirname, 'app', 'components'),
  lint: path.join(__dirname, '.scss-lint.yml'),
  mainSASS: path.join(__dirname, 'app', 'styles', 'main.scss'),
  sass: path.join(__dirname, 'app', 'styles', 'sass'),
};

const common = {
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: PATHS.app,
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app,
      },
    ],
  },
  entry: {
    app: PATHS.app,
    vendor: Object.keys(pkg.dependencies),
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};

switch (process.env.npm_lifecycle_event) {
  case 'build':
    config = merge(
      common,
      {
        devtool: 'source-map',
      },
      parts.clean(PATHS.build),
      parts.setFreeVariable('process.env.NODE_ENV', 'production'),
      parts.optimize(),
      parts.setupCompSASS({
        main: PATHS.componentsSASS,
        lint: PATHS.lint,
      }),
      parts.setupMainSASS({
        main: PATHS.mainSASS,
        lint: PATHS.lint,
        context: PATHS.sass,
      }),
      parts.minify(),
      parts.imageLoader(PATHS.app),
      parts.loadFonts(),
      parts.buildSVG());
    break;
  default:
    config = merge(
      common,
      {
        devtool: 'eval-source-map',
      },
      parts.setupCompSASS({
        main: PATHS.componentsSASS,
        lint: PATHS.lint,
      }),
      parts.setupMainSASS({
        main: PATHS.mainSASS,
        lint: PATHS.lint,
        context: PATHS.sass,
      }),
      parts.imageLoader(PATHS.app),
      parts.loadFonts(),
      parts.buildSVG(),
      parts.devServer({
        // Customize host/port here if needed
        host: process.env.HOST,
        port: 3000,
      }));
}

module.exports = validate(config);
