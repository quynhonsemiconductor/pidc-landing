// Vietnamese dictionary — verbatim VI strings from the locked mockup
// (design/screens/index.html, design/content/location-map--vi.svg / --m--vi.svg).
import type { Dictionary } from './en';

const dictionary: Dictionary = {
  brand: {
    name: 'PIDC',
    sub: 'Pisico Data Center',
  },
  nav: {
    project: 'Dự án',
    vietnamGiaLai: 'Việt Nam & Gia Lai',
    aiDataCenters: 'Trung tâm dữ liệu AI',
    company: 'Công ty',
    contact: 'Liên hệ',
  },
  hero: {
    badge: 'Đang phát triển · Gia Lai, Việt Nam',
    title:
      'Khu trung tâm dữ liệu AI quốc tế, xanh, có khả năng chống chịu, phục hồi, tại tỉnh dư thừa năng lượng tái tạo.',
    placeholder: 'Nội dung trang sẽ có trong các PR tiếp theo.',
    lede: 'PIDC đang phát triển khu trung tâm dữ liệu AI theo từng giai đoạn tại Gia Lai, tỉnh có sản lượng điện vượt xa nhu cầu sử dụng. Địa điểm dự án nằm cạnh lưới truyền tải 220 kV, gần hai tuyến cáp quang biển quốc tế cập bờ tại Quy Nhơn.',
    ctaPrimary: 'Liên hệ với chúng tôi',
    ctaSecondary: 'Vì sao chọn Gia Lai',
    figureTitle: 'Xây dựng hạ tầng AI ngay tại nguồn năng lượng.',
  },
  statband: {
    eyebrow: 'Thông số chính',
    kv: {
      value: '220 kV',
      label: 'Đấu nối lưới',
      src: 'TODO(CEO): nguồn + thời điểm',
    },
    cables: {
      value: '2',
      label: 'Tuyến cáp quang biển quốc tế cập bờ tại Quy Nhơn',
      src: 'ADC · SJC2',
    },
    location: {
      value: 'Gia Lai',
      label: 'Địa điểm',
      src: 'Việt Nam',
    },
    distance: {
      value: 'TODO(CEO): khoảng cách km đến trạm cập bờ Quy Nhơn',
      label: 'Khoảng cách đến các trạm cập bờ tại Quy Nhơn',
      src: 'TODO(CEO): nguồn + thời điểm',
    },
    land: {
      value: 'TODO(CEO): diện tích khu đất ha',
      label: 'Diện tích khu đất',
      src: 'TODO(CEO): nguồn + thời điểm',
    },
    phases: {
      value: 'TODO(CEO): số lượng giai đoạn',
      label: 'Giai đoạn xây dựng',
      src: 'TODO(CEO): nguồn + thời điểm',
    },
    stage: {
      value: 'Đang phát triển',
      label: 'Giai đoạn hiện tại',
      src: 'TODO(CEO): nguồn + thời điểm',
    },
  },
  proofs: {
    eyebrow: 'Vì sao chọn Gia Lai',
    title: 'Điện, cáp quang và đất đai tại cùng một nơi',
    items: [
      {
        index: '01',
        kicker: 'Điện',
        title: 'Tỉnh dư thừa điện năng',
        body: 'Các nhà máy điện gió, điện mặt trời và thủy điện tại Gia Lai sản xuất lượng điện vượt xa nhu cầu sử dụng của tỉnh. Địa điểm dự án nằm cạnh lưới truyền tải 220 kV, và Quy hoạch phát triển điện lực quốc gia đã bổ sung năng lực truyền tải cho khu vực. Sử dụng điện ngay tại chỗ còn giúp giảm tải cho các đường dây truyền tải đi xa.',
      },
      {
        index: '02',
        kicker: 'Kết nối',
        title: 'Hai tuyến cáp quang biển quốc tế ngay gần',
        body: 'Quy Nhơn là điểm cập bờ tại Việt Nam của hai tuyến cáp quang biển ADC và SJC2, cùng đi vào hoạt động từ năm 2025. Chúng tôi dự kiến xây dựng tuyến cáp quang riêng biệt từ khu dữ liệu đến từng trạm cập bờ.',
      },
      {
        index: '03',
        kicker: 'Đất đai',
        title: 'Mở rộng trên cùng một khu đất',
        body: 'Dự án được quy hoạch phát triển theo từng giai đoạn trên cùng một khu đất. Các giai đoạn sau mở rộng ngay tại chỗ, không phải bắt đầu lại ở một địa điểm mới.',
      },
    ],
  },
  mapCap: {
    a: 'Việt Nam · Gia Lai · khu dự án',
    b: 'LM-01 · sơ đồ · không theo tỷ lệ',
  },
  moreBtn: 'Tìm hiểu thêm về Việt Nam và Gia Lai',
  campus: {
    eyebrow: 'Dự án',
    title: 'Dành cho điện toán AI mật độ cao, xây dựng theo từng giai đoạn',
    lede: 'Chúng tôi quy hoạch dự án theo nhu cầu của các cụm GPU quy mô lớn: mật độ điện cao, làm mát bằng chất lỏng và kết nối quốc tế trực tiếp. Quy mô từng giai đoạn được xác định theo nhu cầu đã cam kết của khách thuê.',
    btn: 'Trung tâm dữ liệu AI là gì?',
    glossary: [
      { dt: 'Loại tải', dd: 'Huấn luyện và suy luận AI' },
      { dt: 'Tủ rack và làm mát', dd: 'Tủ rack mật độ cao, làm mát bằng chất lỏng' },
      {
        dt: 'Cấp điện',
        dd: 'Trạm biến áp cao áp riêng trong khu dự án, cạnh lưới 220 kV',
      },
      {
        dt: 'Kết nối',
        dd: 'Trung lập nhà mạng, tuyến cáp quang riêng đến cả hai trạm cập bờ',
      },
      { dt: 'Triển khai', dd: 'Theo từng giai đoạn, trên cùng một khu đất' },
      { dt: 'Hiện trạng', dd: 'Đang phát triển' },
    ],
    nda: 'Công suất và thông số kỹ thuật chi tiết được cung cấp theo thỏa thuận bảo mật (NDA).',
  },
  cta: {
    title: 'Trao đổi với chúng tôi về dự án',
    btn: 'Liên hệ với chúng tôi',
  },
  // AI data center explainer — verbatim VI strings from design/screens/ai-data-center.html
  // (lang="vi" spans; the VI mockup keeps the source list identical to EN).
  aidc: {
    pageMeta: {
      title: 'Trung tâm dữ liệu AI là gì? · PIDC',
      description:
        'Hướng dẫn dễ hiểu về trung tâm dữ liệu AI: GPU, công suất mỗi tủ rack, làm mát bằng chất lỏng, và vì sao nguồn điện lưới quyết định nơi xây dựng.',
    },
    hero: {
      badge: 'Tìm hiểu',
      title: 'Trung tâm dữ liệu AI là gì?',
      lede: 'Trung tâm dữ liệu AI là một tòa nhà, hoặc một cụm tòa nhà, được thiết kế để cấp điện và làm mát cho các cụm GPU và chip AI quy mô lớn. Về cơ bản, nó làm cùng công việc như mọi trung tâm dữ liệu, nhưng điện năng và lượng nhiệt trên cùng một diện tích lớn hơn nhiều.',
    },
    tocSummary: 'Trên trang này',
    tocItems: [
      { id: 'what', label: 'Chức năng' },
      { id: 'differs', label: 'Khác biệt' },
      { id: 'power', label: 'Nguồn điện' },
      { id: 'cooling', label: 'Làm mát' },
      { id: 'province', label: 'Lợi ích cho địa phương' },
      { id: 'terms', label: 'Thuật ngữ' },
      { id: 'sources', label: 'Nguồn' },
    ],
    rack: {
      a11yTitle: 'Tủ GPU minh họa',
      a11yDesc:
        'Tủ GPU minh họa: khối nguồn ở trên và dưới, các khay tính toán với GPU gắn tấm làm mát, khay chuyển mạch ở giữa, và đường cấp, hồi chất làm mát ở bên cạnh.',
      keys: [
        'Khay tính toán: GPU gắn tấm làm mát',
        'Khay chuyển mạch kết nối các GPU',
        'Khối nguồn điện',
        'Đường cấp và hồi chất làm mát',
      ],
      capA: 'Tủ GPU minh họa',
      capB: 'Không theo tỷ lệ',
    },
    what: {
      eyebrow: 'Chức năng',
      title: 'Huấn luyện và suy luận',
      training: {
        title: 'Huấn luyện',
        body: 'Hàng nghìn GPU cùng làm việc trong nhiều tuần hoặc nhiều tháng để xây dựng một mô hình AI từ khối dữ liệu lớn. Các GPU phải đặt sát nhau và nối với nhau bằng mạng tốc độ rất cao, nên việc huấn luyện cần những cơ sở lớn, mật độ cao.',
        data: 'Dữ liệu',
        cluster: 'Cụm GPU',
        model: 'Mô hình',
      },
      inference: {
        title: 'Suy luận',
        body: 'Vận hành mô hình đã huấn luyện để trả lời các yêu cầu, từ trợ lý trò chuyện đến nhận dạng hình ảnh. Suy luận chạy liên tục và tăng theo số người dùng, nên cũng cần kết nối tốt tới mạng lưới nơi người dùng truy cập.',
        requests: 'yêu cầu',
        answers: 'trả lời',
        users: 'Người dùng',
        modelOnGpus: 'Mô hình trên GPU',
      },
    },
    differs: {
      eyebrow: 'Khác biệt',
      title: 'Cùng loại công trình, công suất gấp nhiều lần',
      chart: {
        title: 'Công suất điện của một tủ rack, kW',
        rows: [
          {
            value: '≈ 8',
            label: 'Tủ rack trung bình tại các trung tâm dữ liệu trên thế giới, 2024',
            cite: 1,
          },
          { value: '132', label: 'Một tủ NVIDIA GB200 NVL72 gồm 72 GPU', cite: 2 },
        ],
      },
      intro:
        'Một tủ GPU thế hệ hiện nay tiêu thụ điện gấp khoảng 16 lần một tủ rack trung bình. Điều đó thay đổi toàn bộ hệ thống cấp điện và làm mát xung quanh nó.',
      table: {
        feature: 'Tiêu chí',
        conventional: 'Trung tâm dữ liệu truyền thống',
        ai: 'Trung tâm dữ liệu AI',
        hConventional: 'Truyền thống',
        hAi: 'AI',
        rows: [
          {
            th: 'Thiết bị chính',
            conv: 'Máy chủ CPU và thiết bị lưu trữ',
            ai: 'Máy chủ GPU liên kết thành cụm lớn',
          },
          {
            th: 'Công suất mỗi tủ',
            conv: 'Phần lớn dưới 10 kW',
            ai: 'Hàng chục kW; khoảng 130 kW với tủ GPU mới nhất',
          },
          {
            th: 'Làm mát',
            conv: 'Chủ yếu bằng không khí',
            ai: 'Chất lỏng dẫn trực tiếp tới chip, kết hợp không khí cho phần còn lại',
          },
          {
            th: 'Mạng',
            conv: 'Phục vụ lưu lượng tới và từ người dùng',
            ai: 'Kết nối tốc độ rất cao giữa các GPU trong cụm, cùng kết nối ra người dùng và đám mây',
          },
          { th: 'Quy mô', conv: 'Vài MW đến vài chục MW', ai: 'Vài chục đến hàng trăm MW' },
          {
            th: 'Đấu nối lưới',
            conv: 'Trung áp hoặc 110 kV',
            ai: 'Cao áp, thường 110–220 kV trở lên',
          },
        ],
      },
    },
    power: {
      eyebrow: 'Nguồn điện',
      title: 'Vì sao nguồn điện quyết định nơi xây dựng',
      p1: 'Các trung tâm dữ liệu đã tiêu thụ khoảng 415 TWh điện năm 2024, tương đương khoảng 1,5% điện năng toàn cầu. Cơ quan Năng lượng Quốc tế (IEA) dự báo con số này sẽ tăng hơn gấp đôi, lên khoảng 945 TWh vào năm 2030, với AI là động lực chính.',
      chart: {
        title: 'Điện năng tiêu thụ của trung tâm dữ liệu toàn cầu, TWh',
        rows: [
          { value: '415', label: 'Năm 2024' },
          { value: '≈ 945', label: 'Năm 2030, dự báo của IEA' },
        ],
      },
      p2: 'Vì vậy, câu hỏi đầu tiên với bất kỳ khu dữ liệu AI nào là nguồn điện: đấu nối lưới cao áp còn dư công suất, có khả năng tăng thêm theo thời gian, và nguồn cấp ổn định suốt ngày đêm. Đất đai, nhà xưởng và thiết bị đều có thể thu xếp; còn một đấu nối cao áp mới có thể mất nhiều năm.',
      p3: 'Đó là lý do PIDC chọn địa điểm nằm cạnh lưới điện 220  kV.',
      seeSite: 'Xem địa điểm',
    },
    cooling: {
      eyebrow: 'Làm mát',
      title: 'Làm mát và nguồn nước',
      p1: 'Tủ GPU tỏa nhiệt quá lớn để chỉ làm mát bằng không khí. Các hệ thống thế hệ hiện nay như GB200 NVL72 được làm mát bằng chất lỏng: chất làm mát chảy qua các tấm tản nhiệt gắn trên chip và mang nhiệt ra ngoài.',
      loop: {
        a11yTitle: 'Vòng làm mát bằng chất lỏng',
        a11yDesc:
          'Vòng làm mát bằng chất lỏng: chất làm mát nhận nhiệt từ tấm làm mát trên chip, đưa về bộ phân phối chất làm mát (CDU), rồi chuyển sang vòng thứ hai để thải nhiệt ra ngoài trời qua thiết bị giải nhiệt khô hoặc tháp giải nhiệt.',
        coldPlateA: 'Tấm làm mát',
        coldPlateB: 'trên chip',
        cdu: 'CDU',
        cduSub: 'bộ phân phối chất làm mát',
        dryA: 'Giải nhiệt khô',
        dryB: 'hoặc tháp giải nhiệt',
        rack: 'tủ rack',
        outdoors: 'ngoài trời',
        swCold: 'Chất làm mát nguội',
        swWarm: 'Chất làm mát nóng',
        capA: 'Vòng làm mát bằng chất lỏng',
        capB: 'Sơ đồ',
      },
      p2: 'Bên ngoài, lượng nhiệt này được thải ra qua thiết bị giải nhiệt khô, tháp giải nhiệt hoặc kết hợp cả hai. Thiết kế vòng kín tuần hoàn cùng một lượng chất làm mát và dùng rất ít nước. Thiết kế bay hơi dùng nhiều nước hơn nhưng tốn ít điện hơn. Lựa chọn phù hợp phụ thuộc vào khí hậu và nguồn nước tại chỗ.',
      p3: 'Hiệu suất được đo bằng chỉ số PUE (hiệu quả sử dụng điện năng): tổng điện năng của cơ sở chia cho điện năng của thiết bị tính toán. PUE bằng 1,0 nghĩa là không có tổn hao nào. Mức trung bình của ngành năm 2024 là 1,56.',
      chart: {
        title: 'Điện năng lấy từ lưới cho 100 kW thiết bị tính toán, kW',
        rows: [
          {
            value: '156',
            label: 'PUE 1,56, mức trung bình của ngành năm 2024',
            cite: 1,
          },
          { value: '100', label: 'PUE 1,0, không có tổn hao' },
        ],
        swIt: 'Thiết bị tính toán',
        swOver: 'Làm mát và tổn hao khác',
      },
    },
    province: {
      eyebrow: 'Lợi ích cho địa phương',
      title: 'Một khu dữ liệu mang lại gì cho địa phương',
      items: [
        'Nguồn vốn lớn đầu tư vào nhà xưởng, hệ thống điện, làm mát và cáp quang.',
        'Một khách hàng tiêu thụ điện ổn định ngay tại địa phương cho nguồn điện sản xuất trong tỉnh.',
        'Việc làm kỹ thuật về điện, cơ điện, mạng và vận hành. Trung tâm dữ liệu sử dụng ít lao động hơn nhà máy có cùng mức vốn, nhưng là lao động có chuyên môn kỹ thuật.',
        'Hạ tầng điện và cáp quang mới để các doanh nghiệp số khác cùng tận dụng.',
      ],
    },
    terms: {
      eyebrow: 'Thuật ngữ',
      title: 'Các thuật ngữ thường gặp',
      glossary: [
        { dt: 'GPU', dd: 'Bộ xử lý đồ họa: loại chip thực hiện phần lớn các phép tính AI.' },
        {
          dt: 'Tủ rack',
          dd: 'Tủ tiêu chuẩn chứa máy chủ. Mật độ công suất thường được tính theo từng tủ.',
        },
        {
          dt: 'MW IT',
          dd: 'Công suất điện dành cho thiết bị tính toán, chưa tính làm mát và tổn hao. Quy mô trung tâm dữ liệu thường được nêu theo chỉ số này.',
        },
        {
          dt: 'PUE',
          dd: 'Hiệu quả sử dụng điện năng: tổng điện năng của cơ sở chia cho điện năng thiết bị IT. Càng thấp càng tốt.',
        },
        {
          dt: 'Làm mát bằng chất lỏng',
          dd: 'Chất làm mát được dẫn tới các tấm tản nhiệt trên chip, giải nhiệt hiệu quả hơn nhiều so với không khí.',
        },
        {
          dt: 'Colocation',
          dd: 'Cho khách hàng thuê không gian, điện và làm mát để đặt máy chủ của chính họ.',
        },
        {
          dt: 'Hyperscaler',
          dd: 'Nhà cung cấp điện toán đám mây quy mô rất lớn, vận hành hệ thống trung tâm dữ liệu riêng trên toàn cầu.',
        },
        {
          dt: 'Dự phòng (N+1, 2N)',
          dd: 'Công suất dự phòng để một sự cố không làm gián đoạn dịch vụ. N+1 có thêm một thiết bị dự phòng; 2N nhân đôi toàn bộ hệ thống.',
        },
        { dt: 'Độ trễ', dd: 'Thời gian dữ liệu đi qua mạng, tính bằng mili giây.' },
        {
          dt: 'Trạm cập bờ',
          dd: 'Nơi tuyến cáp quang biển lên bờ và kết nối với mạng trên đất liền.',
        },
      ],
    },
    sources: {
      eyebrow: 'Nguồn',
      title: 'Nguồn số liệu',
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
      title: 'Bạn có câu hỏi về dự án?',
      btn: 'Liên hệ với chúng tôi',
    },
  },
  // Why Vietnam, why Gia Lai — verbatim VI strings from design/screens/why-vietnam--vi.html
  // (the VI mockup keeps the source list identical to EN).
  whyv: {
    hero: {
      badge: 'Địa điểm',
      title: 'Vì sao Việt Nam, vì sao Gia Lai',
      lede: 'Nhu cầu điện toán của Việt Nam tăng nhanh, và luật pháp hiện xác định trung tâm dữ liệu là lĩnh vực ưu tiên. Trong cả nước, Gia Lai hội tụ nguồn điện tái tạo lớn cùng hai tuyến cáp quang biển quốc tế cập bờ tại Quy Nhơn.',
    },
    tocSummary: 'Trên trang này',
    tocItems: [
      { id: 'vietnam', label: 'Việt Nam' },
      { id: 'gia-lai', label: 'Gia Lai' },
      { id: 'pidc-site', label: 'Vị trí của PIDC' },
      { id: 'sources', label: 'Nguồn' },
    ],
    vietnam: {
      eyebrow: 'Việt Nam',
      title: 'Thị trường tăng trưởng, có luật pháp hỗ trợ',
      items: [
        {
          index: '01',
          kicker: 'Nhu cầu',
          title: 'Kinh tế số tăng trưởng nhanh',
          stat: { figure: 'US$39B', label: '+17% năm 2025 · 81% dùng AI hằng ngày' },
          cites: [1],
          body: 'Kinh tế số Việt Nam ước đạt 39 tỷ USD tổng giá trị hàng hóa (GMV) năm 2025, tăng 17% so với năm trước. Người dùng Việt Nam cũng dẫn đầu Đông Nam Á về tỷ lệ sử dụng công cụ AI hằng ngày, ở mức 81%.',
        },
        {
          index: '02',
          kicker: 'Pháp luật',
          title: 'Trung tâm dữ liệu là lĩnh vực ưu tiên',
          stat: { figure: '71/2025/QH15', label: 'Hiệu lực từ 01/01/2026' },
          cites: [2],
          body: 'Luật Công nghiệp công nghệ số (số 71/2025/QH15), có hiệu lực từ ngày 01/01/2026, đưa trung tâm dữ liệu và trí tuệ nhân tạo vào nhóm lĩnh vực ưu tiên hưởng ưu đãi đầu tư.',
        },
        {
          index: '03',
          kicker: 'Dữ liệu',
          title: 'Một số dữ liệu phải lưu trữ trong nước',
          stat: { figure: '53/2022/NĐ-CP', label: 'Hiệu lực từ tháng 10/2022' },
          cites: [3],
          body: 'Từ tháng 10/2022, Nghị định 53/2022/NĐ-CP yêu cầu doanh nghiệp trong nước, và doanh nghiệp nước ngoài trong một số trường hợp, lưu trữ một số loại dữ liệu người dùng tại Việt Nam.',
        },
        {
          index: '04',
          kicker: 'Kết nối',
          title: 'Thêm nhiều tuyến cáp quốc tế',
          stat: { figure: '15+', label: 'tuyến cáp vào 2030 · trên 350 Tbps' },
          cites: [4],
          body: 'Chiến lược phát triển hệ thống cáp quang quốc tế của Việt Nam đặt mục tiêu đưa vào hoạt động thêm tối thiểu 10 tuyến cáp quang biển mới đến năm 2030, nâng tổng số lên ít nhất 15 tuyến với dung lượng tối thiểu 350 Tbps.',
        },
      ],
    },
    gialai: {
      eyebrow: 'Gia Lai',
      title: 'Từ cao nguyên ra biển',
      intro:
        'Sau khi hợp nhất với tỉnh Bình Định năm 2025, tỉnh Gia Lai trải dài từ Tây Nguyên ra đến biển, với trung tâm hành chính đặt tại Quy Nhơn.',
      power: {
        index: '01',
        kicker: 'Điện',
        title: 'Nguồn điện tái tạo lớn',
        body: 'Tỉnh hiện có 85 nhà máy điện tái tạo đang vận hành với tổng công suất 4.179 MW, cung cấp hơn 15 tỷ kWh điện mỗi năm cho lưới điện quốc gia. Theo Quy hoạch điện VIII điều chỉnh, công suất điện tái tạo của tỉnh sẽ đạt khoảng 9.657 MW vào năm 2035.',
      },
      chart: {
        title: 'Công suất điện tái tạo đang vận hành, MW',
        axisMax: '4,179 MW',
        keys: [
          { n: '1', value: '2,516', label: 'thủy điện' },
          { n: '2', value: '1,048', label: 'điện gió' },
          { n: '3', value: '485', label: 'điện mặt trời' },
          { n: '4', value: '130', label: 'sinh khối' },
        ],
      },
      items: [
        {
          index: '02',
          kicker: 'Kết nối',
          title: 'Hai tuyến cáp quốc tế cập bờ tại Quy Nhơn',
          stat: { figure: 'ADC · SJC2', label: '04/2025 · 07/2025' },
          cites: [7, 8, 9],
          body: 'Tuyến ADC do Viettel khai thác tại Việt Nam, đi vào hoạt động từ tháng 4/2025. Tuyến SJC2, với VNPT là đối tác Việt Nam, đi vào hoạt động tháng 7/2025; trục chính nối Singapore, Hồng Kông, Trung Quốc và Nhật Bản.',
        },
        {
          index: '03',
          kicker: 'Chính sách',
          title: 'Địa phương chủ động thu hút',
          stat: {
            figure: 'AI · trung tâm dữ liệu',
            label: 'Lĩnh vực ưu tiên thu hút đầu tư',
          },
          cites: [10],
          body: 'Gia Lai đưa công nghệ số, trí tuệ nhân tạo và trung tâm dữ liệu vào nhóm lĩnh vực ưu tiên trong hoạt động xúc tiến đầu tư.',
        },
      ],
    },
    fit: {
      eyebrow: 'Vị trí của PIDC',
      title: 'Nguồn điện và cáp quang tại một địa điểm',
      intro:
        'Địa điểm của PIDC nằm ở vùng ven biển tỉnh Gia Lai, cạnh lưới truyền tải 220 kV và gần cả hai trạm cập bờ cáp quang biển. Thông tin chi tiết về địa điểm được cung cấp theo thỏa thuận bảo mật.',
      mapCapA: 'Sơ đồ vị trí',
      mapCapB: 'Không theo tỷ lệ',
      btn: 'Xem kế hoạch dự án',
    },
    sources: {
      eyebrow: 'Nguồn',
      title: 'Nguồn số liệu',
      items: [
        {
          pre: 'Google, Temasek and Bain, e-Conomy SEA 2025, as reported by ',
          href: 'https://ven.congthuong.vn/google-vietnam-s-digital-economy-to-reach-usd-39-billion-in-2025-58364.html',
          text: 'Vietnam Economic News (Công Thương), 27/11/2025.',
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
          text: 'Từ 01/10/2022, dữ liệu người dùng Internet tại Việt Nam sẽ được lưu trữ, 21/08/2022.',
          post: '',
        },
        {
          pre: 'VnEconomy, ',
          href: 'https://vneconomy.vn/chien-luoc-phat-trien-cap-quang-bien-cua-viet-nam-den-2030-toi-thieu-dua-vao-hoat-dong-them-10-tuyen-cap.htm',
          text: 'Chiến lược phát triển cáp quang biển của Việt Nam đến 2030, 18/06/2024.',
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
          text: 'Đón dòng vốn tỷ USD, Gia Lai tăng tốc trên bản đồ năng lượng xanh, 02/03/2026.',
          post: '',
        },
        {
          pre: 'VTC News, ',
          href: 'https://vtcnews.vn/tuyen-cap-bien-lon-nhat-vua-hoat-dong-dan-mang-viet-sap-luot-nhu-bay-ar938050.html',
          text: 'ADC cable enters operation, 04/2025.',
          post: '',
        },
        {
          pre: 'W.Media, ',
          href: 'https://w.media/sjc2-goes-live-linking-singapore-hk-china-and-japan/',
          text: 'SJC2 goes live linking Singapore, HK, China and Japan, 22/07/2025.',
          post: '',
        },
        {
          pre: 'SGGP, ',
          href: 'https://www.sggp.org.vn/vnpt-cap-quang-bien-sjc2-tang-cuong-suc-manh-truyen-dan-quoc-te-post560862.html',
          text: 'VNPT: SJC2 landing at Quy Nhơn, 07/07/2020.',
          post: '',
        },
        {
          pre: 'Tạp chí Quản lý nhà nước, ',
          href: 'https://www.quanlynhanuoc.vn/2026/06/16/gia-lai-dinh-huong-thu-hut-dau-tu-chien-luoc-trong-boi-canh-hoi-nhap-quoc-te/',
          text: 'Gia Lai định hướng thu hút đầu tư chiến lược, 16/06/2026.',
          post: '',
        },
      ],
    },
    cta: {
      title: 'Trao đổi với chúng tôi về dự án',
      btn: 'Liên hệ với chúng tôi',
    },
  },
  // Công ty ("/company/") — chuỗi verbatim từ mockup (design/screens/company.html); các
  // chỗ trống TODO(CEO): … bị ẩn khi dựng trang (pruneTodo).
  company: {
    pageMeta: {
      title: 'Công ty · PIDC',
      description:
        'PIDC — Công ty Cổ phần Pisico Data Center: công ty dự án khu trung tâm dữ liệu AI tại Gia Lai, thành viên Tổng Công ty PISICO Bình Định.',
    },
    hero: {
      badge: 'Công ty',
      title: 'Thành viên Tổng Công ty PISICO Bình Định',
      ledePre:
        'Công ty Cổ phần Pisico Data Center (PIDC) là pháp nhân dự án của khu dữ liệu, làm việc với các nhà đầu tư và khách thuê. PIDC là công ty thành viên của ',
      ledeLink: 'Tổng Công ty PISICO Bình Định – CTCP',
      ledePost: ' (Pisico).',
    },
    group: {
      eyebrow: 'Công ty',
      title: 'Tập đoàn Pisico',
      p1: 'Pisico là doanh nghiệp đa ngành tại Gia Lai, có lịch sử từ năm 1985. Cổ phiếu của Pisico giao dịch trên UPCoM với mã PIS từ năm 2016. Hoạt động của Tổng công ty gồm chế biến lâm sản xuất khẩu, hạ tầng cụm công nghiệp, bất động sản, thương mại – dịch vụ, logistics (trong đó có Cảng Thị Nại tại Quy Nhơn), phát triển nguồn nhân lực và đầu tư nông nghiệp, với các vùng trồng keo, cao su và cà phê tại Việt Nam và Lào.',
      p2: 'PIDC thuộc sở hữu Việt Nam, với cơ cấu sở hữu đơn giản và hồ sơ rõ ràng, giúp khách hàng triển khai GPU tiên tiến dễ dàng xác minh chủ sở hữu hưởng lợi của cơ sở.',
      facts: {
        company: {
          dt: 'Tên công ty',
          ddLine1: 'Công ty Cổ phần Pisico Data Center',
          ddLine2: 'Pisico Data Center Joint Stock Company',
        },
        short: { dt: 'Tên viết tắt', dd: 'PIDC' },
        code: { dt: 'Mã số doanh nghiệp', dd: '4101699991' },
        chairman: {
          dt: 'Chủ tịch HĐQT',
          dd: 'Lâm Duy Việt',
        },
        member: { dt: 'Thành viên của', dd: 'Tổng Công ty PISICO Bình Định – CTCP' },
        office: {
          dt: 'Trụ sở chính',
          dd: '99 Tây Sơn, phường Quy Nhơn Nam, tỉnh Gia Lai, Việt Nam',
        },
        capA: 'PIDC.VN',
        capB: 'Thông tin pháp nhân',
      },
      figure: {
        title: 'Các lĩnh vực của Pisico',
        keys: [
          { n: '1', label: 'Chế biến lâm sản xuất khẩu' },
          { n: '2', label: 'Hạ tầng cụm công nghiệp' },
          { n: '3', label: 'Bất động sản' },
          { n: '4', label: 'Thương mại – dịch vụ' },
          { n: '5', label: 'Logistics và Cảng Thị Nại' },
          { n: '6', label: 'Phát triển nguồn nhân lực' },
          { n: '7', label: 'Nông nghiệp: keo, cao su, cà phê' },
          { n: '8', label: 'Trung tâm dữ liệu AI · PIDC', strong: true },
        ],
        capLink: 'pisico.vn',
        capB: 'PIDC.VN',
      },
    },
    milestones: {
      eyebrow: 'Hiện trạng',
      title: 'Các cột mốc',
      intro:
        'Trạng thái đất đai, đấu nối lưới điện và giấy phép của dự án — những gì đã được xác nhận hoàn tất, và những gì đang triển khai.',
      items: [
        {
          time: 'TODO(CEO): ngày tháng — đất đai',
          body: 'TODO(CEO): đất dự án — cột mốc và trạng thái',
        },
        {
          time: 'TODO(CEO): ngày tháng — đấu nối lưới điện',
          body: 'TODO(CEO): đấu nối lưới điện — cột mốc và trạng thái',
        },
        {
          time: 'TODO(CEO): ngày tháng — giấy phép',
          body: 'TODO(CEO): giấy phép — cột mốc và trạng thái',
        },
        { time: 'TODO(CEO): ngày tháng — mục khác', body: 'TODO(CEO): cột mốc khác và trạng thái' },
      ],
    },
    cta: {
      title: 'Trao đổi với chúng tôi về dự án',
      btn: 'Liên hệ với chúng tôi',
    },
  },
  // Liên hệ ("/vi/contact/") — chuỗi lấy nguyên văn từ mockup
  // (design/screens/contact--vi.html). Nút gửi giữ trạng thái vô hiệu hóa (chưa có backend);
  // mailto dự phòng chỉ dùng CONTACT_EMAIL (src/site.ts).
  contact: {
    pageMeta: {
      title: 'Liên hệ · PIDC',
      description:
        'Trao đổi với PIDC về khu trung tâm dữ liệu AI tại Gia Lai: đối tác vốn, khách thuê hạ tầng AI, đối tác kỹ thuật và cơ quan nhà nước.',
    },
    hero: {
      badge: 'Liên hệ',
      title: 'Trao đổi với chúng tôi về dự án',
      lede: 'Chúng tôi mong được trao đổi với đối tác vốn, khách thuê hạ tầng AI, và đối tác kỹ thuật hoặc cơ quan nhà nước.',
    },
    email: {
      eyebrow: 'Liên hệ',
      title: 'Liên hệ qua email',
    },
    office: {
      eyebrow: 'Liên hệ',
      title: 'Văn phòng',
      address: '99 Tây Sơn, phường Quy Nhơn Nam, tỉnh Gia Lai, Việt Nam',
      nda: 'Thông tin chi tiết về dự án được cung cấp cho các đối tác phù hợp trên cơ sở thỏa thuận bảo mật.',
    },
  },
  diagrams: {
    sld: {
      a11yTitle: 'Sơ đồ nguyên lý (SLD-00)',
      a11yDesc:
        'Sơ đồ nguyên lý. Các nhà máy điện gió, điện mặt trời và thủy điện cấp điện vào lưới 220 kV. Khu dữ liệu PIDC nhận điện qua trạm biến áp riêng, hạ xuống trung áp với hai nhánh cấp A và B cho khu máy chủ AI, và kết nối bằng hai tuyến cáp quang riêng đến các trạm cập bờ cáp ADC và SJC2 tại Quy Nhơn.',
      generation: 'NGUỒN PHÁT ĐIỆN',
      wind: 'Gió',
      solar: 'Mặt trời',
      hydro: 'Thủy điện',
      campus: 'KHU DỮ LIỆU PIDC',
      substation: 'Trạm biến áp',
      hvMv: 'cao áp / trung áp',
      mv: 'Trung áp',
      halls: 'Khu máy chủ AI',
      fiber: 'Cáp quang',
      landings: 'Trạm cập bờ',
      quyNhon: 'Quy Nhơn',
      grid: 'lưới điện',
      sheet: 'SLD-00 · SƠ ĐỒ NGUYÊN LÝ · KHÔNG THEO TỶ LỆ',
      keys: [
        'Điện từ lưới 220 kV về trạm biến áp của dự án',
        'Cáp quang theo tuyến riêng đến từng trạm cập bờ',
        'Ranh giới khu đất của PIDC',
      ],
    },
    terrain: {
      a11yTitle: 'Mặt cắt A–A · tây sang đông',
      a11yDesc:
        'Mặt cắt sơ đồ tỉnh Gia Lai từ tây sang đông: nguồn phát điện trên cao nguyên, đường dây truyền tải qua vùng đèo xuống vùng ven biển, và các trạm cập bờ cáp quang biển tại Quy Nhơn.',
      zones: [
        {
          name: 'Cao nguyên',
          desc: 'Thủy điện, điện gió và điện mặt trời trên cao nguyên.',
        },
        {
          name: 'Vùng đồi',
          desc: 'Đường dây truyền tải đưa điện xuống vùng ven biển.',
        },
        {
          name: 'Ven biển · Quy Nhơn',
          desc: 'Lưới điện, cảng biển và hai trạm cập bờ cáp ADC, SJC2.',
        },
      ],
      capA: 'Mặt cắt A–A · tây sang đông',
      capB: 'Sơ đồ, không theo tỷ lệ',
    },
    iso: {
      a11yTitle: 'Hình minh họa ý tưởng khu dữ liệu',
      a11yDesc:
        'Hình minh họa ý tưởng khu dữ liệu: nhà dữ liệu đầu tiên với hệ thống giải nhiệt, các giai đoạn sau trên cùng khu đất, trạm biến áp trong khu dự án đấu nối lưới điện, và hai tuyến cáp quang riêng biệt.',
      keys: [
        'Nhà dữ liệu giai đoạn 1',
        'Các giai đoạn sau trên cùng khu đất',
        'Trạm biến áp cao áp trong khu dự án',
        'Đấu nối lưới điện',
        'Tuyến cáp quang riêng đến các trạm cập bờ',
        'Hệ thống giải nhiệt',
      ],
      capA: 'Hình minh họa ý tưởng',
      capB: 'Không phải thiết kế · không theo tỷ lệ',
    },
    lm: {
      desktop: {
        a11yTitle:
          'Sơ đồ vị trí — khu dự án PIDC tại Gia Lai, lưới 220 kV, hai tuyến cáp quang đến trạm cập bờ ADC và SJC2 tại Quy Nhơn (LM-01)',
        a11yDesc:
          'Sơ đồ vị trí. Miền Trung Việt Nam, với khu dự án PIDC tại tỉnh Gia Lai, kết nối lưới 220 kV, và hai tuyến cáp quang riêng hướng đông đến các trạm cập bờ ADC và SJC2 tại Quy Nhơn ven biển.',
        name: 'VIỆT NAM',
        kv: 'Lưới 220 kV',
        prov: 'Tỉnh Gia Lai',
        site: 'Khu dự án',
        siteSecondLine: 'PIDC',
        coast: 'Quy Nhơn',
        stationA: 'Trạm cập bờ ADC',
        stationB: 'Trạm cập bờ SJC2',
        sea: 'BIỂN ĐÔNG',
      },
      mobile: {
        a11yTitle:
          'Sơ đồ vị trí, bản di động — khu dự án PIDC tại Gia Lai, lưới 220 kV, tuyến cáp quang đến trạm cập bờ ADC và SJC2 tại Quy Nhơn (LM-01)',
        a11yDesc:
          'Sơ đồ vị trí (bản di động). Miền Trung Việt Nam, với khu dự án PIDC tại tỉnh Gia Lai, kết nối lưới 220 kV, và hai tuyến cáp quang riêng hướng đông đến các trạm cập bờ ADC và SJC2 tại Quy Nhơn ven biển.',
        kv: 'Lưới 220 kV',
        site: 'Khu dự án PIDC',
        coast: 'Quy Nhơn',
        stationA: 'ADC',
        stationB: 'SJC2',
      },
    },
  },
  footer: {
    tagline:
      'Khu trung tâm dữ liệu AI quốc tế, xanh, có khả năng chống chịu, phục hồi, tại tỉnh dư thừa năng lượng tái tạo.',
    legal: '© 2026 Công ty Cổ phần Pisico Data Center',
    status: 'Đang phát triển · Gia Lai, Việt Nam',
    navTitle: 'Trang',
    contactTitle: 'Liên hệ',
  },
  ui: {
    skipLink: 'Tới nội dung',
    siteNav: 'Điều hướng chính',
    footerNav: 'Chân trang',
    menu: 'Menu',
    menuOpen: 'Mở menu',
    menuClose: 'Đóng menu',
  },
};

export const vi = dictionary;
