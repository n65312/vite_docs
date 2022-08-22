---
title: '作用域链'
date: 2017-06-28
tags:
 - JS进阶
---

# 作用域链

1. VO 中包含一个额外的属性，该属性指向创建该 VO 的函数本身。

2. 每个函数在创建时，会有一个隐藏属性`[[scope]]`，它执向创建该函数时的 AO。

3. 当访问一个变量时，会先查找自身 VO 中是否存在，如果不存在，则依次查找`[[scope]]`属性。

```js
var g = 0

function A() {
  var a = 1

  function B() {
    var b = 2
    var C = function() {
      var c = 3
      console.log(c, b, a, g)
    }

    C()
  }

  B()
}

A() // 依次输出 3  2  1  0
```
图示：

![作用域链](https://gitee.com/n65312/Typora-images/raw/master/uPic/%E4%BD%9C%E7%94%A8%E5%9F%9F%E9%93%BE-20200922iTIs0W.png)
