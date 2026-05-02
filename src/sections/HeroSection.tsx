import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardARef = useRef<HTMLDivElement>(null);
  const cardBRef = useRef<HTMLDivElement>(null);
  const cardCRef = useRef<HTMLDivElement>(null);
  const cardDRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const cardA = cardARef.current;
    const cardB = cardBRef.current;
    const cardC = cardCRef.current;
    const cardD = cardDRef.current;

    if (!section || !cardA || !cardB || !cardC || !cardD) return;

    const ctx = gsap.context(() => {
      // Initial state - all hidden
      gsap.set([cardA, cardB, cardC, cardD], { opacity: 0 });
      gsap.set(cardA, { x: '-6vw', scale: 1.03 });
      gsap.set(cardD, { x: '6vw', scale: 1.03 });
      gsap.set([cardB, cardC], { y: '6vh' });

      // Load animation timeline
      const loadTl = gsap.timeline({ delay: 0.2 });

      loadTl
        .to(cardA, { opacity: 1, x: 0, scale: 1, duration: 0.9, ease: 'power3.out' })
        .to(cardD, { opacity: 1, x: 0, scale: 1, duration: 0.9, ease: 'power3.out' }, 0.08)
        .to(cardB, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0.18)
        .to(cardC, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0.28);

      // Ambient animations
      gsap.to(cardA, {
        y: '-6px',
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to(cardD, {
        y: '6px',
        duration: 3.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset all elements when scrolling back to top
            gsap.to([cardA, cardB, cardC, cardD], {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.3,
            });
          },
        },
      });

      // Phase 3: EXIT (70% - 100%)
      scrollTl
        .fromTo(cardA, { x: 0, opacity: 1 }, { x: '-55vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .fromTo(cardD, { x: 0, opacity: 1 }, { x: '55vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .fromTo(cardB, { y: 0, opacity: 1, scale: 1 }, { y: '-35vh', opacity: 0, scale: 0.96, ease: 'power2.in' }, 0.7)
        .fromTo(cardC, { y: 0, opacity: 1, scale: 1 }, { y: '35vh', opacity: 0, scale: 0.96, ease: 'power2.in' }, 0.72);

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className={`pinned-section bg-[#0d1117] ${className}`}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Card A - Hero Photo */}
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
          src="/hero_office.jpg"
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Card D - Small Portrait */}
      <div
        ref={cardDRef}
        className="absolute will-change-transform overflow-hidden"
        style={{
          left: '70vw',
          top: '10vh',
          width: '24vw',
          height: '56vh',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <img
          src="/hero_portrait.jpg"
          alt="Creative professional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Card B - Headline (Dark Blue Accent) */}
      <div
        ref={cardBRef}
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
        <h1 className="text-display text-[clamp(28px,3.5vw,52px)] text-white">
          Intelligent<br />Systems
        </h1>
      </div>

      {/* Card C - Intro Copy (Dark surface) */}
      <div
        ref={cardCRef}
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
        <p className="text-[15px] md:text-[16px] text-white/45 leading-relaxed">
          We design brands, products, and campaigns—then automate the hard parts with AI.
        </p>
        <button
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-2 text-[13px] font-semibold text-[#2B59FF] hover:text-white transition-colors self-end group"
        >
          Explore capabilities
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
