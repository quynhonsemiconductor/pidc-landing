// "On this page" rail scroll-spy — marks the section nearest the top of the viewport with
// aria-current. Progressive enhancement: without JS the first item keeps its static marker.
// Loaded with src (CSP script-src 'self'); no inline script.
(() => {
  const rail = document.querySelector('.r-tocrail > nav');
  if (!rail || !('IntersectionObserver' in globalThis)) return;
  const items = [...rail.querySelectorAll('li')]
    .map((li) => {
      const link = li.querySelector('a[href^="#"]');
      const section = link && document.getElementById(link.getAttribute('href').slice(1));
      return section ? { li, section } : null;
    })
    .filter(Boolean);
  if (!items.length) return;
  const visible = new Set();
  const mark = () => {
    const current = items.find((item) => visible.has(item.section)) ?? null;
    if (!current) return;
    for (const item of items) {
      if (item === current) item.li.setAttribute('aria-current', 'true');
      else item.li.removeAttribute('aria-current');
    }
  };
  const io = new globalThis.IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      }
      mark();
    },
    { rootMargin: '0px 0px -60% 0px' },
  );
  for (const item of items) io.observe(item.section);
})();
