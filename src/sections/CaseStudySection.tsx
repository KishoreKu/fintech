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

      // Phase 2: SETTLE (30% - 70%)
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
      className={`pinned-section bg-[#050505] ${className}`}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Left Photo Card */}
      <div
        ref={leftPhotoRef}
        className="absolute card-rounded will-change-transform overflow-hidden"
        style={{
          left: '6vw',
          top: '10vh',
          width: '44vw',
          height: '80vh',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <img
          src="/case_study_fitness.jpg"
          alt="Fitness app case study"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
      </div>

      {/* Right Top — Title (Dark Blue) */}
      <div
        ref={rightTopRef}
        className="absolute will-change-transform flex items-center"
        style={{
          left: '52vw',
          top: '10vh',
          width: '42vw',
          height: '22vh',
          padding: '4vh 3vw',
          background: '#0d1530',
          border: '1px solid rgba(43,89,255,0.3)',
          boxShadow: '0 0 40px rgba(43,89,255,0.15)',
        }}
      >
        <h2 className="text-display text-[clamp(24px,3vw,44px)] text-white">
          Case Study
        </h2>
      </div>

      {/* Right Bottom — Details (Dark surface) */}
      <div
        ref={rightBottomRef}
        className="absolute will-change-transform flex flex-col justify-between"
        style={{
          left: '52vw',
          top: '36vh',
          width: '42vw',
          height: '54vh',
          padding: '4vh 3vw',
          background: '#0a0a0a',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div>
          <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#2B59FF] mb-4">Enterprise · Fitness Tech</p>
          <h3 className="text-[18px] md:text-[22px] font-semibold text-white mb-4">
            Launching a connected fitness brand—fast.
          </h3>
          <p className="text-[14px] md:text-[15px] text-white/45 leading-relaxed">
            Identity, product design, and a predictive engagement model built in 10 weeks.
            We transformed their vision into a fully functional platform with AI-powered
            workout recommendations and real-time performance tracking.
          </p>
        </div>
        <button
          onClick={() => document.getElementById('featured-work')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-2 text-[13px] font-semibold text-[#2B59FF] hover:text-white transition-colors self-end group"
        >
          Read the story
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default CaseStudySection;
