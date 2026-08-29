# adelevski.github.io

Source for [Nas Delevski's personal website](https://adelevski.github.io).

The site is built with Astro and Markdown, contains no client-side JavaScript,
and deploys to GitHub Pages from `main`.

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

- Keep the homepage concise and personal.
- Add writing to `src/content/writing/` only after it is ready to publish.
- List every article author in `authors`; the same field supports one or
  multiple contributors.
- Keep working drafts outside this public repository, then copy them in only
  after publication approval.
- Set `draft: true` to exclude an article from generated pages and RSS.
- Keep snowball projects, principles, and organizational material canonical at
  [snowball-projects.github.io](https://snowball-projects.github.io).

The writing schema lives in `src/content.config.ts`. Published writing also
appears in `/rss.xml`.

## Deployment

`.github/workflows/deploy.yml` verifies, builds, and deploys the site after a
push to `main`. In the GitHub repository settings, **Pages → Build and
deployment → Source** must be set to **GitHub Actions**.

The configuration targets the user site at `https://adelevski.github.io`, so no
Astro `base` path is required.
