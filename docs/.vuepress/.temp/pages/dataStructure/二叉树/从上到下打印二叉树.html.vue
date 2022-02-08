<template><h2 id="题目1-不分行从上到下打印" tabindex="-1"><a class="header-anchor" href="#题目1-不分行从上到下打印" aria-hidden="true">#</a> 题目1-不分行从上到下打印</h2>
<p>从上往下打印出二叉树的每个节点，同层节点从左至右打印。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<ul>
<li>在打印第一行时，将左孩子节点和右孩子节点存入一个队列里</li>
<li>队列元素出队列打印，同时分别将左孩子节点和右孩子节点存入队列</li>
<li>这样打印二叉树的顺序就是没行从左到右打印</li>
</ul>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">PrintFromTopToBottom</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> current <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="题目2-把二叉树打印成多行" tabindex="-1"><a class="header-anchor" href="#题目2-把二叉树打印成多行" aria-hidden="true">#</a> 题目2-把二叉树打印成多行</h2>
<p>从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。</p>
<h2 id="思路-1" tabindex="-1"><a class="header-anchor" href="#思路-1" aria-hidden="true">#</a> 思路</h2>
<ul>
<li>使用一个队列存储当前层遍历的节点</li>
<li>使用两个变量来标记当前遍历的状态</li>
<li>currentNums：当前层剩余的节点数</li>
<li>childNums：孩子节点数</li>
<li>当前层遍历完成后开始遍历孩子节点，currentNums赋值为childNums，childNums赋值为0，</li>
</ul>
<h2 id="代码-1" tabindex="-1"><a class="header-anchor" href="#代码-1" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Print</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> tempArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> currentNums <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> childNums <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> current <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            childNums<span class="token operator">++</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
            childNums<span class="token operator">++</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          tempArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
          currentNums<span class="token operator">--</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>currentNums <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            currentNums <span class="token operator">=</span> childNums<span class="token punctuation">;</span>
            childNums <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tempArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
            tempArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="题目3-按之字形顺序打印二叉树" tabindex="-1"><a class="header-anchor" href="#题目3-按之字形顺序打印二叉树" aria-hidden="true">#</a> 题目3-按之字形顺序打印二叉树</h2>
<p>请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。</p>
<h2 id="思路-2" tabindex="-1"><a class="header-anchor" href="#思路-2" aria-hidden="true">#</a> 思路</h2>
<p>奇数从左到右，偶数从右到左</p>
<ul>
<li>若当前层为奇数层，从左到右打印，同时填充下一层，从右到左打印（先填充左孩子节点再填充右孩子节点）。</li>
<li>若当前层为偶数层，从右到左打印，同时填充下一层，从左到右打印（先填充右孩子节点再填充左孩子节点）。</li>
<li>不难发现，我们可以使用栈来作为存储结构。</li>
<li>分别设定一个奇数栈和一个偶数栈， 从将二叉树头部元素存入奇数栈开始。</li>
</ul>
<blockquote>
<p>这里同样可使用上面2题的两个变量来记录层数，只需要一个栈即可，但是代码不如两个栈容易理解。</p>
</blockquote>
<h2 id="代码-2" tabindex="-1"><a class="header-anchor" href="#代码-2" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Print</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> oddStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> evenStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        oddStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>oddStack<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">||</span> evenStack<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

          <span class="token keyword">while</span> <span class="token punctuation">(</span>oddStack<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> current <span class="token operator">=</span> oddStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              evenStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              evenStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>temp<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
            temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>

          <span class="token keyword">while</span> <span class="token punctuation">(</span>evenStack<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> current <span class="token operator">=</span> evenStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              oddStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              oddStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>temp<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
            temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h2 id="考察点" tabindex="-1"><a class="header-anchor" href="#考察点" aria-hidden="true">#</a> 考察点</h2>
<ul>
<li>二叉树</li>
<li>栈</li>
<li>队列</li>
</ul>
</template>
