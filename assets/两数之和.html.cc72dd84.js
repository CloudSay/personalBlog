import{c as n}from"./app.4ee60a11.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u7ED9\u5B9A\u4E00\u4E2A\u6574\u6570\u6570\u7EC4 <code>nums</code>\xA0\u548C\u4E00\u4E2A\u76EE\u6807\u503C <code>target</code>\uFF0C\u8BF7\u4F60\u5728\u8BE5\u6570\u7EC4\u4E2D\u627E\u51FA\u548C\u4E3A\u76EE\u6807\u503C\u7684\u90A3\u4E24\u4E2A\u6574\u6570\uFF0C\u5E76\u8FD4\u56DE\u4ED6\u4EEC\u7684\u6570\u7EC4\u4E0B\u6807\u3002</p><p>\u4F60\u53EF\u4EE5\u5047\u8BBE\u6BCF\u79CD\u8F93\u5165\u53EA\u4F1A\u5BF9\u5E94\u4E00\u4E2A\u7B54\u6848\u3002\u4F46\u662F\uFF0C\u4F60\u4E0D\u80FD\u91CD\u590D\u5229\u7528\u8FD9\u4E2A\u6570\u7EC4\u4E2D\u540C\u6837\u7684\u5143\u7D20\u3002</p><p>\u793A\u4F8B:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\u7ED9\u5B9A nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target <span class="token operator">=</span> <span class="token number">9</span>

\u56E0\u4E3A nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">7</span> <span class="token operator">=</span> <span class="token number">9</span>
\u6240\u4EE5\u8FD4\u56DE <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a> \u601D\u8DEF</h2><p>\u4F7F\u7528\u4E00\u4E2A<code>map</code>\u5C06\u904D\u5386\u8FC7\u7684\u6570\u5B57\u5B58\u8D77\u6765\uFF0C\u503C\u4F5C\u4E3A<code>key</code>\uFF0C\u4E0B\u6807\u4F5C\u4E3A\u503C\u3002</p><p>\u5BF9\u4E8E\u6BCF\u4E00\u6B21\u904D\u5386\uFF1A</p><ul><li>\u53D6<code>map</code>\u4E2D\u67E5\u627E\u662F\u5426\u6709<code>key</code>\u4E3A<code>target-nums[i]</code>\u7684\u503C</li><li>\u5982\u679C\u53D6\u5230\u4E86\uFF0C\u5219\u6761\u4EF6\u6210\u7ACB\uFF0C\u8FD4\u56DE\u3002</li><li>\u5982\u679C\u6CA1\u6709\u53D6\u5230\uFF0C\u5C06\u5F53\u524D\u503C\u4F5C\u4E3A<code>key</code>\uFF0C\u4E0B\u6807\u4F5C\u4E3A\u503C\u5B58\u5165<code>map</code></li></ul><p>\u65F6\u95F4\u590D\u6742\u5EA6\uFF1A<code>O(n)</code></p><p>\u7A7A\u95F4\u590D\u6742\u5EA6<code>O(n)</code></p><h2 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">[</span>target <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">[</span>map<span class="token punctuation">[</span>target <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            map<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,13);function t(e,o){return p}var l=s(a,[["render",t]]);export{l as default};
