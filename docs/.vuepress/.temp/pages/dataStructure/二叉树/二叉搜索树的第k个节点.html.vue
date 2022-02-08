<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>给定一棵二叉搜索树，请找出其中的第k小的结点。 例如， （5，3，7，2，4，6，8）  中，按结点数值大小顺序第三小结点的值为4。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<p>二叉搜索树的中序遍历即排序后的节点，本题实际考察二叉树的遍历。</p>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">//递归实现</span>
    <span class="token keyword">function</span> <span class="token function">KthNode</span><span class="token punctuation">(</span><span class="token parameter">pRoot<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token function">loopThrough</span><span class="token punctuation">(</span>pRoot<span class="token punctuation">,</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> k <span class="token operator">&lt;=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> arr<span class="token punctuation">[</span>k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">loopThrough</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">loopThrough</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">loopThrough</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


    <span class="token comment">//非递归实现</span>
    <span class="token keyword">function</span> <span class="token function">KthNode</span><span class="token punctuation">(</span><span class="token parameter">pRoot<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> current <span class="token operator">=</span> pRoot<span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">||</span> current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>
          current <span class="token operator">=</span> current<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        current <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>
        current <span class="token operator">=</span> current<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> k <span class="token operator">&lt;=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> arr<span class="token punctuation">[</span>k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h2 id="考察点" tabindex="-1"><a class="header-anchor" href="#考察点" aria-hidden="true">#</a> 考察点</h2>
<ul>
<li>二叉树</li>
</ul>
</template>
