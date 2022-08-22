---
title: '事件对象'
date: 2017-06-22
tags:
 - JS
---

# 事件对象

事件对象封装了事件的相关信息

## 获取事件对象

- 通过事件处理函数的参数获取
- 旧版本的 IE 浏览器，通过 window.event 获取

## 事件对象的通用成员

- target & srcElement

  事件目标（事件源）

  事件委托：通过给祖先元素注册事件，在事件处理程序中，判断事件源进行不同的处理。

  通常，事件委托用于动态生成元素的区域。

- currentTarget

  当前目标：获取绑定事件的元素，等效于 this

- type

  字符串，得到事件的类型。

- preventDefault & returnValue

  `preventDefault()` 方法

  阻止浏览器默认行为。

  DOM0 的方式：在事件处理程序中返回 false。

  针对 a 元素，可以设置为功能性链接解决跳转问题

- `stopPropagation()` 方法

  阻止事件冒泡

- eventPhase

  得到事件所处的阶段

  1:事件捕获
  2:事件目标
  3:事件冒泡

补充：

> `tagName`：返回当前元素的标签名
> 语法
> `element.tagName`
