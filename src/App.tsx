import { ArrowUpRight, BarChart3, Bot, Cpu, Database, ShieldCheck, Satellite } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import './App.css';
import Navigation from './sections/Navigation';

// ─── Data ─────────────────────────────────────────────────────────────────────

const partners = [
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { name: 'Google', logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
  { name: 'AWS', logo: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png' },
  { name: 'Databricks', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Databricks-logo.svg' },
  { name: 'Adobe', logo: 'https://www.adobe.com/content/dam/cc/icons/adobe_wordmark_red.svg' },
];

const capabilities = [
  {
    eyebrow: '01',
    title: 'Space domain intelligence',
    copy: 'Satellite data pipelines, orbital analytics, and mission-critical situational awareness platforms built for the demands of modern space operations.',
    icon: Satellite,
  },
  {
    eyebrow: '02',
    title: 'Autonomous AI systems',
    copy: 'Self-directed agents, multi-modal decision loops, and autonomous orchestration that operate in unstructured environments without constant human oversight.',
    icon: Bot,
  },
  {
    eyebrow: '03',
    title: 'Physical AI & robotics',
    copy: 'Embodied intelligence stacks for ground, air, and orbital platforms — from real-time edge inference to kinematic control and sensor fusion.',
    icon: Cpu,
  },
  {
    eyebrow: '04',
    title: 'Mission data platforms',
    copy: 'Telemetry ingestion, sensor unification, and command-and-control dashboards that turn raw operational data into trusted, actionable intelligence.',
    icon: Database,
  },
];

const outcomes = [
  'Deploy autonomous decision systems for ground and orbital operations',
  'Unify satellite, sensor, and mission telemetry into governed pipelines',
  'Build physical AI stacks for drones, robotics, and edge platforms',
  'Design command-and-control interfaces for operators and mission commanders',
];

const HEADLINE = 'Where software meets the speed of orbit.';

const statsData = [
  { target: 12, suffix: '+', label: 'Space Programs Supported' },
  { target: 40, suffix: '+', label: 'Autonomous Systems Deployed' },
  { target: 99, suffix: '.9%', label: 'Mission Uptime SLA' },
  { target: 10, prefix: '<', suffix: 'wk', label: 'Avg. Delivery Time' },
];

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useTypewriter(text: string, speed = 28) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayed('');
    setDone(false);
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return { displayed, done };
}

function useCountUp(target: number, duration = 1800) {
  const [value, setValue] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!triggered) return;
    const start = performance.now();
    const raf = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [triggered, target, duration]);

  return { value, ref };
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatCounter({ target, prefix = '', suffix = '', label }: { target: number; prefix?: string; suffix?: string; label: string }) {
  const { value, ref } = useCountUp(target);
  return (
    <div ref={ref} className="bg-[#111827] px-8 py-8 border-r border-white/[0.06] last:border-r-0">
      <p className="text-[clamp(28px,3.5vw,52px)] font-bold text-white tabular-nums leading-none">
        {prefix}{value}{suffix}
      </p>
      <p className="mt-2 text-[10px] font-mono tracking-[0.2em] uppercase text-white/30">{label}</p>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

function App() {
  const { displayed, done } = useTypewriter(HEADLINE);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  
  const heroVideos = [
    { src: '/hero-space-v2.mp4', domain: 'Orbital Ops' },
    { src: '/hero-robotics.mp4', domain: 'Autonomous Robotics' },
    { src: '/hero-ai.mp4', domain: 'Artificial Intelligence' },
    { src: '/hero-physical-ai.mp4', domain: 'Physical AI' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveVideoIndex((prev) => (prev + 1) % heroVideos.length);
    }, 10000); // Rotate every 10s
    return () => clearInterval(timer);
  }, [heroVideos.length]);

  // Scroll-reveal observer
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0d1117] text-white font-inter">
      <div className="grain-overlay" />
      <Navigation />

      <main>
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section id="home" className="relative min-h-screen overflow-hidden bg-[#0d1117] text-white">
          {/* Radial glow */}
          <div className="hero-glow" />

          {/* HUD Grid */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Rotating domain video background */}
          <div className="absolute inset-0">
            {heroVideos.map((video, index) => (
              <div
                key={video.src}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === activeVideoIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <video
                  ref={(el) => { videoRefs.current[index] = el; }}
                  className="hero-background-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  aria-hidden="true"
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              </div>
            ))}
            {/* Cinematic overlay — keeps headline legible */}
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.3) 100%)' }} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/80" />
          </div>

          <div className="relative z-10 flex min-h-screen flex-col justify-end px-[6vw] pb-[10vh] pt-32">
            {/* Status bar */}
            <div className="mb-12 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#2B59FF] animate-pulse" />
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/40">Mission Active</span>
              </div>
              <span className="h-px w-12 bg-white/10" />
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/40">Domain:</span>
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#2B59FF] font-bold transition-all duration-500">
                  {heroVideos[activeVideoIndex].domain}
                </span>
              </div>
              <span className="h-px w-12 bg-white/10" />
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/40">Ref: WG-ORBIT-01</span>
            </div>

            {/* Headline + sub */}
            <div className="grid gap-16 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
              <div>
                <h1 className="max-w-5xl text-display text-[clamp(44px,7.5vw,104px)] leading-[0.9] text-white">
                  {displayed}
                  {!done && <span className="typewriter-cursor" aria-hidden="true" />}
                </h1>
              </div>
              <div className="max-w-xl border-l border-white/10 pl-8 pb-4 reveal reveal-delay-2">
                <p className="text-[17px] leading-relaxed text-white/70 font-light">
                  Westley Group builds the software infrastructure for enterprises operating in space, autonomous systems, and physical AI — engineered for environments where failure is not an option.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <button
                    onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group inline-flex items-center gap-4 bg-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-[#2B59FF] hover:text-white hover:shadow-[0_0_30px_rgba(43,89,255,0.5)]"
                  >
                    Enter Platform
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Stats bar */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 border border-white/[0.08] reveal reveal-delay-3">
              {statsData.map((s) => (
                <StatCounter key={s.label} target={s.target} prefix={s.prefix} suffix={s.suffix} label={s.label} />
              ))}
            </div>

            {/* HUD Bottom */}
            <div className="mt-8 flex items-center justify-between border-t border-white/[0.06] pt-6 text-[9px] font-mono tracking-widest text-white/20 uppercase">
              <div className="flex gap-12">
                <span>Lat: 28.5721° N</span>
                <span>Lon: 80.6480° W</span>
              </div>
              <div className="hidden md:block">
                <span>Launch Site: KSC · SLC-39A</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── CAPABILITIES — light dark theme ─────────────────────────────── */}
        <section id="platform" className="bg-[#111827] px-[6vw] py-32 text-white border-t border-white/[0.05]">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="sticky top-32 h-fit">
              <p className="mb-6 text-[10px] font-mono tracking-[0.2em] uppercase font-bold text-[#2B59FF] reveal">Capabilities</p>
              <h2 className="text-display text-[clamp(34px,5vw,68px)] leading-[1] text-white reveal reveal-delay-1">
                Built for the hardest<br />operational domains.
              </h2>
              <div className="mt-12 space-y-4 reveal reveal-delay-2">
                <div className="h-px w-24 bg-[#2B59FF]" />
                <p className="text-[16px] text-white/60 leading-relaxed max-w-sm">
                  We engineer mission-critical AI systems for space operations, autonomous platforms, and physical AI deployments where failure is not an option.
                </p>
              </div>
            </div>

            <div className="grid gap-px bg-white/[0.06] md:grid-cols-2 border border-white/[0.06]">
              {capabilities.map((cap, i) => (
                <article
                  key={cap.title}
                  className="reveal bg-[#111827] p-10 transition-all duration-500 hover:bg-[#1f2937] hover:shadow-[0_8px_40px_rgba(0,0,0,0.2)] border border-transparent hover:border-[#2B59FF]/30"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="mb-16 flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-[0.2em] uppercase font-bold text-white/30">{cap.eyebrow}</span>
                    <cap.icon className="h-6 w-6 text-[#2B59FF]/80" />
                  </div>
                  <h3 className="mb-6 text-[26px] font-medium leading-tight text-white">{cap.title}</h3>
                  <p className="text-[15px] leading-relaxed text-white/60">{cap.copy}</p>
                  <div className="mt-12 h-px w-8 bg-[#2B59FF]/40" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── WORK — full-width cinematic space/autonomy video ─────────────── */}
        <section id="work" className="relative text-white overflow-hidden border-t border-white/[0.06]" style={{ minHeight: '85vh' }}>
          {/* Full-bleed background video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            {/* NASA SLS Rocket Engine Fire — four RS-25 engines, massive orange flames */}
            <source src="/work-robotics.webm" type="video/webm" />
            {/* Fallback: SpaceX Starship Flight 5 Booster Catch */}
            <source src="/work-robotics2.webm" type="video/webm" />
          </video>

          {/* Gradient overlays — keep bottom text readable, let top video breathe */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

          {/* Top badge */}
          <div className="absolute top-8 left-[6vw] flex items-center gap-3 z-10">
            <span className="h-2 w-2 bg-[#2B59FF] rounded-full animate-pulse" />
            <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-white/60">NASA · SLS Engine Test Fire · 322,000 lbs of Thrust · Space Launch System</span>
          </div>

          {/* Bottom content panel */}
          <div className="absolute bottom-0 left-0 right-0 z-10 px-[6vw] pb-16 pt-32 bg-gradient-to-t from-black via-black/80 to-transparent">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end max-w-[1400px]">

              <div>
                <p className="mb-5 text-[10px] font-mono tracking-[0.3em] uppercase text-[#2B59FF] reveal">Mission: ORBIT-2026-X</p>
                <h2 className="text-display text-[clamp(30px,4.5vw,68px)] leading-[1] mb-10 text-white reveal reveal-delay-1">
                  Propulsion systems<br />at the frontier<br />of human exploration.
                </h2>
              </div>

              <div className="space-y-5 pb-1">
                {outcomes.map((outcome, i) => (
                  <div key={outcome} className="flex items-start gap-4 border-t border-white/[0.12] pt-5 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                    <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-[#2B59FF]" />
                    <p className="text-[15px] leading-relaxed text-white/70 font-light">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── METHODOLOGY — light dark theme ──────────────────────────────── */}
        <section id="services" className="bg-[#111827] px-[6vw] py-32 text-white border-t border-white/[0.05]">
          <div className="mb-24 flex flex-col justify-between gap-12 md:flex-row md:items-end">
            <div className="max-w-4xl">
              <p className="mb-6 text-[10px] font-mono tracking-[0.3em] uppercase text-[#2B59FF] reveal">Methodology</p>
              <h2 className="text-display text-[clamp(36px,5vw,78px)] leading-[1] text-white reveal reveal-delay-1">
                Mission-grade engineering,<br />from concept to orbit.
              </h2>
            </div>
            <BarChart3 className="h-16 w-16 text-white/[0.08] reveal" />
          </div>

          <div className="grid gap-px bg-white/[0.06] lg:grid-cols-3 border border-white/[0.06]">
            {['Assess', 'Build', 'Operate'].map((phase, index) => (
              <article
                key={phase}
                className="reveal bg-[#111827] p-12 transition-all duration-500 hover:bg-[#1f2937] hover:shadow-[inset_3px_0_0_#2B59FF] group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-20 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/30">Phase 0{index + 1}</span>
                  <div className="h-0.5 w-8 bg-[#2B59FF] group-hover:w-16 transition-all duration-500" />
                </div>
                <h3 className="mb-6 text-[28px] font-medium leading-tight text-white">{phase}</h3>
                <p className="text-[16px] leading-relaxed text-white/60 font-light">
                  {index === 0 && 'We conduct deep technical assessments of your mission architecture, data flows, autonomy gaps, and edge-compute constraints.'}
                  {index === 1 && 'Our engineering teams build and integrate production-ready autonomous systems, AI inference layers, and mission data platforms.'}
                  {index === 2 && 'We deploy, monitor, and continuously improve your systems — from orbital telemetry ingestion to on-device physical AI updates.'}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ── PARTNERS — original style from e1a56ef ───────────────────────── */}
        <section id="partners" className="bg-[#f4f2ea] py-16 text-[#111216]">
          <div className="mb-10 px-[6vw]">
            <p className="text-micro text-[#65676f]">Partner ecosystem</p>
          </div>
          <div className="partner-marquee border-y border-[#c8c9c3]" aria-label="Technology partners">
            <div className="partner-marquee__track">
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <div key={`${partner.name}-${index}`} className="partner-marquee__item">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="partner-marquee__logo"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ──────────────────────────────────────────────────────── */}
        <section id="contact" className="bg-[#0d1117] px-[6vw] py-32 border-t border-white/[0.06] text-white">
          <div className="grid gap-20 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="mb-6 text-[10px] font-mono tracking-[0.3em] uppercase text-[#2B59FF] reveal flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2B59FF] animate-pulse" />
                Access Point
              </p>
              <h2 className="max-w-4xl text-display text-[clamp(40px,6vw,92px)] leading-[0.95] text-white reveal reveal-delay-1">
                Command your<br />autonomous future.
              </h2>
              <div className="mt-12 h-px w-24 bg-[#2B59FF]/40 reveal reveal-delay-2" />
            </div>

            <div className="border-l border-white/[0.08] pl-12 flex flex-col justify-center reveal reveal-delay-2">
              <a
                href="mailto:info@westley-group.com"
                className="group flex items-center gap-4 text-[24px] font-medium transition-all duration-300 hover:text-[#2B59FF]"
              >
                info@westley-group.com
                <ArrowUpRight className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-all group-hover:text-[#2B59FF]" />
              </a>
              <a href="tel:+17325188899" className="mt-6 text-[18px] text-white/30 hover:text-white transition-colors">
                +1 732-518-8899
              </a>
              <div className="mt-16 space-y-3">
                <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/20">Global Operations</p>
                <p className="text-[16px] leading-relaxed text-white/50 font-light">
                  613 Washington Blvd #1342<br />
                  Jersey City, NJ 07310
                </p>
              </div>
            </div>
          </div>

          <footer className="mt-32 flex flex-col justify-between gap-8 border-t border-white/[0.06] pt-12 text-[10px] font-mono tracking-[0.2em] uppercase text-white/25 md:flex-row">
            <div className="flex flex-col gap-4">
              <p>© {new Date().getFullYear()} Westley Group. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Security Profile</a>
                <a href="#" className="hover:text-white transition-colors">Data Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Governance</a>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white/30">
              <div className="h-1 w-1 bg-[#2B59FF]" />
              <span>Precision. Autonomy. Scale.</span>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}

export default App;
