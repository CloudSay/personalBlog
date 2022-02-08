<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>输入一个链表，输出该链表中倒数第k个结点。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<p>简单思路： 循环到链表末尾找到 length  在找到length-k节点   需要循环两次。</p>
<p>优化：</p>
<p>设定两个节点，间距相差k个节点，当前面的节点到达终点，取后面的节点。</p>
<p>前面的节点到达k后，后面的节点才出发。</p>
<p>代码鲁棒性： 需要考虑head为null，k为0，k大于链表长度的情况。</p>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">FindKthToTail</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head <span class="token operator">||</span> <span class="token operator">!</span>k<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> front <span class="token operator">=</span> head<span class="token punctuation">;</span>
      <span class="token keyword">let</span> behind <span class="token operator">=</span> head<span class="token punctuation">;</span>
      <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>front<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        index<span class="token operator">++</span><span class="token punctuation">;</span>
        front <span class="token operator">=</span> front<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">></span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          behind <span class="token operator">=</span> behind<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>k <span class="token operator">&lt;=</span> index<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> behind<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></template>
