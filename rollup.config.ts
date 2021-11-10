import typescript from '@rollup/plugin-typescript';


export default {
    input: './src/spaceTrim.ts',
    output: {
      file: './dist/spaceTrim.js',
      format: 'iife',
      sourcemap: true,
    },
    plugins: [typescript({lib: ["esnext", "dom"], target: "es5"})]
  };