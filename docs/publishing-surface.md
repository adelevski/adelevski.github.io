# Publishing surface handoff

The personal **Writing** index and snowball **Blog** should feel like two
expressions of the same restrained publishing system without sharing identity or
content.

- Keep each site's existing top navigation. The index begins immediately below
  it, without a visible page title, introduction, or ornamental divider.
- Present posts newest first as a single vertical stack of rounded, pill-like
  surfaces. Each post occupies one surface, and the whole surface opens it.
- Preserve a quiet hierarchy: title first, concise summary second, publication
  details last. Do not truncate useful text or add promotional calls to action.
- Use spacing, borders, colors, focus states, and motion consistent with the
  surrounding dark design language. Pills should feel calm and tactile, not like
  oversized buttons.
- Keep the stack readable and fully usable at narrow widths; text and metadata
  may wrap without causing horizontal scrolling.
- Retain the same focused Markdown reading experience on article pages while
  keeping ownership distinct: personal interests belong in Writing; snowball
  projects and announcements belong in Blog.
- Treat the `authors` list as the people directing the publication. On both the
  index and article page, render the role credit exactly as
  `Directed by <formatted names>`. Do not add an AI writer or author credit to
  individual posts.
- Keep the site-wide AI-production credit in the footer, using exactly
  `Built by AI agents` without qualifiers. The personal footer contains only
  that statement; snowball may keep its About, Licensing, and Source links
  alongside it.

Treat this document as the shared outcome contract. Keep the small implementations
local to each repository; introduce a shared package only if repeated coordinated
changes make that simpler than maintaining this contract.
