module.exports = {
  base: "/personalBlog/",
  title: "cloudSay",
  description: "personal blog",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  // theme: 'vuepress-theme-simple',
  themeConfig: {
    logo: "/assets/img/logo.png",
    navbar: [
      { text: "首页", link: "/" },
      { text: "小程序", link: "/mp/" },
      {
        text: "面试",
        children: [
          { text: "前端相关", link: "/frontend/" },
          { text: "计算机基础知识相关", link: "/computerLiteracy/" },
        ],
      },
      { text: "数据结构分类", link: "/dataStructure/" },
      { text: "算法分类", link: "/algorithm/" },
      { text: "JavaScript", link: "/JavaScript/" },
      // { text: '博客', link: 'http://www.conardli.top/blog/article/' },
      // { text: 'github', link: 'https://github.com/ConardLi' },
      { text: "学习", link: "/Career/" },
    ],
    sidebarDepth: 3,
    // displayAllHeaders: true, // 默认值：false
    sidebar: {
      "/frontend/": [
        {
          text: "前端", // 必要的
          children: [
            "",
            "browser",
            "performance",
            "safety",
            "framework",
            "vue",
            "react",
          ],
        },
      ],
      "/computerLiteracy/": [
        {
          text: "计算机通识", // 必要的
          children: ["", "dataStruct", "algorithm", "git"],
        },
      ],
      "/mp/": [""],
      "/Career/": [""],
      "/JavaScript/": [
        "/JavaScript/README.md",
        "/JavaScript/手动实现call、apply、bind.md",
        "/JavaScript/EventEmitter.md",
        "/JavaScript/防抖.md",
        "/JavaScript/节流.md",
        "/JavaScript/浅拷贝和深拷贝.md",
        "/JavaScript/数组去重、扁平、最值.md",
        "/JavaScript/数组乱序-洗牌算法.md",
        "/JavaScript/函数柯里化.md",
        "/JavaScript/手动实现JSONP.md",
        "/JavaScript/模拟实现promise.md",
        "/JavaScript/手动实现ES5继承.md",
        "/JavaScript/手动实现instanceof.md",
        "/JavaScript/基于Promise的ajax封装.md",
        "/JavaScript/单例模式.md",
        "/JavaScript/异步循环打印.md",
        "/JavaScript/图片懒加载.md",
      ],
      "/algorithm/": [
        "/algorithm/",
        {
          text: "查找",
          children: [
            "/algorithm/查找/查找.md",
            "/algorithm/查找/二维数组查找.md",
            "/algorithm/查找/旋转数组的最小数字.md",
            "/algorithm/查找/在排序数组中查找数字.md",
          ],
        },
        {
          text: "DFS和BFS",
          children: ["/algorithm/DFS和BFS/DFS和BFS.md"],
        },
        {
          text: "递归和循环",
          children: [
            "/algorithm/递归和循环/递归.md",
            "/algorithm/递归和循环/斐波拉契数列.md",
            "/algorithm/递归和循环/跳台阶.md",
            "/algorithm/递归和循环/变态跳台阶.md",
            "/algorithm/递归和循环/矩形覆盖.md",
          ],
        },
        {
          text: "分治",
          children: ["/algorithm/分治/数组中的逆序对.md"],
        },
        {
          text: "回溯算法",
          children: [
            "/algorithm/回溯算法/回溯算法.md",
            "/algorithm/回溯算法/二叉树中和为某一值的路径.md",
            "/algorithm/回溯算法/字符串的排列.md",
            "/algorithm/回溯算法/和为sum的n个数.md",
            "/algorithm/回溯算法/矩阵中的路径.md",
            "/algorithm/回溯算法/机器人的运动范围.md",
            "/algorithm/回溯算法/N皇后问题.md",
            "/algorithm/回溯算法/N皇后问题2.md",
          ],
        },
        {
          text: "排序",
          children: [
            "/algorithm/排序/复杂度.md",
            "/algorithm/排序/排序.md",
            "/algorithm/排序/插入排序.md",
            "/algorithm/排序/堆排序.md",
            "/algorithm/排序/归并排序.md",
            "/algorithm/排序/快速排序.md",
            "/algorithm/排序/冒泡排序.md",
            "/algorithm/排序/选择排序.md",
          ],
        },
        {
          text: "数学运算",
          children: [
            "/algorithm/数学运算/1+2+3+...+n.md",
            "/algorithm/数学运算/不用加减乘除做加法.md",
            "/algorithm/数学运算/丑数.md",
            "/algorithm/数学运算/二进制中1的个数.md",
            "/algorithm/数学运算/数值的整数次方.md",
            "/algorithm/数学运算/数组中只出现一次的数字.md",
            "/algorithm/数学运算/整数中1出现的次数.md",
            "/algorithm/数学运算/字符串转换成整数.md",
          ],
        },
        {
          text: "动态规划",
          children: [
            "/algorithm/动态规划/动态规划.md",
            "/algorithm/动态规划/最小路径和.md",
            "/algorithm/动态规划/打家劫舍.md",
          ],
        },
        {
          text: "贪心算法",
          children: [
            "/algorithm/贪心算法/贪心算法.md",
            "/algorithm/贪心算法/分发饼干.md",
          ],
        },
      ],
      "/dataStructure/": [
        "/dataStructure/",
        {
          text: "二叉树",
          children: [
            "/dataStructure/二叉树/二叉树.md",
            "/dataStructure/二叉树/二叉树的基本操作.md",
            "/dataStructure/二叉树/二叉树的中序遍历.md",
            "/dataStructure/二叉树/二叉树的前序遍历.md",
            "/dataStructure/二叉树/二叉树的后序遍历.md",
            "/dataStructure/二叉树/重建二叉树.md",
            "/dataStructure/二叉树/对称的二叉树.md",
            "/dataStructure/二叉树/二叉树的镜像.md",
            "/dataStructure/二叉树/二叉搜索树的第k个节点.md",
            "/dataStructure/二叉树/二叉搜索树的后序遍历.md",
            "/dataStructure/二叉树/二叉树的最大深度.md",
            "/dataStructure/二叉树/二叉树的最小深度.md",
            "/dataStructure/二叉树/平衡二叉树.md",
            "/dataStructure/二叉树/二叉树中和为某一值的路径.md",
            "/dataStructure/二叉树/二叉搜索树与双向链表.md",
            "/dataStructure/二叉树/序列化二叉树.md",
            "/dataStructure/二叉树/二叉树的下一个节点.md",
            "/dataStructure/二叉树/树的子结构.md",
          ],
        },
        {
          text: "链表",
          children: [
            "/dataStructure/链表/链表.md",
            "/dataStructure/链表/从尾到头打印链表.md",
            "/dataStructure/链表/反转链表.md",
            "/dataStructure/链表/复杂链表的复制.md",
            "/dataStructure/链表/合并两个排序的链表.md",
            "/dataStructure/链表/链表倒数第k个节点.md",
            "/dataStructure/链表/链表中环的入口节点.md",
            "/dataStructure/链表/两个链表的第一个公共节点.md",
            "/dataStructure/链表/圈圈中最后剩下的数字.md",
            "/dataStructure/链表/删除链表中的节点or重复的节点.md",
          ],
        },
        {
          text: "数组",
          children: [
            "/dataStructure/数组/数组.md",
            "/dataStructure/数组/把数组排成最小的数.md",
            "/dataStructure/数组/第一个只出现一次的字符.md",
            "/dataStructure/数组/调整数组顺序使奇数位于偶数前面.md",
            "/dataStructure/数组/构建乘积数组.md",
            "/dataStructure/数组/和为S的连续正整数序列.md",
            "/dataStructure/数组/和为S的两个数字.md",
            "/dataStructure/数组/连续子数组的最大和.md",
            "/dataStructure/数组/两数之和.md",
            "/dataStructure/数组/扑克牌顺子.md",
            "/dataStructure/数组/三数之和.md",
            "/dataStructure/数组/数组中出现次数超过数组长度一半的数字.md",
            "/dataStructure/数组/数组中的逆序对.md",
            "/dataStructure/数组/顺时针打印矩阵.md",
            "/dataStructure/数组/四数之和.md",
            "/dataStructure/数组/在排序数组中查找数字.md",
          ],
        },
        {
          text: "堆",
          children: [
            "/dataStructure/堆/堆.md",
            "/dataStructure/堆/堆的基本操作.md",
            "/dataStructure/堆/数据流中的中位数.md",
            "/dataStructure/堆/最小的k个数.md",
          ],
        },
        {
          text: "哈希表",
          children: ["/dataStructure/哈希表/哈希表.md"],
        },
        {
          text: "栈和队列",
          children: [
            "/dataStructure/栈和队列/栈和队列.md",
            "/dataStructure/栈和队列/包含min函数的栈.md",
            "/dataStructure/栈和队列/滑动窗口的最大值.md",
            "/dataStructure/栈和队列/用两个栈实现队列.md",
            "/dataStructure/栈和队列/栈的压入弹出序列.md",
          ],
        },
        {
          text: "字符串",
          children: [
            "/dataStructure/字符串/表示数值的字符串.md",
            "/dataStructure/字符串/替换空格.md",
            "/dataStructure/字符串/正则表达式匹配.md",
            "/dataStructure/字符串/字符串的排列.md",
            "/dataStructure/字符串/字符串翻转.md",
            "/dataStructure/字符串/字符流中第一个不重复的字符.md",
          ],
        },
      ],
    },
    smoothScroll: true,
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: "CloudSay/personalBlog",
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: "查看源码",
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: "CloudSay/personalBlog",
    // 假如文档不是放在仓库的根目录下：
    docsDir: "docs",
    // 假如文档放在一个特定的分支下：
    docsBranch: "master",
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: "帮助我们改善此页面！",
  },
};
