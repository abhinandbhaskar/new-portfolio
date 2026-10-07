import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  Layers,
  Server,
  Database,
  ShieldCheck,
  Zap,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Code2,
  Globe,
  ArrowRight,
  Lock,
  Activity,
  Cpu,
  BarChart3,
  Boxes,
  Terminal,
  Radio,
  Clock,
  ArrowRightLeft,
  Flame
} from 'lucide-react';
import { personalProjectDetails } from '../data/personalProjectDetails';
import { majorProjectDetails } from '../data/majorProjectDetails';
import Footer from './Footer';

// Combined project catalog
const allProjectsMap = {
  ...majorProjectDetails,
  ...personalProjectDetails,
};

const majorKeys = Object.keys(majorProjectDetails);
const personalKeys = Object.keys(personalProjectDetails);

export default function ProjectDetailPage({ projectId, onBack, onNavigateProject }) {
  const project = allProjectsMap[projectId] || majorProjectDetails['vps-automation-erp'] || personalProjectDetails['fitza-ecommerce'];
  const isClient = Boolean(project.isClientProject);

  // Group-aware next/prev navigation
  const currentKeys = isClient ? majorKeys : personalKeys;
  const currentIndex = currentKeys.indexOf(project.id);
  const safeIndex = currentIndex === -1 ? 0 : currentIndex;
  const nextProjectKey = currentKeys[(safeIndex + 1) % currentKeys.length];
  const prevProjectKey = currentKeys[(safeIndex - 1 + currentKeys.length) % currentKeys.length];
  const nextProject = allProjectsMap[nextProjectKey];
  const prevProject = allProjectsMap[prevProjectKey];

  // Image Carousel state (for personal projects only)
  const images = project.images && project.images.length > 0 ? project.images : [];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Reset carousel index and scroll to top when project changes
  useEffect(() => {
    setCurrentImgIndex(0);
    setIsAutoPlaying(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    }
  }, [projectId]);

  // Auto-play carousel for personal projects
  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const handleNext = () => {
    setCurrentImgIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
  };

  const handlePrev = () => {
    setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="min-h-screen bg-black text-white font-satoshi selection:bg-white selection:text-black overflow-x-hidden relative">
      {/* Background Ambience */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="fixed bottom-1/4 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Floating Top Navigation Pill */}
      <header className="fixed top-3 sm:top-6 inset-x-0 z-50 flex items-center justify-between max-w-6xl mx-auto px-3 sm:px-6 pointer-events-none">
        <button
          onClick={onBack}
          className="pointer-events-auto flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black/70 hover:bg-black/90 text-zinc-300 hover:text-white border border-white/15 backdrop-blur-xl transition-all duration-200 shadow-2xl hover:scale-105 active:scale-95 group text-xs sm:text-sm font-satoshi font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-400 group-hover:-translate-x-1 transition-transform" />
          <span className="hidden sm:inline">Back to Portfolio</span>
          <span className="sm:hidden">Back</span>
        </button>

        <div className="pointer-events-auto flex items-center gap-2">
          {isClient ? (
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px] sm:text-xs font-mono backdrop-blur-xl shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="hidden sm:inline">Live Enterprise Deployment</span>
                <span className="sm:hidden">Live System</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono backdrop-blur-xl">
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>NDA Protected</span>
              </div>
            </div>
          ) : (
            <>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/15 backdrop-blur-xl transition-all hover:scale-110"
                  title="GitHub Repository"
                >
                  <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              )}
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white text-black hover:bg-zinc-200 font-syne font-semibold text-xs sm:text-sm transition-all duration-200 shadow-lg hover:scale-105 active:scale-95"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </a>
              )}
            </>
          )}
        </div>
      </header>

      {/* Main Content Container */}
      <main className="relative z-10 pt-20 sm:pt-28 pb-20 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Title Header */}
        <section className="space-y-4 pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-mono text-blue-300">
            {isClient ? (
              <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
            ) : (
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            )}
            <span>{project.badge}</span>
            <span className="text-zinc-500">•</span>
            <span className="text-zinc-400 font-satoshi">{project.category}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-syne tracking-tight text-white leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 font-satoshi max-w-3xl leading-relaxed">
            {project.subtitle}
          </p>

          {isClient && project.transformation && (
            <div className="flex flex-wrap gap-2 pt-1 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                <strong className="text-white">Industry:</strong> {project.industry}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                <strong className="text-emerald-200">Scope:</strong> {project.transformation}
              </span>
            </div>
          )}
        </section>

        {/* ========================================================================= */}
        {/* HERO VISUAL AREA: Architecture Blueprint (Client) OR Image Carousel (Personal) */}
        {/* ========================================================================= */}
        {isClient ? (
          /* ENTERPRISE CLIENT SYSTEM: High-Tech Architecture Blueprint & Live Telemetry (NO IMAGES) */
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 Cols: System Architecture Blueprint & Telemetry Dashboard */}
            <div className="lg:col-span-7 space-y-4">
              <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/15 p-6 sm:p-8 space-y-6 shadow-2xl shadow-black/80 relative overflow-hidden group">
                {/* Ambient Glows */}
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                {/* Header Row */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                      <Cpu className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold font-syne text-white">
                        System Architecture Blueprint
                      </h3>
                      <p className="text-[11px] font-mono text-zinc-400">
                        Production Topology & Real-Time Specifications
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>Live Production</span>
                  </div>
                </div>

                {/* 4 Telemetry Metrics Matrix */}
                {project.telemetry && (
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 uppercase">
                        <Activity className="w-3.5 h-3.5 text-emerald-400" />
                        <span>System Uptime</span>
                      </div>
                      <p className="text-sm sm:text-base font-bold font-syne text-white">
                        {project.telemetry.uptime}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 uppercase">
                        <Clock className="w-3.5 h-3.5 text-cyan-400" />
                        <span>API Latency</span>
                      </div>
                      <p className="text-sm sm:text-base font-bold font-syne text-white">
                        {project.telemetry.latency}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 uppercase">
                        <Boxes className="w-3.5 h-3.5 text-amber-400" />
                        <span>Execution Pipeline</span>
                      </div>
                      <p className="text-xs sm:text-sm font-semibold font-satoshi text-zinc-200">
                        {project.telemetry.concurrency}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 uppercase">
                        <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                        <span>Security & Access</span>
                      </div>
                      <p className="text-xs sm:text-sm font-semibold font-satoshi text-zinc-200">
                        {project.telemetry.security}
                      </p>
                    </div>
                  </div>
                )}

                {/* Interactive Multi-Tier Architecture Topology Flow */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                    Three-Tier Topology Stream
                  </span>

                  <div className="p-3.5 sm:p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3 font-mono text-xs">
                    {/* Tier 1: Client Layer */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span className="text-zinc-200 font-semibold text-[11px] sm:text-xs">Tier 1: Client & Field Interface</span>
                      </div>
                      <span className="text-[10px] text-zinc-400">React SPA • Responsive Admin • Field PWA</span>
                    </div>

                    {/* Stream Arrow 1 */}
                    <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-zinc-500 text-[9px] sm:text-[10px] text-center px-1">
                      <ArrowRightLeft className="w-3 h-3 text-cyan-400 animate-pulse flex-shrink-0" />
                      <span>RESTful JSON APIs • Dynamic State Streams • Secure Tokens</span>
                    </div>

                    {/* Tier 2: Backend & Task Engine */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-2">
                        <Server className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span className="text-zinc-200 font-semibold text-[11px] sm:text-xs">Tier 2: Business & Orchestration</span>
                      </div>
                      <span className="text-[10px] text-zinc-400">Django REST Framework • Background Task Workers</span>
                    </div>

                    {/* Stream Arrow 2 */}
                    <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-zinc-500 text-[9px] sm:text-[10px] text-center px-1">
                      <ArrowRightLeft className="w-3 h-3 text-emerald-400 animate-pulse flex-shrink-0" />
                      <span>Transactional Ledger • ACID Compliance • Async Queues</span>
                    </div>

                    {/* Tier 3: Database & Hardware Handshakes */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-2">
                        <Database className="w-4 h-4 text-purple-400 flex-shrink-0" />
                        <span className="text-zinc-200 font-semibold text-[11px] sm:text-xs">Tier 3: Storage & Integrations</span>
                      </div>
                      <span className="text-[10px] text-zinc-400">PostgreSQL • RFID Hardware • WhatsApp & IVR</span>
                    </div>
                  </div>
                </div>

                {/* Confidentiality Warning Footer */}
                <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-2.5 text-xs text-amber-200/90 font-satoshi">
                  <Lock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>
                    <strong>Client Confidentiality Guarantee:</strong> Production screenshots are omitted to safeguard live client operational data and proprietary internal workflows.
                  </span>
                </div>
              </div>
            </div>

            {/* Right 5 Cols: About & Stack */}
            <div className="lg:col-span-5 space-y-6">
              {/* About Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 space-y-4 shadow-xl">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-300">
                  <Code2 className="w-4 h-4 text-emerald-400" />
                  <span>System Overview & Mission</span>
                </div>
                <p className="text-sm text-zinc-300 font-satoshi leading-relaxed">
                  {project.about}
                </p>
              </div>

              {/* Tech Stack Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 space-y-3.5 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-300">
                    <Layers className="w-4 h-4 text-purple-400" />
                    <span>Production Stack</span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {project.techStack.length} Technologies
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-xs font-mono text-zinc-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Enterprise Assurance Card */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2 text-xs text-zinc-400">
                <span className="font-mono text-zinc-300 uppercase tracking-wider block font-semibold">
                  Core Enterprise Systems
                </span>
                <p className="font-satoshi leading-relaxed">
                  {project.coreSystems || 'Enterprise ERP Architecture with automated data pipelines and integrated client workflows.'}
                </p>
              </div>
            </div>
          </section>
        ) : (
          /* PERSONAL PROJECT: Interactive Image Carousel */
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Interactive Image Carousel (7 cols) */}
            <div className="lg:col-span-7 space-y-3">
              <div
                className="group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/15 aspect-video shadow-2xl shadow-black/80 flex items-center justify-center"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <img
                  src={images[currentImgIndex]}
                  alt={`${project.title} screenshot ${currentImgIndex + 1}`}
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = '/admindashboard.jpg';
                  }}
                />

                {/* Gradient edge shading */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Prev / Next Carousel Controls (if multiple images) */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      aria-label="Previous screenshot"
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      aria-label="Next screenshot"
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}

                {/* Bottom Carousel Indicators */}
                {images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/50 px-3 py-1.5 rounded-full border border-white/15 backdrop-blur-md">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setCurrentImgIndex(idx);
                          setIsAutoPlaying(false);
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          currentImgIndex === idx
                            ? 'w-6 bg-white'
                            : 'w-2 bg-white/40 hover:bg-white/70'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              <p className="text-[11px] font-mono text-zinc-500 text-center">
                Screenshot {currentImgIndex + 1} of {images.length} • High-Resolution Production Capture
              </p>
            </div>

            {/* Right Column: About & Tech Stack (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* About Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 space-y-4 shadow-xl">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-300">
                  <Code2 className="w-4 h-4 text-emerald-400" />
                  <span>About The Project</span>
                </div>
                <p className="text-sm text-zinc-300 font-satoshi leading-relaxed">
                  {project.about}
                </p>
              </div>

              {/* Tech Stack Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 space-y-3.5 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-300">
                    <Layers className="w-4 h-4 text-purple-400" />
                    <span>Tech Stack</span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {project.techStack.length} Technologies
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-xs font-mono text-zinc-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2">
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white text-black hover:bg-zinc-200 font-syne font-semibold text-sm transition-all duration-200 shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Explore Live Demo</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-zinc-200 hover:text-white border border-white/10 font-satoshi text-sm transition-all duration-200 hover:scale-[1.02]"
                  >
                    <Github className="w-4 h-4" />
                    <span>Repository</span>
                  </a>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* SECTION: Development Phases (for Client ERPs) */}
        {/* ========================================================================= */}
        {project.phases && project.phases.length > 0 && (
          <section className="space-y-6 pt-4 border-t border-white/10">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400">
                <Boxes className="w-4 h-4 text-amber-400" />
                <span>Architecture Roadmap</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-syne text-white">
                Engineered Development Phases
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {project.phases.map((phaseItem, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-amber-400/30 transition-all duration-300 space-y-3 relative group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full font-bold">
                      {phaseItem.phase}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">Step 0{idx + 1}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-syne text-white group-hover:text-amber-300 transition-colors">
                    {phaseItem.title}
                  </h3>
                  <p className="text-xs text-zinc-300 font-satoshi leading-relaxed">
                    {phaseItem.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* SECTION: What We Automated (Capabilities Grid) */}
        {/* ========================================================================= */}
        {project.whatWeAutomated && project.whatWeAutomated.length > 0 && (
          <section className="space-y-6 pt-4 border-t border-white/10">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Operational Transformation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-syne text-white">
                What We Automated & Integrated
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {project.whatWeAutomated.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all flex items-start gap-3 group"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-satoshi text-zinc-300 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* SECTION: Business Value & Operational ROI */}
        {/* ========================================================================= */}
        {project.businessValue && project.businessValue.length > 0 && (
          <section className="space-y-6 pt-4 border-t border-white/10">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400">
                <BarChart3 className="w-4 h-4 text-blue-400" />
                <span>Impact Analysis</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-syne text-white">
                Business Value & ROI Delivered
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {project.businessValue.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-blue-500/30 transition-all space-y-2.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    <h3 className="text-sm sm:text-base font-bold font-syne text-white">
                      {item.metric}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-300 font-satoshi leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* SECTION: User Roles & Access Architecture */}
        {/* ========================================================================= */}
        {project.userRoles && project.userRoles.length > 0 && (
          <section className="space-y-6 pt-4 border-t border-white/10">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-400">
                <ShieldCheck className="w-4 h-4 text-purple-400" />
                <span>Security & User Personas</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-syne text-white">
                User Roles & System Privileges
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {project.userRoles.map((roleItem, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2.5 py-0.5 rounded-full font-semibold">
                      {roleItem.badge}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold font-syne text-white">
                    {roleItem.role}
                  </h3>
                  <p className="text-xs text-zinc-300 font-satoshi leading-relaxed">
                    {roleItem.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* SECTION: Core Features (for Personal Projects if no whatWeAutomated) */}
        {/* ========================================================================= */}
        {project.coreFeatures && project.coreFeatures.length > 0 && (
          <section className="space-y-6 pt-4 border-t border-white/10">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400">
                <Zap className="w-4 h-4 text-blue-400" />
                <span>Functional Capabilities</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-syne text-white">
                Core Features & Workflows
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.coreFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex items-start gap-3.5 group"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-xs sm:text-sm text-zinc-300 font-satoshi leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* SECTION: Technical Implementation & Scale */}
        {/* ========================================================================= */}
        {project.technicalImplementation && (
          <section className="space-y-6 pt-4 border-t border-white/10">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400">
                <Server className="w-4 h-4 text-emerald-400" />
                <span>Engineering Stack</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-syne text-white">
                Technical Implementation & Architecture
              </h2>
            </div>

            <div className="p-7 sm:p-9 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 space-y-4 leading-relaxed">
              <p className="text-sm sm:text-base text-zinc-300 font-satoshi leading-relaxed">
                {project.technicalImplementation}
              </p>
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* SECTION: Challenges & Solutions */}
        {/* ========================================================================= */}
        {project.challengesAndSolutions && project.challengesAndSolutions.length > 0 && (
          <section className="space-y-6 pt-4 border-t border-white/10">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Problem Solving</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-syne text-white">
                Key Challenges & Engineering Solutions
              </h2>
            </div>

            <div className="space-y-4">
              {project.challengesAndSolutions.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-amber-500/20 transition-all space-y-3"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="text-xs font-mono font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-0.5 rounded-full flex-shrink-0">
                      Challenge {idx + 1}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold font-syne text-white">
                      {item.challenge}
                    </h3>
                  </div>
                  <div className="pl-0 sm:pl-3 border-l-0 sm:border-l-2 sm:border-emerald-500/30 space-y-1">
                    <p className="text-xs font-mono uppercase text-emerald-400 font-semibold tracking-wider">
                      Engineered Solution:
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-300 font-satoshi leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* BOTTOM NAVIGATION: Next / Previous Projects */}
        {/* ========================================================================= */}
        <section className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => onNavigateProject(prevProject.id)}
            className="w-full sm:w-auto flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all group text-left"
          >
            <ChevronLeft className="w-5 h-5 text-zinc-400 group-hover:-translate-x-1 transition-transform" />
            <div>
              <span className="text-[10px] font-mono uppercase text-zinc-500 block">
                {isClient ? 'Previous Major System' : 'Previous Project'}
              </span>
              <span className="text-xs sm:text-sm font-bold font-syne text-white group-hover:text-amber-300 transition-colors">
                {prevProject.title}
              </span>
            </div>
          </button>

          <button
            onClick={onBack}
            className="w-full sm:w-auto px-5 py-3 rounded-2xl sm:rounded-full bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white border border-white/10 text-xs font-satoshi transition-all text-center"
          >
            Return to All Projects
          </button>

          <button
            onClick={() => onNavigateProject(nextProject.id)}
            className="w-full sm:w-auto flex items-center justify-end gap-3 p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all group text-right"
          >
            <div>
              <span className="text-[10px] font-mono uppercase text-zinc-500 block">
                {isClient ? 'Next Major System' : 'Next Project'}
              </span>
              <span className="text-xs sm:text-sm font-bold font-syne text-white group-hover:text-amber-300 transition-colors">
                {nextProject.title}
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-zinc-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
