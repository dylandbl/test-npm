import resolve from "@rollup/plugin-node-resolve"; // Use node resolution algorithm for modules.
import commonjs from "@rollup/plugin-commonjs"; // Convert commonjs modules to ES6.
import typescript from "@rollup/plugin-typescript"; // For processing TS files.
import dts from "rollup-plugin-dts"; // rollup .d.ts files.

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [resolve(), commonjs(), typescript({ tsconfig: "./tsconfig.json" })],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
