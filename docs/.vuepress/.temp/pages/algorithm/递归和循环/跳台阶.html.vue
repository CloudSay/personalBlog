<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。</p>
<h2 id="基本思路" tabindex="-1"><a class="header-anchor" href="#基本思路" aria-hidden="true">#</a> 基本思路</h2>
<p>找规律：</p>
<p>跳三级台阶等于跳两级台阶的跳法+跳一级台阶的跳法。</p>
<p>跳四级台阶等于跳三级台阶的跳法+跳二级台阶的跳法。</p>
<p>明显也符合斐波那契数列的规律</p>
<blockquote>
<p>f(n) = f(n-1) +  f(n-2)</p>
</blockquote>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">jumpFloor</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">&lt;=</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> n<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> pre <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">++</span> <span class="token operator">&lt;</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
        result <span class="token operator">=</span> pre <span class="token operator">+</span> current<span class="token punctuation">;</span>
        pre <span class="token operator">=</span> current<span class="token punctuation">;</span>
        current <span class="token operator">=</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></template>
