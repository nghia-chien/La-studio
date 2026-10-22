import React from 'react';
import { PROCESS_STEPS } from '../data/studioData';

export const ProcessSection: React.FC = () => {
  return (
    <section id="quy-trinh" className="pb-24 pt-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-3">

        <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-[#221F1F]">
          Quy Trình 4 Bước Tạo Nên Tuyệt Tác
        </h2>
        <p className="text-sm sm:text-base text-[#78706E]">
          Chúng tôi chuẩn bị trọn gói từ khâu ý tưởng đến thành phẩm để bạn chỉ cần thư thái tận hưởng buổi chụp như một trải nghiệm làm đẹp.
        </p>
      </div>

      {/* 4 Steps Horizontal Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {PROCESS_STEPS.map((step) => (
          <div
            key={step.step}
            className="group relative bg-white rounded-3xl p-8 border border-[#EAE2D8] shadow-sm hover:shadow-md hover:border-[#CF9297]/50 transition-all text-left flex flex-col justify-between"
          >
            <div>
              {/* Step Number in Editorial Serif */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-editorial text-4xl sm:text-5xl font-light text-[#CF9297] group-hover:scale-105 transition-transform">
                  {step.step}
                </span>
              </div>

              <h3 className="font-editorial text-xl sm:text-2xl text-[#221F1F] font-semibold mb-3">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#78706E] leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
