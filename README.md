# Fernando Darren Rachman Portfolio

This is a modern, production-ready portfolio built for high performance and excellent developer experience.

## Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theming**: `next-themes` (Dark / Light mode)

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Build

To create an optimized production build:
```bash
npm run build
```

## Project Structure

- `src/app/`: Next.js App Router configuration and pages.
- `src/components/`: Reusable React components organized by scope (layout, sections, project, ui).
- `src/data/`: Centralized data layer containing profile info, projects, skills, etc. Edit these files to update the portfolio content.
- `src/types/`: TypeScript type definitions.
- `public/`: Static assets (images, videos, resume).

## Content Management

The portfolio is entirely content-driven. To update your information, edit the files in `src/data/`:

- `profile.ts`: Name, headline, bio, contact info, and resume link.
- `projects.ts`: Main project case studies and metadata.
- `publications.ts`: Research papers and publications.
- `experience.ts`: Professional work history (currently hidden until populated).
- `education.ts`: Academic history (currently hidden until populated).
- `skills.ts`: Categorized technical skills.

Empty sections (like Experience and Education) will automatically hide themselves in the UI until you provide data for them.

## Deployment

This portfolio is optimized for deployment on Vercel.

1. Push this repository to GitHub.
2. Import the repository in your [Vercel Dashboard](https://vercel.com/new).
3. Vercel will automatically detect the Next.js framework and configure the optimal build settings.
4. Click **Deploy**.

No environment variables are required for the base configuration.
