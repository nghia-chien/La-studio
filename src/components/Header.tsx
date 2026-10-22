import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Khám Phá', href: '#concepts' },
    { label: 'Không Gian', href: '#muse-showcase' },
    { label: 'Quy Trình Chụp', href: '#quy-trinh' },
    { label: 'Bảng Gói Dịch Vụ', href: '#bang-goi' },
    { label: 'Địa Chỉ Studio', href: '#dat-lich' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 pt-3 sm:pt-4">
      <div
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 px-5 sm:px-8 py-3 flex items-center justify-between ${
          isScrolled
            ? 'bg-[#FAF8F5]/90 backdrop-blur-md shadow-md border border-[#EAE2D8]/80'
            : 'bg-[#FAF8F5]/70 backdrop-blur-sm border border-[#EAE2D8]/50'
        }`}
      >
        {/* Brand Wordmark */}
        <a href="#" className="flex flex-col group text-left">
          <span className="font-editorial text-2xl sm:text-3xl font-semibold tracking-wider text-[#221F1F] group-hover:text-[#CF9297] transition-colors">
            LASTUDIO
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-7 text-xs font-medium tracking-wide text-[#4A4443]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#CF9297] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#CF9297] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href={STUDIO_INFO.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-xs font-medium text-[#221F1F] bg-[#F5EFEB] hover:bg-[#EAE2D8] px-3.5 py-2 rounded-full transition-all border border-[#EAE2D8]"
          >
            <Phone className="w-3.5 h-3.5 text-[#CF9297]" />
            <span>{STUDIO_INFO.phoneDisplay}</span>
          </a>
          <a
            href="#dat-lich"
            className="inline-flex items-center space-x-1.5 text-xs font-medium text-white bg-[#221F1F] hover:bg-[#332E2D] px-4 py-2 rounded-full transition-all shadow-sm group"
          >
            <span>Đặt Lịch Chụp</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 text-[#221F1F] hover:text-[#CF9297] focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-6xl mx-auto bg-[#FAF8F5] border border-[#EAE2D8] rounded-2xl p-6 shadow-xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#4A4443] hover:text-[#CF9297] py-1 border-b border-[#F5EFEB]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col space-y-2">
            <a
              href={STUDIO_INFO.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 text-sm font-medium text-[#221F1F] bg-[#F5EFEB] py-2.5 rounded-full"
            >
              <Phone className="w-4 h-4 text-[#CF9297]" />
              <span>Zalo: {STUDIO_INFO.phoneDisplay}</span>
            </a>
            <a
              href="#dat-lich"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 text-sm font-medium text-white bg-[#221F1F] py-2.5 rounded-full"
            >
              <span>Đặt Lịch Chụp Ngay</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
