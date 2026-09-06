import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");
const notice = await read("public/THIRD-PARTY-NOTICES.txt");
assert.equal(
  notice,
  `KaTeX\n\n${await read("node_modules/katex/LICENSE")}`,
  "The public notice must match the installed KaTeX license.",
);
assert.equal(
  await read("dist/THIRD-PARTY-NOTICES.txt"),
  notice,
  "The deployed build must retain the third-party notice.",
);

for (const file of await readdir(new URL("dist/", root), { recursive: true })) {
  if (!file.endsWith(".html")) continue;
  const html = await read(`dist/${file}`);
  assert.match(
    html,
    /<html[^>]*lang="en"/,
    `${file}: missing document language`,
  );
  assert.equal(
    (html.match(/<h1[\s>]/g) ?? []).length,
    1,
    `${file}: expected one primary heading`,
  );
  assert.match(
    html,
    /<main[^>]*id="main-content"/,
    `${file}: missing skip-link target`,
  );
  assert.match(html, /href="#main-content"/, `${file}: missing skip link`);
  assert.match(
    html,
    /http-equiv="Content-Security-Policy"/,
    `${file}: missing production CSP`,
  );
  assert.doesNotMatch(
    html,
    /<script[\s>]/i,
    `${file}: this static site must not ship client scripts`,
  );
}
