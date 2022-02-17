import{c as n}from"./app.4ee60a11.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u64CD\u4F5C\u7ED9\u5B9A\u7684\u4E8C\u53C9\u6811\uFF0C\u5C06\u5176\u53D8\u6362\u4E3A\u6E90\u4E8C\u53C9\u6811\u7684\u955C\u50CF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>       \u6E90\u4E8C\u53C9\u6811 
    	    8
    	   /  \\
    	  6   10
    	 / \\  / \\
    	5  7 9 11
    	\u955C\u50CF\u4E8C\u53C9\u6811
    	    8
    	   /  \\
    	  10   6
    	 / \\  / \\
    	11 9 7  5
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="_1-2-\u89E3\u9898\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#_1-2-\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a> 1.2 \u89E3\u9898\u601D\u8DEF</h2><p>\u9012\u5F52\u4EA4\u6362\u4E8C\u53C9\u6811\u6240\u6709\u8282\u70B9\u5DE6\u53F3\u8282\u70B9\u7684\u4F4D\u7F6E\u3002</p><h2 id="_1-3-\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_1-3-\u4EE3\u7801" aria-hidden="true">#</a> 1.3 \u4EE3\u7801</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Mirror</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> temp <span class="token operator">=</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
        root<span class="token punctuation">.</span>right <span class="token operator">=</span> root<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
        root<span class="token punctuation">.</span>left <span class="token operator">=</span> temp<span class="token punctuation">;</span>
        <span class="token function">Mirror</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">Mirror</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u8003\u5BDF\u70B9" tabindex="-1"><a class="header-anchor" href="#\u8003\u5BDF\u70B9" aria-hidden="true">#</a> \u8003\u5BDF\u70B9</h2><ul><li>\u4E8C\u53C9\u6811</li><li>\u62BD\u8C61\u95EE\u9898\u5F62\u8C61\u5316</li></ul>`,9);function p(t,r){return e}var l=s(a,[["render",p]]);export{l as default};
