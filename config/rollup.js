// import { babel } from "@rollup/plugin-babel";
import babel from '@rollup/plugin-babel';
import { version as _version, name } from '../package.json';

const version = _version;

const banner = `/*!
* ${name} ${version}
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

const _banner = banner;
export { _banner as banner };
const _getCompiler = getCompiler;
export { _getCompiler as getCompiler };
