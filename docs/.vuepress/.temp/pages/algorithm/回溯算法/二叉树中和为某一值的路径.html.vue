<template><h2 id="二叉树中和为某一值的路径" tabindex="-1"><a class="header-anchor" href="#二叉树中和为某一值的路径" aria-hidden="true">#</a> 二叉树中和为某一值的路径</h2>
<p>输入一颗二叉树的根节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<p>套用回溯算法的思路</p>
<p>设定一个结果数组result来存储所有符合条件的路径</p>
<p>设定一个栈stack来存储当前路径中的节点</p>
<p>设定一个和sum来标识当前路径之和</p>
<ul>
<li>
<p>从根结点开始深度优先遍历，每经过一个节点，将节点入栈</p>
</li>
<li>
<p>到达叶子节点，且当前路径之和等于给定目标值，则找到一个可行的解决方案，将其加入结果数组</p>
</li>
<li>
<p>遍历到二叉树的某个节点时有2个可能的选项，选择前往左子树或右子树</p>
</li>
<li>
<p>若存在左子树，继续向左子树递归</p>
</li>
<li>
<p>若存在右子树，继续向右子树递归</p>
</li>
<li>
<p>若上述条件均不满足，或已经遍历过，将当前节点出栈，向上回溯</p>
</li>
</ul>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">FindPath</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> expectNumber</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">FindPathCore</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> expectNumber<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">FindPathCore</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> expectNumber<span class="token punctuation">,</span> stack<span class="token punctuation">,</span> sum<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
      sum <span class="token operator">+=</span> node<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>node<span class="token punctuation">.</span>right <span class="token operator">&amp;&amp;</span> sum <span class="token operator">===</span> expectNumber<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">FindPathCore</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> expectNumber<span class="token punctuation">,</span> stack<span class="token punctuation">,</span> sum<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">FindPathCore</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> expectNumber<span class="token punctuation">,</span> stack<span class="token punctuation">,</span> sum<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="考察点" tabindex="-1"><a class="header-anchor" href="#考察点" aria-hidden="true">#</a> 考察点</h2>
<ul>
<li>二叉树</li>
<li>回溯算法</li>
</ul>
</template>
