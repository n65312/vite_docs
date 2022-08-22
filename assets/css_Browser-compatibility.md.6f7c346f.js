import{_ as e,c as a,o as i,a as l}from"./app.50048430.js";const b=JSON.parse('{"title":"\u6D4F\u89C8\u5668\u517C\u5BB9\u6027","description":"","frontmatter":{"title":"\u6D4F\u89C8\u5668\u517C\u5BB9\u6027","date":"2017-06-11T00:00:00.000Z","tags":["CSS"]},"headers":[{"level":2,"title":"\u95EE\u9898\u4EA7\u751F\u539F\u56E0","slug":"\u95EE\u9898\u4EA7\u751F\u539F\u56E0"},{"level":2,"title":"\u5382\u5546\u524D\u7F00","slug":"\u5382\u5546\u524D\u7F00"},{"level":2,"title":"css hack","slug":"css-hack"},{"level":2,"title":"\u6E10\u8FD1\u589E\u5F3A \u548C \u4F18\u96C5\u964D\u7EA7","slug":"\u6E10\u8FD1\u589E\u5F3A-\u548C-\u4F18\u96C5\u964D\u7EA7"},{"level":2,"title":"caniuse","slug":"caniuse"}],"relativePath":"css/Browser-compatibility.md","lastUpdated":1661212217000}'),t={name:"css/Browser-compatibility.md"},s=l('<h1 id="\u6D4F\u89C8\u5668\u517C\u5BB9\u6027" tabindex="-1">\u6D4F\u89C8\u5668\u517C\u5BB9\u6027 <a class="header-anchor" href="#\u6D4F\u89C8\u5668\u517C\u5BB9\u6027" aria-hidden="true">#</a></h1><h2 id="\u95EE\u9898\u4EA7\u751F\u539F\u56E0" tabindex="-1">\u95EE\u9898\u4EA7\u751F\u539F\u56E0 <a class="header-anchor" href="#\u95EE\u9898\u4EA7\u751F\u539F\u56E0" aria-hidden="true">#</a></h2><ul><li>\u5E02\u573A\u7ADE\u4E89</li><li>\u6807\u51C6\u7248\u672C\u7684\u53D8\u5316</li></ul><h2 id="\u5382\u5546\u524D\u7F00" tabindex="-1">\u5382\u5546\u524D\u7F00 <a class="header-anchor" href="#\u5382\u5546\u524D\u7F00" aria-hidden="true">#</a></h2><blockquote><p>\u6BD4\u5982\uFF1Abox-sizing\uFF0C \u8C37\u6B4C\u65E7\u7248\u672C\u6D4F\u89C8\u5668\u4E2D\u4F7F\u7528-webkit-box-sizing:border-box</p></blockquote><ul><li>\u5E02\u573A\u7ADE\u4E89\uFF0C\u6807\u51C6\u6CA1\u6709\u53D1\u5E03</li><li>\u6807\u51C6\u4ECD\u5728\u8BA8\u8BBA\u4E2D\uFF08\u8349\u6848\uFF09\uFF0C\u6D4F\u89C8\u5668\u5382\u5546\u5E0C\u671B\u5148\u652F\u6301</li></ul><p>IE\uFF1A -ms- Chrome\uFF0Csafari: -webkit- opera\uFF1A -o- firefox: -moz-</p><blockquote><p>\u6D4F\u89C8\u5668\u5728\u5904\u7406\u6837\u5F0F\u6216\u5143\u7D20\u65F6\uFF0C\u4F7F\u7528\u5982\u4E0B\u7684\u65B9\u5F0F\uFF1A \u5F53\u9047\u5230\u65E0\u6CD5\u8BC6\u522B\u7684\u4EE3\u7801\u65F6\uFF0C\u76F4\u63A5\u7565\u8FC7\u3002</p></blockquote><ol><li>\u8C37\u6B4C\u6D4F\u89C8\u5668\u7684\u6EDA\u52A8\u6761\u6837\u5F0F</li></ol><p>\u5B9E\u9645\u4E0A\uFF0C\u5728\u5F00\u53D1\u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u6EDA\u52A8\u6761\uFF0C\u5F80\u5F80\u662F\u4F7F\u7528div+css+JS\u5B9E\u73B0\u7684</p><ol start="2"><li>\u591A\u4E2A\u80CC\u666F\u56FE\u4E2D\u9009\u4E00\u4E2A\u4F5C\u4E3A\u80CC\u666F</li></ol><h2 id="css-hack" tabindex="-1">css hack <a class="header-anchor" href="#css-hack" aria-hidden="true">#</a></h2><p>\u6839\u636E\u4E0D\u540C\u7684\u6D4F\u89C8\u5668\uFF08\u4E3B\u8981\u9488\u5BF9IE\uFF09\uFF0C\u8BBE\u7F6E\u4E0D\u540C\u7684\u6837\u5F0F\u548C\u5143\u7D20</p><ol><li>\u6837\u5F0F</li></ol><p>IE\u4E2D\uFF0CCSS\u7684\u7279\u6B8A\u7B26\u53F7</p><ul><li>*\u5C5E\u6027\uFF0C\u517C\u5BB9IE5\u3001IE6\u3001IE7</li><li>_\u5C5E\u6027\uFF0C\u517C\u5BB9IE5~IE6</li><li>\u5C5E\u6027\u503C\\9\uFF0C\u517C\u5BB9IE5~IE11</li><li>\u5C5E\u6027\u503C\\0\uFF0C\u517C\u5BB9IE8~IE11</li><li>\u5C5E\u6027\u503C\\9\\0\uFF0C\u517C\u5BB9IE9~IE10</li></ul><blockquote><p>IE5\u30016\u30017\u7684\u5916\u8FB9\u8DDDbug\uFF0C\u6D6E\u52A8\u5143\u7D20\u7684\u5DE6\u5916\u8FB9\u8DDD\u7FFB\u500D</p></blockquote><ol start="2"><li>\u6761\u4EF6\u5224\u65AD</li></ol><h2 id="\u6E10\u8FD1\u589E\u5F3A-\u548C-\u4F18\u96C5\u964D\u7EA7" tabindex="-1">\u6E10\u8FD1\u589E\u5F3A \u548C \u4F18\u96C5\u964D\u7EA7 <a class="header-anchor" href="#\u6E10\u8FD1\u589E\u5F3A-\u548C-\u4F18\u96C5\u964D\u7EA7" aria-hidden="true">#</a></h2><p>\u4E24\u79CD\u89E3\u51B3\u517C\u5BB9\u6027\u95EE\u9898\u7684\u601D\u8DEF\uFF0C\u4F1A\u5F71\u54CD\u4EE3\u7801\u7684\u4E66\u5199\u98CE\u683C</p><ul><li>\u6E10\u8FD1\u589E\u5F3A\uFF1A\u5148\u9002\u5E94\u5927\u90E8\u5206\u6D4F\u89C8\u5668\uFF0C\u7136\u540E\u9488\u5BF9\u65B0\u7248\u672C\u6D4F\u89C8\u5668\u52A0\u5165\u65B0\u7684\u6837\u5F0F</li></ul><p>\u4E66\u5199\u4EE3\u7801\u65F6\uFF0C\u5148\u5C3D\u91CF\u907F\u514D\u4E66\u5199\u6709\u517C\u5BB9\u6027\u95EE\u9898\u7684\u4EE3\u7801\uFF0C\u5B8C\u6210\u4E4B\u540E\uFF0C\u518D\u9010\u6B65\u52A0\u5165\u65B0\u6807\u51C6\u4E2D\u7684\u4EE3\u7801\u3002</p><ul><li>\u4F18\u96C5\u964D\u7EA7\uFF1A\u5148\u5236\u4F5C\u5B8C\u6574\u7684\u529F\u80FD\uFF0C\u7136\u540E\u9488\u5BF9\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u8FDB\u884C\u7279\u6B8A\u5904\u7406</li></ul><p>\u4E66\u5199\u4EE3\u7801\u65F6\uFF0C\u5148\u4E0D\u7528\u7279\u522B\u5728\u610F\u517C\u5BB9\u6027\uFF0C\u5B8C\u6210\u6574\u4E2A\u529F\u80FD\u4E4B\u540E\uFF0C\u518D\u9488\u5BF9\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u5904\u7406\u6837\u5F0F\u3002</p><h2 id="caniuse" tabindex="-1">caniuse <a class="header-anchor" href="#caniuse" aria-hidden="true">#</a></h2><p>\u67E5\u627Ecss\u517C\u5BB9\u6027</p><p><a href="https://caniuse.com/" target="_blank" rel="noreferrer">caniuse.com</a></p>',27),r=[s];function o(c,h,d,n,p,u){return i(),a("div",null,r)}const f=e(t,[["render",o]]);export{b as __pageData,f as default};