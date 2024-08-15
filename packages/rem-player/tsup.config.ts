/*
 * @Author: kasuie
 * @Date: 2024-08-15 14:31:24
 * @LastEditors: kasuie
 * @LastEditTime: 2024-08-15 14:35:44
 * @Description:
 */
import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  target: "es2020",
  entry: ["index.ts"],
  dts: true,
  format: ["cjs", "esm", "iife"],
});
