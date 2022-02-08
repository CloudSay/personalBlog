<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>一个整型数组里除了两个数字之外，其他的数字都出现了偶数次。请写程序找出这两个只出现一次的数字。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<p><code>1异或1=0</code>  <code>0异或0=0</code>  <code>1异或0=0</code></p>
<h3 id="如果题目是只有一个只出现一次的数字" tabindex="-1"><a class="header-anchor" href="#如果题目是只有一个只出现一次的数字" aria-hidden="true">#</a> 如果题目是只有一个只出现一次的数字：</h3>
<p>两个相同的数异或值为<code>0</code>，将数组所有的值进行异或操作，最后剩余值就是目标值。</p>
<h3 id="如果有两个出现一次的值" tabindex="-1"><a class="header-anchor" href="#如果有两个出现一次的值" aria-hidden="true">#</a> 如果有两个出现一次的值</h3>
<ul>
<li>数组所有元素异或后是两个目标值的异或值</li>
<li>两个目标值不相等，所以最终的异或值不为<code>0</code></li>
<li>最终异或值的二进制某一位肯定是<code>1</code>，找到这个位置为<code>index</code></li>
<li>所以目标的两个值的二进制，一个<code>index</code>位为<code>0</code>，另一个<code>index</code>位为<code>1</code></li>
<li>按二进制<code>index</code>位为<code>0</code>和<code>1</code>，将数组分两批进行异或，两批最后的结果即为两个目标值</li>
</ul>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">FindNumsAppearOnce</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> exclusive <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        exclusive <span class="token operator">=</span> exclusive <span class="token operator">^</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token function">findFirst1</span><span class="token punctuation">(</span>exclusive<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> result2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isN1</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          result1 <span class="token operator">=</span> result1 <span class="token operator">^</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          result2 <span class="token operator">=</span> result2 <span class="token operator">^</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span>result1<span class="token punctuation">,</span> result2<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 找到n的二进制第一个为1的位置</span>
    <span class="token keyword">function</span> <span class="token function">findFirst1</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>n <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> index <span class="token operator">&lt;</span> <span class="token number">64</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        n <span class="token operator">=</span> n <span class="token operator">>></span> <span class="token number">1</span><span class="token punctuation">;</span>
        index<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> index<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 判断n的二进制第index位是否为1</span>
    <span class="token keyword">function</span> <span class="token function">isN1</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> n <span class="token operator">&amp;</span> <span class="token punctuation">(</span>n <span class="token operator">>></span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div></template>
