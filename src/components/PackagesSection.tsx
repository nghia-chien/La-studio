import React from 'react';
import { PACKAGES, STUDIO_INFO } from '../data/studioData';
import { Check, MessageCircle, ArrowRight } from 'lucide-react';

export const PackagesSection: React.FC = () => {
  return (
    <section id="bang-goi" className="py-24 sm:py-32 bg-[#FAF8F5] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-3">
        <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-[#221F1F]">
          Các Gói Trải Nghiệm Chụp Ảnh
        </h2>
        <p className="text-sm sm:text-base text-[#78706E]">
          Mỗi gói chụp đều được chuẩn hóa minh bạch về quyền lợi makeup, trang phục và hậu kỳ. Báo giá chi tiết được tư vấn cụ thể theo từng concept và thời điểm ưu đãi.
        </p>
      </div>

      {/* 3 Packages Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {PACKAGES.map((pkg) => (
          <div
            key={pkg.id}
            className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 text-left ${pkg.isPopular
                ? 'bg-white border-2 border-[#CF9297] shadow-xl lg:-translate-y-2'
                : 'bg-white/80 border border-[#EAE2D8] shadow-sm hover:shadow-md'
              }`}
          >
            {/* Popular Badge */}
            {pkg.isPopular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#221F1F] text-white text-[11px] font-semibold tracking-widest uppercase shadow-sm">
                Được Yêu Thích Nhất
              </div>
            )}

            <div>
              {/* Package Title */}
              <div className="mb-4">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#CF9297] block">
                  Studio Package
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#221F1F] font-semibold">
                  {pkg.name}
                </h3>
              </div>

              <p className="text-xs text-[#78706E] min-h-[36px] mb-6 leading-relaxed">
                {pkg.idealFor}
              </p>

              {/* Highlights */}
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE2D8] mb-6 space-y-2">
                <span className="text-[11px] font-semibold uppercase text-[#221F1F] tracking-wider block">
                  Điểm Nổi Bật:
                </span>
                {pkg.highlights.map((h, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs font-medium text-[#4A4443]">

                    <span>- {h}</span>
                  </div>
                ))}
              </div>

              {/* Inclusions list */}
              <div className="space-y-3 mb-8">
                <span className="text-xs font-semibold uppercase text-[#78706E] tracking-wider block">
                  Quyền Lợi Trọn Gói:
                </span>
                {pkg.includes.map((inc, i) => (
                  <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#4A4443]">
                    <Check className="w-4 h-4 text-[#CF9297] flex-shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 border-t border-[#F5EFEB]">
              <a
                href={`${STUDIO_INFO.zaloUrl}?text=${encodeURIComponent(`Chào La Studio, mình muốn nhận báo giá & tư vấn chi tiết cho ${pkg.name}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all shadow-sm ${pkg.isPopular
                    ? 'bg-[#221F1F] hover:bg-[#332E2D] text-white'
                    : 'bg-[#F5EFEB] hover:bg-[#EAE2D8] text-[#221F1F]'
                  }`}
              >
                <MessageCircle className="w-4 h-4" />
                <span>{pkg.ctaLabel}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-[10px] text-[#78706E] block text-center mt-2">
                Tư vấn nhanh 24/7 qua Zalo {STUDIO_INFO.phoneDisplay}
              </span>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};
