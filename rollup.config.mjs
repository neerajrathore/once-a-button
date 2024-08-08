import { readFileSync } from 'fs';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
// import * as packageJson from './package.json' assert { type: "json" };

// const packageJson = require('./package.json');
const packageJson = JSON.parse(readFileSync('./package.json'));


export default [
  {
    // entry point for our library
    input: './src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: false
      },
      {
        file: packageJson.module,
        format: 'es',
        sourcemap: false
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ 
        tsconfig: './tsconfig.json'
      })
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()]
  },
];