<template><h2 id="思想" tabindex="-1"><a class="header-anchor" href="#思想" aria-hidden="true">#</a> 思想</h2>
<p>将左侧序列看成一个有序序列，每次将一个数字插入该有序序列。</p>
<p>插入时，从有序序列最右侧开始比较，若比较的数较大，后移一位。</p>
<img :src="$withBase('/插入排序.gif')" alt="foo">
<h2 id="解法" tabindex="-1"><a class="header-anchor" href="#解法" aria-hidden="true">#</a> 解法</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">insertSort</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> target <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>target<span class="token punctuation">]</span> <span class="token operator">&lt;</span> array<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token punctuation">[</span>array<span class="token punctuation">[</span>target<span class="token punctuation">]</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>array<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>target<span class="token punctuation">]</span><span class="token punctuation">]</span>
            target <span class="token operator">=</span> j<span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> array<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="复杂度" tabindex="-1"><a class="header-anchor" href="#复杂度" aria-hidden="true">#</a> 复杂度</h2>
<p>时间复杂度：<code>O(n2)</code></p>
<p>空间复杂度:<code>O(1)</code></p>
<h2 id="稳定性" tabindex="-1"><a class="header-anchor" href="#稳定性" aria-hidden="true">#</a> 稳定性</h2>
<p>稳定</p>
</template>
