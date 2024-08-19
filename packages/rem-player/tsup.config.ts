/*
 * @Author: kasuie
 * @Date: 2024-08-15 14:31:24
 * @LastEditors: kasuie
 * @LastEditTime: 2024-08-19 14:45:52
 * @Description:
 */
import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  target: "es2020",
  entry: ["index.ts"],
  dts: true,
  format: ["cjs", "esm", "iife"],
  esbuildOptions(options) {
    options.loader = {
      ".art": "text",
      ".svg": "text",
    };
  },
});
