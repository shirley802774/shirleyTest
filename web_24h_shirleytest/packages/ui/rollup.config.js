import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import image from '@rollup/plugin-image';
import styles from 'rollup-plugin-styles';

const packageJson = require('./package.json');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: 'src/index.jsx',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      assetFileNames: 'assets/[name][extname]',
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
      assetFileNames: 'assets/[name][extname]',
    },
    {
      file: 'dist/app.js',
      format: 'cjs',
    },
  ],
  plugins: [
    image(),
    peerDepsExternal(),
    resolve({
      extensions: ['.jsx', '.js'],
    }),
    babel({
      presets: ['@babel/preset-react'],
    }),
    commonjs(),
    copy({
      targets: [],
    }),
    styles({
      mode: ['extract', 'bundle.css'],
      sass: {
        data: `
            @use "src/assets/scss/utils/variables";
            @use "src/assets/scss/utils/mixin";
        `,
      },
    }),
  ],
};
