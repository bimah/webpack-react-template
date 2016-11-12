module.exports = {
  devServer: require('./DevServer').default,
  minify: require('./minify').default,
  setFreeVariable: require('./setFreeVariable').default,
  clean: require('./clean').default,
  imageLoader: require('./imageLoader').default,
  optimize: require('./optimize').default,
  loadFonts: require('./loadFonts').default,
  setupCompSASS: require('./compSASS').default,
  setupMainSASS: require('./mainSASS').default,
  buildSVG: require('./buildSVG').default,
};
