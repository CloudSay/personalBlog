module.exports = {
  title: 'cloudSay',
  description: 'personal blog',
  base:'/personalBlog/',
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '小程序', link: '/mp/mp-ch' },
      { text: 'GIT', link: '/git/git-zh' },
      { text: 'js', link: '/js/js-ch' },
      { text: 'Algorithm', link: '/Algorithm/Algorithm-ch' },
      { text: 'Browser', link: '/Browser/Browser-ch' },
      { text: 'Career', link: '/Career/How-to-use-your-time-correctly' },
      { text: 'DataStruct', link: '/DataStruct/DataStruct-zh' },
      { text: 'Framework', link: '/Framework/Framework-zh' },
      { text: 'Network', link: '/Network/Network-zh' },
      { text: 'Performance', link: '/Performance/Performance-ch' },
      { text: 'Safety', link: '/Safety/Safety-cn' },
    ],
    sidebarDepth: 0, 
    displayAllHeaders: true, // 默认值：false
    sidebar: 'auto'
  }
}