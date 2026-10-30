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
