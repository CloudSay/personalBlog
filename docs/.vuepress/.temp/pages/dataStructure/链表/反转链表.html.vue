<template><h2 id="反转链表" tabindex="-1"><a class="header-anchor" href="#反转链表" aria-hidden="true">#</a> 反转链表</h2>
<p>输入一个链表，反转链表后，输出新链表的表头。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<p>以链表的头部节点为基准节点</p>
<p>将基准节点的下一个节点挪到头部作为头节点</p>
<p>当基准节点的<code>next</code>为<code>null</code>，则其已经成为最后一个节点，链表已经反转完成</p>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">var</span> <span class="token function-variable function">reverseList</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> headNode <span class="token operator">=</span> head<span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">&amp;&amp;</span> head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        currentNode <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        head<span class="token punctuation">.</span>next <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        currentNode<span class="token punctuation">.</span>next <span class="token operator">=</span> headNode<span class="token punctuation">;</span>
        headNode <span class="token operator">=</span> currentNode<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> headNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></template>
