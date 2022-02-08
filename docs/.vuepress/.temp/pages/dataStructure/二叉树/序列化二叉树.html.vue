<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>请实现两个函数，分别用来序列化和反序列化二叉树</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<ul>
<li>若一颗二叉树是不完全的，我们至少需要两个遍历才能将它重建（像题目<RouterLink to="/dataStructure/%E4%BA%8C%E5%8F%89%E6%A0%91/%E9%87%8D%E5%BB%BA%E4%BA%8C%E5%8F%89%E6%A0%91.html">重建二叉树</RouterLink>一样）</li>
<li>但是这种方式仍然有一定的局限性，比如二叉树中不能出现重复节点。</li>
<li>如果二叉树是一颗完全二叉树，我们只需要知道前序遍历即可将它重建。</li>
<li>因此在序列化时二叉树时，可以将空节点使用特殊符号存储起来，这样就可以模拟一棵完全二叉树的前序遍历</li>
<li>在重建二叉树时，当遇到特殊符号当空节点进行处理</li>
</ul>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Serialize</span><span class="token punctuation">(</span><span class="token parameter">pRoot<span class="token punctuation">,</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pRoot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'#'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>pRoot<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">Serialize</span><span class="token punctuation">(</span>pRoot<span class="token punctuation">.</span>left<span class="token punctuation">,</span> arr<span class="token punctuation">)</span>
        <span class="token function">Serialize</span><span class="token punctuation">(</span>pRoot<span class="token punctuation">.</span>right<span class="token punctuation">,</span> arr<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">Deserialize</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token function">deserialize</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">deserialize</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> current <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">!==</span> <span class="token string">'#'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">val</span><span class="token operator">:</span> current <span class="token punctuation">}</span>
        node<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">deserialize</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        node<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">deserialize</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> node<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="考察点" tabindex="-1"><a class="header-anchor" href="#考察点" aria-hidden="true">#</a> 考察点</h2>
<ul>
<li>二叉树</li>
<li>复杂问题拆解</li>
</ul>
</template>
