<template><p>递归是一种解决问题的有效方法，在递归过程中，函数将自身作为子例程调用。</p>
<p><img src="https://i.loli.net/2019/08/19/fJgzFyM6WvXGOi7.png" alt=""></p>
<p>你可能想知道如何实现调用自身的函数。诀窍在于，每当递归函数调用自身时，它都会将给定的问题拆解为子问题。递归调用继续进行，直到到子问题无需进一步递归就可以解决的地步。</p>
<p>为了确保递归函数不会导致无限循环，它应具有以下属性：</p>
<ul>
<li>一个简单的基本案例 —— 能够不使用递归来产生答案的终止方案。</li>
<li>一组规则，也称作递推关系，可将所有其他情况拆分到基本案例。</li>
</ul>
<h3 id="重复计算" tabindex="-1"><a class="header-anchor" href="#重复计算" aria-hidden="true">#</a> 重复计算</h3>
<p>一些问题使用递归考虑，思路是非常清晰的，但是却不推荐使用递归，例如下面的几个问题：</p>
<ul>
<li><a href="https://cloudsay.github.io/personalBlog/algorithm/%E9%80%92%E5%BD%92%E5%92%8C%E5%BE%AA%E7%8E%AF/%E6%96%90%E6%B3%A2%E6%8B%89%E5%A5%91%E6%95%B0%E5%88%97.html" target="_blank" rel="noopener noreferrer">斐波拉契数列<ExternalLinkIcon/></a></li>
<li><a href="https://cloudsay.github.io/personalBlog/algorithm/%E9%80%92%E5%BD%92%E5%92%8C%E5%BE%AA%E7%8E%AF/%E8%B7%B3%E5%8F%B0%E9%98%B6.html" target="_blank" rel="noopener noreferrer">跳台阶<ExternalLinkIcon/></a></li>
<li><a href="https://cloudsay.github.io/personalBlog/algorithm/%E9%80%92%E5%BD%92%E5%92%8C%E5%BE%AA%E7%8E%AF/%E7%9F%A9%E5%BD%A2%E8%A6%86%E7%9B%96.html" target="_blank" rel="noopener noreferrer">矩形覆盖<ExternalLinkIcon/></a></li>
</ul>
<p>这几个问题使用递归都有一个共同的缺点，那就是包含大量的重复计算，如果递归层次比较深的话，直接会导致JS进程崩溃。</p>
<p><img src="https://i.loli.net/2019/08/19/fA3okFVIMlxS1Q6.jpg" alt=""></p>
<p>你可以使用<code>记忆化</code>的方法来避免重复计算，即开辟一个额外空间来存储已经计算过的值，但是这样又会浪费一定的内存空间。因此上面的问题一般会使用动态规划求解。</p>
<blockquote>
<p>所以，在使用递归之前，一定要判断代码是否含有重复计算，如果有的话，不推荐使用递归。</p>
</blockquote>
<p>递归是一种思想，而非一个类型，很多经典算法都是以递归为基础，因此这里就不再给出更多问题。</p>
</template>
