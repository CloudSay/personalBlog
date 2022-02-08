<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>求<code>1+2+3+...+n</code>，要求不能使用乘除法、<code>for、while、if、else、switch、case</code>等关键字及条件判断语句<code>（A?B:C）</code>。</p>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<p>使用递归，使用&amp;&amp;短路来终止递归</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Sum_Solution</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> n <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token function">Sum_Solution</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>求和公式为 <code>n(n+1)/2 = (n方+n)/2</code></p>
<p>可以用<code>Math.pow</code>函数求<code>n</code>方，用位运算代替除法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Sum_Solution</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> n<span class="token punctuation">)</span> <span class="token operator">>></span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
