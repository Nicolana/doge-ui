import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    'packages/index.ts'
    // 'packages/**/*.tsx',
    // 'packages/**/!(*.stories).ts'
  ],
  // ignoreWatch: ['node_modules', 'dist', 'build'], // 不监听指定文件夹的更改
  external: [
    "react",
    "react-dom"
  ],
  splitting: true,
  treeshake: true,
  sourcemap: true,
  clean: true,
  minify: false,
  dts: true,
  // bundle: false,
  outDir: "dist",
  format: [
    "cjs",
    "esm"
  ],
});
