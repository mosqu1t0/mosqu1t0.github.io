import{_ as n,c as a,o as s,a as t}from"./app.378791d3.js";const b='{"title":"\u642D\u5EFA MyBatis","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5F00\u53D1\u73AF\u5883","slug":"\u5F00\u53D1\u73AF\u5883"},{"level":2,"title":"\u521B\u5EFA maven \u5DE5\u7A0B","slug":"\u521B\u5EFA-maven-\u5DE5\u7A0B"},{"level":2,"title":"\u521B\u5EFA MyBatis \u7684\u6838\u5FC3\u914D\u7F6E\u6587\u4EF6","slug":"\u521B\u5EFA-mybatis-\u7684\u6838\u5FC3\u914D\u7F6E\u6587\u4EF6"},{"level":2,"title":"\u521B\u5EFA mapper \u63A5\u53E3","slug":"\u521B\u5EFA-mapper-\u63A5\u53E3"}],"relativePath":"web/java/ssm/mybatis/02-\u642D\u5EFAMyBatis.md","lastUpdated":1656991224000}',p={},e=t(`<h1 id="\u642D\u5EFA-mybatis" tabindex="-1">\u642D\u5EFA MyBatis <a class="header-anchor" href="#\u642D\u5EFA-mybatis" aria-hidden="true">#</a></h1><h2 id="\u5F00\u53D1\u73AF\u5883" tabindex="-1">\u5F00\u53D1\u73AF\u5883 <a class="header-anchor" href="#\u5F00\u53D1\u73AF\u5883" aria-hidden="true">#</a></h2><ul><li>IDE: idea 2022.1</li><li>\u6784\u5EFA\u5DE5\u5177\uFF1Amaven 3.8.1</li><li>MySQL \u7248\u672C\uFF1AMySQL 5.6</li><li>MyBatis \u7248\u672C\uFF1AMyBatis 3.5.10</li></ul><h2 id="\u521B\u5EFA-maven-\u5DE5\u7A0B" tabindex="-1">\u521B\u5EFA maven \u5DE5\u7A0B <a class="header-anchor" href="#\u521B\u5EFA-maven-\u5DE5\u7A0B" aria-hidden="true">#</a></h2><ul><li>\u6253\u5305\u65B9\u5F0F\uFF1Ajar</li><li>\u5F15\u5165\u4F9D\u8D56</li></ul><div class="language-xml line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- mybatis --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.mybatis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.5.10<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- junit \u6D4B\u8BD5 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>junit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>junit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>4.12<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- MySQL \u9A71\u52A8 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.1.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="\u521B\u5EFA-mybatis-\u7684\u6838\u5FC3\u914D\u7F6E\u6587\u4EF6" tabindex="-1">\u521B\u5EFA MyBatis \u7684\u6838\u5FC3\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#\u521B\u5EFA-mybatis-\u7684\u6838\u5FC3\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h2><div class="language-xml line-numbers-mode"><pre><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">configuration</span>
 <span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Config 3.0//EN&quot;</span>
 <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-config.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>environments</span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>development<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>environment</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>development<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transactionManager</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>JDBC<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dataSource</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>POOLED<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>driver<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${driver}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>url<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${url}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${username}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${password}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dataSource</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>environment</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>environments</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mappers</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">resource</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org/mybatis/example/BlogMapper.xml<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mappers</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>\u4E60\u60EF\u4E0A\u547D\u540D\u4E3A<code>mybatis-config.xml</code>\uFF0C\u8FD9\u4E2A\u6587\u4EF6\u540D\u4EC5\u4EC5\u53EA\u662F\u5EFA\u8BAE\uFF0C\u5E76\u975E\u5F3A\u5236\u8981\u6C42\u3002\u5C06\u6765\u6574\u5408 Spring \u4E4B\u540E\uFF0C\u8FD9\u4E2A\u914D\u7F6E\u6587\u4EF6\u53EF\u4EE5\u7701\u7565\uFF0C\u6240\u4EE5\u64CD\u4F5C\u65F6\u53EF\u4EE5\u76F4\u63A5\u590D\u5236\u3001\u7C98\u8D34\u3002</p><p>\u6838\u5FC3\u914D\u7F6E\u6587\u4EF6\u4E3B\u8981\u7528\u4E8E\u914D\u7F6E\u8FDE\u63A5\u6570\u636E\u5E93\u7684\u73AF\u5883\u4EE5\u53CA MyBatis \u7684\u5168\u5C40\u914D\u7F6E\u4FE1\u606F</p><p>\u6838\u5FC3\u914D\u7F6E\u6587\u4EF6\u5B58\u653E\u7684\u4F4D\u7F6E\u662F<code>src/main/resources</code>\u76EE\u5F55\u4E0B</p></div><h2 id="\u521B\u5EFA-mapper-\u63A5\u53E3" tabindex="-1">\u521B\u5EFA mapper \u63A5\u53E3 <a class="header-anchor" href="#\u521B\u5EFA-mapper-\u63A5\u53E3" aria-hidden="true">#</a></h2><div class="language-java line-numbers-mode"><pre><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>
	<span class="token comment">/**
	* \u6DFB\u52A0\u7528\u6237\u4FE1\u606F
	*/</span>
	<span class="token keyword">int</span> <span class="token function">insertUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,11),o=[e];function c(l,u,i,r,k,g){return s(),a("div",null,o)}var d=n(p,[["render",c]]);export{b as __pageData,d as default};
