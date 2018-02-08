// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },// required to lint *.vue files
  plugins: [
    'html',
    'promise'
  ],
  // add your custom rules here
  'rules': {
    "vars-on-top": 2,   // var必须放在作用域顶部
    "newline-after-var": 2,   // 变量声明后是否需要空一行
    "one-var": 0,   // 连续声明
    "no-redeclare": 2,    // 禁止重复声明变量
    "no-undef": 1,    // 不能有未定义的变量
    "no-use-before-define": 2,    // 未定义前不能使用
    "camelcase": 2,   // 强制驼峰法命名
    "indent": [0, 4],   // 缩进风格
    "curly": [2, "all"],    // 必须使用 if(){} 中的{}
    "new-cap": 0,   // 函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
    "radix": 2,   // parseInt必须指定第二个参数
    'arrow-parens': 0,    // allow paren-less arrow functions
    "semi": [2, "always"],    // 语句结尾要是用分号
    'generator-star-spacing': 0,    // allow async-await
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0    // allow debugger during development
  }
};
