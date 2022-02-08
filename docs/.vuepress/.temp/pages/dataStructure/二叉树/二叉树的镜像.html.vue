<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>操作给定的二叉树，将其变换为源二叉树的镜像。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>       源二叉树 
    	    8
    	   /  \
    	  6   10
    	 / \  / \
    	5  7 9 11
    	镜像二叉树
    	    8
    	   /  \
    	  10   6
    	 / \  / \
    	11 9 7  5
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="_1-2-解题思路" tabindex="-1"><a class="header-anchor" href="#_1-2-解题思路" aria-hidden="true">#</a> 1.2 解题思路</h2>
<p>递归交换二叉树所有节点左右节点的位置。</p>
<h2 id="_1-3-代码" tabindex="-1"><a class="header-anchor" href="#_1-3-代码" aria-hidden="true">#</a> 1.3 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Mirror</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> temp <span class="token operator">=</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
        root<span class="token punctuation">.</span>right <span class="token operator">=</span> root<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
        root<span class="token punctuation">.</span>left <span class="token operator">=</span> temp<span class="token punctuation">;</span>
        <span class="token function">Mirror</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">Mirror</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="考察点" tabindex="-1"><a class="header-anchor" href="#考察点" aria-hidden="true">#</a> 考察点</h2>
<ul>
<li>二叉树</li>
<li>抽象问题形象化</li>
</ul>
</template>
