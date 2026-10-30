// verify-dist.mjs — build assertions over dist/ (run after `astro build`).
// 1. Every canonical/hreflang href equals an existing page URL, trailing slash included.
// 2. No inline executable <script> (CSP readiness: script-src 'self'). Structured-data blocks
//    (type="application/ld+json") are data, never executed by the browser, so they are allowed.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const pages = new Set();
const htmlFiles = [];
(function walk(dir) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p);
    else if (e.endsWith('.html')) {
      htmlFiles.push(p);
      let rel = p.slice(dist.length, -'.html'.length);
      if (rel.endsWith('/index') || rel === 'index') rel = rel.slice(0, -'index'.length); // dir index pages
      pages.add(rel === '' ? '/' : rel.startsWith('/') ? rel : `/${rel}`);
    }
  }
})(dist);
pages.delete('404/');

const errors = [];
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  for (const m of html.matchAll(/<link rel="(canonical|alternate)"[^>]*href="([^"]+)"/g)) {
    const [, rel, href] = m;
    let path;
    try {
      path = new URL(href).pathname;
    } catch {
      errors.push(`${file}: ${rel} href not absolute: ${href}`);
      continue;
    }
    if (path !== '/' && !path.endsWith('/')) {
      errors.push(`${file}: ${rel} href missing trailing slash: ${href}`);
      continue;
    }
    if (!pages.has(path)) {
      errors.push(`${file}: ${rel} href is not a built page: ${href}`);
    }
  }
  const inline = html.match(/<script(?![^>]*\bsrc=)(?![^>]*type="application\/ld\+json")[^>]*>/);
  if (inline) errors.push(`${file}: inline script (CSP): ${inline[0].slice(0, 60)}`);
}

if (errors.length) {
  console.error(`verify-dist: ${errors.length} problem(s)`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(
  `verify-dist: OK — ${htmlFiles.length} page(s), all canonical/hreflang hrefs resolve, no inline scripts`,
);
