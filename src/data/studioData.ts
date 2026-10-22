export interface ConceptItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  palette: string[];
  features: string[];
}

export interface VideoReel {
  id: string;
  title: string;
  concept: string;
  videoUrl: string;
  posterImage?: string;
  durationLabel: string;
  description: string;
}

export interface PackageItem {
  id: string;
  name: string;
  isPopular?: boolean;
  idealFor: string;
  highlights: string[];
  includes: string[];
  ctaLabel: string;
}

export const STUDIO_INFO = {
  name: 'La STUDIO',
  subName: 'Tiệm Ảnh Nhà La',
  tagline: 'Chụp Ảnh Nàng Thơ & Nghệ Thuật Độc Bản',
  city: 'TP. Hồ Chí Minh',
  phoneDisplay: '093 141 95 38',
  phoneRaw: '84931419538',
  zaloUrl: 'https://zalo.me/0931419538',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61590492897254',
  mapsUrl: 'https://www.google.com/maps/place/La+STUDIO+-+TI%E1%BB%86M+%E1%BA%A2NH+NH%C3%80+LA/@10.7644669,106.5894474,13z/data=!4m10!1m2!2m1!1zTGEgc3R1ZGlvLSBjaOG7pXAg4bqjbmggbsOgbmcgdGjGoQ!3m6!1s0x31752f6d4fc9e8dd:0xa29f7f1f34c72bf6!8m2!3d10.7644669!4d106.6656651!15sCiJMYSBzdHVkaW8tIGNo4bulcCDhuqNuaCBuw6BuZyB0aMahWiMiIWxhIHN0dWRpbyBjaOG7pXAg4bqjbmggbsOgbmcgdGjGoZIBDW1ha2V1cF9hcnRpc3SaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMjF3WmsweVZtcGlWazUxVmtVME1HUkdSbXhPVjJ4M1kydDRSRk13UlJBQuABAPoBBAgAECo!16s%2Fg%2F11z90t47p7?entry=ttu',
  operatingHours: '09:00 - 21:00 (Mở cửa theo lịch hẹn)',
  heroPortrait: '/images/843042263_122147698131349763_3697492828306771257_n.jpg',
  heroSecondary: '/images/785200900_122136165975349763_584846808875841309_n.jpg',
  brandImage: '/images/767370912_122131519215349763_5245660856348000594_n.jpg',
};

export const CONCEPTS: ConceptItem[] = [
  {
    id: 'nang-tho',
    title: 'Nàng Thơ Trong Trẻo',
    category: 'Signature',
    tagline: 'Vẻ đẹp tinh khôi, ánh mắt mơ màng giữa sắc hoa',
    description: 'Concept biểu tượng tại Nhà La dành cho những cô gái muốn hóa thân thành đóa hoa thanh thuần, kết hợp váy ren trắng, voan mềm và nghệ thuật cắm hoa tinh tế.',
    image: '/images/843042263_122147698131349763_3697492828306771257_n.jpg',
    palette: ['#FAF8F5', '#F3D3D7', '#8E9A7B'],
    features: ['Váy nàng thơ & phụ kiện hoa tươi', 'Layout makeup trong trẻo chuẩn Hàn/Douyin', 'Tone màu ấm sáng tự nhiên']
  },
  {
    id: 'nghe-thuat',
    title: 'Nghệ Thuật & Glamour',
    category: 'Fine Art',
    tagline: 'Ánh sáng tạo khối, thần thái quyến rũ vượt thời gian',
    description: 'Tận dụng kỹ thuật ánh sáng ven tóc (rim light) và tương phản cao để khắc họa đường nét cơ thể, góc nghiêng kiêu kỳ cùng khí chất độc bản của bạn.',
    image: '/images/767370912_122131519215349763_5245660856348000594_n.jpg',
    palette: ['#221F1F', '#D89E6E', '#F5EFEB'],
    features: ['Set ánh sáng studio nghệ thuật chuyên sâu', 'Tạo hình cá tính, tôn dáng và đường nét', 'Chỉnh sửa da chuẩn tạp chí thời trang']
  },
  {
    id: 'co-trang',
    title: 'Nàng Thơ Phương Đông',
    category: 'Heritage',
    tagline: 'Nét dịu dàng Á Đông trong tà áo dài & cổ phục',
    description: 'Sự hòa quyện giữa nét truyền thống và góc nhìn thẩm mỹ hiện đại. Từng nếp áo, chiếc trâm cài tóc đều tôn lên vẻ đài các, e ấp đầy chiều sâu.',
    image: '/images/842822144_122147698179349763_861670177633054892_n.jpg',
    palette: ['#EFE9E1', '#C4B6A3', '#68745E'],
    features: ['Trang phục cổ phong / áo dài cách điệu', 'Làm tóc & trâm cài hoa thủ công', 'Bối cảnh tranh lụa & hoa thủy mặc']
  },
  {
    id: 'chan-dung',
    title: 'Chân Dung & Profile',
    category: 'Portrait',
    tagline: 'Bắt trọn thần thái tự nhiên, khẳng định phong cách',
    description: 'Thích hợp cho ảnh sinh nhật cá nhân, kỷ niệm tuổi thanh xuân hoặc profile ấn tượng. Chúng tôi lắng nghe mong muốn của bạn để tạo ra phong cách chuẩn nhất.',
    image: '/images/846432725_122148712779349763_3948879404732246950_n.jpg',
    palette: ['#221F1F', '#FAF8F5', '#968E8C'],
    features: ['Styling trang phục thời thượng theo gu riêng', 'Tối ưu góc mặt đẹp nhất của bạn', 'Góc máy bắt khoảnh khắc tự nhiên']
  },
  {
    id: 'ky-niem-doi',
    title: 'Kỷ Niệm & Cặp Đôi',
    category: 'Moments',
    tagline: 'Lưu giữ những rung động ngọt ngào và ấm áp',
    description: 'Không cần tạo dáng gượng gạo, buổi chụp là một buổi hẹn hò ngập tràn tiếng cười để lưu giữ những cái ôm, ánh nhìn và câu chuyện tình yêu của hai bạn.',
    image: '/images/844190551_122148221235349763_79926341068092580_n.jpg',
    palette: ['#F5EFEB', '#DCD0C2', '#96705B'],
    features: ['Đồng điệu trang phục và tone màu', 'Bắt trọn khoảnh khắc tình cảm tự nhiên', 'Không gian studio ấm cúng, thư giãn']
  }
];

export const VIDEO_REELS: VideoReel[] = [
  {
    id: 'reel-1',
    title: 'Thần Thái Nàng Thơ Trong Trẻo',
    concept: 'Signature Muse Reel',
    videoUrl: '/video/FDown.vn_TikTok_Video_Downloader_eaa5.mp4',
    durationLabel: 'Thành phẩm Video 4K',
    description: 'Thước phim bắt trọn từng chuyển động tóc bay, ánh mắt mơ màng và thần thái cuốn hút dưới làn ánh sáng studio nghệ thuật.'
  },
  {
    id: 'reel-2',
    title: 'Chuyển Động Nghệ Thuật & Cảm Xúc',
    concept: 'Fine Art Motion Lookbook',
    videoUrl: '/video/FDown.vn_TikTok_Video_Downloader_193f.mp4',
    durationLabel: 'Thành phẩm Video 4K',
    description: 'Ghi lại vẻ đẹp biến hóa đa dạng của nàng thơ: từ nét e ấp thuần khiết đến khí chất kiêu kỳ, sang trọng.'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Tư Vấn Concept',
    desc: 'Lắng nghe sở thích, màu sắc yêu thích và phong cách bạn muốn thể hiện để gợi ý concept hoàn hảo nhất.'
  },
  {
    step: '02',
    title: 'Makeup & Trang Phục',
    desc: 'Chuyên gia makeup định hình layout hài hòa từng góc mặt; lựa chọn váy áo và phụ kiện phù hợp bối cảnh.'
  },
  {
    step: '03',
    title: 'Chụp Nghệ Thuật 1-1',
    desc: 'Nhiếp ảnh gia đồng hành hướng dẫn từng cử chỉ, góc nghiêng và ánh mắt để bạn hoàn toàn thoải mái tự tin.'
  },
  {
    step: '04',
    title: 'Hậu Kỳ & Bàn Giao',
    desc: 'Retouch màu da trong trẻo tự nhiên, chỉnh sửa ảnh tỉ mỉ và bàn giao trọn vẹn toàn bộ file gốc độ nét cao.'
  }
];

export const PACKAGES: PackageItem[] = [
  {
    id: 'pkg-intro',
    name: 'Gói Chân Dung Nàng Thơ',
    idealFor: 'Dành cho nàng muốn lưu giữ bộ ảnh chân dung nhẹ nhàng, ảnh sinh nhật cá nhân',
    highlights: [
      '1 Concept chụp theo chủ đề tự chọn',
      '1 Bộ trang phục thiết kế tại Studio',
      'Hỗ trợ Makeup & Làm tóc chuẩn concept'
    ],
    includes: [
      'Chụp không giới hạn số lượng ảnh',
      'Chỉnh sửa màu da chuyên sâu 10 ảnh',
      'Bàn giao toàn bộ file ảnh gốc chất lượng cao',
      'Hỗ trợ hướng dẫn tạo dáng tận tình suốt buổi'
    ],
    ctaLabel: 'Tư Vấn Gói Chân Dung'
  },
  {
    id: 'pkg-signature',
    name: 'Gói Nàng Thơ Trọn Vẹn',
    isPopular: true,
    idealFor: 'Lựa chọn được yêu thích nhất — Đầy đủ trang phục, bối cảnh hoa và video kỷ niệm',
    highlights: [
      '2 Concept chụp biến hóa phong cách',
      '2 Bộ trang phục cao cấp & phụ kiện hoa tươi',
      'Makeup Artist đi cùng điều chỉnh từng set chụp',
      'TẶNG kèm 1 Video Reel ngắn nghệ thuật'
    ],
    includes: [
      'Chụp thoải mái không giới hạn góc máy',
      'Chỉnh sửa màu da chuyên sâu 20 ảnh nghệ thuật',
      'Bàn giao toàn bộ file gốc ngay sau buổi chụp',
      'In tặng ảnh để bàn cao cấp tại tiệm'
    ],
    ctaLabel: 'Nhận Ưu Đãi Gói Signature'
  },
  {
    id: 'pkg-exclusive',
    name: 'Gói Nghệ Thuật Độc Bản',
    idealFor: 'Dành cho nàng muốn thiết kế concept riêng biệt, phong cách high-fashion thời thượng',
    highlights: [
      '3 Concept tùy biến theo câu chuyện riêng',
      'Trang phục & layout makeup cá nhân hóa 100%',
      'Ekip chụp riêng & set ánh sáng nghệ thuật đặc biệt',
      'TẶNG Video Reel nghệ thuật 4K chuẩn TikTok/Instagram'
    ],
    includes: [
      'Thời gian chụp thoải mái, không gian riêng tư',
      'Chỉnh sửa chi tiết 30 ảnh lookbook cao cấp',
      'Bàn giao toàn bộ file gốc độ phân giải gốc cao nhất',
      'Ưu đãi in album photobook nghệ thuật độc quyền'
    ],
    ctaLabel: 'Thiết Kế Concept Riêng'
  }
];

export const MUSE_PINNED_CARDS = [
  {
    id: 'card-1',
    image: '/images/843042263_122147698131349763_3697492828306771257_n.jpg',
    caption: 'Dịu dàng & Thuần khiết',
    badge: 'Signature Floral',
    offset: 'left-top'
  },
  {
    id: 'card-2',
    image: '/images/767370912_122131519215349763_5245660856348000594_n.jpg',
    caption: 'Khí chất Ánh sáng',
    badge: 'Fine Art Lighting',
    offset: 'right-top'
  },
  {
    id: 'card-3',
    image: '/images/785200900_122136165975349763_584846808875841309_n.jpg',
    caption: 'Đóa hoa Nàng thơ',
    badge: 'Blush Muse',
    offset: 'left-bottom'
  },
  {
    id: 'card-4',
    image: '/images/846432725_122148712779349763_3948879404732246950_n.jpg',
    caption: 'Cá tính & Tự tin',
    badge: 'Modern Chic',
    offset: 'right-bottom'
  }
];
