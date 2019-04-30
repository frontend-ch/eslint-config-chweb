eslint-config-chweb
===========================
[![](https://img.shields.io/badge/license-MIT-red.svg)](https://github.com/frontend-ch/eslint-config-chweb/blob/master/LICENSE) [![](https://img.shields.io/badge/npm-v1.0.4-519dd9.svg)](https://www.npmjs.com/package/eslint-config-chweb)

Disciple团队ESLint共享配置规则

## 安装

```
$ npm install --save-dev eslint-plugin-react eslint-config-chweb
```

## 文档
* [规则解释](doc/rule.md)

## 使用
一旦`ESLint-config-chweb`安装成功，你可以通过[ESLint配置文件]((http://eslint.org/docs/user-guide/configuring)) 中的字段extends中使用它

## 项目接入使用

基本理念： 项目代码太多，不影响历史代码。只针对有改动的代码（.js和.jsx后缀）才进行校验。

第一步：添加或者修改.eslintrc.js 配置文件

``` javascript
module.exports = {
    "plugins": [
        "react"
    ],
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },
    "parserOptions": {
        "sourceType": "module"
    },
    "extends": ["eslint:recommended", "plugin:react/recommended", "chweb"],
    "globals": {
        "__inline": true,
        "IS_SERVER": true,
        "__uri": true
    }
};
```

有部分eslint:recommended提到的规则在chweb中没有提到，因此最好配合eslint:recommend一起使用。

只需要同时继承eslint:recommend 和 chweb 即可，确保 chweb 放置在最后。部分eslint:recommend定义的规则有点严格，chweb里面有做定制化的修改。

第二步：增加precommit的hook和eslint-config-chweb依赖

此处我们使用husky来管理所有的Hook，同之前的commit message校验。

```

{
  "name": "with-lint-staged",
  "version": "0.0.1",
  "scripts": {
    "precommit": "lint-staged"
  },
  "lint-staged": {
    "src/*.{js,jsx}": [
      "eslint --fix",
      "git add"
    ]
  },
  "devDependencies": {
    "eslint-plugin-react": "^7.4.0",
    "eslint-config-chweb": "1.0.0",
    "husky": "^0.14.3",
    "lint-staged": "^4.2.3"
  }
}
```
