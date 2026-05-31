import type { PriorProject, Project } from '../types'

export const projects: Project[] = [
  {
    id: 'learning-agents-playground',
    title: 'Learning Agents Playground',
    status: 'In Progress',
    tags: [
      'Sequential Decision-Making',
      'Gymnasium',
      'PyTorch',
      'Q-Learning',
      'DQN',
    ],
    summary:
      'A learning-focused implementation of classic agent training algorithms on small benchmark environments.',
    highlights: [
      'Implement tabular Q-learning for simple discrete environments.',
      'Implement Deep Q-Networks using PyTorch.',
      'Track reward curves, episode length, exploration schedules, and evaluation performance.',
      'Compare random, heuristic, tabular, and neural baselines.',
      'Document instability, variance across seeds, and common training failure modes.',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/meolen07',
      },
    ],
  },
  {
    id: 'agent-evaluation-notes',
    title: 'Agent Evaluation Notes',
    status: 'Planned',
    tags: ['Evaluation', 'Benchmarking', 'AI Agents', 'Reproducibility'],
    summary:
      'A research notes and prototype project on evaluating learning agents beyond a single reward score.',
    highlights: [
      'Study how agent performance changes across tasks, seeds, prompts, and reward settings.',
      'Track failure cases, instability, and sensitivity to environment design.',
      'Build visualizations for learning curves and error patterns.',
      'Emphasize honest reporting and reproducible evaluation.',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/meolen07',
      },
    ],
  },
  {
    id: 'preference-learning-mini-lab',
    title: 'Preference Learning Mini-Lab',
    status: 'Planned',
    tags: ['Preference Learning', 'Reward Modeling', 'Policy Optimization'],
    summary:
      'A small prototype exploring how preference data can be used to learn reward models and guide policy behavior.',
    highlights: [
      'Summarize basic ideas in preference modeling and reward learning.',
      'Build toy examples of preference-based optimization.',
      'Compare supervised preference modeling with simple policy improvement ideas.',
      'Document limitations and failure cases in reward specification.',
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
    tags: ['PyTorch', 'Computer Vision', 'Streamlit', 'Medical Imaging'],
    summary:
      'An educational biomedical AI project for four-class brain MRI tumor classification using PyTorch and EfficientNet-B0.',
    highlights: [
      'Fine-tuned an ImageNet-pretrained EfficientNet-B0 model.',
      'Built a Streamlit demo for image upload, predicted class, confidence score, and per-class probability visualization.',
      'Documented educational-use limitations and medical disclaimers.',
    ],
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
    tags: ['PyTorch', 'PyTorch Geometric', 'Graph Learning', 'Biomedical AI'],
    summary:
      'A solo exploratory project comparing hypergraph neural networks with graph neural network baselines for drug-drug interaction modeling.',
    highlights: [
      'Implemented HGNN, GCN, GAT, GraphSAGE, and MLP baselines.',
      'Built unified preprocessing, training, evaluation, and multi-seed reporting.',
      'Reported ROC-AUC, PR-AUC, and F1 while framing results as pipeline validation.',
    ],
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
