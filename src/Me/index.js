/* todo
 * Syntax Highlighting
 */

const Bio = {
  name: 'zhangbinliu',
  role: 'FrontEnd Engineer',
  email: 'i@zhangbinliu.me',
  website: 'http://zhangbinliu.me/',
  github: '@cool4zbl',
  twitter: '@cool4zbl',
  apply: '前端开发工程师',
  biopic: 'http://zhangbinliu.me/content/images/avatar_zbl.jpg',
  display: () => {},
}

const Skills = {
  skills: ['JS', 'React', 'Redux'],
}

const SocialMedia = {
  blog: 'http://zhangbinliu.me/',
  github: '@cool4zbl',
  twitter: '@cool4zbl',
  douban: '@郫县豆瓣',
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
      title: 'F2E',
      location: 'Beijing',
      dates: '2015 - Present',
      responsibilities: ['负责....', '维护。。。'],
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
  Work,
  Projects,
  Education,
  Prototype,
  // SocialMedia,
  Thanks,
}

export default Me
