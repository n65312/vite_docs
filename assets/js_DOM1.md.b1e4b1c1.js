import{_ as e,c as l,o as i,a as p}from"./app.50048430.js";const _=JSON.parse('{"title":"\u83B7\u53D6 DOM \u8282\u70B9","description":"","frontmatter":{"title":"\u83B7\u53D6 DOM \u8282\u70B9","date":"2017-06-21T00:00:00.000Z","tags":["JS"]},"headers":[{"level":2,"title":"\u65E7\u7684\u83B7\u53D6\u5143\u7D20\u8282\u70B9\u7684\u65B9\u5F0F","slug":"\u65E7\u7684\u83B7\u53D6\u5143\u7D20\u8282\u70B9\u7684\u65B9\u5F0F"},{"level":2,"title":"\u65B0\u7684\u83B7\u53D6\u5143\u7D20\u8282\u70B9\u7684\u65B9\u5F0F","slug":"\u65B0\u7684\u83B7\u53D6\u5143\u7D20\u8282\u70B9\u7684\u65B9\u5F0F"},{"level":3,"title":"1.\u901A\u8FC7\u65B9\u6CD5\u83B7\u53D6","slug":"_1-\u901A\u8FC7\u65B9\u6CD5\u83B7\u53D6"},{"level":3,"title":"2.\u6839\u636E\u8282\u70B9\u5173\u7CFB\u83B7\u53D6\u8282\u70B9","slug":"_2-\u6839\u636E\u8282\u70B9\u5173\u7CFB\u83B7\u53D6\u8282\u70B9"},{"level":3,"title":"\u83B7\u53D6\u5143\u7D20\u8282\u70B9","slug":"\u83B7\u53D6\u5143\u7D20\u8282\u70B9"},{"level":2,"title":"\u83B7\u53D6\u8282\u70B9\u4FE1\u606F","slug":"\u83B7\u53D6\u8282\u70B9\u4FE1\u606F"}],"relativePath":"js/DOM1.md","lastUpdated":1661210647000}'),t={name:"js/DOM1.md"},d=p('<h1 id="\u83B7\u53D6-dom-\u8282\u70B9" tabindex="-1">\u83B7\u53D6 DOM \u8282\u70B9 <a class="header-anchor" href="#\u83B7\u53D6-dom-\u8282\u70B9" aria-hidden="true">#</a></h1><p>\u83B7\u53D6 DOM \u5BF9\u8C61</p><h2 id="\u65E7\u7684\u83B7\u53D6\u5143\u7D20\u8282\u70B9\u7684\u65B9\u5F0F" tabindex="-1">\u65E7\u7684\u83B7\u53D6\u5143\u7D20\u8282\u70B9\u7684\u65B9\u5F0F <a class="header-anchor" href="#\u65E7\u7684\u83B7\u53D6\u5143\u7D20\u8282\u70B9\u7684\u65B9\u5F0F" aria-hidden="true">#</a></h2><p><strong>DOM0</strong></p><ul><li><p>document.body\uFF1A</p><p>\u83B7\u53D6 body \u5143\u7D20\u8282\u70B9</p></li><li><p>document.head\uFF1A</p><p>\u83B7\u53D6 head \u5143\u7D20\u8282\u70B9</p></li><li><p>document.links\uFF1A</p><p>\u83B7\u53D6\u9875\u9762\u4E0A\u6240\u6709\u7684\u8D85\u94FE\u63A5(<code>&lt;a&gt;&lt;/a&gt;</code>)\u5143\u7D20\u8282\u70B9\uFF0C\u7C7B\u6570\u7EC4</p></li><li><p>document.anchors\uFF1A</p><p>\u83B7\u53D6\u9875\u9762\u4E0A\u6240\u6709\u7684\u951A\u94FE\u63A5(\u5177\u6709 name \u5C5E\u6027)\u5143\u7D20\u8282\u70B9</p></li><li><p>document.forms\uFF1A</p><p>\u83B7\u53D6\u9875\u9762\u4E0A\u6240\u6709 form \u5143\u7D20\u8282\u70B9</p></li></ul><h2 id="\u65B0\u7684\u83B7\u53D6\u5143\u7D20\u8282\u70B9\u7684\u65B9\u5F0F" tabindex="-1">\u65B0\u7684\u83B7\u53D6\u5143\u7D20\u8282\u70B9\u7684\u65B9\u5F0F <a class="header-anchor" href="#\u65B0\u7684\u83B7\u53D6\u5143\u7D20\u8282\u70B9\u7684\u65B9\u5F0F" aria-hidden="true">#</a></h2><h3 id="_1-\u901A\u8FC7\u65B9\u6CD5\u83B7\u53D6" tabindex="-1">1.\u901A\u8FC7\u65B9\u6CD5\u83B7\u53D6 <a class="header-anchor" href="#_1-\u901A\u8FC7\u65B9\u6CD5\u83B7\u53D6" aria-hidden="true">#</a></h3><ul><li><p><code>document.getElementById(&#39;id \u540D&#39;)</code></p><p>\u901A\u8FC7 id \u83B7\u53D6\u5BF9\u5E94\u7684\u5143\u7D20</p></li><li><p><code>document.getElementsByTagName(&#39;\u5143\u7D20(\u6807\u7B7E)\u540D&#39;)</code></p><p>\u901A\u8FC7\u5143\u7D20\u540D\u83B7\u53D6\u5143\u7D20\uFF0C\u5F97\u5230\u7C7B\u6570\u7EC4</p></li><li><p><code>document.getElementsByClassName(&#39;\u7C7B\u540D&#39;)</code></p><p>\u901A\u8FC7\u5143\u7D20\u7684\u7C7B\u540D\u83B7\u53D6\u5143\u7D20\uFF0C\u5F97\u5230\u7C7B\u6570\u7EC4\uFF0CIE9 \u4EE5\u4E0B\u65E0\u6548</p></li><li><p><code>document.getElementsByName(&#39;name \u5C5E\u6027\u503C&#39;)</code></p><p>\u901A\u8FC7\u5143\u7D20\u7684 name \u5C5E\u6027\u503C\u83B7\u53D6\u5143\u7D20\uFF0C\u5F97\u5230\u7C7B\u6570\u7EC4</p></li><li><p><code>document.querySelector(&#39;css \u9009\u62E9\u5668&#39;)</code></p><p>\u901A\u8FC7 css \u9009\u62E9\u5668\u83B7\u53D6\u5143\u7D20\uFF0C\u5F97\u5230\u5339\u914D\u7684\u7B2C\u4E00\u4E2A\uFF0CIE8 \u4EE5\u4E0B\u65E0\u6548</p></li><li><p><code>document.querySelectorAll(&#39;css \u9009\u62E9\u5668&#39;)</code></p><p>\u901A\u8FC7 css \u9009\u62E9\u5668\u83B7\u53D6\u5143\u7D20\uFF0C\u5F97\u5230\u6240\u6709\u5339\u914D\u7684\u7ED3\u679C\uFF0C\u7C7B\u6570\u7EC4\uFF0CIE8 \u4EE5\u4E0B\u65E0\u6548</p></li><li><p><code>document.documentElement</code></p><p>\u83B7\u53D6\u6839\u5143\u7D20(html \u5143\u7D20)</p></li></ul><p>\u7EC6\u8282\uFF1A</p><ol><li>\u5728\u6240\u6709\u5F97\u5230\u7C7B\u6570\u7EC4\u7684\u65B9\u6CD5\u4E2D\uFF0C\u9664\u4E86 <code>querySelectorAll</code>\uFF0C\u5176\u4ED6\u7684\u65B9\u6CD5\u90FD\u662F\u5B9E\u65F6\u66F4\u65B0\u7684\u3002</li><li><code>getElementById</code> \u5F97\u5230\u5143\u7D20\u6267\u884C\u6548\u7387\u6700\u9AD8\u3002</li><li>\u4E66\u5199\u4E86 id \u7684\u5143\u7D20\uFF0C\u4F1A\u81EA\u52A8\u6210\u4E3A window \u5BF9\u8C61\u7684\u5C5E\u6027\u3002\u5B83\u662F\u4E00\u4E2A\u5B9E\u65F6\u7684\u5355\u5BF9\u8C61\u3002\u4E8B\u5B9E\u4E0A\u7684\u6807\u51C6\u3002\u4E0D\u63A8\u8350\u4F7F\u7528\u3002</li><li><code>getElementsByTagName</code>\u3001<code>getElementsByClassName</code>\u3001<code>querySelector</code>\u3001<code>querySelectorAll</code>\uFF0C\u53EF\u4EE5\u4F5C\u4E3A\u5176\u4ED6\u5143\u7D20\u8282\u70B9\u5BF9\u8C61\u7684\u65B9\u6CD5\u4F7F\u7528\u3002</li></ol><h3 id="_2-\u6839\u636E\u8282\u70B9\u5173\u7CFB\u83B7\u53D6\u8282\u70B9" tabindex="-1">2.\u6839\u636E\u8282\u70B9\u5173\u7CFB\u83B7\u53D6\u8282\u70B9 <a class="header-anchor" href="#_2-\u6839\u636E\u8282\u70B9\u5173\u7CFB\u83B7\u53D6\u8282\u70B9" aria-hidden="true">#</a></h3><ul><li><p>parentNode\uFF1A</p><p>\u83B7\u53D6\u7236\u8282\u70B9\uFF08\u5143\u7D20\u3001\u6587\u6863\uFF09</p></li><li><p>previousSibling\uFF1A</p><p>\u83B7\u53D6\u4E0A\u4E00\u4E2A\u5144\u5F1F\u8282\u70B9</p></li><li><p>nextSibling\uFF1A</p><p>\u83B7\u53D6\u4E0B\u4E00\u4E2A\u5144\u5F1F\u8282\u70B9</p></li><li><p>childNodes\uFF1A</p><p>\u83B7\u53D6\u6240\u6709\u7684\u5B50\u8282\u70B9</p></li><li><p>firstChild\uFF1A</p><p>\u83B7\u53D6\u7B2C\u4E00\u4E2A\u5B50\u8282\u70B9</p></li><li><p>lastChild\uFF1A</p><p>\u83B7\u53D6\u6700\u540E\u4E00\u4E2A\u5B50\u8282\u70B9</p></li><li><p>attributes\uFF1A</p><p>\u83B7\u53D6\u5143\u7D20\u7684\u5C5E\u6027\u8282\u70B9</p></li></ul><h3 id="\u83B7\u53D6\u5143\u7D20\u8282\u70B9" tabindex="-1">\u83B7\u53D6\u5143\u7D20\u8282\u70B9 <a class="header-anchor" href="#\u83B7\u53D6\u5143\u7D20\u8282\u70B9" aria-hidden="true">#</a></h3><ul><li><p>parentElement\uFF1A</p><p>\u83B7\u53D6\u7236\u5143\u7D20</p></li><li><p>previousElementSibling\uFF1A</p><p>\u83B7\u53D6\u4E0A\u4E00\u4E2A\u5144\u5F1F\u5143\u7D20</p></li><li><p>nextElementSibling\uFF1A</p><p>\u83B7\u53D6\u4E0B\u4E00\u4E2A\u5144\u5F1F\u5143\u7D20</p></li><li><p>children\uFF1A</p><p>\u83B7\u53D6\u5B50\u5143\u7D20</p></li><li><p>firstElementChild\uFF1A</p><p>\u83B7\u53D6\u7B2C\u4E00\u4E2A\u5B50\u5143\u7D20</p></li><li><p>lastElementChild\uFF1A</p><p>\u83B7\u53D6\u6700\u540E\u4E00\u4E2A\u5B50\u5143\u7D20</p></li></ul><h2 id="\u83B7\u53D6\u8282\u70B9\u4FE1\u606F" tabindex="-1">\u83B7\u53D6\u8282\u70B9\u4FE1\u606F <a class="header-anchor" href="#\u83B7\u53D6\u8282\u70B9\u4FE1\u606F" aria-hidden="true">#</a></h2><ul><li><p>nodeName\uFF1A</p><p>\u83B7\u53D6\u8282\u70B9\u540D\u79F0</p></li><li><p>nodeValue\uFF1A</p><p>\u83B7\u53D6\u8282\u70B9\u7684\u503C</p></li><li><p>nodeType\uFF1A</p><p>\u8282\u70B9\u7C7B\u578B\uFF0C\u662F\u4E00\u4E2A\u6570\u5B57\u3002</p></li></ul>',16),a=[d];function o(c,n,r,s,h,u){return i(),l("div",null,a)}const g=e(t,[["render",o]]);export{_ as __pageData,g as default};
