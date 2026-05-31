export type ProjectStatus = 'In Progress' | 'Planned'

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  id: string
  title: string
  status: ProjectStatus
  tags: string[]
  summary: string
  highlights: string[]
  links: ProjectLink[]
}

export interface PriorProject {
  id: string
  title: string
  summary: string
  links: ProjectLink[]
}

export interface Interest {
  id: string
  title: string
  description: string
}

export interface SkillGroupData {
  id: string
  title: string
  skills: string[]
  note?: string
}

export interface NavLink {
  label: string
  href: string
}
