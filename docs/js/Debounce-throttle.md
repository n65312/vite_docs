---
title: '函数防抖和函数节流'
date: 2017-06-29
tags:
 - JS进阶
---

# 函数防抖和函数节流

高阶函数：在函数内部返回一个新的函数。

## 函数防抖

函数防抖(debounce)：在同个条件下，只执行一次。

```js
// 函数防抖
function debounce(callback, time) {
  var timer
  return function() {
    clearTimeout(timer) // 清除之前的计时
    var args = arguments // 利用闭包保存参数数组
    timer = setTimeout(function() {
      callback.apply(null, args)
    }, time)
  }
}

// 演示1
var handle = debounce(function(width) {
  console.log(width)
}, 1000)

window.onresize = function() {
  handle(document.documentElement.clientWidth)
}

// 演示2
var inp = document.querySelector('input')
var handle = debounce(function(val) {
  console.log('搜索' + val)
}, 1000)

inp.oninput = function() {
  handle(this.value)
}
```

## 函数节流

函数节流：保证一个时间段内执行一次。

```js
/**
 * 函数节流
 * @param {function} callback 回调函数
 * @param {number} time 延时时间
 * @param {boolean} immediately 是否立即执行
 */
function throttle(callback, time, immediately) {
  if (immediately === undefined) {
    immediately = true
  }
  if (immediately) {
    var t
    return function() {
      if (immediately) {
        if (!t || Date.now() - t >= time) {
          // 之前没有计时 或 距离上次执行的时间已超过规定的值
          callback.apply(null, arguments)
          t = Date.now() // 得到当前的时间戳
        }
      }
    }
  } else {
    var timer
    return function() {
      if (timer) {
        return
      }
      var args = arguments // 利用闭包保存参数数组
      timer = setTimeout(function() {
        callback.apply(null, args)
        timer = null
      }, time)
    }
  }
}

// 演示
window.onresize = function() {
  handle()
}
function test() {
  console.log('a')
}

var handle = throttle(test, 1000, false)
handle()
handle()
handle()
handle()
handle()
handle()
```
