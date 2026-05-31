import type { PriorProject, Project } from '../types'

export const rlProjects: Project[] = [
  {
    id: 'rl-playground',
    title: 'RL Playground: Classic Control Agents',
    status: 'In Progress',
    tags: [
      'Reinforcement Learning',
      'Gymnasium',
      'PyTorch',
      'Q-Learning',
      'DQN',
    ],
    summary:
      'A learning-focused implementation of reinforcement learning agents on classic control environments such as CartPole, MountainCar, and LunarLander.',
    highlights: [
      'Implement tabular Q-learning for small discrete environments.',
      'Implement Deep Q-Networks using PyTorch.',
      'Track reward curves, episode length, exploration schedules, and evaluation performance.',
      'Compare random, heuristic, tabular, and deep RL baselines.',
      'Document common failure modes such as unstable training and reward hacking.',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/meolen07',
      },
    ],
  },
  {
    id: 'rlhf-notes',
    title: 'RLHF / Preference Learning Notes',
    status: 'Planned',
    tags: [
      'RLHF',
      'Preference Learning',
      'Reward Modeling',
      'LLM Evaluation',
    ],
    summary:
      'A research notes and prototype project exploring how preference data can be used to train reward models and improve agent behavior.',
    highlights: [
      'Summarize core ideas behind reward modeling and RLHF.',
      'Build small toy examples of preference-based learning.',
      'Compare supervised preference modeling with simple policy optimization ideas.',
      'Document limitations and failure cases in reward specification.',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/meolen07',
      },
    ],
  },
  {
    id: 'agent-evaluation',
    title: 'Reliable Agent Evaluation',
    status: 'Planned',
    tags: [
      'AI Agents',
      'Evaluation',
      'Benchmarking',
      'Safety',
      'Reproducibility',
    ],
    summary:
      'A small evaluation framework for testing agent behavior across tasks, prompts, and reward settings.',
    highlights: [
      'Design simple agent tasks with measurable success criteria.',
      'Track failure cases, variance across seeds, and sensitivity to task wording.',
      'Build visualizations for performance, instability, and error patterns.',
      'Emphasize reproducible evaluation and honest reporting.',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/meolen07',
      },
    ],
  },
]

export const priorProjects: PriorProject[] = [
  {
    id: 'mind',
    title: 'MIND: MRI-based Intelligent Neural Detection',
    summary:
      'A PyTorch computer vision project for educational four-class brain MRI tumor classification, with a Streamlit demo and medical-use limitations.',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/meolen07/mind-mri-brain-tumor',
      },
      {
        label: 'Demo',
        href: 'https://mind-2026.streamlit.app/',
      },
      {
        label: 'Paper',
        href: 'https://github.com/meolen07/mind-mri-brain-tumor/blob/main/report.pdf',
      },
    ],
  },
  {
    id: 'hypergraph-ddi',
    title: 'Hypergraph-DDI',
    summary:
      'A solo exploratory PyTorch/PyG project comparing hypergraph and graph neural network baselines for drug-drug interaction modeling.',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/meolen07/hypergraph-ddi',
      },
      {
        label: 'Paper',
        href: 'https://github.com/meolen07/hypergraph-ddi/blob/master/paper/hypergraph_ddi_paper.pdf',
      },
    ],
  },
]
