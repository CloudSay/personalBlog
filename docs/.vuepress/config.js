module.exports = {
  title: 'cloudSay',
  description: 'personal blog',
  base:'/personalBlog/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '小程序', link: '/mp/mp-ch' },
      { text: 'GIT', link: '/git/git-zh' },
      { text: 'js', link: '/js/js-ch' },
    ],
    sidebarDepth: 3, 
    displayAllHeaders: true, // 默认值：false
    // sidebar: 'auto'
  }
}