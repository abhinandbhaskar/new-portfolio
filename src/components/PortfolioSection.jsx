import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ExternalLink,
  Layers,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Server,
  Code2,
  Globe,
  CheckCircle2,
  Cpu,
  Zap,
  Building,
  ArrowRight,
  FolderGit2,
  Flame,
  Briefcase
} from 'lucide-react';
import { professionalProjects, personalProjects, allProjects } from '../data/projectsData';
import ProjectDetailsModal from './ProjectDetailsModal';

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioSection({ onOpenProjectDetail }) {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState('major'); // 'major' | 'professional' | 'personal' | 'all'
  const [selectedProject, setSelectedProject] = useState(null);

  const flagshipProjects = professionalProjects.filter(p => p.isFlagship);
  const extendedProfessional = professionalProjects.filter(p => !p.isFlagship);

  // GSAP batch entrance animation on tab change and initial scroll
  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll('.project-card');
    if (!cards || cards.length === 0) return;

    gsap.set(cards, { opacity: 0, y: 30 });

    const ctx = gsap.context(() => {
      ScrollTrigger.batch(cards, {
        start: 'top 88%',
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
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
  }, [activeTab]);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative z-20 w-full min-h-screen bg-black py-24 px-4 sm:px-6 lg:px-12 selection:bg-white selection:text-black border-t border-white/5"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-satoshi text-zinc-300">
            <FolderGit2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Production Work & Systems</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-syne tracking-tight text-white">
            Featured Systems & Portfolio.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-satoshi max-w-3xl">
            High-concurrency enterprise applications, cloud automation ERPs, and full-stack web products engineered with Django REST Framework and React.
          </p>
        </div>

        {/* Dedicated Full-Width Filter Tabs Bar */}
        <div className="w-full flex items-center gap-2 sm:gap-3.5 p-1.5 sm:p-2 rounded-2xl sm:rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-xl overflow-x-auto no-scrollbar flex-nowrap sm:flex-wrap">
          {/* Tab 1: Major Projects (Default) */}
          <button
            onClick={() => setActiveTab('major')}
            className={`flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-satoshi font-semibold whitespace-nowrap flex-shrink-0 transition-all duration-300 ${
              activeTab === 'major'
                ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20 scale-[1.02]'
                : 'text-zinc-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Flame className={`w-4 h-4 ${activeTab === 'major' ? 'text-black fill-black' : 'text-amber-400'}`} />
            <span>Major Projects ({flagshipProjects.length})</span>
          </button>

          {/* Tab 2: Professional Live */}
          <button
            onClick={() => setActiveTab('professional')}
            className={`flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-satoshi font-semibold whitespace-nowrap flex-shrink-0 transition-all duration-300 ${
              activeTab === 'professional'
                ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 scale-[1.02]'
                : 'text-zinc-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Professional Live ({professionalProjects.length})</span>
          </button>

          {/* Tab 3: Personal Builds */}
          <button
            onClick={() => setActiveTab('personal')}
            className={`flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-satoshi font-semibold whitespace-nowrap flex-shrink-0 transition-all duration-300 ${
              activeTab === 'personal'
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20 scale-[1.02]'
                : 'text-zinc-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>Personal Builds ({personalProjects.length})</span>
          </button>

          {/* Tab 4: All Systems */}
          <button
            onClick={() => setActiveTab('all')}
            className={`flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-satoshi font-semibold whitespace-nowrap flex-shrink-0 transition-all duration-300 ${
              activeTab === 'all'
                ? 'bg-white text-black shadow-lg scale-[1.02]'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>All Systems ({allProjects.length})</span>
          </button>
        </div>

        {/* Dynamic Project Grid Container */}
        <div ref={containerRef} className="space-y-16">
          {/* ================================================================= */}
          {/* SECTION 1: TOP 5 FLAGSHIP ENTERPRISE SYSTEMS (Major, Pro, or All) */}
          {/* ================================================================= */}
          {(activeTab === 'major' || activeTab === 'professional' || activeTab === 'all') && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400">
                  <Flame className="w-4 h-4 fill-amber-400/20" />
                  <span>
                    {activeTab === 'major'
                      ? 'Top 5 Flagship Systems (Core Showcase)'
                      : 'Flagship Enterprise Deployments (Top 5)'}
                  </span>
                </div>
                <span className="text-xs text-zinc-500 font-mono hidden sm:inline">Mission-Critical Architecture</span>
              </div>

              {/* 5 Flagship Showcase Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {flagshipProjects.map((project, index) => {
                  const colSpan = index === 0 || index === 1
                    ? 'lg:col-span-6'
                    : 'lg:col-span-4';

                  return (
                    <div
                      key={project.id}
                      className={`project-card ${colSpan} group relative overflow-hidden rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-amber-400/40 p-5 sm:p-8 flex flex-col justify-between min-h-[360px] sm:min-h-[380px] shadow-lg hover:shadow-amber-500/10 transition-all duration-300`}
                    >
                      {/* Ambient Inner Glow */}
                      <div className="absolute -top-16 -right-16 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-500/20 transition-all duration-500" />

                      {/* Card Top: Rank & Live Status */}
                      <div className="relative z-10 flex items-center justify-between pb-4">
                        <span className="px-3 py-1 rounded-full bg-amber-400 text-black text-xs font-mono font-extrabold shadow-sm">
                          {project.rank}
                        </span>
                        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                          <span>Live Production</span>
                        </div>
                      </div>

                      {/* Card Body: Title, Subtitle, Highlights */}
                      <div className="relative z-10 space-y-3 my-auto py-2">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-syne text-white tracking-tight group-hover:text-amber-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-zinc-300 font-satoshi font-medium">
                          {project.subtitle}
                        </p>
                        <p className="text-xs text-zinc-400 font-satoshi leading-relaxed line-clamp-3">
                          {project.description}
                        </p>

                        {/* Top 2 Highlights */}
                        <div className="space-y-1.5 pt-2">
                          {project.highlights.slice(0, 2).map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                              <span className="truncate">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Card Footer: Tags & Detail Action */}
                      <div className="relative z-10 pt-4 border-t border-white/5 flex flex-col xs:flex-row xs:items-center justify-between gap-3">
                        <div className="flex flex-wrap gap-1.5 overflow-hidden">
                          {project.tags.slice(0, 3).map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={() => {
                            if (onOpenProjectDetail) {
                              onOpenProjectDetail(project.id);
                            } else {
                              setSelectedProject(project);
                            }
                          }}
                          className="flex items-center gap-1.5 text-xs font-syne font-bold text-amber-400 hover:text-white transition-colors flex-shrink-0 self-end xs:self-auto"
                        >
                          <span>Explore Architecture</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* SECTION 2: EXTENDED PROFESSIONAL LIVE PROJECTS (Pro or All) */}
          {/* ================================================================= */}
          {(activeTab === 'professional' || activeTab === 'all') && (
            <div className="space-y-6 pt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400">
                  <Building className="w-4 h-4 text-emerald-400" />
                  <span>Enterprise & Client Live Deployments ({extendedProfessional.length})</span>
                </div>
                <span className="text-xs text-zinc-500 font-mono">Industry Grade Systems</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {extendedProfessional.map((project) => (
                  <div
                    key={project.id}
                    className="project-card group relative overflow-hidden rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-emerald-500/30 p-6 flex flex-col justify-between min-h-[220px] shadow-lg hover:shadow-emerald-500/10 transition-all duration-300"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                          {project.badge}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold font-syne text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs text-zinc-400 font-satoshi line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 2).map((t, idx) => (
                          <span key={idx} className="text-[10px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-satoshi text-zinc-300 hover:text-white flex items-center gap-1"
                      >
                        
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* SECTION 3: PERSONAL FULL-STACK PROJECTS (Personal or All) */}
          {/* ================================================================= */}
          {(activeTab === 'personal' || activeTab === 'all') && (
            <div className="space-y-6 pt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400">
                  <Code2 className="w-4 h-4" />
                  <span>Personal Full-Stack Builds & Live Demos ({personalProjects.length})</span>
                </div>
                <span className="text-xs text-zinc-500 font-mono">React • Django REST • APIs</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {personalProjects.map((project) => (
                  <div
                    key={project.id}
                    className="project-card group relative overflow-hidden rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-blue-500/30 flex flex-col justify-between shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                  >
                    {/* Project Image Preview */}
                    <div className="relative h-48 w-full overflow-hidden bg-zinc-900 border-b border-white/10">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                      <span className="absolute top-3 left-3 text-[11px] font-mono text-blue-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15">
                        {project.badge}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h4 className="text-lg sm:text-xl font-bold font-syne text-white tracking-tight group-hover:text-blue-300 transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-xs text-zinc-400 font-satoshi leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="pt-4 border-t border-white/5 flex flex-col xs:flex-row items-stretch xs:items-center gap-2">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-syne font-semibold text-xs transition-all duration-200 shadow-md hover:scale-[1.02]"
                          >
                            <span>Live Demo</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                        <button
                          onClick={() => {
                            if (onOpenProjectDetail) {
                              onOpenProjectDetail(project.id);
                            } else {
                              setSelectedProject(project);
                            }
                          }}
                          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/15 text-zinc-200 hover:text-white border border-white/10 text-xs font-satoshi transition-all"
                        >
                          <span>View Details</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Interactive Project Details Modal */}
      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
