<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>输入一棵二叉树，判断该二叉树是否是平衡二叉树。</p>
<blockquote>
<p>平衡二叉树：每个子树的深度之差不超过1</p>
</blockquote>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<p>后续遍历二叉树</p>
<p>在遍历二叉树每个节点前都会遍历其左右子树</p>
<p>比较左右子树的深度，若差值大于1 则返回一个标记 -1表示当前子树不平衡</p>
<p>左右子树有一个不是平衡的，或左右子树差值大于1，则整课树不平衡</p>
<p>若左右子树平衡，返回当前树的深度（左右子树的深度最大值+1）</p>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">IsBalanced_Solution</span><span class="token punctuation">(</span><span class="token parameter">pRoot</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">balanced</span><span class="token punctuation">(</span>pRoot<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">balanced</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token function">balanced</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token function">balanced</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> right <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>left <span class="token operator">-</span> right<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="考察点" tabindex="-1"><a class="header-anchor" href="#考察点" aria-hidden="true">#</a> 考察点</h2>
<ul>
<li>二叉树</li>
</ul>
</template>
