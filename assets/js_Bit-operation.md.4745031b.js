import{_ as s,c as a,o as p,a as e}from"./app.50048430.js";const A=JSON.parse('{"title":"\u4F4D\u8FD0\u7B97","description":"","frontmatter":{"title":"\u4F4D\u8FD0\u7B97","date":"2017-06-14T00:00:00.000Z","tags":["JS"]},"headers":[{"level":2,"title":"\u4E0E\u8FD0\u7B97","slug":"\u4E0E\u8FD0\u7B97"},{"level":2,"title":"\u6216\u8FD0\u7B97","slug":"\u6216\u8FD0\u7B97"},{"level":2,"title":"\u5426\uFF08\u975E\uFF09\u8FD0\u7B97","slug":"\u5426\uFF08\u975E\uFF09\u8FD0\u7B97"},{"level":2,"title":"\u5F02\u6216\u8FD0\u7B97","slug":"\u5F02\u6216\u8FD0\u7B97"},{"level":2,"title":"\u5E94\u7528\u573A\u666F","slug":"\u5E94\u7528\u573A\u666F"},{"level":2,"title":"\u4F4D\u79FB\u8FD0\u7B97","slug":"\u4F4D\u79FB\u8FD0\u7B97"}],"relativePath":"js/Bit-operation.md","lastUpdated":1661210647000}'),n={name:"js/Bit-operation.md"},l=e(`<h1 id="\u4F4D\u8FD0\u7B97" tabindex="-1">\u4F4D\u8FD0\u7B97 <a class="header-anchor" href="#\u4F4D\u8FD0\u7B97" aria-hidden="true">#</a></h1><p>\u5C06\u4E00\u4E2A\u6574\u6570\u7684\u4E8C\u8FDB\u5236\u683C\u5F0F\u8FDB\u884C\u8FD0\u7B97</p><p>JS\u4E2D\uFF0C\u5982\u679C\u5BF9\u4E00\u4E2A\u6570\u636E\u8FDB\u884C\u4F4D\u8FD0\u7B97\uFF0C\u5B83\u9996\u5148\u4F1A\u5C06\u5176\u8F6C\u6362\u4E3A\u4E00\u4E2A\u6574\u6570\uFF0C\u5E76\u4E14\u6309\u716732\u4F4D\u7684\u6574\u6570\u4E8C\u8FDB\u5236\u6392\u5217</p><p>\u4E3E\u4F8B</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#F78C6C;">2.3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">--&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">--&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0000</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0000</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0000</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0000</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0000</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0000</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0000</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0010</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">NaN</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">Infinity</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">-Infinity</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E0E\u8FD0\u7B97" tabindex="-1">\u4E0E\u8FD0\u7B97 <a class="header-anchor" href="#\u4E0E\u8FD0\u7B97" aria-hidden="true">#</a></h2><p>\u7B26\u53F7\uFF1A<code>&amp;</code></p><p>\u5199\u6CD5\uFF1A\u6574\u65701 &amp; \u6574\u65702</p><p>\u5C06\u4E24\u4E2A\u6574\u6570\u6BCF\u4E00\u4F4D\u8FDB\u884C\u6BD4\u8F83\uFF0C\u5982\u679C\u90FD\u4E3A1\uFF0C\u7ED3\u679C\u4E3A1\uFF0C\u5426\u5219\u4E3A0\u3002</p><h2 id="\u6216\u8FD0\u7B97" tabindex="-1">\u6216\u8FD0\u7B97 <a class="header-anchor" href="#\u6216\u8FD0\u7B97" aria-hidden="true">#</a></h2><p>\u7B26\u53F7\uFF1A<code>|</code></p><p>\u5199\u6CD5\uFF1A\u6574\u65701 | \u6574\u65702</p><p>\u5C06\u4E24\u4E2A\u6574\u6570\u6BCF\u4E00\u4F4D\u8FDB\u884C\u6BD4\u8F83\uFF0C\u5982\u679C\u90FD\u4E3A0\uFF0C\u7ED3\u679C\u4E3A0\uFF0C\u5426\u5219\u4E3A1\u3002</p><h2 id="\u5426\uFF08\u975E\uFF09\u8FD0\u7B97" tabindex="-1">\u5426\uFF08\u975E\uFF09\u8FD0\u7B97 <a class="header-anchor" href="#\u5426\uFF08\u975E\uFF09\u8FD0\u7B97" aria-hidden="true">#</a></h2><p>\u7B26\u53F7\uFF1A<code>~</code></p><p>\u5199\u6CD5\uFF1A~\u6574\u6570</p><p>\u5C06\u8BE5\u6574\u6570\u6309\u4F4D\u53D6\u53CD</p><p><strong>\u8D1F\u6570\u7684\u5B58\u50A8\u65B9\u5F0F</strong></p><p>-1</p><p>\u771F\u7801\uFF1A1000 0000 0000 0000 0000 0000 0000 0001 \u53CD\u7801\uFF1A1111 1111 1111 1111 1111 1111 1111 1110 \u771F\u7801\u53D6\u53CD \u8865\u7801\uFF1A1111 1111 1111 1111 1111 1111 1111 1111 \u53CD\u7801\u52A01</p><p>\u53D6\u53CD\u7684\u5FEB\u901F\u8FD0\u7B97\uFF1A\u5728\u8981\u53D6\u53CD\u7684\u6570\u5B57\u524D\u52A0\u7B26\u53F7\uFF0C\u518D\u51CF1\u3002 -\u53D6\u53CD\u6570\u5B57 -1</p><p>JS\u4E2D\u6700\u5FEB\u901F\u7684\u53D6\u6574\u65B9\u5F0F\uFF1A<code>~~\u6574\u6570 </code></p><h2 id="\u5F02\u6216\u8FD0\u7B97" tabindex="-1">\u5F02\u6216\u8FD0\u7B97 <a class="header-anchor" href="#\u5F02\u6216\u8FD0\u7B97" aria-hidden="true">#</a></h2><p>\u7B26\u53F7\uFF1A<code>^</code></p><p>\u5199\u6CD5\uFF1A\u6570\u5B571 ^ \u6570\u5B572</p><p>\u5C06\u6570\u5B571 \u548C \u6570\u5B572 \u6309\u4F4D\u6BD4\u8F83\uFF0C\u76F8\u540C\u53D60\uFF0C\u4E0D\u540C\u53D61.</p><h2 id="\u5E94\u7528\u573A\u666F" tabindex="-1">\u5E94\u7528\u573A\u666F <a class="header-anchor" href="#\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a></h2><p>\u4F4D\u7684\u53E0\u52A0\uFF08\u5F00\u5173\uFF09</p><h2 id="\u4F4D\u79FB\u8FD0\u7B97" tabindex="-1">\u4F4D\u79FB\u8FD0\u7B97 <a class="header-anchor" href="#\u4F4D\u79FB\u8FD0\u7B97" aria-hidden="true">#</a></h2><p>\u5DE6\u4F4D\u79FB\uFF1A<code>&lt;&lt;</code></p><p>\u5199\u6CD5\uFF1A\u6570\u5B571 &lt;&lt; \u6570\u5B572 \u7ED3\u679C\uFF1A\u6570\u5B571 * 2^\u6570\u5B572 ,\u6570\u5B571 \u4E58\u4EE5 2\u7684\u6570\u5B572 \u6B21\u65B9</p><p>\u5C06\u6570\u5B571\u7684\u4E8C\u8FDB\u5236\uFF08\u9664\u7B26\u53F7\u5916\uFF0C\u5DE6\u79FB\u52A8\u6570\u5B572\u7684\u6B21\u6570\uFF09</p><p>\u53F3\u4F4D\u79FB\uFF1A<code>&gt;&gt;</code></p><p>\u5199\u6CD5\uFF1A\u6570\u5B571 &gt;&gt; \u6570\u5B572 \u7ED3\u679C\uFF1A\u6570\u5B571 / 2^\u6570\u5B572 ,\u6570\u5B571 \u9664\u4EE5 2\u7684\u6570\u5B572 \u6B21\u65B9\uFF0C\u540E\u53D6\u6574</p><p>\u5C06\u6570\u5B571\u7684\u4E8C\u8FDB\u5236\uFF08\u9664\u7B26\u53F7\u5916\uFF0C\u53F3\u79FB\u52A8\u6570\u5B572\u7684\u6B21\u6570\uFF09</p><p>\u5168\u53F3\u4F4D\u79FB\uFF1A<code>&gt;&gt;&gt;</code></p><p>\u4E0E\u53F3\u4F4D\u79FB\u7684\u533A\u522B\uFF0C\u5168\u53F3\u4F4D\u79FB\u4F1A\u5BFC\u81F4\u7B26\u53F7\u4F4D\u8DDF\u7740\u4F4D\u79FB\u3002</p>`,37),o=[l];function t(c,r,d,i,C,h){return p(),a("div",null,o)}const D=s(n,[["render",t]]);export{A as __pageData,D as default};
