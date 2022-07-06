import{_ as a,c as s,o as n,a as e}from"./app.b59f418d.js";const h='{"title":"DDL","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6570\u636E\u5E93","slug":"\u6570\u636E\u5E93"},{"level":3,"title":"\u67E5\u8BE2","slug":"\u67E5\u8BE2"},{"level":3,"title":"\u521B\u5EFA","slug":"\u521B\u5EFA"},{"level":3,"title":"\u5220\u9664","slug":"\u5220\u9664"},{"level":3,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":2,"title":"\u8868","slug":"\u8868"},{"level":3,"title":"\u67E5\u8BE2","slug":"\u67E5\u8BE2-1"},{"level":3,"title":"\u521B\u5EFA\u5B57\u6BB5","slug":"\u521B\u5EFA\u5B57\u6BB5"},{"level":3,"title":"\u5B57\u6BB5\u7C7B\u578B","slug":"\u5B57\u6BB5\u7C7B\u578B"},{"level":3,"title":"\u5220\u9664\u8868","slug":"\u5220\u9664\u8868"},{"level":3,"title":"\u66F4\u65B0\u8868","slug":"\u66F4\u65B0\u8868"},{"level":3,"title":"\u66F4\u6539\u8868\u540D","slug":"\u66F4\u6539\u8868\u540D"}],"relativePath":"web/database/mysql/02-DDL.md","lastUpdated":1657082048000}',t={},p=e(`<h1 id="ddl" tabindex="-1">DDL <a class="header-anchor" href="#ddl" aria-hidden="true">#</a></h1><h2 id="\u6570\u636E\u5E93" tabindex="-1">\u6570\u636E\u5E93 <a class="header-anchor" href="#\u6570\u636E\u5E93" aria-hidden="true">#</a></h2><h3 id="\u67E5\u8BE2" tabindex="-1">\u67E5\u8BE2 <a class="header-anchor" href="#\u67E5\u8BE2" aria-hidden="true">#</a></h3><div class="language-sql line-numbers-mode"><pre><code><span class="token comment">-- \u67E5\u8BE2\u6240\u6709\u6570\u636E\u5E93</span>
<span class="token keyword">show</span> <span class="token keyword">databases</span>

<span class="token comment">-- \u67E5\u8BE2\u5F53\u524D\u6570\u636E\u5E93</span>
<span class="token keyword">select</span> <span class="token keyword">database</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u521B\u5EFA" tabindex="-1">\u521B\u5EFA <a class="header-anchor" href="#\u521B\u5EFA" aria-hidden="true">#</a></h3><div class="language-sql line-numbers-mode"><pre><code><span class="token keyword">create</span> <span class="token keyword">database</span> <span class="token punctuation">[</span><span class="token keyword">if</span> <span class="token operator">not</span> <span class="token keyword">exists</span><span class="token punctuation">]</span> name <span class="token punctuation">[</span><span class="token keyword">default</span> <span class="token keyword">charset</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">collate</span> \u6392\u5217\u89C4\u5219<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><blockquote><p>\u53EF\u4EE5\u4F7F\u7528<code>create database test default charset utf8mb4</code>\u521B\u5EFA\u4E00\u4E2A\u652F\u6301utf-8\u7F16\u7801\u7684\u6570\u636E\u5E93\uFF0C\u56E0\u4E3A\u4E2D\u6587\u5B57\u7B26\u4E2D</p></blockquote><h3 id="\u5220\u9664" tabindex="-1">\u5220\u9664 <a class="header-anchor" href="#\u5220\u9664" aria-hidden="true">#</a></h3><div class="language-sql line-numbers-mode"><pre><code><span class="token keyword">drop</span> <span class="token keyword">database</span> <span class="token punctuation">[</span><span class="token keyword">if</span> <span class="token keyword">exists</span><span class="token punctuation">]</span> name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h3><div class="language-sql line-numbers-mode"><pre><code><span class="token keyword">use</span> name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u8868" tabindex="-1">\u8868 <a class="header-anchor" href="#\u8868" aria-hidden="true">#</a></h2><h3 id="\u67E5\u8BE2-1" tabindex="-1">\u67E5\u8BE2 <a class="header-anchor" href="#\u67E5\u8BE2-1" aria-hidden="true">#</a></h3><div class="language-sql line-numbers-mode"><pre><code><span class="token comment">-- \u67E5\u8BE2\u5F53\u524D\u6570\u636E\u5E93\u6240\u6709\u8868</span>
<span class="token keyword">show</span> <span class="token keyword">tables</span><span class="token punctuation">;</span>


<span class="token comment">-- \u67E5\u8BE2\u8868\u7ED3\u6784</span>
<span class="token keyword">desc</span> name<span class="token punctuation">;</span>


<span class="token comment">-- \u67E5\u8BE2\u6307\u5B9A\u8868\u7684\u5EFA\u8868\u8BED\u53E5</span>
<span class="token keyword">show</span> <span class="token keyword">create</span> <span class="token keyword">table</span> name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="\u521B\u5EFA\u5B57\u6BB5" tabindex="-1">\u521B\u5EFA\u5B57\u6BB5 <a class="header-anchor" href="#\u521B\u5EFA\u5B57\u6BB5" aria-hidden="true">#</a></h3><div class="language-sql line-numbers-mode"><pre><code><span class="token keyword">create</span> <span class="token keyword">table</span> name <span class="token punctuation">(</span>
\u5B57\u6BB5<span class="token number">1</span>  \u5B57\u6BB5\u7C7B\u578B <span class="token punctuation">[</span><span class="token keyword">comment</span> \u5B57\u6BB5\u6CE8\u89E3<span class="token punctuation">]</span><span class="token punctuation">,</span>
\u5B57\u6BB5<span class="token number">2</span>  \u5B57\u6BB5\u7C7B\u578B <span class="token punctuation">[</span><span class="token keyword">comment</span> \u5B57\u6BB5\u6CE8\u89E3<span class="token punctuation">]</span><span class="token punctuation">,</span>
\u5B57\u6BB5<span class="token number">3</span>  \u5B57\u6BB5\u7C7B\u578B <span class="token punctuation">[</span><span class="token keyword">comment</span> \u5B57\u6BB5\u6CE8\u89E3<span class="token punctuation">]</span><span class="token punctuation">,</span>
\u5B57\u6BB5<span class="token number">4</span>  \u5B57\u6BB5\u7C7B\u578B <span class="token punctuation">[</span><span class="token keyword">comment</span> \u5B57\u6BB5\u6CE8\u89E3<span class="token punctuation">]</span> 
<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token keyword">comment</span> \u8868\u6CE8\u89E3<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u5B57\u6BB5\u7C7B\u578B" tabindex="-1">\u5B57\u6BB5\u7C7B\u578B <a class="header-anchor" href="#\u5B57\u6BB5\u7C7B\u578B" aria-hidden="true">#</a></h3><p><strong>\u6570\u5B57:</strong></p><table><thead><tr><th>\u7C7B\u578B</th><th>\u5927\u5C0F</th></tr></thead><tbody><tr><td>\u6574\u5F62</td><td></td></tr><tr><td>tinyint</td><td>1 byte</td></tr><tr><td>smallint</td><td>2 byte</td></tr><tr><td>mediumint</td><td>3 byte</td></tr><tr><td>int or integer</td><td>4 byte</td></tr><tr><td>bigint</td><td>8 byte</td></tr><tr><td>\u6D6E\u70B9\u6570</td><td></td></tr><tr><td>float</td><td>4 byte</td></tr><tr><td>double</td><td>8 byte</td></tr><tr><td>decimal</td><td></td></tr></tbody></table><blockquote><p>\u5176\u4E2Ddecimal\u7684\u8303\u56F4\u4F9D\u8D56\u4E8EM(\u7CBE\u5EA6)\u548CD(\u6807\u5EA6)\u7684\u503C<br> \u6807\u793Adouble \u548C decimal\u7684\u7CBE\u5EA6\u9700\u8981\u989D\u5916\u7684\u4E24\u4E2A\u53C2\u6570, \u4F8B\u5982\u6211\u8981\u8868\u793A3\u4F4D\u6574\u65701\u4F4D\u5C0F\u6570<code>double(4, 1)</code><br> \u53EF\u4EE5\u4F7F\u7528unsigned\u6765\u6807\u8BC6\u8BE5\u53D8\u91CF\u6CA1\u6709\u8D1F\u53D6\u503C</p></blockquote><br><p><strong>\u5B57\u7B26:</strong></p><table><thead><tr><th>\u7C7B\u578B</th><th>\u5927\u5C0F</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>char</td><td>0-255 Byte</td><td>\u5B9A\u957F\u5B57\u7B26\u4E32</td></tr><tr><td>varchar</td><td>0-65535 Byte</td><td>\u53D8\u957F\u5B57\u7B26\u4E32</td></tr><tr><td>tinytext</td><td>0-255 Byte</td><td>\u77ED\u6587\u672C\u5B57\u7B26\u4E32</td></tr><tr><td>blob</td><td>0-65535 Byte</td><td>\u4E8C\u8FDB\u5236\u5F62\u5F0F\u7684\u957F\u6587\u672C\u6570\u636E</td></tr><tr><td>text</td><td>0-65535 Byte</td><td>\u957F\u6587\u672C\u6570\u636E</td></tr><tr><td>mediumblob</td><td>0-16777215 Byte</td><td>\u4E8C\u8FDB\u5236\u5F62\u5F0F\u7684\u4E2D\u7B49\u957F\u5EA6\u6587\u672C\u6570\u636E</td></tr><tr><td>mediumtext</td><td>0-16777215 Byte</td><td>\u4E2D\u7B49\u957F\u5EA6\u6587\u672C\u6570\u636E</td></tr><tr><td>longblob</td><td>0-4294967295 Byte</td><td>\u4E8C\u8FDB\u5236\u5F62\u5F0F\u7684\u6781\u5927\u6587\u672C\u6570\u636E</td></tr><tr><td>longtext</td><td>0-4294967295 Byte</td><td>\u6781\u5927\u6587\u672C\u6570\u636E</td></tr></tbody></table><blockquote><p>char(n) \u5199\u6B7B\u4E00\u4E2A\u5B57\u6BB5\u5C31\u662Fn\u4E2A\u5B57\u8282, varchar(n) \u6700\u5927\u5B57\u8282\u662Fn\u4E2A\u5B57\u8282,\u82E5\u5C11\u4E8En\u4E2A\u5B57\u8282\u5219\u4F7F\u7528\u66F4\u5C11\u5185\u5B58, \u4F46\u662F char \u6027\u80FD \u9AD8\u4E8E varchar</p></blockquote><h3 id="\u5220\u9664\u8868" tabindex="-1">\u5220\u9664\u8868 <a class="header-anchor" href="#\u5220\u9664\u8868" aria-hidden="true">#</a></h3><div class="language-sql line-numbers-mode"><pre><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token operator">&lt;</span>\u8868\u540D<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u66F4\u65B0\u8868" tabindex="-1">\u66F4\u65B0\u8868 <a class="header-anchor" href="#\u66F4\u65B0\u8868" aria-hidden="true">#</a></h3><div class="language-sql line-numbers-mode"><pre><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token operator">&lt;</span>\u8868\u540D<span class="token operator">&gt;</span> <span class="token keyword">ADD</span><span class="token operator">/</span><span class="token keyword">MODIFY</span><span class="token operator">/</span>CHANGE<span class="token operator">/</span><span class="token keyword">DROP</span><span class="token operator">/</span><span class="token keyword">RENAME</span> <span class="token keyword">TO</span> <span class="token keyword">COLUMN</span> <span class="token operator">&lt;</span>\u5217\u7684\u5B9A\u4E49<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u547D\u4EE4\uFF1A<code>alter table testdata.what add column y_num int(10);</code>column\u53EF\u4EE5\u7701\u7565<br> \u8868\u793A\u5728testdata.what\u8868\u7684\u6700\u540E\u63D2\u5165\u4E00\u5217 y_num</p><p>MODIFY \u53EA\u80FD\u4FEE\u6539\u5B57\u6BB5\u7C7B\u578B<br> CHANGE \u53EF\u4EE5\u4FEE\u6539\u7684\u5B57\u6BB5\u540D,\u7C7B\u578B\u7B49<br> DROP \u5220\u9664\u5B57\u6BB5<br> RENAME TO \u66F4\u6539\u5B57\u6BB5\u540D\u5B57</p><h3 id="\u66F4\u6539\u8868\u540D" tabindex="-1">\u66F4\u6539\u8868\u540D <a class="header-anchor" href="#\u66F4\u6539\u8868\u540D" aria-hidden="true">#</a></h3><div class="language-sql line-numbers-mode"><pre><code><span class="token keyword">RENAME</span> <span class="token keyword">TABLE</span> testdata<span class="token punctuation">.</span>what <span class="token keyword">to</span> testdata<span class="token punctuation">.</span><span class="token keyword">some</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,32),r=[p];function d(l,o,c,i,u,k){return n(),s("div",null,r)}var m=a(t,[["render",d]]);export{h as __pageData,m as default};
