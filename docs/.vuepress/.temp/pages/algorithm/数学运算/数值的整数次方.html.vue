<template><h2 id="数值的整数次方" tabindex="-1"><a class="header-anchor" href="#数值的整数次方" aria-hidden="true">#</a> 数值的整数次方</h2>
<p>给定一个<code>double</code>类型的浮点数<code>base</code>和<code>int</code>类型的整数<code>exponent</code>。求<code>base</code>的<code>exponent</code>次方。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<p>这道题逻辑上很简单，但很容易出错。</p>
<p>关键是要考虑全面，考虑到所有情况。</p>
<p><code>exponent</code> 是正，负，<code>0</code>的情况</p>
<p><code>base</code>为<code>0</code>的情况。</p>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Power</span><span class="token punctuation">(</span><span class="token parameter">base<span class="token punctuation">,</span> exponent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>exponent <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>exponent <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
          <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> exponent<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result <span class="token operator">*=</span> base<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">return</span> result<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>exponent <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
          <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>exponent<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result <span class="token operator">*=</span> base<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">return</span> result <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">/</span> result <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></template>
