<template><h2 id="题目1-二叉树重建" tabindex="-1"><a class="header-anchor" href="#题目1-二叉树重建" aria-hidden="true">#</a> 题目1-二叉树重建</h2>
<p>输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。</p>
<p>例如输入前序遍历序列<code>{1,2,4,7,3,5,6,8}</code>和中序遍历序列<code>{4,7,2,1,5,3,8,6}</code>，则重建二叉树并返回。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<ul>
<li>前序遍历：根节点 + 左子树前序遍历 + 右子树前序遍历</li>
<li>中序遍历：左子树中序遍历 + 根节点 + 右字数中序遍历</li>
<li>后序遍历：左子树后序遍历 + 右子树后序遍历 + 根节点</li>
</ul>
<p>根据上面的规律：</p>
<ul>
<li>前序遍历找到根结点<code>root</code></li>
<li>找到<code>root</code>在中序遍历的位置 -&gt; 左子树的长度和右子树的长度</li>
<li>截取左子树的中序遍历、右子树的中序遍历</li>
<li>截取左子树的前序遍历、右子树的前序遍历</li>
<li>递归重建二叉树</li>
</ul>
<img :src="$withBase('/重建二叉树.png')" alt="foo">
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">reConstructBinaryTree</span><span class="token punctuation">(</span><span class="token parameter">pre<span class="token punctuation">,</span> vin</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>pre<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>pre<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>pre<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">const</span> value <span class="token operator">=</span> pre<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> index <span class="token operator">=</span> vin<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> vinLeft <span class="token operator">=</span> vin<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> vinRight <span class="token operator">=</span> vin<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>index<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> preLeft <span class="token operator">=</span> pre<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>index<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> preRight <span class="token operator">=</span> pre<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>index<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        node<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">reConstructBinaryTree</span><span class="token punctuation">(</span>preLeft<span class="token punctuation">,</span> vinLeft<span class="token punctuation">)</span><span class="token punctuation">;</span>
        node<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">reConstructBinaryTree</span><span class="token punctuation">(</span>preRight<span class="token punctuation">,</span> vinRight<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> node<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="题目2-求二叉树的遍历" tabindex="-1"><a class="header-anchor" href="#题目2-求二叉树的遍历" aria-hidden="true">#</a> 题目2-求二叉树的遍历</h2>
<p>给定一棵二叉树的前序遍历和中序遍历，求其后序遍历</p>
<p>输入描述:</p>
<p>两个字符串，其长度n均小于等于26。
第一行为前序遍历，第二行为中序遍历。
二叉树中的结点名称以大写字母表示：A，B，C....最多26个结点。</p>
<p>输出描述:</p>
<p>输入样例可能有多组，对于每组测试样例，
输出一行，为后序遍历的字符串。</p>
<p>样例：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入
ABC
BAC
FDXEAG
XDEFAG

输出
BCA
XEDGAF
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="思路-1" tabindex="-1"><a class="header-anchor" href="#思路-1" aria-hidden="true">#</a> 思路</h2>
<p>和上面题目的思路基本相同</p>
<ul>
<li>前序遍历找到根结点<code>root</code></li>
<li>找到<code>root</code>在中序遍历的位置 -&gt; 左子树的长度和右子树的长度</li>
<li>截取左子树的中序遍历、右子树的中序遍历</li>
<li>截取左子树的前序遍历、右子树的前序遍历</li>
<li>递归拼接二叉树的后序遍历</li>
</ul>
<h2 id="代码-1" tabindex="-1"><a class="header-anchor" href="#代码-1" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> pre<span class="token punctuation">;</span>
<span class="token keyword">let</span> vin<span class="token punctuation">;</span>
 
<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>pre <span class="token operator">=</span> <span class="token function">readline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    vin <span class="token operator">=</span> <span class="token function">readline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token function">getHRD</span><span class="token punctuation">(</span>pre<span class="token punctuation">,</span>vin<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
    <span class="token keyword">function</span> <span class="token function">getHRD</span><span class="token punctuation">(</span><span class="token parameter">pre<span class="token punctuation">,</span> vin</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pre<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">''</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>pre<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> head <span class="token operator">=</span> pre<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> splitIndex <span class="token operator">=</span> vin<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> vinLeft <span class="token operator">=</span> vin<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> splitIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> vinRight <span class="token operator">=</span> vin<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>splitIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> preLeft <span class="token operator">=</span> pre<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> splitIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> preRight <span class="token operator">=</span> pre<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>splitIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token function">getHRD</span><span class="token punctuation">(</span>preLeft<span class="token punctuation">,</span> vinLeft<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">getHRD</span><span class="token punctuation">(</span>preRight<span class="token punctuation">,</span> vinRight<span class="token punctuation">)</span> <span class="token operator">+</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="考察点" tabindex="-1"><a class="header-anchor" href="#考察点" aria-hidden="true">#</a> 考察点</h2>
<ul>
<li>二叉树</li>
<li>复杂问题拆解</li>
</ul>
</template>
