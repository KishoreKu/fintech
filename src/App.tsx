import { ArrowUpRight, BarChart3, Bot, Braces, Database, LineChart, ShieldCheck } from 'lucide-react';
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
  { eyebrow: '01', title: 'AI operating systems', copy: 'Agents, workflows, and human review loops that move work from inboxes and spreadsheets into governed production systems.', icon: Bot },
  { eyebrow: '02', title: 'Data and analytics', copy: 'Executive dashboards, forecasting models, attribution, and warehouse design for teams that need trusted answers fast.', icon: Database },
  { eyebrow: '03', title: 'Product engineering', copy: 'Modern applications, integrations, and internal tools built around the real decisions your operators make every day.', icon: Braces },
  { eyebrow: '04', title: 'Growth systems', copy: 'Campaign infrastructure, lifecycle automation, and measurement plans that connect marketing activity to revenue.', icon: LineChart },
];

const outcomes = [
  'Deploy AI automation across frontline workflows',
  'Unify fragmented customer, finance, and operations data',
  'Design decision interfaces for executives and operators',
  'Launch secure cloud foundations with partner ecosystems',
];

const HEADLINE = 'Foundational software for the era of autonomy.';

const statsData = [
  { target: 42, suffix: '+', label: 'Workflows Deployed' },
  { target: 8, suffix: '', label: 'Data Sources Unified' },
  { target: 99, suffix: '.9%', label: 'Uptime SLA Target' },
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
    <div ref={ref} className="bg-black px-8 py-8 border-r border-white/[0.08] last:border-r-0">
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
    <div className="min-h-screen bg-black text-white font-inter">
      <div className="grain-overlay" />
      <Navigation />

      <main>
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section id="home" className="relative min-h-screen overflow-hidden bg-black text-white">
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

          {/* Technical Video BG — city infrastructure / aerial */}
          <div className="absolute inset-0 opacity-45">
            <video
              className="hero-background-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
              style={{ filter: 'saturate(0.3) brightness(0.55)' }}
            >
              {/* Primary: night city aerial / infrastructure */}
              <source src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4" type="video/mp4" />
              {/* Fallback 1: city lights timelapse */}
              <source src="https://videos.pexels.com/video-files/1849899/1849899-hd_1920_1080_24fps.mp4" type="video/mp4" />
              {/* Fallback 2: general tech */}
              <source src="https://videos.pexels.com/video-files/2278095/2278095-hd_1920_1080_25fps.mp4" type="video/mp4" />
            </video>
            {/* Cinematic vignette + bottom fade */}
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.6) 100%)' }} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
          </div>

          <div className="relative flex min-h-screen flex-col justify-end px-[6vw] pb-[10vh] pt-32">
            {/* Status bar */}
            <div className="mb-12 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#2B59FF] animate-pulse" />
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/40">System Live</span>
              </div>
              <span className="h-px w-12 bg-white/10" />
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/40">Ref: WG-2026-ALPHA</span>
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
                <p className="text-[17px] leading-relaxed text-white/50 font-light">
                  Westley Group engineering provides the technical edge for global enterprises navigating high-stakes operational complexity.
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
                <span>Lat: 40.7128° N</span>
                <span>Lon: 74.0060° W</span>
              </div>
              <div className="hidden md:block">
                <span>Encryption: AES-256-GCM</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── CAPABILITIES — light section (Palantir-style) ─────────────────── */}
        <section id="platform" className="bg-[#f9f9f7] px-[6vw] py-32 text-black border-t border-black/[0.06]">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="sticky top-32 h-fit">
              <p className="mb-6 text-[10px] font-mono tracking-[0.2em] uppercase font-bold text-[#2B59FF] reveal">Capabilities</p>
              <h2 className="text-display text-[clamp(34px,5vw,68px)] leading-[1] text-black reveal reveal-delay-1">
                Engineered for<br />operational clarity.
              </h2>
              <div className="mt-12 space-y-4 reveal reveal-delay-2">
                <div className="h-px w-24 bg-[#2B59FF]" />
                <p className="text-[16px] text-black/50 leading-relaxed max-w-sm">
                  We replace fragmented tools with unified systems that move data from spreadsheets into governed production.
                </p>
              </div>
            </div>

            <div className="grid gap-px bg-black/[0.08] md:grid-cols-2 border border-black/[0.08]">
              {capabilities.map((cap, i) => (
                <article
                  key={cap.title}
                  className="reveal bg-[#f9f9f7] p-10 transition-all duration-500 hover:bg-white hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-transparent hover:border-[#2B59FF]/20"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="mb-16 flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-[0.2em] uppercase font-bold text-black/25">{cap.eyebrow}</span>
                    <cap.icon className="h-6 w-6 text-[#2B59FF]/70" />
                  </div>
                  <h3 className="mb-6 text-[26px] font-medium leading-tight text-black">{cap.title}</h3>
                  <p className="text-[15px] leading-relaxed text-black/55">{cap.copy}</p>
                  <div className="mt-12 h-px w-8 bg-[#2B59FF]/40" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── WORK — technical video center piece ──────────────────────────── */}
        <section id="work" className="relative bg-[#0a0c10] px-[6vw] py-32 text-white overflow-hidden border-t border-white/[0.06]">
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #ffffff12 1px, transparent 1px), linear-gradient(to bottom, #ffffff12 1px, transparent 1px)`,
              backgroundSize: '80px 80px',
            }}
          />
          {/* Deep blue atmosphere */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 40% 60%, rgba(43,89,255,0.07) 0%, transparent 55%)' }}
          />

          <div className="grid gap-20 lg:grid-cols-2 lg:items-center relative z-10">
            {/* Technical video — server room / data operations */}
            <div className="reveal relative overflow-hidden shadow-[0_0_80px_rgba(43,89,255,0.2)] group">
              {/* Aspect ratio wrapper */}
              <div className="relative aspect-video">
                <video
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/featured_work_main.jpg"
                >
                  {/* Primary: server room / data center */}
                  <source src="https://videos.pexels.com/video-files/3252912/3252912-hd_1920_1080_25fps.mp4" type="video/mp4" />
                  {/* Fallback 1: tech/coding */}
                  <source src="https://videos.pexels.com/video-files/5483077/5483077-hd_1920_1080_30fps.mp4" type="video/mp4" />
                  {/* Fallback 2 */}
                  <source src="https://videos.pexels.com/video-files/3129957/3129957-hd_1920_1080_25fps.mp4" type="video/mp4" />
                </video>
                {/* Blue tint overlay */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(43,89,255,0.12) 0%, transparent 50%)', mixBlendMode: 'screen' }} />
                {/* Scan-line aesthetic */}
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0px, transparent 1px, transparent 3px)', backgroundSize: '100% 4px' }} />
                {/* HUD overlay */}
                <div className="absolute inset-0 border border-[#2B59FF]/25" />
              </div>
              {/* HUD top bar */}
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-gradient-to-b from-black/70 to-transparent">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 bg-[#2B59FF] rounded-full animate-pulse" />
                  <span className="text-[9px] font-mono tracking-widest text-white/60 uppercase">Live · Data Operations Center</span>
                </div>
                <span className="text-[9px] font-mono text-white/30">FEED-02 · ENCRYPTED</span>
              </div>
              {/* HUD bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-gradient-to-t from-black/70 to-transparent">
                <span className="text-[9px] font-mono text-[#2B59FF]/70 tracking-widest">WG · DEPLOYMENT · ACTIVE</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-0.5 bg-[#2B59FF]/30 relative overflow-hidden">
                    <div className="absolute inset-y-0 left-0 w-3/4 bg-[#2B59FF] animate-pulse" />
                  </div>
                  <span className="text-[9px] font-mono text-white/30">73%</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="mb-6 text-[10px] font-mono tracking-[0.3em] uppercase text-[#2B59FF] reveal">Report: F-2410-X</p>
              <h2 className="text-display text-[clamp(34px,5vw,72px)] leading-[1] mb-12 text-white reveal reveal-delay-1">
                Accelerating decision<br />velocity at scale.
              </h2>
              <div className="space-y-8">
                {outcomes.map((outcome, i) => (
                  <div key={outcome} className="flex items-start gap-6 border-t border-white/[0.08] pt-8 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                    <ShieldCheck className="mt-1 h-5 w-5 flex-none text-[#2B59FF]/70" />
                    <p className="text-[17px] leading-relaxed text-white/65 font-light">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── METHODOLOGY — light section (Palantir-style) ──────────────────── */}
        <section id="services" className="bg-white px-[6vw] py-32 text-black border-t border-black/[0.06]">
          <div className="mb-24 flex flex-col justify-between gap-12 md:flex-row md:items-end">
            <div className="max-w-4xl">
              <p className="mb-6 text-[10px] font-mono tracking-[0.3em] uppercase text-[#2B59FF] reveal">Methodology</p>
              <h2 className="text-display text-[clamp(36px,5vw,78px)] leading-[1] text-black reveal reveal-delay-1">
                Integrated engineering,<br />from audit to deployment.
              </h2>
            </div>
            <BarChart3 className="h-16 w-16 text-black/[0.08] reveal" />
          </div>

          <div className="grid gap-px bg-black/[0.08] lg:grid-cols-3 border border-black/[0.08]">
            {['Assess', 'Build', 'Operate'].map((phase, index) => (
              <article
                key={phase}
                className="reveal bg-white p-12 transition-all duration-500 hover:bg-[#f9f9f7] hover:shadow-[inset_3px_0_0_#2B59FF] group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-20 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-black/25">Phase 0{index + 1}</span>
                  <div className="h-0.5 w-8 bg-[#2B59FF] group-hover:w-16 transition-all duration-500" />
                </div>
                <h3 className="mb-6 text-[28px] font-medium leading-tight text-black">{phase}</h3>
                <p className="text-[16px] leading-relaxed text-black/50 font-light">
                  {index === 0 && 'We map the technical estate, identifying critical data gaps and high-value automation loops.'}
                  {index === 1 && 'Our team builds and integrates production-ready systems using secure, scalable cloud architecture.'}
                  {index === 2 && 'We provide the ongoing infrastructure and monitoring needed to scale decision intelligence.'}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ── PARTNERS — off-white for rhythm ────────────────────────── */}
        <section id="partners" className="bg-[#f4f4f0] py-24 overflow-hidden border-t border-black/[0.06]">
          <div className="mb-10 px-[6vw]">
            <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-black/30 text-center reveal">Ecosystem Partners</p>
          </div>
          <div className="partner-marquee border-y border-black/[0.06] py-14" aria-label="Technology partners">
            <div className="partner-marquee__track">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="partner-marquee__item grayscale invert opacity-25 hover:opacity-70 hover:grayscale-0 hover:invert-0 transition-all duration-500"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="partner-marquee__logo max-h-10"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ──────────────────────────────────────────────────────── */}
        <section id="contact" className="bg-black px-[6vw] py-32 border-t border-white/[0.06] text-white">
          <div className="grid gap-20 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="mb-6 text-[10px] font-mono tracking-[0.3em] uppercase text-[#2B59FF] reveal flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2B59FF] animate-pulse" />
                Access Point
              </p>
              <h2 className="max-w-4xl text-display text-[clamp(40px,6vw,92px)] leading-[0.95] text-white reveal reveal-delay-1">
                Scale your technical<br />decision advantage.
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
                <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/20">Headquarters</p>
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
              <span>Precision. Clarity. Authority.</span>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}

export default App;
