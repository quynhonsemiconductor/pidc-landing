// English dictionary — UI strings + home-page copy from the locked mockup
// (design/screens/index.html). Copy is verbatim from the demo (DESIGN.md §6).
// The mockup uses no-break spaces inside 220 kV etc.; strings keep them as   escapes.
// become the build convention TODO(CEO): … (BUILD-NOTES 6) and render inside .c-ceo.
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
    lede: 'PIDC is developing a phased AI data center campus in Gia Lai, a province that produces far more electricity than it uses. Our site sits beside the 220 kV transmission grid, within reach of the two international submarine cables that land at Quy Nhơn.',
    ctaPrimary: 'Contact us',
    ctaSecondary: 'Why Gia Lai',
    figureTitle: 'Building AI infrastructure where the power is.',
  },
  statband: {
    eyebrow: 'Site facts',
    kv: {
      value: '220 kV',
      label: 'Grid connection',
      src: 'TODO(CEO): source + as-of',
    },
    distance: {
      value: 'TODO(CEO): distance km to Quy Nhơn cable landings',
      label: 'Distance to the Quy Nhơn cable landings',
      src: 'TODO(CEO): source + as-of',
    },
    land: {
      value: 'TODO(CEO): land area ha',
      label: 'Land area',
      src: 'TODO(CEO): source + as-of',
    },
    phases: {
      value: 'TODO(CEO): number of phases',
      label: 'Build phases',
      src: 'TODO(CEO): source + as-of',
    },
    stage: {
      value: 'TODO(CEO): current stage',
      label: 'Current stage',
      src: 'TODO(CEO): source + as-of',
    },
  },
  proofs: {
    eyebrow: 'Why Gia Lai',
    title: 'Power, fiber and land in one place',
    items: [
      {
        index: '01',
        kicker: 'Power',
        title: 'A province with surplus power',
        body: "Gia Lai's wind, solar and hydropower plants produce far more electricity than the province uses. The site is beside the 220 kV transmission grid, and Vietnam's national power development plan includes new transmission capacity for the region. Using this power locally also eases the load on long-distance lines.",
      },
      {
        index: '02',
        kicker: 'Connectivity',
        title: 'Two international cables land nearby',
        body: 'Quy Nhơn is the Vietnam landing point for the ADC and SJC2 submarine cables, both in service since 2025. We plan separate fiber routes from the campus to each landing station.',
      },
      {
        index: '03',
        kicker: 'Land',
        title: 'Room to grow on one site',
        body: 'The campus is planned in phases on a single parcel. Later phases expand in place instead of starting over at a new location.',
      },
    ],
  },
  mapCap: {
    a: 'Vietnam · Gia Lai · the site',
    b: 'LM-01 · schematic · not to scale',
  },
  moreBtn: 'More on Vietnam and Gia Lai',
  campus: {
    eyebrow: 'The campus',
    title: 'Planned for dense AI compute, built in phases',
    lede: 'We are planning the campus around what large GPU deployments need: high power density, liquid cooling and direct international connectivity. Each phase is sized to committed tenant demand.',
    btn: 'What is an AI data center?',
    glossary: [
      { dt: 'Workloads', dd: 'AI training and inference' },
      { dt: 'Racks and cooling', dd: 'High-density racks, liquid-cooled' },
      {
        dt: 'Power',
        dd: 'Dedicated high-voltage substation on site, beside the 220 kV grid',
      },
      {
        dt: 'Connectivity',
        dd: 'Carrier-neutral, with separate fiber routes to both cable landing stations',
      },
      { dt: 'Delivery', dd: 'In phases, on one site' },
      { dt: 'Status', dd: 'In development' },
    ],
    nda: 'Capacity figures and technical details are shared under NDA.',
  },
  cta: {
    title: 'Talk to us about the campus',
    btn: 'Contact us',
  },
  diagrams: {
    sld: {
      a11yTitle: 'Concept single-line diagram (SLD-00)',
      a11yDesc:
        'Concept single-line diagram. Wind, solar and hydro plants feed the 220 kV grid. The PIDC campus takes power through its own substation, steps it down to medium voltage on two feeds, A and B, for the AI data halls, and connects by two separate fiber routes to the ADC and SJC2 cable landing stations at Quy Nhơn.',
      generation: 'GENERATION',
      wind: 'Wind',
      solar: 'Solar',
      hydro: 'Hydro',
      campus: 'PIDC CAMPUS',
      substation: 'Substation',
      hvMv: 'HV / MV',
      mv: 'MV',
      halls: 'AI data halls',
      fiber: 'Fiber',
      landings: 'Cable landings',
      quyNhon: 'Quy Nhơn',
      grid: 'grid',
      sheet: 'SLD-00 · CONCEPT · NOT TO SCALE',
      keys: [
        'Power from the 220 kV grid to the on-site substation',
        'Fiber on separate routes to each cable landing',
        'PIDC site boundary',
      ],
    },
    terrain: {
      a11yTitle: 'Section A–A · west to east',
      a11yDesc:
        'Schematic west-to-east section of Gia Lai: generation on the highland plateau, transmission lines down through the mountain pass, and cable landings on the coast at Quy Nhơn.',
      zones: [
        {
          name: 'Highlands',
          desc: 'Hydropower, wind and solar plants across the plateau.',
        },
        {
          name: 'Mountain pass',
          desc: 'Transmission lines carry power down to the coast.',
        },
        {
          name: 'Coast · Quy Nhơn',
          desc: 'Grid, port and the ADC and SJC2 cable landings.',
        },
      ],
      capA: 'Section A–A · west to east',
      capB: 'Schematic, not to scale',
    },
    iso: {
      a11yTitle: 'Campus concept illustration',
      a11yDesc:
        'Concept illustration of the campus: a first data hall with its cooling plant, later phases on the same parcel, an on-site substation connected to the grid, and two separate fiber routes.',
      keys: [
        'Phase 1 data hall',
        'Later phases on the same parcel',
        'On-site high-voltage substation',
        'Grid connection',
        'Separate fiber routes to the cable landings',
        'Cooling plant',
      ],
      capA: 'Concept illustration',
      capB: 'Not a design · not to scale',
    },
    lm: {
      desktop: {
        a11yTitle:
          'Schematic location map — PIDC site in Gia Lai, 220 kV grid link, dual fibre routes to ADC and SJC2 landings at Quy Nhơn (LM-01)',
        a11yDesc:
          'Schematic location map. Central Vietnam, with the PIDC site in Gia Lai province, a 220 kV grid connection, and two separate fibre routes east to the ADC and SJC2 cable landing stations at Quy Nhơn on the coast.',
        name: 'VIETNAM',
        kv: '220 kV grid',
        prov: 'Gia Lai Province',
        site: 'PIDC site',
        siteSecondLine: undefined as string | undefined,
        coast: 'Quy Nhơn',
        stationA: 'ADC landing',
        stationB: 'SJC2 landing',
        sea: 'EAST SEA',
      },
      mobile: {
        a11yTitle:
          'Schematic location map, mobile — PIDC site in Gia Lai, 220 kV grid link, fibre routes to ADC and SJC2 landings at Quy Nhơn (LM-01)',
        a11yDesc:
          'Schematic location map (mobile). Central Vietnam, with the PIDC site in Gia Lai province, a 220 kV grid connection, and two separate fibre routes east to the ADC and SJC2 cable landing stations at Quy Nhơn on the coast.',
        kv: '220 kV',
        site: 'PIDC site',
        coast: 'Quy Nhơn',
        stationA: 'ADC',
        stationB: 'SJC2',
      },
    },
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
