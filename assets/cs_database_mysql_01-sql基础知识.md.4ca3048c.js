import{_ as a,c as l,o as e,a as t}from"./app.378791d3.js";const _='{"title":"SQL & MYSQL","description":"","frontmatter":{},"headers":[{"level":2,"title":"SQL \u7684\u57FA\u672C\u4E66\u5199\u89C4\u5219","slug":"sql-\u7684\u57FA\u672C\u4E66\u5199\u89C4\u5219"},{"level":3,"title":"\u547D\u540D\u89C4\u5219","slug":"\u547D\u540D\u89C4\u5219"},{"level":2,"title":"SQl \u8BED\u53E5","slug":"sql-\u8BED\u53E5"},{"level":3,"title":"DDL \uFF08Data Definition Language, \u6570\u636E\u5B9A\u4E49\u8BED\u8A00\uFF09","slug":"ddl-\uFF08data-definition-language-\u6570\u636E\u5B9A\u4E49\u8BED\u8A00\uFF09"},{"level":3,"title":"DML \uFF08Data Manipulation Language, \u6570\u636E\u64CD\u63A7\u8BED\u8A00\uFF09","slug":"dml-\uFF08data-manipulation-language-\u6570\u636E\u64CD\u63A7\u8BED\u8A00\uFF09"},{"level":3,"title":"DCL\uFF08Data Control Language, \u6570\u636E\u63A7\u5236\u8BED\u8A00\uFF09","slug":"dcl\uFF08data-control-language-\u6570\u636E\u63A7\u5236\u8BED\u8A00\uFF09"}],"relativePath":"cs/database/mysql/01-sql\u57FA\u7840\u77E5\u8BC6.md","lastUpdated":1656993598000}',i={},d=t(`<h1 id="sql-mysql" tabindex="-1">SQL &amp; MYSQL <a class="header-anchor" href="#sql-mysql" aria-hidden="true">#</a></h1><table><thead><tr><th>\u540D\u79F0</th><th>\u63CF\u8FF0</th><th>\u7B80\u79F0</th></tr></thead><tbody><tr><td>\u6570\u636E\u5E93</td><td>\u50A8\u5B58\u6570\u636E\u7684\u4ED3\u5E93\uFF0C\u6570\u636E\u662F\u6709\u7EC4\u7EC7\u7684\u8FDB\u884C\u5B58\u50A8</td><td>DataBase(DB)</td></tr><tr><td>\u6570\u636E\u5E93\u7BA1\u7406\u7CFB\u7EDF</td><td>\u64CD\u4F5C\u548C\u7BA1\u7406\u6570\u636E\u5E93\u7684\u5927\u578B\u8F6F\u4EF6</td><td>DataBase Management System(DBMS)</td></tr><tr><td>SQL</td><td>\u64CD\u4F5C\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7684\u7F16\u7A0B\u8BED\u8A00\uFF0C\u5B9A\u4E49\u4E86\u4E00\u5957\u64CD\u4F5C\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7EDF\u4E00\u6807\u51C6</td><td>Structured Query Language(SQL)</td></tr></tbody></table><blockquote><p>\u5373\uFF1A\u6570\u636E\u5E93\u5B58\u653E\u6570\u636E\u4FE1\u606F\uFF0C\u6570\u636E\u5E93\u7BA1\u7406\u7CFB\u7EDF\uFF08Oracle, mysql \u7B49\uFF09\u7528\u4E8E\u7BA1\u7406\u6570\u636E\u5E93\uFF0C\u800C\u7A0B\u5E8F\u5458\u901A\u8FC7 sql \u8BED\u8A00\u4E0E DBMS \u7684\u534F\u52A9\uFF0C\u63A7\u5236\u6570\u636E\u5E93</p></blockquote><h2 id="sql-\u7684\u57FA\u672C\u4E66\u5199\u89C4\u5219" tabindex="-1">SQL \u7684\u57FA\u672C\u4E66\u5199\u89C4\u5219 <a class="header-anchor" href="#sql-\u7684\u57FA\u672C\u4E66\u5199\u89C4\u5219" aria-hidden="true">#</a></h2><ul><li>SQL \u8BED\u53E5\u4EE5\u5206\u53F7<code>;</code>\u7ED3\u5C3E</li><li>\u5173\u952E\u5B57\u4E0D\u533A\u5206\u5927\u5C0F\u5199</li><li>\u5B57\u7B26\u4E32\u548C\u65E5\u671F\u5E38\u6570\u9700\u8981\u4F7F\u7528\u5355\u5F15\u53F7<code>&#39;</code>\u6269\u8D77\u6765</li><li>\u6570\u5B57\u5E38\u6570\u65E0\u9700\u8981\u52A0\u5355\u5F15\u53F7\uFF08\u76F4\u63A5\u4E66\u5199\u6570\u5B57\u5373\u53EF\uFF09</li><li>\u5355\u8BCD\u4E4B\u95F4\u9700\u8981\u4F7F\u7528\u534A\u89D2\u7A7A\u683C\u6216\u8005\u6362\u884C\u7B26\u8FDB\u884C\u5206\u9694</li><li>\u6CE8\u91CA\uFF1A <ul><li>\u5355\u884C\u6CE8\u91CA\uFF1A<code>-- \u6CE8\u91CA\u5185\u5BB9 \u6216 #\u6CE8\u91CA\u5185\u5BB9\uFF08Mysql \u7279\u6709\uFF09</code></li><li>\u591A\u884C\u6CE8\u91CA\uFF1A<code>/*\u6CE8\u91CA\u5185\u5BB9*/</code></li></ul></li></ul><p>\u4F8B\uFF1A \u521B\u5EFA\u6570\u636E\u5E93</p><div class="language-sql line-numbers-mode"><pre><code><span class="token keyword">CREATE</span> DATEBASE shop<span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>database \u4E5F\u53EB schema , \u8868\u96C6\u7684\u610F\u601D\uFF08\u6A21\u578B\uFF09</p></div><h3 id="\u547D\u540D\u89C4\u5219" tabindex="-1">\u547D\u540D\u89C4\u5219 <a class="header-anchor" href="#\u547D\u540D\u89C4\u5219" aria-hidden="true">#</a></h3><p>\u6570\u636E\u5E93\u540D\u79F0\u3001\u8868\u540D\u548C\u5217\u540D\u7B49\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u4E09\u79CD\u5B57\u7B26</p><ul><li>\u534A\u89D2\u82F1\u6587\u5B57\u6BCD</li><li>\u534A\u89D2\u6570\u5B57</li><li>\u4E0B\u5212\u7EBF</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u540D\u79F0\u5FC5\u987B\u4EE5\u534A\u89D2\u82F1\u6587\u5B57\u6BCD\u4F5C\u4E3A\u5F00\u5934\uFF0C\u4E0D\u80FD\u91CD\u590D</p></div><h2 id="sql-\u8BED\u53E5" tabindex="-1">SQl \u8BED\u53E5 <a class="header-anchor" href="#sql-\u8BED\u53E5" aria-hidden="true">#</a></h2><h3 id="ddl-\uFF08data-definition-language-\u6570\u636E\u5B9A\u4E49\u8BED\u8A00\uFF09" tabindex="-1">DDL \uFF08Data Definition Language, \u6570\u636E\u5B9A\u4E49\u8BED\u8A00\uFF09 <a class="header-anchor" href="#ddl-\uFF08data-definition-language-\u6570\u636E\u5B9A\u4E49\u8BED\u8A00\uFF09" aria-hidden="true">#</a></h3><p>\u2003\u2003\u7528\u6765\u521B\u5EFA\u6216\u8005\u5220\u9664\u5B58\u50A8\u6570\u636E\u7528\u7684\u6570\u636E\u5E93\u4EE5\u53CA\u6570\u636E\u5E93\u4E2D\u7684\u8868 \u7B49\u5BF9\u8C61\u3002</p><ul><li>CREAT\uFF1A\u521B\u5EFA\u6570\u636E\u5E93\u548C\u8868\u5BF9\u8C61</li><li>DROP\uFF1A\u5220\u9664\u6570\u636E\u5E93\u548C\u8868\u7B49\u5BF9\u8C61</li><li>ALTER\uFF1A\u4FEE\u6539\u6570\u636E\u5E93\u548C\u8868\u7B49\u5BF9\u8C61\u7684\u7ED3\u6784</li></ul><h3 id="dml-\uFF08data-manipulation-language-\u6570\u636E\u64CD\u63A7\u8BED\u8A00\uFF09" tabindex="-1">DML \uFF08Data Manipulation Language, \u6570\u636E\u64CD\u63A7\u8BED\u8A00\uFF09 <a class="header-anchor" href="#dml-\uFF08data-manipulation-language-\u6570\u636E\u64CD\u63A7\u8BED\u8A00\uFF09" aria-hidden="true">#</a></h3><p>\u2003\u2003\u7528\u6765\u67E5\u8BE2\u6216\u8005\u53D8\u66F4\u8868\u4E2D\u7684\u8BB0\u5F55\uFF0C\u5B8C\u6210\u6570\u7684\u589E\u5220\u6539</p><ul><li>SELECT\uFF1A\u67E5\u8BE2\u8868\u4E2D\u7684\u6570\u636E</li><li>INSERT\uFF1A\u5411\u8868\u4E2D\u63D2\u5165\u65B0\u6570\u636E</li><li>UPDATE\uFF1A\u66F4\u65B0\u8868\u4E2D\u7684\u6570\u636E</li><li>DELETE\uFF1A\u5220\u9664\u8868\u4E2D\u7684\u6570\u636E</li></ul><h3 id="dcl\uFF08data-control-language-\u6570\u636E\u63A7\u5236\u8BED\u8A00\uFF09" tabindex="-1">DCL\uFF08Data Control Language, \u6570\u636E\u63A7\u5236\u8BED\u8A00\uFF09 <a class="header-anchor" href="#dcl\uFF08data-control-language-\u6570\u636E\u63A7\u5236\u8BED\u8A00\uFF09" aria-hidden="true">#</a></h3><p>\u2003\u2003\u7528\u6765\u786E\u8BA4\u6216\u53D6\u6D88\u5BF9\u6570\u636E\u5E93\u4E2D\u7684\u6570\u636E\u8FDB\u884C\u7684\u53D8\u66F4</p><ul><li>COMMIT\uFF1A\u786E\u8BA4\u5BF9\u6570\u636E\u5E93\u4E2D\u7684\u6570\u636E\u8FDB\u884C\u7684\u53D8\u66F4</li><li>ROLLBACK\uFF1A\u53D6\u6D88\u5BF9\u6570\u636E\u5E93\u4E2D\u7684\u6570\u636E\u8FDB\u884C\u7684\u53D8\u66F4</li><li>GRANT\uFF1A\u8D4B\u4E88\u7528\u6237\u64CD\u4F5C\u6743\u9650</li><li>REBOKE\uFF1A\u53D6\u6D88\u7528\u6237\u7684\u64CD\u4F5C\u6743\u9650</li></ul>`,22),n=[d];function s(r,o,c,u,h,p){return e(),l("div",null,n)}var m=a(i,[["render",s]]);export{_ as __pageData,m as default};
