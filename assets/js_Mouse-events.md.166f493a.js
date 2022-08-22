import{_ as e,c as o,o as p,a as c}from"./app.50048430.js";const m=JSON.parse('{"title":"\u9F20\u6807\u4E8B\u4EF6","description":"","frontmatter":{"title":"\u9F20\u6807\u4E8B\u4EF6","date":"2017-06-23T00:00:00.000Z","tags":["JS"]},"headers":[{"level":2,"title":"\u4E8B\u4EF6\u7C7B\u578B","slug":"\u4E8B\u4EF6\u7C7B\u578B"},{"level":2,"title":"\u4E8B\u4EF6\u5BF9\u8C61","slug":"\u4E8B\u4EF6\u5BF9\u8C61"}],"relativePath":"js/Mouse-events.md","lastUpdated":1661212217000}'),l={name:"js/Mouse-events.md"},d=c('<h1 id="\u9F20\u6807\u4E8B\u4EF6" tabindex="-1">\u9F20\u6807\u4E8B\u4EF6 <a class="header-anchor" href="#\u9F20\u6807\u4E8B\u4EF6" aria-hidden="true">#</a></h1><h2 id="\u4E8B\u4EF6\u7C7B\u578B" tabindex="-1">\u4E8B\u4EF6\u7C7B\u578B <a class="header-anchor" href="#\u4E8B\u4EF6\u7C7B\u578B" aria-hidden="true">#</a></h2><ul><li><p><code>click</code>\uFF1A</p><p>\u7528\u6237\u70B9\u51FB\u4E3B\u9F20\u6807\u6309\u94AE\uFF08\u4E00\u822C\u662F\u5DE6\u952E\uFF09\u6216\u8005\u5728\u805A\u7126\u65F6\u6309\u4E0B\u56DE\u8F66\u952E\u65F6\u89E6\u53D1</p></li><li><p><code>dblclick</code>\uFF1A</p><p>\u7528\u6237\u53CC\u51FB\u4E3B\u9F20\u6807\u6309\u952E\u89E6\u53D1\uFF08\u9891\u7387\u53D6\u51B3\u4E8E\u7CFB\u7EDF\u914D\u7F6E\uFF09</p></li><li><p><code>mousedown</code>\uFF1A</p><p>\u7528\u6237\u6309\u4E0B\u9F20\u6807\u4EFB\u610F\u6309\u952E\u65F6\u89E6\u53D1</p></li><li><p><code>mouseup</code>\uFF1A</p><p>\u7528\u6237\u62AC\u8D77\u9F20\u6807\u4EFB\u610F\u6309\u952E\u65F6\u89E6\u53D1</p></li><li><p><code>mousemove</code>\uFF1A</p><p>\u9F20\u6807\u5728\u5143\u7D20\u4E0A\u79FB\u52A8\u65F6\u89E6\u53D1</p></li><li><p><code>mouseover</code>\uFF1A</p><p>\u9F20\u6807\u8FDB\u5165\u5143\u7D20\u65F6\u89E6\u53D1</p></li><li><p><code>mouseout</code>\uFF1A</p><p>\u9F20\u6807\u79BB\u5F00\u5143\u7D20\u65F6\u89E6\u53D1</p></li><li><p><code>mouseenter</code>\uFF1A</p><p>\u9F20\u6807\u8FDB\u5165\u5143\u7D20\u65F6\u89E6\u53D1\uFF0C\u8BE5\u4E8B\u4EF6\u4E0D\u4F1A\u5192\u6CE1</p></li><li><p><code>mouseleave</code>\uFF1A</p><p>\u9F20\u6807\u79BB\u5F00\u5143\u7D20\u65F6\u89E6\u53D1\uFF0C\u8BE5\u4E8B\u4EF6\u4E0D\u4F1A\u5192\u6CE1</p></li></ul><p><strong>\u533A\u522B\uFF1A</strong></p><ul><li><p><code>over</code>\u548C<code>out</code>\uFF1A</p><p>\u4E0D\u8003\u8651\u5B50\u5143\u7D20\uFF0C\u4ECE\u7236\u5143\u7D20\u79FB\u52A8\u5230\u5B50\u5143\u7D20\uFF0C\u5BF9\u4E8E\u7236\u5143\u7D20\u800C\u8A00\uFF0C\u4ECD\u7136\u7B97\u4F5C\u79BB\u5F00</p></li><li><p><code>enter</code>\u548C<code>leave</code>\uFF1A</p><p>\u8003\u8651\u5B50\u5143\u7D20\uFF0C\u5B50\u5143\u7D20\u4ECD\u7136\u662F\u7236\u5143\u7D20\u7684\u4E00\u90E8\u5206</p></li><li><p><code>mouseenter</code>\u548C<code>mouseleave</code>\u4E0D\u4F1A\u5192\u6CE1</p></li></ul><blockquote><p><code>e.bubbles</code>\uFF1A\u4E8B\u4EF6\u5C5E\u6027\uFF0C\u53EF\u4EE5\u67E5\u770B\u662F\u5426\u5192\u6CE1\uFF0Cboolean \u503C</p></blockquote><h2 id="\u4E8B\u4EF6\u5BF9\u8C61" tabindex="-1">\u4E8B\u4EF6\u5BF9\u8C61 <a class="header-anchor" href="#\u4E8B\u4EF6\u5BF9\u8C61" aria-hidden="true">#</a></h2><p>\u6240\u6709\u9F20\u6807\u4E8B\u4EF6\uFF0C\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u4E2D\u7684\u4E8B\u4EF6\u5BF9\u8C61\uFF0C\u90FD\u4E3A MouseEvent</p><ul><li><p><code>altKey</code></p><p>\u89E6\u53D1\u4E8B\u4EF6\u65F6\uFF0C\u662F\u5426\u6309\u4E0B\u4E86\u952E\u76D8\u7684 alt \u952E</p></li><li><p><code>ctrlKey</code></p><p>\u89E6\u53D1\u4E8B\u4EF6\u65F6\uFF0C\u662F\u5426\u6309\u4E0B\u4E86\u952E\u76D8\u7684 ctrl \u952E</p></li><li><p><code>shiftKey</code></p><p>\u89E6\u53D1\u4E8B\u4EF6\u65F6\uFF0C\u662F\u5426\u6309\u4E0B\u4E86\u952E\u76D8\u7684 shift \u952E</p></li><li><p><code>button</code> \u89E6\u53D1\u4E8B\u4EF6\u65F6\uFF0C\u6309\u4E0B\u7684\u9F20\u6807\u6309\u952E\u7C7B\u578B</p><ul><li>0\uFF1A\u5DE6\u952E</li><li>1\uFF1A\u4E2D\u952E</li><li>2\uFF1A\u53F3\u952E</li></ul></li></ul><p>\u4F4D\u7F6E\uFF1A</p><ul><li><p><code>page</code>\uFF1A<code>pageX\u3001pageY</code></p><p>\u9F20\u6807\u8DDD\u79BB\u5F53\u524D\u9875\u9762\u7684\u6A2A\u7EB5\u5750\u6807</p></li><li><p><code>client</code>\uFF1A<code>clientX\u3001clientY</code></p><p>\u9F20\u6807\u76F8\u5BF9\u4E8E\u89C6\u53E3\u7684\u5750\u6807</p></li><li><p><code>offset</code>\uFF1A<code>offsetX\u3001offsetY</code></p><p>\u9F20\u6807\u76F8\u5BF9\u4E8E\u4E8B\u4EF6\u6E90\u7684\u5185\u8FB9\u8DDD\u7684\u5750\u6807</p></li><li><p><code>screen</code>\uFF1A<code>screenX\u3001screenY</code></p><p>\u9F20\u6807\u76F8\u5BF9\u4E8E\u5C4F\u5E55\u7684\u6A2A\u7EB5\u5750\u6807</p></li><li><p><code>x\u3001y</code>\uFF0C\u7B49\u540C\u4E8E<code>clientX\u3001clientY</code></p></li><li><p><code>movement</code>\uFF1A<code>movementX\u3001movementY</code></p><p>\u53EA\u5728\u9F20\u6807\u79FB\u52A8\u4E8B\u4EF6\u4E2D\u6709\u6548\uFF0C\u76F8\u5BF9\u4E8E\u4E0A\u4E00\u6B21\u9F20\u6807\u4F4D\u7F6E\uFF0C\u504F\u79FB\u7684\u8DDD\u79BB</p></li></ul>',11),i=[d];function t(a,s,n,r,u,_){return p(),o("div",null,i)}const f=e(l,[["render",t]]);export{m as __pageData,f as default};