import typescript from '@rollup/plugin-typescript';


export default {
    // !!! configPlugin: 'typescript',
    input: './src/main.ts',
    output: {
      file: './dist/bundle.js',
      format: 'cjs'
    },
    plugins: [typescript({lib: ["esnext", "dom"], target: "es5"})]
  };