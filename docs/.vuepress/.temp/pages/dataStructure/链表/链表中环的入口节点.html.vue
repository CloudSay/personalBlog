<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<p>声明两个指针 P1 P2</p>
<ul>
<li>
<p>1.判断链表是否有环： P1 P2 从头部出发，P1走两步，P2走一步，如果可以相遇，则环存在</p>
</li>
<li>
<p>2.从环内某个节点开始计数，再回到此节点时得到链表环的长度 length</p>
</li>
<li>
<p>3.P1、P2 回到head节点，让 P1 先走 length 步 ，当P2和P1相遇时即为链表环的起点</p>
</li>
</ul>
<img :src="$withBase('/链表中环的入口节点.png')" alt="foo">
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">EntryNodeOfLoop</span><span class="token punctuation">(</span><span class="token parameter">pHead</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pHead <span class="token operator">||</span> <span class="token operator">!</span>pHead<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">let</span> <span class="token constant">P1</span> <span class="token operator">=</span> pHead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token keyword">let</span> <span class="token constant">P2</span> <span class="token operator">=</span> pHead<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token comment">// 1.判断是否有环</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token constant">P1</span> <span class="token operator">!=</span> <span class="token constant">P2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">P2</span> <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token constant">P2</span><span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token constant">P1</span> <span class="token operator">=</span> <span class="token constant">P1</span><span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token constant">P2</span> <span class="token operator">=</span> <span class="token constant">P2</span><span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 2.获取环的长度</span>
      <span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token constant">P1</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> length <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token constant">P1</span> <span class="token operator">=</span> <span class="token constant">P1</span><span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>temp <span class="token operator">!=</span> <span class="token constant">P1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token constant">P1</span> <span class="token operator">=</span> <span class="token constant">P1</span><span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        length<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 3.找公共节点</span>
      <span class="token constant">P1</span> <span class="token operator">=</span> <span class="token constant">P2</span> <span class="token operator">=</span> pHead<span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>length<span class="token operator">--</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token constant">P2</span> <span class="token operator">=</span> <span class="token constant">P2</span><span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token constant">P1</span> <span class="token operator">!=</span> <span class="token constant">P2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token constant">P1</span> <span class="token operator">=</span> <span class="token constant">P1</span><span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token constant">P2</span> <span class="token operator">=</span> <span class="token constant">P2</span><span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token constant">P1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="考察点" tabindex="-1"><a class="header-anchor" href="#考察点" aria-hidden="true">#</a> 考察点</h2>
<ul>
<li>链表</li>
<li>程序的鲁棒性</li>
<li>复杂问题拆解</li>
</ul>
</template>
