import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Palette, Rocket } from 'lucide-react';
import type { RefObject } from 'react';

gsap.registerPlugin(ScrollTrigger);

interface ProcessSectionProps {
  className?: string;
}

const processes = [
  {
    number: '01',
    title: 'Discover',
    description: 'We map the problem, the data, and the user journey—then define the real constraints.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Design',
    description: 'Interfaces, messaging, and systems architecture—built for speed and clarity.',
    icon: Palette,
  },
  {
    number: '03',
    title: 'Deploy',
    description: 'Ship, measure, and automate. We tune the system until it performs.',
    icon: Rocket,
  },
];

const ProcessSection = ({ className = '' }: ProcessSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const cards = [card1Ref.current, card2Ref.current, card3Ref.current].filter(Boolean);
    const lines = [line1Ref.current, line2Ref.current].filter(Boolean);

    if (!section || !heading || cards.length === 0) return;

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(heading, 
        { x: '-8vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 75%',
            end: 'top 45%',
            scrub: true,
          },
        }
      );

      // Cards animation with stagger
      cards.forEach((card) => {
        gsap.fromTo(card, 
          { y: '8vh', opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'top 55%',
              scrub: true,
            },
          }
        );
      });

      // Divider lines animation
      lines.forEach((line) => {
        gsap.fromTo(line, 
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: line,
              start: 'top 85%',
              end: 'top 70%',
              scrub: true,
            },
          }
        );
      });

    }, section);

    return () => ctx.revert();
  }, []);

  const cardRefs: RefObject<HTMLDivElement | null>[] = [card1Ref, card2Ref, card3Ref];

  return (
    <section
      ref={sectionRef}
      id="process"
      className={`flowing-section bg-[#F6F6F2] ${className}`}
      style={{ paddingTop: '12vh', paddingBottom: '12vh' }}
    >
      {/* Heading Block */}
      <div
        ref={headingRef}
        className="card-rounded card-shadow accent-bg will-change-transform mb-12"
        style={{
          marginLeft: '6vw',
          width: 'min(52vw, 720px)',
          padding: '4vh 3vw',
        }}
      >
        <h2 className="text-display text-[clamp(28px,3.5vw,52px)] text-[#111216]">
          How We Work
        </h2>
      </div>

      {/* Process Cards */}
      <div className="space-y-0" style={{ marginLeft: '6vw', width: '88vw' }}>
        {processes.map((process, idx) => (
          <div key={idx}>
            <div
              ref={cardRefs[idx]}
              className="card-rounded card-shadow bg-white will-change-transform flex items-start gap-8"
              style={{
                padding: '4vh 3vw',
                minHeight: '26vh',
              }}
            >
              {/* Number */}
              <div className="flex-shrink-0">
                <span className="text-display text-[clamp(48px,6vw,80px)] text-[#B8B9F7]">
                  {process.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 pt-4">
                <div className="flex items-center gap-3 mb-4">
                  <process.icon className="w-6 h-6 text-[#B8B9F7]" />
                  <h3 className="text-[20px] md:text-[24px] font-semibold text-[#111216]">
                    {process.title}
                  </h3>
                </div>
                <p className="text-[14px] md:text-[16px] text-[#6E6F78] leading-relaxed max-w-2xl">
                  {process.description}
                </p>
              </div>
            </div>

            {/* Divider Line (except after last card) */}
            {idx < processes.length - 1 && (
              <div
                ref={idx === 0 ? line1Ref : line2Ref}
                className="h-px bg-[#B8B9F7]/30 my-6 origin-left"
                style={{ width: '100%' }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
