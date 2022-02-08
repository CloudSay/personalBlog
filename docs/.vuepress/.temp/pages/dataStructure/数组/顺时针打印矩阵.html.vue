<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。</p>
<p>例如，如果输入如下4 X 4矩阵：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1 2 3 4 
5 6 7 8
9 10 11 12 
13 14 15 16 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>则依次打印出数字<code>1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.</code></p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<img :src="$withBase('/顺时针打印矩阵.png')" alt="foo">
<p>借助图形思考，将复杂的矩阵拆解成若干个圈，循环打印矩阵，每次打印其中一个圈</p>
<p>设起点坐标为<code>(start,start)</code>，矩阵的行数为<code>rows</code>，矩阵的列数为<code>columns</code></p>
<p>循环结束条件为  <code>rows&gt;start*2</code> 并且 <code>columns&gt;start*2</code></p>
<p>将打印一圈拆解为四部，</p>
<ul>
<li>第一步：从左到右打印一行</li>
<li>第二步：从上到下打印一列</li>
<li>第三步：从右到左打印一行</li>
<li>第四步：从下到上打印一列</li>
</ul>
<p>最后一圈很有可能出现几种异常情况,打印矩阵最里面一圈可能只需三步、两步、甚至一步</p>
<img :src="$withBase('/打印矩阵异常情况.png')" alt="foo">
<p>所以在每一行打印时要做好条件判断:</p>
<p>能走到最后一圈，从左到右必定会打印</p>
<p>结束行号大于开始行号，需要从上到下打印</p>
<p>结束列号大于开始列号，需要从右到左打印</p>
<p>结束行号大于开始行号+1，需要从下到上打印</p>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">// 顺时针打印</span>
    <span class="token keyword">function</span> <span class="token function">printMatrix</span><span class="token punctuation">(</span><span class="token parameter">matrix</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> rows <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
      <span class="token keyword">var</span> coloums <span class="token operator">=</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
      <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>rows <span class="token operator">||</span> <span class="token operator">!</span>coloums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>coloums <span class="token operator">></span> start <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> rows <span class="token operator">></span> start <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printCircle</span><span class="token punctuation">(</span>matrix<span class="token punctuation">,</span> start<span class="token punctuation">,</span> coloums<span class="token punctuation">,</span> rows<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        start<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 打印一圈</span>
    <span class="token keyword">function</span> <span class="token function">printCircle</span><span class="token punctuation">(</span><span class="token parameter">matrix<span class="token punctuation">,</span> start<span class="token punctuation">,</span> coloums<span class="token punctuation">,</span> rows<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> entX <span class="token operator">=</span> coloums <span class="token operator">-</span> start <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> endY <span class="token operator">=</span> rows <span class="token operator">-</span> start <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> entX<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>endY <span class="token operator">></span> start<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> start <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> endY<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>entX<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>entX <span class="token operator">></span> start<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> entX <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">>=</span> start<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>endY<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>endY <span class="token operator">></span> start <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> endY <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">></span> start<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token template-punctuation string">`</span></span> `</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div></template>
