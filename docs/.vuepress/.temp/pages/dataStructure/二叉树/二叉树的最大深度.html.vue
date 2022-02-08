<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>给定一个二叉树，找出其最大深度。</p>
<p>二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。</p>
<p>说明: 叶子节点是指没有子节点的节点。</p>
<p>示例：</p>
<p>给定二叉树 <code>[3,9,20,null,null,15,7]</code>，</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    3
   / \
  9  20
    /  \
   15   7
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>返回它的最大深度 3 。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<ul>
<li>深度优先遍历 + 分治</li>
<li>一棵二叉树的最大深度等于左子树深度和右子树最大深度的最大值 + 1</li>
</ul>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">TreeDepth</span><span class="token punctuation">(</span><span class="token parameter">pRoot</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token operator">!</span>pRoot <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token function">TreeDepth</span><span class="token punctuation">(</span>pRoot<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">TreeDepth</span><span class="token punctuation">(</span>pRoot<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="考察点" tabindex="-1"><a class="header-anchor" href="#考察点" aria-hidden="true">#</a> 考察点</h2>
<ul>
<li>二叉树</li>
<li>递归</li>
<li>分治</li>
</ul>
</template>
