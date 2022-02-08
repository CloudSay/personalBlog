<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>输入一个递增排序的数组和一个数字<code>S</code>，在数组中查找两个数，使得他们的和正好是<code>S</code>，如果有多对数字的和等于<code>S</code>，输出两个数的乘积最小的。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<blockquote>
<p>数组中可能有多对符合条件的结果，而且要求输出乘积最小的，说明要分布在两侧 比如 <code>3,8 </code> <code>5,7</code>  要取<code>3,8</code>。</p>
</blockquote>
<p>看了题目了，很像<code>leetcode</code>的第一题【两数之和】，但是题目中有一个明显不同的条件就是数组是有序的，可以使用使用大小指针求解，不断逼近结果，最后取得最终值。</p>
<ul>
<li>设定一个小索引<code>left</code>，从<code>0</code>开始</li>
<li>设定一个大索引<code>right</code>，从<code>array.length</code>开始</li>
<li>判断<code>array[left] + array[right]</code>的值<code>s</code>是否符合条件</li>
<li>符合条件 - 返回</li>
<li>大于<code>sum</code>，<code>right</code>向左移动</li>
<li>小于<code>sum</code>，<code>left</code>向右移动</li>
<li>若<code>left=right</code>，没有符合条件的结果</li>
</ul>
<blockquote>
<p>类似【两数之和】的解法来求解，使用<code>map</code>存储另已经遍历过的<code>key</code>，这种解法在有多个结果的情况下是有问题的，因为这样优先取得的结果是乘积较大的。例如 <code>3,8 </code> <code>5,7</code> ，会优先取到<code>5,7</code>。</p>
</blockquote>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">FindNumbersWithSum</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> sum</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>array <span class="token operator">&amp;&amp;</span> array<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> right <span class="token operator">=</span> array<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> s <span class="token operator">=</span> array<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">+</span> array<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">></span> sum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            right<span class="token operator">--</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">&lt;</span> sum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            left<span class="token operator">++</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">[</span>array<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></template>
