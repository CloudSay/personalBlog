import{o as p,a as t,b as n,F as e,d as s,c as o}from"./app.4ee60a11.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const l={},u=n("h2",{id:"\u5B9A\u4E49",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5B9A\u4E49","aria-hidden":"true"},"#"),s(" \u5B9A\u4E49")],-1),r=n("p",null,[s("\u8282\u6D41\uFF08"),n("code",null,"throttle"),s("\uFF09:\u4E0D\u7BA1\u4E8B\u4EF6\u89E6\u53D1\u9891\u7387\u591A\u9AD8\uFF0C\u53EA\u5728\u5355\u4F4D\u65F6\u95F4\u5185\u6267\u884C\u4E00\u6B21\u3002")],-1),i=["src"],k=o(`<h2 id="\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0" aria-hidden="true">#</a> \u5B9E\u73B0</h2><p>\u6709\u4E24\u79CD\u65B9\u5F0F\u53EF\u4EE5\u5B9E\u73B0\u8282\u6D41\uFF0C\u4F7F\u7528\u65F6\u95F4\u6233\u548C\u5B9A\u65F6\u5668\u3002</p><h3 id="\u65F6\u95F4\u6233\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u65F6\u95F4\u6233\u5B9E\u73B0" aria-hidden="true">#</a> \u65F6\u95F4\u6233\u5B9E\u73B0</h3><blockquote><p>\u7B2C\u4E00\u6B21\u4E8B\u4EF6\u80AF\u5B9A\u89E6\u53D1\uFF0C\u6700\u540E\u4E00\u6B21\u4E0D\u4F1A\u89E6\u53D1</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> pre <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> pre <span class="token operator">&gt;</span> time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          pre <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token function">event</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u5B9A\u65F6\u5668\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u65F6\u5668\u5B9E\u73B0" aria-hidden="true">#</a> \u5B9A\u65F6\u5668\u5B9E\u73B0</h3><blockquote><p>\u7B2C\u4E00\u6B21\u4E8B\u4EF6\u4E0D\u4F1A\u89E6\u53D1\uFF0C\u6700\u540E\u4E00\u6B21\u4E00\u5B9A\u89E6\u53D1</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token function">event</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u7ED3\u5408\u7248" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u5408\u7248" aria-hidden="true">#</a> \u7ED3\u5408\u7248</h3><blockquote><p>\u5B9A\u65F6\u5668\u548C\u65F6\u95F4\u6233\u7684\u7ED3\u5408\u7248\uFF0C\u4E5F\u76F8\u5F53\u4E8E\u8282\u6D41\u548C\u9632\u6296\u7684\u7ED3\u5408\u7248\uFF0C\u7B2C\u4E00\u6B21\u548C\u6700\u540E\u4E00\u6B21\u90FD\u4F1A\u89E6\u53D1</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> pre <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> pre <span class="token operator">&gt;</span> time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
          timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
          pre <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token function">event</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">event</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,11);function b(a,d){return p(),t(e,null,[u,r,n("img",{src:a.$withBase("/\u8282\u6D41\u9632\u6296.gif"),alt:"foo"},null,8,i),k],64)}var f=c(l,[["render",b]]);export{f as default};
