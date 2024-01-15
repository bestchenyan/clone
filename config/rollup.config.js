const common = require('./rollup.js');

module.exports = {
  input: 'src/index.js',
  plugins: [common.getCompiler()],
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'es',
      banner: common.banner,
    },
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'cloneDeep',
    },
  ],
};
