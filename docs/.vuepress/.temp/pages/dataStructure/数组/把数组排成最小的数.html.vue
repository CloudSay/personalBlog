<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。</p>
<p>例如输入数组<code>{3，32，321}</code>，则打印出这三个数字能排成的最小数字为<code>321323</code>。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<p>定义一种新的排序规则，将整个数组重新排序：</p>
<p><code>a</code>和<code>b</code>两个数字可以有两种组合：<code>ab</code>和<code>ba</code>，若<code>ab&lt;ba</code>则<code>ab</code>应该排在<code>ba</code>前面，否则<code>ab</code>应该排在<code>ba</code>后面。</p>
<p>使用数组的<code>sort</code>方法，底层是快排，也可以手写一个快排。</p>
<blockquote>
<p><code>sort</code>方法接收一个比较函数，<code>compareFunction</code>：如果 <code>compareFunction(a, b)</code> 小于 <code>0</code> ，那么 <code>a</code> 会被排列到 <code>b</code> 之前；</p>
</blockquote>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">PrintMinNumber</span><span class="token punctuation">(</span><span class="token parameter">numbers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>numbers <span class="token operator">||</span> numbers<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">""</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> numbers<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>compare<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> front <span class="token operator">=</span> <span class="token string">""</span> <span class="token operator">+</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
      <span class="token keyword">const</span> behind <span class="token operator">=</span> <span class="token string">""</span> <span class="token operator">+</span> b <span class="token operator">+</span> a<span class="token punctuation">;</span>
      <span class="token keyword">return</span> front <span class="token operator">-</span> behind<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></template>
