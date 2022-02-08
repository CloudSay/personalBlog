<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<img :src="$withBase('/合并链表.png')" alt="foo">
<p>链表头部节点比较，取较小节点。</p>
<p>小节点的next等于小节点的next和大节点的较小值。</p>
<p>如此递归。</p>
<p>返回小节点。</p>
<p>考虑代码的鲁棒性，也是递归的终止条件，两个head为null的情况，取对方节点返回。</p>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Merge</span><span class="token punctuation">(</span><span class="token parameter">pHead1<span class="token punctuation">,</span> pHead2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pHead1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> pHead2<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pHead2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> pHead1<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">let</span> head<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>pHead1<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> pHead2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        head <span class="token operator">=</span> pHead1<span class="token punctuation">;</span>
        head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">Merge</span><span class="token punctuation">(</span>pHead1<span class="token punctuation">.</span>next<span class="token punctuation">,</span> pHead2<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        head <span class="token operator">=</span> pHead2<span class="token punctuation">;</span>
        head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">Merge</span><span class="token punctuation">(</span>pHead1<span class="token punctuation">,</span> pHead2<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></template>
