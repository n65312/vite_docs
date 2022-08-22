import{_ as e,c as o,o as d,a as t}from"./app.50048430.js";const D=JSON.parse('{"title":"\u5176\u4ED6\u4E8B\u4EF6","description":"","frontmatter":{"title":"\u5176\u4ED6\u4E8B\u4EF6","date":"2017-06-23T00:00:00.000Z","tags":["JS"]},"headers":[{"level":2,"title":"\u8868\u5355\u4E8B\u4EF6","slug":"\u8868\u5355\u4E8B\u4EF6"},{"level":2,"title":"\u5176\u4ED6\u4E8B\u4EF6","slug":"\u5176\u4ED6\u4E8B\u4EF6-1"}],"relativePath":"js/Other-events.md","lastUpdated":1661210647000}'),c={name:"js/Other-events.md"},l=t(`<h1 id="\u5176\u4ED6\u4E8B\u4EF6" tabindex="-1">\u5176\u4ED6\u4E8B\u4EF6 <a class="header-anchor" href="#\u5176\u4ED6\u4E8B\u4EF6" aria-hidden="true">#</a></h1><h2 id="\u8868\u5355\u4E8B\u4EF6" tabindex="-1">\u8868\u5355\u4E8B\u4EF6 <a class="header-anchor" href="#\u8868\u5355\u4E8B\u4EF6" aria-hidden="true">#</a></h2><ul><li><p><code>focus</code></p><p>\u5143\u7D20\u805A\u7126\u65F6\u89E6\u53D1\uFF08\u80FD\u4E0E\u7528\u6237\u53D1\u751F\u4EA4\u4E92\u7684\u5143\u7D20\uFF0C\u90FD\u53EF\u4EE5\u805A\u7126\uFF09\uFF0C\u8BE5\u4E8B\u4EF6\u4E0D\u4F1A\u5192\u6CE1\u3002</p></li><li><p><code>blur</code></p><p>\u5143\u7D20\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1,\u8BE5\u4E8B\u4EF6\u4E0D\u4F1A\u5192\u6CE1\u3002</p></li><li><p><code>submit</code></p><p>\u63D0\u4EA4\u8868\u5355\u4E8B\u4EF6\uFF0C\u4EC5\u5728<code>form</code>\u5143\u7D20\u6709\u6548\u3002</p></li><li><p><code>change</code></p><p>\u6587\u672C\u6539\u53D8\u4E8B\u4EF6</p></li><li><p><code>input</code></p><p>\u6587\u672C\u6539\u53D8\u4E8B\u4EF6\uFF0C\u5373\u65F6\u89E6\u53D1\u3002</p></li></ul><h2 id="\u5176\u4ED6\u4E8B\u4EF6-1" tabindex="-1">\u5176\u4ED6\u4E8B\u4EF6 <a class="header-anchor" href="#\u5176\u4ED6\u4E8B\u4EF6-1" aria-hidden="true">#</a></h2><blockquote><p>\u6D4F\u89C8\u5668\u6E32\u67D3\u9875\u9762\u7684\u8FC7\u7A0B\uFF1A</p><ol><li>\u5F97\u5230\u9875\u9762\u7684\u6E90\u4EE3\u7801</li><li>\u521B\u5EFAdocument\u8282\u70B9</li><li>\u4ECE\u4E0A\u5230\u4E0B\uFF0C\u5C06\u5143\u7D20\u4F9D\u6B21\u6DFB\u52A0\u5230dom\u6811\u4E2D\uFF0C\u6BCF\u6DFB\u52A0\u4E00\u4E2A\u5143\u7D20\uFF0C\u8FDB\u884C\u9884\u6E32\u67D3</li><li>\u6309\u7167\u7ED3\u6784\uFF0C\u4F9D\u6B21\u6E32\u67D3\u5B50\u8282\u70B9</li></ol></blockquote><ul><li><p><code>load</code></p><p><code>window\u7684load</code>\u4E8B\u4EF6\uFF1A\u9875\u9762\u4E2D\u6240\u6709\u8D44\u6E90\u5168\u90E8\u52A0\u8F7D\u5B8C\u6BD5\u7684\u4E8B\u4EF6</p><p><code>\u56FE\u7247\u7684load</code>\u4E8B\u4EF6\uFF1A\u56FE\u7247\u8D44\u6E90\u52A0\u8F7D\u5B8C\u6BD5\u7684\u4E8B\u4EF6</p></li><li><p><code>DOMContentLoaded</code></p><p><code>document\u7684DOMContentLoaded</code>\uFF1Adom\u6811\u6784\u5EFA\u5B8C\u6210\u540E\u53D1\u751F</p><p><code>DOMContentLoaded</code>\u5FC5\u987B\u4F7F\u7528DOM2\u7EA7\u4E8B\u4EF6\u6CE8\u518C\uFF0C\u5373</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">DOMContentLoaded</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u6267\u884C\u4EE3\u7801</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div></li><li><p><code>readystatechange</code></p><p>\u5F53\u6587\u6863\u7684 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Document/readyState" target="_blank" rel="noreferrer"><code>readyState</code></a> \u5C5E\u6027\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u4F1A\u89E6\u53D1 <code>readystatechange</code> \u4E8B\u4EF6\u3002</p><p><strong><code>Document.readyState</code></strong> \u5C5E\u6027\u63CF\u8FF0\u4E86<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Document" target="_blank" rel="noreferrer"><code>document</code></a> \u7684\u52A0\u8F7D\u72B6\u6001\u3002</p><p><code>readystate</code>\uFF1Aloading\uFF08\u6B63\u5728\u52A0\u8F7D\uFF09\u3001interactive\uFF08\u53EF\u4EA4\u4E92\uFF09\u3001complete\uFF08\u5B8C\u6210\uFF09</p><p><code>interactive</code>\uFF1A\u89E6\u53D1<code>DOMContentLoaded</code>\u4E8B\u4EF6</p><p><code>complete</code>\uFF1A\u89E6\u53D1<code>window\u7684load</code>\u4E8B\u4EF6</p></li></ul><p><strong>js\u4EE3\u7801\u5E94\u8BE5\u5C3D\u91CF\u5199\u5230\u9875\u9762\u5E95\u90E8\uFF0C\u907F\u514D\u963B\u585E\u540E\u7EED\u7684\u6E32\u67D3\uFF0C\u4E5F\u907F\u514D\u8FD0\u884Cjs\u65F6\uFF0C\u5F97\u4E0D\u5230\u9875\u9762\u4E2D\u7684\u5143\u7D20\u3002</strong></p><p><strong>css\u4EE3\u7801\u5E94\u8BE5\u5199\u5230\u9875\u9762\u9876\u90E8\uFF0C\u907F\u514D\u51FA\u73B0\u95EA\u70C1\uFF08\u5982\u679C\u653E\u5230\u9875\u9762\u5E95\u90E8\uFF0C\u4F1A\u5BFC\u81F4\u5143\u7D20\u5148\u6CA1\u6709\u6837\u5F0F\uFF0C\u4F7F\u7528\u4E11\u964B\u7684\u9ED8\u8BA4\u6837\u5F0F\uFF0C\u7136\u540E\u5F53\u8BFB\u53D6\u5230css\u6587\u4EF6\u540E\uFF0C\u91CD\u65B0\u6539\u53D8\u6837\u5F0F\uFF09</strong></p><ul><li><p>unload\u3001beforeunload\uFF08\u4EC5\u5728IE\u4E2D\u6709\u6548\uFF09</p><p><code>beforeunload</code>\uFF1A<code>window</code>\u7684\u4E8B\u4EF6\uFF0C\u5173\u95ED\u7A97\u53E3\u65F6\u8FD0\u884C\uFF0C\u53EF\u4EE5\u963B\u6B62\u5173\u95ED\u7A97\u53E3</p><p><code>unload</code>\uFF1A<code>window</code>\u7684\u4E8B\u4EF6\uFF0C\u5173\u95ED\u7A97\u53E3\u65F6\u8FD0\u884C</p><p>\u533A\u522B\uFF1A</p><ul><li>\u6267\u884C\u987A\u5E8F\uFF1A\u5148\u8FD0\u884C<code>beforeunload</code>\uFF0C\u540E\u8FD0\u884C<code>unload</code></li><li><code>beforeunload</code>\u53EF\u4EE5\u963B\u6B62\u5173\u95ED\u7A97\u53E3\uFF0C<code>unload</code>\u65E0\u6CD5\u963B\u6B62\u7A97\u53E3\u5173\u95ED</li></ul></li><li><p><code>scroll</code></p><p>\u7A97\u53E3\u53D1\u751F\u6EDA\u52A8\u65F6\u8FD0\u884C\u7684\u4E8B\u4EF6\u3002</p><p>\u901A\u8FC7<code>scrollTop</code>\u548C<code>scrollLeft</code>\uFF0C\u53EF\u4EE5\u83B7\u53D6\u548C\u8BBE\u7F6E\u6EDA\u52A8\u8DDD\u79BB\u3002</p><p>\u83B7\u53D6\u6574\u4E2A\u7F51\u9875\u7684<code>scrollTop</code>\uFF1A</p><p>\u517C\u5BB9\u6027\u5199\u6CD5\uFF1A<code>document.documentElement.scrollTop + document.body.scrollTop</code></p></li><li><p><code>resize</code></p><p>\u7A97\u53E3\u5C3A\u5BF8\u53D1\u751F\u6539\u53D8\u65F6\u8FD0\u884C\u7684\u4E8B\u4EF6\u3002</p></li></ul><blockquote><p>\u7A97\u53E3\u4E0E\u5143\u7D20\u5C3A\u5BF8\uFF1A</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>window.screen.width</code>\u3001<br><code>window.screen.height</code></td><td>\u83B7\u53D6\u5C4F\u5E55\u7684\u5BBD\u3001\u9AD8</td></tr><tr><td><code>window.outerWidth</code>\u3001<code>window.outerHeight</code></td><td>\u83B7\u53D6\u6D4F\u89C8\u5668\u7A97\u53E3\u5916\u90E8\u7684\u5BBD\u3001\u9AD8</td></tr><tr><td><code>window.innerWidth</code>\u3001<code>window.innerHeight</code></td><td>\u83B7\u5F97\u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u5185\u5BB9\u533A\u57DF\u7684\u5BBD\u3001\u9AD8\uFF0C\u5305\u542B\u5782\u76F4\u6EDA\u52A8\u6761(\u5982\u679C\u6709\u7684\u8BDD)\u3002</td></tr><tr><td><code>document.documentElement.clientWidth</code>\u3001<br><code>document.documentElement.clientHeight</code></td><td>\u83B7\u53D6\u89C6\u53E3\u7684\u5BBD\u3001\u9AD8</td></tr><tr><td><code>div.clientWidth</code>\u3001<code>div.clientHeight</code></td><td>\u83B7\u53D6div\u5143\u7D20\u5185\u90E8\u7684\u5BBD\u3001\u9AD8\uFF08\u4E0D\u5305\u542B\u8FB9\u6846\uFF09</td></tr><tr><td><code>div.offsetWidth</code>\u3001<code>div.offsetHeight</code></td><td>\u83B7\u53D6div\u5143\u7D20\u81EA\u8EAB\u53EF\u89C6\u5BBD\u5EA6\u52A0\u4E0A\u5DE6\u53F3border\u7684\u5BBD\u5EA6</td></tr><tr><td><code>div.scrollWidth</code>\u3001<code>div.scrollHeight</code></td><td>\u83B7\u53D6div\u5143\u7D20\u6EDA\u52A8\u89C6\u56FE\u7684\u5BBD\u3001\u9AD8</td></tr></tbody></table></blockquote><ul><li><p><code>contextmenu</code></p><p>\u53F3\u952E\u83DC\u5355\u4E8B\u4EF6</p></li><li><p><code>paste</code></p><p>\u7C98\u8D34\u4E8B\u4EF6\uFF0C</p></li><li><p><code>copy</code></p><p>\u590D\u5236\u4E8B\u4EF6</p></li><li><p><code>cut</code></p><p>\u526A\u5207\u4E8B\u4EF6</p></li></ul><blockquote><p><strong>clipboardData</strong>\u5C5E\u6027\u4FDD\u5B58\u4E86\u4E00\u4E2A\u526A\u5207\u677F\u6570\u636E\u5BF9\u8C61</p><p>\u200B \u53EF\u4EE5\u901A\u8FC7<code>e.clipboardData.getData()</code>\u83B7\u53D6\u526A\u5207\u677F\u4E2D\u7684\u6570\u636E</p></blockquote>`,12),p=[l];function n(a,s,r,i,u,h){return d(),o("div",null,p)}const b=e(c,[["render",n]]);export{D as __pageData,b as default};
