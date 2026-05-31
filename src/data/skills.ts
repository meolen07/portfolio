import type { SkillGroupData } from '../types'

export const skillGroups: SkillGroupData[] = [
  {
    id: 'languages',
    title: 'Languages',
    skills: ['Python', 'SQL', 'LaTeX'],
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    skills: [
      'PyTorch',
      'scikit-learn',
      'model evaluation',
      'benchmarking',
      'CNNs',
      'GNNs',
    ],
  },
  {
    id: 'current-focus',
    title: 'Current Focus',
    skills: [
      'Learning agents',
      'sequential decision-making',
      'Q-learning',
      'Deep Q-Networks',
      'policy evaluation',
      'reward modeling',
      'Gymnasium',
    ],
    note: 'Learning focus',
  },
  {
    id: 'data-viz',
    title: 'Data / Visualization',
    skills: ['pandas', 'NumPy', 'Matplotlib', 'NetworkX'],
  },
  {
    id: 'tools',
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Jupyter Notebook', 'VS Code', 'Streamlit'],
  },
]
