<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>求出<code>1~13</code>的整数中1出现的次数,并算出<code>100~1300</code>的整数中<code>1</code>出现的次数？</p>
<p>为此他特别数了一下<code>1~13</code>中包含1的数字有<code>1、10、11、12、13</code>因此共出现6次,但是对于后面问题他就没辙了。</p>
<p><code>ACMer</code>希望你们帮帮他,并把问题更加普遍化,可以很快的求出任意非负整数区间中<code>1</code>出现的次数（从<code>1 </code>到<code>n</code>中<code>1</code>出现的次数）。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<blockquote>
<p>注意：11算出现了两个1</p>
</blockquote>
<p>分别计算数字中每个位置可能出现1的情况，相加。</p>
<p>将数字分为两部分： 当前数字为1，其后面数字可能出现的情况<code>low</code>，当前数字为1，其前面数字可能出现的情况<code>high</code>，所有情况为<code>low * high</code>种情况。</p>
<p>例如，在分析数字<code>8103</code>时：</p>
<ul>
<li>
<p>个位 <code>3</code>: 个位已经是最低位了，所以<code>low</code>只有<code>1</code>中情况。<code>high</code>可以取<code>0 - 810</code>共<code>811</code>种情况，所有情况为<code>1 * 811 = 811</code>种情况。</p>
</li>
<li>
<p>十位 <code>0</code>: <code>low</code>可能为<code>10 - 19</code>共<code>10</code>种情况，<code>high</code>可以取<code>0 - 80</code>共<code>81</code>种情况，所有情况为<code>81 * 10 = 810</code>种情况。</p>
</li>
<li>
<p>百位 <code>1</code>: <code>low</code>可能为<code>100 - 199</code>共<code>100</code>种情况，<code>high</code>可以取<code>0 - 7</code>共<code>8</code>种情况;当<code>high</code>取<code>8</code>时，<code>low</code>还可以取<code>100 - 104</code>，所有情况为<code>100 * 8 + 4 = 804</code>种情况。</p>
</li>
<li>
<p>千位 <code>8</code>:<code>low</code>可能为<code>1000 - 1999</code>共<code>1000</code>种情况，当前已经是最高位了，<code>high</code>只有一种情况，所有情况为<code>1000 * 1 = 1000</code>种情况。</p>
</li>
</ul>
<img :src="$withBase('/整数中1出现的次数.png')" alt="foo">
<p>由以上示例：分三种情况考虑，现有数字<code>abcde</code>，分析百位数字<code>c</code></p>
<ul>
<li><code>c = 0</code> : 有 <code>ab*100</code> 种情况</li>
<li><code>c = 1</code> : 有 <code>ab*100 + de + 1</code> 种情况</li>
<li><code>c &gt; 2</code> : 有 <code>(ab+1) * 100</code> 种情况</li>
</ul>
<p><code>c</code>是<code>abcde</code>第<code>3</code>位数：</p>
<p>当前的量级：<code>level = 10</code>的<code>(3-1)</code>次方</p>
<ul>
<li><code>ab = abcde / (level*10)</code></li>
<li><code>c = (abcde / (level)) % 10</code></li>
<li><code>de = abcde % level</code></li>
</ul>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">NumberOf1Between1AndN_Solution</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> high <span class="token operator">=</span> low <span class="token operator">=</span> current <span class="token operator">=</span> level <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> length <span class="token operator">=</span> n<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        level <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//第i位数位于什么量级 1 10 100 ...</span>
        high <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token punctuation">(</span>level <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        low <span class="token operator">=</span> n <span class="token operator">%</span> level<span class="token punctuation">;</span>
        current <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>n <span class="token operator">/</span> level<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          count <span class="token operator">+=</span> <span class="token punctuation">(</span>high <span class="token operator">*</span> level<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          count <span class="token operator">+=</span> <span class="token punctuation">(</span>high <span class="token operator">*</span> level <span class="token operator">+</span> low <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          count <span class="token operator">+=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>high <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> level<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        i<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></template>
