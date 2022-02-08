export const data = {
  "key": "v-96dc9d7a",
  "path": "/frontend/safety.html",
  "title": "安全",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "XSS",
      "slug": "xss",
      "children": [
        {
          "level": 3,
          "title": "如何攻击",
          "slug": "如何攻击",
          "children": []
        },
        {
          "level": 3,
          "title": "如何防御",
          "slug": "如何防御",
          "children": []
        },
        {
          "level": 3,
          "title": "CSP",
          "slug": "csp",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "CSRF",
      "slug": "csrf",
      "children": [
        {
          "level": 3,
          "title": "如何攻击",
          "slug": "如何攻击-1",
          "children": []
        },
        {
          "level": 3,
          "title": "如何防御",
          "slug": "如何防御-1",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "密码安全",
      "slug": "密码安全",
      "children": [
        {
          "level": 3,
          "title": "加盐",
          "slug": "加盐",
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
  "filePathRelative": "frontend/safety.md"
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
