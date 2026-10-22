import React, { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  title: string;
  concept: string;
  spanClass?: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    type: 'image',
    url: '/images/843042263_122147698131349763_3697492828306771257_n.jpg',
    title: 'Nàng Thơ Trong Trẻo',
    concept: 'Hoa Đào & Voan Trắng',
    spanClass: 'sm:col-span-2 sm:row-span-2 aspect-[3/4] sm:aspect-auto',
  },
  {
    id: 'g-2',
    type: 'image',
    url: '/images/767370912_122131519215349763_5245660856348000594_n.jpg',
    title: 'Góc Nghiêng Nghệ Thuật',
    concept: 'Rim Light Studio',
    spanClass: 'aspect-[3/4]',
  },
  {
    id: 'g-3',
    type: 'video',
    url: '/video/ngau.mp4',
    title: 'Chuyển Động Thời Thượng',
    concept: 'Modern Chic Reel 4K',
    spanClass: 'aspect-[3/4]',
  },
  {
    id: 'g-4',
    type: 'image',
    url: '/images/785200900_122136165975349763_584846808875841309_n.jpg',
    title: 'Ánh Nhìn Thuần Khiết',
    concept: 'Hoa Ly Hồng',
    spanClass: 'aspect-[3/4]',
  },
  {
    id: 'g-5',
    type: 'image',
    url: '/images/844190551_122148221235349763_79926341068092580_n.jpg',
    title: 'Khoảnh Khắc Đôi',
    concept: 'Kỷ Niệm Mùa Thu',
    spanClass: 'aspect-[3/4]',
  },
  {
    id: 'g-6',
    type: 'image',
    url: '/images/842822144_122147698179349763_861670177633054892_n.jpg',
    title: 'Nét Đẹp Phương Đông',
    concept: 'Cổ Phục & Trâm Cài Hoa',
    spanClass: 'aspect-[3/4]',
  },
  {
    id: 'g-8',
    type: 'image',
    url: '/images/845682499_122148169803349763_7775063548538524195_n.jpg',
    title: 'Thần Thái Rạng Ngời',
    concept: 'Lookbook Studio',
    spanClass: 'aspect-[3/4]',
  },
  {
    id: 'g-9',
    type: 'image',
    url: '/images/844302299_122148221151349763_1470878994211803008_n.jpg',
    title: 'Hẹn Hò Lãng Mạn',
    concept: 'Timeless Couple',
    spanClass: 'sm:col-span-2 aspect-[16/9]',
  },
];

export const GalleryWall: React.FC = () => {
  const [videoMuted, setVideoMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoMuted;
      setVideoMuted(!videoMuted);
    }
  };

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-[#221F1F]">
          Bộ Sưu Tập Khách Hàng Tại Nhà La
        </h2>
        <p className="text-sm sm:text-base text-[#78706E]">
          Mỗi bức ảnh và thước phim là một kỷ niệm thanh xuân vô giá được ghi lại với tất cả sự nâng niu và trân trọng.
        </p>
      </div>

      {/* Editorial Masonry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {GALLERY_ITEMS.map((item) => (
          <div
            key={item.id}
            className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#FAF8F5] border border-[#EAE2D8] shadow-sm ${item.spanClass || 'aspect-[3/4]'
              }`}
          >
            {item.type === 'video' ? (
              /* Embedded 4K Video Reel Card */
              <div className="relative w-full h-full bg-black">
                <video
                  ref={videoRef}
                  src={item.url}
                  autoPlay
                  loop
                  muted={videoMuted}
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Badge Indicator */}
                <div className="absolute top-4 left-4 z-20 flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-medium border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-[#E05A1B] animate-pulse" />
                  <span>Reel 4K</span>
                </div>

                {/* Sound Control Toggle */}
                <button
                  type="button"
                  onClick={toggleMute}
                  className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/85 transition-colors cursor-pointer border border-white/20"
                  aria-label={videoMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
                >
                  {videoMuted ? (
                    <VolumeX className="w-3.5 h-3.5" />
                  ) : (
                    <Volume2 className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            ) : (
              /* Photograph Card */
              <img
                src={item.url}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            )}

            {/* Subtle Gradient Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end text-left pointer-events-none">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#F3D3D7]">
                {item.concept}
              </span>
              <h4 className="font-editorial text-lg sm:text-xl text-white font-medium">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
