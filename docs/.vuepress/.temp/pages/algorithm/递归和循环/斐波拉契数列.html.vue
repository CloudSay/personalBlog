<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。</p>
<blockquote>
<p>f(n) = f(n-1) +  f(n-2)</p>
</blockquote>
<h2 id="基本思路" tabindex="-1"><a class="header-anchor" href="#基本思路" aria-hidden="true">#</a> 基本思路</h2>
<p>这道题在剑指<code>offer</code>中实际是当作递归的反例来说的。</p>
<p>递归的本质是吧一个问题分解成两个或者多个小问题，如果多个小问题存在互相重叠的情况，那么就存在重复计算。</p>
<p><code>f(n) = f(n-1) +  f(n-2) </code>这种拆分使用递归是典型的存在重叠的情况，所以会造成非常多的重复计算。</p>
<p>另外，每一次函数调用爱内存中都需要分配空间，每个进程的栈的容量是有限的，递归层次过多，就会造成栈溢出。</p>
<p>递归是从最大数开始，不断拆解成小的数计算，如果不去考虑递归，我们只需要从小数开始算起，从底层不断往上累加就可以了，其实思路也很简单。</p>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<h3 id="递归解法" tabindex="-1"><a class="header-anchor" href="#递归解法" aria-hidden="true">#</a> 递归解法</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Fibonacci</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> n<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token function">Fibonacci</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">Fibonacci</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="递归加记忆化" tabindex="-1"><a class="header-anchor" href="#递归加记忆化" aria-hidden="true">#</a> 递归加记忆化</h3>
<p>使用一个数组缓存计算过的值。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Fibonacci</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> memory <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> n<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>memory<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        memory<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">Fibonacci</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> memory<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">Fibonacci</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">,</span> memory<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> memory<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="动态规划解法" tabindex="-1"><a class="header-anchor" href="#动态规划解法" aria-hidden="true">#</a> 动态规划解法</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Fibonacci</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">&lt;=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> n<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> pre <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">++</span> <span class="token operator">&lt;</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
        result <span class="token operator">=</span> pre <span class="token operator">+</span> current<span class="token punctuation">;</span>
        pre <span class="token operator">=</span> current<span class="token punctuation">;</span>
        current <span class="token operator">=</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></template>
