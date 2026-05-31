# Reinforcement Learning Research Portfolio

A single-page research portfolio for **Huynh Mai Linh Nguyen**, focused on reinforcement learning, sequential decision-making, AI agents, and reproducible machine learning systems.

## Tech Stack

- React + Vite + TypeScript
- Tailwind CSS
- Componentized, data-driven content in `src/data/`

## Local Development

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (typically `http://localhost:5173`).

## Build

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deploy on Vercel

1. Push this project to GitHub.
2. Go to [Vercel](https://vercel.com) and import the repository.
3. Use the Vite defaults:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Deploy.

## Resume

Place your resume at `public/resume.pdf` so the Hero **Resume** button links to `/resume.pdf` correctly in local development and on Vercel.

## Project Structure

```
src/
├── components/     # Navbar, Hero, ProjectCard, InterestCard, etc.
├── data/           # Editable content: projects, interests, skills, site config
├── hooks/          # Theme toggle hook
└── types/          # Shared TypeScript types
public/
└── resume.pdf      # Add your resume here
```

## Content Updates

Edit files in `src/data/` to update projects, research interests, skills, and site copy without changing layout components.
