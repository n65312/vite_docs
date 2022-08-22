---
title: 'DOM 元素样式'
date: 2017-06-22
tags:
 - JS
---

# DOM 元素样式

## 控制DOM元素的类样式

- `className`：获取或设置元素的类名
- `classList`：DOM4的新属性，是一个用于控制元素类名的对象
  - add：用于添加一个类名
  - remove：用于移除一个类名
  - contains：用于判断一个类名是否存在
  - toggle：用于添加/移除一个类名

## 获取样式

**CSS的短横线命名，需要转为小驼峰命名**

- `DOM.style`：得到**行内样式**对象
- `window.getComputedStyle(DOM元素)`：得到某个元素最终计算的样式
  - 可以有第二个参数，用于得到某个元素的某个伪元素样式

## 设置样式

- `DOM.style.样式名 = 值`

  设置的是行内样式。
