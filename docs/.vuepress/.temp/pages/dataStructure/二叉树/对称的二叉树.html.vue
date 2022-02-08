<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>请实现一个函数，用来判断一颗二叉树是不是对称的。注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<p>二叉树的右子树是二叉树左子树的镜像二叉树。</p>
<p>镜像二叉树：两颗二叉树根结点相同，但他们的左右两个子节点交换了位置。</p>
<img :src="$withBase('/对称二叉树.png')" alt="foo">
<p>如图，1为对称二叉树，2、3都不是。</p>
<ul>
<li>两个根结点相等</li>
<li>左子树的右节点和右子树的左节点相同。</li>
<li>右子树的左节点和左子树的右节点相同。</li>
</ul>
<p>递归所有节点满足以上条件即二叉树对称。</p>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">isSymmetrical</span><span class="token punctuation">(</span><span class="token parameter">pRoot</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">isSymmetricalTree</span><span class="token punctuation">(</span>pRoot<span class="token punctuation">,</span> pRoot<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">isSymmetricalTree</span><span class="token punctuation">(</span><span class="token parameter">node1<span class="token punctuation">,</span> node2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node1 <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>node2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node1 <span class="token operator">||</span> <span class="token operator">!</span>node2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node1<span class="token punctuation">.</span>val <span class="token operator">!=</span> node2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token function">isSymmetricalTree</span><span class="token punctuation">(</span>node1<span class="token punctuation">.</span>left<span class="token punctuation">,</span> node2<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isSymmetricalTree</span><span class="token punctuation">(</span>node1<span class="token punctuation">.</span>right<span class="token punctuation">,</span> node2<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="考察点" tabindex="-1"><a class="header-anchor" href="#考察点" aria-hidden="true">#</a> 考察点</h2>
<ul>
<li>二叉树</li>
<li>抽象问题形象化</li>
</ul>
</template>
