// mobile menu behaviour — the only JS on the site (loaded with src, CSP-safe)
(() => {
  const menu = document.getElementById('site-menu');
  if (!menu) return;
  const toggle = menu.querySelector('summary');
  const panel = menu.querySelector('.c-sitemenu__panel');
  if (!toggle || !panel) return;

  // native <details> emits "toggle" on every open/close, whatever triggered it
  // close when the viewport crosses the desktop breakpoint (scroll lock must not leak)
  const desktop = matchMedia('(width > 64em)');
  desktop.addEventListener('change', (event) => {
    if (event.matches && menu.open) menu.open = false;
  });

  menu.addEventListener('toggle', () => {
    toggle.setAttribute('aria-expanded', String(menu.open));
    toggle.setAttribute(
      'aria-label',
      menu.open ? toggle.dataset.closeLabel : toggle.dataset.openLabel,
    );
    document.documentElement.classList.toggle('menu-open', menu.open); // body scroll lock
    if (menu.open) {
      const first = panel.querySelector('a');
      if (first) first.focus(); // focus moves into the panel on open
    } else {
      toggle.focus(); // and returns to the toggle on close
    }
  });

  // Esc anywhere (incl. focus on the summary) while open
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.open) {
      menu.open = false; // closing fires "toggle" above, which restores focus
    }
  });
})();
