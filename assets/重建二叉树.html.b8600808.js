import{o as a,a as p,b as t,F as e,c as n}from"./app.4ee60a11.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";const c={},l=n('<h2 id="\u9898\u76EE1-\u4E8C\u53C9\u6811\u91CD\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE1-\u4E8C\u53C9\u6811\u91CD\u5EFA" aria-hidden="true">#</a> \u9898\u76EE1-\u4E8C\u53C9\u6811\u91CD\u5EFA</h2><p>\u8F93\u5165\u67D0\u4E8C\u53C9\u6811\u7684\u524D\u5E8F\u904D\u5386\u548C\u4E2D\u5E8F\u904D\u5386\u7684\u7ED3\u679C\uFF0C\u8BF7\u91CD\u5EFA\u51FA\u8BE5\u4E8C\u53C9\u6811\u3002\u5047\u8BBE\u8F93\u5165\u7684\u524D\u5E8F\u904D\u5386\u548C\u4E2D\u5E8F\u904D\u5386\u7684\u7ED3\u679C\u4E2D\u90FD\u4E0D\u542B\u91CD\u590D\u7684\u6570\u5B57\u3002</p><p>\u4F8B\u5982\u8F93\u5165\u524D\u5E8F\u904D\u5386\u5E8F\u5217<code>{1,2,4,7,3,5,6,8}</code>\u548C\u4E2D\u5E8F\u904D\u5386\u5E8F\u5217<code>{4,7,2,1,5,3,8,6}</code>\uFF0C\u5219\u91CD\u5EFA\u4E8C\u53C9\u6811\u5E76\u8FD4\u56DE\u3002</p><h2 id="\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a> \u601D\u8DEF</h2><ul><li>\u524D\u5E8F\u904D\u5386\uFF1A\u6839\u8282\u70B9 + \u5DE6\u5B50\u6811\u524D\u5E8F\u904D\u5386 + \u53F3\u5B50\u6811\u524D\u5E8F\u904D\u5386</li><li>\u4E2D\u5E8F\u904D\u5386\uFF1A\u5DE6\u5B50\u6811\u4E2D\u5E8F\u904D\u5386 + \u6839\u8282\u70B9 + \u53F3\u5B57\u6570\u4E2D\u5E8F\u904D\u5386</li><li>\u540E\u5E8F\u904D\u5386\uFF1A\u5DE6\u5B50\u6811\u540E\u5E8F\u904D\u5386 + \u53F3\u5B50\u6811\u540E\u5E8F\u904D\u5386 + \u6839\u8282\u70B9</li></ul><p>\u6839\u636E\u4E0A\u9762\u7684\u89C4\u5F8B\uFF1A</p><ul><li>\u524D\u5E8F\u904D\u5386\u627E\u5230\u6839\u7ED3\u70B9<code>root</code></li><li>\u627E\u5230<code>root</code>\u5728\u4E2D\u5E8F\u904D\u5386\u7684\u4F4D\u7F6E -&gt; \u5DE6\u5B50\u6811\u7684\u957F\u5EA6\u548C\u53F3\u5B50\u6811\u7684\u957F\u5EA6</li><li>\u622A\u53D6\u5DE6\u5B50\u6811\u7684\u4E2D\u5E8F\u904D\u5386\u3001\u53F3\u5B50\u6811\u7684\u4E2D\u5E8F\u904D\u5386</li><li>\u622A\u53D6\u5DE6\u5B50\u6811\u7684\u524D\u5E8F\u904D\u5386\u3001\u53F3\u5B50\u6811\u7684\u524D\u5E8F\u904D\u5386</li><li>\u9012\u5F52\u91CD\u5EFA\u4E8C\u53C9\u6811</li></ul>',7),u=["src"],i=n(`<h2 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">reConstructBinaryTree</span><span class="token punctuation">(</span><span class="token parameter">pre<span class="token punctuation">,</span> vin</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>pre<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>pre<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>pre<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">const</span> value <span class="token operator">=</span> pre<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> index <span class="token operator">=</span> vin<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> vinLeft <span class="token operator">=</span> vin<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> vinRight <span class="token operator">=</span> vin<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>index<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> preLeft <span class="token operator">=</span> pre<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>index<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> preRight <span class="token operator">=</span> pre<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>index<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        node<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">reConstructBinaryTree</span><span class="token punctuation">(</span>preLeft<span class="token punctuation">,</span> vinLeft<span class="token punctuation">)</span><span class="token punctuation">;</span>
        node<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">reConstructBinaryTree</span><span class="token punctuation">(</span>preRight<span class="token punctuation">,</span> vinRight<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> node<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="\u9898\u76EE2-\u6C42\u4E8C\u53C9\u6811\u7684\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE2-\u6C42\u4E8C\u53C9\u6811\u7684\u904D\u5386" aria-hidden="true">#</a> \u9898\u76EE2-\u6C42\u4E8C\u53C9\u6811\u7684\u904D\u5386</h2><p>\u7ED9\u5B9A\u4E00\u68F5\u4E8C\u53C9\u6811\u7684\u524D\u5E8F\u904D\u5386\u548C\u4E2D\u5E8F\u904D\u5386\uFF0C\u6C42\u5176\u540E\u5E8F\u904D\u5386</p><p>\u8F93\u5165\u63CF\u8FF0:</p><p>\u4E24\u4E2A\u5B57\u7B26\u4E32\uFF0C\u5176\u957F\u5EA6n\u5747\u5C0F\u4E8E\u7B49\u4E8E26\u3002 \u7B2C\u4E00\u884C\u4E3A\u524D\u5E8F\u904D\u5386\uFF0C\u7B2C\u4E8C\u884C\u4E3A\u4E2D\u5E8F\u904D\u5386\u3002 \u4E8C\u53C9\u6811\u4E2D\u7684\u7ED3\u70B9\u540D\u79F0\u4EE5\u5927\u5199\u5B57\u6BCD\u8868\u793A\uFF1AA\uFF0CB\uFF0CC....\u6700\u591A26\u4E2A\u7ED3\u70B9\u3002</p><p>\u8F93\u51FA\u63CF\u8FF0:</p><p>\u8F93\u5165\u6837\u4F8B\u53EF\u80FD\u6709\u591A\u7EC4\uFF0C\u5BF9\u4E8E\u6BCF\u7EC4\u6D4B\u8BD5\u6837\u4F8B\uFF0C \u8F93\u51FA\u4E00\u884C\uFF0C\u4E3A\u540E\u5E8F\u904D\u5386\u7684\u5B57\u7B26\u4E32\u3002</p><p>\u6837\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165
ABC
BAC
FDXEAG
XDEFAG

\u8F93\u51FA
BCA
XEDGAF
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u601D\u8DEF-1" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF-1" aria-hidden="true">#</a> \u601D\u8DEF</h2><p>\u548C\u4E0A\u9762\u9898\u76EE\u7684\u601D\u8DEF\u57FA\u672C\u76F8\u540C</p><ul><li>\u524D\u5E8F\u904D\u5386\u627E\u5230\u6839\u7ED3\u70B9<code>root</code></li><li>\u627E\u5230<code>root</code>\u5728\u4E2D\u5E8F\u904D\u5386\u7684\u4F4D\u7F6E -&gt; \u5DE6\u5B50\u6811\u7684\u957F\u5EA6\u548C\u53F3\u5B50\u6811\u7684\u957F\u5EA6</li><li>\u622A\u53D6\u5DE6\u5B50\u6811\u7684\u4E2D\u5E8F\u904D\u5386\u3001\u53F3\u5B50\u6811\u7684\u4E2D\u5E8F\u904D\u5386</li><li>\u622A\u53D6\u5DE6\u5B50\u6811\u7684\u524D\u5E8F\u904D\u5386\u3001\u53F3\u5B50\u6811\u7684\u524D\u5E8F\u904D\u5386</li><li>\u9012\u5F52\u62FC\u63A5\u4E8C\u53C9\u6811\u7684\u540E\u5E8F\u904D\u5386</li></ul><h2 id="\u4EE3\u7801-1" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801-1" aria-hidden="true">#</a> \u4EE3\u7801</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> pre<span class="token punctuation">;</span>
<span class="token keyword">let</span> vin<span class="token punctuation">;</span>
 
<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>pre <span class="token operator">=</span> <span class="token function">readline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    vin <span class="token operator">=</span> <span class="token function">readline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token function">getHRD</span><span class="token punctuation">(</span>pre<span class="token punctuation">,</span>vin<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
    <span class="token keyword">function</span> <span class="token function">getHRD</span><span class="token punctuation">(</span><span class="token parameter">pre<span class="token punctuation">,</span> vin</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pre<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>pre<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> head <span class="token operator">=</span> pre<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> splitIndex <span class="token operator">=</span> vin<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> vinLeft <span class="token operator">=</span> vin<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> splitIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> vinRight <span class="token operator">=</span> vin<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>splitIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> preLeft <span class="token operator">=</span> pre<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> splitIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> preRight <span class="token operator">=</span> pre<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>splitIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token function">getHRD</span><span class="token punctuation">(</span>preLeft<span class="token punctuation">,</span> vinLeft<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">getHRD</span><span class="token punctuation">(</span>preRight<span class="token punctuation">,</span> vinRight<span class="token punctuation">)</span> <span class="token operator">+</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="\u8003\u5BDF\u70B9" tabindex="-1"><a class="header-anchor" href="#\u8003\u5BDF\u70B9" aria-hidden="true">#</a> \u8003\u5BDF\u70B9</h2><ul><li>\u4E8C\u53C9\u6811</li><li>\u590D\u6742\u95EE\u9898\u62C6\u89E3</li></ul>`,17);function r(s,k){return a(),p(e,null,[l,t("img",{src:s.$withBase("/\u91CD\u5EFA\u4E8C\u53C9\u6811.png"),alt:"foo"},null,8,u),i],64)}var m=o(c,[["render",r]]);export{m as default};
