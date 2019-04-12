'use strict';

module.exports = {
    extends: ["eslint:recommended","./eslint-config-react/index.js"], //引入ESLint推荐规则和React规则
    rules: {
        'for-direction': 'warn', //强制 “for” 循环中更新子句的计数器朝着正确的方向移动
        'getter-return': 'error',//强制 getter 函数中出现 return 语句
        'no-await-in-loop': 'error',//禁止在循环中出现 await
        'array-callback-return': 'warn',//强制数组方法的回调函数中有 return 语句
        'block-scoped-var': 'warn',//强制把变量的使用限制在其定义的作用域范围内
        'complexity': ["error", 3],//指定程序中允许的最大环路复杂度 3
        'curly': 'error', //强制所有控制语句使用一致的括号风格
        'default-case': 'error', //要求 switch 语句中有 default 分支
        'eqeqeq': 'error', //要求使用 === 和 !==
        'no-alert': 'warn',//禁用 alert、confirm 和 prompt
        'no-div-regex': 'warn',//禁止除法操作符显式的出现在正则表达式开始的位置
        'no-else-return': 'warn',//禁止 if 语句中 return 语句之后有 else 块
        'no-empty-function': 'warn',//禁止出现空函数
        'no-eq-null': 'error',//禁止在没有类型检查操作符的情况下与 null 进行比较
        'no-extra-bind': 'warn',//禁止不必要的 .bind() 调用
        'no-loop-func': 'error',//禁止在循环中出现 function 声明和表达式
        'no-magic-numbers': ['warn', {
            'ignoreArrayIndexes': true,
            'ignore': [0, 1],
            'enforceConst': true
        }],//不推荐使用魔术数字
        'no-multi-spaces': 'warn',//禁止使用多个空格
        'no-multi-str': 'error',//禁止使用多行字符串
        'no-param-reassign': 'warn',//不推荐对 function 的参数进行重新赋值
        'no-self-compare': 'error',//禁止自身比较
        'no-useless-call': 'warn',//不推荐不必要的 .call() 和 .apply()
        'no-useless-concat': 'error',//禁止不必要的字符串字面量或模板字面量的连接
        'no-useless-return': 'error',//禁止多余的 return 语句
        'require-await': 'error',//禁止使用不带 await 表达式的 async 函数
        'wrap-iife': 'error',//要求 IIFE 使用括号括起来
        'no-console': 'error'//不推荐使用console
    }
};
