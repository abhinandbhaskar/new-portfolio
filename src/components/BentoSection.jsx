import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Send,
  Sparkles,
  CheckCircle2,
  RotateCcw,
  Wrench,
  Palette,
  GraduationCap,
  Award,
  Zap,
  Server,
  Code2,
  ArrowRightLeft,
  Database,
  ShieldCheck,
  Cpu,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const wallpapers = [
  '/netflix1.png',
  '/getmehelphome.png',
  '/dietmasterhome.jpg',
  '/netflixclone.png',
  '/homelyfoodshome.png',
  '/fitzahome.jpg',
  '/weatherhome.png',
];

const tools = [
  { name: 'Antigravity', src: '/antigravity.webp' },
  { name: 'Claude', src: '/claude.jpg'},
  { name: 'Chatgpt', src: '/gpt.png' },
  { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Django', src: '/django.jpg' },
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Javascript', src: '/javascript.png' },
  { name: 'Bootstrap', src: '/bootstrap.jpg' },
  { name: 'Tailwind CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'PostgreSQL', src: '/postgressql.png' },
  { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'GitHub', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invert: true },
  { name: 'Git', src: '/git.png' },
];

export default function BentoSection() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  // Form State
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // GSAP ScrollTrigger batch animation
  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.bento-card');
    if (!cards || cards.length === 0) return;

    // Set initial state to avoid FOUC
    gsap.set(cards, { opacity: 0, y: 40 });

    const ctx = gsap.context(() => {
      ScrollTrigger.batch(cards, {
        start: 'top 85%',
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            overwrite: 'auto',
          });
        },
        once: true,
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  // Form Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim() || isSubmitting) return;
    setIsSubmitting(true);

    try {
      const accessKey =
        import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
        'baa4bd95-afc6-4c79-be66-2505072d518a';

      const formData = new FormData();
      formData.append('access_key', accessKey);
      formData.append('from_name', 'Portfolio Bento Intro');
      formData.append('subject', 'Quick Message from Portfolio Bento');
      formData.append('name', 'Bento Visitor');
      formData.append('message', message);

      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      setIsSubmitted(true);
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative z-20 w-full min-h-screen bg-black pt-16 pb-24 px-4 sm:px-6 lg:px-12 selection:bg-white selection:text-black"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-satoshi text-zinc-300">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>About Me & Craft</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-syne tracking-tight text-white">
            Building. Engineering. Solving.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-satoshi max-w-2xl">
            A glimpse into my journey as a full-stack developer, my technical expertise, and the solutions I’ve built to solve real-world problems.
          </p>
        </div>

        {/* Bento Grid: 12 Columns Layout */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-5 auto-rows-[minmax(180px,auto)]"
        >
          {/* ========================================================= */}
          {/* CARD 1: Wallpaper Gallery (5 cols, 2 rows) */}
          {/* ========================================================= */}
          <div className="bento-card col-span-12 lg:col-span-5 lg:row-span-2 group relative overflow-hidden rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-4 sm:p-6 flex flex-col justify-between min-h-[340px] sm:min-h-[360px] shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
            {/* Header info */}
            <div className="relative z-10 flex items-center justify-between pb-3 sm:pb-4">
              <div className="flex items-center gap-2 text-zinc-300 text-xs font-satoshi font-medium uppercase tracking-wider">
                <Palette className="w-4 h-4 text-blue-400" />
                <span>Visual Gallery</span>
              </div>
              <span className="text-[11px] font-mono text-zinc-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                Looping
              </span>
            </div>

            {/* Horizontal infinite sliding track */}
            <div className="relative w-full my-auto py-3 overflow-hidden rounded-2xl">
              {/* Gradient edge fades */}
              <div className="absolute left-0 inset-y-0 w-12 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 inset-y-0 w-12 bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none" />

              <div className="flex gap-4 w-max animate-slide-horizontal">
                {[...wallpapers, ...wallpapers].map((imgUrl, i) => (
                  <div
                    key={i}
                    className="relative w-64 sm:w-[352px] lg:w-[380px] h-44 sm:h-56 rounded-2xl overflow-hidden flex-shrink-0 border border-white/15 bg-zinc-900 group/img shadow-md transition-all duration-300"
                  >
                    <img
                      src={imgUrl}
                      alt={`Wallpaper ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover/img:opacity-30 transition-opacity pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Caption */}
            <div className="relative z-10 pt-3 flex items-center justify-between text-xs text-zinc-400 font-satoshi">
              <span>Curated Digital Visuals</span>
              <span className="text-zinc-400">Featured Projects</span>
            </div>

            {/* Top & Bottom Card Gradients */}
            <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          </div>

          {/* ========================================================= */}
          {/* CARD 2: Intro Card (7 cols, 2 rows) */}
          {/* ========================================================= */}
          <div className="bento-card col-span-12 lg:col-span-7 lg:row-span-2 group relative overflow-hidden rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-5 sm:p-7 lg:p-9 flex flex-col justify-between min-h-[340px] sm:min-h-[360px] shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
            {/* Ambient inner glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-satoshi text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                <span>Open for Opportunities</span>
              </div>

              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-syne text-white tracking-tight">
                Hi, I'm Abhinand Bhaskar
              </h3>

              <p className="text-xs sm:text-base text-zinc-300 font-satoshi leading-relaxed max-w-xl">
                I'm a Full-Stack Developer with 1+ year of professional experience building production web applications, ERP systems, and business automation platforms. I specialize in Python, Django, Django REST Framework, React.js, and PostgreSQL, with a focus on building clean, reliable, and scalable software solutions.
              </p>
            </div>

            {/* Interactive Message Form / Slide Success */}
            <div className="mt-6 sm:mt-8 relative overflow-hidden">
              {isSubmitted ? (
                <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 animate-in fade-in slide-in-from-left-4 duration-500">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold font-syne">Message Dispatched!</p>
                      <p className="text-xs text-emerald-300/80 font-satoshi">
                        Thanks for reaching out! I'll get back to you shortly.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setMessage('');
                    }}
                    className="p-2 text-emerald-400 hover:text-white rounded-lg hover:bg-emerald-900/40 transition-colors"
                    title="Send another"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Say hi or propose an idea..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-white placeholder-zinc-400 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all font-satoshi"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={!message.trim() || isSubmitting}
                    className="flex items-center justify-center gap-2 bg-white text-black hover:bg-zinc-200 disabled:opacity-40 disabled:hover:bg-white font-syne font-semibold text-xs sm:text-sm px-5 py-3 sm:py-3.5 rounded-2xl transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* ========================================================= */}
          {/* CARD 3: Tools Marquee (6 cols, 1 row) */}
          {/* ========================================================= */}
          <div className="bento-card col-span-12 lg:col-span-6 lg:row-span-1 group relative overflow-hidden rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 flex flex-col justify-between min-h-[190px] shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
            <div className="flex items-center justify-between pb-2">
              <div className="flex items-center gap-2 text-zinc-300 text-xs font-satoshi font-medium uppercase tracking-wider">
                <Wrench className="w-4 h-4 text-purple-400" />
                <span>Tools & Technologies</span>
              </div>
              <span className="text-[11px] font-mono text-zinc-400">Daily Stack</span>
            </div>

            {/* Marquee Row */}
            <div className="relative w-full overflow-hidden py-2 my-auto">
              <div className="absolute left-0 inset-y-0 w-10 bg-gradient-to-r from-black/90 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 inset-y-0 w-10 bg-gradient-to-l from-black/90 to-transparent z-10 pointer-events-none" />

              <div className="flex gap-4 items-center w-max animate-marquee">
                {[...tools, ...tools].map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all flex-shrink-0 group/tool"
                  >
                    <img
                      src={tool.src}
                      alt={tool.name}
                      className={`w-5 h-5 object-contain transition-transform group-hover/tool:scale-110 ${
                        tool.invert ? 'filter invert brightness-125' : ''
                      }`}
                      loading="lazy"
                    />
                    <span className="text-xs font-satoshi font-medium text-zinc-200">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-zinc-400 font-satoshi">
              <span>Frameworks • AI Runtimes • Databases</span>
              <span>13+ Technologies</span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* CARD 4: Education Card (6 cols, 2 rows) */}
          {/* ========================================================= */}
          <div className="bento-card col-span-12 lg:col-span-6 lg:row-span-2 group relative overflow-hidden rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 sm:p-7 flex flex-col justify-between min-h-[380px] shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
            {/* Ambient inner glow */}
            <div className="absolute -top-24 -right-24 w-52 h-52 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header info */}
            <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/5">
              <div className="flex items-center gap-2 text-zinc-300 text-xs font-satoshi font-medium uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                <span>Education</span>
              </div>
              <span className="text-[11px] font-mono text-zinc-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                2018 – 2024
              </span>
            </div>

            {/* Education Timeline */}
            <div className="relative z-10 py-3 space-y-4 my-auto">
              {/* Item 1: Bachelor's Degree */}
              <div className="relative pl-6 before:absolute before:left-2 before:top-2 before:bottom-[-16px] before:w-[2px] before:bg-gradient-to-b before:from-emerald-400 before:to-blue-500">
                <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                </span>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h4 className="text-sm sm:text-base font-bold font-syne text-white">
                      Bachelor's Degree in Computer Science
                    </h4>
                    <span className="text-[11px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                      Distinction
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 font-satoshi">
                    St. Pius X College, Rajapuram <span className="text-zinc-500">•</span> Affiliated to Kannur University
                  </p>
                  <p className="text-[11px] text-zinc-400 font-mono">
                    2021 – 2024
                  </p>
                </div>
              </div>

              {/* Item 2: Higher Secondary */}
              <div className="relative pl-6 before:absolute before:left-2 before:top-2 before:bottom-[-16px] before:w-[2px] before:bg-gradient-to-b before:from-blue-500 before:to-purple-500">
                <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-500/20 border border-blue-400 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                </span>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h4 className="text-sm sm:text-base font-bold font-syne text-white">
                      Higher Secondary (12th Grade)
                    </h4>
                    <span className="text-[11px] font-mono text-blue-300 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full">
                      94% Score
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 font-satoshi">
                    Durga HSS, Kanhangad <span className="text-zinc-500">•</span> Computer Science
                  </p>
                  <p className="text-[11px] text-zinc-400 font-mono">
                    2019 – 2021
                  </p>
                </div>
              </div>

              {/* Item 3: SSLC */}
              <div className="relative pl-6">
                <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-purple-500/20 border border-purple-400 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                </span>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h4 className="text-sm sm:text-base font-bold font-syne text-white">
                      SSLC (10th Grade)
                    </h4>
                    <span className="text-[11px] font-mono text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-full">
                      Full A+ (99%)
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 font-satoshi">
                    Durga Higher Secondary School, Kanhangad
                  </p>
                  <p className="text-[11px] text-zinc-400 font-mono">
                    2018 – 2019
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom info */}
            <div className="relative z-10 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400 font-satoshi">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Award className="w-3.5 h-3.5" />
                <span>Graduated with Distinction</span>
              </span>
              <span className="text-zinc-500">Kannur University</span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* CARD 5: Django REST + React Superpower Card (6 cols, 1 row) */}
          {/* ========================================================= */}
          <div className="bento-card col-span-12 lg:col-span-6 lg:row-span-1 group relative overflow-hidden rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-5 sm:p-6 flex flex-col justify-between min-h-[190px] shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
            {/* Ambient Dual Glowing Auras */}
            <div className="absolute -top-12 -left-12 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500" />
            <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-500" />

            {/* Card Header */}
            <div className="relative z-10 flex items-center justify-between pb-2">
              <div className="flex items-center gap-2 text-zinc-300 text-xs font-satoshi font-medium uppercase tracking-wider">
                <Zap className="w-4 h-4 text-amber-400 fill-amber-400/20" />
                <span>Core Superpower</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Full-Stack Synergy</span>
              </div>
            </div>

            {/* Architecture Node Stream Visualizer */}
            <div className="relative z-10 py-2.5 my-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-3">
              {/* Left Node: Django REST Framework */}
              <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-emerald-500/30 transition-all duration-300 flex-1">
                <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-xl overflow-hidden bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <img
                    src="/django.jpg"
                    alt="Django"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <Server className="w-5 h-5 text-emerald-400 absolute" style={{ display: 'none' }} />
                </div>
                <div className="space-y-0.5 overflow-hidden">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs sm:text-sm font-bold font-syne text-white truncate">
                      Django REST
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-emerald-300/80 font-mono truncate">
                    Scalable APIs & ORM
                  </p>
                </div>
              </div>

              {/* Center Animated Data-Flow Bridge */}
              <div className="flex sm:flex-col items-center justify-center gap-1 px-1 flex-shrink-0">
                <div className="relative flex items-center justify-center w-6 sm:w-10">
                  <ArrowRightLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 animate-pulse rotate-90 sm:rotate-0" />
                  <span className="absolute -top-1 w-2 h-2 rounded-full bg-cyan-400/40 blur-xs animate-ping" />
                </div>
                <span className="text-[9px] font-mono tracking-tighter text-zinc-400 uppercase">
                  JSON / REST
                </span>
              </div>

              {/* Right Node: React */}
              <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-cyan-500/30 transition-all duration-300 flex-1">
                <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 shadow-inner p-1.5 sm:p-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React"
                    className="w-full h-full object-contain animate-spin"
                    style={{ animationDuration: '16s' }}
                  />
                </div>
                <div className="space-y-0.5 overflow-hidden">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs sm:text-sm font-bold font-syne text-white truncate">
                      React UI
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-cyan-300/80 font-mono truncate">
                    Interactive State & DOM
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Capability Tags */}
            <div className="relative z-10 pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-[11px] text-zinc-400 font-satoshi">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-zinc-300 font-mono text-[10px]">
                  JWT Auth
                </span>
                <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-zinc-300 font-mono text-[10px]">
                  PostgreSQL
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-zinc-300 font-mono text-[10px]">
                  Tailwind UI
                </span>
              </div>
              <span className="text-zinc-400 font-satoshi text-[11px]">
                High-Velocity Full-Stack
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
