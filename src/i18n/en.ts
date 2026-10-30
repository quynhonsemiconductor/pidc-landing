// English dictionary — UI strings from the locked mockup header/footer (design/screens/index.html).
// Copy is verbatim from the demo (DESIGN.md §6: the demo's copy is verbatim EN+VI).
const dictionary = {
  brand: {
    name: 'PIDC',
    sub: 'Pisico Data Center',
  },
  nav: {
    project: 'The project',
    vietnamGiaLai: 'Vietnam & Gia Lai',
    aiDataCenters: 'AI data centers',
    company: 'Company',
    contact: 'Contact',
  },
  hero: {
    badge: 'In development · Gia Lai, Vietnam',
    title: 'An international, green, resilient AI campus in a renewable-surplus province.',
    placeholder: 'Page content lands in the per-page PRs.',
  },
  footer: {
    tagline: 'An international, green, resilient AI campus in a renewable-surplus province.',
    legal: '© 2026 Pisico Data Center Joint Stock Company',
    status: 'In development · Gia Lai, Vietnam',
    site: 'pidc.vn',
  },
  ui: {
    skipLink: 'Skip to content',
    siteNav: 'Site',
    footerNav: 'Footer',
    languageGroup: 'Language / Ngôn ngữ',
    menu: 'Menu',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
  },
};

export type Dictionary = typeof dictionary;

export const en = dictionary;
