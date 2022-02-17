import{c as n}from"./app.4ee60a11.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u8F93\u5165\u4E00\u4E2A\u5B57\u7B26\u4E32,\u6309\u5B57\u5178\u5E8F\u6253\u5370\u51FA\u8BE5\u5B57\u7B26\u4E32\u4E2D\u5B57\u7B26\u7684\u6240\u6709\u6392\u5217\u3002\u4F8B\u5982\u8F93\u5165\u5B57\u7B26\u4E32<code>abc</code>,\u5219\u6253\u5370\u51FA\u7531\u5B57\u7B26<code>a,b,c</code>\u6240\u80FD\u6392\u5217\u51FA\u6765\u7684\u6240\u6709\u5B57\u7B26\u4E32<code>abc,acb,bac,bca,cab</code>\u548C<code>cba</code>\u3002</p><h2 id="\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a> \u601D\u8DEF</h2><p>\u4F7F\u7528\u56DE\u6EAF\u6CD5</p><p>\u8BB0\u5F55\u4E00\u4E2A\u5B57\u7B26\uFF08<code>temp</code>\uFF09\uFF0C\u7528\u4E8E\u5B58\u50A8\u5F53\u524D\u9700\u8981\u8FDB\u5165\u6392\u5217\u7684\u5B57\u7B26</p><p>\u8BB0\u5F55\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF08<code>current</code>\uFF09\uFF0C\u7528\u4E8E\u8BB0\u5F55\u5F53\u524D\u5DF2\u7ECF\u6392\u5217\u597D\u7684\u5B57\u7B26</p><p>\u8BB0\u5F55\u4E00\u4E2A\u961F\u5217\uFF08<code>queue</code>\uFF09\uFF0C\u7528\u4E8E\u5B58\u50A8\u8FD8\u672A\u88AB\u6392\u5217\u7684\u5B57\u7B26</p><ul><li>\u6BCF\u6B21\u6392\u5217\u5C06<code>temp</code>\u6DFB\u52A0\u5230<code>current</code></li><li>\u5982\u679C<code>queue</code>\u4E3A\u7A7A\uFF0C\u5219\u672C\u6B21\u6392\u5217\u5B8C\u6210\uFF0C\u5C06<code>curret</code>\u52A0\u5165\u5230\u7ED3\u679C\u6570\u7EC4\u4E2D\uFF0C\u7ED3\u675F\u9012\u5F52</li><li>\u5982\u679C<code>queue</code>\u4E0D\u4E3A\u7A7A\uFF0C\u8BF4\u660E\u8FD8\u6709\u672A\u6392\u5217\u7684\u5B57\u7B26</li><li>\u9012\u5F52\u6392\u5217<code>queue</code>\u4E2D\u5269\u4F59\u7684\u5B57\u7B26</li><li>\u4E3A\u4E86\u4E0D\u5F71\u54CD\u540E\u7EED\u6392\u5217\uFF0C\u6BCF\u6B21\u9012\u5F52\u5B8C\u6210\uFF0C\u5C06\u5F53\u524D\u9012\u5F52\u7684\u5B57\u7B26<code>temp</code>\u52A0\u56DE\u961F\u5217</li></ul><h2 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801</h2><blockquote><p>\u8BB0\u5F55\u4E00\u4E2A\u5F53\u524D\u6392\u5217\u5B57\u7B26temp</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Permutation</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        queue <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
        <span class="token function">PermutationCore</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      result<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">PermutationCore</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span> result<span class="token punctuation">,</span> temp <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> current <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      current <span class="token operator">+=</span> temp<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        temp <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">PermutationCore</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span> result<span class="token punctuation">,</span> temp<span class="token punctuation">,</span> current<span class="token punctuation">)</span><span class="token punctuation">;</span>
        queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><blockquote><p>\u8BB0\u5F55\u4E00\u4E2A\u5F53\u524D\u7D22\u5F15\uFF0C\u4E0D\u65AD\u4EA4\u6362\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\uFF08\u4E0D\u592A\u597D\u7406\u89E3\uFF0C\u4E0D\u63A8\u8350\uFF09</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Permutation</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">var</span> array <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">permutate</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
      result<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">permutate</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> index<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">===</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>array<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> index<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">swap</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> index<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">permutate</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">swap</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> i<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="\u8003\u5BDF\u70B9" tabindex="-1"><a class="header-anchor" href="#\u8003\u5BDF\u70B9" aria-hidden="true">#</a> \u8003\u5BDF\u70B9</h2><ul><li>\u5B57\u7B26\u4E32</li><li>\u56DE\u6EAF\u7B97\u6CD5</li></ul>`,15);function t(e,o){return p}var l=s(a,[["render",t]]);export{l as default};
