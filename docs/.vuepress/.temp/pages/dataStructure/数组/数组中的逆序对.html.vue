<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组,求出这个数组中的逆序对的总数P。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<p>使用暴力法：从第一个数开始，依次和后面每一个数字进行比较记录逆序对的个数，时间复杂度O(n<sup>2</sup>)</p>
<p>使用分治的细想：</p>
<p>若没了解过归并排序，建议先熟悉<a href="/%E7%AE%97%E6%B3%95%E5%88%86%E7%B1%BB/%E6%8E%92%E5%BA%8F/%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F.md" target="_blank" rel="noopener noreferrer">归并排序<ExternalLinkIcon/></a>算法再来看本题。</p>
<p>直接将归并排序进行改进，把数据分成<code>N</code>个小数组。</p>
<p>合并数组 <code>left - mid</code> , <code>mid+1 - right</code>，合并时， 若<code>array[leftIndex] &gt; array[rightIndex]</code> ,则比右边 <code>rightIndex-mid</code>个数大</p>
<p><code>count += rightIndex-mid</code></p>
<p>注意和归并排序的区别： 归并排序是合并数组数从小数开始，而本题是从大数开始。</p>
<p>时间复杂度<code>O(nlogn)</code></p>
<p>空间复杂度<code>O(n)</code></p>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">InversePairs</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">mergeSort</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">mergeSort</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> temp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> mid <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> l <span class="token operator">=</span> <span class="token function">mergeSort</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> left<span class="token punctuation">,</span> mid<span class="token punctuation">,</span> temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> r <span class="token operator">=</span> <span class="token function">mergeSort</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">,</span> temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> mid<span class="token punctuation">,</span> temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> l <span class="token operator">+</span> m <span class="token operator">+</span> r<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> mid<span class="token punctuation">,</span> temp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> leftIndex <span class="token operator">=</span> mid<span class="token punctuation">;</span>
      <span class="token keyword">let</span> rightIndex <span class="token operator">=</span> right<span class="token punctuation">;</span>
      <span class="token keyword">let</span> tempIndex <span class="token operator">=</span> right <span class="token operator">-</span> left<span class="token punctuation">;</span>
      <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>leftIndex <span class="token operator">>=</span> left <span class="token operator">&amp;&amp;</span> rightIndex <span class="token operator">></span> mid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>leftIndex<span class="token punctuation">]</span> <span class="token operator">></span> array<span class="token punctuation">[</span>rightIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          count <span class="token operator">+=</span> <span class="token punctuation">(</span>rightIndex <span class="token operator">-</span> mid<span class="token punctuation">)</span><span class="token punctuation">;</span>
          temp<span class="token punctuation">[</span>tempIndex<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>leftIndex<span class="token operator">--</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          temp<span class="token punctuation">[</span>tempIndex<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>rightIndex<span class="token operator">--</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>leftIndex <span class="token operator">>=</span> left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        temp<span class="token punctuation">[</span>tempIndex<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>leftIndex<span class="token operator">--</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>rightIndex <span class="token operator">></span> mid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        temp<span class="token punctuation">[</span>tempIndex<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>rightIndex<span class="token operator">--</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      tempIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> left<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> right<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">[</span>tempIndex<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h2 id="考察点" tabindex="-1"><a class="header-anchor" href="#考察点" aria-hidden="true">#</a> 考察点</h2>
<ul>
<li>数组</li>
<li>分治</li>
</ul>
</template>
