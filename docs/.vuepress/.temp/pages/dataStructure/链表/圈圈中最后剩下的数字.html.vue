<template><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p><code>0,1,...,n-1</code>这<code>n</code>个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第<code>m</code>个数字。求出这个圆圈里剩下的最后一个数字。</p>
<p>其实这就是著名的约瑟夫环问题，下面是这个问题产生的背景，一个有趣的故事：</p>
<blockquote>
<p>据说著名犹太历史学家 Josephus有过以下的故事：在罗马人占领乔塔帕特后，39 个犹太人与Josephus及他的朋友躲到一个洞中，39个犹太人决定宁愿死也不要被敌人抓到，于是决定了一个自杀方式，41个人排成一个圆圈，由第1个人开始报数，每报数到第3人该人就必须自杀，然后再由下一个重新报数，直到所有人都自杀身亡为止。然而Josephus 和他的朋友并不想遵从。首先从一个人开始，越过k-2个人（因为第一个人已经被越过），并杀掉第k个人。接着，再越过k-1个人，并杀掉第k个人。这个过程沿着圆圈一直进行，直到最终只剩下一个人留下，这个人就可以继续活着。问题是，给定了和，一开始要站在什么地方才能避免被处决？Josephus要他的朋友先假装遵从，他将朋友与自己安排在第16个与第31个位置，于是逃过了这场死亡游戏。</p>
</blockquote>
<img :src="$withBase('/yuesefu.jpg')" alt="foo">
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<p><strong>解法1:用链表模拟环</strong></p>
<ul>
<li>
<p>用链表模拟一个环</p>
</li>
<li>
<p>模拟游戏场景</p>
</li>
<li>
<p>记录头节点的前一个节点<code>current</code>，以保证我们找到的要删除的节点是<code>current.next</code></p>
</li>
<li>
<p>每次循环m次找到目标节点删除，直到链表只剩下一个节点</p>
</li>
<li>
<p>时间复杂度<code>O(m*n)</code> 空间复杂度<code>O(n)</code></p>
</li>
</ul>
<p><strong>解法2:用数组模拟</strong></p>
<ul>
<li>每次计算下标，需要考虑末尾条件</li>
</ul>
<p><strong>解法3:数学推导</strong></p>
<ul>
<li><code>f(n) = (f(n-1)+m)%n</code> 即  <code>f(n,m) = (f(n-1,m)+m)%n</code></li>
<li>使用递归求解 边界条件为 <code>n=1</code></li>
</ul>
<p>时间复杂度 <code>1&gt;2&gt;3</code></p>
<p>易理解程度 <code>1&gt;2&gt;3</code></p>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">// 解法1</span>
    <span class="token keyword">function</span> <span class="token function">LastRemaining_Solution</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> m</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token operator">||</span> m <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> head <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>
      <span class="token keyword">let</span> current <span class="token operator">=</span> head<span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        current<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">val</span><span class="token operator">:</span> i <span class="token punctuation">}</span>
        current <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      current<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>

      <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>next <span class="token operator">!=</span> current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          current <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        current<span class="token punctuation">.</span>next <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> current<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">// 解法2</span>
    <span class="token keyword">function</span> <span class="token function">LastRemaining_Solution</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> m</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token operator">||</span> m <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>array<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        index <span class="token operator">=</span> <span class="token punctuation">(</span>index <span class="token operator">+</span> m<span class="token punctuation">)</span> <span class="token operator">%</span> array<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          array<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          array<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>array<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">// 解法3</span>
    <span class="token keyword">function</span> <span class="token function">LastRemaining_Solution</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> m</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token operator">||</span> m <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">joseoh</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> m<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">joseoh</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> m</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token function">joseoh</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> m<span class="token punctuation">)</span> <span class="token operator">+</span> m<span class="token punctuation">)</span> <span class="token operator">%</span> n<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></template>
