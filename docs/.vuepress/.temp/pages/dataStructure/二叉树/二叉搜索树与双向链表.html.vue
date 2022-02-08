<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<p>二叉搜索树的中序遍历即排序后的序列</p>
<ul>
<li>1.递归左子树，找到左子树的最后一个节点，根节点左侧连接到左子树的最后一个节点</li>
<li>2.当前节点变为已经转换完成的链表的最后一个节点</li>
<li>3.递归右子树，找到当前树的最后一个节点</li>
<li>4.回溯到上一层，进行链接...</li>
</ul>
<img :src="$withBase('/二叉搜索树与双向链表.png')" alt="foo">
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Convert</span><span class="token punctuation">(</span><span class="token parameter">pRootOfTree</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pRootOfTree<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token function">ConvertCore</span><span class="token punctuation">(</span>pRootOfTree<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>pRootOfTree<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        pRootOfTree <span class="token operator">=</span> pRootOfTree<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> pRootOfTree<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">ConvertCore</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> last</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        last <span class="token operator">=</span> <span class="token function">ConvertCore</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> last<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      node<span class="token punctuation">.</span>left <span class="token operator">=</span> last<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>last<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        last<span class="token punctuation">.</span>right <span class="token operator">=</span> node<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      last <span class="token operator">=</span> node<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        last <span class="token operator">=</span> <span class="token function">ConvertCore</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> last<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> last<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="考察点" tabindex="-1"><a class="header-anchor" href="#考察点" aria-hidden="true">#</a> 考察点</h2>
<ul>
<li>二叉搜索树</li>
<li>链表</li>
</ul>
</template>
