# Rocky's Cafe Frontend

Storefront website built with React + TypeScript + Vite.

## Local development

1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

3. Build production files:

```bash
npm run build
```

## GitHub Pages deployment

This project is configured for GitHub Pages static deployment through GitHub Actions.

### What is already set up

- Workflow file: `.github/workflows/deploy.yml`
- Auto base path for project pages in `vite.config.ts`
- SPA fallback support (`dist/404.html`) via `scripts/copy-404.mjs`

### Enable Pages in GitHub repository settings

1. Go to your repository on GitHub.
2. Open **Settings** > **Pages**.
3. Under **Build and deployment**, choose **Source: GitHub Actions**.

### Deploy

- Push to `main`, or
- Run the **Deploy to GitHub Pages** workflow manually from the Actions tab.

After deployment, your site URL will be:

`https://<your-github-username>.github.io/<your-repo-name>/`
