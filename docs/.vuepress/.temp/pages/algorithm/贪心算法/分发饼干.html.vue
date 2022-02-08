<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。对每个孩子 i ，都有一个胃口值 <code>gi</code> ，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j ，都有一个尺寸 <code>sj</code> 。如果 <code>sj &gt;= gi</code> ，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。</p>
<p>注意：</p>
<p>你可以假设胃口值为正。
一个小朋友最多只能拥有一块饼干。</p>
<p>示例 1:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">输入</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span>

<span class="token literal-property property">输出</span><span class="token operator">:</span> <span class="token number">1</span>

<span class="token literal-property property">解释</span><span class="token operator">:</span> 
你有三个孩子和两块小饼干，<span class="token number">3</span>个孩子的胃口值分别是：<span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span>。
虽然你有两块小饼干，由于他们的尺寸都是<span class="token number">1</span>，你只能让胃口值是<span class="token number">1</span>的孩子满足。
所以你应该输出<span class="token number">1</span>。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>示例 2:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">输入</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>

<span class="token literal-property property">输出</span><span class="token operator">:</span> <span class="token number">2</span>

<span class="token literal-property property">解释</span><span class="token operator">:</span> 
你有两个孩子和三块小饼干，<span class="token number">2</span>个孩子的胃口值分别是<span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span>。
你拥有的饼干数量和尺寸都足以让所有孩子满足。
所以你应该输出<span class="token number">2.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<blockquote>
<p>优先使用最小的饼干满足最小的胃口</p>
</blockquote>
<ul>
<li>孩子胃口，饼干大小从小到大排序</li>
<li>优先满足胃口小的孩子，满足后换一个胃口大的</li>
<li>使用糖果进行尝试，满足后换下一个大饼干</li>
</ul>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">findContentChildren</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">g<span class="token punctuation">,</span> s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    g <span class="token operator">=</span> g<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    s <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> cookie <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> child <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cookie <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> child <span class="token operator">&lt;</span> g<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>g<span class="token punctuation">[</span>child<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> s<span class="token punctuation">[</span>cookie<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            num <span class="token operator">+=</span> <span class="token number">1</span>
            child <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
        cookie <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> num
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="考察点" tabindex="-1"><a class="header-anchor" href="#考察点" aria-hidden="true">#</a> 考察点</h2>
<ul>
<li>贪心算法</li>
</ul>
</template>
