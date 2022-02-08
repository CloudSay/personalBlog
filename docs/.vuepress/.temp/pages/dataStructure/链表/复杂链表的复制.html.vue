<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<p>拆分成三步</p>
<p>1.复制一份链表放在前一个节点后面，即根据原始链表的每个节点N创建N<code>,把N</code>直接放在N的next位置，让复制后的链表和原始链表组成新的链表。</p>
<p>2.给复制的链表random赋值，即<code>N.random=N.random.next</code>。</p>
<p>3.拆分链表，将N`和N进行拆分，保证原始链表不受影响。</p>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Clone</span><span class="token punctuation">(</span><span class="token parameter">pHead</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><h2 id="考察点" tabindex="-1"><a class="header-anchor" href="#考察点" aria-hidden="true">#</a> 考察点</h2>
<ul>
<li>链表</li>
<li>复杂问题拆解</li>
</ul>
</template>
