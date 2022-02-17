import{c as n}from"./app.4ee60a11.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u8F93\u5165\u4E24\u68F5\u4E8C\u53C9\u6811<code>A</code>\uFF0C<code>B</code>\uFF0C\u5224\u65AD<code>B</code>\u662F\u4E0D\u662F<code>A</code>\u7684\u5B50\u7ED3\u6784\u3002\uFF08ps\uFF1A\u6211\u4EEC\u7EA6\u5B9A\u7A7A\u6811\u4E0D\u662F\u4EFB\u610F\u4E00\u4E2A\u6811\u7684\u5B50\u7ED3\u6784\uFF09</p><h2 id="\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a> \u601D\u8DEF</h2><p>\u9996\u5148\u627E\u5230<code>A</code>\u6811\u4E2D\u548C<code>B</code>\u6811\u6839\u8282\u70B9\u76F8\u540C\u7684\u8282\u70B9</p><p>\u4ECE\u6B64\u8282\u70B9\u5F00\u59CB\uFF0C\u9012\u5F52<code>AB</code>\u6811\u6BD4\u8F83\u662F\u5426\u6709\u4E0D\u540C\u8282\u70B9</p><h2 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">HasSubtree</span><span class="token punctuation">(</span><span class="token parameter">pRoot1<span class="token punctuation">,</span> pRoot2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>pRoot1 <span class="token operator">&amp;&amp;</span> pRoot2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>pRoot1<span class="token punctuation">.</span>val <span class="token operator">===</span> pRoot2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          result <span class="token operator">=</span> <span class="token function">compare</span><span class="token punctuation">(</span>pRoot1<span class="token punctuation">,</span> pRoot2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          result <span class="token operator">=</span> <span class="token function">HasSubtree</span><span class="token punctuation">(</span>pRoot1<span class="token punctuation">.</span>right<span class="token punctuation">,</span> pRoot2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          result <span class="token operator">=</span> <span class="token function">HasSubtree</span><span class="token punctuation">(</span>pRoot1<span class="token punctuation">.</span>left<span class="token punctuation">,</span> pRoot2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token parameter">pRoot1<span class="token punctuation">,</span> pRoot2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>pRoot2 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>pRoot1 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>pRoot1<span class="token punctuation">.</span>val <span class="token operator">!==</span> pRoot2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token function">compare</span><span class="token punctuation">(</span>pRoot1<span class="token punctuation">.</span>right<span class="token punctuation">,</span> pRoot2<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">compare</span><span class="token punctuation">(</span>pRoot1<span class="token punctuation">.</span>left<span class="token punctuation">,</span> pRoot2<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,7);function t(o,e){return p}var l=s(a,[["render",t]]);export{l as default};
