<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串<code>abc</code>,则打印出由字符<code>a,b,c</code>所能排列出来的所有字符串<code>abc,acb,bac,bca,cab</code>和<code>cba</code>。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<p>使用回溯法</p>
<p>记录一个字符（<code>temp</code>），用于存储当前需要进入排列的字符</p>
<p>记录一个字符串（<code>current</code>），用于记录当前已经排列好的字符</p>
<p>记录一个队列（<code>queue</code>），用于存储还未被排列的字符</p>
<ul>
<li>每次排列将<code>temp</code>添加到<code>current</code></li>
<li>如果<code>queue</code>为空，则本次排列完成，将<code>curret</code>加入到结果数组中，结束递归</li>
<li>如果<code>queue</code>不为空，说明还有未排列的字符</li>
<li>递归排列<code>queue</code>中剩余的字符</li>
<li>为了不影响后续排列，每次递归完成，将当前递归的字符<code>temp</code>加回队列</li>
</ul>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<blockquote>
<p>记录一个当前排列字符temp</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Permutation</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        queue <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
        <span class="token function">PermutationCore</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      result<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">PermutationCore</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span> result<span class="token punctuation">,</span> temp <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">,</span> current <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      current <span class="token operator">+=</span> temp<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        temp <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">PermutationCore</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span> result<span class="token punctuation">,</span> temp<span class="token punctuation">,</span> current<span class="token punctuation">)</span><span class="token punctuation">;</span>
        queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><blockquote>
<p>记录一个当前索引，不断交换数组中的元素（不太好理解，不推荐）</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Permutation</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">var</span> array <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">permutate</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
      result<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">permutate</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> index<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">===</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>array<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> index<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">swap</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> index<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">permutate</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">swap</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> i<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="考察点" tabindex="-1"><a class="header-anchor" href="#考察点" aria-hidden="true">#</a> 考察点</h2>
<ul>
<li>字符串</li>
<li>回溯算法</li>
</ul>
</template>
