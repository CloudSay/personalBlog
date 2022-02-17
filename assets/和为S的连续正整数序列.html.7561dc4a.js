import{c as n}from"./app.4ee60a11.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u8F93\u5165\u4E00\u4E2A\u6B63\u6570<code>S</code>\uFF0C\u6253\u5370\u51FA\u6240\u6709\u548C\u4E3AS\u7684\u8FDE\u7EED\u6B63\u6570\u5E8F\u5217\u3002</p><p>\u4F8B\u5982\uFF1A\u8F93\u5165<code>15</code>\uFF0C\u6709\u5E8F<code>1+2+3+4+5</code> = <code>4+5+6</code> = <code>7+8</code> = <code>15</code> \u6240\u4EE5\u6253\u5370\u51FA3\u4E2A\u8FDE\u7EED\u5E8F\u5217<code>1-5</code>\uFF0C<code>5-6</code>\u548C<code>7-8</code>\u3002</p><h2 id="\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a> \u601D\u8DEF</h2><ul><li><p>\u521B\u5EFA\u4E00\u4E2A\u5BB9\u5668<code>child</code>\uFF0C\u7528\u4E8E\u8868\u793A\u5F53\u524D\u7684\u5B50\u5E8F\u5217\uFF0C\u521D\u59CB\u5143\u7D20\u4E3A<code>1,2</code></p></li><li><p>\u8BB0\u5F55\u5B50\u5E8F\u5217\u7684\u5F00\u5934\u5143\u7D20<code>small</code>\u548C\u672B\u5C3E\u5143\u7D20<code>big</code></p></li><li><p><code>big</code>\u5411\u53F3\u79FB\u52A8\u5B50\u5E8F\u5217\u672B\u5C3E\u589E\u52A0\u4E00\u4E2A\u6570 <code>small</code>\u5411\u53F3\u79FB\u52A8\u5B50\u5E8F\u5217\u5F00\u5934\u51CF\u5C11\u4E00\u4E2A\u6570</p></li><li><p>\u5F53\u5B50\u5E8F\u5217\u7684\u548C\u5927\u4E8E\u76EE\u6807\u503C\uFF0C<code>small</code>\u5411\u53F3\u79FB\u52A8\uFF0C\u5B50\u5E8F\u5217\u7684\u548C\u5C0F\u4E8E\u76EE\u6807\u503C\uFF0C<code>big</code>\u5411\u53F3\u79FB\u52A8</p></li></ul><h2 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">FindContinuousSequence</span><span class="token punctuation">(</span><span class="token parameter">sum</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> child <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> big <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> small <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> currentSum <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>big <span class="token operator">&lt;</span> sum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>currentSum <span class="token operator">&lt;</span> sum <span class="token operator">&amp;&amp;</span> big <span class="token operator">&lt;</span> sum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          child<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">++</span>big<span class="token punctuation">)</span><span class="token punctuation">;</span>
          currentSum <span class="token operator">+=</span> big<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>currentSum <span class="token operator">&gt;</span> sum <span class="token operator">&amp;&amp;</span> small <span class="token operator">&lt;</span> big<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          child<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          currentSum <span class="token operator">-=</span> small<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>currentSum <span class="token operator">===</span> sum <span class="token operator">&amp;&amp;</span> child<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>child<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          child<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">++</span>big<span class="token punctuation">)</span><span class="token punctuation">;</span>
          currentSum <span class="token operator">+=</span> big<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,7);function e(t,o){return p}var u=s(a,[["render",e]]);export{u as default};
