<template><h3 id="广度优先搜索" tabindex="-1"><a class="header-anchor" href="#广度优先搜索" aria-hidden="true">#</a> 广度优先搜索</h3>
<p>广度优先搜索（<code>BFS</code>）是一种遍历或搜索数据结构（如树或图）的算法，也可以在更抽象的场景中使用。</p>
<p>它的特点是越是接近根结点的结点将越早地遍历。</p>
<p>例如，我们可以使用 <code>BFS</code> 找到从起始结点到目标结点的路径，特别是最短路径。</p>
<p>在<code>BFS</code>中，结点的处理顺序与它们添加到队列的顺序是完全相同的顺序，即先进先出，所以广度优先搜索一般使用队列实现。</p>
<ul>
<li><a href="https://cloudsay.github.io/personalBlog/dataStructure/%E4%BA%8C%E5%8F%89%E6%A0%91/%E4%BB%8E%E4%B8%8A%E5%88%B0%E4%B8%8B%E6%89%93%E5%8D%B0%E4%BA%8C%E5%8F%89%E6%A0%91.html" target="_blank" rel="noopener noreferrer">从上到下打印二叉树<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/word-ladder/" target="_blank" rel="noopener noreferrer">单词接龙<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/employee-importance/" target="_blank" rel="noopener noreferrer">员工的重要性<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/number-of-islands/" target="_blank" rel="noopener noreferrer">岛屿数量<ExternalLinkIcon/></a></li>
</ul>
<h3 id="深度优先搜索" tabindex="-1"><a class="header-anchor" href="#深度优先搜索" aria-hidden="true">#</a> 深度优先搜索</h3>
<p>和广度优先搜索一样，深度优先搜索（<code>DFS</code>）是用于在树/图中遍历/搜索的一种重要算法。</p>
<p>与 <code>BFS</code> 不同，更早访问的结点可能不是更靠近根结点的结点。因此，你在<code>DFS</code> 中找到的第一条路径可能不是最短路径。</p>
<p><img src="https://i.loli.net/2019/08/19/uNAkPfLY9HRjVQU.png" alt=""></p>
<p>在<code>DFS</code>中，结点的处理顺序是完全相反的顺序，就像它们被添加到栈中一样，它是后进先出。所以深度优先搜索一般使用栈实现。</p>
<ul>
<li><a href="https://cloudsay.github.io/personalBlog/dataStructure/%E4%BA%8C%E5%8F%89%E6%A0%91/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E4%B8%AD%E5%BA%8F%E9%81%8D%E5%8E%86.html" target="_blank" rel="noopener noreferrer">二叉树的中序遍历<ExternalLinkIcon/></a></li>
<li><a href="https://cloudsay.github.io/personalBlog/dataStructure/%E4%BA%8C%E5%8F%89%E6%A0%91/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%A4%A7%E6%B7%B1%E5%BA%A6.html" target="_blank" rel="noopener noreferrer">二叉树的最大深度<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/path-sum/" target="_blank" rel="noopener noreferrer">路径总和<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/course-schedule/" target="_blank" rel="noopener noreferrer">课程表<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/number-of-islands/" target="_blank" rel="noopener noreferrer">岛屿数量<ExternalLinkIcon/></a></li>
</ul>
</template>
