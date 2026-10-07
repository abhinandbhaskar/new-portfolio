import React, { useEffect } from 'react';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Server,
  Layers,
  Sparkles,
  ShieldCheck,
  Building,
  ArrowUpRight,
  Globe,
  Cpu
} from 'lucide-react';

export default function ProjectDetailsModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const isProfessional = project.category === 'professional';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
      {/* Dark Blurred Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity animate-in fade-in duration-300"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto rounded-3xl bg-zinc-950/95 border border-white/15 p-4 sm:p-8 md:p-10 shadow-2xl z-10 space-y-6 text-white font-satoshi selection:bg-white selection:text-black">
        {/* Header Row */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              {project.rank && (
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-semibold">
                  {project.rank}
                </span>
              )}
              <span
                className={`px-3 py-1 rounded-full text-xs font-mono font-medium ${
                  isProfessional
                    ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                    : 'bg-blue-500/10 border border-blue-500/30 text-blue-300'
                }`}
              >
                {project.badge || (isProfessional ? 'Professional Live' : 'Personal Project')}
              </span>
              {isProfessional && (
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Live Production</span>
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-syne text-white tracking-tight">
              {project.title}
            </h3>

            {project.subtitle && (
              <p className="text-sm sm:text-base text-zinc-300 font-satoshi font-medium">
                {project.subtitle}
              </p>
            )}
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white border border-white/10 transition-all hover:scale-105 flex-shrink-0"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Banner / Image Showcase */}
        {project.image && (
          <div className="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-inner">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
          </div>
        )}

        {/* Description */}
        <div className="space-y-2">
          <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-mono font-semibold">
            System Overview
          </h4>
          <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Highlights / Engineered Capabilities */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-mono font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Key Architectural Capabilities</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs sm:text-sm text-zinc-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Architecture Details if provided */}
        {project.architecture && (
          <div className="space-y-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-zinc-300">
            <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-mono font-semibold flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-blue-400" />
              <span>Technical Architecture</span>
            </h4>
            <div className="space-y-1.5 font-satoshi">
              {project.architecture.backend && (
                <p>
                  <strong className="text-white font-mono">Backend:</strong> {project.architecture.backend}
                </p>
              )}
              {project.architecture.frontend && (
                <p>
                  <strong className="text-white font-mono">Frontend:</strong> {project.architecture.frontend}
                </p>
              )}
              {project.architecture.security && (
                <p>
                  <strong className="text-white font-mono">Security & Data:</strong> {project.architecture.security}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Tech Stack Chips */}
        <div className="space-y-2">
          <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-mono font-semibold">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2 sm:gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-syne font-bold text-sm transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/20 text-center"
              >
                <span>Launch Live Application</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/15 text-zinc-200 hover:text-white border border-white/10 text-sm font-satoshi transition-all text-center"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white border border-white/10 text-sm font-satoshi transition-all text-center"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
