import{_ as e,o as p,c as t,a as s,b as l}from"./app-a7fYW3Qz.js";const i={},o=["src"];function c(a,n){return p(),t("div",null,[n[0]||(n[0]=s('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目"><span>题目</span></a></h2><p>给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。</p><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h2><p>中序遍历的顺序 左 - 根 - 右</p><p>所以寻找下一个节点的优先级应该反过来 优先级 右 - 根 - 左</p><ul><li>右节点不为空 - 取右节点的最左侧节点</li><li>右节点为空 - 如果节点是父亲节的左节点 取父节点</li><li>右节点为空 - 如果节点是父亲节的右节点 父节点已经被遍历过，再往上层寻找...</li><li>左节点一定在当前节点之前被遍历过</li></ul><p>以下图的二叉树来分析：</p>',7)),l("img",{src:a.$withBase("/二叉树.jpeg"),alt:"foo"},null,8,o),n[1]||(n[1]=s(`<p>中序遍历： CBDAEF</p><ul><li>B - 右节点不为空，下一个节点为右节点D</li><li>C - 右节点为空，C是父节点的左节点，取父节点B</li><li>D - 右节点为空，D是父节点的右节点，再往上蹭分析，B是其父节点的左节点，取B的父节点A</li><li>F - 右节点为空，F是父节点的右节点，没有符合条件的节点，F为遍历的最后一个节点，返回null</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码"><span>代码</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>    <span class="token comment">/*function TreeLinkNode(x){
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="考察点" tabindex="-1"><a class="header-anchor" href="#考察点"><span>考察点</span></a></h2><ul><li>二叉树</li><li>复杂问题拆解</li></ul>`,6))])}const d=e(i,[["render",c],["__file","二叉树的下一个节点.html.vue"]]);export{d as default};
