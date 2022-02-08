<template><h2 id="思想" tabindex="-1"><a class="header-anchor" href="#思想" aria-hidden="true">#</a> 思想</h2>
<p>利用<code>归并</code>的思想实现的排序方法。</p>
<p>该算法是采用分治法（<code>Divide and Conquer</code>）的一个非常典型的应用。（分治法将问题分成一些小的问题然后递归求解，而治的阶段则将分的阶段得到的各答案&quot;修补&quot;在一起，即分而治之)。</p>
<ul>
<li>
<p>将已有序的子序列合并，得到完全有序的序列</p>
</li>
<li>
<p>即先使每个子序列有序，再使子序列段间有序</p>
</li>
<li>
<p>若将两个有序表合并成一个有序表，称为二路归并</p>
</li>
</ul>
<img :src="$withBase('/归并排序.png')" alt="foo">
<p>分割：</p>
<ul>
<li>
<p>将数组从中点进行分割，分为左、右两个数组</p>
</li>
<li>
<p>递归分割左、右数组，直到数组长度小于<code>2</code></p>
</li>
</ul>
<p>归并：</p>
<p>如果需要合并，那么左右两数组已经有序了。</p>
<p>创建一个临时存储数组<code>temp</code>，比较两数组第一个元素，将较小的元素加入临时数组</p>
<p>若左右数组有一个为空，那么此时另一个数组一定大于<code>temp</code>中的所有元素，直接将其所有元素加入<code>temp</code></p>
<h2 id="解法" tabindex="-1"><a class="header-anchor" href="#解法" aria-hidden="true">#</a> 解法</h2>
<h3 id="写法1" tabindex="-1"><a class="header-anchor" href="#写法1" aria-hidden="true">#</a> 写法1</h3>
<p>分割数组时直接将数组分割为两个数组，合并时直接合并数组。</p>
<p>优点：思路简单，写法简单</p>
<p>缺点：空间复杂度略高，需要复制多个数组</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">mergeSort</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> array<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>array<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> front <span class="token operator">=</span> array<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> mid<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> end <span class="token operator">=</span> array<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token function">mergeSort</span><span class="token punctuation">(</span>front<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">mergeSort</span><span class="token punctuation">(</span>end<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token parameter">front<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>front<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> end<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>front<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> end<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>front<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>end<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>front<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>front<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>end<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>end<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> temp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="写法2" tabindex="-1"><a class="header-anchor" href="#写法2" aria-hidden="true">#</a> 写法2</h3>
<p>记录数组的索引，使用<code>left、right</code>两个索引来限定当前分割的数组。</p>
<p>优点：空间复杂度低，只需一个<code>temp</code>存储空间，不需要拷贝数组</p>
<p>缺点：写法复杂</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">mergeSort</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> temp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">mergeSort</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> left<span class="token punctuation">,</span> mid<span class="token punctuation">,</span> temp<span class="token punctuation">)</span>
        <span class="token function">mergeSort</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">,</span> temp<span class="token punctuation">)</span>
        <span class="token function">merge</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> array<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> temp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> leftIndex <span class="token operator">=</span> left<span class="token punctuation">;</span>
      <span class="token keyword">let</span> rightIndex <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> tempIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>leftIndex <span class="token operator">&lt;=</span> mid <span class="token operator">&amp;&amp;</span> rightIndex <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>leftIndex<span class="token punctuation">]</span> <span class="token operator">&lt;</span> array<span class="token punctuation">[</span>rightIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          temp<span class="token punctuation">[</span>tempIndex<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>leftIndex<span class="token operator">++</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          temp<span class="token punctuation">[</span>tempIndex<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>rightIndex<span class="token operator">++</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>leftIndex <span class="token operator">&lt;=</span> mid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        temp<span class="token punctuation">[</span>tempIndex<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>leftIndex<span class="token operator">++</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>rightIndex <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        temp<span class="token punctuation">[</span>tempIndex<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>rightIndex<span class="token operator">++</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      tempIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> left<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> right<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">[</span>tempIndex<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="复杂度" tabindex="-1"><a class="header-anchor" href="#复杂度" aria-hidden="true">#</a> 复杂度</h2>
<p>时间复杂度：<code>O(nlogn)</code></p>
<p>空间复杂度:<code>O(n)</code></p>
<h2 id="稳定性" tabindex="-1"><a class="header-anchor" href="#稳定性" aria-hidden="true">#</a> 稳定性</h2>
<p>稳定</p>
</template>
