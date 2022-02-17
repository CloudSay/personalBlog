import{r as o,o as e,a as c,b as n,e as l,F as u,c as a,d as s}from"./app.4ee60a11.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},k=a('<h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u5730\u4E0A\u6709\u4E00\u4E2Am\u884C\u548Cn\u5217\u7684\u65B9\u683C\u3002\u4E00\u4E2A\u673A\u5668\u4EBA\u4ECE\u5750\u68070,0\u7684\u683C\u5B50\u5F00\u59CB\u79FB\u52A8\uFF0C\u6BCF\u4E00\u6B21\u53EA\u80FD\u5411\u5DE6\uFF0C\u53F3\uFF0C\u4E0A\uFF0C\u4E0B\u56DB\u4E2A\u65B9\u5411\u79FB\u52A8\u4E00\u683C\uFF0C\u4F46\u662F\u4E0D\u80FD\u8FDB\u5165\u884C\u5750\u6807\u548C\u5217\u5750\u6807\u7684\u6570\u4F4D\u4E4B\u548C\u5927\u4E8Ek\u7684\u683C\u5B50\u3002</p><p>\u4F8B\u5982\uFF0C\u5F53k\u4E3A18\u65F6\uFF0C\u673A\u5668\u4EBA\u80FD\u591F\u8FDB\u5165\u65B9\u683C\uFF0835,37\uFF09\uFF0C\u56E0\u4E3A3+5+3+7 = 18\u3002\u4F46\u662F\uFF0C\u5B83\u4E0D\u80FD\u8FDB\u5165\u65B9\u683C\uFF0835,38\uFF09\uFF0C\u56E0\u4E3A3+5+3+8 = 19\u3002\u8BF7\u95EE\u8BE5\u673A\u5668\u4EBA\u80FD\u591F\u8FBE\u5230\u591A\u5C11\u4E2A\u683C\u5B50\uFF1F</p><h2 id="\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a> \u601D\u8DEF</h2><p>\u4ECE\u7B2C\u4E00\u4E2A\u683C\u5F00\u59CB\u8D70\uFF0C\u8FDB\u5165\u9012\u5F52</p><ul><li>\u5224\u65AD\u5F53\u524D\u5B57\u7B26\u662F\u5426\u6EE1\u8DB3\u9012\u5F52\u7EC8\u6B62\u6761\u4EF6</li><li>\u9012\u5F52\u7EC8\u6B62\u6761\u4EF6\uFF1A(1).\u884C\u5217\u8D8A\u754C (2).\u884C\u5217\u503C\u8D85\u51FA\u8303\u56F4 (3).\u5DF2\u7ECF\u8D70\u8FC7(\u9700\u8BBE\u5B9A\u4E00\u4E2A\u6570\u7EC4\u6807\u8BC6\u5F53\u524D\u5B57\u7B26\u662F\u5426\u8D70\u8FC7)</li><li>\u6761\u4EF6\u4E0D\u6EE1\u8DB3\uFF0C\u8FD4\u56DE0\uFF0C\u5411\u4E0A\u56DE\u6EAF\u3002</li><li>\u82E5\u4E0A\u9762\u4E09\u4E2A\u6761\u4EF6\u90FD\u6EE1\u8DB3\uFF0C\u7EE7\u7EED\u5411\u4E0B\u9012\u5F52\uFF0C\u8FD4\u56DE\u56DB\u4E2A\u65B9\u5411\u7684\u9012\u5F52\u4E4B\u548C+1\uFF08\u5F53\u524D\u8282\u70B9\uFF09</li></ul>',6),b=s("\u4E0B\u9762\u662F\u672C\u7B97\u6CD5\u7684\u52A8\u753B\u5C55\u793A\uFF0C\u53EF\u4EE5\u70B9\u51FB"),m={href:"https://www.lisq.xyz/demo/%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%9A%84%E8%BF%90%E5%8A%A8%E8%8C%83%E5%9B%B4.html",target:"_blank",rel:"noopener noreferrer"},d=s("\u673A\u5668\u4EBA\u7684\u8FD0\u52A8\u8303\u56F4\u52A8\u753B"),h=s("\u624B\u52A8\u5C1D\u8BD5\u3002"),f=["src"],w=a(`<h2 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">movingCount</span><span class="token punctuation">(</span><span class="token parameter">threshold<span class="token punctuation">,</span> rows<span class="token punctuation">,</span> cols</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> flag <span class="token operator">=</span> <span class="token function">createArray</span><span class="token punctuation">(</span>rows<span class="token punctuation">,</span> cols<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>rows <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> cols <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        count <span class="token operator">=</span> <span class="token function">movingCountCore</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> threshold<span class="token punctuation">,</span> rows<span class="token punctuation">,</span> cols<span class="token punctuation">,</span> flag<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">movingCountCore</span><span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> threshold<span class="token punctuation">,</span> rows<span class="token punctuation">,</span> cols<span class="token punctuation">,</span> flag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> j <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> i <span class="token operator">&gt;=</span> rows <span class="token operator">||</span> j <span class="token operator">&gt;=</span> cols<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token function">condition</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> threshold<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        flag<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      flag<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token function">movingCountCore</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">,</span> threshold<span class="token punctuation">,</span> rows<span class="token punctuation">,</span> cols<span class="token punctuation">,</span> flag<span class="token punctuation">)</span> <span class="token operator">+</span>
        <span class="token function">movingCountCore</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">,</span> threshold<span class="token punctuation">,</span> rows<span class="token punctuation">,</span> cols<span class="token punctuation">,</span> flag<span class="token punctuation">)</span> <span class="token operator">+</span>
        <span class="token function">movingCountCore</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> threshold<span class="token punctuation">,</span> rows<span class="token punctuation">,</span> cols<span class="token punctuation">,</span> flag<span class="token punctuation">)</span> <span class="token operator">+</span>
        <span class="token function">movingCountCore</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> threshold<span class="token punctuation">,</span> rows<span class="token punctuation">,</span> cols<span class="token punctuation">,</span> flag<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u5224\u65AD\u662F\u5426\u7B26\u5408\u6761\u4EF6
     */</span>
    <span class="token keyword">function</span> <span class="token function">condition</span><span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> threshold</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> temp <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token string">&#39;&#39;</span> <span class="token operator">+</span> j<span class="token punctuation">;</span>
      <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> temp<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sum <span class="token operator">+=</span> temp<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> sum <span class="token operator">&gt;</span> threshold<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u521B\u5EFA\u4E00\u4E2A\u4E8C\u7EF4\u7A7A\u6570\u7EC4
     */</span>
    <span class="token keyword">function</span> <span class="token function">createArray</span><span class="token punctuation">(</span><span class="token parameter">rows<span class="token punctuation">,</span> cols</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>rows<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> rows<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>cols<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> cols<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        result<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div>`,2);function _(p,g){const t=o("ExternalLinkIcon");return e(),c(u,null,[k,n("p",null,[b,n("a",m,[d,l(t)]),h]),n("img",{src:p.$withBase("/\u673A\u5668\u4EBA\u8FD0\u52A8\u8303\u56F4.gif"),alt:"foo"},null,8,f),w],64)}var v=r(i,[["render",_]]);export{v as default};
