import{_ as s,o as a,c as p,a as e}from"./app-a7fYW3Qz.js";const t={};function o(c,n){return a(),p("div",null,[...n[0]||(n[0]=[e(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目"><span>题目</span></a></h2><p>输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。</p><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h2><p>拆分成三步</p><p>1.复制一份链表放在前一个节点后面，即根据原始链表的每个节点N创建N<code>,把N</code>直接放在N的next位置，让复制后的链表和原始链表组成新的链表。</p><p>2.给复制的链表random赋值，即<code>N.random=N.random.next</code>。</p><p>3.拆分链表，将N\`和N进行拆分，保证原始链表不受影响。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码"><span>代码</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Clone</span><span class="token punctuation">(</span><span class="token parameter">pHead</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>pHead <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token function">cloneNodes</span><span class="token punctuation">(</span>pHead<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">cloneRandom</span><span class="token punctuation">(</span>pHead<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token function">reconnetNodes</span><span class="token punctuation">(</span>pHead<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">cloneNodes</span><span class="token punctuation">(</span><span class="token parameter">pHead</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> current <span class="token operator">=</span> pHead<span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> cloneNode <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> current<span class="token punctuation">.</span>label<span class="token punctuation">,</span>
          <span class="token literal-property property">next</span><span class="token operator">:</span> current<span class="token punctuation">.</span>next
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        current<span class="token punctuation">.</span>next <span class="token operator">=</span> cloneNode<span class="token punctuation">;</span>
        current <span class="token operator">=</span> cloneNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">cloneRandom</span><span class="token punctuation">(</span><span class="token parameter">pHead</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> current <span class="token operator">=</span> pHead<span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> cloneNode <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>random<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          cloneNode<span class="token punctuation">.</span>random <span class="token operator">=</span> current<span class="token punctuation">.</span>random<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          cloneNode<span class="token punctuation">.</span>random <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        current <span class="token operator">=</span> cloneNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">reconnetNodes</span><span class="token punctuation">(</span><span class="token parameter">pHead</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> cloneHead <span class="token operator">=</span> pHead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token keyword">var</span> cloneNode <span class="token operator">=</span> pHead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token keyword">var</span> current <span class="token operator">=</span> pHead<span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        current<span class="token punctuation">.</span>next <span class="token operator">=</span> cloneNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        current <span class="token operator">=</span> cloneNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          cloneNode<span class="token punctuation">.</span>next <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
          cloneNode <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          cloneNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> cloneHead<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="考察点" tabindex="-1"><a class="header-anchor" href="#考察点"><span>考察点</span></a></h2><ul><li>链表</li><li>复杂问题拆解</li></ul>`,11)])])}const i=s(t,[["render",o],["__file","复杂链表的复制.html.vue"]]);export{i as default};
