import{_ as a,o as s,c as e,a as t}from"./app-a7fYW3Qz.js";const p={};function c(i,n){return s(),e("div",null,[...n[0]||(n[0]=[t(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目"><span>题目</span></a></h2><p>输入一个链表，按链表值从尾到头的顺序返回一个<code>ArrayList</code>。</p><h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析"><span>分析</span></a></h2><p>要了解链表的数据结构：</p><p><code>val</code>属性存储当前的值，<code>next</code>属性存储下一个节点的引用。</p><p>要遍历链表就是不断找到当前节点的<code>next</code>节点，当<code>next</code>节点是<code>null</code>时，说明是最后一个节点，停止遍历。</p><p>因为是从尾到头的顺序，使用一个队列来存储打印结果，每次从队列头部插入。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码"><span>代码</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/</span>
<span class="token keyword">function</span> <span class="token function">printListFromTailToHead</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">{</span>
        array<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> array<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="考察点" tabindex="-1"><a class="header-anchor" href="#考察点"><span>考察点</span></a></h2><ul><li>链表</li></ul>`,11)])])}const l=a(p,[["render",c],["__file","从尾到头打印链表.html.vue"]]);export{l as default};
