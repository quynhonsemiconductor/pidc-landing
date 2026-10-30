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
  // AI data center explainer ("/ai-data-center/") — copy verbatim from the locked mockup
  // (design/screens/ai-data-center.html). The mockup's &nbsp; inside 220 kV stays a no-break
  // space character, matching the convention above.
  aidc: {
    pageMeta: {
      title: 'What is an AI data center? · PIDC',
      description:
        'A plain-language guide to AI data centers: GPUs, power per rack, liquid cooling, and why grid power decides where they are built.',
    },
    hero: {
      badge: 'Guide',
      title: 'What is an AI data center?',
      lede: 'An AI data center is a building, or a campus of buildings, designed to power and cool large clusters of GPUs and other AI chips. It does the same basic job as any data center, with far more power and heat packed into the same space.',
    },
    tocSummary: 'On this page',
    tocItems: [
      { id: 'what', label: 'What it does' },
      { id: 'differs', label: 'How it differs' },
      { id: 'power', label: 'Power' },
      { id: 'cooling', label: 'Cooling' },
      { id: 'province', label: 'For the province' },
      { id: 'terms', label: 'Terms' },
      { id: 'sources', label: 'Sources' },
    ],
    rack: {
      a11yTitle: 'Illustrative GPU rack',
      a11yDesc:
        'Illustrative GPU rack: power shelves at top and bottom, compute trays with GPUs on cold plates, switch trays in the middle, and coolant supply and return lines on the side.',
      keys: [
        'Compute trays: GPUs on cold plates',
        'Switch trays that link the GPUs',
        'Power shelves',
        'Coolant supply and return',
      ],
      capA: 'Illustrative GPU rack',
      capB: 'Not to scale',
    },
    what: {
      eyebrow: 'What it does',
      title: 'Training and inference',
      training: {
        title: 'Training',
        body: 'Thousands of GPUs work together for weeks or months to build an AI model from large amounts of data. They must sit close together on very fast networks, so training favors large, dense sites.',
        data: 'Data',
        cluster: 'GPU cluster',
        model: 'Model',
      },
      inference: {
        title: 'Inference',
        body: 'Running a trained model to answer requests, from chat assistants to image recognition. Inference runs around the clock and grows with the number of users, so it also needs good connections to the networks those users are on.',
        requests: 'requests',
        answers: 'answers',
        users: 'Users',
        modelOnGpus: 'Model on GPUs',
      },
    },
    differs: {
      eyebrow: 'How it differs',
      title: 'The same kind of building, at many times the power',
      chart: {
        title: 'Power drawn by one rack, kW',
        rows: [
          {
            value: '≈ 8',
            label: 'Average rack in data centers worldwide, 2024',
            cite: 1,
          },
          { value: '132', label: 'One NVIDIA GB200 NVL72 rack, 72 GPUs', cite: 2 },
        ],
      },
      intro:
        'One current-generation GPU rack draws about 16 times the power of an average rack today. That changes the electrical supply and the cooling around it.',
      table: {
        feature: 'Feature',
        conventional: 'Conventional data center',
        ai: 'AI data center',
        hConventional: 'Conventional',
        hAi: 'AI',
        rows: [
          {
            th: 'Main hardware',
            conv: 'CPU servers and storage',
            ai: 'GPU servers linked into large clusters',
          },
          {
            th: 'Power per rack',
            conv: 'Mostly under 10 kW',
            ai: 'Tens of kW; about 130 kW for the newest GPU racks',
          },
          {
            th: 'Cooling',
            conv: 'Mostly air',
            ai: 'Liquid piped to the chips, with air for the rest of the room',
          },
          {
            th: 'Network',
            conv: 'Built for traffic to and from users',
            ai: 'Very fast links between GPUs inside the cluster, plus links out to users and clouds',
          },
          { th: 'Campus size', conv: 'A few MW to tens of MW', ai: 'Tens to hundreds of MW' },
          {
            th: 'Grid connection',
            conv: 'Medium voltage or 110 kV',
            ai: 'High voltage, often 110–220 kV or above',
          },
        ],
      },
    },
    power: {
      eyebrow: 'Power',
      title: 'Why power decides where they are built',
      p1: "Data centers used about 415 TWh of electricity in 2024, around 1.5% of the world's total. The International Energy Agency expects that to more than double, to about 945 TWh by 2030, with AI the main driver.",
      chart: {
        title: 'Data center electricity use worldwide, TWh',
        rows: [
          { value: '415', label: '2024' },
          { value: '≈ 945', label: '2030, IEA projection' },
        ],
      },
      p2: 'So the first question for any AI campus is power: a high-voltage grid connection with capacity to spare, room to add more over time, and supply that holds up around the clock. Land, buildings and equipment can be arranged. A new high-voltage connection can take years.',
      p3: 'That is why PIDC chose a site beside the 220 kV grid.',
      seeSite: 'See the site',
    },
    cooling: {
      eyebrow: 'Cooling',
      title: 'Cooling and water',
      p1: 'GPU racks give off too much heat for air alone. Current-generation systems such as the GB200 NVL72 are liquid-cooled: coolant flows through cold plates mounted on the chips and carries the heat away.',
      loop: {
        a11yTitle: 'Liquid cooling loop',
        a11yDesc:
          'Liquid cooling loop: coolant takes heat from cold plates on the chips to a coolant distribution unit, which passes it to a second loop that releases it outdoors through dry coolers or cooling towers.',
        coldPlateA: 'Cold plates',
        coldPlateB: 'on the chips',
        cdu: 'CDU',
        cduSub: 'coolant distribution unit',
        dryA: 'Dry cooler or',
        dryB: 'cooling tower',
        rack: 'rack',
        outdoors: 'outdoors',
        swCold: 'Cool coolant',
        swWarm: 'Warm coolant',
        capA: 'Liquid cooling loop',
        capB: 'Schematic',
      },
      p2: 'Outdoors, that heat is released through dry coolers, cooling towers or a mix of the two. Closed-loop designs recirculate the same coolant and use little water. Evaporative designs use more water but less electricity. The right balance depends on the local climate and water supply.',
      p3: "Efficiency is measured as PUE, power usage effectiveness: the facility's total power divided by the power used by the computing equipment. A PUE of 1.0 would mean no overhead at all. The industry average was 1.56 in 2024.",
      chart: {
        title: 'Power drawn from the grid for 100 kW of computing, kW',
        rows: [
          {
            value: '156',
            label: 'PUE 1.56, industry average in 2024',
            cite: 1,
          },
          { value: '100', label: 'PUE 1.0, no overhead' },
        ],
        swIt: 'Computing equipment',
        swOver: 'Cooling and other overhead',
      },
    },
    province: {
      eyebrow: 'For the province',
      title: 'What a campus brings to a province',
      items: [
        'Large investment in buildings, electrical and cooling systems, and fiber.',
        'A steady local buyer for power generated in the province.',
        'Skilled jobs in electrical, mechanical and network engineering and in operations. Data centers employ fewer people than factories of similar cost, but the work is technical.',
        'New power and fiber infrastructure that other digital businesses can build on.',
      ],
    },
    terms: {
      eyebrow: 'Terms',
      title: 'Terms you will hear',
      glossary: [
        { dt: 'GPU', dd: 'Graphics processing unit: the chip that does most AI computing.' },
        {
          dt: 'Rack',
          dd: 'A standard cabinet that holds servers. Power density is usually counted per rack.',
        },
        {
          dt: 'MW IT',
          dd: 'Power available to the computing equipment itself, not counting cooling and losses. Data center size is usually quoted this way.',
        },
        {
          dt: 'PUE',
          dd: 'Power usage effectiveness: total facility power divided by IT power. Lower is better.',
        },
        {
          dt: 'Liquid cooling',
          dd: 'Coolant piped to plates on the chips, which removes heat far better than air.',
        },
        {
          dt: 'Colocation',
          dd: 'Renting space, power and cooling to a customer who brings its own servers.',
        },
        {
          dt: 'Hyperscaler',
          dd: 'A very large cloud provider that runs its own fleet of data centers worldwide.',
        },
        {
          dt: 'Redundancy (N+1, 2N)',
          dd: 'Spare capacity so one failure does not stop service. N+1 adds one spare unit; 2N duplicates the whole system.',
        },
        { dt: 'Latency', dd: 'The time data takes to cross a network, measured in milliseconds.' },
        {
          dt: 'Cable landing station',
          dd: 'Where a submarine fiber cable comes ashore and joins land networks.',
        },
      ],
    },
    sources: {
      eyebrow: 'Sources',
      title: 'Where the numbers come from',
      items: [
        {
          pre: 'Uptime Institute, ',
          href: 'https://datacenter.uptimeinstitute.com/rs/711-RIA-145/images/2024.GlobalDataCenterSurvey.Report.pdf',
          text: 'Global Data Center Survey 2024',
          post: ' (rack density, PUE).',
        },
        {
          pre: 'Supermicro, ',
          href: 'https://www.supermicro.com/en/products/rack/srs-gb200-nvl72',
          text: 'SRS-GB200-NVL72 rack specification',
          post: ' (132 kW, 72 GPUs, direct liquid cooling).',
        },
        {
          pre: 'International Energy Agency, ',
          href: 'https://www.iea.org/reports/energy-and-ai/executive-summary',
          text: 'Energy and AI: Executive summary',
          post: ' (2025).',
        },
      ],
    },
    cta: {
      title: 'Questions about the campus?',
      btn: 'Contact us',
    },
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
          'Schematic location map — PIDC site in Gia Lai, 220 kV grid link, dual fiber routes to ADC and SJC2 landings at Quy Nhơn (LM-01)',
        a11yDesc:
          'Schematic location map. Central Vietnam, with the PIDC site in Gia Lai province, a 220 kV grid connection, and two separate fiber routes east to the ADC and SJC2 cable landing stations at Quy Nhơn on the coast.',
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
          'Schematic location map, mobile — PIDC site in Gia Lai, 220 kV grid link, fiber routes to ADC and SJC2 landings at Quy Nhơn (LM-01)',
        a11yDesc:
          'Schematic location map (mobile). Central Vietnam, with the PIDC site in Gia Lai province, a 220 kV grid connection, and two separate fiber routes east to the ADC and SJC2 cable landing stations at Quy Nhơn on the coast.',
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
