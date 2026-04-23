import{_ as e,o as t,c as p,a as s,b as o}from"./app-B5yNCZ8Y.js";const l={},c=["src"];function i(a,n){return t(),p("div",null,[n[0]||(n[0]=s('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目"><span>题目</span></a></h2><p>输入两个链表，找出它们的第一个公共结点。</p><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h2><ul><li><p>1.先找到两个链表的长度<code>length1</code>、<code>length2</code></p></li><li><p>2.让长一点的链表先走<code>length2-length1</code>步，让长链表和短链表起点相同</p></li><li><p>3.两个链表一起前进，比较获得第一个相等的节点</p></li><li><p>时间复杂度<code>O(length1+length2)</code> 空间复杂度<code>O(0)</code></p></li></ul>',4)),o("img",{src:a.$withBase("/链表公共节点.png"),alt:"foo"},null,8,c),n[1]||(n[1]=s(`<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码"><span>代码</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">FindFirstCommonNode</span><span class="token punctuation">(</span><span class="token parameter">pHead1<span class="token punctuation">,</span> pHead2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pHead1 <span class="token operator">||</span> <span class="token operator">!</span>pHead2<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
      <span class="token comment">// 获取链表长度</span>
      <span class="token keyword">let</span> length1 <span class="token operator">=</span> <span class="token function">getLength</span><span class="token punctuation">(</span>pHead1<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> length2 <span class="token operator">=</span> <span class="token function">getLength</span><span class="token punctuation">(</span>pHead2<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 长链表先行</span>
      <span class="token keyword">let</span> lang<span class="token punctuation">,</span> short<span class="token punctuation">,</span> interval<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>length1 <span class="token operator">&gt;</span> length2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        lang <span class="token operator">=</span> pHead1<span class="token punctuation">;</span>
        short <span class="token operator">=</span> pHead2<span class="token punctuation">;</span>
        interval <span class="token operator">=</span> length1 <span class="token operator">-</span> length2<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        lang <span class="token operator">=</span> pHead2<span class="token punctuation">;</span>
        short <span class="token operator">=</span> pHead1<span class="token punctuation">;</span>
        interval <span class="token operator">=</span> length2 <span class="token operator">-</span> length1<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>interval<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        lang <span class="token operator">=</span> lang<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 找相同节点</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>lang<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>lang <span class="token operator">===</span> short<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> lang<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        lang <span class="token operator">=</span> lang<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        short <span class="token operator">=</span> short<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">getLength</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> current <span class="token operator">=</span> head<span class="token punctuation">;</span>
      <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token operator">++</span><span class="token punctuation">;</span>
        current <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2))])}const r=e(l,[["render",i],["__file","两个链表的第一个公共节点.html.vue"]]);export{r as default};
