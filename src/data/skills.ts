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
      'Reinforcement Learning',
      'Q-Learning',
      'Deep Q-Networks',
      'Policy Evaluation',
    ],
  },
  {
    id: 'rl-tools',
    title: 'RL / Agent Tools',
    skills: [
      'Gymnasium',
      'Stable-Baselines3',
      'RLlib',
      'Weights & Biases',
      'OpenAI Gym-style environments',
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
