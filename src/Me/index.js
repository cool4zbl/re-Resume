/* todo
 * Syntax Highlighting
 */

const Bio = {
  name: '张滨浏',
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
    '两年大型网站跨终端 Web (PC / Mobile / Native App WebView) 产品前端开发和维护经验',
    '熟悉 JavaScript, 能够脱离各 JS 类库后进行跨浏览器开发',
    '熟悉模块化、前端编译和构建工具，熟练运用 React / Redux / Webpack 等相关框架技术, 构建单页面应用',
    '工具控，效率控， 喜欢研究 Web 性能，热衷前端工程化, 在理解前端开发流程的基础上，结合实际创造提升工作效率的工具',
    '具有审美设计能力，关注用户体验',
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
      name: 'UESTC',
      location: '',
      degree: 'bacheolor',
      majors: ['EE'],
      dates: '2011 - 2015',
      url: 'uestc.com',
    },
  ],
  display: () => {},
}

const Work = {
  jobs: [
    {
      employer: 'Douban',
      url: 'https://douban.com',
      title: '前端开发工程师',
      location: 'Beijing',
      dates: '2015 - Present',
      responsibilities: [
        '负责整站移动端帐号系统开发与维护',
        '负责整站创作者社区项目 Web & Mobile 端页面开发与维护',
        '负责整站 Web 条目长评项目页面开发与维护',
        '参与整站 Mobile 端页面开发与维护',
        '参与整站 Web 社区项目页面开发与维护',
        '参与整站 Web 条目书影音页面开发与维护',
        '参与整站 Web & Mobile 端日常需求开发',
        '参与整站前端工程化建设，前端组件库的维护',
      ],
    },
  ],
  display: () => {},
}

const Projects = {
  projects: [
    {
      id: 1,
      type: 'company', // business
      title: 'Account',
      dates: '2015.12 - Present',
      description: 'Account system',
      highlights: ['Technical Stack: `React`', 'Using ....'],
      images: ['https://accounts.douban.com/'],
      url: [''],
    },
    {
      id: 1,
      type: 'openSource',
      title: 'Open',
      dates: '2015.12 - Present',
      description: 'Open source proj...',
      highlights: ['Technical Stack: `React`', 'Using ....'],
      images: ['http://zhangbinliu.me'],
      url: ['http://zhangbinliu.me'],
      code: ['github'],
    },
  ],
  display: () => {},
}

/*
 * __proto__, the true me.
 */
const Prototype = {
  hobbies: ['Vimer', 'Taking pictures'],
  quotes: ['Fake it till you make it.'],
  display: () => {},
}

const Thanks = {
  thanks:
    "Thanks for checking, I 'm expecting the opportunity to co-work with you.🤓",
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
