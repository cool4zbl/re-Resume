interface Resume {
  basics: Basics
  work: Work[]
  projects: Project[]
  education: Education[]
  skills: Skill[]
  languages: Language[]
  interests: Interest[]
}

interface Interest {
  name: string
  keywords: string[]
}

interface Language {
  language: string
  fluency: string
}

interface Skill {
  name: string
  level: string
  keywords: string[]
}

interface Education {
  institution: string
  area: string
  studyType: string
  startDate: string
  endDate: string
  gpa: string
  courses: string[]
}

interface Work {
  company: string
  website: string
  title?: string
  location?: string
  dates?: string
  startDate: string
  endDate: string
  description: string
  highlights: string[]
  position?: string
}

enum ProjectType {
  business,
  openSource,
}

interface Project {
  type: ProjectType
  title: string
  dates?: string
  startDate: string
  endDate: string
  description: string
  highlights: string[]
  url: string
}

interface Basics {
  name: string
  label: string
  objective?: string
  url?: string
  experience: string
  email: string
  picture: string
  phone: string
  website: string
  summary: string
  location: Location
  social: Social[]
}

interface Social {
  network: string
  username: string
  url: string
}

interface Location {
  city: string
  countryCode: string
  region: string
}

interface CommonProps {
  resumeData: Resume
}
