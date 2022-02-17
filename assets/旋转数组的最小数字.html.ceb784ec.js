import{c as n}from"./app.4ee60a11.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},p=n(`<h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u628A\u4E00\u4E2A\u6570\u7EC4\u6700\u5F00\u59CB\u7684\u82E5\u5E72\u4E2A\u5143\u7D20\u642C\u5230\u6570\u7EC4\u7684\u672B\u5C3E\uFF0C\u6211\u4EEC\u79F0\u4E4B\u4E3A\u6570\u7EC4\u7684\u65CB\u8F6C\u3002 \u8F93\u5165\u4E00\u4E2A\u975E\u51CF\u6392\u5E8F\u7684\u6570\u7EC4\u7684\u4E00\u4E2A\u65CB\u8F6C\uFF0C\u8F93\u51FA\u65CB\u8F6C\u6570\u7EC4\u7684\u6700\u5C0F\u5143\u7D20\u3002 \u4F8B\u5982\u6570\u7EC4<code>{3,4,5,1,2}</code>\u4E3A<code>{1,2,3,4,5}</code>\u7684\u4E00\u4E2A\u65CB\u8F6C\uFF0C\u8BE5\u6570\u7EC4\u7684\u6700\u5C0F\u503C\u4E3A1\u3002</p><blockquote><p>NOTE\uFF1A\u7ED9\u51FA\u7684\u6240\u6709\u5143\u7D20\u90FD\u5927\u4E8E0\uFF0C\u82E5\u6570\u7EC4\u5927\u5C0F\u4E3A0\uFF0C\u8BF7\u8FD4\u56DE0\u3002</p></blockquote><h2 id="\u57FA\u672C\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u601D\u8DEF" aria-hidden="true">#</a> \u57FA\u672C\u601D\u8DEF</h2><p>\u80AF\u5B9A\u4E0D\u80FD\u76F4\u63A5\u904D\u5386\uFF0C\u5931\u53BB\u4E86\u8FD9\u9053\u9898\u7684\u610F\u4E49</p><p>\u65CB\u8F6C\u6570\u7EC4\u5176\u5B9E\u662F\u7531\u4E24\u4E2A\u6709\u5E8F\u6570\u7EC4\u62FC\u63A5\u800C\u6210\u7684\uFF0C\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u4E8C\u5206\u6CD5\uFF0C\u53EA\u9700\u8981\u627E\u5230\u62FC\u63A5\u70B9\u5373\u53EF\u3002</p><p>(1)<code>array[mid] &gt; array[high]</code>:</p><p>\u51FA\u73B0\u8FD9\u79CD\u60C5\u51B5\u7684<code>array</code>\u7C7B\u4F3C<code>[3,4,5,6,0,1,2]</code>\uFF0C\u6B64\u65F6\u6700\u5C0F\u6570\u5B57\u4E00\u5B9A\u5728mid\u7684\u53F3\u8FB9\u3002 <code>low = mid + 1</code></p><p>(2)<code>array[mid] == array[high]</code>:</p><p>\u51FA\u73B0\u8FD9\u79CD\u60C5\u51B5\u7684<code>array</code>\u7C7B\u4F3C <code>[1,0,1,1,1] </code>\u6216\u8005<code>[1,1,1,0,1]</code>\uFF0C\u6B64\u65F6\u6700\u5C0F\u6570\u5B57\u4E0D\u597D\u5224\u65AD\u5728mid\u5DE6\u8FB9 \u8FD8\u662F\u53F3\u8FB9,\u8FD9\u65F6\u53EA\u597D\u4E00\u4E2A\u4E00\u4E2A\u8BD5 \u3002 <code>high = high - 1</code></p><p>(3)<code>array[mid] &lt; array[high]</code>:</p><p>\u51FA\u73B0\u8FD9\u79CD\u60C5\u51B5\u7684<code>array</code>\u7C7B\u4F3C<code>[2,2,3,4,5,6,6]</code>,\u6B64\u65F6\u6700\u5C0F\u6570\u5B57\u4E00\u5B9A\u5C31\u662F<code>array[mid]</code>\u6216\u8005\u5728<code>mid</code>\u7684\u5DE6 \u8FB9\u3002\u56E0\u4E3A\u53F3\u8FB9\u5FC5\u7136\u90FD\u662F\u9012\u589E\u7684\u3002 <code>high = mid</code></p><h2 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">minNumberInRotateArray</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">let</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>len <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> low <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> high <span class="token operator">=</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>low <span class="token operator">&lt;</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> mid <span class="token operator">=</span> low <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>high<span class="token operator">-</span>low<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>high<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            low <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> arr<span class="token punctuation">[</span>high<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            high <span class="token operator">=</span> high <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            high <span class="token operator">=</span> mid<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">return</span> arr<span class="token punctuation">[</span>low<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55" aria-hidden="true">#</a> \u6269\u5C55</h2><p>\u4E8C\u5206\u67E5\u627E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>        <span class="token keyword">function</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> arr<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">&gt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">var</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>end <span class="token operator">+</span> start<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">==</span> arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> mid<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> arr<span class="token punctuation">,</span> start<span class="token punctuation">,</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> arr<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="\u8003\u5BDF\u70B9" tabindex="-1"><a class="header-anchor" href="#\u8003\u5BDF\u70B9" aria-hidden="true">#</a> \u8003\u5BDF\u70B9</h2><ul><li>\u67E5\u627E</li><li>\u6570\u7EC4</li></ul>`,19);function t(e,o){return p}var l=a(s,[["render",t]]);export{l as default};
