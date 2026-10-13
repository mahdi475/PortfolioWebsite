# Mahdi Mosavi — Portfolio Website

Personal portfolio site for Mahdi Mosavi, a Computer Engineering student open to opportunities across software, web, AI, systems, and more.

🔗 **Live site:** [mahdiportfolio.com](https://mahdiportfolio.com)
📄 **CV:** [mahdiportfolio.com/resume](https://mahdiportfolio.com/resume)

## Tech Stack

- **[Vite](https://vitejs.dev/)** — build tool and dev server
- **React** + **TypeScript**
- **Vercel** — hosting and deployment
- Multi-language support (see `translations.ts`)

## Getting Started

**Prerequisites:** Node.js

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev

# Build for production
npm run build
```

The production build outputs to `dist/`, which Vercel serves automatically on every push to `main`.

## Project Structure

```
├── components/       # UI components
├── public/           # Static assets (images, cv.pdf, etc.)
├── App.tsx           # Root component
├── index.tsx         # Entry point
├── translations.ts   # i18n strings
├── types.ts          # Shared TypeScript types
└── vercel.json        # Vercel build & redirect config
```

## Deployment

Pushes to `main` are automatically built and deployed by Vercel. The `/resume` route opens an on-site CV viewer (`components/ResumeViewer.tsx`) that shows `public/resume.pdf`, so the CV can always be shared as a clean link: `mahdiportfolio.com/resume`.

## Contact

- LinkedIn: [linkedin.com/in/mahdi-mosavi](https://linkedin.com/in/mahdi-mosavi-802690229)
- GitHub: [github.com/mahdi475](https://github.com/mahdi475)
