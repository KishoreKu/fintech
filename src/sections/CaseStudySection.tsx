import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface CaseStudySectionProps {
  className?: string;
}

const CaseStudySection = ({ className = '' }: CaseStudySectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftPhotoRef = useRef<HTMLDivElement>(null);
  const rightTopRef = useRef<HTMLDivElement>(null);
  const rightBottomRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const leftPhoto = leftPhotoRef.current;
    const rightTop = rightTopRef.current;
    const rightBottom = rightBottomRef.current;

    if (!section || !leftPhoto || !rightTop || !rightBottom) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      // Phase 1: ENTRANCE (0% - 30%)
      scrollTl
        .fromTo(leftPhoto, { x: '-60vw', opacity: 0 }, { x: 0, opacity: 1, ease: 'none' }, 0)
        .fromTo(rightTop, { x: '60vw', opacity: 0 }, { x: 0, opacity: 1, ease: 'none' }, 0.06)
        .fromTo(rightBottom, { x: '60vw', opacity: 0 }, { x: 0, opacity: 1, ease: 'none' }, 0.1);

      // Phase 2: SETTLE (30% - 70%) - ambient
      scrollTl.fromTo(leftPhoto, 
        { scale: 1 }, 
        { scale: 1.02, ease: 'sine.inOut', yoyo: true, repeat: 1 }, 
        0.35
      );

      // Phase 3: EXIT (70% - 100%)
      scrollTl
        .fromTo(leftPhoto, { x: 0, opacity: 1 }, { x: '-55vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .fromTo(rightTop, { y: 0, opacity: 1 }, { y: '-35vh', opacity: 0, ease: 'power2.in' }, 0.7)
        .fromTo(rightBottom, { y: 0, opacity: 1 }, { y: '35vh', opacity: 0, ease: 'power2.in' }, 0.72);

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="case-study"
      className={`pinned-section bg-[#F6F6F2] ${className}`}
    >
      {/* Left Photo Card */}
      <div
        ref={leftPhotoRef}
        className="absolute card-rounded card-shadow will-change-transform"
        style={{
          left: '6vw',
          top: '10vh',
          width: '44vw',
          height: '80vh',
        }}
      >
        <img
          src="/case_study_fitness.jpg"
          alt="Fitness app case study"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Top - Title (Accent) */}
      <div
        ref={rightTopRef}
        className="absolute card-rounded card-shadow accent-bg will-change-transform flex items-center"
        style={{
          left: '52vw',
          top: '10vh',
          width: '42vw',
          height: '22vh',
          padding: '4vh 3vw',
        }}
      >
        <h2 className="text-display text-[clamp(24px,3vw,44px)] text-[#111216]">
          Case Study
        </h2>
      </div>

      {/* Right Bottom - Details (White) */}
      <div
        ref={rightBottomRef}
        className="absolute card-rounded card-shadow bg-white will-change-transform flex flex-col justify-between"
        style={{
          left: '52vw',
          top: '36vh',
          width: '42vw',
          height: '54vh',
          padding: '4vh 3vw',
        }}
      >
        <div>
          <h3 className="text-[18px] md:text-[22px] font-semibold text-[#111216] mb-4">
            Launching a connected fitness brand—fast.
          </h3>
          <p className="text-[14px] md:text-[15px] text-[#6E6F78] leading-relaxed">
            Identity, product design, and a predictive engagement model built in 10 weeks. 
            We transformed their vision into a fully functional platform with AI-powered 
            workout recommendations and real-time performance tracking.
          </p>
        </div>
        <button
          onClick={() => document.getElementById('featured-work')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-2 text-[13px] font-semibold text-[#111216] hover:text-[#B8B9F7] transition-colors self-end group"
        >
          Read the story
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default CaseStudySection;
