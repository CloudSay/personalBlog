<template><h2 id="思想" tabindex="-1"><a class="header-anchor" href="#思想" aria-hidden="true">#</a> 思想</h2>
<p>快速排序：通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据比另一部分的所有数据要小，再按这种方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，使整个数据变成有序序列。</p>
<p>实现步骤：</p>
<ul>
<li>选择一个基准元素<code>target</code>（一般选择第一个数）</li>
<li>将比<code>target</code>小的元素移动到数组左边，比<code>target</code>大的元素移动到数组右边</li>
<li>分别对<code>target</code>左侧和右侧的元素进行快速排序</li>
</ul>
<p>从上面的步骤中我们可以看出，快速排序也利用了分治的思想（将问题分解成一些小问题递归求解）</p>
<p>下面是对序列<code>6、1、2、7、9、3、4、5、10、8</code>排序的过程：</p>
<img :src="$withBase('/快速排序.jpg')" alt="foo">
<img :src="$withBase('/快速排序.gif')" alt="foo">
<h2 id="解法" tabindex="-1"><a class="header-anchor" href="#解法" aria-hidden="true">#</a> 解法</h2>
<h2 id="写法1" tabindex="-1"><a class="header-anchor" href="#写法1" aria-hidden="true">#</a> 写法1</h2>
<p>单独开辟两个存储空间<code>left</code>和<code>right</code>来存储每次递归比<code>target</code>小和大的序列</p>
<p>每次递归直接返回<code>left、target、right</code>拼接后的数组</p>
<p>浪费大量存储空间，写法简单</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">quickSort</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> array<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> target <span class="token operator">=</span> array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          left<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          right<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token function">quickSort</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span>target<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token function">quickSort</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="写法2" tabindex="-1"><a class="header-anchor" href="#写法2" aria-hidden="true">#</a> 写法2</h2>
<p>记录一个索引<code>l</code>从数组最左侧开始，记录一个索引<code>r</code>从数组右侧开始</p>
<p>在<code>l&lt;r</code>的条件下，找到右侧小于<code>target</code>的值<code>array[r]</code>，并将其赋值到<code>array[l]</code></p>
<p>在<code>l&lt;r</code>的条件下，找到左侧大于<code>target</code>的值<code>array[l]</code>，并将其赋值到<code>array[r]</code></p>
<p>这样让<code>l=r</code>时，左侧的值全部小于<code>target</code>，右侧的值全部小于<code>target</code>，将<code>target</code>放到该位置</p>
<p>不需要额外存储空间，写法思路稍复杂（有能力推荐这种写法）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">quickSort</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> start <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> target <span class="token operator">=</span> array<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> l <span class="token operator">=</span> start<span class="token punctuation">;</span>
      <span class="token keyword">let</span> r <span class="token operator">=</span> end<span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r <span class="token operator">&amp;&amp;</span> array<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token operator">>=</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          r<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        array<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r <span class="token operator">&amp;&amp;</span> array<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          l<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        array<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      array<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">=</span> target<span class="token punctuation">;</span>
      <span class="token function">quickSort</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> start<span class="token punctuation">,</span> l <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">quickSort</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> l <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> array<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="复杂度" tabindex="-1"><a class="header-anchor" href="#复杂度" aria-hidden="true">#</a> 复杂度</h2>
<p>时间复杂度：平均<code>O(nlogn)</code>，最坏<code>O(n2)</code>，实际上大多数情况下小于<code>O(nlogn)</code></p>
<p>空间复杂度:<code>O(logn)</code>（递归调用消耗）</p>
<h2 id="稳定性" tabindex="-1"><a class="header-anchor" href="#稳定性" aria-hidden="true">#</a> 稳定性</h2>
<p>不稳定</p>
</template>
