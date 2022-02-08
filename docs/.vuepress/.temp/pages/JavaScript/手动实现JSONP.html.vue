<template><ul>
<li>1.将传入的data数据转化为url字符串形式</li>
<li>2.处理url中的回调函数</li>
<li>3.创建一个script标签并插入到页面中</li>
<li>4.挂载回调函数</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">window<span class="token punctuation">,</span>document</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token string">"use strict"</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> <span class="token function-variable function">jsonp</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span>data<span class="token punctuation">,</span>callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">// 1.将传入的data数据转化为url字符串形式</span>
        <span class="token comment">// {id:1,name:'jack'} => id=1&amp;name=jack</span>
        <span class="token keyword">var</span> dataString <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">indexof</span><span class="token punctuation">(</span><span class="token string">'?'</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token operator">?</span> <span class="token string">'?'</span><span class="token operator">:</span> <span class="token string">'&amp;'</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> data<span class="token punctuation">)</span><span class="token punctuation">{</span>
            dataString <span class="token operator">+=</span> key <span class="token operator">+</span> <span class="token string">'='</span> <span class="token operator">+</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">'&amp;'</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token comment">// 2 处理url中的回调函数</span>
        <span class="token comment">// cbFuncName回调函数的名字 ：my_json_cb_名字的前缀 + 随机数（把小数点去掉）</span>
        <span class="token keyword">var</span> cbFuncName <span class="token operator">=</span> <span class="token string">'my_json_cb_'</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">'.'</span><span class="token punctuation">,</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dataString <span class="token operator">+=</span> <span class="token string">'callback='</span> <span class="token operator">+</span> cbFuncName<span class="token punctuation">;</span>

        <span class="token comment">// 3.创建一个script标签并插入到页面中</span>
        <span class="token keyword">var</span> scriptEle <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'script'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        scriptEle<span class="token punctuation">.</span>src <span class="token operator">=</span> url <span class="token operator">+</span> dataString<span class="token punctuation">;</span>

        <span class="token comment">// 4.挂载回调函数</span>
        window<span class="token punctuation">[</span>cbFuncName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">callback</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 处理完回调函数的数据之后，删除jsonp的script标签</span>
            document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>scriptEle<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>scriptEle<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    window<span class="token punctuation">.</span>$jsonp <span class="token operator">=</span> jsonp<span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span>document<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div></template>
