# 油猴脚本vue3+rollup项目演示

## 项目介绍

这是一个油猴脚本项目，使用vue3 + rollup打包

local_build.js为默认配置打包名，可自定义，项目结构如下：
```
├── dist
│   ├── local_build.js
├── src
│   ├── main.js
│   ├── App.vue
├── rollup.config.js
├── package.json

```

## 项目运行

```bash
# 安装依赖
npm install

# 或者使用yarn安装依赖
yarn
# 开发模式
npm run dev

# 生产模式
npm run build
```

## 项目打包

```bash
# 打包
npm run build
```

## 本地项目部署
- 假设已经按照了油猴插件
- 在插件拓展设置中勾选上`允许访问文件 URL`
- 插件中新建一个脚本，填写如下内容
```javascript
// ==UserScript==
// @name        油猴脚本vue3+rollup项目演示
// @namespace   http://tampermonkey.net/
// @license     Apache-2.0
// @version     0.1
// @author      byhgz
// @description 这是一个油猴脚本项目，使用vue3 + rollup打包,油猴脚本vue3+rollup项目演示
// @icon        https://static.hdslb.com/images/favicon.ico
// @noframes
// @match        https://*/*
// @match        http://*/*
// @match       *://localhost:3000/*
// @require     https://unpkg.com/vue@3/dist/vue.global.js
// @require     file://E:\js\dist\local_build.js
// ==/UserScript==

/**
 * 上面中的引用地址，根据项目本地实际路径进行修改，这里仅供参考
 * file://E:\js\dist\local_build.js
 * 
 */
```
- 如需本地测试，将[rollup.config.js](rollup.config.js)配置中serve函数取消注释掉，并运行`npm run dev`
