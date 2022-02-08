<template><h2 id="观察者模式" tabindex="-1"><a class="header-anchor" href="#观察者模式" aria-hidden="true">#</a> 观察者模式</h2>
<p><img src="http://img.blog.csdn.net/20161126191512446" alt="image"></p>
<p>这就类似我们在微信平台订阅了公众号 , 当它有新的文章发表后，就会推送给我们所有订阅的人。</p>
<p>我们作为订阅者不必每次都去查看这个公众号有没有新文章发布，公众号作为发布者会在合适时间通知我们。</p>
<p>我们与公众号之间不再强耦合在一起。公众号不关心谁订阅了它， 不管你是男是女还是宠物狗，它只需要定时向所有订阅者发布消息即可。</p>
<h3 id="观察者模式的优点" tabindex="-1"><a class="header-anchor" href="#观察者模式的优点" aria-hidden="true">#</a> 观察者模式的优点</h3>
<ul>
<li>可以广泛应用于异步编程，它可以代替我们传统的回调函数</li>
<li>我们不需要关注对象在异步执行阶段的内部状态，我们只关心事件完成的时间点</li>
<li>取代对象之间硬编码通知机制，一个对象不必显式调用另一个对象的接口，而是松耦合的联系在一起 。</li>
</ul>
<p>虽然不知道彼此的细节，但不影响相互通信。更重要的是，其中一个对象改变不会影响另一个对象。</p>
<h2 id="nodejs的eventemitter" tabindex="-1"><a class="header-anchor" href="#nodejs的eventemitter" aria-hidden="true">#</a> Nodejs的EventEmitter</h2>
<p><code>Nodejs</code>的<code>EventEmitter</code>就是观察者模式的典型实现，<code>Nodejs</code>的<code>events</code>模块只提供了一个对象： <code>events.EventEmitter``。EventEmitter</code> 的核心就是事件触发与事件监听器功能的封装。</p>
<blockquote>
<p>Node.js 里面的许多对象都会分发事件：一个 net.Server 对象会在每次有新连接时触发一个事件， 一个 fs.readStream 对象会在文件被打开的时候触发一个事件。 所有这些产生事件的对象都是 events.EventEmitter 的实例。</p>
</blockquote>
<h3 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> Api</h3>
<p><strong>addListener(event, listener)</strong></p>
<p>为指定事件添加一个监听器，默认添加到监听器数组的尾部。</p>
<p><strong>removeListener(event, listener)</strong></p>
<p>移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。它接受两个参数，第一个是事件名称，第二个是回调函数名称。</p>
<p><strong>setMaxListeners(n)</strong></p>
<p>默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于提高监听器的默认限制的数量。</p>
<p><strong>once(event, listener)</strong></p>
<p>为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。</p>
<p><strong>emit(event, [arg1], [arg2], [...])</strong></p>
<p>按监听器的顺序执行执行每个监听器，如果事件有注册监听返回 <code>true</code>，否则返回 <code>false</code>。</p>
<h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> events <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'events'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> eventEmitter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">events<span class="token punctuation">.</span>EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 监听器 #1</span>
<span class="token keyword">var</span> <span class="token function-variable function">listener1</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">listener1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'监听器 listener1 执行。'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 监听器 #2</span>
<span class="token keyword">var</span> <span class="token function-variable function">listener2</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">listener2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'监听器 listener2 执行。'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 绑定 connection 事件，处理函数为 listener1 </span>
eventEmitter<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">'connection'</span><span class="token punctuation">,</span> listener1<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 绑定 connection 事件，调用一次，处理函数为 listener2</span>
eventEmitter<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">'connection'</span><span class="token punctuation">,</span> listener2<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 处理 connection 事件 </span>
eventEmitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'connection'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 处理 connection 事件 </span>
eventEmitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'connection'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="手动实现eventemitter" tabindex="-1"><a class="header-anchor" href="#手动实现eventemitter" aria-hidden="true">#</a> 手动实现EventEmitter</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>_maxListeners <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>_events <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 向事件队列添加事件</span>
    <span class="token comment">// prepend为true表示向事件队列头部添加事件</span>
    <span class="token class-name">EventEmitter</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">addListener</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> listener<span class="token punctuation">,</span> prepend</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>_events<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_events <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_events<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>prepend<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>_events<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>_events<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_events<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>listener<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 移除某个事件</span>
    <span class="token class-name">EventEmitter</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">removeListener</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> listener</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_events<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>listener<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">delete</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_events<span class="token punctuation">[</span>type<span class="token punctuation">]</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>_events<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_events<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=></span> e <span class="token operator">!==</span> listener <span class="token operator">&amp;&amp;</span> e<span class="token punctuation">.</span>origin <span class="token operator">!==</span> listener<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 向事件队列添加事件，只执行一次</span>
    <span class="token class-name">EventEmitter</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">once</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> listener</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token function-variable function">only</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">listener</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">removeListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> listener<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      only<span class="token punctuation">.</span>origin <span class="token operator">=</span> listener<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> only<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 执行某类事件</span>
    <span class="token class-name">EventEmitter</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">emit</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_events<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_events<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fn</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 设置最大事件监听个数</span>
    <span class="token class-name">EventEmitter</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">setMaxListeners</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">count</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>maxListeners <span class="token operator">=</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><p>测试代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">var</span> emitter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">var</span> <span class="token function-variable function">onceListener</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我只能被执行一次'</span><span class="token punctuation">,</span> args<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> <span class="token function-variable function">listener</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我是一个listener'</span><span class="token punctuation">,</span> args<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    emitter<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> onceListener<span class="token punctuation">)</span><span class="token punctuation">;</span>
    emitter<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> listener<span class="token punctuation">)</span><span class="token punctuation">;</span>

    emitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token string">'参数'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    emitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    emitter<span class="token punctuation">.</span><span class="token function">removeListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> listener<span class="token punctuation">)</span><span class="token punctuation">;</span>
    emitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="javascript自定义事件" tabindex="-1"><a class="header-anchor" href="#javascript自定义事件" aria-hidden="true">#</a> JavaScript自定义事件</h2>
<p><code>DOM</code>也提供了类似上面<code>EventEmitter</code>的<code>API</code>，基本使用：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//1、创建事件</span>
<span class="token keyword">var</span> myEvent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Event</span><span class="token punctuation">(</span><span class="token string">"myEvent"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//2、注册事件监听器</span>
elem<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"myEvent"</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//3、触发事件</span>
elem<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span>myEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></template>
