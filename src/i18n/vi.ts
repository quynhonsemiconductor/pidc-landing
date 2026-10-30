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
    eyebrow: 'Thông số khu đất',
    kv: {
      value: '220 kV',
      label: 'Đấu nối lưới',
      src: 'TODO(CEO): nguồn + thời điểm',
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
      value: 'TODO(CEO): giai đoạn hiện tại',
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
          'Sơ đồ vị trí, mobile — khu dự án PIDC tại Gia Lai, lưới 220 kV, tuyến cáp quang đến trạm cập bờ ADC và SJC2 tại Quy Nhơn (LM-01)',
        a11yDesc:
          'Sơ đồ vị trí (mobile). Miền Trung Việt Nam, với khu dự án PIDC tại tỉnh Gia Lai, kết nối lưới 220 kV, và hai tuyến cáp quang riêng hướng đông đến các trạm cập bờ ADC và SJC2 tại Quy Nhơn ven biển.',
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
    site: 'pidc.vn',
  },
  ui: {
    skipLink: 'Tới nội dung',
    siteNav: 'Điều hướng chính',
    footerNav: 'Chân trang',
    languageGroup: 'Language / Ngôn ngữ',
    menu: 'Menu',
    menuOpen: 'Mở menu',
    menuClose: 'Đóng menu',
  },
};

export const vi = dictionary;
