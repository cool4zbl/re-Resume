/* todo
 * Highlighting points
 */

const Bio = {
  name: '张滨浏',
  gender: '女',
  age: 24,
  apply: '前端开发工程师',
  experience: '两年',
  base: '北京',
  email: 'i@zhangbinliu.me',
  blog: 'http://zhangbinliu.me',
  // biopic: 'http://zhangbinliu.me/content/images/avatar_zbl.jpg',
  display: () => {},
}

const Skills = {
  skills: [
    '**两年**大型网站跨终端 Web (PC / Mobile / Native App WebView) 产品前端开发和维护经验',
    '熟悉 **JavaScript**, 能够脱离各 JS 类库后进行**跨浏览器**开发',
    '熟悉模块化、前端编译和构建工具，熟练运用 React / Redux / Webpack 等相关框架技术, 构建**单页面应用**',
    '喜欢研究 Web 性能，热衷**前端工程化**, 在理解前端开发流程的基础上，结合实际创造提升工作效率的工具',
    -'具有审美设计能力，关注用户体验',
    '关注 Web 发展，喜欢探索新信息，学习新技术服务团队和业务, 乐于分享',
  ],
}

const SocialMedia = {
  blog: 'http://zhangbinliu.me/',
  github: '@cool4zbl',
  twitter: '@cool4zbl',
  douban: '郫县豆瓣',
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
      url: 'http://www.uestc.edu.cn/',
    },
  ],
  display: () => {},
}

const Work = {
  jobs: [
    {
      employer: 'Douban',
      url: 'https://douban.com',
      title: '前端工程师',
      location: 'Beijing',
      dates: '2015 - Present',
      responsibilities: [
        '负责全站移动端帐号系统开发与维护',
        '负责全站创作者社区项目 Web & Mobile 端页面开发与维护',
        '负责全站 Web 条目长评项目页面开发与维护',
        '参与全站 Mobile 端页面开发与维护',
        '参与全站 Web 社区 / 书影音页面日常开发与维护',
        '参与全站前端工程化建设，前端组件库的维护',
      ],
    },
  ],
  display: () => {},
}

// SAR
// 项目背景上下文（场景、问题）
// 你在其中的角色（职责、发挥的作用、结果度量）
// 与此项经历有关的知识与技能（技术栈）
const Projects = {
  projects: [
    {
      id: 1,
      type: 'company', // business
      title: 'Account 帐号系统 ',
      dates: '2015.12 - Present',
      description:
        '整站帐号系统移动端，包含注册、找回密码、绑定/解绑手机号、绑定/解绑微信号、第三方帐号登录，Web 端 Popup 登录注册等功能',
      highlights: [
        '技术栈：`React` + `React-Router` + `Webpack` + `Mocha` + `Chai` + `Enzyme` + `Sinon`',
        '使用 `React` 编写基本组件，`React-Router` 按功能（注册、绑定、第三方登录等）路由切分页面, 做到无刷新单页面应用体验',
        '`Webpack` 打包编译所有源文件，并使用 `code-splitting` 技术使页面代码按需加载, 提高加载效率',
        '使用 `jscodeshift` & `js-codemod` & `react-codemod` 将所有代码从 ES5 迁移到 ES6',
        '使用 Hybrid JSBridge 进行 `WebView` 和 APP 通信',
        '根据检测 `userAgent` 来自动判断 App 平台及版本号，达到多平台（豆瓣、豆瓣阅读、豆瓣FM、豆瓣电影）+ 多版本 + 多设备系统（iOS / Android）兼容',
      ],
      images: ['https://accounts.douban.com/'],
      url: ['https://accounts.douban.com/app/register#/'],
    },
    {
      id: 2,
      type: 'company', // business
      title: 'Creator 创作者社区',
      dates: '2017.05 - Present',
      description: 'PC Web + Mobile 平台的整站创作者社区，包括创作者作品申请、作品管理后台及创作者作品展示',
      highlights: [
        '技术栈： `React` + `Redux` + `React-Router` + `Webpack` + `create-react-app`',
        '使用 `React` 从零编写项目需要的基本组件（如 Button / Input / Form 等），`React-Router` 路由切页面做到无刷新加载，Web + App + Mobile 多端单页应用',
        '`Webpack` 打包编译所有源文件，并使用 `code-splitting` 技术使页面代码按需加载',
        '使用 `Redux` + `normalizr` 作前端状态存储管理, 并实现复杂的页面交互',
      ],
      images: [''],
      url: [
        'https://www.douban.com/verify/apply/',
        'https://www.douban.com/verify/apply/work/#/myworks',
      ],
    },
    {
      id: 3,
      type: 'company', // business
      title: 'Zerkalo 书影音条目长评',
      dates: '2015.12 - Present',
      description: '应用新设计，重构豆瓣整站 Web 端条目长评页面，包含书影音、游戏、舞台剧等所有条目的长评，并加入长评赞赏新功能',
      highlights: [
        '技术栈：`Mako` + `SCSS` + `ES6` + `Webpack`',
        '三个月重构项目，整合之前分散在五个大型项目中的长评前端相关代码，并按页面布局模块拆分，基本重写了 CSS / SCSS 样式文件，更易维护',
        '`Webpack` 打包编译所有源文件，并使用 `code-splitting` 技术使页面代码按需加载',
        '将之前主站庞大的 `douban.js` 按模块拆分加载，使用 Vanilla JavaScript 重构，Webpack 打包，提升页面的性能，方便调试和维护',
        '解决了多个项目不同域名下的 CORS 跨域请求',
        '交互上， 把之前所有需刷新的操作（回复删除引用评论等），结合 JS 模板，从传统表单提交改为 Ajax 的方式与后端通信，提升用户体验',
      ],
      images: ['https://accounts.douban.com/'],
      url: ['https://movie.douban.com/review/8004640/'],
    },
    {
      id: 4,
      type: 'company', // business
      title: 'Talion 豆瓣手机版',
      dates: '2015.12 - Present',
      description: '移动版的豆瓣，具备 PC Web 有的基本功能',
      highlights: [
        '技术栈：`Mako` + `SCSS` + `ES6` + `Python`',
        '模块化、组件化思想, 根据设计师设计稿，使用 `ES6 template literals` + `fetch` + `scss`，结合后端 API，开发对应组件, 方便快速生成页面',
        '响应式开发，针对不同设备媒介查询适配',
        '给所有页面做了 SEO 优化，增加 `open graph` 等 `meta`标签',
        '利用 `weixin-JSSDK`，配置每个页面的 `title` `description` 及 `image-url`，针对微信 APP 聊天 / 朋友圈页面做了分享优化',
        '一些页面的 view 层通过自己编写 Python 调接口实现',
      ],
      images: ['https://accounts.douban.com/'],
      url: ['https://m.douban.com'],
    },
    {
      id: 5,
      type: 'company', // business
      title: 'SNS 社区',
      dates: '2015.12 - Present',
      description: '豆瓣 Web 主站，包含广播、日记、用户主页等',
      highlights: [
        '技术栈：`Mako` + `SCSS` + `jQuery` + `ES6`',
        '开发 Web 广播转播功能，使用 `ES6` + `jQuery` 编写转播对话框插件，同时对历史遗留 JS 代码进行重构',
        '模块化、组件化思想在传统 Web 项目的实现，使用 `Mako` 编写模板，重构旧项目页面的同时，编写各种 `def` blocks（ Mako 模块函数），达到跨项目复用，例如对全站的 `UserCard` 的 HTML + CSS + JS 做了封装，可以跨项目被 SNS 社区 / 条目等项目复用，提升开发效率',
      ],
      url: ['https://www.douban.com/'],
    },
    {
      id: 6,
      type: 'openSource',
      title: '100 Days',
      dates: '2017.06',
      description: '一个类似单向历的带图片的记录每日发生事情的日历 WebApp。',
      highlights: [
        '技术栈： `React` + `Redux` + `styled-component` + `ES6` + `Webpack`',
        '使用 Qiniu Cloud 对图片进行存储和优化，使用 async + createURLObj 加载',
        '传统大型项目 Web 开发, 模块化、组件化思想在传统 Web 项目的实现，使用 `Mako` 编写模板，重构旧项目页面的同时，编写各种 `def` blocks（ Mako 模块函数），达到跨项目复用，例如对全站的 `UserCard` 的 HTML + CSS + JS 做了封装，可以跨项目被 SNS 社区 / 条目等项目复用，提升开发效率',
      ],
      images: ['http://zhangbinliu.me'],
      url: ['zhangbinliu.me/2017-07-12-to-myhz'],
      code: ['github'],
    },
    {
      id: 7,
      type: 'openSource',
      title: 'Resume 个人简历',
      dates: '2017.07',
      description: '排版良好，具有设计感的简历生成模板。',
      highlights: [
        '技术栈： `React` + `styled-component` + `Webpack`',
        '开发 Web 广播转播功能，使用 `ES6` + `jQuery` 编写转播对话框插件，同时对历史遗留 JS 代码进行重构',
        '传统大型项目 Web 开发, 模块化、组件化思想在传统 Web 项目的实现，使用 `Mako` 编写模板，重构旧项目页面的同时，编写各种 `def` blocks（ Mako 模块函数），达到跨项目复用，例如对全站的 `UserCard` 的 HTML + CSS + JS 做了封装，可以跨项目被 SNS 社区 / 条目等项目复用，提升开发效率',
      ],
      images: ['http://zhangbinliu.me'],
      url: ['http://zhangbinliu.me'],
      code: 'https://github.com/cool4zbl/resume',
    },
    {
      id: 8,
      type: 'openSource',
      title: 'Zed-sync',
      dates: '2017.03',
      description: '一个自动监听本地文件修改并同步至开发服务器环境的命令行小工具',
      highlights: [
        '技术栈：`Node`',
        '使用 `unirest` 的 `delete` API 开发了监听本地文件被删除并同步至服务器的功能，优化了与服务器端通信发生问题时的错误处理',
      ],
      url: ['https://www.npmjs.com/package/zed-sync'],
      code: 'https://www.npmjs.com/package/zed-sync',
    },
    {
      id: 9,
      type: 'openSource',
      title: 'Ghost-render',
      dates: '2017.06',
      description: '一个使用 Ghost 及其默认主题 Casper 的静态博客生成器 ',
      highlights: ['技术栈：`Node`', '对生成博客文章链接格式进行了优化，并修复一些小 Bug'],
      url: ['https://github.com/mixu/ghost-render'],
      code: 'https://github.com/mixu/ghost-render',
    },
  ],
  display: () => {},
}

const Articles = {
  articles: [
    {
      id: 1,
      title: 'Fun with Codemod',
      url: 'http://zhangbinliu.me/2017-02-15-fun-with-codemod-and-ast/',
    },
    {
      id: 2,
      title: '移动环境下的 SEO',
      url: 'http://zhangbinliu.me/2016-05-20-seo-in-mobile/',
    },
    {
      id: 3,
      title: '翻译技术文',
      url: '',
    },
  ],
}

/*
 * __proto__, the true me.
 */
const Prototype = {
  hobbies: [
    '终身学习者',
    '痴迷一切引人入胜的优美设计',
    '工具控 / 效率控 / Vimer',
    '写一手好代码 / 拍一手好照片 / 烧一手好菜',
  ],
  quotes: ['Fake it till you make it.', 'God helps one who help themselves'],
  display: () => {},
}

const Thanks = {
  thanks: '感谢您的阅读，我非常期待与您一起工作的机会。🤓',
  display: () => {},
}

const Me = {
  Bio,
  Skills,
  Work,
  Projects,
  Education,
  Prototype,
  SocialMedia,
  Thanks,
}

export default Me
