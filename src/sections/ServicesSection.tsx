import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Bot, TrendingUp, BarChart3, Code2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ServicesSectionProps {
  className?: string;
}

const ServicesSection = ({ className = '' }: ServicesSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const card1 = card1Ref.current;
    const card2 = card2Ref.current;
    const card3 = card3Ref.current;
    const card4 = card4Ref.current;

    if (!section || !card1 || !card2 || !card3 || !card4) return;

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
        .fromTo(card1, { x: '-60vw', opacity: 0 }, { x: 0, opacity: 1, ease: 'none' }, 0)
        .fromTo(card4, { x: '60vw', opacity: 0 }, { x: 0, opacity: 1, ease: 'none' }, 0)
        .fromTo(card2, { y: '60vh', opacity: 0 }, { y: 0, opacity: 1, ease: 'none' }, 0.08)
        .fromTo(card3, { y: '60vh', opacity: 0 }, { y: 0, opacity: 1, ease: 'none' }, 0.1);

      // Phase 2: SETTLE (30% - 70%)
      scrollTl.fromTo(card2,
        { scale: 1 },
        { scale: 1.01, ease: 'sine.inOut', yoyo: true, repeat: 1 },
        0.3
      );

      // Phase 3: EXIT (70% - 100%)
      scrollTl
        .fromTo(card1, { x: 0, opacity: 1 }, { x: '-55vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .fromTo(card4, { x: 0, opacity: 1 }, { x: '55vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .fromTo(card2, { y: 0, opacity: 1 }, { y: '-35vh', opacity: 0, ease: 'power2.in' }, 0.7)
        .fromTo(card3, { y: 0, opacity: 1 }, { y: '35vh', opacity: 0, ease: 'power2.in' }, 0.72);

    }, section);

    return () => ctx.revert();
  }, []);

  const services = [
    { icon: Bot, text: 'AI Automation — workflow design, agents, integrations' },
    { icon: TrendingUp, text: 'Digital Marketing — strategy, content, performance' },
    { icon: BarChart3, text: 'Analytics — dashboards, forecasting, attribution' },
    { icon: Code2, text: 'Software & Apps — design, build, ship' },
  ];

  return (
    <section
      ref={sectionRef}
      id="services-pinned"
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

      {/* Card 1 — Services Photo */}
      <div
        ref={card1Ref}
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
          src="/services_team.jpg"
          alt="Team meeting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Card 4 — Portrait */}
      <div
        ref={card4Ref}
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
          src="/services_portrait.jpg"
          alt="Team lead"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Card 2 — Title Block (Dark Blue) */}
      <div
        ref={card2Ref}
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
        <h2 className="text-display text-[clamp(28px,3.5vw,52px)] text-white">
          Services
        </h2>
      </div>

      {/* Card 3 — List Block (Dark surface) */}
      <div
        ref={card3Ref}
        className="absolute will-change-transform flex flex-col justify-between"
        style={{
          left: '52vw',
          top: '70vh',
          width: '42vw',
          height: '22vh',
          padding: '2.5vh 2.5vw',
          background: '#0a0a0a',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div className="space-y-2">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-2">
              <service.icon className="w-4 h-4 text-[#2B59FF]/60 flex-shrink-0" />
              <span className="text-[12px] md:text-[13px] text-white/60">{service.text}</span>
            </div>
          ))}
        </div>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-2 text-[13px] font-semibold text-[#2B59FF] hover:text-white transition-colors self-end group"
        >
          See packages
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
