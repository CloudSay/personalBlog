export const data = {
  "key": "v-28623235",
  "path": "/frontend/browser.html",
  "title": "浏览器",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "事件机制",
      "slug": "事件机制",
      "children": [
        {
          "level": 3,
          "title": "事件触发三阶段",
          "slug": "事件触发三阶段",
          "children": []
        },
        {
          "level": 3,
          "title": "注册事件",
          "slug": "注册事件",
          "children": []
        },
        {
          "level": 3,
          "title": "事件代理",
          "slug": "事件代理",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "跨域",
      "slug": "跨域",
      "children": [
        {
          "level": 3,
          "title": "JSONP",
          "slug": "jsonp",
          "children": []
        },
        {
          "level": 3,
          "title": "CORS",
          "slug": "cors",
          "children": []
        },
        {
          "level": 3,
          "title": "document.domain",
          "slug": "document-domain",
          "children": []
        },
        {
          "level": 3,
          "title": "postMessage",
          "slug": "postmessage",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Event loop",
      "slug": "event-loop",
      "children": [
        {
          "level": 3,
          "title": "Node 中的 Event loop",
          "slug": "node-中的-event-loop",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "存储",
      "slug": "存储",
      "children": [
        {
          "level": 3,
          "title": "cookie，localStorage，sessionStorage，indexDB",
          "slug": "cookie-localstorage-sessionstorage-indexdb",
          "children": []
        },
        {
          "level": 3,
          "title": "Service Worker",
          "slug": "service-worker",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "渲染机制",
      "slug": "渲染机制",
      "children": [
        {
          "level": 3,
          "title": "Load 和 DOMContentLoaded 区别",
          "slug": "load-和-domcontentloaded-区别",
          "children": []
        },
        {
          "level": 3,
          "title": "图层",
          "slug": "图层",
          "children": []
        },
        {
          "level": 3,
          "title": "重绘（Repaint）和回流（Reflow）",
          "slug": "重绘-repaint-和回流-reflow",
          "children": []
        },
        {
          "level": 3,
          "title": "减少重绘和回流",
          "slug": "减少重绘和回流",
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
  "filePathRelative": "frontend/browser.md"
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
