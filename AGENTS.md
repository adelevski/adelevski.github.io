# Personal website

## Work and verification

- Use Node 24 (`nvm use`) and `npm ci`; preserve the lockfile and static Astro
  architecture. `npm run dev` starts the preview; `npm run verify` runs Astro,
  content, formatting, and production-build checks.
- Read the existing diff before editing and preserve unrelated changes. Inspect
  changed layouts at narrow widths and with keyboard navigation.
- Pushes to `main` deploy through `.github/workflows/deploy.yml`. Verify the
  workflow and live pages before reporting publication. Do not force-push shared
  history or publish drafts without user authorization.
- Keep durable guidance here; `CLAUDE.md` imports this file. Keep detailed setup
  and deployment instructions in `README.md`.

## Identity and content

- This is Nas Delevski's personal website, distinct from snowball's catalog,
  principles, policies, and organizational site. Write `snowball` in lowercase
  and link to https://snowball-projects.github.io instead of duplicating its copy.
- Identify Nas Delevski as snowball's founder; credit snowball software to
  snowball. Do not transfer a software license to personal writing.
- Before changing claims about snowball, read its canonical `src/pages/principles.md`
  in the snowball website checkout, or https://snowball-projects.github.io/principles/.
- Keep the surface minimal, personal, and static. Add sections, dependencies,
  client state, or content machinery only for a demonstrated need. Preserve the
  shared dark visual language without using snowball's logo or presenting this
  site as a snowball property.
- Keep the personal site free of footer navigation, AI-builder labels, and
  production credits. Do not add AI writer or author credits to posts.
- `/writing/` is the personal writing index. Store article `authors` as a nonempty
  list and render names only. Follow `docs/publishing-surface.md` while preserving
  personal content ownership and a local implementation.
- Keep drafts outside this public repository. `draft: true` controls rendered
  output, not source privacy. Publication requires user authorization; preserve
  slugs and `publishedDate`, and set `updatedDate` for approved revisions.
- Preserve the author's voice and distinguish facts from plans. The published
  website is canonical after deployment; private revisions stay private until
  publication is authorized.

## Implementation boundaries

- `src/content.config.ts` owns writing validation; `src/pages/writing/` renders
  articles and the index; `src/pages/rss.xml.js` produces the public feed.
- Preserve keyboard navigation, readable mobile text, visible focus, reduced
  motion, and metadata. Do not truncate useful text.
- Never commit secrets, private drafts, editor state, tracking, or advertising.
  Preserve local files and report unresolved issues with check results.
