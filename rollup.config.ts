import typescript from '@rollup/plugin-typescript';


export default {
    // !!! configPlugin: 'typescript',
    input: './src/spaceTrim.ts',
    output: {
      file: './dist/spaceTrim.js',
      //format: 'cjs'
      format: 'iife',
      sourcemap: true,
    },
    plugins: [typescript({lib: ["esnext", "dom"], target: "es5"})]
  };