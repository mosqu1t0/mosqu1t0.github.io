import{_ as s,c as a,o as p,a as n,b as t}from"./app.8633275c.js";const _='{"title":"Spring-Framework","description":"","frontmatter":{},"headers":[{"level":2,"title":"Spring \u662F\u4EC0\u4E48","slug":"spring-\u662F\u4EC0\u4E48"},{"level":2,"title":"Spring \u7279\u70B9","slug":"spring-\u7279\u70B9"},{"level":2,"title":"\u5165\u95E8\u6848\u4F8B\uFF1A","slug":"\u5165\u95E8\u6848\u4F8B\uFF1A"}],"relativePath":"web/java/ssm/spring/01-Spring\u7B80\u4ECB.md","lastUpdated":1654252677000}',e={},o=n('<h1 id="spring-framework" tabindex="-1">Spring-Framework <a class="header-anchor" href="#spring-framework" aria-hidden="true">#</a></h1><p>\u8FD9\u91CC\u4E3B\u8981\u4EE5 Spring 5 \u4E3A\u4F8B</p><h2 id="spring-\u662F\u4EC0\u4E48" tabindex="-1">Spring \u662F\u4EC0\u4E48 <a class="header-anchor" href="#spring-\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><ol><li>Spring \u662F\u4E00\u4E2A\u8F7B\u91CF\u7EA7\u7684\u5F00\u6E90 JavaEE \u6846\u67B6</li><li>Spring \u53EF\u4EE5\u89E3\u51B3\u4F01\u4E1A\u5E94\u7528\u5F00\u53D1\u7684\u590D\u6742\u6027</li><li>Spring \u6709\u4E24\u4E2A\u6838\u5FC3\u90E8\u5206\uFF1AIOC \u548C Aop <ul><li>IOC: \u63A7\u5236\u53CD\u8F6C\uFF0C\u628A\u521B\u5EFA\u5BF9\u8C61\u8FC7\u7A0B\u4EA4\u7ED9 spring \u8FDB\u884C</li><li>Aop: \u9762\u5411\u5207\u9762\uFF0C\u4E0D\u4FEE\u6539\u6E90\u4EE3\u7801\u8FDB\u884C\u529F\u80FD\u589E\u5F3A</li></ul></li></ol><h2 id="spring-\u7279\u70B9" tabindex="-1">Spring \u7279\u70B9 <a class="header-anchor" href="#spring-\u7279\u70B9" aria-hidden="true">#</a></h2><ol><li>\u65B9\u4FBF\u89E3\u8026\uFF0C\u7B80\u5316\u5F00\u53D1</li><li>Aop \u7F16\u7A0B\u7684\u652F\u6301</li><li>\u65B9\u4FBF\u8FDB\u884C\u4E8B\u52A1\u64CD\u4F5C</li><li>\u65B9\u4FBF\u7A0B\u5E8F\u6D4B\u8BD5</li><li>\u65B9\u4FBF\u4E0E\u5176\u4ED6\u6846\u67B6\u6574\u5408</li><li>\u964D\u4F4E API \u5F00\u53D1\u96BE\u5EA6</li><li>\u6E90\u7801\u7684\u8BBE\u8BA1\u663E\u793A\u51FA Java \u9020\u8BE3\u9AD8\u6DF1\u7684\u80FD\u529B</li></ol><h2 id="\u5165\u95E8\u6848\u4F8B\uFF1A" tabindex="-1">\u5165\u95E8\u6848\u4F8B\uFF1A <a class="header-anchor" href="#\u5165\u95E8\u6848\u4F8B\uFF1A" aria-hidden="true">#</a></h2><ol><li><p>\u4E0B\u8F7D Spring5</p><ul><li><a href="https://repo.spring.io/artifactory/release/org/springframework/spring/" target="_blank" rel="noopener noreferrer">https://repo.spring.io/artifactory/release/org/springframework/spring/</a></li></ul></li><li><p>\u521B\u5EFA\u5DE5\u7A0B</p></li><li><p>\u5BFC\u5165 jar \u5305</p><ul><li>Jar \u5305\u7684\u7ED3\u6784\uFF1A</li></ul></li></ol>',8),l=t("iframe",{frameborder:"0",style:{width:"100%",height:"433px"},src:"https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=SpringJarSort.drawio#Uhttps%3A%2F%2Fraw.githubusercontent.com%2Fmosqu1t0%2FSources%2Fmaster%2Fmap%2FSpringJarSort.drawio"},null,-1),c=n(`<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u4E00\u822C\u5730\u53EA\u9700\u8981\u5BFC\u5165\u57FA\u7840\u7684 Beans, Core, Context, Expression \u7B49\u5305\u5C31\u8DB3\u591F\u4E86</p></div><p>:::warn \u5982\u679C\u62A5\u9519\uFF0C\u53EF\u80FD\u662F\u6CA1\u6709\u5BFC\u5165\u65E5\u5FD7\u5305<code>commons-logging-xx.jar</code>\u5BFC\u81F4\u7684 :::</p><ol start="4"><li><p>\u521B\u5EFA\u666E\u901A\u7C7B\uFF0C\u5728\u8FD9\u4E2A\u7C7B\u521B\u5EFA\u666E\u901A\u65B9\u6CD5</p></li><li><p>\u521B\u5EFA Spring \u914D\u7F6E\u6587\u4EF6\uFF0C\u5728\u914D\u7F6E\u6587\u4EF6\u914D\u7F6E\u521B\u5EFA\u7684\u5BF9\u8C61</p></li></ol><div class="language-xml line-numbers-mode"><pre><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.demo.test.testm.User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>:::warn \u5728\u65B0\u7248\u672C\u7684 spring \u4E2D\uFF0C\u914D\u7F6E\u6587\u4EF6\u5E94\u8BE5\u653E\u5728<code>src/main/resources</code>\u4E0B\uFF0C\u5426\u5219\u627E\u4E0D\u5230 :::</p><ol start="6"><li>\u4EE3\u7801\u7F16\u5199</li></ol><div class="language-java line-numbers-mode"><pre><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>test</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>test<span class="token punctuation">.</span>testm<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">ApplicationContext</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>support<span class="token punctuation">.</span></span><span class="token class-name">ClassPathXmlApplicationContext</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestUser</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">ApplicationContext</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassPathXmlApplicationContext</span><span class="token punctuation">(</span><span class="token string">&quot;bean1.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">User</span> user <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ol start="7"><li>\u4EE3\u7801\u8FD0\u884C\u6210\u529F</li></ol>`,8),i=[o,l,c];function r(u,k,m,g,d,b){return p(),a("div",null,i)}var w=s(e,[["render",r]]);export{_ as __pageData,w as default};
