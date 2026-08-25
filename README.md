# adelevski.github.io

Source for [adelevski.github.io](https://adelevski.github.io), a small portfolio and technical-writing site.

The site is built with Astro and Markdown content collections, contains no client-side JavaScript, and deploys to GitHub Pages from `main`.

## Local development

Use Node 24 and install the locked dependencies:

```sh
nvm use
npm ci
npm run dev
```

Available checks:

```sh
npm run check        # Astro, TypeScript, and content-schema checks
npm run format:check # formatting check
npm run build        # production build
npm run verify       # all of the above
```

## Content

- Add project records to `src/content/projects/`.
- Add technical articles to `src/content/writing/` only when there is substantive material to publish.
- Keep the permanent public-good principles in `src/pages/principles.md`.
- Keep source repositories canonical; portfolio records should summarize and link rather than duplicate project documentation.
- Set `draft: true` in frontmatter to exclude an entry from generated pages.

Schemas live in `src/content.config.ts`. A production build fails when frontmatter does not match them.

## Deployment

`.github/workflows/deploy.yml` verifies, builds, and deploys the site after a push to `main`. In the GitHub repository settings, **Pages → Build and deployment → Source** must be set to **GitHub Actions**.

The configuration targets the user site at `https://adelevski.github.io`, so no Astro `base` path is required. Custom-domain configuration is intentionally deferred.
