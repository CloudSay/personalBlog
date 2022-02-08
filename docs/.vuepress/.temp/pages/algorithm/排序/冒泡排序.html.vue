<template><h2 id="思想" tabindex="-1"><a class="header-anchor" href="#思想" aria-hidden="true">#</a> 思想</h2>
<p>循环数组，比较当前元素和下一个元素，如果当前元素比下一个元素大，向上冒泡。</p>
<p>这样一次循环之后最后一个数就是本数组最大的数。</p>
<p>下一次循环继续上面的操作，不循环已经排序好的数。</p>
<p>优化：当一次循环没有发生冒泡，说明已经排序完成，停止循环。</p>
<h2 id="解法" tabindex="-1"><a class="header-anchor" href="#解法" aria-hidden="true">#</a> 解法</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">bubbleSort</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> complete <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> j<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 比较相邻数</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">></span> array<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token punctuation">[</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>array<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            complete <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 没有冒泡结束循环</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>complete<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> array<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="复杂度" tabindex="-1"><a class="header-anchor" href="#复杂度" aria-hidden="true">#</a> 复杂度</h2>
<p>时间复杂度：<code>O(n2)</code></p>
<p>空间复杂度:<code>O(1)</code></p>
<h2 id="稳定性" tabindex="-1"><a class="header-anchor" href="#稳定性" aria-hidden="true">#</a> 稳定性</h2>
<p>稳定</p>
</template>
