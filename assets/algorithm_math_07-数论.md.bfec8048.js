import{_ as n,c as s,o as a,a as p}from"./app.613f37bf.js";const b='{"title":"numberTheory","description":"","frontmatter":{"title":"numberTheory","date":"2022-04-27T17:16:34.000Z","tags":["Math","Algorithm"]},"headers":[{"level":2,"title":"\u5F85\u603B\u7ED3","slug":"\u5F85\u603B\u7ED3"},{"level":2,"title":"\u7D20\u6570\u5224\u5B9A","slug":"\u7D20\u6570\u5224\u5B9A"},{"level":3,"title":"\u8BD5\u9664\u6CD5","slug":"\u8BD5\u9664\u6CD5"},{"level":2,"title":"\u56E0\u7D20\u5206\u79BB(\u5206\u89E3\u8D28\u56E0\u6570)","slug":"\u56E0\u7D20\u5206\u79BB-\u5206\u89E3\u8D28\u56E0\u6570"},{"level":3,"title":"\u8BD5\u9664\u7B5B\u6CD5","slug":"\u8BD5\u9664\u7B5B\u6CD5"},{"level":2,"title":"\u6B27\u62C9\u51FD\u6570","slug":"\u6B27\u62C9\u51FD\u6570"},{"level":2,"title":"\u7D20\u6570\u7B5B\u9009","slug":"\u7D20\u6570\u7B5B\u9009"},{"level":3,"title":"\u6734\u7D20\u6CD5","slug":"\u6734\u7D20\u6CD5"},{"level":3,"title":"\u57C3\u6C0F\u7B5B\u6CD5","slug":"\u57C3\u6C0F\u7B5B\u6CD5"},{"level":3,"title":"\u7EBF\u6027\u7B5B\u6CD5","slug":"\u7EBF\u6027\u7B5B\u6CD5"},{"level":2,"title":"\u6700\u5927\u516C\u7EA6\u6570/\u6700\u5C0F\u516C\u500D\u6570","slug":"\u6700\u5927\u516C\u7EA6\u6570-\u6700\u5C0F\u516C\u500D\u6570"},{"level":3,"title":"\u6B27\u51E0\u91CC\u5F97\u7B97\u6CD5(\u8F97\u8F6C\u76F8\u9664\u6CD5)","slug":"\u6B27\u51E0\u91CC\u5F97\u7B97\u6CD5-\u8F97\u8F6C\u76F8\u9664\u6CD5"},{"level":2,"title":"\u6269\u5C55\u6B27\u51E0\u91CC\u5F97\u7B97\u6CD5","slug":"\u6269\u5C55\u6B27\u51E0\u91CC\u5F97\u7B97\u6CD5"},{"level":3,"title":"\u7EBF\u6027\u540C\u4F59\u65B9\u7A0B","slug":"\u7EBF\u6027\u540C\u4F59\u65B9\u7A0B"},{"level":2,"title":"\u9006\u5143","slug":"\u9006\u5143"},{"level":3,"title":"\u5FEB\u901F\u5E42\u6C42\u9006\u5143","slug":"\u5FEB\u901F\u5E42\u6C42\u9006\u5143"},{"level":3,"title":"\u6269\u5C55\u6B27\u51E0\u91CC\u5F97\u7B97\u6CD5\u6C42\u9006\u5143","slug":"\u6269\u5C55\u6B27\u51E0\u91CC\u5F97\u7B97\u6CD5\u6C42\u9006\u5143"}],"relativePath":"algorithm/math/07-\u6570\u8BBA.md","lastUpdated":1654002262000}',t={},o=p(`<h1 id="\u6570\u8BBA" tabindex="-1">\u6570\u8BBA <a class="header-anchor" href="#\u6570\u8BBA" aria-hidden="true">#</a></h1><h2 id="\u5F85\u603B\u7ED3" tabindex="-1">\u5F85\u603B\u7ED3 <a class="header-anchor" href="#\u5F85\u603B\u7ED3" aria-hidden="true">#</a></h2><ul><li><p><code>( A + B ) % k = 0 &lt;=&gt; A % k = -B % k</code></p></li><li><p><code>A % k = a =&gt; A * 10 ^ n % k = a * 10 ^ n % k</code></p></li><li><p><code>\u4E00\u4E2A\u8D1F\u6570\u6A21\u4E00\u4E2A\u6570\u5728cpp\u4E2D\u4E3A\u8D1F\u6570\uFF0C\u4F46\u5728\u6570\u5B66\u4E2D\u7684\u4F59\u6570\u5FC5\u987B\u662F\u6B63\u6570\uFF0C\u4F8B\u5982\uFF1A-5 % 3 = -2 \u4F46\u5728\u6570\u5B66\u4E2D\u7ED3\u679C\u5E94\u8BE5\u662F1\uFF0C\u56E0\u6B64\u9700\u8981\u505A\u8F6C\u6362 ( -5 % 3 + 3 ) % 3 = 1</code></p></li><li><p><code>1 - n \u4E2D p \u7684\u500D\u6570\u7684\u4E2A\u6570 \u4E3A [n / p]\uFF0C[] \u8868\u793A\u5411\u4E0B\u53D6\u6574</code></p></li></ul><h2 id="\u7D20\u6570\u5224\u5B9A" tabindex="-1">\u7D20\u6570\u5224\u5B9A <a class="header-anchor" href="#\u7D20\u6570\u5224\u5B9A" aria-hidden="true">#</a></h2><h3 id="\u8BD5\u9664\u6CD5" tabindex="-1">\u8BD5\u9664\u6CD5 <a class="header-anchor" href="#\u8BD5\u9664\u6CD5" aria-hidden="true">#</a></h3><p>\u82E5\u67D0\u6570 n \u4ECE 2 \u5230 $\\sqrt{n}$ \u4E2D\u90FD\u6CA1\u6709\u56E0\u6570\u5B57\uFF0C\u5219\u8FD9\u4E2A\u6570\u5C31\u662F\u7D20\u6570\u3002\u8BD5\u9664\u6CD5\u5C31\u662F\u66B4\u529B\u5730\u9A8C\u8BC1\u7D20\u6570\u7684\u65B9\u5F0F\u3002</p><p>\u590D\u6742\u5EA6:</p><ul><li>\u65F6\u95F4: $O(\\sqrt{n})$</li></ul><div class="language-cpp"><pre><code>include <span class="token operator">&lt;</span>iostream<span class="token operator">&gt;</span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N <span class="token operator">=</span> <span class="token number">110</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> n<span class="token punctuation">;</span>
<span class="token keyword">bool</span> <span class="token function">checkPrime</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n <span class="token operator">/</span> i <span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">--</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> x<span class="token punctuation">;</span>
        cin <span class="token operator">&gt;&gt;</span> x<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">checkPrime</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">&quot;Yes&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">&quot;No&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><br><h4 id="\u6269\u5C55-\u8BD5\u9664\u6CD5\u6C42\u7EA6\u6570" tabindex="-1">\u6269\u5C55---\u8BD5\u9664\u6CD5\u6C42\u7EA6\u6570 <a class="header-anchor" href="#\u6269\u5C55-\u8BD5\u9664\u6CD5\u6C42\u7EA6\u6570" aria-hidden="true">#</a></h4><p>\u548C\u8BD5\u9664\u6CD5\u5224\u65AD\u7D20\u6570\u7684\u601D\u8DEF\u4E00\u6837\u3002</p><p>\u590D\u6742\u5EA6:</p><ul><li>\u65F6\u95F4\uFF1A$O(\\sqrt{n})$</li></ul><div class="language-cpp"><pre><code>include <span class="token operator">&lt;</span>iostream<span class="token operator">&gt;</span>
include <span class="token operator">&lt;</span>vector<span class="token operator">&gt;</span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> n<span class="token punctuation">;</span>

vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">getDivide</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> d<span class="token punctuation">;</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> x <span class="token operator">/</span> i <span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">%</span> i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            d<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!=</span> x <span class="token operator">/</span> i<span class="token punctuation">)</span> d<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>x <span class="token operator">/</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6CE8\u610F\u628A\u53E6\u4E00\u4E2A\u7EA6\u6570\u4E5F\u52A0\u5165\u96C6\u5408\u3002</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> d<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">--</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> x<span class="token punctuation">;</span>
        cin <span class="token operator">&gt;&gt;</span> x<span class="token punctuation">;</span>
        <span class="token keyword">auto</span> res <span class="token operator">=</span> <span class="token function">getDivide</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> i <span class="token operator">:</span> res<span class="token punctuation">)</span> cout <span class="token operator">&lt;&lt;</span> i <span class="token operator">&lt;&lt;</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">;</span>
        <span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><br><h2 id="\u56E0\u7D20\u5206\u79BB-\u5206\u89E3\u8D28\u56E0\u6570" tabindex="-1">\u56E0\u7D20\u5206\u79BB(\u5206\u89E3\u8D28\u56E0\u6570) <a class="header-anchor" href="#\u56E0\u7D20\u5206\u79BB-\u5206\u89E3\u8D28\u56E0\u6570" aria-hidden="true">#</a></h2><h3 id="\u8BD5\u9664\u7B5B\u6CD5" tabindex="-1">\u8BD5\u9664\u7B5B\u6CD5 <a class="header-anchor" href="#\u8BD5\u9664\u7B5B\u6CD5" aria-hidden="true">#</a></h3><p>\u7B5B\u6CD5\u53EA\u9009\u51FA\u8D28\u6570\u7684\u539F\u56E0\uFF1A</p><p>\u53EF\u8BC1\u660E: \u82E5\u67D0\u6570 n \u542B\u6709\u56E0\u5B50 i \u4E14 i \u80FD\u88AB 2 \u5230 i - 1 \u4E2D\u7684\u67D0\u4E9B\u6570\u6574\u9664(i\u662F\u5408\u6570)\uFF0C\u90A3\u4E48 n \u4E5F\u80FD\u88AB 2 \u5230 i - 1 \u4E2D\u7684\u8FD9\u4E9B\u6570\u6574\u9664\uFF0C\u56E0\u6B64i\u88AB\u7B5B\u9009\u51FA\u6765\u524D\u5DF2\u7ECF\u88AB\u9664\u5E72\u51C0\u4E86\uFF0C\u6240\u4EE5\u8BE5\u65B9\u6CD5\u53EA\u80FD\u7B5B\u51FA\u8D28\u56E0\u6570\u3002(\u5176\u5B9E\u4E5F\u8BF4\u660E\u4E86\u4EFB\u4F55\u4E00\u4E2A\u5408\u6570\u90FD\u53EF\u5206\u89E3\u4E3A\u82E5\u5E72\u8D28\u6570\u76F8\u4E58)</p><p>\u590D\u6742\u5EA6:</p><ul><li>\u65F6\u95F4: $O(\\sqrt{n})$</li></ul><div class="language-cpp"><pre><code>include <span class="token operator">&lt;</span>iostream<span class="token operator">&gt;</span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> n<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">divide</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> x <span class="token operator">/</span> i <span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">%</span> i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">int</span> cnt <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">%</span> i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> x <span class="token operator">/=</span> i<span class="token punctuation">,</span> cnt <span class="token operator">++</span><span class="token punctuation">;</span>
            cout <span class="token operator">&lt;&lt;</span> i <span class="token operator">&lt;&lt;</span> <span class="token char">&#39; &#39;</span> <span class="token operator">&lt;&lt;</span> cnt <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> cout <span class="token operator">&lt;&lt;</span> x <span class="token operator">&lt;&lt;</span> <span class="token char">&#39; &#39;</span> <span class="token operator">&lt;&lt;</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span> <span class="token comment">//x\u4E2D\u6700\u591A\u6709\u4E00\u4E2A\u5927\u4E8Esqrt(x)\u7684\u8D28\u56E0\u6570</span>
    
    cout <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>     
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">--</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> x<span class="token punctuation">;</span>
        cin <span class="token operator">&gt;&gt;</span> x<span class="token punctuation">;</span>
        <span class="token function">divide</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u6269\u5C55\u2014\u2014\u7EA6\u6570\u7684\u4E2A\u6570" tabindex="-1">\u6269\u5C55\u2014\u2014\u7EA6\u6570\u7684\u4E2A\u6570 <a class="header-anchor" href="#\u6269\u5C55\u2014\u2014\u7EA6\u6570\u7684\u4E2A\u6570" aria-hidden="true">#</a></h4><p>\u7531\u5206\u89E3\u8D28\u56E0\u6570\u90E8\u5206\u53EF\u77E5\uFF0C\u4EFB\u4F55\u4E00\u4E2A\u5408\u6570<code>N</code>\u90FD\u53EF\u4EE5\u5199\u6210$N = p_1^{a_1}p_2^{a_2}...p_k^{a_k}$\uFF0C\u5373\u82E5\u5E72\u4E2A\u8D28\u6570\u7684\u82E5\u5E72\u6B21\u5E42\u7684\u79EF\uFF0C\u6240\u4EE5<code>N</code>\u7684\u4EFB\u610F\u7EA6\u6570d\u90FD\u53EF\u4EE5\u8868\u793A\u4E3A$d = p_1^{b_1}p_2^{b_2}...p_k^{b_k}, 0\\leq b_k \\leq a_k$ \u90A3\u4E48\uFF0C\u7EA6\u6570\u7684\u4E2A\u6570\u5C31\u4E3A$(a_1 + 1) * ... * (a_k + 1)$\uFF0C\u5373\u7EC4\u5408\u6570</p><div class="language-cpp"><pre><code>include <span class="token operator">&lt;</span>iostream<span class="token operator">&gt;</span>
include <span class="token operator">&lt;</span>unordered_map<span class="token operator">&gt;</span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">typedef</span> <span class="token keyword">long</span> <span class="token keyword">long</span> ll<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> Mod <span class="token operator">=</span> <span class="token number">1e9</span> <span class="token operator">+</span> <span class="token number">7</span><span class="token punctuation">;</span>

unordered_map<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">&gt;</span> primes<span class="token punctuation">;</span>

<span class="token keyword">int</span> n<span class="token punctuation">;</span>
ll res <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">--</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> x<span class="token punctuation">;</span>
        cin <span class="token operator">&gt;&gt;</span> x<span class="token punctuation">;</span>
        
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> x <span class="token operator">/</span> i <span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">%</span> i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> primes<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">++</span><span class="token punctuation">,</span> x <span class="token operator">/=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> primes<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> p <span class="token operator">:</span> primes<span class="token punctuation">)</span> res <span class="token operator">=</span> res <span class="token operator">*</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span>second <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> Mod<span class="token punctuation">;</span>
    
    cout <span class="token operator">&lt;&lt;</span> res <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u6269\u5C55\u2014\u2014\u7EA6\u6570\u4E4B\u548C" tabindex="-1">\u6269\u5C55\u2014\u2014\u7EA6\u6570\u4E4B\u548C <a class="header-anchor" href="#\u6269\u5C55\u2014\u2014\u7EA6\u6570\u4E4B\u548C" aria-hidden="true">#</a></h4><p>\u7531\u524D\u9762\u7684\u5206\u6790\u77E5\u9053\u4E86\uFF0C\u4E00\u4E2A\u5408\u6570\u7684\u4EFB\u4F55\u7EA6\u6570\u53EF\u4EE5\u8868\u793A\u4E3A$d = p_1^{b_1}p_2^{b_2}...p_k^{b_k}, 0\\leq b_k \\leq a_k$\uFF0C\u6240\u4EE5\u4E00\u4E2A\u5408\u6570\u7684\u6240\u6709\u7EA6\u6570\u4E4B\u548C(\u5373$(a_1 + 1)...(a_k + 1)$\u4E2A\u56E0\u6570\u4E4B\u548C)\u53EF\u4EE5\u5199\u4E3A\uFF1A$( p_1^0 + p_1^1 + ... +p_1^{a_1} )( p_2^0 + p_2^2 + ... +p_2^{a_2} )...( p_k^0 + p_k^1 + ... +p_k^{a_k} )$\uFF0C\u5C55\u5F00\u5373\u5F97\u5230\u6240\u6709\u8D28\u6570\u9009\u53D6\u4EFB\u610F\u6B21\u5E42\u7684\u5168\u90E8\u7EC4\u5408\u4E4B\u548C\u3002</p><div class="language-cpp"><pre><code>include <span class="token operator">&lt;</span>iostream<span class="token operator">&gt;</span>
include <span class="token operator">&lt;</span>unordered_map<span class="token operator">&gt;</span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">typedef</span> <span class="token keyword">long</span> <span class="token keyword">long</span> ll<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> Mod <span class="token operator">=</span> <span class="token number">1e9</span> <span class="token operator">+</span> <span class="token number">7</span><span class="token punctuation">;</span>

unordered_map<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">&gt;</span> primes<span class="token punctuation">;</span>

<span class="token keyword">int</span> n<span class="token punctuation">;</span>
ll res <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">--</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> x<span class="token punctuation">;</span>
        cin <span class="token operator">&gt;&gt;</span> x<span class="token punctuation">;</span>
        
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> x <span class="token operator">/</span> i <span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">%</span> i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> primes<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">++</span><span class="token punctuation">,</span> x <span class="token operator">/=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> primes<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> prime <span class="token operator">:</span> primes<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        ll t <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> p <span class="token operator">=</span> prime<span class="token punctuation">.</span>first<span class="token punctuation">,</span> a <span class="token operator">=</span> prime<span class="token punctuation">.</span>second<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>a <span class="token operator">--</span><span class="token punctuation">)</span> t <span class="token operator">=</span> <span class="token punctuation">(</span>t <span class="token operator">*</span> p <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> Mod<span class="token punctuation">;</span>
        res <span class="token operator">=</span> <span class="token punctuation">(</span>res <span class="token operator">*</span> t<span class="token punctuation">)</span> <span class="token operator">%</span> Mod<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    cout <span class="token operator">&lt;&lt;</span> res <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6B27\u62C9\u51FD\u6570" tabindex="-1">\u6B27\u62C9\u51FD\u6570 <a class="header-anchor" href="#\u6B27\u62C9\u51FD\u6570" aria-hidden="true">#</a></h2><p>1\u223CN \u4E2D\u4E0E N \u4E92\u8D28\u7684\u6570\u7684\u4E2A\u6570\u88AB\u79F0\u4E3A\u6B27\u62C9\u51FD\u6570\uFF0C\u8BB0\u4E3A $\\Phi(N)$ \u3002 \u5728\u7B97\u6570\u57FA\u672C\u5B9A\u7406\u4E2D, $N = p_1^{a_1}p_2^{a_2}...p_m^{a_m}$</p><p>$\\Phi(N) = N \xD7 \\frac{p_1 - 1}{p_1} \xD7 \\frac{p_2 - 2}{p_2} \xD7 ... \xD7 \\frac{p_2 - m}{p_m}$</p><div class="language-cpp"><pre><code>include <span class="token operator">&lt;</span>bits<span class="token operator">/</span>stdcpp<span class="token punctuation">.</span>h<span class="token operator">&gt;</span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">--</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> x<span class="token punctuation">;</span>
        cin <span class="token operator">&gt;&gt;</span> x<span class="token punctuation">;</span>
        <span class="token keyword">int</span> res <span class="token operator">=</span> x<span class="token punctuation">;</span>
        
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> x <span class="token operator">/</span> i <span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">%</span> i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                res <span class="token operator">=</span> res <span class="token operator">/</span> i <span class="token operator">*</span> <span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">%</span> i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> x <span class="token operator">/=</span> i<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            
        <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> res <span class="token operator">=</span> res <span class="token operator">/</span> x <span class="token operator">*</span> <span class="token punctuation">(</span>x <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cout <span class="token operator">&lt;&lt;</span> res <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u7D20\u6570\u7B5B\u9009" tabindex="-1">\u7D20\u6570\u7B5B\u9009 <a class="header-anchor" href="#\u7D20\u6570\u7B5B\u9009" aria-hidden="true">#</a></h2><h3 id="\u6734\u7D20\u6CD5" tabindex="-1">\u6734\u7D20\u6CD5 <a class="header-anchor" href="#\u6734\u7D20\u6CD5" aria-hidden="true">#</a></h3><p>\u5728<code>2~n</code>\u4E2D\uFF0C\u901A\u8FC7\u628A\u4E00\u4E2A\u6570\u7684\u500D\u6570\u5220\u9664\u6389\u7684\u65B9\u5F0F\u6765\u7B5B\u9009\u8D28\u6570\uFF0C\u82E5\u9047\u5230\u6CA1\u88AB\u5220\u9664\u7684\u6570\uFF0C\u5219\u628A\u5B83\u52A0\u5165\u8D28\u6570\u7684\u96C6\u5408\u4E2D\u3002</p><p>\u590D\u6742\u5EA6:</p><ul><li>\u65F6\u95F4: $O(nlogn)$</li></ul><div class="language-cpp"><pre><code>include <span class="token operator">&lt;</span>iostream<span class="token operator">&gt;</span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N <span class="token operator">=</span> <span class="token number">1e6</span> <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> primes<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span> cnt<span class="token punctuation">;</span>
<span class="token keyword">bool</span> st<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> n<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n <span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>st<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            primes<span class="token punctuation">[</span>cnt <span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i <span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> n <span class="token punctuation">;</span> j <span class="token operator">+=</span> i<span class="token punctuation">)</span> st<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    cout <span class="token operator">&lt;&lt;</span> cnt <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u57C3\u6C0F\u7B5B\u6CD5" tabindex="-1">\u57C3\u6C0F\u7B5B\u6CD5 <a class="header-anchor" href="#\u57C3\u6C0F\u7B5B\u6CD5" aria-hidden="true">#</a></h3><p>\u5BB9\u6613\u53D1\u73B0\u6734\u7D20\u7B5B\u6CD5\u4F1A\u628A\u540C\u6837\u7684\u5408\u6570\u91CD\u590D\u5220\u9664\u591A\u6B21\uFF0C\u800C\u57C3\u6C0F\u7B5B\u6CD5\u4F18\u5316\u4E8E\u6734\u7D20\u7B5B\u6CD5\uFF0C\u53EF\u4EE5\u7531\u5206\u89E3\u8D28\u56E0\u6570\u90E8\u5206\u7684\u8BC1\u660E\u77E5\u9053\uFF0C\u6BCF\u4E00\u4E2A\u5408\u6570\u90FD\u80FD\u5206\u89E3\u4E3A\u82E5\u5E72\u8D28\u6570\u76F8\u4E58\uFF0C\u56E0\u6B64\u53EA\u9700\u8981\u4F7F\u7528\u9009\u51FA\u7684\u7D20\u6570\u53BB\u5220\u9664\u5408\u6570\u3002</p><p>\u590D\u6742\u5EA6\uFF1A</p><ul><li>\u65F6\u95F4: $O(nloglogn) \u53EF\u8FD1\u4F3C\u4E8En$</li></ul><div class="language-cpp"><pre><code>include <span class="token operator">&lt;</span>iostream<span class="token operator">&gt;</span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N <span class="token operator">=</span> <span class="token number">1000010</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> primes<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span> cnt<span class="token punctuation">;</span>
<span class="token keyword">bool</span> st<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> n<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n <span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>st<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            primes<span class="token punctuation">[</span>cnt <span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i <span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> n <span class="token punctuation">;</span> j <span class="token operator">+=</span> i<span class="token punctuation">)</span> st<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    cout <span class="token operator">&lt;&lt;</span> cnt <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u7EBF\u6027\u7B5B\u6CD5" tabindex="-1">\u7EBF\u6027\u7B5B\u6CD5 <a class="header-anchor" href="#\u7EBF\u6027\u7B5B\u6CD5" aria-hidden="true">#</a></h3><p>\u57C3\u6C0F\u7B5B\u6CD5\uFF0C\u5DF2\u7ECF\u5FEB\u901F\u5F88\u591A\u4E86\uFF0C\u4F46\u8FD8\u662F\u4F1A\u53D1\u751F\u91CD\u590D\u5220\u9664\u540C\u4E00\u4E2A\u5408\u6570\u7684\u60C5\u51B5\u3002\u800C\u7EBF\u6027\u7B5B\u6CD5\u6BCF\u6B21\u53EA\u4F7F\u7528\u67D0\u5408\u6570\u7684\u6700\u5C0F\u8D28\u56E0\u5B50\u7B5B\u6389\u5408\u6570\uFF0C\u8FD9\u6837\u5C31\u80FD\u907F\u514D\u91CD\u590D\u7B5B\u9009\u3002</p><p>\u590D\u6742\u5EA6:</p><ul><li>\u65F6\u95F4\uFF1A$O(n)$</li></ul><div class="language-cpp"><pre><code>include <span class="token operator">&lt;</span>iostream<span class="token operator">&gt;</span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N <span class="token operator">=</span> <span class="token number">1e6</span> <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> primes<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span> cnt<span class="token punctuation">;</span>
<span class="token keyword">bool</span> st<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> n<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n <span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>st<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> primes<span class="token punctuation">[</span>cnt <span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
        
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span> primes<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> n <span class="token operator">/</span> i <span class="token punctuation">;</span> j <span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            st<span class="token punctuation">[</span>primes<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">*</span> i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> primes<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>  <span class="token comment">//\u4F18\u5316\u5230n\u7684\u5173\u952E</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    cout <span class="token operator">&lt;&lt;</span> cnt <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>\u4E3A\u4EC0\u4E48<code>i % p[j] == 0</code>\u65F6<code>break</code>\uFF0C\u53EF\u4EE5\u8BC1\u660E\uFF1A</p><p>\u5F53 <code>i % p[j] == 0</code>\u65F6\uFF0C\u8BBE<code>m = i / p[j]</code>\uFF0C\u5219<code>i * p[j + 1] = ( m * p[j + 1] ) * p[j]</code></p><p>\u8BBE<code>k = m * p[j + 1]</code>\uFF0C\u5219\u53EF\u5F97\u5230<code>i * p[j + 1] = k * p[i]</code>\uFF0C\u5373<code>i * p[j + 1]</code>\u662F<code>p[i]</code>\u7684\u82E5\u5E72\u500D\uFF0C\u8FD9\u8BF4\u660E\uFF1A\u5982\u679C\u4E0D\u5728<code>i % p[j] == 0</code>\u65F6<code>break</code>\uFF0C\u90A3\u4E48<code>i * p[j + 1]</code>\u8FD9\u4E2A\u5408\u6570\u5C06\u4F1A\u5728<code>i = k</code>\u65F6\u53C8\u88AB\u7B5B\u4E00\u904D\uFF0C\u6B64\u65F6\u9000\u51FA\u53EF\u4EE5\u907F\u514D\u91CD\u590D\u7B5B\u9009\u3002</p></blockquote><h2 id="\u6700\u5927\u516C\u7EA6\u6570-\u6700\u5C0F\u516C\u500D\u6570" tabindex="-1">\u6700\u5927\u516C\u7EA6\u6570/\u6700\u5C0F\u516C\u500D\u6570 <a class="header-anchor" href="#\u6700\u5927\u516C\u7EA6\u6570-\u6700\u5C0F\u516C\u500D\u6570" aria-hidden="true">#</a></h2><h3 id="\u6B27\u51E0\u91CC\u5F97\u7B97\u6CD5-\u8F97\u8F6C\u76F8\u9664\u6CD5" tabindex="-1">\u6B27\u51E0\u91CC\u5F97\u7B97\u6CD5(\u8F97\u8F6C\u76F8\u9664\u6CD5) <a class="header-anchor" href="#\u6B27\u51E0\u91CC\u5F97\u7B97\u6CD5-\u8F97\u8F6C\u76F8\u9664\u6CD5" aria-hidden="true">#</a></h3><p>\u6570\u8BBA\u7684\u57FA\u7840\u77E5\u8BC6\uFF1A<code>\u82E5 d|a \u4E14 d|b \u5219 d|ax+by (d|a \u8868\u793Ad\u80FD\u6574\u9664a\uFF0Cx\uFF0Cy\u4E3A\u4EFB\u610F\u5E38\u6570) </code></p><blockquote><p>\u8BC1\u660E\uFF1A</p><p>\u8BBEc = floor(a/b)\uFF0C\u5219 a % b = a - c * b</p><p>\u5219\u8BBE a \u4E0E b \u7684\u516C\u7EA6\u6570\u4E3A d\uFF0C\u7531\u57FA\u7840\u77E5\u8BC6\uFF1Ad|a \u4E14 d|b\uFF0C\u5219\u6709d|a - c * b</p><p>\u90A3\u4E48\u53EF\u4EE5\u5F97\u5230(a, b) = (b, a % b)\uFF0C\u5373\u5DE6\u8FB9\u4E24\u6570\u4EFB\u4F55\u516C\u7EA6\u6570\u90FD\u662F\u53F3\u8FB9\u4E24\u6570\u7684\u516C\u7EA6\u6570\uFF0C\u6700\u7EC8\u53EF\u4EE5\u5F97\u5230gcd(a, b) = gcd(b, a % b)\uFF0C\u5B83\u4EEC\u7684\u6700\u5927\u516C\u7EA6\u6570\u4E5F\u76F8\u7B49</p></blockquote><blockquote><p>\u4EA4\u6362a \u548C b \u7684\u4F4D\u7F6E\u662F\u4E3A\u4E86\u4FDD\u8BC1 a \u6C38\u8FDC\u5927\u4E8E b \uFF0C\u4EE5\u4FBF\u9012\u5F52\u80FD\u4E00\u76F4\u8FDB\u884C\u4E0B\u53BB\uFF0C\u5F53\u9012\u5F52\u8FD0\u7B97\u5230gcd(a, 0)\u65F6\uFF0C\u53EF\u4EE5\u77E5\u9053ax + by = a\uFF0C\u6B64\u65F6\u8FD4\u56DEa</p></blockquote><div class="language-cpp"><pre><code>include <span class="token operator">&lt;</span>iostream<span class="token operator">&gt;</span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> n<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">gcd</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> b <span class="token operator">?</span> <span class="token function">gcd</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> a <span class="token operator">%</span> b<span class="token punctuation">)</span> <span class="token operator">:</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">--</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> a<span class="token punctuation">,</span> b<span class="token punctuation">;</span>
        cin <span class="token operator">&gt;&gt;</span> a <span class="token operator">&gt;&gt;</span> b<span class="token punctuation">;</span>
        
        cout <span class="token operator">&lt;&lt;</span> <span class="token function">gcd</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6700\u5C0F\u516C\u500D\u6570\u516C\u5F0F\uFF1A<code>\u6700\u5C0F\u516C\u500D\u6570d = ( A * B ) / gcd(A, B)</code></p><blockquote><p>\u76F4\u89C9\u4E0A\u7684\u8BC1\u660E(\u975E\u5E38\u4E0D\u4E25\u8C28\uFF0C\u53EA\u662F\u65B9\u4FBF\u8BB0\u5FC6):</p><p>A \xD7 B = a \xD7 c \xD7 b \xD7 c (c = gcd(A, B)\uFF0Ca = A / c\uFF0Cb = B / c)</p><p>\u56E0\u4E3Ac\u4E3AA, B\u7684\u6700\u5927\u516C\u56E0\u6570\uFF0C\u56E0\u6B64 a \u4E0E b \u662F\u4E92\u8D28\u7684\uFF0C\u800C\u4E24\u8D28\u6570\u7684\u6700\u5C0F\u516C\u500D\u6570\u5C31\u662F\u5B83\u4EEC\u7684\u4E58\u79EF\uFF0C\u90A3\u4E48 a \xD7 b | d</p><p>\u53C8\u56E0\u4E3A d|A \xD7 B\uFF0C\u5373 d|a \xD7 b \xD7 c \xD7 c</p><p>\u53C8\u7531A|d\uFF0CB|d \u53EF\u4EE5\u77E5\u9053 d = [a \xD7 b \xD7 c\uFF0C a \xD7 b \xD7 c \xD7 c]</p><ol><li>\u5F53 A \u4E0E B \u4E92\u8D28\uFF0Cc = gcd(A, B) = 1\uFF0Cd \u53D6 a \xD7 b \xD7 c \xD7 c \u6EE1\u8DB3 A \xD7 B = d \xD7 c</li><li>\u5F53 A \u4E0E B \u4E92\u8D28\uFF0Cc = gcd(A, B) &gt; 1\uFF0Cd \u53D6 a \xD7 b \xD7 c \u6EE1\u8DB3 A \xD7 B = d \xD7 c</li><li>\u5F53 A|B or B|A \uFF0Cc = A or B\uFF0C\u5219 a = 1, b = B / A or a = A / B, b = 1 \uFF0Cd \u53D6 a \xD7 b \xD7 c \u6EE1\u8DB3 A \xD7 B = d \xD7 c</li></ol><p>\u7EFC\u4E0A\u53EF\u5F97\uFF1Ad = (A \xD7 B) / gcd(A, B)</p></blockquote><p>\u8D34\u4E00\u4E2A\u5B8C\u7F8E\u8BC1\u660E\u7684\u535A\u5BA2\uFF1A <a href="https://blog.csdn.net/qq_37388085/article/details/103488541" target="_blank" rel="noopener noreferrer">\u70B9\u51FB\u8DF3\u8F6C</a></p><div class="language-cpp"><pre><code>include <span class="token operator">&lt;</span>iostream<span class="token operator">&gt;</span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> n<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">gcd</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> b <span class="token operator">?</span> <span class="token function">gcd</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> a <span class="token operator">%</span> b<span class="token punctuation">)</span> <span class="token operator">:</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">--</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> a<span class="token punctuation">,</span> b<span class="token punctuation">;</span>
        cin <span class="token operator">&gt;&gt;</span> a <span class="token operator">&gt;&gt;</span> b<span class="token punctuation">;</span>
        
        cout <span class="token operator">&lt;&lt;</span> a <span class="token operator">*</span> b <span class="token operator">/</span> <span class="token function">gcd</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6269\u5C55\u6B27\u51E0\u91CC\u5F97\u7B97\u6CD5" tabindex="-1">\u6269\u5C55\u6B27\u51E0\u91CC\u5F97\u7B97\u6CD5 <a class="header-anchor" href="#\u6269\u5C55\u6B27\u51E0\u91CC\u5F97\u7B97\u6CD5" aria-hidden="true">#</a></h2><p>\u518D\u6B21\u7531\u6570\u8BBA\u7684\u57FA\u7840\u77E5\u8BC6\uFF1A<code>\u82E5 d|a \u4E14 d|b \u5219 d|ax+by (d|a \u8868\u793Ad\u80FD\u6574\u9664a\uFF0Cx\uFF0Cy\u4E3A\u4EFB\u610F\u5E38\u6570) </code><br></p><p>\u53EF\u4EE5\u77E5\u9053 \u5B58\u5728x\uFF0C y\uFF0C\u4F7F\u5F97<code>a * x + b * y = gcd(a, b)</code> <br> \u53C8\u56E0\u4E3A <code>gcd(a, b) = gcd(b, a % b)</code>\uFF0C\u5219<br><code> b * x&#39; + a % b * x&#39; = gcd(b, a % b)</code><br><code>b * x&#39; + ( a - [a / b] * b ) * x&#39; = gcd(b, a % b) \uFF0C []\u8868\u793A\u5411\u4E0B\u53D6\u6574</code><br><code>a * x&#39; + b * (x&#39; - [a / b] * x&#39;) = gcd(b, a % b) = gcd(a, b)</code><br></p><p>\u5219\u53EF\u4EE5\u5F97\u5230 $\\left{\\begin{matrix} x = y&#39; \\ y = x&#39; - \\left\\lfloor a/b \\right\\rfloor * y&#39; \\end{matrix}\\right.$ \uFF0C\u56E0\u6B64\u53EF\u4EE5\u901A\u8FC7\u9012\u5F52\u7684\u65B9\u5F0F\u6C42\u89E3\u51FAx, y</p><blockquote><p>\u6CE8\u610F\uFF1A\u8FD9\u91CC\u7684 x \u548C y \u662F gcd(a, b)\u5BF9\u5E94\u7684\u53C2\u6570\uFF0C \u800Cx&#39;, y&#39; \u662Fgcd(b, a % b)\u5BF9\u5E94\u7684\u53C2\u6570\u3002</p></blockquote><p>\u8FB9\u754C\uFF1A\u5F53b = 0 \u65F6\uFF0C\u53EF\u4EE5\u77E5\u9053ax * by = a\uFF0C\u5219 x = 1\uFF0Cy = 0</p><div class="language-cpp"><pre><code>include <span class="token operator">&lt;</span>iostream<span class="token operator">&gt;</span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">exgcd</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">&amp;</span>x<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">&amp;</span>y<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>b<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> a<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> 
    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> d <span class="token operator">=</span> <span class="token function">exgcd</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> a <span class="token operator">%</span> b<span class="token punctuation">,</span> y<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
        y <span class="token operator">-=</span> a <span class="token operator">/</span> b <span class="token operator">*</span> x<span class="token punctuation">;</span>
        <span class="token keyword">return</span> d<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">--</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">;</span><span class="token punctuation">;</span>
        cin <span class="token operator">&gt;&gt;</span> a <span class="token operator">&gt;&gt;</span> b<span class="token punctuation">;</span>
        <span class="token keyword">int</span> t <span class="token operator">=</span> <span class="token function">exgcd</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
        cout <span class="token operator">&lt;&lt;</span> x <span class="token operator">&lt;&lt;</span> <span class="token char">&#39; &#39;</span> <span class="token operator">&lt;&lt;</span> y <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u7EBF\u6027\u540C\u4F59\u65B9\u7A0B" tabindex="-1">\u7EBF\u6027\u540C\u4F59\u65B9\u7A0B <a class="header-anchor" href="#\u7EBF\u6027\u540C\u4F59\u65B9\u7A0B" aria-hidden="true">#</a></h3><p>\u6CE8\u610F\uFF1Aexgcd(a, b, x, y) \u4E0E $ax + by = gcd(a, b)$\u4E2D\u7684b\u5B9E\u9645\u4E0A\u662F$ax \\equiv gcd(a, b) (mod \\space b)$\u4E2D\u7684b</p><div class="language-cpp"><pre><code>include <span class="token operator">&lt;</span>iostream<span class="token operator">&gt;</span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> n<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">exgcd</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">&amp;</span>x<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">&amp;</span>y<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>b<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> a<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> 
    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> d <span class="token operator">=</span> <span class="token function">exgcd</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> a <span class="token operator">%</span> b<span class="token punctuation">,</span> y<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
        y <span class="token operator">-=</span> a <span class="token operator">/</span> b <span class="token operator">*</span> x<span class="token punctuation">;</span>
        <span class="token keyword">return</span> d<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">--</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> m<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">;</span>
        cin <span class="token operator">&gt;&gt;</span> a <span class="token operator">&gt;&gt;</span> b <span class="token operator">&gt;&gt;</span> m<span class="token punctuation">;</span>
        <span class="token keyword">int</span> d <span class="token operator">=</span> <span class="token function">exgcd</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> m<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">%</span> d<span class="token punctuation">)</span> <span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">&quot;impossible&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> cout <span class="token operator">&lt;&lt;</span> <span class="token number">1LL</span> <span class="token operator">*</span> x <span class="token operator">*</span> b <span class="token operator">/</span> d <span class="token operator">%</span> m <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u9006\u5143" tabindex="-1">\u9006\u5143 <a class="header-anchor" href="#\u9006\u5143" aria-hidden="true">#</a></h2><p>\u82E5\u5B58\u5728b\uFF0C\u4F7F\u5F97$b|a, a/b \\equiv a \xD7 x (mod \\space p)$ <br> \u4E24\u8FB9\u540C\u4E58b \u53EF\u5F97\u5230$a \\equiv a \xD7 x \xD7 b (mod \\space p)$ <br> \u4E24\u8FB9\u540C\u7EA6a \u53EF\u5F97\u5230$b \xD7 x \\equiv 1 (mod \\space p)$ <br> \u5219\u79F0x\u4E3Ab\u6A21p\u7684\u4E58\u6CD5\u9006\u5143\uFF0C\u8BB0\u4E3A$b^{-1}(mod \\space p)$</p><p><strong>\u5F53\u4E14\u4EC5\u5F53 b \u4E0E p \u4E92\u8D28\u65F6\uFF0Cb\u624D\u6709\u9006\u5143</strong></p><blockquote><p>b \u4E3A p \u7684\u500D\u6570\u65F6\uFF0Cb * x % p = 0 \uFF0Cx \u4E3A\u4EFB\u610F\u6574\u6570\uFF0C\u90A3\u4E48b\u4E58\u4E8E\u9006\u5143\u6A21p\u4E3A0\u800C\u4E0D\u4E3A1\uFF0C\u56E0\u6B64\u5F53b\u4E0Ep\u4E0D\u4E92\u8D28\u65F6\uFF0Cb\u6CA1\u6709\u6A21p\u7684\u4E58\u6CD5\u9006\u5143</p></blockquote><blockquote><p>\u9006\u5143\u7684\u4F5C\u7528\uFF1A\u5F53\u6A21\u4E0A\u4E00\u4E2A\u6570\u65F6\uFF0C\u4E58\u4E8E\u6570\u7684\u9006\u5143\u540C\u7B49\u4E8E\u9664\u4E0A\u8FD9\u4E2A\u6570\uFF0C\u90A3\u4E48\u53EF\u4EE5\u907F\u514D\u505A\u9664\u6CD5\u8FD0\u7B97\u3002</p></blockquote><h3 id="\u5FEB\u901F\u5E42\u6C42\u9006\u5143" tabindex="-1">\u5FEB\u901F\u5E42\u6C42\u9006\u5143 <a class="header-anchor" href="#\u5FEB\u901F\u5E42\u6C42\u9006\u5143" aria-hidden="true">#</a></h3><p>\u8D39\u9A6C\u5C0F\u5B9A\u7406\uFF1A\u5F53p\u4E3A\u8D28\u6570\uFF0Ca\u4E3A\u4EFB\u610F\u81EA\u7136\u6570\u4E14a\u4E0Ep\u4E92\u8D28\u65F6\uFF0C\u6709$a^p \\equiv a (mod \\space p)$ \u53EF\u5316\u7B80\u4E3A$a^{p-2} * a \\equiv 1(mod \\space p)$<br> \u90A3\u4E48\uFF0C\u5F53\u4E14\u4EC5\u5F53p\u4E3A\u8D28\u6570\u4E14 a \u4E0E p \u4E92\u8D28\u65F6\uFF0C\u53EF\u4EE5\u7531\u8D39\u9A6C\u5C0F\u5B9A\u7406\u5F97\u5230a\u6A21p\u7684\u4E58\u6CD5\u9006\u5143\u4E3A$a^{p-2}$<br></p><div class="language-cpp"><pre><code>include <span class="token operator">&lt;</span>iostream<span class="token operator">&gt;</span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">typedef</span> <span class="token keyword">long</span> <span class="token keyword">long</span> LL<span class="token punctuation">;</span>

LL <span class="token function">qmi</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">,</span> <span class="token keyword">int</span> mod<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    LL res <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>k<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> res <span class="token operator">=</span> res <span class="token operator">*</span> a <span class="token operator">%</span> mod<span class="token punctuation">;</span>
        a <span class="token operator">=</span> <span class="token number">1LL</span> <span class="token operator">*</span> a <span class="token operator">*</span> a <span class="token operator">%</span> mod<span class="token punctuation">;</span>
        k <span class="token operator">&gt;&gt;=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">--</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> a<span class="token punctuation">,</span> p<span class="token punctuation">;</span>
        cin <span class="token operator">&gt;&gt;</span> a <span class="token operator">&gt;&gt;</span> p<span class="token punctuation">;</span>
        LL ans <span class="token operator">=</span> <span class="token function">qmi</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> p <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">%</span> p <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">&quot;impossible&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token keyword">else</span> cout <span class="token operator">&lt;&lt;</span> ans <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u6269\u5C55\u6B27\u51E0\u91CC\u5F97\u7B97\u6CD5\u6C42\u9006\u5143" tabindex="-1">\u6269\u5C55\u6B27\u51E0\u91CC\u5F97\u7B97\u6CD5\u6C42\u9006\u5143 <a class="header-anchor" href="#\u6269\u5C55\u6B27\u51E0\u91CC\u5F97\u7B97\u6CD5\u6C42\u9006\u5143" aria-hidden="true">#</a></h3><p>\u8D39\u9A6C\u5C0F\u5B9A\u7406\u6210\u7ACB\u7684\u524D\u63D0\u662Fp\u4E3A\u8D28\u6570\uFF0C\u5982\u679Cp\u4E3A\u5408\u6570\uFF0C\u53EA\u80FD\u901A\u8FC7\u6269\u5C55\u6B27\u51E0\u91CC\u5F97\u7B97\u6CD5\u6C42\u9006\u5143\u4E86<br> \u7531\u4E4B\u524D\u7684\u5206\u6790\u77E5\u9053\uFF0C\u5F53\u4E14\u4EC5\u5F53 a \u4E0E p \u4E92\u8D28\u65F6\uFF0Ca\u624D\u6709\u9006\u5143\uFF0C\u5373$gcd(a, p) = 1$<br></p><p>\u5047\u8BBEa\u7684\u9006\u5143\u4E3Ax\uFF0C\u5219\u6709$a \xD7 x \\equiv 1 (mod \\space p)$<br> \u5373$a \xD7 x + p \xD7 y = 1$ \u90A3\u4E48\u53EF\u4EE5\u7528exgcd(a, p, x, y)\uFF0C\u6C42\u89E3x.</p><div class="language-cpp"><pre><code>include <span class="token operator">&lt;</span>iostream<span class="token operator">&gt;</span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> n<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">exgcd</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">&amp;</span>x<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">&amp;</span>y<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>b<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> a<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> d <span class="token operator">=</span> <span class="token function">exgcd</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> a <span class="token operator">%</span> b<span class="token punctuation">,</span> y<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
        y <span class="token operator">-=</span> a <span class="token operator">/</span> b <span class="token operator">*</span> x<span class="token punctuation">;</span>
        <span class="token keyword">return</span> d<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">--</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">;</span>
        cin <span class="token operator">&gt;&gt;</span> a <span class="token operator">&gt;&gt;</span> b<span class="token punctuation">;</span>
        
        <span class="token keyword">int</span> t <span class="token operator">=</span> <span class="token function">exgcd</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>t <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> cout <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token number">1LL</span> <span class="token operator">*</span> x <span class="token operator">%</span> b <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token operator">%</span> b <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>  <span class="token comment">//\u6269\u5C55\u6B27\u51E0\u91CC\u5F97\u7B97\u6CD5\u5F97\u5230\u7684\u6570\u53EF\u80FD\u662F\u8D1F\u7684\uFF0C\u4F46\u662F\u6570\u5B66\u4E2Dmod\u7684\u7ED3\u679C\u5FC5\u987B\u4E3A\u6B63\uFF0C\u56E0\u6B64\u8F6C\u6362\u6210\u6B63\u6570\u3002</span>
        <span class="token keyword">else</span> <span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">&quot;impossible&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,82),e=[o];function c(l,k,u,r,i,d){return a(),s("div",null,e)}var w=n(t,[["render",c]]);export{b as __pageData,w as default};
