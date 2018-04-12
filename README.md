# vue-webpack-modular-template

> A full-featured Webpack setup with hot-reload, lint-on-save, unit testing & css extraction.

> This template is Vue 2.0 compatible. 

## Documentation

- [For this template](http://vuejs-templates.github.io/webpack): common questions specific to this template are answered and each part is described in greater detail
- [For Vue 2.0](http://vuejs.org/guide/): general information about how to work with Vue, not specific to this template

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**

``` bash
$ npm install -g vue-cli
$ vue init http://192.168.0.176/eway-fd/vue-template.git my-project
$ cd my-project
$ npm install
$ npm run dev
```

## What's Included

- `npm run dev`: first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS v3](https://github.com/mishoo/UglifyJS2/tree/harmony).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - Static assets compiled with version hashes for efficient long-term caching, and an auto-generated production `index.html` with proper URLs to these generated assets.
  - Use `npm run build --report`to build with bundle size analytics.

- `npm run unit`: Unit tests run in [JSDOM](https://github.com/tmpvar/jsdom) with [Jest](https://facebook.github.io/jest/), or in PhantomJS with Karma + Mocha + karma-webpack.
  - Supports ES2015+ in test files.
  - Easy mocking.

- `npm run e2e`: End-to-end tests with [Nightwatch](http://nightwatchjs.org/).
  - Run tests in multiple browsers in parallel.
  - Works with one command out of the box:
    - Selenium and chromedriver dependencies automatically handled.
    - Automatically spawns the Selenium server.

## What's Added
- 多类型项目可选生成
    - pc 网站应用
    - m站应用
    - webApp 应用
- 多环境配置动态注入
    > 开发、生产环境动态注入作用于环境
- 文件夹模块管理
    > 用文件夹管理功能模块，统一入口格式。再由 `switch/index.js` 引用全部模块，在 `config/index.js` 中配置modules选择不同环境下可用模块。
- 公用布局组件
    > `components/layout.vue` 定义了移动端项目和pc管理平台的常用布局。
- 常用布局主题内置
    > pc主题是左菜单宽度固定右内容宽度自适应布局；
    > 移动端主题是公用顶部、底部、中间内容；
- 工具方法
    - webapp 自动添加返回上级逻辑处理；
    - 移动端项目自动添加rem样式以及高清适配处理脚本；
    - 添加订阅发布者模式，可以用vue msgBus代替；
    - debounce 控线控制方法；
    - throttle 频率控制方法；
- 通用问题填坑
    - webpack打包静态图片引用错误；
    - 页面引入
    - 页面访问权限控制逻辑；
    - axious ajax请求header参数确实会和后台联调参数获取问题；【todo】
- 端口动态配置
    > 创建项目时可以手动填入port端口号，省去运行报错端口占用再去修改配置文件的操作；
- 常用组件内置
    - 移动端header组件，通过store改变现实文本和按钮操作；
    - 移动端footer组件；
    - 全局Loading组件，通过网络接口统一出入口控制状态；
    - toast 消息提示；
    - layout 布局组件；
 
- 统一网络请求优化
    - 统一处理网络出口；
    - 在网络出口控制loading状态；
    - 公用参数如token等参数的添加实例；
    - 处理防止重复表单提交判断；【todo】
    