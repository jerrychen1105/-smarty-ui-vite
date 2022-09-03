import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'
import { presetUno, presetAttributify, presetIcons } from "unocss";
// import Unocss from "unocss/vite";
import Unocss from "./config/unocss";
// https://vitejs.dev/config/
const rollupOptions = {

  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};
export default defineConfig({
  plugins: [
    vue(),
  // 添加JSX插件
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    // Unocss({
    //   presets: [presetUno(), presetAttributify(), presetIcons()],
    // })
    Unocss(),
  ],
  // 添加库模式配置

  build: {
    rollupOptions,
    minify:false,
    //ssCodeSplit 这个选项是为了决定在编译的时候是否要独立输出 css。显然这里面应该选择为 true
    cssCodeSplit: true,   // 追加编译选项，解决unocss build报错
    lib: {
      entry: "./src/entry.ts",
      name: "SmartyUIVite",
      fileName: "smarty-admin-ui-vite",
      // 导出模块格式
      formats: ["esm", "umd","iife"],
    },
  },

});