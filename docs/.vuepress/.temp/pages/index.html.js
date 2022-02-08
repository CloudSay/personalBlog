export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "./assets/img/logo.png",
    "actionText": "开始阅读 →",
    "actionLink": "/dataStructure/",
    "features": [
      {
        "title": "小程序专题aa啊啊",
        "details": "小程序登录、图片导出、工程化及持续集成。"
      },
      {
        "title": "面试-前端相关",
        "details": "基础知识梳理。"
      },
      {
        "title": "面试-计算机基础知识相关",
        "details": "基础知识大纲。"
      },
      {
        "title": "数据结构专题",
        "details": "常见数据结构（二叉树、数组、堆、栈）的基本使用以及典型题目分析。"
      },
      {
        "title": "算法专题",
        "details": "常见算法解题指南和典型算法的JavaScript实现。"
      },
      {
        "title": "JavaScript专题",
        "details": "常见JavaScript项目应用中的技巧，如节流防抖等。"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2019-present cloundSay"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1644301930000,
    "contributors": [
      {
        "name": "yunfei.huang",
        "email": "yunfei.huang@aliyun.com",
        "commits": 4
      },
      {
        "name": "黄飞鸿",
        "email": "v.huangyf@yoozoo.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
