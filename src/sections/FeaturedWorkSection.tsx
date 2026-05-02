import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface FeaturedWorkSectionProps {
  className?: string;
}

const FeaturedWorkSection = ({ className = '' }: FeaturedWorkSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardARef = useRef<HTMLDivElement>(null);
  const cardBRef = useRef<HTMLDivElement>(null);
  const cardCRef = useRef<HTMLDivElement>(null);
  const cardDRef = useRef<HTMLDivElement>(null);
  const cardERef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const cardA = cardARef.current;
    const cardB = cardBRef.current;
    const cardC = cardCRef.current;
    const cardD = cardDRef.current;
    const cardE = cardERef.current;

    if (!section || !cardA || !cardB || !cardC || !cardD || !cardE) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 0.7,
        },
      });

      // Phase 1: ENTRANCE (0% - 30%)
      scrollTl
        .fromTo(cardA, { x: '-60vw', opacity: 0 }, { x: 0, opacity: 1, ease: 'none' }, 0)
        .fromTo(cardC, { x: '60vw', opacity: 0 }, { x: 0, opacity: 1, ease: 'none' }, 0.06)
        .fromTo(cardB, { y: '-60vh', opacity: 0 }, { y: 0, opacity: 1, ease: 'none' }, 0.08)
        .fromTo(cardD, { y: '60vh', opacity: 0 }, { y: 0, opacity: 1, ease: 'none' }, 0.1)
        .fromTo(cardE, { y: '60vh', opacity: 0 }, { y: 0, opacity: 1, ease: 'none' }, 0.12);

      // Phase 2: SETTLE (30% - 70%) - ambient
      scrollTl.fromTo(cardA, 
        { scale: 1 }, 
        { scale: 1.02, ease: 'sine.inOut', yoyo: true, repeat: 1 }, 
        0.35
      );
      scrollTl.fromTo(cardC, 
        { y: 0 }, 
        { y: -6, ease: 'sine.inOut', yoyo: true, repeat: 1 }, 
        0.38
      );
      scrollTl.fromTo(cardE, 
        { y: 0 }, 
        { y: -4, ease: 'sine.inOut', yoyo: true, repeat: 1 }, 
        0.4
      );

      // Phase 3: EXIT (70% - 100%)
      scrollTl
        .fromTo(cardA, { x: 0, opacity: 1 }, { x: '-55vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .fromTo(cardC, { x: 0, opacity: 1 }, { x: '55vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .fromTo(cardB, { y: 0, opacity: 1 }, { y: '-35vh', opacity: 0, ease: 'power2.in' }, 0.7)
        .fromTo(cardD, { y: 0, opacity: 1 }, { y: '35vh', opacity: 0, ease: 'power2.in' }, 0.72)
        .fromTo(cardE, { y: 0, opacity: 1 }, { y: '35vh', opacity: 0, ease: 'power2.in' }, 0.74);

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="featured-work"
      className={`pinned-section bg-[#050505] ${className}`}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Card A - Dominant Work Image */}
      <div
        ref={cardARef}
        className="absolute will-change-transform overflow-hidden"
        style={{
          left: '6vw',
          top: '10vh',
          width: '62vw',
          height: '56vh',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <img
          src="/featured_work_main.jpg"
          alt="Featured work"
          className="w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Card B - Top Right Title (Dark Blue Accent) */}
      <div
        ref={cardBRef}
        className="absolute will-change-transform flex items-center justify-center"
        style={{
          left: '70vw',
          top: '10vh',
          width: '24vw',
          height: '26vh',
          padding: '2vh 1.5vw',
          background: '#0d1530',
          border: '1px solid rgba(43,89,255,0.3)',
          boxShadow: '0 0 40px rgba(43,89,255,0.15)',
        }}
      >
        <h2 className="text-display text-[clamp(16px,1.8vw,28px)] text-white text-center">
          Featured<br />Work
        </h2>
      </div>

      {/* Card C - Top Right Photo */}
      <div
        ref={cardCRef}
        className="absolute will-change-transform overflow-hidden"
        style={{
          left: '70vw',
          top: '38vh',
          width: '24vw',
          height: '28vh',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <img
          src="/featured_work_detail1.jpg"
          alt="Work detail"
          className="w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Card D - Bottom Left Title (Dark Blue Accent) */}
      <div
        ref={cardDRef}
        className="absolute will-change-transform flex items-center"
        style={{
          left: '6vw',
          top: '70vh',
          width: '44vw',
          height: '22vh',
          padding: '4vh 3vw',
          background: '#0d1530',
          border: '1px solid rgba(43,89,255,0.3)',
          boxShadow: '0 0 40px rgba(43,89,255,0.15)',
        }}
      >
        <h2 className="text-display text-[clamp(20px,2.5vw,36px)] text-white">
          Selected<br />Projects
        </h2>
      </div>

      {/* Card E - Bottom Right Copy (Dark surface) */}
      <div
        ref={cardERef}
        className="absolute will-change-transform flex flex-col justify-between"
        style={{
          left: '52vw',
          top: '70vh',
          width: '42vw',
          height: '22vh',
          padding: '3vh 2.5vw',
          background: '#0a0a0a',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <p className="text-[14px] md:text-[15px] text-white/45 leading-relaxed">
          A few recent builds—identity, product, and AI-powered campaigns.
          Each project reflects our commitment to craft and performance.
        </p>
        <button
          onClick={() => document.getElementById('insights')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-2 text-[13px] font-semibold text-[#2B59FF] hover:text-white transition-colors self-end group"
        >
          View the archive
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
