import{r as l,o as s,a as c,b as e,e as t,F as a,c as n,d as r}from"./app.4ee60a11.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const _={},h=n('<h3 id="\u5E7F\u5EA6\u4F18\u5148\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#\u5E7F\u5EA6\u4F18\u5148\u641C\u7D22" aria-hidden="true">#</a> \u5E7F\u5EA6\u4F18\u5148\u641C\u7D22</h3><p>\u5E7F\u5EA6\u4F18\u5148\u641C\u7D22\uFF08<code>BFS</code>\uFF09\u662F\u4E00\u79CD\u904D\u5386\u6216\u641C\u7D22\u6570\u636E\u7ED3\u6784\uFF08\u5982\u6811\u6216\u56FE\uFF09\u7684\u7B97\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u5728\u66F4\u62BD\u8C61\u7684\u573A\u666F\u4E2D\u4F7F\u7528\u3002</p><p>\u5B83\u7684\u7279\u70B9\u662F\u8D8A\u662F\u63A5\u8FD1\u6839\u7ED3\u70B9\u7684\u7ED3\u70B9\u5C06\u8D8A\u65E9\u5730\u904D\u5386\u3002</p><p>\u4F8B\u5982\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <code>BFS</code> \u627E\u5230\u4ECE\u8D77\u59CB\u7ED3\u70B9\u5230\u76EE\u6807\u7ED3\u70B9\u7684\u8DEF\u5F84\uFF0C\u7279\u522B\u662F\u6700\u77ED\u8DEF\u5F84\u3002</p><p>\u5728<code>BFS</code>\u4E2D\uFF0C\u7ED3\u70B9\u7684\u5904\u7406\u987A\u5E8F\u4E0E\u5B83\u4EEC\u6DFB\u52A0\u5230\u961F\u5217\u7684\u987A\u5E8F\u662F\u5B8C\u5168\u76F8\u540C\u7684\u987A\u5E8F\uFF0C\u5373\u5148\u8FDB\u5148\u51FA\uFF0C\u6240\u4EE5\u5E7F\u5EA6\u4F18\u5148\u641C\u7D22\u4E00\u822C\u4F7F\u7528\u961F\u5217\u5B9E\u73B0\u3002</p>',5),p={href:"https://cloudsay.github.io/personalBlog/dataStructure/%E4%BA%8C%E5%8F%89%E6%A0%91/%E4%BB%8E%E4%B8%8A%E5%88%B0%E4%B8%8B%E6%89%93%E5%8D%B0%E4%BA%8C%E5%8F%89%E6%A0%91.html",target:"_blank",rel:"noopener noreferrer"},i=r("\u4ECE\u4E0A\u5230\u4E0B\u6253\u5370\u4E8C\u53C9\u6811"),u={href:"https://leetcode-cn.com/problems/word-ladder/",target:"_blank",rel:"noopener noreferrer"},E=r("\u5355\u8BCD\u63A5\u9F99"),m={href:"https://leetcode-cn.com/problems/employee-importance/",target:"_blank",rel:"noopener noreferrer"},f=r("\u5458\u5DE5\u7684\u91CD\u8981\u6027"),B={href:"https://leetcode-cn.com/problems/number-of-islands/",target:"_blank",rel:"noopener noreferrer"},b=r("\u5C9B\u5C7F\u6570\u91CF"),A=n('<h3 id="\u6DF1\u5EA6\u4F18\u5148\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u5EA6\u4F18\u5148\u641C\u7D22" aria-hidden="true">#</a> \u6DF1\u5EA6\u4F18\u5148\u641C\u7D22</h3><p>\u548C\u5E7F\u5EA6\u4F18\u5148\u641C\u7D22\u4E00\u6837\uFF0C\u6DF1\u5EA6\u4F18\u5148\u641C\u7D22\uFF08<code>DFS</code>\uFF09\u662F\u7528\u4E8E\u5728\u6811/\u56FE\u4E2D\u904D\u5386/\u641C\u7D22\u7684\u4E00\u79CD\u91CD\u8981\u7B97\u6CD5\u3002</p><p>\u4E0E <code>BFS</code> \u4E0D\u540C\uFF0C\u66F4\u65E9\u8BBF\u95EE\u7684\u7ED3\u70B9\u53EF\u80FD\u4E0D\u662F\u66F4\u9760\u8FD1\u6839\u7ED3\u70B9\u7684\u7ED3\u70B9\u3002\u56E0\u6B64\uFF0C\u4F60\u5728<code>DFS</code> \u4E2D\u627E\u5230\u7684\u7B2C\u4E00\u6761\u8DEF\u5F84\u53EF\u80FD\u4E0D\u662F\u6700\u77ED\u8DEF\u5F84\u3002</p><p><img src="https://i.loli.net/2019/08/19/uNAkPfLY9HRjVQU.png" alt=""></p><p>\u5728<code>DFS</code>\u4E2D\uFF0C\u7ED3\u70B9\u7684\u5904\u7406\u987A\u5E8F\u662F\u5B8C\u5168\u76F8\u53CD\u7684\u987A\u5E8F\uFF0C\u5C31\u50CF\u5B83\u4EEC\u88AB\u6DFB\u52A0\u5230\u6808\u4E2D\u4E00\u6837\uFF0C\u5B83\u662F\u540E\u8FDB\u5148\u51FA\u3002\u6240\u4EE5\u6DF1\u5EA6\u4F18\u5148\u641C\u7D22\u4E00\u822C\u4F7F\u7528\u6808\u5B9E\u73B0\u3002</p>',5),g={href:"https://cloudsay.github.io/personalBlog/dataStructure/%E4%BA%8C%E5%8F%89%E6%A0%91/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E4%B8%AD%E5%BA%8F%E9%81%8D%E5%8E%86.html",target:"_blank",rel:"noopener noreferrer"},F=r("\u4E8C\u53C9\u6811\u7684\u4E2D\u5E8F\u904D\u5386"),k={href:"https://cloudsay.github.io/personalBlog/dataStructure/%E4%BA%8C%E5%8F%89%E6%A0%91/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%A4%A7%E6%B7%B1%E5%BA%A6.html",target:"_blank",rel:"noopener noreferrer"},S=r("\u4E8C\u53C9\u6811\u7684\u6700\u5927\u6DF1\u5EA6"),x={href:"https://leetcode-cn.com/problems/path-sum/",target:"_blank",rel:"noopener noreferrer"},C=r("\u8DEF\u5F84\u603B\u548C"),D={href:"https://leetcode-cn.com/problems/course-schedule/",target:"_blank",rel:"noopener noreferrer"},N=r("\u8BFE\u7A0B\u8868"),V={href:"https://leetcode-cn.com/problems/number-of-islands/",target:"_blank",rel:"noopener noreferrer"},y=r("\u5C9B\u5C7F\u6570\u91CF");function j(v,L){const o=l("ExternalLinkIcon");return s(),c(a,null,[h,e("ul",null,[e("li",null,[e("a",p,[i,t(o)])]),e("li",null,[e("a",u,[E,t(o)])]),e("li",null,[e("a",m,[f,t(o)])]),e("li",null,[e("a",B,[b,t(o)])])]),A,e("ul",null,[e("li",null,[e("a",g,[F,t(o)])]),e("li",null,[e("a",k,[S,t(o)])]),e("li",null,[e("a",x,[C,t(o)])]),e("li",null,[e("a",D,[N,t(o)])]),e("li",null,[e("a",V,[y,t(o)])])])],64)}var H=d(_,[["render",j]]);export{H as default};
