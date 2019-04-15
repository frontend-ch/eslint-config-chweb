## 规则列表

| 规则名称        | 错误级别           | 说明  |
| :------------- |:-------------| :-----|
| [for-direction](https://eslint.org/docs/rules/for-direction) | warn | for 循环的方向不正确时给出警告 |
| [getter-return](https://eslint.org/docs/rules/getter-return)      | error | getter必须有返回值，并且禁止返回值为undefined, 比如 return;  |
| [no-await-in-loop](https://eslint.org/docs/rules/no-await-in-loop)| error | 不允许在循环里面使用await |
| [array-callback-return](https://eslint.org/docs/rules/array-callback-return) | warn | 对于数据相关操作函数比如reduce, map, filter等，callback没有return时给出警告 |
| [block-scoped-var](https://eslint.org/docs/rules/block-scoped-var) | warn | 把var关键字看成块级作用域，防止变量提升导致的bug |
| [complexity](https://eslint.org/docs/rules/complexity) | error | 开启代码复杂度限制，深度最多为3 |
| [curly](https://eslint.bootcss.com/docs/rules/curly/)  | error | 强制所有控制语句使用一致的括号风格|
| [default-case](https://eslint.org/docs/rules/default-case) | error | switch case语句里面一定需要default分支 |
| [eqeqeq](https://eslint.bootcss.com/docs/rules/eqeqeq/)  |error  | 要求使用 === 和 !==
| [no-alert](https://eslint.org/docs/rules/no-alert) | warn | 代码中使用了alert给出警告 |
| [no-div-regex](https://eslint.bootcss.com/docs/rules/no-div-regex/) | warn | 禁止除法操作符显式的出现在正则表达式开始的位置
| [no-else-return](https://eslint.bootcss.com/docs/rules/no-else-return/) | warn |  if 语句中 return 语句之后有 else 块给予警告
| [no-empty-function](https://eslint.org/docs/rules/no-empty-function) | warn | 使用空函数给予警告
| [no-eq-null](https://eslint.org/docs/rules/no-eq-null)| error | 禁止在没有类型检查操作符的情况下与 null 进行比较|
| [no-extra-bind](https://eslint.org/docs/rules/no-extra-bind) | warn | 出现没必要的 bind给予警告 |
| [no-loop-func](https://eslint.bootcss.com/docs/rules/no-loop-func/) | error | 禁止在循环中出现 function 声明和表达式 |
| [no-magic-numbers](https://eslint.org/docs/rules/no-magic-numbers) | warn | 代码里面使用魔法数（多次使用，没有使用枚举的方式进行定义的数字,排除0，1和数组索引）给予警告 |
| [no-multi-spaces](https://eslint.org/docs/rules/no-multi-spaces) | warn | 出现连续的多个空格给予警告，除非是注释前，或对齐对象的属性、变量定义、import 等|
| [no-multi-str](https://eslint.org/docs/rules/no-multi-str) | error | 禁止使用/来进行字符串换行 |
| [no-param-reassign](https://eslint.org/docs/rules/no-param-reassign) | warn |对函数的参数重新赋值给予警告 |
| [no-self-compare](https://eslint.bootcss.com/docs/rules/no-self-compare/)| error | 禁止自身比较 |
| [no-useless-call](https://eslint.org/docs/rules/no-useless-call) | error | 出现没必要的 call 或 apply 给予警告|
| [no-useless-concat](https://eslint.org/docs/rules/no-useless-concat) | error | 禁止出现没必要的字符串拼接，比如 'hello' + 'world'，可以直接写成'hello world' |
| [no-useless-return](https://eslint.org/docs/rules/no-useless-return) | error | 禁止多余的return 语句 |
| [require-await](https://eslint.org/docs/rules/require-await) | error | async函数里面必须有await |
| [wrap-iife](https://eslint.bootcss.com/docs/rules/wrap-iife/)| error| 要求 IIFE 使用括号括起来|
| [no-console](https://eslint.org/docs/rules/no-console)| warn| 使用console给予警告 |
