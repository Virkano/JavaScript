const generate = require('./utils')
const stylusRandom = require('./stylus-random')

module.exports = {
  title: 'Javascript',
  description: '翻滚吧！后浪！',
  auto2top: true, //切换页面后是否自动跳转到页面顶部。
  base: '/JavaScript/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  themeConfig: {
    logo: '/cute-spear-monster.jpg',
    nav: [
      {
        text: 'Music',
        link: 'https://www.virkano.com/NetEasemusic/#/discovery',
      },
      { 
        text: 'JavaScript',
        link: '/JavaScript/',
      }

    ],
    sidebar: generate(),
    lastUpdated: 'Last Updated', // string | boolean
    
    repo: 'Virkano/JavaScript',
    // repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'Virkano/JavaScript',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    sidebarDepth: 3,
    serviceWorker: {
      updatePopup: {
        message: "网站有新的内容啦！",
        buttonText: "知道了"
      }
    }
  },
  markdown: {
    config: md => {
      md.set({ breaks: true })
      md.use(require('markdown-it-include'))
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  stylus: {
    use: [stylusRandom()]
  }
}