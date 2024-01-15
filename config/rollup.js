const babel = require('@rollup/plugin-babel');
const pak = require('../package.json');
const version = pak.version;

const banner = `/*!
* ${pak.name} ${version}
* Licensed under MIT
*/`;

function getCompiler() {
  return babel({
    babelHelpers: 'runtime',
    babelrc: false,
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers:
              'last 2 version, > 1%, ie >= 8, Chrome >= 45, safari >= 10',
            node: '0.12',
          },
          modules: false,
          //   松散模式
          loose: true,
        },
      ],
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: 2,
        },
      ],
    ],
    exclude: 'node_modules/**',
  });
}

exports.banner = banner;
exports.getCompiler = getCompiler;
