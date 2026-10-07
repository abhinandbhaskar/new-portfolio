import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BentoSection from './components/BentoSection';
import ExperienceSkillsSection from './components/ExperienceSkillsSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectDetailPage from './components/ProjectDetailPage';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [activeProjectId, setActiveProjectId] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('project') || null;
    }
    return null;
  });

  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 2,
    });

    // Expose lenis globally for Navbar and scroll triggers
    window.lenis = lenis;

    // 2. Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // Initial refresh
    ScrollTrigger.refresh();

    // Listen for browser Back/Forward navigation
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      setActiveProjectId(params.get('project') || null);
    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.lenis = null;
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleOpenProjectDetail = (id) => {
    setActiveProjectId(id);
    const url = new URL(window.location);
    url.searchParams.set('project', id);
    window.history.pushState({}, '', url);
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    }
  };

  const handleBackToPortfolio = () => {
    setActiveProjectId(null);
    const url = new URL(window.location);
    url.searchParams.delete('project');
    window.history.pushState({}, '', url.pathname + (url.search ? url.search : ''));

    // Allow main view to mount, then smoothly scroll to portfolio section
    setTimeout(() => {
      ScrollTrigger.refresh();
      const target = document.getElementById('portfolio');
      if (target) {
        if (window.lenis) {
          window.lenis.scrollTo(target, { offset: -80, duration: 1.8 });
        } else {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 150);
  };

  const handleNavigateProject = (nextId) => {
    setActiveProjectId(nextId);
    const url = new URL(window.location);
    url.searchParams.set('project', nextId);
    window.history.pushState({}, '', url);
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    }
  };

  // If a project is selected, render the dedicated full-page ProjectDetailPage
  if (activeProjectId) {
    return (
      <ProjectDetailPage
        projectId={activeProjectId}
        onBack={handleBackToPortfolio}
        onNavigateProject={handleNavigateProject}
      />
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-satoshi selection:bg-white selection:text-black overflow-x-hidden">
      {/* Floating Glassmorphic Navigation Bar */}
      <Navbar />

      {/* SECTION 1: Fullscreen Scroll-Triggered Video Hero */}
      <HeroSection totalFramesCount={72} />

      {/* SECTION 2: Bento Grid About Section */}
      <BentoSection />

      {/* SECTION 3: Career Experience & Skills Matrix */}
      <ExperienceSkillsSection />

      {/* SECTION 4: Portfolio & Production Systems */}
      <PortfolioSection onOpenProjectDetail={handleOpenProjectDetail} />

      {/* SECTION 5: Contact Me Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
