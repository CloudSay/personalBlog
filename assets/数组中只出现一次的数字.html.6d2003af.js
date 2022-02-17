import{c as n}from"./app.4ee60a11.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u4E00\u4E2A\u6574\u578B\u6570\u7EC4\u91CC\u9664\u4E86\u4E24\u4E2A\u6570\u5B57\u4E4B\u5916\uFF0C\u5176\u4ED6\u7684\u6570\u5B57\u90FD\u51FA\u73B0\u4E86\u5076\u6570\u6B21\u3002\u8BF7\u5199\u7A0B\u5E8F\u627E\u51FA\u8FD9\u4E24\u4E2A\u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57\u3002</p><h2 id="\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a> \u601D\u8DEF</h2><p><code>1\u5F02\u62161=0</code> <code>0\u5F02\u62160=0</code> <code>1\u5F02\u62160=0</code></p><h3 id="\u5982\u679C\u9898\u76EE\u662F\u53EA\u6709\u4E00\u4E2A\u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57" tabindex="-1"><a class="header-anchor" href="#\u5982\u679C\u9898\u76EE\u662F\u53EA\u6709\u4E00\u4E2A\u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57" aria-hidden="true">#</a> \u5982\u679C\u9898\u76EE\u662F\u53EA\u6709\u4E00\u4E2A\u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57\uFF1A</h3><p>\u4E24\u4E2A\u76F8\u540C\u7684\u6570\u5F02\u6216\u503C\u4E3A<code>0</code>\uFF0C\u5C06\u6570\u7EC4\u6240\u6709\u7684\u503C\u8FDB\u884C\u5F02\u6216\u64CD\u4F5C\uFF0C\u6700\u540E\u5269\u4F59\u503C\u5C31\u662F\u76EE\u6807\u503C\u3002</p><h3 id="\u5982\u679C\u6709\u4E24\u4E2A\u51FA\u73B0\u4E00\u6B21\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#\u5982\u679C\u6709\u4E24\u4E2A\u51FA\u73B0\u4E00\u6B21\u7684\u503C" aria-hidden="true">#</a> \u5982\u679C\u6709\u4E24\u4E2A\u51FA\u73B0\u4E00\u6B21\u7684\u503C</h3><ul><li>\u6570\u7EC4\u6240\u6709\u5143\u7D20\u5F02\u6216\u540E\u662F\u4E24\u4E2A\u76EE\u6807\u503C\u7684\u5F02\u6216\u503C</li><li>\u4E24\u4E2A\u76EE\u6807\u503C\u4E0D\u76F8\u7B49\uFF0C\u6240\u4EE5\u6700\u7EC8\u7684\u5F02\u6216\u503C\u4E0D\u4E3A<code>0</code></li><li>\u6700\u7EC8\u5F02\u6216\u503C\u7684\u4E8C\u8FDB\u5236\u67D0\u4E00\u4F4D\u80AF\u5B9A\u662F<code>1</code>\uFF0C\u627E\u5230\u8FD9\u4E2A\u4F4D\u7F6E\u4E3A<code>index</code></li><li>\u6240\u4EE5\u76EE\u6807\u7684\u4E24\u4E2A\u503C\u7684\u4E8C\u8FDB\u5236\uFF0C\u4E00\u4E2A<code>index</code>\u4F4D\u4E3A<code>0</code>\uFF0C\u53E6\u4E00\u4E2A<code>index</code>\u4F4D\u4E3A<code>1</code></li><li>\u6309\u4E8C\u8FDB\u5236<code>index</code>\u4F4D\u4E3A<code>0</code>\u548C<code>1</code>\uFF0C\u5C06\u6570\u7EC4\u5206\u4E24\u6279\u8FDB\u884C\u5F02\u6216\uFF0C\u4E24\u6279\u6700\u540E\u7684\u7ED3\u679C\u5373\u4E3A\u4E24\u4E2A\u76EE\u6807\u503C</li></ul><h2 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">FindNumsAppearOnce</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> exclusive <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        exclusive <span class="token operator">=</span> exclusive <span class="token operator">^</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token function">findFirst1</span><span class="token punctuation">(</span>exclusive<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> result2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isN1</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          result1 <span class="token operator">=</span> result1 <span class="token operator">^</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          result2 <span class="token operator">=</span> result2 <span class="token operator">^</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span>result1<span class="token punctuation">,</span> result2<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u627E\u5230n\u7684\u4E8C\u8FDB\u5236\u7B2C\u4E00\u4E2A\u4E3A1\u7684\u4F4D\u7F6E</span>
    <span class="token keyword">function</span> <span class="token function">findFirst1</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>n <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> index <span class="token operator">&lt;</span> <span class="token number">64</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        n <span class="token operator">=</span> n <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
        index<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> index<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u5224\u65ADn\u7684\u4E8C\u8FDB\u5236\u7B2Cindex\u4F4D\u662F\u5426\u4E3A1</span>
    <span class="token keyword">function</span> <span class="token function">isN1</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> n <span class="token operator">&amp;</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;&gt;</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div>`,10);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
