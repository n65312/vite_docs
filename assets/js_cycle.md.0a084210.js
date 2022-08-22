import{_ as s,c as a,o as n,a as l}from"./app.50048430.js";const A=JSON.parse('{"title":"\u5FAA\u73AF","description":"","frontmatter":{"title":"\u5FAA\u73AF","date":"2017-06-15T00:00:00.000Z","tags":["JS"]},"headers":[{"level":2,"title":"while \u5FAA\u73AF","slug":"while-\u5FAA\u73AF"},{"level":2,"title":"do while\u5FAA\u73AF","slug":"do-while\u5FAA\u73AF"},{"level":2,"title":"for\u5FAA\u73AF","slug":"for\u5FAA\u73AF"},{"level":2,"title":"\u5FAA\u73AF\u4E2D\u7684\u5173\u952E\u5B57","slug":"\u5FAA\u73AF\u4E2D\u7684\u5173\u952E\u5B57"}],"relativePath":"js/cycle.md","lastUpdated":1661210647000}'),p={name:"js/cycle.md"},o=l(`<h1 id="\u5FAA\u73AF" tabindex="-1">\u5FAA\u73AF <a class="header-anchor" href="#\u5FAA\u73AF" aria-hidden="true">#</a></h1><p>\u91CD\u590D\u7684\u8FD0\u884C\u4E00\u6BB5\u4EE3\u7801</p><p>3\u79CD\u5FAA\u73AF\u7ED3\u6784\uFF1Awhile\u5FAA\u73AF\u3001do-while\u5FAA\u73AF\u3001for\u5FAA\u73AF</p><h2 id="while-\u5FAA\u73AF" tabindex="-1">while \u5FAA\u73AF <a class="header-anchor" href="#while-\u5FAA\u73AF" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">while</span><span style="color:#A6ACCD;">(\u6761\u4EF6)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">\u4EE3\u7801\u5757</span><span style="color:#F07178;">\uFF08</span><span style="color:#A6ACCD;">\u5FAA\u73AF\u4F53</span><span style="color:#F07178;">\uFF09</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6D41\u7A0B\u56FE\uFF1A</p><div class="language-mermaid"><button class="copy"></button><span class="lang">mermaid</span><pre><code><span class="line"><span style="color:#89DDFF;">graph</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">TD</span></span>
<span class="line"><span style="color:#A6ACCD;">st</span><span style="color:#89DDFF;">((</span><span style="color:#C3E88D;">\u5F00\u59CB</span><span style="color:#89DDFF;">))--&gt;</span><span style="color:#A6ACCD;">\u6761\u4EF6</span><span style="color:#89DDFF;">{</span><span style="color:#C3E88D;">\u6761\u4EF6</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6761\u4EF6--true</span><span style="color:#89DDFF;">--&gt;</span><span style="color:#A6ACCD;">\u4EE3\u7801\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4EE3\u7801\u5757</span><span style="color:#89DDFF;">--&gt;</span><span style="color:#A6ACCD;">\u6761\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6761\u4EF6--false</span><span style="color:#89DDFF;">--&gt;</span><span style="color:#A6ACCD;">ed</span><span style="color:#89DDFF;">((</span><span style="color:#C3E88D;">\u7ED3\u675F</span><span style="color:#89DDFF;">))</span></span>
<span class="line"></span></code></pre></div><p>\u6B7B\u5FAA\u73AF\uFF1A\u6761\u4EF6\u6C38\u8FDC\u6EE1\u8DB3\uFF0C\u6C38\u8FDC\u65E0\u6CD5\u63A8\u51FA\u5FAA\u73AF\u3002</p><h2 id="do-while\u5FAA\u73AF" tabindex="-1">do while\u5FAA\u73AF <a class="header-anchor" href="#do-while\u5FAA\u73AF" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">do</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">\u4EE3\u7801\u5757</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">while</span><span style="color:#A6ACCD;">(\u6761\u4EF6)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u6D41\u7A0B\u56FE\uFF1A</p><div class="language-mermaid"><button class="copy"></button><span class="lang">mermaid</span><pre><code><span class="line"><span style="color:#89DDFF;">graph</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">TD</span></span>
<span class="line"><span style="color:#A6ACCD;">st</span><span style="color:#89DDFF;">((</span><span style="color:#C3E88D;">\u5F00\u59CB</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">--&gt;\u4EE3\u7801\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4EE3\u7801\u5757</span><span style="color:#89DDFF;">--&gt;</span><span style="color:#A6ACCD;">\u6761\u4EF6</span><span style="color:#89DDFF;">{</span><span style="color:#C3E88D;">\u6761\u4EF6</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6761\u4EF6--true</span><span style="color:#89DDFF;">--&gt;</span><span style="color:#A6ACCD;">\u4EE3\u7801\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6761\u4EF6--false</span><span style="color:#89DDFF;">--&gt;</span><span style="color:#A6ACCD;">ed</span><span style="color:#89DDFF;">((</span><span style="color:#C3E88D;">\u7ED3\u675F</span><span style="color:#89DDFF;">))</span></span>
<span class="line"></span></code></pre></div><h2 id="for\u5FAA\u73AF" tabindex="-1">for\u5FAA\u73AF <a class="header-anchor" href="#for\u5FAA\u73AF" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;">(\u521D\u59CB\u5316\u8868\u8FBE\u5F0F</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">\u6761\u4EF6\u8868\u8FBE\u5F0F</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">\u6761\u4EF6\u6539\u53D8\u8868\u8FBE\u5F0F)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">\u5FAA\u73AF\u4F53</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6D41\u7A0B\u56FE\uFF1A</p><div class="language-mermaid"><button class="copy"></button><span class="lang">mermaid</span><pre><code><span class="line"><span style="color:#89DDFF;">graph</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">TD</span></span>
<span class="line"><span style="color:#A6ACCD;">st</span><span style="color:#89DDFF;">((</span><span style="color:#C3E88D;">\u5F00\u59CB</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">--&gt;\u521D\u59CB\u5316\u8868\u8FBE\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">\u521D\u59CB\u5316\u8868\u8FBE\u5F0F</span><span style="color:#89DDFF;">--&gt;</span><span style="color:#A6ACCD;">\u6761\u4EF6</span><span style="color:#89DDFF;">{</span><span style="color:#C3E88D;">\u6761\u4EF6</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6761\u4EF6--true</span><span style="color:#89DDFF;">--&gt;</span><span style="color:#A6ACCD;">\u5FAA\u73AF\u4F53</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5FAA\u73AF\u4F53</span><span style="color:#89DDFF;">--&gt;</span><span style="color:#A6ACCD;">\u6761\u4EF6\u6539\u53D8\u8868\u8FBE\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6761\u4EF6\u6539\u53D8\u8868\u8FBE\u5F0F</span><span style="color:#89DDFF;">--&gt;</span><span style="color:#A6ACCD;">\u6761\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6761\u4EF6--false</span><span style="color:#89DDFF;">--&gt;</span><span style="color:#A6ACCD;">ed</span><span style="color:#89DDFF;">((</span><span style="color:#C3E88D;">\u7ED3\u675F</span><span style="color:#89DDFF;">))</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5FAA\u73AF\u4E2D\u7684\u5173\u952E\u5B57" tabindex="-1">\u5FAA\u73AF\u4E2D\u7684\u5173\u952E\u5B57 <a class="header-anchor" href="#\u5FAA\u73AF\u4E2D\u7684\u5173\u952E\u5B57" aria-hidden="true">#</a></h2><p>\u5FAA\u73AF\u63A7\u5236\u8BED\u53E5</p><ul><li><code>break;</code> \u8DF3\u51FA\u5FAA\u73AF</li><li><code>continue;</code> \u505C\u6B62\u5F53\u524D\u5FAA\u73AF\u4F53\uFF0C\u8FDB\u5165\u4E0B\u4E00\u6B21\u5FAA\u73AF</li></ul>`,19),e=[o];function c(t,r,D,y,i,F){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{A as __pageData,d as default};
