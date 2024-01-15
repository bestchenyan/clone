import { getCompiler, banner as _banner } from './rollup';

export const input = 'src/index.js';
export const plugins = [getCompiler()];
export const output = [
  {
    file: 'dist/index.esm.js',
    format: 'es',
    banner: _banner,
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
];
