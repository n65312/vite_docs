---
title: '原型和原型链'
date: 2017-06-26
tags:
 - JS进阶
---

# 原型和原型链

- 所有对象都是通过`new`创建；函数也是通过`new`创建。

- 所有函数也是对象。

  - 函数中可以有属性，如果属性是一个函数，该属性也称为方法。

- 所有对象都是引用类型。


![Function](https://gitee.com/n65312/Typora-images/raw/master/uPic/Function-20200922dS5LS6.png)

## 原型 prototype

所有**函数**都有一个属性：`prototype`，称之为函数原型。

> 【注意】只有函数才有`prototype`属性。

默认情况下：

`prototype`是一个普通 **Object** 对象；

`prototype`中有一个属性，`constructor`，它也是一个对象，它指向构造函数本身。


![constructor](https://gitee.com/n65312/Typora-images/raw/master/uPic/constructor-20200922NNet02.png)

## 隐式原型 `__proto__`

所有的**对象**都有一个属性：`__proto__`，称之为隐式原型。

**默认情况下，隐式原型指向创建该对象的函数的原型。**


![proto](https://gitee.com/n65312/Typora-images/raw/master/uPic/proto-202009220zHZtx.png)

:::tip 上图信息，可知：
`函数add.prototype === 对象1.__proto__ === 对象2.__proto__`

**函数add的原型 与 对象1的隐式原型 与 对象2的隐式原型 共享一个内存空间，因此三者相同。**
:::

当访问一个对象的成员时：

1. 看该对象自身是否拥有该成员，如果有直接使用；
2. 在原型链中依次查找是否拥有该成员，如果有直接使用。

猴子补丁：在函数原型中加入成员，以增强对象的功能，猴子补丁会导致原型污染，谨慎使用！

## 原型链


![Prototype chain](https://gitee.com/n65312/Typora-images/raw/master/uPic/Prototype%20chain-20200922Rodayf.png)

:::tip 特殊点：
1. **Function** 的隐式原型(`__proto__`)指向自身的原型 (`prototype`)。

2. **Object** 的原型 (`prototype`) 的隐式原型(`__proto__`)指向 `null`。
:::
