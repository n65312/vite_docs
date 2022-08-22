---
title: '标准库'
date: 2017-06-16
tags:
 - JS
---

# 标准库（标准 API）

- 库：library
- API：应用程序编程接口，Application Programing Interface
- 标准：ECMAScript 标准

## Object 

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)

### 静态成员

- `Object.keys(obj)`，返回一个表示给定对象的所有可枚举属性的字符串数组。

- `Object.values(obj)`，返回一个包含对象自身的所有可枚举属性值的数组。

- `Object.entries(obj)`，返回给定对象自身可枚举属性的键值对数组。

### 实例成员

> 实例成员可以被重写

**所有对象，都拥有 Object 的所有实例成员。**

- `toString()`：

  返回一个表示该对象的字符串。默认情况下，该方法返回`[object Object]`。

- `valueOf()`：

  返回值为该对象的原始值。默认情况下，`valueOf` 将返回对象本身。

> 在 JS 中，当自动的进行类型转换时，如果要对一个对象进行转换，实际上是先调用对象的`valueOf()`方法，然后调用`toString()`方法，将得到的结果进行进一步的转换。

> 如果调用`valueOf()`方法已经得到了原始类型，则不再调用`toString()`方法

## Function 

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)

**所有函数，都具有 Function 中的实例成员。**

**语法：arguments 在函数中使用，以数组形式获取传入函数的所有参数。**

**注意：arguments 是一个类数组（也称为伪数组：没有通过 Array 构造函数创建的类似于数组结构的对象），伪数组会缺少大量的数组实例方法。**

**arguments 数组中的值，会与对应的形参映射。**

### 实例成员

- `length` 属性：

  获取函数的接收参数个数（形参个数）。

- `apply()` 方法：

  调用函数，同时指定函数中的 this 指向，参数以数组传递

- `call()` 方法：

  调用函数，同时指定函数中的 this 指向，参数以列表传递

- `bind()` 方法：

  创建一个新的函数，在 `bind()` 被调用时，这个新函数的 `this` 被指定为 `bind()` 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

通常，可以利用 **apply**、**call** 方法，将伪数组转换为真数组。

```js
function test() {
  console.log(arguments)
  // 将 arguments 转换为真数组
  // 使用数组的 slice 方法 通过 call 改变 this指向
  var newArr = [].slice.call(arguments)
  console.log(newArr)
}

test(123, 32, 423, 4, 34, 24, 4, 2)
```
