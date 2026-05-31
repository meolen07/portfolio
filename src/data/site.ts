import type { NavLink } from '../types'

export const siteConfig = {
  name: 'Huynh Mai Linh Nguyen',
  initials: 'HMLN',
  headline:
    'Computer Science student interested in learning agents and reliable machine learning.',
  subheadline:
    'I build research-style machine learning projects and am currently focusing on sequential decision-making, agent evaluation, policy learning, and reproducible ML systems.',
  badge: 'Rising Sophomore · Computer Science · University of South Florida',
  about:
    'I am a rising sophomore majoring in Computer Science at the University of South Florida. My current research interests center on learning agents, sequential decision-making, and reliable machine learning systems. I am especially interested in how agents learn from feedback, how policies are evaluated, and how experimental results can be made reproducible and honest. I also have prior project experience in biomedical AI and graph learning, which helped me build strong habits around model evaluation, documentation, and communicating limitations clearly.',
  contactText:
    'I am open to undergraduate research opportunities in learning agents, sequential decision-making, reinforcement learning, reliable ML, LLM evaluation, and reproducible machine learning systems.',
  email: 'huynhmailinhnguyen07@gmail.com',
  github: 'https://github.com/meolen07',
  resumePath: '/resume.pdf',
}

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Focus', href: '#focus' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
