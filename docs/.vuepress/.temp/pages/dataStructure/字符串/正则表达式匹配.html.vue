<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>请实现一个函数用来匹配包括'.'和'<em>'的正则表达式。
模式中的字符'.'表示任意一个字符，而'</em>'表示它前面的字符可以出现任意次（包含0次）。 在本题中，匹配是指字符串的所有字符匹配整个模式。
例如，字符串&quot;aaa&quot;与模式&quot;a.a&quot;和&quot;ab<em>ac</em>a&quot;匹配，但是与&quot;aa.a&quot;和&quot;ab*a&quot;均不匹配。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<p>当模式中的第二个字符不是“*”时：</p>
<ul>
<li>1、如果字符串第一个字符和模式中的第一个字符相匹配，那么字符串和模式都后移一个字符，然后匹配剩余的。</li>
<li>2、如果 字符串第一个字符和模式中的第一个字符相不匹配，直接返回false。</li>
</ul>
<p>而当模式中的第二个字符是“*”时：</p>
<ul>
<li>如果字符串第一个字符跟模式第一个字符不匹配，则模式后移2个字符，继续匹配。</li>
</ul>
<p>如果字符串第一个字符跟模式第一个字符匹配，可以有3种匹配方式：</p>
<ul>
<li>1、模式后移2字符，相当于x*被忽略；</li>
<li>2、字符串后移1字符，模式后移2字符；</li>
<li>3、字符串后移1字符，模式不变，即继续匹配字符下一位，因为*可以匹配多位；</li>
</ul>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">match</span><span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> pattern</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">==</span> <span class="token keyword">undefined</span> <span class="token operator">||</span> pattern <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token function">matchStr</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> pattern<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">matchStr</span><span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> pattern<span class="token punctuation">,</span> sIndex<span class="token punctuation">,</span> patternIndex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>sIndex <span class="token operator">===</span> s<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> patternIndex <span class="token operator">===</span> pattern<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>sIndex <span class="token operator">!==</span> s<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> patternIndex <span class="token operator">===</span> pattern<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>patternIndex <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> pattern<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> pattern<span class="token punctuation">[</span>patternIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">'*'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>sIndex <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>sIndex<span class="token punctuation">]</span> <span class="token operator">===</span> pattern<span class="token punctuation">[</span>patternIndex<span class="token punctuation">]</span> <span class="token operator">||</span> pattern<span class="token punctuation">[</span>patternIndex<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">'.'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">matchStr</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> pattern<span class="token punctuation">,</span> sIndex<span class="token punctuation">,</span> patternIndex <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">||</span>
            <span class="token function">matchStr</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> pattern<span class="token punctuation">,</span> sIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> patternIndex <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">||</span>
            <span class="token function">matchStr</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> pattern<span class="token punctuation">,</span> sIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> patternIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">matchStr</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> pattern<span class="token punctuation">,</span> sIndex<span class="token punctuation">,</span> patternIndex <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>sIndex <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>sIndex<span class="token punctuation">]</span> <span class="token operator">===</span> pattern<span class="token punctuation">[</span>patternIndex<span class="token punctuation">]</span> <span class="token operator">||</span> pattern<span class="token punctuation">[</span>patternIndex<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">'.'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">matchStr</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> pattern<span class="token punctuation">,</span> sIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> patternIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="考察点" tabindex="-1"><a class="header-anchor" href="#考察点" aria-hidden="true">#</a> 考察点</h2>
<ul>
<li>字符串</li>
<li>正则表达式</li>
<li>考虑问题的全面性</li>
<li>程序的完整性</li>
</ul>
</template>
