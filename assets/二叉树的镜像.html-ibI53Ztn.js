import{_ as s,o as a,c as e,a as t}from"./app-B5yNCZ8Y.js";const i={};function p(l,n){return a(),e("div",null,[...n[0]||(n[0]=[t(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目"><span>题目</span></a></h2><p>操作给定的二叉树，将其变换为源二叉树的镜像。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>       源二叉树 
    	    8
    	   /  \\
    	  6   10
    	 / \\  / \\
    	5  7 9 11
    	镜像二叉树
    	    8
    	   /  \\
    	  10   6
    	 / \\  / \\
    	11 9 7  5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-2-解题思路" tabindex="-1"><a class="header-anchor" href="#_1-2-解题思路"><span>1.2 解题思路</span></a></h2><p>递归交换二叉树所有节点左右节点的位置。</p><h2 id="_1-3-代码" tabindex="-1"><a class="header-anchor" href="#_1-3-代码"><span>1.3 代码</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Mirror</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> temp <span class="token operator">=</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
        root<span class="token punctuation">.</span>right <span class="token operator">=</span> root<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
        root<span class="token punctuation">.</span>left <span class="token operator">=</span> temp<span class="token punctuation">;</span>
        <span class="token function">Mirror</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">Mirror</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="考察点" tabindex="-1"><a class="header-anchor" href="#考察点"><span>考察点</span></a></h2><ul><li>二叉树</li><li>抽象问题形象化</li></ul>`,9)])])}const o=s(i,[["render",p],["__file","二叉树的镜像.html.vue"]]);export{o as default};
