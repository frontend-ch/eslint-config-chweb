eslint-config-chweb
===========================

长虹前端团队ESLint共享配置规则

## 安装

```
$ npm install --save-dev eslint eslint-plugin-react eslint-config-chweb
```

## 使用
一旦`ESLint-config-chweb`安装成功，你可以通过[ESLint配置文件]((http://eslint.org/docs/user-guide/configuring)) 中的字段extends中使用它

```js
{
  "extends": "chweb",
  "rules": {
    // Additional, per-project rules...
  }
}
```

