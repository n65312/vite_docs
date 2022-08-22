---
title: '获取 DOM 节点'
date: 2017-06-21
tags:
 - JS
---

# 获取 DOM 节点

获取 DOM 对象

## 旧的获取元素节点的方式

**DOM0**

- document.body：

  获取 body 元素节点

- document.head：

  获取 head 元素节点

- document.links：

  获取页面上所有的超链接(`<a></a>`)元素节点，类数组

- document.anchors：

  获取页面上所有的锚链接(具有 name 属性)元素节点

- document.forms：

  获取页面上所有 form 元素节点

## 新的获取元素节点的方式

### 1.通过方法获取

- `document.getElementById('id 名')`

  通过 id 获取对应的元素

- `document.getElementsByTagName('元素(标签)名')`

  通过元素名获取元素，得到类数组

- `document.getElementsByClassName('类名')`

  通过元素的类名获取元素，得到类数组，IE9 以下无效

- `document.getElementsByName('name 属性值')`

  通过元素的 name 属性值获取元素，得到类数组

- `document.querySelector('css 选择器')`

  通过 css 选择器获取元素，得到匹配的第一个，IE8 以下无效

- `document.querySelectorAll('css 选择器')`

  通过 css 选择器获取元素，得到所有匹配的结果，类数组，IE8 以下无效

- `document.documentElement`

  获取根元素(html 元素)

细节：

1. 在所有得到类数组的方法中，除了 `querySelectorAll`，其他的方法都是实时更新的。
2. `getElementById` 得到元素执行效率最高。
3. 书写了 id 的元素，会自动成为 window 对象的属性。它是一个实时的单对象。事实上的标准。不推荐使用。
4. `getElementsByTagName`、`getElementsByClassName`、`querySelector`、`querySelectorAll`，可以作为其他元素节点对象的方法使用。

### 2.根据节点关系获取节点

- parentNode：

  获取父节点（元素、文档）

- previousSibling：

  获取上一个兄弟节点

- nextSibling：

  获取下一个兄弟节点

- childNodes：

  获取所有的子节点

- firstChild：

  获取第一个子节点

- lastChild：

  获取最后一个子节点

- attributes：

  获取元素的属性节点

### 获取元素节点

- parentElement：

  获取父元素

- previousElementSibling：

  获取上一个兄弟元素

- nextElementSibling：

  获取下一个兄弟元素

- children：

  获取子元素

- firstElementChild：

  获取第一个子元素

- lastElementChild：

  获取最后一个子元素

## 获取节点信息

- nodeName：

  获取节点名称

- nodeValue：

  获取节点的值

- nodeType：

  节点类型，是一个数字。
