<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。</p>
<h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2>
<p>这是一道考察二进制的题目</p>
<p>二进制或运算符<code>（or）</code>：符号为|，表示若两个二进制位都为<code>0</code>，则结果为<code>0</code>，否则为<code>1</code>。</p>
<p>二进制与运算符<code>（and）</code>：符号为&amp;，表示若两个二进制位都为<code>1</code>，则结果为<code>1</code>，否则为<code>0</code>。</p>
<p>二进制否运算符<code>（not）</code>：符号为~，表示对一个二进制位取反。</p>
<p>异或运算符<code>（xor）</code>：符号为^，表示若两个二进制位不相同，则结果为1，否则为0</p>
<p>左移运算符<code>m &lt;&lt; n </code>表示把m左移n位，左移n位的时候，最左边的n位将被丢弃，同时在最右边补上<code>n</code>个<code>0</code>，比如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token number">00001010</span><span class="token operator">&lt;&lt;</span><span class="token number">2</span> <span class="token operator">=</span> <span class="token number">00101000</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>右移运算符<code>m &gt;&gt; n </code>表示把<code>m</code>右移<code>n</code>位，右移<code>n</code>位的时候，最右边的n位将被丢弃，同时在最左边补上<code>n</code>个<code>0</code>，比如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token number">00001010</span><span class="token operator">>></span><span class="token number">2</span> <span class="token operator">=</span> <span class="token number">00000010</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>我们可以让目标数字和一个数字做与运算</p>
<p>这个用户比较的数字必须只有一位是<code>1</code>其他位是<code>0</code>，这样就可以知道目标数字的这一位是否为<code>0</code>。</p>
<p>所以用于比较的这个数字初始值为<code>1</code>，比较完后让<code>1</code>左移<code>1</code>位，这样就可以依次比较所有位是否为<code>1</code>。</p>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">NumberOf1</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>flag <span class="token operator">&amp;</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
            count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
       flag <span class="token operator">=</span> flag <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></template>
