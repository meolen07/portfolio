import type { NavLink } from '../types'

export const siteConfig = {
  name: 'Huynh Mai Linh Nguyen',
  initials: 'HMLN',
  headline:
    'Computer Science student interested in Reinforcement Learning and AI agents.',
  subheadline:
    'I am building a research-focused portfolio around reinforcement learning, sequential decision-making, agent evaluation, and reproducible machine learning systems.',
  badge: 'Rising Sophomore · Computer Science · University of South Florida',
  about:
    'I am a rising sophomore majoring in Computer Science at the University of South Florida. My current research interest is reinforcement learning: how agents learn from interaction, how policies are evaluated, and how decision-making systems can be made more reliable and reproducible. I am especially interested in RL for AI agents, reward design, offline RL, safe exploration, and benchmark-driven evaluation.',
  contactText:
    'I am open to undergraduate research opportunities in reinforcement learning, AI agents, model evaluation, reliable ML, and reproducible machine learning systems.',
  email: 'huynhmailinhnguyen07@gmail.com',
  github: 'https://github.com/meolen07',
  resumePath: '/resume.pdf',
}

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'RL Projects', href: '#rl-projects' },
  { label: 'Research Interests', href: '#research-interests' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
