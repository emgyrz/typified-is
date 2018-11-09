
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: process.env.JS_MODULES_FORMAT === 'cjs' ? 'commonjs' : false,
        targets: {
          browsers: [ 'last 2 versions', 'ie >= 11' ]
        }
      }
    ],
    '@babel/preset-flow'
  ]
}




