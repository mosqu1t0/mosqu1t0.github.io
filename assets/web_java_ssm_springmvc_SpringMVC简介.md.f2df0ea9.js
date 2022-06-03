import{_ as r,c as e,o as a,a as i}from"./app.8633275c.js";const _='{"title":"SpringMVC\u7B80\u4ECB","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EC0\u4E48\u662FMVC","slug":"\u4EC0\u4E48\u662Fmvc"},{"level":2,"title":"\u4EC0\u4E48\u662FSpringMVC","slug":"\u4EC0\u4E48\u662Fspringmvc"},{"level":2,"title":"SpringMVC\u7684\u7279\u70B9","slug":"springmvc\u7684\u7279\u70B9"}],"relativePath":"web/java/ssm/springmvc/SpringMVC\u7B80\u4ECB.md","lastUpdated":1654252677000}',l={},t=i('<h1 id="springmvc\u7B80\u4ECB" tabindex="-1">SpringMVC\u7B80\u4ECB <a class="header-anchor" href="#springmvc\u7B80\u4ECB" aria-hidden="true">#</a></h1><h2 id="\u4EC0\u4E48\u662Fmvc" tabindex="-1">\u4EC0\u4E48\u662FMVC <a class="header-anchor" href="#\u4EC0\u4E48\u662Fmvc" aria-hidden="true">#</a></h2><p>MVC\u662F\u4E00\u79CD\u8F6F\u4EF6\u67B6\u6784\u601D\u60F3\uFF0C\u5C06\u8F6F\u4EF6\u6309\u7167\u6A21\u578B\u3001\u89C6\u56FE\u3001\u63A7\u5236\u5668\u6765\u5212\u5206</p><p>M: Model\uFF0C\u6A21\u578B\u5C42\uFF0C\u6307\u5DE5\u7A0B\u6587\u4EF6\u4E2D\u7684JavaBean\uFF0C\u4F5C\u7528\u662F\u5904\u7406\u6570\u636E</p><p>JavaBean\u5206\u4E3A\u4E24\u7C7B:</p><ul><li>\u4E00\u7C7B\u79F0\u4E3A\u5B9E\u4F53\u7C7BBean\uFF1A\u4E13\u95E8\u5B58\u50A8\u4E1A\u52A1\u6570\u636E\u7684\uFF0C\u5982Student\u3001User\u7B49</li><li>\u4E00\u7C7B\u79F0\u4E3A\u4E1A\u52A1\u5904\u7406Bean\uFF1A\u6307 Service \u6216 Dao \u5BF9\u8C61\uFF0C\u4E13\u95E8\u7528\u4E8E\u5904\u7406\u4E1A\u52A1\u903B\u8F91\u548C\u6570\u636E\u8BBF\u95EE</li></ul><p>V: View\uFF0C\u89C6\u56FE\u5C42\uFF0C\u6307\u5DE5\u7A0B\u4E2D\u7684html\u6216jsp\u7B49\u9875\u9762\uFF0C\u4F5C\u7528\u662F\u4E0E\u7528\u6237\u8FDB\u884C\u4EA4\u4E92\uFF0C\u5C55\u793A\u6570\u636E</p><p>C\uFF1AController\uFF0C\u63A7\u5236\u5C42\uFF0C\u6307\u5DE5\u7A0B\u4E2D\u7684servlet\uFF0C\u4F5C\u7528\u662F\u63A5\u53D7\u8BF7\u6C42\u548C\u54CD\u5E94\u6D4F\u89C8\u5668</p><p>MVC\u7684\u5DE5\u4F5C\u6D41\u7A0B: \u7528\u6237\u901A\u8FC7\u89C6\u56FE\u5C42\u53D1\u9001\u8BF7\u6C42\u5230\u670D\u52A1\u5668\uFF0C\u5728\u670D\u52A1\u5668\u4E2D\u8BF7\u6C42\u88ABController\u63A5\u6536\uFF0CController\u8C03\u7528\u76F8\u5E94\u7684Model\u5C42\u5904\u7406\u8BF7\u6C42\uFF0C\u5904\u7406\u5B8C\u6BD5\u5C06\u7ED3\u679C\u8FD4\u56DE\u5230Controller\uFF0CController\u518D\u6839\u636E\u8BF7\u6C42\u5904\u7406\u7684\u7ED3\u679C\u627E\u5230\u76F8\u5E94\u7684View\u89C6\u56FE\uFF0C\u6E32\u67D3\u6570\u636E\u540E\u6700\u7EC8\u54CD\u5E94\u7ED9\u6D4F\u89C8\u5668</p><h2 id="\u4EC0\u4E48\u662Fspringmvc" tabindex="-1">\u4EC0\u4E48\u662FSpringMVC <a class="header-anchor" href="#\u4EC0\u4E48\u662Fspringmvc" aria-hidden="true">#</a></h2><p>SpringMVC \u662F Spring \u7684\u4E00\u4E2A\u540E\u5E8F\u4EA7\u54C1\uFF0C\u662FSpring\u7684\u4E00\u4E2A\u5B50\u9879\u76EE</p><p>SpringMVC \u662F Spring \u4E3A\u8868\u8FF0\u5C42\u5F00\u53D1\u63D0\u4F9B\u7684\u4E00\u6574\u5957\u5B8C\u5907\u7684\u89E3\u51B3\u65B9\u6848\u3002\u5728\u8868\u8FF0\u5C42\u6846\u67B6\u5386\u7ECFStrust\u3001WebWork\u3001Strust2\u7B49\u8BF8\u591A\u4EA7\u54C1\u7684\u5386\u4EE3\u66F4\u8FED\u540E\uFF0C\u76EE\u524D\u4E1A\u754C\u666E\u904D\u9009\u62E9\u4E86SpringMVC\u4F5C\u4E3AJava EE \u9879\u76EE\u8868\u8FF0\u5C42\u5F00\u53D1\u7684<mark>\u9996\u9009\u65B9\u6848</mark></p><div class="info custom-block"><p class="custom-block-title">\u6CE8</p><p>\u4E09\u5C42\u67B6\u6784\u5206\u4E3A\u8868\u8FF0\u5C42(\u6216\u8868\u793A\u5C42)\u3001\u4E1A\u52A1\u903B\u8F91\u5C42\u3001\u6570\u636E\u8BBF\u95EE\u5C42\uFF0C\u8868\u8FF0\u5C42\u8868\u793A\u524D\u53F0\u9875\u9762\u548C\u540E\u53F0servlet</p></div><h2 id="springmvc\u7684\u7279\u70B9" tabindex="-1">SpringMVC\u7684\u7279\u70B9 <a class="header-anchor" href="#springmvc\u7684\u7279\u70B9" aria-hidden="true">#</a></h2><ul><li><mark>Spring \u5BB6\u65CF\u539F\u751F\u4EA7\u54C1</mark>\uFF0C\u4E0EIOC\u5BB9\u5668\u7B49\u57FA\u7840\u8BBE\u65BD\u65E0\u7F1D\u5BF9\u63A5</li><li>\u57FA\u4E8E\u539F\u751F\u7684Servlet\uFF0C\u901A\u8FC7\u4E86\u529F\u80FD\u5F3A\u5927\u7684<mark>\u524D\u7AEF\u63A7\u5236\u5668DispatcherServlet</mark>\uFF0C\u5BF9\u8BF7\u6C42\u548C\u54CD\u5E94\u8FDB\u884C\u7EDF\u4E00\u5904\u7406</li><li>\u8868\u8FF0\u5C42\u5404\u7EC6\u5206\u9886\u57DF\u9700\u8981\u89E3\u51B3\u7684\u95EE\u9898<mark>\u5168\u65B9\u4F4D\u8986\u76D6</mark>\uFF0C\u63D0\u4F9B<mark>\u5168\u9762\u89E3\u51B3\u65B9\u6848</mark></li><li><mark>\u4EE3\u7801\u6E05\u65B0\u7B80\u6D01</mark>\uFF0C\u5927\u5E45\u5EA6\u63D0\u5347\u5F00\u53D1\u6548\u7387</li><li>\u5185\u90E8\u7EC4\u4EF6\u5316\u7A0B\u5EA6\u9AD8\uFF0C\u53EF\u63D2\u62D4\u5F0F\u7EC4\u4EF6<mark>\u5373\u63D2\u5373\u7528</mark>\uFF0C\u60F3\u8981\u4EC0\u4E48\u529F\u80FD\u914D\u7F6E\u76F8\u5E94\u7EC4\u4EF6\u5373\u53EF</li><li><mark>\u6027\u80FD\u5353\u8457</mark>\uFF0C\u5C24\u5176\u9002\u5408\u73B0\u4EE3\u5927\u578B\u3001\u8D85\u5927\u578B\u4E92\u8054\u7F51\u9879\u76EE\u8981\u6C42</li></ul>',15),n=[t];function p(s,c,o,d,m,h){return a(),e("div",null,n)}var g=r(l,[["render",p]]);export{_ as __pageData,g as default};
