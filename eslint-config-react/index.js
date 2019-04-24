'use strict';
module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "react" //eslint-plugin-react
  ],
  "rules": {
    "react/jsx-uses-react": 2, // 阻止react被错误的标记为未使用
    "react/no-did-update-set-state": 2, //禁止componentDidUpdate中使用setState方法
    "react/no-redundant-should-component-update": 2, //
    "react/no-will-update-set-state": 2, //扩展React.PureComponent时禁止使用shouldComponentUpdate生命周期方法
    "react/require-render-return": 2, //在 ES5 or ES6  类中强制要求render函数中有返回值
    "react/jsx-closing-tag-location": 2, //验证JSX中的结束标记位置
    "react/jsx-closing-bracket-location": [2, {selfClosing: 'tag-aligned'}], //验证JSX中的右括号位置
    "react/jsx-key": 2, //在数字或迭代器中验证Key prop
    "react/jsx-pascal-case": 2, //对用户定义的JSX组件强制使用帕斯卡命名法
    "react/jsx-uses-vars": 2, //禁止已使用的变量被错误的标记为未使用
  }
};
