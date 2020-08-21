// Resume content
import accountImg from './images/account_all.jpg'
import creatorImg from './images/creator_all.jpg'

const Bio = {
  name: 'ZBL',
  gender: 'female',
  age: 25,
  apply: '前端开发工程师',
  experience: '三年',
  base: 'Beijing',
  email: 'i@zhangbinliu.me',
  blog: 'http://zhangbinliu.me'
  // biopic: 'http://zhangbinliu.me/content/images/avatar_zbl.jpg',
  // display: () => {},
}

const Skills = {
  skills: [
    '**三年**大型网站跨终端 Web (PC / Mobile / Hybrid App) 产品前端开发和维护经验',
    '熟悉 **HTML / CSS / JavaScript**，能够脱离各 JS 类库后进行**跨浏览器**开发',
    '熟悉模块化、前端编译和构建工具，熟练运用 React / Redux / Webpack 等相关框架技术, 构建**单页面应用**',
    '喜欢研究 Web 性能，热衷**前端工程化**, 在理解前端开发流程的基础上，结合实际创造提升工作效率的工具',
    '关注 Web 发展，**喜欢探索新信息**，**乐于分享**，并实践新技术来服务业务和团队'
  ]
}

const SocialMedia = {
  blog: 'http://zhangbinliu.me/',
  github: '@cool4zbl',
  twitter: '@cool4zbl',
  douban: '郫县豆瓣'
}

const Education = {
  schools: [
    {
      id: 1,
      type: 'college',
      name: '电子科技大学',
      location: '成都',
      degree: '本科',
      majors: ['电子信息工程'],
      more: 'GPA: 3.6',
      dates: '2011 - 2015',
      url: 'http://www.uestc.edu.cn/'
    }
  ],
  display: () => {}
}

const Work = {
  jobs: [
    {
      employer: '蚂蚁金服',
      url: 'https://antfin.com',
      title: '高级前端工程师',
      location: 'Beijing',
      dates: '2018.01 - 至今',
      responsibilities: ['蚂蚁全域 AB 实验平台的开发与维护']
    },
    {
      employer: '美团',
      url: 'https://meituan.com',
      title: '高级前端工程师',
      location: 'Beijing',
      dates: '2017.10 - 2018.01',
      responsibilities: ['美团地图 - 数据平台开发与维护']
    },
    {
      employer: '豆瓣',
      url: 'https://douban.com',
      title: '前端工程师',
      location: 'Beijing',
      dates: '2015.07 - 2017.09',
      responsibilities: [
        '负责全站移动端帐号系统开发与维护',
        '负责全站创作者社区项目 Web & Mobile 端页面开发与维护',
        '参与全站 Web 条目长评 / 社区 / 书影音项目 / 移动端页面日常页面开发与维护'
      ]
    }
  ],
  display: () => {}
}

// SAR
// 项目背景上下文（场景、问题）
// 你在其中的角色（职责、发挥的作用、结果度量）
// 与此项经历有关的知识与技能（技术栈）
const Projects = {
  projects: [
    {
      id: 0,
      type: 'company', // business
      title: 'Map-Gaia 地图基础数据平台',
      dates: '2017.09 - 2018.01',
      description:
        '负责开发的地图基础数据平台（Web），包括地图相关数据生产、管理、发布，及查看 / 编辑地图 POI 数据等功能。',
      highlights: [
        '使用 `Vue` + `Vuex` + `Element-UI` 实现地图基础数据平台 SPA Web 端基本业务逻辑；',
        '实现地图**数据可视化**：使用 `Leaflet` 实现地图底图及 POI 数据展示功能，使用 `iD` 编辑器二次开发，实现地图编辑功能；',
        '技术栈： `Vue` + `Vuex` + `Leaflet` + `iD`'
      ],
      url: 'javascript:;'
    },
    {
      id: 1,
      type: 'company', // business
      title: 'Creator 创作者社区',
      dates: '2017.05 - 2017.09',
      description:
        '负责开发的创作者社区平台（Web + Mobile + Hybrid），包括创作者作品申请、作品管理后台及创作者作品展示功能。',
      highlights: [
        '使用 `React` + `Redux` 开发的Web + Mobile + Hybrid **多端SPA**，通过 Ajax 与后端进行所有数据通信；',
        '使用`Redux` + `normalizr` + `Immutable.js` 作**状态管理**，实现复杂的页面交互；',
        '技术栈： `React` + `React-Router` + `Redux` + `Webpack`'
      ],
      image: { path: creatorImg, height: '50vh', size: 'cover' },
      url: 'https://www.douban.com/verify/apply/'
    },
    {
      id: 2,
      type: 'company', // business
      title: 'Account 帐号系统 ',
      dates: '2015.12 - 2017.09',
      description:
        '负责开发的全站帐号系统移动端（Mobile + Hybrid），包括注册、找回密码、绑定 / 解绑用户帐号和第三方帐号登录功能。',
      highlights: [
        '使用 `React` 开发的 Mobile + Hybrid 端 **SPA**， 统一了豆瓣多个 APP 平台（豆瓣、豆瓣阅读、豆瓣FM、豆瓣电影）的帐号系统，且多版本、多系统（iOS / Android）兼容；',
        '使用 `Webpack` `code-splitting` 技术使各个功能的页面代码**按需加载**，页面打开时间减少了 20%，提高了用户体验；',
        '模块化开发组件且加入**单元测试**，降低线上出错概率的同时提高了开发效率',
        '使用 `jscodeshift` & `js-codemod` & `react-codemod` 将所有代码从 ES5 迁移到 ES6',
        '技术栈：`React` + `React-Router` + `Webpack` + `Mocha` + `Chai` + `Enzyme` + `Sinon`'
      ],
      image: { path: accountImg, height: '40vh' },
      url: ['https://accounts.douban.com/app/register#/']
    },
    {
      id: 3,
      type: 'company', // business
      title: 'Zerkalo 书影音条目长评',
      dates: '2016.04 - 2016.08',
      description:
        '负责开发的传统 PC 页面重构，应用新设计重构豆瓣全站 Web 端条目，包括书影音、游戏、舞台剧等所有条目的长评页面，并加入长评赞赏新功能。',
      highlights: [
        '**三个月重构项目**，整合之前分散在五个大型项目中的长评 `Mako`模板代码，按页面模块布局拆分并基本重写了样式文件；',
        '将之前超两千行的主站 `douban.js` 按功能模块拆分，使用 Vanilla JavaScript 重构需要的功能代码并`Webpack` 打包加载，提升页面的性能，方便调试和维护；',
        '交互上把所有传统表单提交操作改为 Ajax 与后端通信，提升用户体验，并解决了多个项目不同域名下的 **CORS 跨域**问题；',
        '技术栈：`Mako` + `SCSS` + `ES6` + `Webpack`'
      ],
      url: ['https://movie.douban.com/review/8004640/']
    },
    {
      id: 4,
      type: 'company', // business
      title: 'Talion 豆瓣手机版',
      dates: '2015.12 - Present',
      description: '参与开发的移动版的豆瓣，具备 PC Web 有的基本功能',
      highlights: [
        '对整个移动端进行了 **SEO** 和分享至微信的优化，给整站带来更多的流量及给用户更好的分享效果；',
        '应用模块化、组件化思想开发传统移动端页面，广泛使用 `ES6 template literals` + `Fetch API` + `SCSS`，根据设计稿开发对应组件， 方便复用和快速生成页面，提高开发效率；',
        '一些页面的 view 层通过自己编写 Python 调接口实现',
        '技术栈：`Mako` + `SCSS` + `ES6` + `Python`'
      ],
      url: ['https://m.douban.com']
    },
    {
      id: 5,
      type: 'company', // business
      title: 'SNS 社区',
      dates: '2015.12 - Present',
      description:
        '参与的大型传统 Web 项目开发，即豆瓣 Web 主站，包括广播、日记和用户主页等',
      highlights: [
        '使用`jQuery` 编写转播对话框插件，开发了 Web 广播转播功能，同时对历史遗留代码进行了重构',
        '在传统 Web 项目应用组件化思想，使用 `Mako` 编写模板，重构旧项目页面的同时，编写各种 Mako 模块函数，达到跨项目复用，例如对全站的 `UserCard` 的 HTML & CSS & JS 做了封装，可以跨项目被社区 / 条目等项目复用，提升开发效率',
        '技术栈：`Mako` + `SCSS` + `jQuery` + `ES6`'
      ],
      url: ['https://www.douban.com/']
    },
    {
      id: 6,
      type: 'openSource',
      title: '每日鸡血 Inspiring Me',
      dates: '2017.07',
      description:
        '一个带来每日正能量的页面，展示随机生成的鼓舞人心的图片和名人名言；',
      highlights: [
        '技术栈： `React` + `styled-component` + `Webpack` + `Unsplash API`'
      ],
      url: ['http://zhangbinliu.me/inspiring-me'],
      code: 'https://github.com/cool4zbl/inspiring-me'
    },
    {
      id: 7,
      type: 'openSource',
      title: 're-Resume',
      dates: '2017.08',
      description: '一个排版良好，具有设计感的响应式简历模板生成器；',
      highlights: [
        '原子化组件，简洁、简单，支持高度自定义；',
        '技术栈： `React` + `styled-component` + `Typography` + `Webpack`'
      ],
      url: ['http://zhangbinliu.me/resume'],
      code: 'https://github.com/cool4zbl/resume'
    },
    {
      id: 8,
      type: 'openSource',
      title: 'Zed-sync',
      dates: '2017.03',
      description:
        '一个自动监听本地文件修改并同步至开发服务器环境的命令行小工具',
      highlights: [
        '使用 `unirest` 的 `delete` API 开发了监听本地文件被删除并同步至服务器的功能，优化了与服务器端通信发生问题时的错误处理',
        '技术栈：`Node`'
      ],
      url: ['https://www.npmjs.com/package/zed-sync'],
      code: 'https://www.npmjs.com/package/zed-sync'
    },
    {
      id: 9,
      type: 'openSource',
      title: 'Ghost-render',
      dates: '2017.06',
      description: '一个使用 Ghost 及其默认主题 Casper 的静态博客生成器 ',
      highlights: [
        '对生成博客文章链接格式进行了优化，并修复一些小 Bug',
        '技术栈：`Node`'
      ],
      url: ['https://github.com/cool4zbl/ghost-render'],
      code: 'https://github.com/cool4zbl/ghost-render'
    }
  ],
  display: () => {}
}

const Articles = {
  articles: [
    {
      id: 1,
      title: '[译] Uber 高性能 Web App 优化实践',
      desc:
        'Uber 工程师对 m.uber 性能实践，范围全面，从代码到打包到部署到线上缓存，都有涉及。',
      url: 'http://zhangbinliu.me/2017-07-10-m-uber-performance-optimazation/'
    },
    {
      id: 2,
      title: 'Fun with Codemod & AST',
      desc: '介绍大型项目代码库迁移工具 `Codemod` 及其理论基础 AST',
      url: 'http://zhangbinliu.me/2017-02-15-fun-with-codemod-and-ast/'
    },
    {
      id: 3,
      title: '移动环境下的 SEO',
      desc: '介绍 SEO 基础及如何利用各种工具对移动站点进行 SEO 优化',
      url: 'http://zhangbinliu.me/2016-05-20-seo-in-mobile/'
    }
  ]
}

/*
 * __proto__, the true me.
 */
const Prototype = {
  hobbies: [
    '终身学习者，对世界保持一颗好奇心',
    '工具控 / 效率控 / Vimer',
    '具有审美设计能力，痴迷一切优美的设计',
    '业余喜欢阅读 / 拍照 / 音乐 / 健身',
    '人生理想：Neat.'
  ],
  quotes: ['Fake it till you make it.', 'God helps one who help themselves'],
  display: () => {}
}

const Thanks = {
  thanks:
    '我珍惜每一次锻炼的机会，非常期待能与您共事。感谢您的宝贵时间，祝工作顺利。',
  display: () => {}
}

const Me = {
  Bio,
  Skills,
  Work,
  Projects,
  Articles,
  Education,
  Prototype,
  SocialMedia,
  Thanks
}

export default Me
