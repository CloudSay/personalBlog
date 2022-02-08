<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>给定一个二叉树，返回它的 后序 遍历。</p>
<p>示例:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">输入</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>  
   <span class="token number">1</span>
    \
     <span class="token number">2</span>
    <span class="token operator">/</span>
   <span class="token number">3</span> 
<span class="token literal-property property">输出</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>进阶: 递归算法很简单，你可以通过迭代算法完成吗？</p>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<p>递归实现</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">var</span> <span class="token function-variable function">postorderTraversal</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">postorderTraversal</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> array<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">postorderTraversal</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> array<span class="token punctuation">)</span><span class="token punctuation">;</span>
        array<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> array<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>非递归实现</p>
<ul>
<li>取根节点为目标节点，开始遍历</li>
<li>1.左孩子入栈 -&gt; 直至左孩子为空的节点</li>
<li>2.栈顶节点的右节点为空或右节点被访问过 -&gt; 节点出栈并访问他，将节点标记为已访问</li>
<li>3.栈顶节点的右节点不为空且未被访问，以右孩子为目标节点，再依次执行1、2、3</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">var</span> <span class="token function-variable function">postorderTraversal</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> last <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 标记上一个访问的节点</span>
      <span class="token keyword">let</span> current <span class="token operator">=</span> root<span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>current <span class="token operator">||</span> stack<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>
          current <span class="token operator">=</span> current<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        current <span class="token operator">=</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>current<span class="token punctuation">.</span>right <span class="token operator">||</span> current<span class="token punctuation">.</span>right <span class="token operator">==</span> last<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          current <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
          last <span class="token operator">=</span> current<span class="token punctuation">;</span>
          current <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 继续弹栈</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          current <span class="token operator">=</span> current<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></template>
