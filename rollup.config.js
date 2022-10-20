const commonjs = require('@rollup/plugin-commonjs');
const coffee = require('rollup-plugin-coffee-script');
const jsonPlugin = require('@rollup/plugin-json')

const pkg = require('./package.json');

module.exports = {
  input: 'lib/main.coffee',
  external: ['atom', 'fs', 'path'],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    coffee(),
    jsonPlugin(),
    commonjs({
      extensions: ['.js', '.coffee'],
      requireReturnsDefault: "auto",
    }),
  ],
};
