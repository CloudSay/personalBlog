module.exports = {
  base:'/personalBlog/',
  title: 'cloudSay',
  description: 'personal blog',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  // theme: 'vuepress-theme-simple',
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '小程序', link: '/mp/' },
      {
        text: '面试',
        items: [
          { text: '前端相关', link: '/frontend/' },
          { text: '计算机基础知识相关',link: '/computerLiteracy/' }
        ]
      },
      { text: '学习', link: '/Career/' }
    ],
    sidebarDepth: 3, 
    // displayAllHeaders: true, // 默认值：false
    sidebar: {
      '/frontend/': [
        {
          title: '前端',   // 必要的
          children: [
            '',    
            'browser',    
            'performance',    
            'safety',    
            'framework',    
            'vue',    
            'react',
          ]
        },    
      ],
      '/computerLiteracy/': [
        {
          title: '计算机通识',   // 必要的
          children: [
            '',    
            'dataStruct', 
            'algorithm',  
            'git'  
          ]
        }, 
      ],
      '/mp/': [
        '',
      ],
      '/Career/': [
        '', 
      ],
      // fallback
      '/': [
        '',        /* / */
      ]
    },
    smoothScroll: true,
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'CloudSay/personalBlog',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'CloudSay/personalBlog',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！'
  }
}