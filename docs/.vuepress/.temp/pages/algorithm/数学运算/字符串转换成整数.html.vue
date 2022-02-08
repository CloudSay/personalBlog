<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>将一个字符串转换成一个整数(实现<code>Integer.valueOf(string)</code>的功能，但是<code>string</code>不符合数字要求时返回0)，要求不能使用字符串转换整数的库函数。 数值为0或者字符串不是一个合法的数值则返回0。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<p>循环字符串：当前值*10相加，循环时看每一项是否合法，最后根据首位符号判断正负</p>
<p>主要考虑编写代码的严谨性，需要判断以下异常情况</p>
<ul>
<li>1.输入为空</li>
<li>2.有无符号 正负</li>
</ul>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">StrToInt</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>str <span class="token operator">==</span> <span class="token keyword">undefined</span> <span class="token operator">||</span> str <span class="token operator">==</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> first <span class="token operator">=</span> str<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> int <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>first <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> first <span class="token operator">&lt;=</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        int <span class="token operator">=</span> first<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>first <span class="token operator">!==</span> <span class="token string">'-'</span> <span class="token operator">&amp;&amp;</span> first <span class="token operator">!==</span> <span class="token string">'+'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> str<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> str<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          int <span class="token operator">=</span> int <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          i<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> first <span class="token operator">===</span> <span class="token string">'-'</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">-</span> int <span class="token operator">:</span> int<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></template>
