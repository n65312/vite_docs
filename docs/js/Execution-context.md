---
title: '执行上下文'
date: 2017-06-27
tags:
 - JS进阶
---


# 执行上下文

函数执行上下文：

一个函数运行之前，创建一个内存空间，空间中包含有该函数执行所需要的数据，为该函数执行提供支持。

执行上下文栈：

call stack，所有执行上下文组成的内存空间。

栈：

一种数据解构，先进后出，后进先出。

全局执行上下文：

所有 JS 代码执行之前，都必须有该环境。

JS 引擎始终执行的是栈顶的上下文。

## 执行上下文中的内容

## 1. this 指向

（1）直接调用函数，`this`指向全局对象。

（2）在函数外，`this`指向全局对象。

（3）通过对象调用或 new 一个函数，`this`指向调用的对象或新对象。

## 2. VO 变量对象

- Variable Object：

  VO 中记录了该环境中所有声明的参数、变量和函数。

- Global Object：

  GO，全局执行上下文中的 VO

- Active Object：

  AO，当前正在执行的上下文中的 VO。

### 执行过程：

1. 确定所有行参值以及特殊变量 arguments。

2. 确定函数中通过 var 声明的变量，将它们的值设为 undefined；

   如果 VO 中已有该名称，则忽略。

3. 确定函数中通过字面量声明的函数，将它们的值设为指向函数对象；

   如果 VO 中已存在该名称，则覆盖。

> 当一个上下文中的代码执行的时候，如果上下文中不存在某个属性，则会从之前的上下文寻找。

示例：

```js
var foo = 1

function bar(a) {
  var a1 = a
  var a = foo
  function a() {
    console.log(a)
  }
  a1()
}

bar(3)

/*
创建 全局上下文
  GO：
    foo: undefined --> 1
    bar: fn

创建 
  VO：
    过程：
      a: 3  // 确定形参  -- > function a() {}
      a1: undefined // 确定变量 -- > function a() {}
      忽略 var a = foo，因为 VO 中已经有 a 这个名称
      字面量函数 a() 覆盖 a: 3
    结果：
      a: function a() {}
      a1: function a() {}
      a: 1
      执行a1，
创建
  AO：
    输出a // 它自己什么都没有，a需要从之前的上下文中寻找，在VO中有 a: 1

最终结果：1

然后依次销毁 AO VO GO
*/
```
