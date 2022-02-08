<template><h2 id="包含min函数的栈" tabindex="-1"><a class="header-anchor" href="#包含min函数的栈" aria-hidden="true">#</a> 包含min函数的栈</h2>
<p>定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<p>1.定义两个栈，一个栈用于存储数据，另一个栈用于存储每次数据进栈时栈的最小值.</p>
<p>2.每次数据进栈时，将此数据和最小值栈的栈顶元素比较，将二者比较的较小值再次存入最小值栈.</p>
<p>4.数据栈出栈，最小值栈也出栈。</p>
<p>3.这样最小值栈的栈顶永远是当前栈的最小值。</p>
<p>以数据[3,4,2,7,9,0]为例，让这组数字依次如栈，则栈和其对应的最小值栈如下：</p>
<img :src="$withBase('/mainstack.png')" alt="foo">
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> dataStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> minStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
 
<span class="token keyword">function</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    dataStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>minStack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span>  node <span class="token operator">&lt;</span> <span class="token function">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        minStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        minStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    minStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> dataStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">var</span> length <span class="token operator">=</span> dataStack<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">return</span> length<span class="token operator">></span><span class="token number">0</span><span class="token operator">&amp;&amp;</span>dataStack<span class="token punctuation">[</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">var</span> length <span class="token operator">=</span> minStack<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">return</span> length<span class="token operator">></span><span class="token number">0</span><span class="token operator">&amp;&amp;</span>minStack<span class="token punctuation">[</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div></template>
