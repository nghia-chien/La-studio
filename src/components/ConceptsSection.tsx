import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { ArrowRight } from 'lucide-react';

interface ConceptCase {
  id: string;
  caseNumber: string;
  category: string;
  title: string;
  tagline: string;
  image: string;
  videoUrl?: string;
  bgImage: string;
  isCutout?: boolean;
  theme: 'light' | 'dark';
  bgColor: string;
  overlayClass: string;
  accentColor: string;
}

const CONCEPT_CASES: ConceptCase[] = [
  {
    id: 'chan-dung',
    caseNumber: '[01]',
    category: 'MODERN CHIC',
    title: 'Chân Dung & Thời Thượng',
    tagline: 'Bắt trọn thần thái tự tin, phóng khoáng và độc bản',
    image: '/cut/2.png',
    bgImage: '/images/846432725_122148712779349763_3948879404732246950_n.jpg',
    isCutout: true,
    theme: 'dark', // Xám
    bgColor: '#1E2024',
    overlayClass: 'bg-gradient-to-t from-[#15171A]/92 via-[#22252A]/72 to-[#181A1D]/88',
    accentColor: '#E05A1B',
  },
  {
    id: 'nang-tho',
    caseNumber: '[02]',
    category: 'SIGNATURE CONCEPT',
    title: 'Nàng Thơ Trong Trẻo',
    tagline: 'Vẻ đẹp tinh khôi, ánh mắt mơ màng giữa sắc hoa',
    image: '/cut/3.png',
    bgImage: '/images/843042263_122147698131349763_3697492828306771257_n.jpg',
    isCutout: false,
    theme: 'light', // Nền sáng
    bgColor: '#FAF5F0',
    overlayClass: 'bg-gradient-to-t from-[#FAF5F0]/92 via-[#FAF5F0]/65 to-[#FAF5F0]/85',
    accentColor: '#CF9297',
  },
  {
    id: 'nghe-thuat',
    caseNumber: '[03]',
    category: 'FINE ART GLAMOUR',
    title: 'Nghệ Thuật & Quyến Rũ',
    tagline: 'Ánh sáng tạo khối, đường cong thanh thoát và khí chất kiêu kỳ',
    image: '/cut/1.png',
    bgImage: '/images/767370912_122131519215349763_5245660856348000594_n.jpg',
    isCutout: true,
    theme: 'dark', // Vàng ấm
    bgColor: '#1E140C',
    overlayClass: 'bg-gradient-to-t from-[#150D07]/92 via-[#28180E]/70 to-[#180F08]/88',
    accentColor: '#E5A958',
  },
  {
    id: 'ky-niem-doi',
    caseNumber: '[04]',
    category: 'TIMELESS MOMENTS',
    title: 'Kỷ Niệm & Cặp Đôi',
    tagline: 'Lưu giữ những rung động ngọt ngào và ánh nhìn say đắm',
    image: '/cut/4.jpg',
    bgImage: '/images/844302299_122148221151349763_1470878994211803008_n.jpg',
    isCutout: false,
    theme: 'light', // Ấm sáng
    bgColor: '#F7EFE6',
    overlayClass: 'bg-gradient-to-t from-[#F7EFE6]/92 via-[#F7EFE6]/65 to-[#F7EFE6]/85',
    accentColor: '#D66829',
  },
];

export const ConceptsSection: React.FC = () => {
  return (
    <section id="concepts" className="relative w-full">
      {CONCEPT_CASES.map((caseItem, index) => {
        const isImageLeft = index % 2 === 0;
        const isLight = caseItem.theme === 'light';
        const zaloHref = `${STUDIO_INFO.zaloUrl}?text=${encodeURIComponent(
          `Chào La Studio, mình muốn tư vấn concept: ${caseItem.title}`
        )}`;

        return (
          <div
            key={caseItem.id}
            id={`concept-${caseItem.id}`}
            className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden p-6 sm:p-10 lg:p-16 select-none"
            style={{
              zIndex: 10 + index * 10,
              backgroundColor: caseItem.bgColor,
            }}
          >
            {/* 1. Atmospheric Concept Background from /public/images */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <img
                src={caseItem.bgImage}
                alt=""
                aria-hidden="true"
                className={`w-full h-full object-cover blur-xl scale-110 ${
                  isLight ? 'opacity-30' : 'opacity-40'
                }`}
              />
              <div className={`absolute inset-0 ${caseItem.overlayClass}`} />
            </div>

            {/* 2. Main Content Container: Alternating Left / Right Split */}
            <div
              className={`relative z-10 w-full max-w-6xl mx-auto flex flex-col ${
                isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center justify-between gap-8 lg:gap-16`}
            >
              {/* Media Frame Column (Video / Cutout / Photo) */}
              <div className="w-full lg:w-1/2 flex items-center justify-center">
                <div
                  className={`relative w-[85vw] sm:w-[55vw] lg:w-full max-w-md aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] max-h-[50vh] sm:max-h-[58vh] lg:max-h-[72vh] rounded-2xl overflow-hidden shadow-2xl group ${
                    isLight
                      ? 'border border-black/10 bg-white/60'
                      : 'border border-white/20 bg-black/40'
                  }`}
                >
                  {caseItem.videoUrl ? (
                    /* Video Feature (e.g. Modern Chic Video Lookbook) */
                    <video
                      src={caseItem.videoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : caseItem.isCutout ? (
                    /* Transparent cutout model with matching ambient photoshoot setting */
                    <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
                      <img
                        src={caseItem.bgImage}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full object-cover blur-[3px] scale-105 opacity-65"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50" />
                      <img
                        src={caseItem.image}
                        alt={caseItem.title}
                        loading="lazy"
                        className="relative z-10 max-h-[92%] w-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)] transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    /* Full-bleed framed photography */
                    <img
                      src={caseItem.image}
                      alt={caseItem.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  )}

                  {/* Gentle gradient sheen */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Clean Minimal Text Column */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-6">
                {/* Case number & Category */}
                <div
                  className={`flex items-center space-x-3 ${
                    isLight ? 'text-[#7A716E]' : 'text-white/70'
                  }`}
                >
                  <span
                    className="font-mono text-sm sm:text-base tracking-widest font-semibold"
                    style={{ color: caseItem.accentColor }}
                  >
                    {caseItem.caseNumber}
                  </span>
                  <span
                    className={`w-8 h-[1px] hidden sm:inline-block ${
                      isLight ? 'bg-black/15' : 'bg-white/20'
                    }`}
                  />
                  <span
                    className={`text-xs uppercase tracking-[0.25em] font-medium ${
                      isLight ? 'text-[#7A716E]' : 'text-white/60'
                    }`}
                  >
                    {caseItem.category}
                  </span>
                </div>

                {/* Concept Title */}
                <h3
                  className={`font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.15] ${
                    isLight
                      ? 'text-[#221F1F] drop-shadow-sm'
                      : 'text-white drop-shadow-md'
                  }`}
                >
                  {caseItem.title}
                </h3>

                {/* Minimalist 1-Line Tagline */}
                <p
                  className={`text-sm sm:text-base font-light leading-relaxed max-w-md ${
                    isLight ? 'text-[#5E5552]' : 'text-white/75'
                  }`}
                >
                  {caseItem.tagline}
                </p>

                {/* Action CTA Button */}
                <div className="pt-2 sm:pt-4">
                  {isLight ? (
                    /* Light theme CTA button: deep charcoal pill with accent arrow */
                    <a
                      href={zaloHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center space-x-3.5 bg-[#221F1F] hover:bg-black text-white pl-6 pr-2.5 py-2.5 rounded-full border border-black/10 shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <span className="text-xs sm:text-sm font-medium tracking-wide">
                        Tư Vấn Concept
                      </span>
                      <span
                        className="w-9 h-9 rounded-full flex items-center justify-center text-white shadow-md transition-transform group-hover:translate-x-0.5"
                        style={{ backgroundColor: caseItem.accentColor }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </a>
                  ) : (
                    /* Dark theme CTA button: glassmorphism pill with accent arrow */
                    <a
                      href={zaloHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center space-x-3.5 bg-white/10 hover:bg-white text-white hover:text-[#221F1F] pl-6 pr-2.5 py-2.5 rounded-full border border-white/25 hover:border-white shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    >
                      <span className="text-xs sm:text-sm font-medium tracking-wide">
                        Tư Vấn Concept
                      </span>
                      <span
                        className="w-9 h-9 rounded-full flex items-center justify-center text-white shadow-md transition-transform group-hover:translate-x-0.5"
                        style={{ backgroundColor: caseItem.accentColor }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
