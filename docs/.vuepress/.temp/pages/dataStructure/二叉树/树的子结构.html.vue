<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>输入两棵二叉树<code>A</code>，<code>B</code>，判断<code>B</code>是不是<code>A</code>的子结构。（ps：我们约定空树不是任意一个树的子结构）</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<p>首先找到<code>A</code>树中和<code>B</code>树根节点相同的节点</p>
<p>从此节点开始，递归<code>AB</code>树比较是否有不同节点</p>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">HasSubtree</span><span class="token punctuation">(</span><span class="token parameter">pRoot1<span class="token punctuation">,</span> pRoot2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>pRoot1 <span class="token operator">&amp;&amp;</span> pRoot2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>pRoot1<span class="token punctuation">.</span>val <span class="token operator">===</span> pRoot2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          result <span class="token operator">=</span> <span class="token function">compare</span><span class="token punctuation">(</span>pRoot1<span class="token punctuation">,</span> pRoot2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          result <span class="token operator">=</span> <span class="token function">HasSubtree</span><span class="token punctuation">(</span>pRoot1<span class="token punctuation">.</span>right<span class="token punctuation">,</span> pRoot2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          result <span class="token operator">=</span> <span class="token function">HasSubtree</span><span class="token punctuation">(</span>pRoot1<span class="token punctuation">.</span>left<span class="token punctuation">,</span> pRoot2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token parameter">pRoot1<span class="token punctuation">,</span> pRoot2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>pRoot2 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>pRoot1 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>pRoot1<span class="token punctuation">.</span>val <span class="token operator">!==</span> pRoot2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token function">compare</span><span class="token punctuation">(</span>pRoot1<span class="token punctuation">.</span>right<span class="token punctuation">,</span> pRoot2<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">compare</span><span class="token punctuation">(</span>pRoot1<span class="token punctuation">.</span>left<span class="token punctuation">,</span> pRoot2<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div></template>
