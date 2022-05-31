import{_ as l,c as n,o as e,a as i}from"./app.613f37bf.js";const u='{"title":"\u7B97\u6CD5\u9898\u57FA\u7840\u77E5\u8BC6","description":"","frontmatter":{"title":"\u7B97\u6CD5\u9898\u57FA\u7840\u77E5\u8BC6","tags":["Algorithm"]},"headers":[{"level":2,"title":"\u65F6\u95F4\u590D\u6742\u5EA6","slug":"\u65F6\u95F4\u590D\u6742\u5EA6"},{"level":2,"title":"\u7A7A\u95F4\u590D\u6742\u5EA6","slug":"\u7A7A\u95F4\u590D\u6742\u5EA6"},{"level":2,"title":"\u8303\u56F4\u77E5\u8BC6","slug":"\u8303\u56F4\u77E5\u8BC6"},{"level":2,"title":"\u95EE\u9898\u7B97\u6CD5\u4F18\u5148\u5EA6","slug":"\u95EE\u9898\u7B97\u6CD5\u4F18\u5148\u5EA6"},{"level":2,"title":"yxc \u7684 \u5206\u4EAB","slug":"yxc-\u7684-\u5206\u4EAB"}],"relativePath":"algorithm/index.md","lastUpdated":1654002262000}',t={},a=i('<h1 id="\u5173\u4E8E\u7B97\u6CD5\u9898\u7684\u4E00\u4E9B\u57FA\u7840\u7B14\u8BB0" tabindex="-1">\u5173\u4E8E\u7B97\u6CD5\u9898\u7684\u4E00\u4E9B\u57FA\u7840\u7B14\u8BB0 <a class="header-anchor" href="#\u5173\u4E8E\u7B97\u6CD5\u9898\u7684\u4E00\u4E9B\u57FA\u7840\u7B14\u8BB0" aria-hidden="true">#</a></h1><h2 id="\u65F6\u95F4\u590D\u6742\u5EA6" tabindex="-1">\u65F6\u95F4\u590D\u6742\u5EA6 <a class="header-anchor" href="#\u65F6\u95F4\u590D\u6742\u5EA6" aria-hidden="true">#</a></h2><p>\u2003\u2003\u5728\u8BA1\u7B97\u673A\u79D1\u5B66\u4E2D\uFF0C\u7B97\u6CD5\u7684<mark>\u65F6\u95F4\u590D\u6742\u5EA6</mark>\uFF08Time complexity\uFF09\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u5B83\u5B9A\u6027\u63CF\u8FF0\u8BE5\u7B97\u6CD5\u7684\u8FD0\u884C\u65F6\u95F4\u3002\u8FD9\u662F\u4E00\u4E2A\u4EE3\u8868\u7B97\u6CD5\u8F93\u5165\u503C\u7684\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\u7684\u51FD\u6570\u3002\u65F6\u95F4\u590D\u6742\u5EA6\u5E38\u7528\u5927O\u7B26\u53F7\u8868\u8FF0\uFF0C\u4E0D\u5305\u62EC\u8FD9\u4E2A\u51FD\u6570\u7684\u4F4E\u9636\u9879\u548C\u9996\u9879\u7CFB\u6570\u3002</p><p>\u2003\u2003\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u65F6\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u53EF\u88AB\u79F0\u4E3A\u662F\u6E10\u8FD1\u7684\uFF0C\u4EA6\u5373\u8003\u5BDF\u8F93\u5165\u503C\u5927\u5C0F\u8D8B\u8FD1\u65E0\u7A77\u65F6\u7684\u60C5\u51B5</p><p>\u2003\u2003\u4F8B\u5982\uFF0C\u5982\u679C\u4E00\u4E2A\u7B97\u6CD5\u5BF9\u4E8E\u4EFB\u4F55\u5927\u5C0F\u4E3A n \uFF08\u5FC5\u987B\u6BD4 n0 \u5927\uFF09\u7684\u8F93\u5165\uFF0C\u5B83\u81F3\u591A\u9700\u8981 5n3 + 3n \u7684\u65F6\u95F4\u8FD0\u884C\u5B8C\u6BD5\uFF0C\u90A3\u4E48\u5B83\u7684\u6E10\u8FD1\u65F6\u95F4\u590D\u6742\u5EA6\u662F O(n3)\u3002</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>\u4E3A\u4E86\u8BA1\u7B97\u65F6\u95F4\u590D\u6742\u5EA6\uFF0C\u6211\u4EEC\u901A\u5E38\u4F1A\u4F30\u8BA1\u7B97\u6CD5\u7684\u64CD\u4F5C\u5355\u5143\u6570\u91CF\uFF0C\u6BCF\u4E2A\u5355\u5143\u6267\u884C\u7684\u65F6\u95F4\u90FD\u662F\u76F8\u540C\u7684\u3002\u56E0\u6B64\uFF0C\u603B\u8FD0\u884C\u65F6\u95F4\u548C\u7B97\u6CD5\u7684\u64CD\u4F5C\u5355\u5143\u6570\u91CF\u6700\u591A\u76F8\u5DEE\u4E00\u4E2A\u5E38\u91CF\u7CFB\u6570\u3002</p></div><h2 id="\u7A7A\u95F4\u590D\u6742\u5EA6" tabindex="-1">\u7A7A\u95F4\u590D\u6742\u5EA6 <a class="header-anchor" href="#\u7A7A\u95F4\u590D\u6742\u5EA6" aria-hidden="true">#</a></h2><p>\u2003\u2003\u65E2\u7136\u65F6\u95F4\u590D\u6742\u5EA6\u4E0D\u662F\u7528\u6765\u8BA1\u7B97\u7A0B\u5E8F\u5177\u4F53\u8017\u65F6\u7684\uFF0C\u90A3\u4E48\u6211\u4E5F\u5E94\u8BE5\u660E\u767D\uFF0C\u7A7A\u95F4\u590D\u6742\u5EA6\u4E5F\u4E0D\u662F\u7528\u6765\u8BA1\u7B97\u7A0B\u5E8F\u5B9E\u9645\u5360\u7528\u7684\u7A7A\u95F4\u7684\u3002</p><p>\u2003\u2003\u7A7A\u95F4\u590D\u6742\u5EA6\u662F\u5BF9\u4E00\u4E2A\u7B97\u6CD5\u5728\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u4E34\u65F6\u5360\u7528\u5B58\u50A8\u7A7A\u95F4\u5927\u5C0F\u7684\u4E00\u4E2A\u91CF\u5EA6\uFF0C\u540C\u6837\u53CD\u6620\u7684\u662F\u4E00\u4E2A\u8D8B\u52BF\uFF0C\u6211\u4EEC\u7528 S(n) \u6765\u5B9A\u4E49\u3002</p><p>\u2003\u2003\u7A7A\u95F4\u590D\u6742\u5EA6\u6BD4\u8F83\u5E38\u7528\u7684\u6709\uFF1AO(1)\u3001O(n)\u3001O(n\xB2)</p><h2 id="\u8303\u56F4\u77E5\u8BC6" tabindex="-1">\u8303\u56F4\u77E5\u8BC6 <a class="header-anchor" href="#\u8303\u56F4\u77E5\u8BC6" aria-hidden="true">#</a></h2><ol><li>c++ 1s\u5185\u53EF\u505A1e7\u6B21\u8BA1\u7B97</li><li>int \u8303\u56F4 <ul><li>signed[int] -2147483648~+2147483648 \uFF082e9\uFF09</li><li>unsigned[int] 0~4294967295 (4e9)</li><li>Long [int] -2147483648~+2147483648</li><li>Long Long int -9223372036854775808~9223372036854775807 (9e18)</li><li>Unsigned long long 18 446 744 073 709 551 615 (18e18)</li></ul></li><li>\u5185\u5B58\u8303\u56F4 <ul><li>64MB \u7684 \u5185\u5B58\u5927\u6982\u53EF\u4EE5\u5F00 <code>64 * 2 ^ 20 / 4 = 1.6 * 10^7 \u4E2A int</code></li></ul></li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u7F16\u8BD1\u5668\u7684\u4F18\u5316\u4E2D\uFF0C\u53EA\u5F00\u53D8\u91CF\u4E0D\u4F7F\u7528\uFF0C\u4E0D\u4F1A\u5360\u7528\u5185\u5B58</p></div><h2 id="\u95EE\u9898\u7B97\u6CD5\u4F18\u5148\u5EA6" tabindex="-1">\u95EE\u9898\u7B97\u6CD5\u4F18\u5148\u5EA6 <a class="header-anchor" href="#\u95EE\u9898\u7B97\u6CD5\u4F18\u5148\u5EA6" aria-hidden="true">#</a></h2><p>\u6700\u5927\u6700\u5C0F\u95EE\u9898 \uFF1A \u4E8C\u5206 &gt; dfs(\u66B4\u529B\uFF09&gt; dp &gt; \u8D2A\u5FC3</p><h2 id="yxc-\u7684-\u5206\u4EAB" tabindex="-1">yxc \u7684 \u5206\u4EAB <a class="header-anchor" href="#yxc-\u7684-\u5206\u4EAB" aria-hidden="true">#</a></h2><p>\u4E00\u822CACM\u6216\u8005\u7B14\u8BD5\u9898\u7684\u65F6\u95F4\u9650\u5236\u662F1\u79D2\u62162\u79D2\u3002 \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0CC++\u4EE3\u7801\u4E2D\u7684\u64CD\u4F5C\u6B21\u6570\u63A7\u5236\u5728 107\u223C108107\u223C108 \u4E3A\u6700\u4F73\u3002</p><p>\u4E0B\u9762\u7ED9\u51FA\u5728\u4E0D\u540C\u6570\u636E\u8303\u56F4\u4E0B\uFF0C\u4EE3\u7801\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u548C\u7B97\u6CD5\u8BE5\u5982\u4F55\u9009\u62E9\uFF1A</p><ol><li><p>n\u226430, \u6307\u6570\u7EA7\u522B, dfs+\u526A\u679D\uFF0C\u72B6\u6001\u538B\u7F29dp</p></li><li><p>n\u2264100 =&gt; O(n3)O(n3)\uFF0Cfloyd\uFF0Cdp\uFF0C\u9AD8\u65AF\u6D88\u5143</p></li><li><p>n\u22641000 =&gt; O(n2)O(n2)\uFF0CO(n2logn)O(n2logn)\uFF0Cdp\uFF0C\u4E8C\u5206\uFF0C\u6734\u7D20\u7248Dijkstra\u3001\u6734\u7D20\u7248Prim\u3001Bellman-Ford</p></li><li><p>n\u226410000 =&gt; O(n\u2217n\u221A)O(n\u2217n)\uFF0C\u5757\u72B6\u94FE\u88682\u5206\u5757\u3001\u83AB\u961F</p></li><li><p>n\u2264100000 =&gt; O(nlogn)O(nlogn) =&gt; \u5404\u79CDsort\uFF0C\u7EBF\u6BB5\u6811\u3001\u6811\u72B6\u6570\u7EC4\u3001set/map\u3001heap\u3001\u62D3\u6251\u6392\u5E8F\u3001dijkstra+heap\u3001prim+heap\u3001Kruskal\u3001spfa\u3001\u6C42\u51F8\u5305\u3001\u6C42\u534A\u5E73\u9762\u4EA4\u3001\u4E8C\u5206\u3001CDQ\u5206\u6CBB\u3001\u6574\u4F53\u4E8C\u5206\u3001\u540E\u7F00\u6570\u7EC4\u3001\u6811\u94FE\u5256\u5206\u3001\u52A8\u6001\u6811</p></li><li><p>n\u22641000000n\u22641000000 =&gt; O(n)O(n), \u4EE5\u53CA\u5E38\u6570\u8F83\u5C0F\u7684 O(nlogn)O(nlogn) \u7B97\u6CD5 =&gt; \u5355\u8C03\u961F\u5217\u3001 hash\u3001\u53CC\u6307\u9488\u626B\u63CF\u3001\u5E76\u67E5\u96C6\uFF0Ckmp\u3001AC\u81EA\u52A8\u673A\uFF0C\u5E38\u6570\u6BD4\u8F83\u5C0F\u7684 O(nlogn)O(nlogn) \u7684\u505A\u6CD5\uFF1Asort\u3001\u6811\u72B6\u6570\u7EC4\u3001heap\u3001dijkstra\u3001spfa</p></li><li><p>n\u226410000000 =&gt; O(n)O(n)\uFF0C\u53CC\u6307\u9488\u626B\u63CF\u3001kmp\u3001AC\u81EA\u52A8\u673A\u3001\u7EBF\u6027\u7B5B\u7D20\u6570</p></li><li><p>n\u226410^9 =&gt; O(n\u221A)O(n)\uFF0C\u5224\u65AD\u8D28\u6570</p></li><li><p>n\u226410^18 =&gt; O(logn)O(logn)\uFF0C\u6700\u5927\u516C\u7EA6\u6570\uFF0C\u5FEB\u901F\u5E42\uFF0C\u6570\u4F4DDP</p></li><li><p>n\u226410^1000 =&gt; O((logn)2)O((logn)2)\uFF0C\u9AD8\u7CBE\u5EA6\u52A0\u51CF\u4E58\u9664</p></li><li><p>n\u226410^100000 =&gt; O(logk\xD7loglogk)\uFF0Ck\u8868\u793A\u4F4D\u6570O(logk\xD7loglogk)\uFF0Ck\u8868\u793A\u4F4D\u6570\uFF0C\u9AD8\u7CBE\u5EA6\u52A0\u51CF\u3001FFT/NTT</p></li></ol><blockquote><p>\u4F5C\u8005\uFF1Ayxc<br> \u94FE\u63A5\uFF1A<a href="https://www.acwing.com/blog/content/32/" target="_blank" rel="noopener noreferrer">https://www.acwing.com/blog/content/32/</a><br> \u6765\u6E90\uFF1AAcWing<br> \u8457\u9898\u4F5C\u6743\u5F52\u4F5C\u8005\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u4F5C\u8005\u83B7\u5F97\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p></blockquote>',20),o=[a];function p(r,s,d,c,g,h){return e(),n("div",null,o)}var _=l(t,[["render",p]]);export{u as __pageData,_ as default};
