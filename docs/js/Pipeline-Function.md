---
title: '函数管道'
date: 2017-06-30
tags:
 - JS进阶
---

# 函数管道

## 定义

函数管道：将多个单参函数组合起来，形成一个新的函数，这些函数中，前一个函数的输出，是后一个函数的输入。

## 使用

定义多个函数，利于模块化。

```js
// 将字符串中，每个单词的首字母大写
function everyFirstLetterUp(str) {
  return str.replace(/\b(\w)(\w*)\b/g, function($, $1, $2) {
    // console.log($,$1,$2);
    return $1.toUpperCase() + $2
  })
}

// 将字符串中，除首字母外的其他字母小写
function otherLetterLower(str) {
  return str.replace(/\b(\w)(\w*)\b/g, function($, $1, $2) {
    return $1 + $2.toLowerCase()
  })
}

// 将字符串中，所有的空白字符去掉
function removeEmpty(str) {
  return str.replace(/\s+/g, '')
}

// 将字符串中，每个单词的首字母小写
function firstLetterLower(str) {
  return str.replace(/\w/, function($) {
    return $.toLowerCase()
  })
}

// 截取字符串
function curString(number, str) {
  return str.substr(0, number)
}

// 使用上面的函数将字符串，变为小驼峰命名

var str = '   MY    fIrST   naME IS  TOM   '

str = everyFirstLetterUp(str)
str = firstLetterLower(str)
str = otherLetterLower(str)
str = removeEmpty(str)

console.log(str) // myFirstNameIsTom
```
函数管道

```js
/**
 * 函数管道
 * @return {string} 字符串
 */
function pipe() {
  var args = Array.from(arguments)
  return function(val) {
    // 使用 数组的 reduce 方法
    return args.reduce(function(result, func) {
      return func(result)
    }, val)

    // 使用 for循环 的写法
    // for (var i = 0; i < args.length; i++) {
    //   var func = args[i];
    //   val = func(val);
    // }
    // return val;
  }
}

// 需要用到上面的函数，以及科里化函数
var smallCamel = pipe(
  everyFirstLetterUp,
  firstLetterLower,
  otherLetterLower,
  removeEmpty,
  curry(curString, 10) // 利用科里化函数，固定一个参数，因为函数管道只能是单参函数组合。
)

console.log(smallCamel('   MY    fIrST   naME   ')) // myFirstNam
console.log(smallCamel('you  Are  bEAUTIFUL')) // youAreBeau
```
