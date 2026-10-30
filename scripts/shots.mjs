// shots.mjs — full-page review screenshots (.shots/, gitignored) for both locales at 390 and
// 1440 px, via headless Chrome + CDP (Page.captureScreenshot with captureBeyondViewport).
// Serves dist/ with `astro preview`. Usage: pnpm build && node scripts/shots.mjs
import { spawn } from 'node:child_process';
import process from 'node:process';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { setTimeout as sleep } from 'node:timers/promises';
import { launch as launchChrome } from 'chrome-launcher';

const PORT = 4321;
const BASE = `http://127.0.0.1:${PORT}`;
const SHOTS = [
  { path: '/', name: 'home-en-390', width: 390, height: 844, dsf: 2 },
  { path: '/', name: 'home-en-1440', width: 1440, height: 900, dsf: 1 },
  { path: '/vi/', name: 'home-vi-390', width: 390, height: 844, dsf: 2 },
  { path: '/vi/', name: 'home-vi-1440', width: 1440, height: 900, dsf: 1 },
  { path: '/ai-data-center/', name: 'aidc-en-390', width: 390, height: 844, dsf: 2 },
  { path: '/ai-data-center/', name: 'aidc-en-1440', width: 1440, height: 900, dsf: 1 },
  { path: '/ai-data-center/', name: 'aidc-en-1024', width: 1024, height: 800, dsf: 1 },
  { path: '/vi/ai-data-center/', name: 'aidc-vi-390', width: 390, height: 844, dsf: 2 },
  { path: '/vi/ai-data-center/', name: 'aidc-vi-1440', width: 1440, height: 900, dsf: 1 },
  { path: '/why-vietnam/', name: 'whyv-en-390', width: 390, height: 844, dsf: 2 },
  { path: '/why-vietnam/', name: 'whyv-en-1440', width: 1440, height: 900, dsf: 1 },
  { path: '/why-vietnam/', name: 'whyv-en-1024', width: 1024, height: 800, dsf: 1 },
  { path: '/vi/why-vietnam/', name: 'whyv-vi-390', width: 390, height: 844, dsf: 2 },
  { path: '/vi/why-vietnam/', name: 'whyv-vi-1440', width: 1440, height: 900, dsf: 1 },
  { path: '/company/', name: 'company-en-390', width: 390, height: 844, dsf: 2 },
  { path: '/company/', name: 'company-en-1440', width: 1440, height: 900, dsf: 1 },
  { path: '/vi/company/', name: 'company-vi-390', width: 390, height: 844, dsf: 2 },
  { path: '/vi/company/', name: 'company-vi-1440', width: 1440, height: 900, dsf: 1 },
];

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

// minimal CDP client over the browser websocket; flat sessions via sessionId
function connect(wsUrl) {
  const socket = new WebSocket(wsUrl);
  let seq = 0;
  const pending = new Map();
  socket.addEventListener('message', (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      pending.get(msg.id)(msg);
      pending.delete(msg.id);
    }
  });
  const opened = new Promise((resolve, reject) => {
    socket.addEventListener('open', () => resolve(), { once: true });
    socket.addEventListener('error', () => reject(new Error('cdp socket error')), { once: true });
  });
  const send = (method, params = {}, sessionId) =>
    new Promise((resolve, reject) => {
      const id = ++seq;
      pending.set(id, (msg) =>
        msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result),
      );
      socket.send(JSON.stringify({ id, method, params, ...(sessionId ? { sessionId } : {}) }));
    });
  return { opened, send, close: () => socket.close() };
}

async function main() {
  mkdirSync('.shots', { recursive: true });
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
    const chrome = await launchChrome({ chromeFlags: ['--headless', '--hide-scrollbars'] });
    try {
      const version = await (await fetch(`http://127.0.0.1:${chrome.port}/json/version`)).json();
      const browser = connect(version.webSocketDebuggerUrl);
      await browser.opened;
      for (const shot of SHOTS) {
        const { targetId } = await browser.send('Target.createTarget', { url: 'about:blank' });
        const { sessionId } = await browser.send('Target.attachToTarget', {
          targetId,
          flatten: true,
        });
        const page = (method, params) => browser.send(method, params, sessionId);
        await page('Page.enable');
        await page('Emulation.setDeviceMetricsOverride', {
          width: shot.width,
          height: shot.height,
          deviceScaleFactor: shot.dsf,
          mobile: shot.width < 800,
        });
        await page('Page.navigate', { url: BASE + shot.path });
        await sleep(1800); // fonts settle
        const result = await page('Page.captureScreenshot', {
          format: 'png',
          captureBeyondViewport: true,
        });
        writeFileSync(`.shots/${shot.name}.png`, Buffer.from(result.data, 'base64'));
        process.stdout.write(`${shot.name}.png written\n`);
        await browser.send('Target.closeTarget', { targetId });
      }
      browser.close();
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
