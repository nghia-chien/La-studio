import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { Phone, ArrowUp, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF8F5] border-t border-[#EAE2D8] pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-left">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#EAE2D8]">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-editorial text-3xl font-semibold tracking-wider text-[#221F1F] block">
              La STUDIO
            </span>
            <p className="text-xs uppercase tracking-[0.2em] text-[#CF9297] font-semibold">
              Tiệm Ảnh Nhà La 
            </p>
            <p className="text-xs sm:text-sm text-[#78706E] max-w-sm leading-relaxed">
              Tôn vinh vẻ đẹp nguyên bản và lưu giữ những năm tháng thanh xuân rực rỡ nhất của bạn qua lăng kính nhiếp ảnh nghệ thuật.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#221F1F] block">
              Danh Mục Khám Phá
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-[#78706E]">
              <li>
                <a href="#concepts" className="hover:text-[#CF9297] transition-colors">
                  Concept Nàng Thơ Trong Trẻo
                </a>
              </li>
              <li>
                <a href="#muse-showcase" className="hover:text-[#CF9297] transition-colors">
                  Không Gian Nghệ Thuật Muse
                </a>
              </li>
              <li>
                <a href="#reels" className="hover:text-[#CF9297] transition-colors">
                  Thước Phim 4K Nghệ Thuật
                </a>
              </li>
              <li>
                <a href="#quy-trinh" className="hover:text-[#CF9297] transition-colors">
                  Quy Trình Trải Nghiệm 4 Bước
                </a>
              </li>
              <li>
                <a href="#bang-goi" className="hover:text-[#CF9297] transition-colors">
                  Bảng Gói Dịch Vụ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Booking Column */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#221F1F] block">
              Thông Tin Liên Hệ
            </span>
            <div className="space-y-2 text-xs sm:text-sm text-[#78706E]">
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#CF9297] flex-shrink-0" />
                <a href={STUDIO_INFO.zaloUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#CF9297]">
                  Zalo / Hotline: {STUDIO_INFO.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <svg className="w-4 h-4 fill-[#CF9297] flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <a href={STUDIO_INFO.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#CF9297]">
                  Fanpage: La Studio - Chụp ảnh nàng thơ
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#CF9297] flex-shrink-0" />
                <a href={STUDIO_INFO.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#CF9297]">
                  La STUDIO - Tiệm Ảnh Nhà La (TP. Hồ Chí Minh)
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#78706E] gap-4">
          <p className="flex items-center space-x-1">
            <span>© {new Date().getFullYear()} La STUDIO. Thiết kế dành tặng vẻ đẹp thanh xuân.</span>
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-full bg-white border border-[#EAE2D8] hover:border-[#CF9297] text-[#221F1F] transition-all text-xs font-medium cursor-pointer"
          >
            <span>Về đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
