<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>把只包含质因子<code>2、3和5</code>的数称作丑数（<code>Ugly Number</code>）。</p>
<p>例如<code>6、8</code>都是丑数，但<code>14</code>不是，因为它包含质因子<code>7</code>。</p>
<p>习惯上我们把<code>1</code>当做是第一个丑数。求按从小到大的顺序的第<code>N</code>个丑数。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<p>丑数只能被<code>2、3、5</code>整除，说明第<code>n</code>个丑数只能是<code>0 - n-1</code>中某个丑数✖️<code>2</code>、✖️<code>3</code>、✖️<code>5</code>的结果。</p>
<p>而且，这个数即第<code>0 - n-1</code>个丑数✖️<code>2</code>、✖️<code>3</code>、✖️<code>5</code>的结果中比第<code>n-1</code>个丑数大的最小值。</p>
<p>按照上面的规律，我们可以依次求出第<code>0 - n</code>个丑数。</p>
<p>简单做法：</p>
<ul>
<li>1.每次把第<code>0 - n-1</code>个丑数✖️<code>(2、3、5)</code></li>
<li>2.分别找到第<code>0 - n-1</code>个丑数✖️<code>2</code>、✖️<code>3</code>、✖️<code>5</code>的结果中比第<code>n-1</code>个丑数大的最小值。</li>
<li>3.比较三个数取最小值加入到丑数队列中</li>
</ul>
<p>优化：</p>
<ul>
<li>1.前面的数不必每个都乘</li>
<li>2.记录下✖️<code>(2、3、5)</code>后刚好比当前最大丑数大的这三个值的下标 <code>i2,i3,i5</code></li>
<li>3.下次比较从这 <code>i2,i3,i5</code> 三个下标开始乘起</li>
<li>4.最后取<code>arr[i2]✖️2、arr[i3]✖️3、arr[i5]✖️5</code> 的最小值</li>
</ul>
<img :src="$withBase('/丑数.png')" alt="foo">
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">GetUglyNumber_Solution</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> i2 <span class="token operator">=</span> i3 <span class="token operator">=</span> i5 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i2<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i3<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i5<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> current <span class="token operator">=</span> arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i2<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">&lt;=</span> current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          i2<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i3<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">3</span> <span class="token operator">&lt;=</span> current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          i3<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i5<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">5</span> <span class="token operator">&lt;=</span> current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          i5<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> arr<span class="token punctuation">[</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></template>
