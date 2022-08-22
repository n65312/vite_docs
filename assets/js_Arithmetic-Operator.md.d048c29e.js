import{_ as s,c as l,o as a,a as n}from"./app.50048430.js";const u=JSON.parse('{"title":"\u7B97\u6570\u8FD0\u7B97\u7B26","description":"","frontmatter":{"title":"\u7B97\u6570\u8FD0\u7B97\u7B26","date":"2017-06-13T00:00:00.000Z","tags":["JS"]},"headers":[{"level":2,"title":"\u7EC6\u8282","slug":"\u7EC6\u8282"},{"level":2,"title":"\u5176\u4ED6\u7C7B\u578B\u4F7F\u7528\u7B97\u6570\u8FD0\u7B97","slug":"\u5176\u4ED6\u7C7B\u578B\u4F7F\u7528\u7B97\u6570\u8FD0\u7B97"}],"relativePath":"js/Arithmetic-Operator.md","lastUpdated":1661210647000}'),o={name:"js/Arithmetic-Operator.md"},p=n(`<h1 id="\u7B97\u6570\u8FD0\u7B97\u7B26" tabindex="-1">\u7B97\u6570\u8FD0\u7B97\u7B26 <a class="header-anchor" href="#\u7B97\u6570\u8FD0\u7B97\u7B26" aria-hidden="true">#</a></h1><p>\u6570\u5B66\u8FD0\u7B97\u7B26</p><ol><li><p><code>+</code> <code>-</code> <code>*</code> <code>/</code></p></li><li><p><code>+</code> <code>-</code></p></li><li><p><code>%</code> \u6C42\u4F59\u8FD0\u7B97</p></li><li><p><code>++</code> <code>--</code> (\u4E0B\u8282\u8BFE\u8BA8\u8BBA)</p></li><li><p><code>**</code> \u5E42\u8FD0\u7B97</p></li></ol><h2 id="\u7EC6\u8282" tabindex="-1">\u7EC6\u8282 <a class="header-anchor" href="#\u7EC6\u8282" aria-hidden="true">#</a></h2><ol><li>\u6570\u5B57\u8FD0\u7B97\u662F\u4E0D\u7CBE\u786E\u7684</li><li>\u9664\u6570\u4E3A 0</li></ol><p>\u5982\u679C \u88AB\u9664\u6570\u662F\u6B63\u6570\uFF0C\u5F97\u5230\u7ED3\u679C Infinity\uFF08\u6B63\u65E0\u7A77\uFF09\u3002</p><p>\u5982\u679C \u88AB\u9664\u6570\u662F\u8D1F\u6570\uFF0C\u5F97\u5230\u7ED3\u679C -Infinity\uFF08\u8D1F\u65E0\u7A77\uFF09\u3002</p><p>\u5982\u679C \u88AB\u9664\u6570\u662F 0\uFF0C\u5F97\u5230\u7ED3\u679C NaN\uFF08Not a Number,\u975E\u6570\u5B57\uFF09\u3002</p><blockquote><p>typeof \u51FD\u6570 \u8FD4\u56DE\u7C7B\u578B\u4E3A <strong>String\uFF08\u5B57\u7B26\u4E32\uFF09</strong>\u3002</p><p>isNaN \u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u7528\u4E8E\u5224\u65AD\u4E00\u4E2A\u6570\u636E\u662F\u5426\u662F NaN\uFF0C\u8FD4\u56DE\u7C7B\u578B\u4E3A <strong>Boolean\uFF08\u5E03\u5C14\uFF09</strong>\u3002</p><p>isFinite \u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u7528\u4E8E\u5224\u65AD\u4E00\u4E2A\u6570\u636E\u662F\u5426\u662F\u6709\u9650\u7684\uFF0C\u8FD4\u56DE\u7C7B\u578B\u4E3A <strong>Boolean\uFF08\u5E03\u5C14\uFF09</strong>\u3002</p></blockquote><ol start="3"><li>\u6C42\u4F59</li></ol><p><code>%</code>\uFF0C\u6709\u7684\u6559\u7A0B\u79F0\u4E4B\u4E3A\u6C42\u6A21\u3002</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><p>\u6C42\u7684\u662F \u88AB\u9664\u6570 \u9664\u4EE5 \u9664\u6570 \u7684\u4F59\u6570\uFF1B\u5373 10 \xF7 2 \u7684\u4F59\u6570\u3002</p><p>\u4F59\u6570\u7684\u7B26\u53F7\uFF0C\u4E0E\u88AB\u9664\u6570\u76F8\u540C\u3002</p></div><h2 id="\u5176\u4ED6\u7C7B\u578B\u4F7F\u7528\u7B97\u6570\u8FD0\u7B97" tabindex="-1">\u5176\u4ED6\u7C7B\u578B\u4F7F\u7528\u7B97\u6570\u8FD0\u7B97 <a class="header-anchor" href="#\u5176\u4ED6\u7C7B\u578B\u4F7F\u7528\u7B97\u6570\u8FD0\u7B97" aria-hidden="true">#</a></h2><ol><li>\u9664\u52A0\u53F7\u4E4B\u5916\u7684\u7B97\u6570\u8FD0\u7B97\u7B26</li></ol><p>\u5C06\u539F\u59CB\u7C7B\u578B\u8F6C\u6362\u4E3A\u6570\u5B57\u7C7B\u578B\uFF08\u81EA\u52A8\u5B8C\u6210\u8F6C\u6362\uFF09\uFF0C\u7136\u540E\u8FDB\u884C\u8FD0\u7B97\u3002</p><ul><li>boolean\uFF1A <ul><li>true -&gt; 1, false -&gt; 0</li></ul></li><li>string: <ul><li>\u5982\u679C\u5B57\u7B26\u4E32\u5185\u90E8\u662F\u4E00\u4E2A\u6B63\u786E\u7684\u6570\u5B57\uFF0C\u76F4\u63A5\u53D8\u4E3A\u6570\u5B57\uFF0C\u5982\u679C\u662F\u4E00\u4E2A\u975E\u6570\u5B57,\u5219\u5F97\u5230 NaN\uFF08\u80FD\u8BC6\u522B Infinity,\u4E0D\u80FD\u628A\u5B57\u7B26\u4E32\u5185\u90E8\u7684\u4E1C\u897F\u5F53\u4F5C\u8868\u8FBE\u5F0F,\u5982\u679C\u5B57\u7B26\u4E32\u662F\u4E00\u4E2A\u7A7A\u5B57\u7B26\u4E32\uFF08\u6CA1\u6709\u4EFB\u4F55\u5185\u5BB9\uFF09\uFF0C\u8F6C\u6362\u4E3A 0\uFF0C\u5B57\u7B26\u4E32\u8F6C\u6362\u65F6\u4F1A\u5FFD\u7565\u524D\u540E\u7A7A\u683C\u3002</li></ul></li></ul><blockquote><p>NaN \u867D\u7136\u662F\u6570\u5B57\u7C7B\u578B\uFF0C\u4F46\u5B83\u548C\u4EFB\u4F55\u6570\u5B57\u4F5C\u4EFB\u4F55\u8FD0\u7B97\uFF0C\u5F97\u5230\u7684\u7ED3\u679C\u90FD\u662F NaN</p></blockquote><ul><li>null: <ul><li>null -&gt; 0</li></ul></li><li>undefined: <ul><li>undefined -&gt; NaN</li></ul></li></ul><p>\u5C06\u5BF9\u8C61\u7C7B\u578B\u5148\u8F6C\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u7136\u540E\u518D\u5C06\u8BE5\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u6570\u5B57\u7C7B\u578B</p><p>\u5BF9\u8C61\u7C7B\u578B -&gt; &quot;[object Object]&quot; -&gt; NaN</p><ol start="2"><li>\u52A0\u53F7\u8FD0\u7B97\u7B26</li></ol><ul><li>\u52A0\u53F7\u4E00\u8FB9\u6709\u5B57\u7B26\u4E32\uFF0C\u542B\u4E49\u53D8\u4E3A <strong>\u5B57\u7B26\u4E32\u62FC\u63A5</strong></li></ul><p>\u5C06\u53E6\u4E00\u8FB9\u7684\u5176\u4ED6\u7C7B\u578B\uFF0C\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">\u6570\u5B57 </span><span style="color:#89DDFF;">--&gt;</span><span style="color:#A6ACCD;"> \u6570\u5B57\u5B57\u7B26\u4E32</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">boolean </span><span style="color:#89DDFF;">--&gt;</span><span style="color:#A6ACCD;"> boolean \u5B57\u7B26\u4E32</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">--&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">null</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">--&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">undefined</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u5BF9\u8C61 </span><span style="color:#89DDFF;">--&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[object Object]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><ul><li><p>\u52A0\u53F7\u4E24\u8FB9\u90FD\u6CA1\u6709\u5B57\u7B26\u4E32\uFF0C\u4F46\u4E00\u8FB9\u6709\u5BF9\u8C61\uFF0C\u5C06\u5BF9\u8C61\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\uFF0C\u7136\u540E\u6309\u7167\u4E0A\u9762\u7684\u89C4\u5219\u8FDB\u884C</p></li><li><p>\u5176\u4ED6\u60C5\u51B5\u548C\u4E0A\u9762\u7684\u6570\u5B66\u8FD0\u7B97\u4E00\u81F4</p></li></ul>`,26),e=[p];function t(c,r,i,D,d,C){return a(),l("div",null,e)}const F=s(o,[["render",t]]);export{u as __pageData,F as default};