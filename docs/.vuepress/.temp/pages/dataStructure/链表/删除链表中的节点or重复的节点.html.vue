<template><h2 id="删除链表中的节点" tabindex="-1"><a class="header-anchor" href="#删除链表中的节点" aria-hidden="true">#</a> 删除链表中的节点</h2>
<p>给定单链表的头指针和要删除的指针节点，在O(1)时间内删除该节点。</p>
<ul>
<li>1.删除的节点不是尾部节点 - 将next节点覆盖当前节点</li>
<li>2.删除的节点是尾部节点且等于头节点，只剩一个节点 - 将头节点置为null</li>
<li>3.删除的节点是尾节点且前面还有节点 - 遍历到末尾的前一个节点删除</li>
</ul>
<p>只有第三种情况时间复杂度是O(n)，且这种情况只会出现1/n次，所以算法时间复杂度是O(1)</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">var</span> <span class="token function-variable function">deleteNode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node<span class="token punctuation">.</span>val <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
        node<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">===</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        head <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        node <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          node <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        node<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        node <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> node<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="删除链表中重复的节点" tabindex="-1"><a class="header-anchor" href="#删除链表中重复的节点" aria-hidden="true">#</a> 删除链表中重复的节点</h2>
<h3 id="方法1-存储链表中元素出现的次数" tabindex="-1"><a class="header-anchor" href="#方法1-存储链表中元素出现的次数" aria-hidden="true">#</a> 方法1.存储链表中元素出现的次数</h3>
<ul>
<li>1.用一个map存储每个节点出现的次数</li>
<li>2.删除出现次数大于1的节点</li>
</ul>
<p>此方法删除节点时可以使用上面总结的办法。</p>
<p>时间复杂度：O(n)</p>
<p>空间复杂度：O(n)</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">deleteDuplication</span><span class="token punctuation">(</span><span class="token parameter">pHead</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>pHead <span class="token operator">&amp;&amp;</span> pHead<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> current <span class="token operator">=</span> pHead<span class="token punctuation">;</span>
        <span class="token comment">// 计数</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> val <span class="token operator">=</span> map<span class="token punctuation">[</span>current<span class="token punctuation">.</span>val<span class="token punctuation">]</span><span class="token punctuation">;</span>
          map<span class="token punctuation">[</span>current<span class="token punctuation">.</span>val<span class="token punctuation">]</span> <span class="token operator">=</span> val <span class="token operator">?</span> val <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
          current <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        current <span class="token operator">=</span> pHead<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> val <span class="token operator">=</span> map<span class="token punctuation">[</span>current<span class="token punctuation">.</span>val<span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 删除节点</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              current<span class="token punctuation">.</span>val <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
              current<span class="token punctuation">.</span>next <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">===</span> pHead<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              current <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
              pHead <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
              current <span class="token operator">=</span> pHead<span class="token punctuation">;</span>
              <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                current <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
              current<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
              current <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            current <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> pHead<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h3 id="方法2-重新比较连接数组" tabindex="-1"><a class="header-anchor" href="#方法2-重新比较连接数组" aria-hidden="true">#</a> 方法2.重新比较连接数组</h3>
<p>链表是排好顺序的，所以重复元素都会相邻出现
递归链表：</p>
<ul>
<li>1.当前节点或当前节点的next为空，返回该节点</li>
<li>2.当前节点是重复节点：找到后面第一个不重复的节点</li>
<li>3.当前节点不重复：将当前的节点的next赋值为下一个不重复的节点</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">deleteDuplication</span><span class="token punctuation">(</span><span class="token parameter">pHead</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pHead <span class="token operator">||</span> <span class="token operator">!</span>pHead<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> pHead<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>pHead<span class="token punctuation">.</span>val <span class="token operator">===</span> pHead<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> tempNode <span class="token operator">=</span> pHead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>tempNode <span class="token operator">&amp;&amp;</span> pHead<span class="token punctuation">.</span>val <span class="token operator">===</span> tempNode<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          tempNode <span class="token operator">=</span> tempNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token function">deleteDuplication</span><span class="token punctuation">(</span>tempNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        pHead<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">deleteDuplication</span><span class="token punctuation">(</span>pHead<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> pHead<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>时间复杂度：O(n)</p>
<p>空间复杂度：O(1)</p>
<h2 id="考察点" tabindex="-1"><a class="header-anchor" href="#考察点" aria-hidden="true">#</a> 考察点</h2>
<ul>
<li>链表</li>
<li>考虑问题的全面性</li>
</ul>
</template>
