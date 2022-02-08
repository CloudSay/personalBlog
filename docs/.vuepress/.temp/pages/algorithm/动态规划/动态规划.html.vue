<template><p>动态规划往往是最能有效考察算法和设计能力的题目类型，面对这类题目最重要的是抓住问题的阶段，了解每个阶段的状态，从而分析阶段之间的关系转化。</p>
<p>适用于动态规划的问题，需要满足最优子结构和无后效性，动态规划的求解过程，在于找到状态转移方程，进行自底向上的求解。</p>
<p><img src="https://i.loli.net/2019/08/18/3roOnqlBDEP5RZN.jpg" alt=""></p>
<p>自底向上的求解，可以帮你省略大量的复杂计算，例如上面的斐波拉契数列，使用递归的话时间复杂度会呈指数型增长，而动态规划则让此算法的时间复杂度保持在<code>O(n)</code>。</p>
<h3 id="路径问题" tabindex="-1"><a class="header-anchor" href="#路径问题" aria-hidden="true">#</a> 路径问题</h3>
<ul>
<li><a href="https://leetcode-cn.com/problems/minimum-path-sum/" target="_blank" rel="noopener noreferrer">最小路径和<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/unique-paths/" target="_blank" rel="noopener noreferrer">不同路径<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/unique-paths-ii/" target="_blank" rel="noopener noreferrer">不同路径 II<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/shortest-way-to-form-string" target="_blank" rel="noopener noreferrer">形成字符串的最短路径<ExternalLinkIcon/></a></li>
</ul>
<h3 id="买卖股票类问题" tabindex="-1"><a class="header-anchor" href="#买卖股票类问题" aria-hidden="true">#</a> 买卖股票类问题</h3>
<ul>
<li><a href="https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock" target="_blank" rel="noopener noreferrer">买卖股票的最佳时机<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii" target="_blank" rel="noopener noreferrer">买卖股票的最佳时机 III<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/house-robber" target="_blank" rel="noopener noreferrer">打家劫舍<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/house-robber-ii/" target="_blank" rel="noopener noreferrer">打家劫舍 II<ExternalLinkIcon/></a></li>
</ul>
<h3 id="子序列问题" tabindex="-1"><a class="header-anchor" href="#子序列问题" aria-hidden="true">#</a> 子序列问题</h3>
<ul>
<li><a href="https://leetcode-cn.com/problems/distinct-subsequences" target="_blank" rel="noopener noreferrer">不同的子序列<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/maximum-product-subarray" target="_blank" rel="noopener noreferrer">乘积最大子序列<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/longest-increasing-subsequence" target="_blank" rel="noopener noreferrer">最长上升子序列<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/longest-palindromic-subsequence" target="_blank" rel="noopener noreferrer">最长回文子序列<ExternalLinkIcon/></a></li>
</ul>
</template>
