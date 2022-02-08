<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>写一个函数，求两个整数之和，要求在函数体内不得使用<code>+、-、*、/</code>四则运算符号。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<p><strong>将加法拆解成三步：</strong></p>
<ul>
<li>1.不进位相加</li>
<li>2.计算进位</li>
<li>3.进位与不进位结果进行相加</li>
<li>重复这三步，直到进位值为0</li>
</ul>
<p><strong>举一个十进制的例子 <code>5 + 17</code>：</strong></p>
<ul>
<li>1.不进位相加 -&gt; <code>12</code></li>
<li>2.计算进位 -&gt; <code>5+7</code> 产生进位 <code>10</code></li>
<li>3.进位与不进位结果进行相加 <code>12 + 10 = 22</code></li>
</ul>
<p><strong>使用二进制代替上面的过程：</strong></p>
<ul>
<li><code>5 </code>的二进制为<code>101</code>，<code>17</code>的二进制为<code>10001</code></li>
<li>1.不进位相加 -&gt; <code>101+10001=10100</code></li>
<li>2.计算进位 -&gt; <code>10</code></li>
<li>3.进位与不进位结果进行相加 <code>10100 + 10 = 10110</code>，转换成十进制后即<code>22</code></li>
</ul>
<p><strong>使用位运算来计算二进制：</strong></p>
<ul>
<li>二进制异或操作和不进位相加得到的结果相同<code>(1^1=0 0^1=1 0^0=0)</code></li>
<li>二进制与操作后左移和进位结果相同<code>（1&amp;1=1 1&amp;0=0 0&amp;0=0）</code></li>
</ul>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<p><em>递归实现</em></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Add</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>num2 <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> num1<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token function">Add</span><span class="token punctuation">(</span>num1 <span class="token operator">^</span> num2<span class="token punctuation">,</span> <span class="token punctuation">(</span>num1 <span class="token operator">&amp;</span> num2<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><em>非递归实现</em></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Add</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>num2 <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> excl <span class="token operator">=</span> num1 <span class="token operator">^</span> num2<span class="token punctuation">;</span>
        <span class="token keyword">const</span> carry <span class="token operator">=</span> <span class="token punctuation">(</span>num1 <span class="token operator">&amp;</span> num2<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
        num1 <span class="token operator">=</span> excl<span class="token punctuation">;</span>
        num2 <span class="token operator">=</span> carry<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> num1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="考察点" tabindex="-1"><a class="header-anchor" href="#考察点" aria-hidden="true">#</a> 考察点</h2>
<ul>
<li>位运算</li>
<li>二进制</li>
</ul>
</template>
