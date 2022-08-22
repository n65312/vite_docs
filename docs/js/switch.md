---
title: 'switch'
date: 2017-06-14
tags:
 - JS
---

# switch

switch始终可以使用if 结构代替

```js
switch(表达式){
  case 数据1:
  代码块
  case 数据2:
  代码块
  // ...
  default:
  代码块
}
```

1. 计算表达式的返回值，依次和case后面的数据进行严格相等比较，如果某个case相等，停止比较，然后运行其内部的代码块，再然后，依次运行之后的所有代码块。
2. 在case分支内部，使用break语句，可以立即停止switch结构。
3. default表示前面的所有case都不匹配时运行，可以省略。