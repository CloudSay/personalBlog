<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。</p>
<blockquote>
<p>f(n) = f(n-1) +  f(n-2)</p>
</blockquote>
<h2 id="基本思路" tabindex="-1"><a class="header-anchor" href="#基本思路" aria-hidden="true">#</a> 基本思路</h2>
<p>每个台阶都可以选择跳或者不跳，最后一个台阶必跳。</p>
<p>每个台阶有两种选择，n个台阶有2的n次方种选择。</p>
<p>所以一共有2的n-1次跳法。</p>
<p>使用位运算</p>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">jumpFloorII</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token operator">&lt;&lt;</span><span class="token punctuation">(</span><span class="token operator">--</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></template>
