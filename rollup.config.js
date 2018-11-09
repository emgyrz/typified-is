
import babel from 'rollup-plugin-babel'
import copy from 'rollup-plugin-copy'
// import glob from 'glob'

const babelrc = require( './.babelrc' )


const babelOpts = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          browsers: [ 'last 2 versions', 'ie >= 11' ]
        }
      }
    ],
    '@babel/preset-flow'
  ]
}


export default [
  {
    input: 'src/index.js',
    output: {
      dir: 'dist',
      format: 'umd',
      file: 'dist/index.umd.js',
      name: 'typified_is'
    },

    plugins: [
      babel( {
        babelrc: false,
        ...babelOpts
      } ),
      copy( {
        'src/index.js.flow': 'dist/index.js.flow',
        'src/index.d.ts': 'dist/index.d.ts',
      } )
    ]
  }
]
