/* todo
 * Syntax Highlighting
 */

const Bio = {
  name: 'Zhangbinliu',
  role: 'FrontEnd Engineer',
  contacts: {
    mobile: '18500367879',
    email: 'i@zhangbinliu.me',
    github: '@cool4zbl',
    twitter: '@cool4zbl',
  },
  selfIntroduce: 'A Front End Engineer',
  skills: ['JS', 'React', 'Redux'],
  biopic: 'Pigeon',
  display: () => {},
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

// __proto__, the true me.
const Prototype = {
  hobbies: ['Vimer', 'Taking pictures'],
  quotes: ['Fake it till you make it.'],
  display: () => {},
}

const Expactation = {
  company: ['Techonoly', 'Internet'],
  team: ['Up'],
  display: () => {},
}

const Thanks = {
  thanks: '',
  display: () => {},
}

const Me = {
  Bio,
  Education,
  Work,
  Projects,
  // Expactation,
  // Thanks,
}

export default Me
