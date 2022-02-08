<template><h2 id="题目1-翻转单词顺序" tabindex="-1"><a class="header-anchor" href="#题目1-翻转单词顺序" aria-hidden="true">#</a> 题目1-翻转单词顺序</h2>
<p>输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。例如输入字符串<code>&quot;I am a student.&quot;</code>，则输出<code>&quot;student. a am I&quot;</code>。</p>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<p>直接调用数组<code>API</code>进行翻转，没啥好讲的。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ReverseSentence</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>str<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token string">''</span><span class="token punctuation">}</span>
    <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="题目2-左旋转字符串" tabindex="-1"><a class="header-anchor" href="#题目2-左旋转字符串" aria-hidden="true">#</a> 题目2-左旋转字符串</h2>
<p>字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如输入字符串<code>&quot;abcdefg&quot;</code>和数字<code>2</code>，该函数将返回左旋转2位得到的结果<code>&quot;cdefgab&quot;</code>。</p>
<h2 id="代码-1" tabindex="-1"><a class="header-anchor" href="#代码-1" aria-hidden="true">#</a> 代码</h2>
<p>将两个<code>str</code>进行拼接，直接从第<code>n</code>位开始截取，就相当于将前面<code>n</code>个数字移到末尾。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">LeftRotateString</span><span class="token punctuation">(</span><span class="token parameter">str<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>str<span class="token operator">&amp;&amp;</span>n<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token keyword">return</span> <span class="token punctuation">(</span>str<span class="token operator">+</span>str<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span>str<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">''</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="剑指offer中的思路" tabindex="-1"><a class="header-anchor" href="#剑指offer中的思路" aria-hidden="true">#</a> 剑指offer中的思路</h2>
<p>上面两个问题都可以用简单的方法解决，《剑指offer》中的解法稍微有些复杂，我不推荐用，但是思路可以参考下：</p>
<h3 id="翻转单词顺序" tabindex="-1"><a class="header-anchor" href="#翻转单词顺序" aria-hidden="true">#</a> 翻转单词顺序：</h3>
<ul>
<li>
<p>第一步将整个字符串翻转，<code>&quot;I am a student.&quot;</code> -&gt; <code>&quot;.tneduts a ma I&quot;</code></p>
</li>
<li>
<p>第二步将字符串内的单个字符串进行翻转：<code>&quot;.tneduts a ma I&quot;</code> -&gt; <code>&quot;student. a am I&quot;</code></p>
</li>
</ul>
<h3 id="左旋转字符串" tabindex="-1"><a class="header-anchor" href="#左旋转字符串" aria-hidden="true">#</a> 左旋转字符串：</h3>
<p>以<code>&quot;abcdefg&quot;</code>为例，将字符串分为两部分<code>ab</code>和<code>cdefg</code></p>
<p>将两部分分别进行翻转，得到 -&gt; <code>&quot;bagfedc&quot;</code></p>
<p>再将整个字符串进行翻转，得到 -&gt;  <code>&quot;cdefgab&quot;</code></p>
</template>
