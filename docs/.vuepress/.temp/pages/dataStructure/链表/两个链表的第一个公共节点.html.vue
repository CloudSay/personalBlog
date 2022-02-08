<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>输入两个链表，找出它们的第一个公共结点。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<ul>
<li>
<p>1.先找到两个链表的长度<code>length1</code>、<code>length2</code></p>
</li>
<li>
<p>2.让长一点的链表先走<code>length2-length1</code>步，让长链表和短链表起点相同</p>
</li>
<li>
<p>3.两个链表一起前进，比较获得第一个相等的节点</p>
</li>
<li>
<p>时间复杂度<code>O(length1+length2)</code> 空间复杂度<code>O(0)</code></p>
</li>
</ul>
<img :src="$withBase('/链表公共节点.png')" alt="foo">
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">FindFirstCommonNode</span><span class="token punctuation">(</span><span class="token parameter">pHead1<span class="token punctuation">,</span> pHead2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pHead1 <span class="token operator">||</span> <span class="token operator">!</span>pHead2<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
      <span class="token comment">// 获取链表长度</span>
      <span class="token keyword">let</span> length1 <span class="token operator">=</span> <span class="token function">getLength</span><span class="token punctuation">(</span>pHead1<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> length2 <span class="token operator">=</span> <span class="token function">getLength</span><span class="token punctuation">(</span>pHead2<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 长链表先行</span>
      <span class="token keyword">let</span> lang<span class="token punctuation">,</span> short<span class="token punctuation">,</span> interval<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>length1 <span class="token operator">></span> length2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div></template>
