import{_ as s,c as a,o as n,a as l}from"./app.1995e8ba.js";const A=JSON.parse('{"title":"\u6D41\u7A0B\u56FE","description":"","frontmatter":{"title":"\u6D41\u7A0B\u56FE","date":"2017-06-14T00:00:00.000Z","tags":["JS"]},"headers":[{"level":2,"title":"\u5728markdown\u4E2D\u753B\u6D41\u7A0B\u56FE","slug":"\u5728markdown\u4E2D\u753B\u6D41\u7A0B\u56FE"},{"level":2,"title":"\u4F8B\u5B50","slug":"\u4F8B\u5B50"}],"relativePath":"js/flow-chart.md","lastUpdated":1661217770000}'),p={name:"js/flow-chart.md"},o=l(`<h1 id="\u6D41\u7A0B\u56FE" tabindex="-1">\u6D41\u7A0B\u56FE <a class="header-anchor" href="#\u6D41\u7A0B\u56FE" aria-hidden="true">#</a></h1><p>\u4E00\u5957\u6807\u51C6\u7684\u56FE\u5F62\uFF0C\u7528\u4E8E\u63CF\u8FF0\u7A0B\u5E8F\u7684\u903B\u8F91</p><p>\u901A\u5E38\u6D41\u7A0B\u56FE\u5206\u6790\u7A0B\u5E8F\u7684\u6D41\u7A0B</p><p><img src="https://gitee.com/n65312/Typora-images/raw/master/uPic/image-20200605174440296.png" alt="\u6D41\u7A0B\u56FE"></p><h2 id="\u5728markdown\u4E2D\u753B\u6D41\u7A0B\u56FE" tabindex="-1">\u5728markdown\u4E2D\u753B\u6D41\u7A0B\u56FE <a class="header-anchor" href="#\u5728markdown\u4E2D\u753B\u6D41\u7A0B\u56FE" aria-hidden="true">#</a></h2><div class="language-mermaid"><button class="copy"></button><span class="lang">mermaid</span><pre><code><span class="line"><span style="color:#89DDFF;">graph</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">TD</span></span>
<span class="line"><span style="color:#A6ACCD;">start</span><span style="color:#89DDFF;">((</span><span style="color:#C3E88D;">\u5F00\u59CB</span><span style="color:#89DDFF;">))--&gt;</span><span style="color:#A6ACCD;">if</span><span style="color:#89DDFF;">{</span><span style="color:#C3E88D;">\u5224\u65AD</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">if--true</span><span style="color:#89DDFF;">--&gt;</span><span style="color:#A6ACCD;">A</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">\u6587\u5B57</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">if--false</span><span style="color:#89DDFF;">--&gt;</span><span style="color:#A6ACCD;">ed</span><span style="color:#89DDFF;">((</span><span style="color:#C3E88D;">\u7ED3\u675F</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">A</span><span style="color:#89DDFF;">--&gt;</span><span style="color:#A6ACCD;">ed</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4F8B\u5B50" tabindex="-1">\u4F8B\u5B50 <a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a></h2><p>\u793A\u4F8B1:</p><div class="language-mermaid"><button class="copy"></button><span class="lang">mermaid</span><pre><code><span class="line"><span style="color:#89DDFF;">graph</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">TD</span></span>
<span class="line"><span style="color:#A6ACCD;">st</span><span style="color:#89DDFF;">((</span><span style="color:#C3E88D;">\u5F00\u59CB</span><span style="color:#89DDFF;">))--&gt;</span><span style="color:#C3E88D;"> </span><span style="color:#A6ACCD;">buyPeach</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">\u4E702\u4E2A\u6843\u5B50</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">buyPeach</span><span style="color:#89DDFF;">--&gt;</span><span style="color:#A6ACCD;">if</span><span style="color:#89DDFF;">{</span><span style="color:#C3E88D;">\u662F\u5426\u78B0\u5230\u5356\u897F\u74DC\u7684</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">if--true</span><span style="color:#89DDFF;">--&gt;</span><span style="color:#A6ACCD;">buyXigua</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">\u4E701</span><span style="color:#A6ACCD;"> \u4E2A\u897F\u74DC</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">if--false</span><span style="color:#89DDFF;">--&gt;</span><span style="color:#A6ACCD;">ed</span><span style="color:#89DDFF;">((</span><span style="color:#C3E88D;">\u7ED3\u675F</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">buyXigua</span><span style="color:#89DDFF;">--&gt;</span><span style="color:#A6ACCD;">ed</span></span>
<span class="line"></span></code></pre></div><p>\u793A\u4F8B2:</p><div class="language-mermaid"><button class="copy"></button><span class="lang">mermaid</span><pre><code><span class="line"><span style="color:#89DDFF;">graph</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">TD</span></span>
<span class="line"><span style="color:#A6ACCD;">st</span><span style="color:#89DDFF;">((</span><span style="color:#C3E88D;">\u5F00\u59CB</span><span style="color:#89DDFF;">))--&gt;</span><span style="color:#A6ACCD;">if</span><span style="color:#89DDFF;">{</span><span style="color:#C3E88D;">\u662F\u5426\u78B0\u5230\u5356\u897F\u74DC\u7684</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">if--true</span><span style="color:#89DDFF;">--&gt;</span><span style="color:#A6ACCD;">\u4E701\u4E2A\u6843\u5B50</span></span>
<span class="line"><span style="color:#A6ACCD;">if--false</span><span style="color:#89DDFF;">--&gt;</span><span style="color:#A6ACCD;">\u4E702\u4E2A\u6843\u5B50</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E701\u4E2A\u6843\u5B50</span><span style="color:#89DDFF;">--&gt;</span><span style="color:#A6ACCD;">ed</span><span style="color:#89DDFF;">((</span><span style="color:#C3E88D;">\u7ED3\u675F</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E702\u4E2A\u6843\u5B50</span><span style="color:#89DDFF;">--&gt;</span><span style="color:#A6ACCD;">ed</span></span>
<span class="line"></span></code></pre></div>`,11),e=[o];function t(c,r,D,y,F,C){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};