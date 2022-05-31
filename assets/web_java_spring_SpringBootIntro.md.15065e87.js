import{_ as n,c as a,o as s,a as t}from"./app.613f37bf.js";const m='{"title":"SpringBootIntro","description":"","frontmatter":{"title":"SpringBootIntro","date":"2022-04-28T11:31:04.000Z","permalink":"/pages/121422/","categories":["language","java","Spring"],"tags":[null]},"headers":[{"level":2,"title":"Install","slug":"install"},{"level":3,"title":"System Requirements","slug":"system-requirements"},{"level":2,"title":"Hello World","slug":"hello-world"},{"level":3,"title":"1. \u65B0\u5EFAmaven\u5DE5\u7A0B","slug":"_1-\u65B0\u5EFAmaven\u5DE5\u7A0B"},{"level":3,"title":"\u914D\u7F6EPOM","slug":"\u914D\u7F6Epom"},{"level":2,"title":"\u6D4B\u8BD5\u7A0B\u5E8F","slug":"\u6D4B\u8BD5\u7A0B\u5E8F"},{"level":2,"title":"\u7B80\u5316\u914D\u7F6E","slug":"\u7B80\u5316\u914D\u7F6E"},{"level":2,"title":"\u7B80\u5316\u90E8\u7F72","slug":"\u7B80\u5316\u90E8\u7F72"}],"relativePath":"web/java/spring/SpringBootIntro.md","lastUpdated":1654002262000}',p={},o=t(`<h1 id="springboot-intro" tabindex="-1">SpringBoot Intro <a class="header-anchor" href="#springboot-intro" aria-hidden="true">#</a></h1><p>SpringBoot \u662F\u96C6\u6210\u4E86Spring \u7B49\u7B49\u6846\u67B6\u548C\u6280\u672F\u6808\u7684\u542F\u52A8\u6846\u67B6\uFF0C\u5B83\u53EA\u9700\u8981\u914D\u7F6E\u5C11\u91CF\u7684Spring configuration, \u5C31\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u5F00\u53D1\u51FA\u72EC\u7ACB\u7684, \u9AD8\u8D28\u91CF\u7684, \u57FA\u4E8ESpring \u7684\u5E94\u7528, \u5E76\u4E14\u53EF\u4EE5\u628A\u5E94\u7528\u6253\u5305\u6210jar \u6216\u8005\u4F20\u7EDF\u7684war</p><p>\u6700\u559C\u6B22\u7684<a href="https://docs.spring.io/spring-boot/docs/current/reference/html/index.html" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u6587\u6863</a></p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-hidden="true">#</a></h2><h3 id="system-requirements" tabindex="-1">System Requirements <a class="header-anchor" href="#system-requirements" aria-hidden="true">#</a></h3><p>SpringBoot Vesion 2.6.7</p><p><strong>Base</strong>: Java 8+</p><p><strong>Build</strong>:</p><table><thead><tr><th>Tools</th><th>Vesion</th></tr></thead><tbody><tr><td>Maven</td><td>3.5+</td></tr><tr><td>Gradle</td><td>6.8.x, 6.9.x, 7.x</td></tr></tbody></table><h2 id="hello-world" tabindex="-1">Hello World <a class="header-anchor" href="#hello-world" aria-hidden="true">#</a></h2><h3 id="_1-\u65B0\u5EFAmaven\u5DE5\u7A0B" tabindex="-1">1. \u65B0\u5EFAmaven\u5DE5\u7A0B <a class="header-anchor" href="#_1-\u65B0\u5EFAmaven\u5DE5\u7A0B" aria-hidden="true">#</a></h3><p>maven \u6CA1\u5B66\u8FC7</p><h4 id="pre" tabindex="-1">pre <a class="header-anchor" href="#pre" aria-hidden="true">#</a></h4><p>\u53EF\u4EE5\u5728\u603Bconfig\u6587\u4EF6\u91CC\u914D\u5236\u955C\u50CF, \u548C\u9ED8\u8BA4\u7684jdk\u7F16\u8BD1\u7248\u672C</p><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrors</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirror</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>nexus-aliyun<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>central<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>Nexus aliyun<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://maven.aliyun.com/nexus/content/groups/public<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirror</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrors</span><span class="token punctuation">&gt;</span></span>
 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profiles</span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profile</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>jdk-1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activation</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activeByDefault</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activeByDefault</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>jdk</span><span class="token punctuation">&gt;</span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>jdk</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activation</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.source</span><span class="token punctuation">&gt;</span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.source</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.target</span><span class="token punctuation">&gt;</span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.target</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.compilerVersion</span><span class="token punctuation">&gt;</span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.compilerVersion</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profile</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profiles</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u914D\u7F6Epom" tabindex="-1">\u914D\u7F6EPOM <a class="header-anchor" href="#\u914D\u7F6Epom" aria-hidden="true">#</a></h3><p>\u5728\u65B0\u5EFA\u7684maven\u5DE5\u7A0BPOM\u91CC, \u52A0\u5165SpringBoot starter</p><div class="language-xml"><pre><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>myproject<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.0.1-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.6.7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- Additional lines to be added here... --&gt;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5F15\u5165\u4F9D\u8D56</p><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>run <code>mvn dependency:tree</code> or <code>Reload Maven Project</code></p><p>\u7136\u540E\u9700\u8981\u4F7F\u7528\u7684\u4F9D\u8D56\u5C31\u5168\u90E8\u88AB\u5BFC\u5165\u4E86</p><h4 id="_2-coding" tabindex="-1">2. Coding <a class="header-anchor" href="#_2-coding" aria-hidden="true">#</a></h4><p>\u57FA\u7840\u7684\u76EE\u5F55\u7ED3\u6784</p><p><img src="https://user-images.githubusercontent.com/94043894/165685304-c308c96f-0650-41a3-9842-49a267275264.png" alt=""></p><ol><li><code>src/main/java</code>\u4E0B\u653Ejava class\u6587\u4EF6</li><li><code>src/main/resources</code>\u4E0B\u653E\u914D\u7F6E\u6587\u4EF6</li><li><code>target</code>\u4E0B\u5B58\u653E\u751F\u6210\u6587\u4EF6, \u548C\u6253\u5305\u597D\u7684\u6587\u4EF6</li></ol><h5 id="main" tabindex="-1">Main <a class="header-anchor" href="#main" aria-hidden="true">#</a></h5><p>\u5728<code>MainApplication\u7C7B</code>\u91CC(\u540D\u5B57\u4E0D\u552F\u4E00)\uFF0C\u5B9E\u73B0SpringApplication \u7684main\u65B9\u6CD5</p><p>\u6574\u4E2A\u9879\u76EE\u7684\u90FD\u4ECE\u8FD9\u91CC\u5F00\u59CB\uFF0C\u5982\u679C\u662Fweb\uFF0C\u76F4\u63A5\u8FD0\u884Cmain\uFF0C\u5C31\u542F\u52A8\u4E86\uFF0C\u65E0\u9700\u914D\u7F6Etomcat</p><div class="language-java"><pre><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>spring</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>

<span class="token comment">/**
 * \u4E3B\u7A0B\u5E8F\u7C7B
 * SpringBootApplication:\u8FD9\u662F\u4E00\u4E2ASpringboot\u5E94\u7528
 */</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">MainApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="controller-\u7F16\u5199\u4E1A\u52A1" tabindex="-1">Controller(\u7F16\u5199\u4E1A\u52A1) <a class="header-anchor" href="#controller-\u7F16\u5199\u4E1A\u52A1" aria-hidden="true">#</a></h5><p>\u76F8\u5F53\u4E8EServlet\u4E2D\u5904\u7406\u8BF7\u6C42\u7684\u7C7B</p><div class="language-java"><pre><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Controller</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">ResponseBody</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>

<span class="token comment">//@ResponseBody</span>
<span class="token comment">//@Controller</span>
<span class="token comment">// @RestController\u8BE5\u6807\u7B7E\u53D6\u4EE3\u4E86\u4E0A\u9762\u4FE9</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloController</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">handle01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;Hello spring boot&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>@Controller \u548C @ResponseBody \u6CE8\u89E3, \u7B2C\u4E00\u4E2A\u6CE8\u89E3\u8868\u793A\u8FD9\u662F\u4E00\u4E2A\u63A7\u5236\u5668, \u7B2C\u4E8C\u4E2A\u6CE8\u89E3\u8868\u793A\u8FD9\u4E2A\u7C7B\u4E2D\u7684\u65B9\u6CD5\u6216\u67D0\u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u662FResponese body\u4FE1\u606F(\u4E00\u822C\u90FD\u5199\u5728\u7C7B\u5916), \u5728Spring Mvc\u4E2D\u53EF\u4EE5\u4F7F\u7528@RestContronller\u6765\u53D6\u5E26\u8FD9\u4E24\u4E2A\u6CE8\u89E3 <br> @RequestMapping \u8868\u793A\u628A\u8BF7\u6C42\u5730\u5740\u6620\u5C04\u5230\u8FD9\u4E2A\u65B9\u6CD5\u4E0A</p></blockquote><h2 id="\u6D4B\u8BD5\u7A0B\u5E8F" tabindex="-1">\u6D4B\u8BD5\u7A0B\u5E8F <a class="header-anchor" href="#\u6D4B\u8BD5\u7A0B\u5E8F" aria-hidden="true">#</a></h2><p>\u76F4\u63A5\u8FD0\u884Cmain\u65B9\u6CD5</p><h2 id="\u7B80\u5316\u914D\u7F6E" tabindex="-1">\u7B80\u5316\u914D\u7F6E <a class="header-anchor" href="#\u7B80\u5316\u914D\u7F6E" aria-hidden="true">#</a></h2><p>\u5728<code>resources/application.properties</code>\u4E2D\u914D\u7F6E\u670D\u52A1\u548C\u5E94\u7528\u7684\u5185\u5BB9, \u4F8B\uFF1A<br><code>server.port=8888</code></p><h2 id="\u7B80\u5316\u90E8\u7F72" tabindex="-1">\u7B80\u5316\u90E8\u7F72 <a class="header-anchor" href="#\u7B80\u5316\u90E8\u7F72" aria-hidden="true">#</a></h2><p>POM \u4E2D\u52A0\u5165</p><div class="language-java"><pre><code><span class="token generics"><span class="token punctuation">&lt;</span>build<span class="token punctuation">&gt;</span></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>plugins<span class="token punctuation">&gt;</span></span>
        <span class="token generics"><span class="token punctuation">&lt;</span>plugin<span class="token punctuation">&gt;</span></span>
            <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
            <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>maven<span class="token operator">-</span>plugin<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
            <span class="token generics"><span class="token punctuation">&lt;</span>version<span class="token punctuation">&gt;</span></span><span class="token number">2.6</span><span class="token number">.7</span><span class="token operator">&lt;</span><span class="token operator">/</span>version<span class="token operator">&gt;</span> <span class="token comment">//\u4E0Estarter-parent\u7684\u7248\u672C\u4E00\u6837</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>plugin<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>plugins<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>build<span class="token operator">&gt;</span>
</code></pre></div><blockquote><p>spring-boot-maven-plugin not found \u662F\u56E0\u4E3A\u6CA1\u6709\u7248\u672C\u53F7\uFF0C\u624B\u52A8\u52A0\u4E0A\u5C31\u53EF\u4EE5\u4E86</p></blockquote><p>\u6700\u540E\u5728maven--&gt;Lifecycle\u4E2D\u9009\u62E9\u6253\u5305\u65B9\u5F0F, \u518D<code>Run Maven Build</code>, \u521B\u5EFAjar\u5305, \u5728\u76EE\u6807\u670D\u52A1\u5668\u8FD0\u884C\u5373\u53EF</p><blockquote><p>\u4F7F\u7528 java -jar &#39;/path/to/xxx.jar&#39; \u8FD0\u884Cjar</p></blockquote>`,44),e=[o];function c(l,u,i,r,k,g){return s(),a("div",null,e)}var h=n(p,[["render",c]]);export{m as __pageData,h as default};
