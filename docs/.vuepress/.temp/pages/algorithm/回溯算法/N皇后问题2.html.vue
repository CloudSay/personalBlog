<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。</p>
<p><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/8-queens.png" alt=""></p>
<p>上图为 8 皇后问题的一种解法。</p>
<p>给定一个整数 n，返回 n 皇后不同的解决方案的数量。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">输入</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token literal-property property">输出</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token literal-property property">解释</span><span class="token operator">:</span> <span class="token number">4</span> 皇后问题存在如下两个不同的解法。
<span class="token punctuation">[</span>
 <span class="token punctuation">[</span><span class="token string">".Q.."</span><span class="token punctuation">,</span>  <span class="token comment">// 解法 1</span>
  <span class="token string">"...Q"</span><span class="token punctuation">,</span>
  <span class="token string">"Q..."</span><span class="token punctuation">,</span>
  <span class="token string">"..Q."</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

 <span class="token punctuation">[</span><span class="token string">"..Q."</span><span class="token punctuation">,</span>  <span class="token comment">// 解法 2</span>
  <span class="token string">"Q..."</span><span class="token punctuation">,</span>
  <span class="token string">"...Q"</span><span class="token punctuation">,</span>
  <span class="token string">".Q.."</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<p>回溯法：深度优先遍历（列数作为同级，行数作为深层）+ 剪枝</p>
<ul>
<li>递归深度达到最后一层：达到一个符合条件的解，向上回溯，返回1</li>
<li>循环所有同级向深层递归，并将每次递归的返回值累加</li>
<li>当前位置在已放好皇后的攻击范围内：当前位置不能放置皇后</li>
<li>没有命中上面的规则，说明当前位置可放置皇后，向更深层递归</li>
</ul>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">var</span> <span class="token function-variable function">totalNQueens</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> cols <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token function">totalNQueensCore</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> n<span class="token punctuation">,</span> cols<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">var</span> <span class="token function-variable function">totalNQueensCore</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">row<span class="token punctuation">,</span> n<span class="token punctuation">,</span> cols<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>row <span class="token operator">===</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cols<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>right<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>row <span class="token operator">-</span> i<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>left<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>row <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          cols<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
          left<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>row <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
          right<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>row <span class="token operator">-</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>

          result <span class="token operator">+=</span> <span class="token function">totalNQueensCore</span><span class="token punctuation">(</span>row <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> n<span class="token punctuation">,</span> cols<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
          cols<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
          left<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>row <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
          right<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>row <span class="token operator">-</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div></template>
