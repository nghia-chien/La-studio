import React, { useState, useRef } from 'react';
import { VIDEO_REELS } from '../data/studioData';
import { Play, Pause, Volume2, VolumeX, Sparkles, Film } from 'lucide-react';

export const CinematicReelsSection: React.FC = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const togglePlay = (id: string) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (video.paused) {
      video.play();
      setPlayingId(id);
    } else {
      video.pause();
      setPlayingId(null);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    Object.values(videoRefs.current).forEach((v) => {
      if (v) v.muted = newMuted;
    });
  };

  return (
    <section id="reels" className="py-24 sm:py-32 bg-[#221F1F] text-white overflow-hidden relative">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#CF9297]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#E8C5C8] text-xs font-semibold tracking-widest uppercase border border-white/10">
            <Film className="w-3.5 h-3.5 text-[#E8C5C8]" />
            <span>Thành Phẩm Nghệ Thuật</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-normal tracking-wide text-white">
            Thước Phim Nàng Thơ 4K
          </h2>
          <p className="text-sm sm:text-base text-[#B5ACA9]">
            Không chỉ là những bức ảnh tĩnh, chúng tôi ghi lại từng khoảnh khắc chuyển động mềm mại, ánh nhìn và nét duyên rạng ngời của bạn thành những video reel đầy cuốn hút.
          </p>
        </div>

        {/* Dual Video Showcase (Side-by-side 9:16 Reels) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 max-w-4xl mx-auto">
          {VIDEO_REELS.map((reel) => {
            const isPlaying = playingId === reel.id;

            return (
              <div
                key={reel.id}
                className="group relative rounded-[2rem] overflow-hidden bg-black shadow-2xl border border-white/15 transition-all duration-500 hover:border-[#CF9297]/60"
              >
                {/* 9:16 Video Frame */}
                <div
                  className="relative aspect-[9/16] w-full cursor-pointer bg-neutral-900"
                  onClick={() => togglePlay(reel.id)}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[reel.id] = el;
                    }}
                    src={reel.videoUrl}
                    loop
                    playsInline
                    muted={isMuted}
                    className="w-full h-full object-cover"
                  />

                  {/* Dark Gradient Overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-semibold tracking-wider uppercase text-white border border-white/10">
                      {reel.concept}
                    </span>
                    <button
                      type="button"
                      onClick={toggleMute}
                      aria-label={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
                      className="pointer-events-auto p-2 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white transition-all"
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4 text-white/80" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-[#E8C5C8]" />
                      )}
                    </button>
                  </div>

                  {/* Center Play/Pause Indicator (visible on pause or hover) */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${
                      isPlaying ? 'opacity-0 group-hover:opacity-80' : 'opacity-100'
                    }`}
                  >
                    <div className="w-16 h-16 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110">
                      {isPlaying ? (
                        <Pause className="w-7 h-7" />
                      ) : (
                        <Play className="w-7 h-7 translate-x-0.5" />
                      )}
                    </div>
                  </div>

                  {/* Bottom Video Metadata */}
                  <div className="absolute bottom-6 left-6 right-6 text-left pointer-events-none space-y-1">
                    <span className="text-[11px] font-medium text-[#E8C5C8] flex items-center space-x-1">
                      <Sparkles className="w-3 h-3" />
                      <span>{reel.durationLabel}</span>
                    </span>
                    <h3 className="font-editorial text-xl sm:text-2xl text-white font-medium">
                      {reel.title}
                    </h3>
                    <p className="text-xs text-white/70 line-clamp-2">
                      {reel.description}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Reel Feature Note */}
        <div className="mt-12 text-center text-xs text-[#B5ACA9]">
          <span>Mỗi gói chụp tại La Studio đều có thể tích hợp quay video reel nghệ thuật để bạn tự tin chia sẻ lên TikTok & Instagram.</span>
        </div>

      </div>
    </section>
  );
};
