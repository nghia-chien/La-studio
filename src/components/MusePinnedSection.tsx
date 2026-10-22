import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScatteredCard {
  id: string;
  image: string;
  title: string;
  badge: string;
  wrapperClass: string;
  aspectClass: string;
  rotation: number;
}

const SCATTERED_CARDS: ScatteredCard[] = [
  {
    id: 'card-1',
    image: '/images/843042263_122147698131349763_3697492828306771257_n.jpg',
    title: 'Dịu Dàng & Thuần Khiết',
    badge: 'Signature Floral',
    wrapperClass: 'w-[80%] sm:w-[42%] ml-2 sm:ml-8',
    aspectClass: 'aspect-[3/4]',
    rotation: -2,
  },
  {
    id: 'card-2',
    image: '/images/767370912_122131519215349763_5245660856348000594_n.jpg',
    title: 'Khí Chất Ánh Sáng',
    badge: 'Fine Art Lighting',
    wrapperClass: 'w-[75%] sm:w-[36%] mr-2 sm:mr-10 ml-auto',
    aspectClass: 'aspect-[3/4]',
    rotation: 3,
  },
  {
    id: 'card-3',
    image: '/images/785200900_122136165975349763_584846808875841309_n.jpg',
    title: 'Đóa Hoa Nàng Thơ',
    badge: 'Blush Muse',
    wrapperClass: 'w-[82%] sm:w-[44%] ml-4 sm:ml-20',
    aspectClass: 'aspect-[3/4]',
    rotation: 1,
  },
  {
    id: 'card-4',
    image: '/images/842822144_122147698179349763_861670177633054892_n.jpg',
    title: 'Nét Đẹp Á Đông',
    badge: 'Heritage Muse',
    wrapperClass: 'w-[74%] sm:w-[38%] mr-4 sm:mr-16 ml-auto',
    aspectClass: 'aspect-[3/4]',
    rotation: -3,
  },
  {
    id: 'card-5',
    image: '/images/846432725_122148712779349763_3948879404732246950_n.jpg',
    title: 'Cá Tính & Tự Tin',
    badge: 'Modern Chic',
    wrapperClass: 'w-[70%] sm:w-[35%] ml-2 sm:ml-12',
    aspectClass: 'aspect-[3/4]',
    rotation: 2,
  },
  {
    id: 'card-6',
    image: '/images/844190551_122148221235349763_79926341068092580_n.jpg',
    title: 'Thanh Xuân Rực Rỡ',
    badge: 'Timeless Love',
    wrapperClass: 'w-[78%] sm:w-[40%] mr-2 sm:mr-12 ml-auto',
    aspectClass: 'aspect-[3/4]',
    rotation: -2,
  },
];

export const MusePinnedSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current || !headingRef.current) return;

    // GSAP Context ensures proper scoping and memory cleanup
    const ctx = gsap.context(() => {
      // 1. PIN THE "MUSE" HEADING TO EXACT VIEWPORT CENTER DURING SCROLL
      // Pins when center of MUSE reaches center of viewport,
      // and unpins when section bottom reaches viewport bottom (before next section enters)
      ScrollTrigger.create({
        trigger: headingRef.current,
        start: 'center center',
        endTrigger: sectionRef.current,
        end: 'bottom bottom',
        pin: headingRef.current,
        pinSpacing: false,
        invalidateOnRefresh: true,
      });

      // 2. FADE OUT "MUSE" HEADING BEFORE NEXT SECTION ENTERS
      // As the user scrolls through the final card, MUSE smoothly fades out and blurs,
      // so it never collides or overlaps with the next section.
      gsap.to(headingRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'bottom 105%',
          end: 'bottom 75%',
          scrub: 0.5,
        },
        opacity: 0,
        y: -40,
        filter: 'blur(10px)',
        ease: 'power1.in',
      });

      // 3. BIDIRECTIONAL VIEWPORT FADE IN / FADE OUT TIED TO SCROLL UP & DOWN
      // As user scrolls down, cards fade in & sharpen when entering the viewport,
      // remain 100% sharp & visible in the center reading zone,
      // and gently blur & fade out as they leave the top.
      // When scrolling up, it reverses in real time!
      const cards = gsap.utils.toArray<HTMLElement>('.scattered-card');

      cards.forEach((card) => {
        const cardTl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top bottom', // when top of card enters bottom of viewport
            end: 'bottom top',   // when bottom of card leaves top of viewport
            scrub: 0.8,          // smooth real-time reaction to scroll up and down
          },
        });

        // Phase 1 (0% -> 25%): Entering viewport from bottom — fades in and sharpens
        cardTl.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            scale: 0.92,
            filter: 'blur(10px)',
            willChange: 'opacity, transform, filter',
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.25,
            ease: 'power2.out',
          }
        )
        // Phase 2 (25% -> 75%): Inside primary viewport viewing zone — 100% sharp and clear
        .to(card, {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.5,
        })
        // Phase 3 (75% -> 100%): Exiting top of viewport — softly blurs and fades out
        .to(card, {
          opacity: 0,
          y: -60,
          scale: 0.94,
          filter: 'blur(10px)',
          duration: 0.25,
          ease: 'power2.in',
        });
      });
    }, sectionRef);

    // Refresh ScrollTrigger after assets initialize
    ScrollTrigger.refresh();

    return () => {
      ctx.revert(); // clean up GSAP ScrollTrigger instances
    };
  }, []);

  return (
    <section
      id="muse-showcase"
      ref={sectionRef}
      className="relative pt-20 pb-28 sm:pt-28 sm:pb-36 bg-[#FAF8F5]"
    >
      {/* 1. Heading Container: Starts at TOP of section, locks into VIEWPORT CENTER on scroll */}
      <div
        ref={headingRef}
        className="w-full flex flex-col items-center justify-center text-center pointer-events-none select-none z-0 py-4"
      >
        <h2 className="font-editorial text-[26vw] sm:text-[20vw] font-bold tracking-[0.16em] leading-none text-[#CF9297]/15">
          MUSE
        </h2>
        <div className="max-w-lg mx-auto px-4 -mt-4 sm:-mt-8">
          <p className="font-editorial text-lg sm:text-2xl text-[#221F1F]/80 font-normal italic drop-shadow-sm">
            "Không cần phải là người mẫu, chỉ cần là chính bạn."
          </p>
        </div>
      </div>

      {/* 2. Foreground Scattered Cards (Unequal positions and sizes flowing down the section) */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 space-y-28 sm:space-y-44 mt-14 sm:mt-20">
        {SCATTERED_CARDS.map((card) => (
          <div
            key={card.id}
            className={`scattered-card ${card.wrapperClass}`}
          >
            <div
              className={`relative ${card.aspectClass} rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group cursor-pointer transition-transform duration-500`}
              style={{ transform: `rotate(${card.rotation}deg)` }}
            >
              <img
                src={card.image}
                alt={card.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Subtle Gradient & Caption Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 sm:p-5 flex flex-col justify-end text-left">
                <span className="text-[10px] text-[#F3D3D7] font-semibold uppercase tracking-wider">
                  {card.badge}
                </span>
                <p className="font-editorial text-base sm:text-lg text-white font-medium">
                  {card.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
