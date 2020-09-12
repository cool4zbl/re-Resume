interface Resume {
  basics: Basics
  work: Work[]
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
  summary: string
  highlights: string[]
  position?: string
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
