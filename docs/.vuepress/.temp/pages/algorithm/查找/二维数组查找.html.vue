<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。</p>
<h2 id="基本思路" tabindex="-1"><a class="header-anchor" href="#基本思路" aria-hidden="true">#</a> 基本思路</h2>
<p>二维数组是有序的，比如下面的数据：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1 2 3
4 5 6
7 8 9
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>可以直接利用左下角数字开始查找：</p>
<p>大于：比较上移</p>
<p>小于：比较右移</p>
<h2 id="代码思路" tabindex="-1"><a class="header-anchor" href="#代码思路" aria-hidden="true">#</a> 代码思路</h2>
<p>将二维数组看作平面坐标系</p>
<p>从左下角（0,arr.length-1）开始比较：</p>
<p>目标值大于坐标值---x坐标+1</p>
<p>目标值小于坐标值---y坐标-1</p>
<p>注意：</p>
<p>二维数组arr[i][j]中</p>
<p>j代表x坐标</p>
<p>i代表y坐标</p>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Find</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> i <span class="token operator">=</span> array<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// y坐标</span>
      <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// x坐标</span>
      <span class="token keyword">return</span> <span class="token function">compare</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> array<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> array<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">||</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> temp <span class="token operator">=</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">===</span> temp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">></span> temp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">compare</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> array<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&lt;</span> temp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">compare</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> array<span class="token punctuation">,</span> i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="拓展-二分查找" tabindex="-1"><a class="header-anchor" href="#拓展-二分查找" aria-hidden="true">#</a> 拓展：二分查找</h2>
<p>二分查找的条件是必须有序。</p>
<p>和线性表的中点值进行比较，如果小就继续在小的序列中查找，如此递归直到找到相同的值。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> arr<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">></span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">var</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>end <span class="token operator">+</span> start<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">==</span> arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> mid<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> arr<span class="token punctuation">,</span> start<span class="token punctuation">,</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> arr<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="考察点" tabindex="-1"><a class="header-anchor" href="#考察点" aria-hidden="true">#</a> 考察点</h2>
<ul>
<li>查找</li>
<li>数组</li>
</ul>
</template>
