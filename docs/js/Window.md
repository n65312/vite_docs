---
title: 'window对象'
date: 2017-06-23
tags:
 - JS
---

# window对象

## 自身方法

- open

  打开一个新窗口

  `open('页面路径','打开目标','配置')`

- alert

- confirm

- prompt

## 对象属性、方法

- location

  **Location 对象属性**

  | 属性                                                         | 描述                          |
  | :----------------------------------------------------------- | :---------------------------- |
  | [hash](https://www.runoob.com/jsref/prop-loc-hash.html)      | 返回一个URL的锚部分           |
  | [host](https://www.runoob.com/jsref/prop-loc-host.html)      | 返回一个URL的主机名和端口     |
  | [hostname](https://www.runoob.com/jsref/prop-loc-hostname.html) | 返回URL的主机名               |
  | [href](https://www.runoob.com/jsref/prop-loc-href.html)      | 返回完整的URL                 |
  | [pathname](https://www.runoob.com/jsref/prop-loc-pathname.html) | 返回的URL路径名。             |
  | [port](https://www.runoob.com/jsref/prop-loc-port.html)      | 返回一个URL服务器使用的端口号 |
  | [protocol](https://www.runoob.com/jsref/prop-loc-protocol.html) | 返回一个URL协议               |
  | [search](https://www.runoob.com/jsref/prop-loc-search.html)  | 返回一个URL的查询部分         |

  **Location 对象方法**

  | 方法                                                         | 说明                   |
  | :----------------------------------------------------------- | :--------------------- |
  | [assign()](https://www.runoob.com/jsref/met-loc-assign.html) | 载入一个新的文档       |
  | [reload()](https://www.runoob.com/jsref/met-loc-reload.html) | 重新载入当前文档       |
  | [replace()](https://www.runoob.com/jsref/met-loc-replace.html) | 用新的文档替换当前文档 |

- navigator

  **Navigator 对象属性**

  | 属性                                                         | 描述                                           |
  | :----------------------------------------------------------- | :--------------------------------------------- |
  | [appCodeName](https://www.w3school.com.cn/jsref/prop_nav_appcodename.asp) | 返回浏览器的代码名。                           |
  | [appMinorVersion](https://www.w3school.com.cn/jsref/prop_nav_appminorversion.asp) | 返回浏览器的次级版本。                         |
  | [appName](https://www.w3school.com.cn/jsref/prop_nav_appname.asp) | 返回浏览器的名称。                             |
  | [appVersion](https://www.w3school.com.cn/jsref/prop_nav_appversion.asp) | 返回浏览器的平台和版本信息。                   |
  | [browserLanguage](https://www.w3school.com.cn/jsref/prop_nav_browserlanguage.asp) | 返回当前浏览器的语言。                         |
  | [cookieEnabled](https://www.w3school.com.cn/jsref/prop_nav_cookieenabled.asp) | 返回指明浏览器中是否启用 cookie 的布尔值。     |
  | [cpuClass](https://www.w3school.com.cn/jsref/prop_nav_cpuclass.asp) | 返回浏览器系统的 CPU 等级。                    |
  | [onLine](https://www.w3school.com.cn/jsref/prop_nav_online.asp) | 返回指明系统是否处于脱机模式的布尔值。         |
  | [platform](https://www.w3school.com.cn/jsref/prop_nav_platform.asp) | 返回运行浏览器的操作系统平台。                 |
  | [systemLanguage](https://www.w3school.com.cn/jsref/prop_nav_systemlanguage.asp) | 返回 OS 使用的默认语言。                       |
  | [userAgent](https://www.w3school.com.cn/jsref/prop_nav_useragent.asp) | 返回由客户机发送服务器的 user-agent 头部的值。 |
  | [userLanguage](https://www.w3school.com.cn/jsref/prop_nav_userlanguage.asp) | 返回 OS 的自然语言设置。                       |

- history

   **History 对象方法**

  | 方法                                                         | 描述                                |
  | :----------------------------------------------------------- | :---------------------------------- |
  | [back()](https://www.w3school.com.cn/jsref/met_his_back.asp) | 加载 history 列表中的前一个 URL。   |
  | [forward()](https://www.w3school.com.cn/jsref/met_his_forward.asp) | 加载 history 列表中的下一个 URL。   |
  | [go()](https://www.w3school.com.cn/jsref/met_his_go.asp)     | 加载 history 列表中的某个具体页面。 |

- console

  **console对象方法**

  | 方法                        | 描述                        |
  | :-------------------------- | :-------------------------- |
  | `log()`                     | 打印对象的valueOf的返回值。 |
  | `dir()`                     | 打印对象结构。              |
  | `time()`、<br />`timeEnd()` | 用于计时                    |

- document

  **Document 对象方法**

  | 方法               | 描述                                                         |
  | :----------------- | :----------------------------------------------------------- |
  | `document.write()` | 在当前文档流中写入内容，如果当前文档流不存在，则新开一个文档流。 |

  ​	

  ​	

