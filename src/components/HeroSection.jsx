import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Mail, Mouse, ChevronDown, RotateCcw } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 72;
const FIRST_BATCH_SIZE = 30;
const BATCH_SIZE = 30;

export default function HeroSection({ totalFramesCount = 72 }) {
  const containerRef = useRef(null);
  const pinTargetRef = useRef(null);
  const canvasRef = useRef(null);
  const progressBarRef = useRef(null);
  const [firstBatchReady, setFirstBatchReady] = useState(false);
  const [isPlayingIntro, setIsPlayingIntro] = useState(false);
  const [hasPlayedIntro, setHasPlayedIntro] = useState(false);

  const imagesRef = useRef([]);
  const currentFrameRef = useRef({ frame: 0 });
  const scrollTriggerRef = useRef(null);
  const introTweenRef = useRef(null);
  const prevWidthRef = useRef(typeof window !== 'undefined' ? window.innerWidth : 0);
  const renderFrameRef = useRef(null);

  const totalFrames = Math.max(totalFramesCount || TOTAL_FRAMES, 30);

  // Helper to format frame filename
  const getFrameUrl = useCallback((index) => {
    const padIndex = String(index + 1).padStart(4, '0');
    return `/frames/frame_${padIndex}.webp?v=1`;
  }, []);

  // Draw current frame on canvas maintaining cover aspect ratio
  const renderFrame = useCallback((index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let img = imagesRef.current[index];
    // Fallback to nearest loaded previous frame if target is still loading
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let i = index - 1; i >= 0; i--) {
        if (imagesRef.current[i] && imagesRef.current[i].complete && imagesRef.current[i].naturalWidth > 0) {
          img = imagesRef.current[i];
          break;
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.naturalWidth || 1920;
    const imgHeight = img.naturalHeight || 1080;

    // Cover math
    const hRatio = canvasWidth / imgWidth;
    const vRatio = canvasHeight / imgHeight;
    const ratio = Math.max(hRatio, vRatio);

    // On mobile screens (< 768px), focus on the right side (0.85) where Abhinand is seated.
    // On laptop & desktop screens (>= 768px), preserve dead-center (0.5) panoramic layout.
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const focalX = isMobile ? 0.85 : 0.5;

    const centerShiftX = (canvasWidth - imgWidth * ratio) * focalX;
    const centerShiftY = (canvasHeight - imgHeight * ratio) / 2;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(
      img,
      0,
      0,
      imgWidth,
      imgHeight,
      centerShiftX,
      centerShiftY,
      imgWidth * ratio,
      imgHeight * ratio
    );
  }, []);

  renderFrameRef.current = renderFrame;

  // Resize canvas according to display resolution
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    renderFrame(Math.round(currentFrameRef.current.frame));
  }, [renderFrame]);

  // Load images in progressive batches
  useEffect(() => {
    imagesRef.current = new Array(totalFrames);
    let isMounted = true;
    let loadedCounter = 0;

    const loadSingleImage = (index) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = getFrameUrl(index);
        img.onload = () => {
          if (!isMounted) return resolve(false);
          imagesRef.current[index] = img;
          loadedCounter++;
          if (progressBarRef.current) {
            const pct = Math.min(100, (loadedCounter / totalFrames) * 100);
            progressBarRef.current.style.width = `${pct}%`;
            if (pct >= 100 && progressBarRef.current.parentElement) {
              progressBarRef.current.parentElement.style.opacity = '0';
            }
          }
          if (index === 0) {
            renderFrame(0);
          }
          resolve(true);
        };
        img.onerror = () => {
          if (!isMounted) return resolve(false);
          const fallback = new Image();
          fallback.src = '/video-poster.webp';
          fallback.onload = () => {
            imagesRef.current[index] = fallback;
            loadedCounter++;
            if (progressBarRef.current) {
              const pct = Math.min(100, (loadedCounter / totalFrames) * 100);
              progressBarRef.current.style.width = `${pct}%`;
              if (pct >= 100 && progressBarRef.current.parentElement) {
                progressBarRef.current.parentElement.style.opacity = '0';
              }
            }
            resolve(false);
          };
          fallback.onerror = () => resolve(false);
        };
      });
    };

    // Load initial batch (first 30 frames)
    const initialPromises = [];
    const firstLimit = Math.min(FIRST_BATCH_SIZE, totalFrames);
    for (let i = 0; i < firstLimit; i++) {
      initialPromises.push(loadSingleImage(i));
    }

    Promise.all(initialPromises).then(() => {
      if (!isMounted) return;
      setFirstBatchReady(true);
      renderFrame(0);

      // Load remaining batches progressively in background
      let currentBatchStart = firstLimit;

      const loadNextBatch = () => {
        if (!isMounted || currentBatchStart >= totalFrames) {
          return;
        }

        const nextBatchEnd = Math.min(currentBatchStart + BATCH_SIZE, totalFrames);
        const batchPromises = [];
        for (let j = currentBatchStart; j < nextBatchEnd; j++) {
          batchPromises.push(loadSingleImage(j));
        }

        Promise.all(batchPromises).then(() => {
          if (!isMounted) return;
          currentBatchStart = nextBatchEnd;
          setTimeout(loadNextBatch, 50);
        });
      };

      setTimeout(loadNextBatch, 80);
    });

    return () => {
      isMounted = false;
    };
  }, [totalFrames, getFrameUrl, renderFrame]);

  // Canvas resize and mobile resize prevention
  useEffect(() => {
    handleResize();

    const onWindowResize = () => {
      const currentWidth = window.innerWidth;
      const isMobile = window.innerWidth <= 768;
      if (isMobile && currentWidth === prevWidthRef.current) {
        return;
      }
      prevWidthRef.current = currentWidth;
      handleResize();
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
  }, [handleResize]);

  // Function to play the video intro once smoothly
  const playIntroSequence = useCallback((fromBeginning = true) => {
    if (introTweenRef.current) {
      introTweenRef.current.kill();
    }

    if (fromBeginning) {
      currentFrameRef.current.frame = 0;
      renderFrame(0);
    }

    setIsPlayingIntro(true);

    introTweenRef.current = gsap.to(currentFrameRef.current, {
      frame: totalFrames - 1,
      duration: 3.0,
      ease: 'power1.inOut',
      onUpdate: () => {
        const frameIdx = Math.min(
          Math.floor(currentFrameRef.current.frame),
          totalFrames - 1
        );
        renderFrame(frameIdx);
      },
      onComplete: () => {
        setIsPlayingIntro(false);
        setHasPlayedIntro(true);
      },
    });
  }, [totalFrames, renderFrame]);

  // Auto-play video once upon opening the site
  useEffect(() => {
    if (!firstBatchReady || hasPlayedIntro) return;

    const timer = setTimeout(() => {
      if (window.scrollY < 50) {
        playIntroSequence(true);
      } else {
        setHasPlayedIntro(true);
      }
    }, 250);

    return () => {
      clearTimeout(timer);
      if (introTweenRef.current) {
        introTweenRef.current.kill();
      }
    };
  }, [firstBatchReady, hasPlayedIntro, playIntroSequence]);

  // GSAP ScrollTrigger setup with PINNING on inner container (isolates DOM mutations)
  useEffect(() => {
    if (!firstBatchReady || !pinTargetRef.current) return;

    const ctx = gsap.context(() => {
      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: pinTargetRef.current,
        start: 'top top',
        end: '+=200%',
        pin: true,
        anticipatePin: 1,
        scrub: 0.4,
        onUpdate: (self) => {
          const progress = self.progress;

          // If user scrolls while intro is playing, cancel intro tween and take over
          if (introTweenRef.current && introTweenRef.current.isActive() && progress > 0.01) {
            introTweenRef.current.kill();
            setIsPlayingIntro(false);
            setHasPlayedIntro(true);
          }

          // Calculate target frame for scroll progression (0 to totalFrames - 1)
          const targetIndex = Math.min(
            Math.floor(progress * (totalFrames - 1)),
            totalFrames - 1
          );

          currentFrameRef.current.frame = targetIndex;
          if (renderFrameRef.current) {
            renderFrameRef.current(targetIndex);
          }
        },
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [firstBatchReady, totalFrames]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full bg-black selection:bg-white selection:text-black"
    >
      {/* Pinned Viewport Container */}
      <div
        ref={pinTargetRef}
        className="relative w-full h-screen overflow-hidden bg-black flex flex-col justify-between"
      >
      {/* Canvas & Poster Container with saturate(1.25) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden [filter:saturate(1.25)]">
        {/* Canvas for frame playback */}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover block"
        />

        {/* Poster fallback & Initial loader */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 pointer-events-none ${
            firstBatchReady ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <img
            src="/video-poster.webp"
            alt="Hero Preview Poster"
            className="w-full h-full object-cover object-[85%_center] sm:object-center"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      </div>

      {/* Overlay Layers */}
      {/* 1. Global Darken */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      {/* 2. Vignette Layer */}
      <div
        className="absolute inset-0 pointer-events-none hero-vignette"
        style={{
          background: 'radial-gradient(circle, transparent 50%, rgba(0,0,0,0.4) 100%)',
        }}
      />

      {/* 3. Bottom Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

      {/* Interactive Content Overlay */}
      <div className="relative z-20 w-full h-full flex flex-col justify-between pt-20 pb-6 px-4 sm:p-10 lg:p-14 max-w-7xl mx-auto pointer-events-none">
        {/* Top Bar */}
        <header className="flex items-center justify-between w-full pt-1 sm:pt-2 pointer-events-auto">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-zinc-300 font-satoshi font-medium">
              Open to Opportunities
            </span>

            {/* Replay / Play Intro Button */}
            {firstBatchReady && (
              <button
                onClick={() => playIntroSequence(true)}
                disabled={isPlayingIntro}
                className="hidden sm:inline-flex items-center gap-1.5 ml-3 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white border border-white/15 text-xs font-satoshi backdrop-blur-md transition-all duration-300 hover:scale-105 disabled:opacity-50"
                title="Replay Video Intro"
              >
                {isPlayingIntro ? (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping"></span>
                    <span>Playing...</span>
                  </>
                ) : (
                  <>
                    <RotateCcw className="w-3 h-3" />
                    <span>Replay Intro</span>
                  </>
                )}
              </button>
            )}
          </div>

          {/* Top-Right: Responsive Links */}
          <div className="flex items-center sm:flex-col sm:items-end gap-1.5 sm:gap-2">
            <a
              href="https://www.linkedin.com/in/abhinandbhaskar-m/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-satoshi text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-white/10 backdrop-blur-md transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
              <span className="hidden xs:inline sm:inline">LinkedIn</span>
            </a>
            <a
              href="mailto:abhinandbhaskar43@gmail.com"
              className="group flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-satoshi text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-white/10 backdrop-blur-md transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
              <span className="hidden xs:inline sm:inline">Email</span>
            </a>
          </div>
        </header>

        {/* Bottom Area */}
        <footer className="w-full pb-2 sm:pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pointer-events-auto">
          {/* Bottom-Left: Large Title */}
          <div className="space-y-1">
            <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold font-syne tracking-tight text-white leading-none">
              Software
              <br />
              <span className="text-zinc-400">Engineer</span>
            </h1>
          </div>

          {/* Bottom-Right: Short Description + Animated Scroll Indicator */}
          <div className="flex flex-col items-start md:items-end gap-3 sm:gap-4 max-w-sm">
            <p className="text-xs sm:text-base text-zinc-300 font-satoshi leading-relaxed md:text-right">
              Building scalable software, thoughtful user experiences, and reliable solutions for real-world problems.
            </p>

            {/* Animated Scroll Indicator */}
            <div className="flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-zinc-300 text-xs font-satoshi">
              <span className="hidden md:inline">Scroll to explore</span>
              <span className="md:hidden">Swipe up</span>
              {/* Mobile icon */}
              <Mouse className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:hidden text-zinc-300 animate-bounce" />
              {/* Desktop icon */}
              <ChevronDown className="w-4 h-4 hidden md:inline text-zinc-300 animate-bounce" />
            </div>
          </div>
        </footer>
      </div>

      {/* Progress Bar at very top */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-white/10 z-30 transition-opacity duration-500">
        <div
          ref={progressBarRef}
          className="h-full bg-white/80 transition-all duration-150"
          style={{ width: '0%' }}
        />
      </div>
      </div>
    </section>
  );
}
