# Mahdi Mosavi — Portfolio Website

Personal portfolio site for Mahdi Mosavi, a Computer Engineering student looking for Software, Web, and AI internship opportunities in Madrid.

🔗 **Live site:** [mahdiportfolio.com](https://mahdiportfolio.com)
📄 **CV:** [mahdiportfolio.com/cv](https://mahdiportfolio.com/cv)

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

Pushes to `main` are automatically built and deployed by Vercel. The `/cv` route redirects to `public/cv.pdf` (configured in `vercel.json`) so the CV can always be shared as a clean link: `mahdiportfolio.com/cv`.

## Contact

- LinkedIn: [linkedin.com/in/mahdi-mosavi](https://linkedin.com/in/mahdi-mosavi-802690229)
- GitHub: [github.com/mahdi475](https://github.com/mahdi475)
