---
title: '属性描述符'
date: 2017-06-27
tags:
 - JS进阶
---


# 属性描述符

[属性描述符配置参考 MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

## Object.defineProperty()

> 语法：**Object.defineProperty(obj, prop, descriptor)**

参数：

- obj

  要定义属性的对象。

- prop

  要定义或修改的属性的名称

- descriptor

  要定义或修改的属性描述符。

> 属性描述符：它表达了一个属性的相关信息（元数据），它本质上是一个对象。

1. 数据属性

2. 存取器属性：

   - 当给它赋值时，会自动运行一个函数。

   - 当获取它的值时，会自动运行一个函数。

```js
var obj = {}

Object.defineProperty(obj, 'x', {
  // 属性描述符
  get: function () {
    // 当读取属性时，运行的函数
    console.log('读取属性x')
    // 该函数的返回值，将作为属性值
    return 2
  },
  set: function (val) {
    // 当给属性赋值时，运行的函数
    // val：表示要赋的值
    console.log('给属性赋值为' + val)
  },
})

obj.x = 3 // 相当于运行了 set(3)
```

例子：

```js
function User(name, age) {
  this.name = name
  // 年龄的范围取值：0～100
  // 如果年龄的取值小于了0，则赋值为0；如果年龄的值大于了100，则赋值为100。
  var _age
  Object.defineProperty(this, 'age', {
    get: function () {
      console.log('运行了age的get')
      return _age
    },
    set: function (val) {
      console.log('运行了age的set：' + val)
      if (val < 0) {
        val = 0
      } else if (val > 100) {
        val = 100
      }
      _age = val
    },
  })
  this.age = age
}

var u = new User('abc', -1)
u.age = user.age + 10000
console.log(u.age)

// 上面代码执行结果：

// 运行了age的set：-1
// 运行了age的get
// 运行了age的set：10000
// 运行了age的get
// 100
```

## Object.getOwnPropertyDescriptor()

[参考 MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)

返回指定对象上一个自有属性对应的属性描述符。

> 语法：Object.getOwnPropertyDescriptor(obj, prop)

参数：

- obj 

  需要查找的目标对象

- prop

  目标对象内属性名称
