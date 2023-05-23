import { defineConfig } from "rollup";

export default defineConfig({
  input: "main.js",
  output: {
    file: "bundle.js",
    format: "cjs",
  },
});
