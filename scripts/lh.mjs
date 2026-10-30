// Lighthouse runner: builds are done by the `lh` package script; this serves `astro preview`
// and audits "/" and "/vi/" (mobile emulation), writing JSON+HTML reports to .lighthouse/.
// Usage: pnpm lh
import { spawn } from 'node:child_process';
import process from 'node:process';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { setTimeout as sleep } from 'node:timers/promises';
import { launch as launchChrome } from 'chrome-launcher';
import lighthouse from 'lighthouse';

const PORT = 4321;
const BASE = `http://127.0.0.1:${PORT}`;
const TARGETS = [
  { path: '/', name: 'home-en' },
  { path: '/vi/', name: 'home-vi' },
  { path: '/ai-data-center/', name: 'aidc-en' },
  { path: '/vi/ai-data-center/', name: 'aidc-vi' },
  { path: '/why-vietnam/', name: 'whyv-en' },
  { path: '/vi/why-vietnam/', name: 'whyv-vi' },
  { path: '/company/', name: 'company-en' },
  { path: '/vi/company/', name: 'company-vi' },
  { path: '/contact/', name: 'contact-en' },
  { path: '/vi/contact/', name: 'contact-vi' },
];
const CATEGORIES = ['performance', 'accessibility', 'best-practices', 'seo'];

async function waitForServer(url, attempts = 60) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await globalThis.fetch(url);
      if (res.ok) return;
    } catch {
      // not up yet
    }
    await sleep(500);
  }
  throw new Error(`preview server did not come up at ${url}`);
}

async function main() {
  mkdirSync('.lighthouse', { recursive: true });
  // resolve the astro bin from the installed package (pnpm-safe: no node_modules/astro/astro.js path)
  const require = createRequire(import.meta.url);
  const astroPkgPath = require.resolve('astro/package.json');
  const astroBin = join(
    dirname(astroPkgPath),
    JSON.parse(readFileSync(astroPkgPath, 'utf8')).bin.astro,
  );
  const preview = spawn(
    process.execPath,
    [astroBin, 'preview', '--port', String(PORT), '--host', '127.0.0.1'],
    { stdio: 'ignore', cwd: process.cwd() },
  );
  try {
    await waitForServer(BASE);
    const chrome = await launchChrome({ chromeFlags: ['--headless'] });
    try {
      for (const target of TARGETS) {
        const runnerResult = await lighthouse(
          BASE + target.path,
          {
            port: chrome.port,
            output: ['json', 'html'],
            onlyCategories: CATEGORIES,
            formFactor: 'mobile',
            screenEmulation: {
              mobile: true,
              width: 390,
              height: 844,
              deviceScaleFactor: 2,
              disabled: false,
            },
          },
          undefined,
        );
        if (!runnerResult) throw new Error(`lighthouse returned no result for ${target.path}`);
        const [json, html] = runnerResult.report;
        writeFileSync(`.lighthouse/${target.name}.json`, json);
        writeFileSync(`.lighthouse/${target.name}.html`, html);
        const scores = CATEGORIES.map(
          (c) => `${c}: ${Math.round((runnerResult.lhr.categories[c].score ?? 0) * 100)}`,
        );
        process.stdout.write(`${target.path}  ${scores.join('  ')}\n`);
      }
    } finally {
      await chrome.kill();
    }
  } finally {
    preview.kill('SIGTERM');
  }
}

main().catch((error) => {
  process.stderr.write(`${error.stack ?? error}\n`);
  process.exitCode = 1;
});
