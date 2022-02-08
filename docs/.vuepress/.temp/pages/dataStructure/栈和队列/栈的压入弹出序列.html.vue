<template><h2 id="栈的压入、弹出序列" tabindex="-1"><a class="header-anchor" href="#栈的压入、弹出序列" aria-hidden="true">#</a> 栈的压入、弹出序列</h2>
<p>输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如序列<code>1,2,3,4,5</code>是某栈的压入顺序，序列<code>4,5,3,2,1</code>是该压栈序列对应的一个弹出序列，但<code>4,3,5,1,2</code>就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<p>1.借助一个辅助栈来模拟压入、弹出的过程。</p>
<p>2.设置一个索引<code>idx</code>，记录<code>popV</code>（出栈序列）栈顶的位置</p>
<p>3.将<code>pushV</code>（压入顺序）中的数据依次入栈。</p>
<p>4.当辅助栈栈顶元素和压<code>popV</code>栈顶元素相同时，辅助栈出栈。每次出栈索引<code>idx</code>+1。</p>
<p>5.出栈有可能在任意一次入栈后进行，当辅助栈栈顶元素和压<code>popV</code>栈顶元素相同时，继续让<code>pushV</code>入辅助栈。</p>
<p>6.当所有数据入栈完成，如果出栈顺序正确，那么辅助栈应该为空。</p>
<img :src="$withBase('/栈的压入弹出序列.png')" alt="foo">
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">IsPopOrder</span><span class="token punctuation">(</span><span class="token parameter">pushV<span class="token punctuation">,</span> popV</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pushV <span class="token operator">||</span> <span class="token operator">!</span>popV <span class="token operator">||</span> pushV<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> popV<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">var</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> idx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> pushV<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>pushV<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> popV<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          idx<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> stack<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></template>
