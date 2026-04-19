import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ManifestoSectionProps {
  className?: string;
}

const ManifestoSection = ({ className = '' }: ManifestoSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const titleCellRef = useRef<HTMLDivElement>(null);
  const textCellRef = useRef<HTMLDivElement>(null);
  const photo1Ref = useRef<HTMLDivElement>(null);
  const photo2Ref = useRef<HTMLDivElement>(null);
  const photo3Ref = useRef<HTMLDivElement>(null);
  const photo4Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const titleCell = titleCellRef.current;
    const textCell = textCellRef.current;
    const photos = [photo1Ref.current, photo2Ref.current, photo3Ref.current, photo4Ref.current].filter(Boolean);

    if (!section || !titleCell || !textCell || photos.length === 0) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=140%',
          pin: true,
          scrub: 0.6,
        },
      });

      // Phase 1: ENTRANCE (0% - 30%)
      scrollTl
        .fromTo(titleCell, { y: '-60vh', opacity: 0 }, { y: 0, opacity: 1, ease: 'none' }, 0)
        .fromTo(textCell, { y: '60vh', opacity: 0 }, { y: 0, opacity: 1, ease: 'none' }, 0.08);

      // Photos staggered entrance
      photos.forEach((photo, idx) => {
        scrollTl.fromTo(photo, 
          { scale: 1.06, opacity: 0, y: idx % 2 === 0 ? 20 : -20 }, 
          { scale: 1, opacity: 1, y: 0, ease: 'none' }, 
          0.06 + idx * 0.04
        );
      });

      // Phase 2: SETTLE (30% - 70%) - ambient drift on photos
      photos.forEach((photo, idx) => {
        scrollTl.fromTo(photo, 
          { y: 0 }, 
          { y: idx % 2 === 0 ? -6 : 6, ease: 'sine.inOut', yoyo: true, repeat: 1 }, 
          0.35 + idx * 0.02
        );
      });

      // Phase 3: EXIT (70% - 100%)
      scrollTl
        .fromTo(titleCell, { x: 0, opacity: 1 }, { x: '40vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .fromTo(textCell, { x: 0, opacity: 1 }, { x: '-40vw', opacity: 0, ease: 'power2.in' }, 0.7);

      photos.forEach((photo, idx) => {
        scrollTl.fromTo(photo, 
          { y: 0, opacity: 1 }, 
          { y: '-25vh', opacity: 0, ease: 'power2.in' }, 
          0.72 + idx * 0.02
        );
      });

    }, section);

    return () => ctx.revert();
  }, []);

  const manifestoPoints = [
    'Clarity beats noise.',
    'Systems beat chaos.',
    'Design and engineering—one team.',
  ];

  return (
    <section
      ref={sectionRef}
      id="manifesto"
      className={`pinned-section bg-[#F6F6F2] ${className}`}
    >
      {/* Grid Container */}
      <div
        ref={gridRef}
        className="absolute"
        style={{
          left: '6vw',
          top: '10vh',
          width: '88vw',
          height: '80vh',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          gap: '2.2vw',
        }}
      >
        {/* Photo 1 - Top Left */}
        <div
          ref={photo1Ref}
          className="card-rounded card-shadow will-change-transform overflow-hidden"
        >
          <img
            src="/manifesto_1.jpg"
            alt="Creative workspace"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Photo 2 - Top Center */}
        <div
          ref={photo2Ref}
          className="card-rounded card-shadow will-change-transform overflow-hidden"
        >
          <img
            src="/manifesto_2.jpg"
            alt="Team brainstorming"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title Cell - Top Right (Accent) */}
        <div
          ref={titleCellRef}
          className="card-rounded card-shadow accent-bg will-change-transform flex items-center justify-center p-6"
        >
          <h2 className="text-display text-[clamp(20px,2.5vw,36px)] text-[#111216] text-center">
            Our<br />Manifesto
          </h2>
        </div>

        {/* Photo 3 - Bottom Left */}
        <div
          ref={photo3Ref}
          className="card-rounded card-shadow will-change-transform overflow-hidden"
        >
          <img
            src="/manifesto_3.jpg"
            alt="Developer coding"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Cell - Bottom Center (White) */}
        <div
          ref={textCellRef}
          className="card-rounded card-shadow bg-white will-change-transform flex flex-col justify-between p-6"
        >
          <div className="space-y-3">
            {manifestoPoints.map((point, idx) => (
              <p key={idx} className="text-[13px] md:text-[14px] text-[#111216] font-medium">
                {point}
              </p>
            ))}
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 text-[12px] font-semibold text-[#111216] hover:text-[#B8B9F7] transition-colors self-end group"
          >
            Meet the team
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Photo 4 - Bottom Right */}
        <div
          ref={photo4Ref}
          className="card-rounded card-shadow will-change-transform overflow-hidden"
        >
          <img
            src="/manifesto_4.jpg"
            alt="Team celebration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
