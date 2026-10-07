import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  // Dynamic ScrollSpy tracking for active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const sections = ['about', 'experience', 'portfolio', 'contact'];

      // If near top or before About section, mark Home as active
      const aboutEl = document.getElementById('about');
      const aboutTop = aboutEl ? aboutEl.getBoundingClientRect().top + scrollY : 800;

      if (scrollY < aboutTop - 300) {
        setActiveSection('hero');
        return;
      }

      const scrollPosition = scrollY + 250;
      let current = 'about';
      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + scrollY;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = sections[i];
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    if (window.lenis) {
      window.lenis.on('scroll', handleScroll);
    }
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (window.lenis) {
        window.lenis.off('scroll', handleScroll);
      }
    };
  }, []);

  // Butter-smooth, relaxed cinematic scroll handler
  const scrollTo = (e, sectionId) => {
    e.preventDefault();

    // Gentle sinusoidal easing: slow, calm start -> graceful glide -> soft feather landing
    const gentleSlowEase = (t) => (1 - Math.cos(Math.PI * t)) / 2;
    const slowDuration = 2.8;

    if (sectionId === 'hero' || sectionId === 'home') {
      if (window.lenis) {
        window.lenis.scrollTo(0, {
          duration: slowDuration,
          easing: gentleSlowEase,
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    const targetEl = document.getElementById(sectionId);
    if (targetEl) {
      if (window.lenis) {
        window.lenis.scrollTo(targetEl, {
          offset: -80,
          duration: slowDuration,
          easing: gentleSlowEase,
        });
      } else {
        const top = targetEl.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-3 sm:top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto max-w-[calc(100vw-1rem)] w-max">
      <div className="flex items-center gap-0.5 xs:gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-full bg-black/60 sm:bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/80 overflow-x-auto no-scrollbar">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={(e) => scrollTo(e, item.id)}
              className={`px-2.5 xs:px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] xs:text-xs sm:text-sm font-satoshi whitespace-nowrap transition-all duration-300 ${
                isActive
                  ? 'text-white bg-white/15 border border-white/20 font-semibold shadow-sm scale-[1.02]'
                  : 'text-zinc-300 hover:text-white hover:bg-white/5 font-medium'
              }`}
            >
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
