<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>输入一个正数<code>S</code>，打印出所有和为S的连续正数序列。</p>
<p>例如：输入<code>15</code>，有序<code>1+2+3+4+5</code> = <code>4+5+6</code> = <code>7+8</code> = <code>15</code> 所以打印出3个连续序列<code>1-5</code>，<code>5-6</code>和<code>7-8</code>。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<ul>
<li>
<p>创建一个容器<code>child</code>，用于表示当前的子序列，初始元素为<code>1,2</code></p>
</li>
<li>
<p>记录子序列的开头元素<code>small</code>和末尾元素<code>big</code></p>
</li>
<li>
<p><code>big</code>向右移动子序列末尾增加一个数 <code>small</code>向右移动子序列开头减少一个数</p>
</li>
<li>
<p>当子序列的和大于目标值，<code>small</code>向右移动，子序列的和小于目标值，<code>big</code>向右移动</p>
</li>
</ul>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">FindContinuousSequence</span><span class="token punctuation">(</span><span class="token parameter">sum</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> child <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> big <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> small <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> currentSum <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>big <span class="token operator">&lt;</span> sum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>currentSum <span class="token operator">&lt;</span> sum <span class="token operator">&amp;&amp;</span> big <span class="token operator">&lt;</span> sum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          child<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">++</span>big<span class="token punctuation">)</span><span class="token punctuation">;</span>
          currentSum <span class="token operator">+=</span> big<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>currentSum <span class="token operator">></span> sum <span class="token operator">&amp;&amp;</span> small <span class="token operator">&lt;</span> big<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          child<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          currentSum <span class="token operator">-=</span> small<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>currentSum <span class="token operator">===</span> sum <span class="token operator">&amp;&amp;</span> child<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>child<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          child<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">++</span>big<span class="token punctuation">)</span><span class="token punctuation">;</span>
          currentSum <span class="token operator">+=</span> big<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></template>
