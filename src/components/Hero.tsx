import React from 'react';
import { ArrowRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        
        {/* Left Column: Editorial Headline & Copy */}
        <div className="lg:col-span-7 space-y-7 text-left">

          {/* Headline with Masked Typography Rise */}
          <div className="overflow-hidden">
            <h1 className="font-editorial text-4xl sm:text-6xl xl:text-7xl font-normal leading-[1.08] tracking-tight text-[#221F1F] animate-masked-rise">
              Lưu Giữ Nét Đẹp <br />
              <span className="italic font-serif font-light text-[#CF9297]">
                Nàng Thơ
              </span>{' '}
              & Thanh Xuân
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-[#4A4443] font-normal leading-relaxed max-w-xl">
            Mỗi cô gái đều mang trong mình một khí chất độc bản. Tại La Studio, chúng tôi không chụp những bức ảnh rập khuôn — chúng tôi cùng bạn đánh thức sự tự tin, nét rạng rỡ và vẻ đẹp trong trẻo nhất qua lăng kính nghệ thuật.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="#concepts"
              className="inline-flex items-center justify-center space-x-3 bg-[#221F1F] hover:bg-[#332E2D] text-white px-7 py-3.5 rounded-full text-sm font-medium tracking-wide shadow-md transition-all group"
            >
              <span>Khám Phá Concept</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={STUDIO_INFO.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-[#FAEBED] text-[#221F1F] border border-[#EAE2D8] hover:border-[#F3D3D7] px-6 py-3.5 rounded-full text-sm font-medium transition-all"
            >
              <span>Tư Vấn Zalo: {STUDIO_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Layered Editorial Photo Composition */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          
          {/* Main Primary Muse Video */}
          <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/80 bg-[#FAF8F5] animate-curtain group">
            <video
              src="/video/nangtho.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle Gradient Veil */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-50 pointer-events-none" />
          </div>

          {/* Floating Offset Secondary Photo (Desktop & Tablet) */}
          <div className="hidden sm:block absolute -bottom-6 -left-8 lg:-left-12 w-40 sm:w-48 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white group hover:-translate-y-1 transition-transform">
            <img
              src={STUDIO_INFO.heroSecondary}
              alt="Concept hoa ly nghệ thuật"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Established Studio Stamp */}


        </div>

      </div>
    </section>
  );
};
