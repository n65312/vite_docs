---
title: '表格元素'
date: 2017-06-08
tags:
 - HTML
---

# 表格元素

在 css 技术出现之前，网页通常使用表格布局。

后台管理系统中可能会使用表格。

前台：面向用户

后台：面向管理员。对界面要求不高，对功能性要求高。

表格不再适用于网页布局？表格的渲染速度过慢。

## 认识表格

表格包括：

![table1](https://gitee.com/n65312/Typora-images/raw/master/uPic/table1-20200922ZGQa7l.png)



### 行：

![table2](https://gitee.com/n65312/Typora-images/raw/master/uPic/table2-20200922Rvsr7E.png)

### 单元格：

![table3](https://gitee.com/n65312/Typora-images/raw/master/uPic/table3-20200922Ve4J9Y.png)

示例：

```css
table {
  /* border-collapse设置表格的边框样式：
					collapse 边框合并
					separate 边框分开
		*/
  border-collapse: collapse;
  width: 100%;
}

table caption {
  font-size: 2em;
  font-weight: bold;
  margin: 1em 0;
}

th,
td {
  /* 给表格添加边框 */
  border: 1px solid #999;
  text-align: center;
  padding: 20px 0;
}

thead tr {
  background-color: #008c8c;
  color: #fff;
}
/* nth-child(odd)：匹配下标是奇数的子元素 */
/* nth-child(even)：匹配下标是偶数的子元素 */
tbody tr:nth-child(odd) {
  background-color: #eee;
}
```

```html
<table>
  <caption>
    这是表格的标题
  </caption>
  <!-- 表头 -->
  <!-- thead 中的文字默认居中 -->
  <thead>
    <!-- table row -->
    <tr>
      <th>列1</th>
      <th>列2</th>
      <th>列3</th>
    </tr>
  </thead>
  <!-- 表体 -->
  <tbody>
    <tr>
      <!-- rowspan：规定单元格横跨的行数 -->
      <td>数据1</td>
      <td>数据2</td>
      <td>数据3</td>
    </tr>
    <tr>
      <td>数据1</td>
      <td>数据2</td>
      <td>数据3</td>
    </tr>
    <tr>
      <td>数据1</td>
      <td>数据2</td>
      <td>数据3</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <!-- colspan：规定单元格横跨的列数 -->
      <td colspan="3">合计：XXX</td>
    </tr>
  </tfoot>
</table>
```
网页效果：

![table-example](https://gitee.com/n65312/Typora-images/raw/master/uPic/table-example-202009226wBJRO.png)

