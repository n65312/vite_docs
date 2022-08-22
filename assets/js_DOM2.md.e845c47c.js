import{_ as e,c as l,o as a,a as d}from"./app.50048430.js";const f=JSON.parse('{"title":"DOM \u5143\u7D20\u64CD\u4F5C","description":"","frontmatter":{"title":"DOM \u5143\u7D20\u64CD\u4F5C","date":"2017-06-21T00:00:00.000Z","tags":["JS"]},"headers":[{"level":2,"title":"\u521D\u8BC6\u5143\u7D20\u4E8B\u4EF6","slug":"\u521D\u8BC6\u5143\u7D20\u4E8B\u4EF6"},{"level":2,"title":"\u83B7\u53D6\u548C\u8BBE\u7F6E\u5143\u7D20\u5C5E\u6027","slug":"\u83B7\u53D6\u548C\u8BBE\u7F6E\u5143\u7D20\u5C5E\u6027"},{"level":3,"title":"\u53EF\u8BC6\u522B\u5C5E\u6027","slug":"\u53EF\u8BC6\u522B\u5C5E\u6027"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u5C5E\u6027","slug":"\u81EA\u5B9A\u4E49\u5C5E\u6027"},{"level":2,"title":"\u83B7\u53D6\u548C\u8BBE\u7F6E\u5143\u7D20\u5185\u5BB9","slug":"\u83B7\u53D6\u548C\u8BBE\u7F6E\u5143\u7D20\u5185\u5BB9"},{"level":2,"title":"\u5143\u7D20\u7ED3\u6784\u91CD\u6784","slug":"\u5143\u7D20\u7ED3\u6784\u91CD\u6784"},{"level":2,"title":"\u521B\u5EFA\u548C\u5220\u9664\u5143\u7D20","slug":"\u521B\u5EFA\u548C\u5220\u9664\u5143\u7D20"},{"level":3,"title":"\u521B\u5EFA\u5143\u7D20","slug":"\u521B\u5EFA\u5143\u7D20"},{"level":3,"title":"\u514B\u9686\u5143\u7D20","slug":"\u514B\u9686\u5143\u7D20"},{"level":3,"title":"\u5220\u9664\u5143\u7D20","slug":"\u5220\u9664\u5143\u7D20"}],"relativePath":"js/DOM2.md","lastUpdated":1661210647000}'),i={name:"js/DOM2.md"},t=d('<h1 id="dom-\u5143\u7D20\u64CD\u4F5C" tabindex="-1">DOM \u5143\u7D20\u64CD\u4F5C <a class="header-anchor" href="#dom-\u5143\u7D20\u64CD\u4F5C" aria-hidden="true">#</a></h1><h2 id="\u521D\u8BC6\u5143\u7D20\u4E8B\u4EF6" tabindex="-1">\u521D\u8BC6\u5143\u7D20\u4E8B\u4EF6 <a class="header-anchor" href="#\u521D\u8BC6\u5143\u7D20\u4E8B\u4EF6" aria-hidden="true">#</a></h2><p>\u5143\u7D20\u4E8B\u4EF6\uFF1A\u67D0\u4E2A\u5143\u7D20\u53D1\u751F\u4E00\u4EF6\u4E8B\uFF08\u88AB\u70B9\u51FB click\uFF09\u3002</p><p>\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\uFF1A\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u53D1\u751F\u4E86\u4E00\u4EF6\u4E8B\uFF0C\u5E94\u8BE5\u505A\u4EC0\u4E48\u4E8B\u60C5\u3002</p><p>\u6CE8\u518C\u4E8B\u4EF6\uFF1A\u5C06\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u4E0E\u67D0\u4E2A\u4E8B\u4EF6\u5173\u8054\u3002</p><p><strong>this\u5173\u952E\u5B57\u5728\u5904\u7406\u7A0B\u5E8F\u4E2D\u6307\u4EE3\u5F53\u524D\u53D1\u751F\u7684\u4E8B\u4EF6</strong></p><h2 id="\u83B7\u53D6\u548C\u8BBE\u7F6E\u5143\u7D20\u5C5E\u6027" tabindex="-1">\u83B7\u53D6\u548C\u8BBE\u7F6E\u5143\u7D20\u5C5E\u6027 <a class="header-anchor" href="#\u83B7\u53D6\u548C\u8BBE\u7F6E\u5143\u7D20\u5C5E\u6027" aria-hidden="true">#</a></h2><p>\u901A\u7528\u65B9\u5F0F\uFF1A</p><ul><li><code>getAttribute</code>\uFF0C<code>setAttribute</code></li></ul><h3 id="\u53EF\u8BC6\u522B\u5C5E\u6027" tabindex="-1">\u53EF\u8BC6\u522B\u5C5E\u6027 <a class="header-anchor" href="#\u53EF\u8BC6\u522B\u5C5E\u6027" aria-hidden="true">#</a></h3><p>\u6B63\u5E38\u7684 HTML \u5C5E\u6027</p><ul><li><code>DOM\u5BF9\u8C61.\u5C5E\u6027\u540D</code>\uFF1A\u63A8\u8350</li></ul><p>\u6CE8\u610F\uFF1A</p><ol><li>\u6B63\u5E38\u7684\u5C5E\u6027\u5373\u4F7F\u6CA1\u6709\u8D4B\u503C\uFF0C\u4E5F\u6709\u9ED8\u8BA4\u503C\u3002</li><li>\u5E03\u5C14\u5C5E\u6027\u5728 DOM \u5BF9\u8C61\u4E2D\uFF0C\u5F97\u5230\u7684\u662F boolean</li><li>\u67D0\u4E9B\u8868\u5355\u5143\u7D20\u53EF\u4EE5\u83B7\u53D6\u5230\u4E0D\u5B58\u5728\u7684\u5C5E\u6027</li><li>\u67D0\u4E9B\u5C5E\u6027\u4E0E\u6807\u5FD7\u7B26\u51B2\u7A81\uFF0C\u6B64\u65F6\uFF0C\u9700\u8981\u66F4\u6362\u5C5E\u6027\u540D</li></ol><h3 id="\u81EA\u5B9A\u4E49\u5C5E\u6027" tabindex="-1">\u81EA\u5B9A\u4E49\u5C5E\u6027 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5C5E\u6027" aria-hidden="true">#</a></h3><p>HTML5 \u5EFA\u8BAE\u81EA\u5B9A\u4E49\u5C5E\u6027\u4F7F\u7528<code>data-</code>\u4F5C\u4E3A\u524D\u7F00</p><p>\u5982\u679C\u9075\u4ECE HTML5 \u81EA\u5B9A\u4E49\u5C5E\u6027\u89C4\u8303\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>DOM\u5BF9\u8C61.dataset.\u5C5E\u6027\u540D</code>\u63A7\u5236\u5C5E\u6027</p><p>\u5220\u9664\u81EA\u5B9A\u4E49\u5C5E\u6027</p><ul><li><code>removeAttribute(&#39;\u5C5E\u6027\u540D&#39;)</code></li><li><code>delete DOM.dataset.\u5C5E\u6027\u540D</code></li></ul><h2 id="\u83B7\u53D6\u548C\u8BBE\u7F6E\u5143\u7D20\u5185\u5BB9" tabindex="-1">\u83B7\u53D6\u548C\u8BBE\u7F6E\u5143\u7D20\u5185\u5BB9 <a class="header-anchor" href="#\u83B7\u53D6\u548C\u8BBE\u7F6E\u5143\u7D20\u5185\u5BB9" aria-hidden="true">#</a></h2><ul><li><code>innerHTML</code>\uFF1A\u83B7\u53D6\u548C\u8BBE\u7F6E\u5143\u7D20\u5185\u90E8\u7684 HTML \u6587\u672C</li><li><code>innerText</code>\uFF1A\u83B7\u53D6\u548C\u8BBE\u7F6E\u5143\u7D20\u5185\u90E8\u7684\u7EAF\u6587\u672C\uFF0C\u4EC5\u5F97\u5230\u5143\u7D20\u5185\u90E8\u663E\u793A\u51FA\u6765\u7684\u6587\u672C</li><li><code>textContent</code>\uFF1A\u83B7\u53D6\u548C\u8BBE\u7F6E\u5143\u7D20\u5185\u90E8\u7684\u7EAF\u6587\u672C\uFF0C\u5F97\u5230\u7684\u662F\u5185\u90E8\u6E90\u4EE3\u7801\u4E2D\u7684\u6587\u672C</li></ul><h2 id="\u5143\u7D20\u7ED3\u6784\u91CD\u6784" tabindex="-1">\u5143\u7D20\u7ED3\u6784\u91CD\u6784 <a class="header-anchor" href="#\u5143\u7D20\u7ED3\u6784\u91CD\u6784" aria-hidden="true">#</a></h2><ul><li><code>\u7236\u5143\u7D20.appenChild(\u5143\u7D20)</code>\uFF1A\u5728\u7236\u5143\u7D20\u672B\u5C3E\u8FFD\u52A0\u4E00\u4E2A\u5B50\u5143\u7D20\u3002</li><li><code>\u7236\u5143\u7D20.insertBefore(\u5F85\u63D2\u5165\u7684\u5143\u7D20,\u54EA\u4E2A\u5143\u7D20\u4E4B\u524D)</code>\uFF1A\u5728\u7236\u5143\u7D20\u7684\u6307\u5B9A\u5143\u7D20\u4E4B\u524D\u63D2\u5165\u4E00\u4E2A\u5143\u7D20</li><li><code>\u7236\u5143\u7D20.replaceChild(\u66FF\u6362\u8282\u70B9\uFF0C\u9009\u5B9A\u8282\u70B9)</code>\uFF1A\u5BF9\u9009\u5B9A\u7684\u8282\u70B9\uFF0C\u66FF\u6362\u4E00\u4E2A\u5B50\u8282\u70B9 Node \u4E3A\u53E6\u5916\u4E00\u4E2A\u8282\u70B9\u3002</li></ul><p>\u7EC6\u8282\uFF1A</p><p>\u66F4\u6539\u5143\u7D20\u7ED3\u6784\u6548\u7387\u8F83\u4F4E\uFF0C\u5C3D\u91CF\u5C11\u7528\u3002</p><h2 id="\u521B\u5EFA\u548C\u5220\u9664\u5143\u7D20" tabindex="-1">\u521B\u5EFA\u548C\u5220\u9664\u5143\u7D20 <a class="header-anchor" href="#\u521B\u5EFA\u548C\u5220\u9664\u5143\u7D20" aria-hidden="true">#</a></h2><h3 id="\u521B\u5EFA\u5143\u7D20" tabindex="-1">\u521B\u5EFA\u5143\u7D20 <a class="header-anchor" href="#\u521B\u5EFA\u5143\u7D20" aria-hidden="true">#</a></h3><ul><li><code>document.createElement(&#39;\u5143\u7D20\u540D&#39;)</code>\uFF1A\u521B\u5EFA\u4E00\u4E2A\u5143\u7D20\u5BF9\u8C61 <ul><li><code>document.createTextNode(&#39;\u6587\u672C&#39;)</code></li><li><code>document.createDocumentFragment()</code>\uFF1A\u521B\u5EFA\u6587\u6863\u7247\u6BB5</li></ul></li></ul><h3 id="\u514B\u9686\u5143\u7D20" tabindex="-1">\u514B\u9686\u5143\u7D20 <a class="header-anchor" href="#\u514B\u9686\u5143\u7D20" aria-hidden="true">#</a></h3><ul><li><code>DOM\u5BF9\u8C61.cloneNode(\u662F\u5426\u6DF1\u5EA6\u514B\u9686)</code>\uFF1A\u590D\u5236\u4E00\u4E2A\u65B0\u7684 DOM \u5BF9\u8C61\u5E76\u8FD4\u56DE</li></ul><blockquote><p><code>childNodes</code>\u4E5F\u662F\u5B9E\u65F6\u96C6\u5408</p></blockquote><h3 id="\u5220\u9664\u5143\u7D20" tabindex="-1">\u5220\u9664\u5143\u7D20 <a class="header-anchor" href="#\u5220\u9664\u5143\u7D20" aria-hidden="true">#</a></h3><ul><li><code>\u7236\u5143\u7D20.removeChild(\u5B50\u5143\u7D20)</code>\uFF1A\u7236\u5143\u7D20\u8C03\u7528\uFF0C\u4F20\u5165\u5B50\u5143\u7D20\uFF0C\u8FD4\u56DE\u5220\u9664\u7684\u5B50\u5143\u7D20</li><li><code>remove()</code>\uFF1A\u5220\u9664\u81EA\u5DF1</li></ul>',33),o=[t];function c(r,h,n,s,u,p){return a(),l("div",null,o)}const m=e(i,[["render",c]]);export{f as __pageData,m as default};
