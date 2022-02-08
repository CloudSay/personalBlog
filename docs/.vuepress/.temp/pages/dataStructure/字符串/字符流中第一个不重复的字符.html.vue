<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>请实现一个函数用来找出字符流中第一个只出现一次的字符。例如，当从字符流中只读出前两个字符&quot;go&quot;时，第一个只出现一次的字符是&quot;g&quot;。
当从该字符流中读出前六个字符“google&quot;时，第一个只出现一次的字符是&quot;l&quot;。</p>
<p>如果当前字符流没有存在出现一次的字符，返回#字符。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<p>要求获得第一个只出现一次的。</p>
<p><s>使用一个有序的存储结构为每个字符计数，再遍历这个对象，第一个出现次数为1的即为结果。</s></p>
<p><s>在JavaScript中有序存储空间选择对象即可。</s></p>
<p>上述解决办法是有问题的，因为在<code>JavaScript</code>中对象遍历并不是在所有浏览器中的实现都是有序的，而且直接使用对象存储，当字符流中出现数字时也是有问题的。</p>
<p>所以下面改用剑指offer中的解法：</p>
<ul>
<li>
<p>创建一个长度为<code>256</code>的数组<code>container</code>来标记字符流中字符出现的次数</p>
</li>
<li>
<p>使用字符<code>ASCII</code>码作为下标，这样数组长度最大为<code>256</code></p>
</li>
<li>
<p>当字符没有出现过，标记为<code>-1</code></p>
</li>
<li>
<p>当字符只出现一次，标记为字符在字符流中的位置<code>index</code></p>
</li>
<li>
<p>当字符出现多次时，标记为<code>-2</code></p>
</li>
<li>
<p>当调用<code>FirstAppearingOnce</code>时，只需要找到，数组值大于<code>-1</code>的且值最小的位置索引，即为第一个出现次数为<code>1</code>的字符</p>
</li>
</ul>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">let</span> container <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">256</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">Init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      container <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">256</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">Insert</span><span class="token punctuation">(</span><span class="token parameter">ch</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> code <span class="token operator">=</span> ch<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>container<span class="token punctuation">[</span>code<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        container<span class="token punctuation">[</span>code<span class="token punctuation">]</span> <span class="token operator">=</span> index<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>container<span class="token punctuation">[</span>code<span class="token punctuation">]</span> <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        container<span class="token punctuation">[</span>code<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      index<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">FirstAppearingOnce</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> minIndex <span class="token operator">=</span> <span class="token number">256</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> strIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">256</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>container<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> container<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> minIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          minIndex <span class="token operator">=</span> container<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
          strIndex <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> minIndex <span class="token operator">===</span> <span class="token number">256</span> <span class="token operator">?</span> <span class="token string">'#'</span> <span class="token operator">:</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span>strIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="考察点" tabindex="-1"><a class="header-anchor" href="#考察点" aria-hidden="true">#</a> 考察点</h2>
<ul>
<li>字符串</li>
<li>hash</li>
</ul>
</template>
