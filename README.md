# webpack-react-templeate
A template for any react project using webpack;

## Development Server & JavaScript
[webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) using Hot Modules Replacement

[Babel](https://babeljs.io/) compiler using **es2015**, **stage-0** and **react** preset

Linting JavaScript using [ESLint](http://eslint.org/) extending [airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) extensible shared config.

## Stylesheet
Loading and compiling SASS as [React CSS Modules](https://github.com/gajus/react-css-modules) for the **components** folder and 7-1 pattern for the global styles on **styles**;

SASS linting and autoprefix.

## Images
Images url-loader plus [transform-react-jsx-img-import](https://www.npmjs.com/package/babel-plugin-transform-react-jsx-img-import) to auto-generate imports for jsx img elements.

Using **svg-inline-loader** for SVG

## Fonts
Using file-loader for the Fonts.

## build
* components.min.css
* main.min.css
* vendor.js
* app.js
* fonts/
* images/
