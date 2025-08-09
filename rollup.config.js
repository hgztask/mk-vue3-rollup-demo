import vue from 'rollup-plugin-vue';
import serve from 'rollup-plugin-serve';

export default {
    input: 'src/main.js', // 入口文件
    output: {
        file: 'dist/local_build.js', // 输出文件
        format: 'iife', // 立即执行函数（适合浏览器直接使用）
        globals: {
            vue: "Vue", // 这里指定 'vue' 模块对应的全局变量名为 'Vue'
        }
    },
    plugins: [
        vue({
            // 启用 Vue 插件
            css: true, // 自动将组件内的 <style> 提取为 CSS
            compileTemplate: true // 自动编译模板
        }),
/*        serve({
            open: false,
            port: 3000,
            contentBase: 'dist',
        }),*/
    ],
    external: ['vue'], // 将 Vue 作为外部依赖（通过 CDN 引入）
};
