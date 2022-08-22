---
title: 'Date 构造器'
date: 2017-06-19
tags:
 - JS
---

# Date 构造器 

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date)

## 术语

1. 时间单位

年（year）
月（month）
日（date）
时（hour）
分（minute）
秒（second）= 1000ms
毫秒（millisecond，ms）= 1000 μs
微秒（microsecond，μs）= 1000 ns
纳秒（nanosecond，ns）

2. UTC 和 GMT

UTC：Coordinated Universal Time 协调世界时。以原子时秒长为基础，精确到纳秒。
GMT：Greenwich Mean Time 格林威治时间。太阳时，精确到毫秒。

UTC 和 GMT 误差不超过 0.9 秒

GMT +0800 表示东 8 区

3. 时间戳

数字

1970-1-1 凌晨 到某个时间 所经过的毫秒数

## 创建时间对象

- 直接调用函数 `Date()`（不使用 new），忽略所有参数，直接返回当前时间的字符串。
- `new Date()` 创建日期对象

  1. 无参，当前时间
  2. 1 个参数，参数为数字，表示传入的是时间戳（单位毫秒），正数表示1970-1-1 以后，负数表示以前。
  3. 2 个参数以上，分别表示：年、月、日、时、分、秒、毫秒

  > 注意：月份从 0 开始计算
  > 如果缺失参数，日期部分默认为 1，时分秒默认为 0。
  >
  > 月、日、时、分、秒、毫秒，均可传递负数，如果传递负数，会根据指定日期进行计算。

## 实例成员

- `getDate()` 
返回指定日期对象的月份中的第几天（1-31）。

- `getDay()` 
返回指定日期对象的星期中的第几天（0-6）。0 表示星期天

- `getFullYear()` 
返回指定日期对象的年份（四位数年份时返回四位数字）。

- `getMonth()`
返回指定日期的月份（0-11）

- `getHours()` 
返回指定日期对象的小时（0-23）。

- `getMinutes()` 
返回指定对象的分钟（0-59）。

- `getSeconds()`
返回指定日期对象的秒数（0-59）。

- `getMilliseconds()`
返回指定日期对象的毫秒（0-999）。

- `getTime()`
返回时间戳，即从1970-1-1 00:00:00 UTC（协调世界时）到该日期经过的毫秒数，对于1970-1-1 00:00:00 UTC之前的时间返回负值。


- `setDate()`
设置日期，为指定的日期对象设置月份中的第几天。

- `setFullYear()`
设置年份

- `setMonth()`
设置月份，从0开始计算。

- `setHours()`
设置小时

- `setMinutes()`
设置分钟

- `setSeconds()`
设置秒

- `setmillisecond()`
设置毫秒

- `setTime()`
设置时间戳，通过指定从 1970-1-1 00:00:00 UTC 开始经过的毫秒数来设置日期对象的时间，对于早于 1970-1-1 00:00:00 UTC的时间可使用负值。

- `toDateString()`
将指定日期对象的日期部分转换为可读字符串。

- `toISOString()`
把一个日期转换为符合 ISO 8601 扩展格式的字符串。

- `toLocaleDateString()`
根据当前系统的地区设置，将日期部分转换为可读字符串。

- `toLocaleString()`
根据当前系统的地区设置，将整个日期对象转为可读字符串。

- `toLocaleTimeString()`
根据当前系统的地区设置，将时间部分转为可读字符串。

- `valueOf()`
返回时间戳。得到日期对象的原始值，即从1970年1月1日0时0分0秒（UTC，即协调世界时）到该日期的毫秒数。

## 日期的运算

日期对象重写了**Object**中的`valueOf`方法，返回的是一个数字，表示时间戳
