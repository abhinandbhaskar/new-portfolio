import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    const gentleSlowEase = (t) => (1 - Math.cos(Math.PI * t)) / 2;
    if (window.lenis) {
      window.lenis.scrollTo(0, {
        duration: 2.8,
        easing: gentleSlowEase,
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative z-20 w-full bg-black border-t border-white/10 py-12 sm:py-16 px-4 sm:px-10 lg:px-14">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand info */}
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <img src="/ab.png" alt="Logo" className="w-6 h-6 object-contain" />
            <span className="font-syne font-bold text-lg text-white tracking-tight">Abhinand Bhaskar</span>
          </div>
          <p className="text-xs text-zinc-400 font-satoshi max-w-sm">
            Full-Stack Developer · Python · Django · React
          </p>
        </div>

        {/* Links & Socials */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-2.5 sm:gap-4">
          <a
            href="https://github.com/abhinandbhaskar"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white border border-white/10 transition-all hover:scale-110"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhinandbhaskar-m/"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white border border-white/10 transition-all hover:scale-110"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://x.com/abhinand_m07"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white border border-white/10 transition-all hover:scale-110"
            title="Twitter / X"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/_its.abhinand"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white border border-white/10 transition-all hover:scale-110"
            title="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="mailto:abhinandbhaskar43@gmail.com"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white border border-white/10 transition-all hover:scale-110"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-satoshi text-zinc-300 hover:text-white bg-white/5 hover:bg-white/15 px-4 py-2.5 rounded-full border border-white/10 transition-all hover:scale-105"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-400 font-satoshi gap-4">
        <span>© 2026 Abhinand Bhaskar. All rights reserved.</span>
        <span className="flex items-center gap-1">
          Crafted with React, Vite, Tailwind CSS, GSAP & Lenis
        </span>
      </div>
    </footer>
  );
}
