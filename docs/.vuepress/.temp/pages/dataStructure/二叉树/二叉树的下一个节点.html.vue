<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<p>中序遍历的顺序  左 - 根 - 右</p>
<p>所以寻找下一个节点的优先级应该反过来  优先级  右 - 根 - 左</p>
<ul>
<li>右节点不为空 - 取右节点的最左侧节点</li>
<li>右节点为空 - 如果节点是父亲节的左节点 取父节点</li>
<li>右节点为空 - 如果节点是父亲节的右节点 父节点已经被遍历过，再往上层寻找...</li>
<li>左节点一定在当前节点之前被遍历过</li>
</ul>
<p>以下图的二叉树来分析：</p>
<img :src="$withBase('/二叉树.jpeg')" alt="foo">
<p>中序遍历： CBDAEF</p>
<ul>
<li>B - 右节点不为空，下一个节点为右节点D</li>
<li>C - 右节点为空，C是父节点的左节点，取父节点B</li>
<li>D - 右节点为空，D是父节点的右节点，再往上蹭分析，B是其父节点的左节点，取B的父节点A</li>
<li>F - 右节点为空，F是父节点的右节点，没有符合条件的节点，F为遍历的最后一个节点，返回null</li>
</ul>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">/*function TreeLinkNode(x){
        this.val = x;
        this.left = null;
        this.right = null;
        this.next = null;
    }*/</span>
    <span class="token keyword">function</span> <span class="token function">GetNext</span><span class="token punctuation">(</span><span class="token parameter">pNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>pNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        pNode <span class="token operator">=</span> pNode<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>pNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          pNode <span class="token operator">=</span> pNode<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> pNode<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>pNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pNode<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>pNode <span class="token operator">==</span> pNode<span class="token punctuation">.</span>next<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> pNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          pNode <span class="token operator">=</span> pNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> pNode<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="考察点" tabindex="-1"><a class="header-anchor" href="#考察点" aria-hidden="true">#</a> 考察点</h2>
<ul>
<li>二叉树</li>
<li>复杂问题拆解</li>
</ul>
</template>
