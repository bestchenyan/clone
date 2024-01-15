import nodeResolve from 'rollup-plugin-node-resolve';

export const input = 'src/index.js';
export const output = {
  file: 'dist/index.aio.js',
  format: 'umd',
  name: 'cloneDeep',
};
export const plugins = [
  nodeResolve({
    main: true,
    extensions: ['js'],
  }),
];
