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
  // Why Vietnam, why Gia Lai ("/why-vietnam/") — copy verbatim from the locked mockup
  // (design/screens/why-vietnam.html). Source titles keep their dates/punctuation inside the
  // link text exactly as mocked, so no punctuation ever dangles alone after a link.
  whyv: {
    hero: {
      badge: 'Location',
      title: 'Why Vietnam, and why Gia Lai',
      lede: "Vietnam's demand for computing is growing fast, and its laws now treat data centers as a priority sector. Within Vietnam, Gia Lai pairs a large renewable power base with two international submarine cables that land at Quy Nhơn.",
    },
    tocSummary: 'On this page',
    tocItems: [
      { id: 'vietnam', label: 'Vietnam' },
      { id: 'gia-lai', label: 'Gia Lai' },
      { id: 'pidc-site', label: 'Where PIDC fits' },
      { id: 'sources', label: 'Sources' },
    ],
    vietnam: {
      eyebrow: 'Vietnam',
      title: 'A growing market, with the law behind it',
      items: [
        {
          index: '01',
          kicker: 'Demand',
          title: 'A fast-growing digital economy',
          stat: { figure: 'US$39B', label: '+17% in 2025 · 81% use AI daily' },
          cites: [1],
          body: "Vietnam's digital economy was estimated at US$39 billion in gross merchandise value in 2025, up 17% on the year. Vietnamese users also lead Southeast Asia in daily use of AI tools, at 81%.",
        },
        {
          index: '02',
          kicker: 'Law',
          title: 'Data centers are a priority sector',
          stat: { figure: '71/2025/QH15', label: 'In force since 1 Jan 2026' },
          cites: [2],
          body: 'The Law on Digital Technology Industry (No. 71/2025/QH15), in force since 1 January 2026, lists data centers and AI among the priority sectors for investment incentives.',
        },
        {
          index: '03',
          kicker: 'Data',
          title: 'Some data must stay in Vietnam',
          stat: { figure: '53/2022/NĐ-CP', label: 'In force since Oct 2022' },
          cites: [3],
          body: 'Since October 2022, Decree 53/2022/NĐ-CP has required domestic companies, and foreign providers in certain cases, to store specified user data in Vietnam.',
        },
        {
          index: '04',
          kicker: 'Connectivity',
          title: 'More international cables on the way',
          stat: { figure: '15+', label: 'cables by 2030 · 350+ Tbps' },
          cites: [4],
          body: "Vietnam's strategy for its international cable system targets at least 10 new submarine cables by 2030, for a total of at least 15 and at least 350 Tbps of capacity.",
        },
      ],
    },
    gialai: {
      eyebrow: 'Gia Lai',
      title: 'From the highlands to the sea',
      intro:
        'Since its 2025 merger with Bình Định, Gia Lai runs from the Central Highlands to the coast, with its administrative center at Quy Nhơn.',
      power: {
        index: '01',
        kicker: 'Power',
        title: 'A large renewable power base',
        body: "85 renewable plants are operating in the province, with 4,179 MW of capacity. Together they supply more than 15 billion kWh a year to the national grid, and the adjusted national power plan takes the province's renewable capacity to about 9,657 MW by 2035.",
      },
      chart: {
        title: 'Renewable plants in operation, MW',
        axisMax: '4,179 MW',
        keys: [
          { n: '1', value: '2,516', label: 'hydro' },
          { n: '2', value: '1,048', label: 'wind' },
          { n: '3', value: '485', label: 'solar' },
          { n: '4', value: '130', label: 'biomass' },
        ],
      },
      items: [
        {
          index: '02',
          kicker: 'Connectivity',
          title: 'Two international cables land at Quy Nhơn',
          stat: { figure: 'ADC · SJC2', label: '04/2025 · 07/2025' },
          cites: [7, 8, 9],
          body: 'ADC, operated in Vietnam by Viettel, entered service in April 2025. SJC2, with VNPT as its Vietnamese partner, went live in July 2025; its main trunk links Singapore, Hong Kong, China and Japan.',
        },
        {
          index: '03',
          kicker: 'Policy',
          title: 'A province that wants this industry',
          stat: { figure: 'AI · data centers', label: 'Priority sectors for investment' },
          cites: [10],
          body: 'Gia Lai lists digital technology, AI and data centers among the priority sectors in its investment promotion.',
        },
      ],
    },
    fit: {
      eyebrow: 'Where PIDC fits',
      title: 'Power and cables, one site',
      intro:
        "PIDC's site is in coastal Gia Lai, beside the 220 kV transmission grid and within reach of both cable landing stations. Site details are shared under NDA.",
      mapCapA: 'Schematic location map',
      mapCapB: 'Not to scale',
      btn: 'See the campus plan',
    },
    sources: {
      eyebrow: 'Sources',
      title: 'Where the numbers come from',
      items: [
        {
          pre: 'Google, Temasek and Bain, e-Conomy SEA 2025, as reported by ',
          href: 'https://ven.congthuong.vn/google-vietnam-s-digital-economy-to-reach-usd-39-billion-in-2025-58364.html',
          text: 'Vietnam Economic News (Công Thương), 27 Nov 2025.',
          post: '',
        },
        {
          pre: 'LuatVietnam, ',
          href: 'https://luatvietnam.vn/linh-vuc-khac/diem-dang-chu-y-tai-luat-cong-nghiep-cong-nghe-so-2025-883-103086-article.html',
          text: 'Điểm đáng chú ý tại Luật Công nghiệp công nghệ số 2025.',
          post: '',
        },
        {
          pre: 'Tạp chí Luật sư Việt Nam, ',
          href: 'https://lsvn.vn/tu-01102022-du-lieu-nguoi-dung-internet-tai-viet-nam-se-duoc-luu-tru1661052929.html',
          text: 'Từ 01/10/2022, dữ liệu người dùng Internet tại Việt Nam sẽ được lưu trữ, 21 Aug 2022.',
          post: '',
        },
        {
          pre: 'VnEconomy, ',
          href: 'https://vneconomy.vn/chien-luoc-phat-trien-cap-quang-bien-cua-viet-nam-den-2030-toi-thieu-dua-vao-hoat-dong-them-10-tuyen-cap.htm',
          text: 'Chiến lược phát triển cáp quang biển của Việt Nam đến 2030, 18 Jun 2024.',
          post: '',
        },
        {
          pre: 'Wikipedia, ',
          href: 'https://en.wikipedia.org/wiki/Gia_Lai_province',
          text: 'Gia Lai province',
          post: ' (Resolution 202/2025/QH15).',
        },
        {
          pre: 'Nhà Đầu Tư, ',
          href: 'https://nhadautu.vn/don-dong-von-ty-usd-gia-lai-tang-toc-tren-ban-do-nang-luong-xanh-d103183.html',
          text: 'Đón dòng vốn tỷ USD, Gia Lai tăng tốc trên bản đồ năng lượng xanh, 2 Mar 2026.',
          post: '',
        },
        {
          pre: 'VTC News, ',
          href: 'https://vtcnews.vn/tuyen-cap-bien-lon-nhat-vua-hoat-dong-dan-mang-viet-sap-luot-nhu-bay-ar938050.html',
          text: 'ADC cable enters operation, Apr 2025.',
          post: '',
        },
        {
          pre: 'W.Media, ',
          href: 'https://w.media/sjc2-goes-live-linking-singapore-hk-china-and-japan/',
          text: 'SJC2 goes live linking Singapore, HK, China and Japan, 22 Jul 2025.',
          post: '',
        },
        {
          pre: 'SGGP, ',
          href: 'https://www.sggp.org.vn/vnpt-cap-quang-bien-sjc2-tang-cuong-suc-manh-truyen-dan-quoc-te-post560862.html',
          text: 'VNPT: SJC2 landing at Quy Nhơn, 7 Jul 2020.',
          post: '',
        },
        {
          pre: 'Tạp chí Quản lý nhà nước, ',
          href: 'https://www.quanlynhanuoc.vn/2026/06/16/gia-lai-dinh-huong-thu-hut-dau-tu-chien-luoc-trong-boi-canh-hoi-nhap-quoc-te/',
          text: 'Gia Lai định hướng thu hút đầu tư chiến lược, 16 Jun 2026.',
          post: '',
        },
      ],
    },
    cta: {
      title: 'Talk to us about the campus',
      btn: 'Contact us',
    },
  },
  // Company profile ("/company/") — copy verbatim from the locked mockup
  // (design/screens/company.html). Entity facts are registry data kept verbatim from the
  // demo (BUILD-NOTES / handoff: enterprise code stays public); the Chairman's name is the
  // one TODO(CEO) slot in the table. Milestones and people are all TODO(CEO) content slots
  // (BUILD-NOTES 6) and render inside .c-ceo. The hero lede carries the pisico.vn link, so
  // it is split pre/link/post for markup.
  company: {
    hero: {
      badge: 'Company',
      title: 'Part of the Pisico group',
      ledePre:
        'Pisico Data Center Joint Stock Company (PIDC) is the project company for the campus and works with investors and tenants. It is a member of ',
      ledeLink: 'Pisico',
      ledePost: ' (Tổng Công ty PISICO Bình Định – CTCP).',
    },
    group: {
      eyebrow: 'Company',
      title: 'The Pisico group',
      p1: 'Pisico is a multi-sector group in Gia Lai that traces its history to 1985. Its shares have traded on UPCoM under the ticker PIS since 2016. Its businesses span forest-product processing for export, industrial cluster infrastructure, real estate, trade and services, logistics including Thị Nại Port in Quy Nhơn, workforce development, and agricultural investment, with acacia, rubber and coffee plantations in Vietnam and Laos.',
      p2: 'PIDC is Vietnamese-owned, and its ownership is simple and documented, so tenants deploying advanced GPUs can verify who stands behind the facility.',
      facts: {
        company: {
          dt: 'Company',
          ddLine1: 'Công ty Cổ phần Pisico Data Center',
          ddLine2: 'Pisico Data Center Joint Stock Company',
        },
        short: { dt: 'Short name', dd: 'PIDC' },
        code: { dt: 'Enterprise code', dd: '4101699991' },
        chairman: {
          dt: 'Chairman of the Board',
          dd: "TODO(CEO): confirm showing the Chairman's name",
        },
        member: { dt: 'Member of', dd: 'Tổng Công ty PISICO Bình Định – CTCP' },
        office: {
          dt: 'Registered office',
          dd: '99 Tây Sơn, Quy Nhơn Nam Ward, Gia Lai Province, Vietnam',
        },
        capA: 'PIDC.VN',
        capB: 'REV M',
      },
      figure: {
        title: 'The Pisico group',
        keys: [
          { n: '1', label: 'Forest products for export' },
          { n: '2', label: 'Industrial cluster infrastructure' },
          { n: '3', label: 'Real estate' },
          { n: '4', label: 'Trade and services' },
          { n: '5', label: 'Logistics and Thị Nại Port' },
          { n: '6', label: 'Workforce development' },
          { n: '7', label: 'Agriculture: acacia, rubber, coffee' },
          { n: '8', label: 'AI data centers · PIDC', strong: true },
        ],
        capLink: 'pisico.vn',
        capB: 'PIDC.VN',
      },
    },
    milestones: {
      eyebrow: 'Status',
      title: 'Milestones',
      intro:
        'What is already secured for the campus — the land, the grid connection and the permits — and what is still in progress.',
      items: [
        {
          time: 'TODO(CEO): date — land secured',
          body: 'TODO(CEO): land secured — milestone + status',
        },
        {
          time: 'TODO(CEO): date — grid connection',
          body: 'TODO(CEO): grid connection — milestone + status',
        },
        {
          time: 'TODO(CEO): date — permits',
          body: 'TODO(CEO): permits — milestone + status',
        },
        { time: 'TODO(CEO): date — other', body: 'TODO(CEO): other milestone + status' },
      ],
    },
    people: {
      eyebrow: 'Company',
      title: 'Who stands behind PIDC',
      intro: 'TODO(CEO): 1–2 sentences on the Pisico relationship and governance',
      cards: [
        { role: 'TODO(CEO): role', line: 'TODO(CEO): name + one line' },
        { role: 'TODO(CEO): role', line: 'TODO(CEO): name + one line' },
        { role: 'TODO(CEO): role', line: 'TODO(CEO): name + one line' },
      ],
    },
    cta: {
      title: 'Talk to us about the campus',
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
