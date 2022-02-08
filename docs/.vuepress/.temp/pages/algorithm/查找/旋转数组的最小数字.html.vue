<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。 例如数组<code>{3,4,5,1,2}</code>为<code>{1,2,3,4,5}</code>的一个旋转，该数组的最小值为1。</p>
<blockquote>
<p>NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。</p>
</blockquote>
<h2 id="基本思路" tabindex="-1"><a class="header-anchor" href="#基本思路" aria-hidden="true">#</a> 基本思路</h2>
<p>肯定不能直接遍历，失去了这道题的意义</p>
<p>旋转数组其实是由两个有序数组拼接而成的，因此我们可以使用二分法，只需要找到拼接点即可。</p>
<p>(1)<code>array[mid] &gt; array[high]</code>:</p>
<p>出现这种情况的<code>array</code>类似<code>[3,4,5,6,0,1,2]</code>，此时最小数字一定在mid的右边。
<code>low = mid + 1</code></p>
<p>(2)<code>array[mid] == array[high]</code>:</p>
<p>出现这种情况的<code>array</code>类似 <code>[1,0,1,1,1] </code>或者<code>[1,1,1,0,1]</code>，此时最小数字不好判断在mid左边
还是右边,这时只好一个一个试 。
<code>high = high - 1</code></p>
<p>(3)<code>array[mid] &lt; array[high]</code>:</p>
<p>出现这种情况的<code>array</code>类似<code>[2,2,3,4,5,6,6]</code>,此时最小数字一定就是<code>array[mid]</code>或者在<code>mid</code>的左
边。因为右边必然都是递增的。
<code>high = mid</code></p>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">minNumberInRotateArray</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">let</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>len <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> low <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> high <span class="token operator">=</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>low <span class="token operator">&lt;</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> mid <span class="token operator">=</span> low <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>high<span class="token operator">-</span>low<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">></span> arr<span class="token punctuation">[</span>high<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            low <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> arr<span class="token punctuation">[</span>high<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            high <span class="token operator">=</span> high <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            high <span class="token operator">=</span> mid<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">return</span> arr<span class="token punctuation">[</span>low<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h2>
<p>二分查找</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>        <span class="token keyword">function</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> arr<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
