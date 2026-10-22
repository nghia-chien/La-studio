/**
 * DESIGN BRIEF — LA STUDIO (TIỆM ẢNH NHÀ LA)
 * Project Visual & Architectural Source of Truth
 */
export const DESIGN_BRIEF = {
  brandMood: 'Feminine, Elegant, Poetic, Luminous, High-Fashion Artistry',
  keywords: ['Nàng Thơ', 'Thanh Lịch', 'Ánh Sáng Nghệ Thuật', 'Độc Bản'],
  layoutPattern: 'Editorial / Asymmetric + Image-First Lookbook with Sticky Center Stage',
  paletteDirection: 'Soft Pastel Blush (#F3D3D7, #E8C5C8), Cream White (#FAF8F5), Warm Beige (#EAE2D8), Deep Charcoal (#221F1F)',
  typographyDirection: 'Headings: Cormorant Garamond (Editorial Serif); Body/UI: Plus Jakarta Sans (Clean Modern Sans)',
  mediaTreatment: 'Portrait 3:4 & 2:3 high-fashion framing, subtle warm glow, natural skin tones, zero artificial clutter',
  videoTreatment: '2 Vertical 9:16 Creative Reels featured as centerpiece artworks with cinematic look',
  whitespaceDensity: 'Generous editorial spacing, relaxed reading cadence, unhurried luxury feel',
  signatureMotion: 'Pinned center typographic anchor ("MUSE") with floating asymmetric cards & video reels during scroll',
  supportingMotion: 'Hero curtain & masked line reveal, stagger card entrance, gentle hover zooms (1.03x)',
  iconPolicy: 'Strictly essential navigation & contact utilities (phone, maps, arrow, play/pause); no arbitrary decorative icons',
  conversionBehavior: 'Quick consultation & booking via Zalo hotline (0931 419 538), Fanpage, and minimal booking dialog',
  avoidList: [
    'No scroll hijacking or heavy canvas pinning on mobile',
    'No invented prices, false reviews, or fabricated addresses',
    'No generic corporate card grids or saturated colors',
    'No AI particle effects, stars, or decorative clutter'
  ]
} as const;
