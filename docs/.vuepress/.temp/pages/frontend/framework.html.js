export const data = {
  "key": "v-69fd1fc2",
  "path": "/frontend/framework.html",
  "title": "框架通识",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "MVVM",
      "slug": "mvvm",
      "children": [
        {
          "level": 3,
          "title": "脏数据检测",
          "slug": "脏数据检测",
          "children": []
        },
        {
          "level": 3,
          "title": "数据劫持",
          "slug": "数据劫持",
          "children": []
        },
        {
          "level": 3,
          "title": "Proxy 与 Object.defineProperty 对比",
          "slug": "proxy-与-object-defineproperty-对比",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "路由原理",
      "slug": "路由原理",
      "children": []
    },
    {
      "level": 2,
      "title": "Virtual Dom",
      "slug": "virtual-dom",
      "children": [
        {
          "level": 3,
          "title": "为什么需要 Virtual Dom",
          "slug": "为什么需要-virtual-dom",
          "children": []
        },
        {
          "level": 3,
          "title": "Virtual Dom 算法简述",
          "slug": "virtual-dom-算法简述",
          "children": []
        },
        {
          "level": 3,
          "title": "Virtual Dom 算法实现",
          "slug": "virtual-dom-算法实现",
          "children": []
        },
        {
          "level": 3,
          "title": "最后",
          "slug": "最后",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1595848154000,
    "contributors": [
      {
        "name": "yunfei.huang",
        "email": "yunfei.huang@aliyun.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "frontend/framework.md"
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
