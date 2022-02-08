<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>我们可以用<code>2*1</code>的小矩形横着或者竖着去覆盖更大的矩形。请问用n个<code>2*1</code>的小矩形无重叠地覆盖一个<code>2*n</code>的大矩形，总共有多少种方法？</p>
<p>假设有8个块</p>
<p>第1块竖着放，后面还剩<code>7</code>块，共<code>f(7)</code>种方法。</p>
<p>第1块横着放，后面还剩<code>6</code>块，共<code>f(6)</code>种方法。</p>
<p>即<code>f(8)=f(6)+f(7)</code></p>
<p><code>f(n)=f(n-1)+f(n-2)</code></p>
<img :src="$withBase('/矩形覆盖.png')" alt="foo">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">rectCover</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">&lt;=</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> n<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> pre <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">++</span> <span class="token operator">&lt;</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
        result <span class="token operator">=</span> pre <span class="token operator">+</span> current<span class="token punctuation">;</span>
        pre <span class="token operator">=</span> current<span class="token punctuation">;</span>
        current <span class="token operator">=</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></template>
