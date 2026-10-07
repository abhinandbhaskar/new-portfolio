import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Briefcase,
  Code2,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  Layers,
  Database,
  Terminal,
  Cpu,
  Globe,
  Award,
  ArrowUpRight,
  ShieldCheck,
  Server,
  Bot
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSkillsSection() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const skillsRef = useRef(null);

  const experiences = [
    {
      id: 'hawk-dev',
      role: 'Software Developer',
      company: "Hawk'N Technologies",
      period: 'August 2025 – Present',
      location: 'Tamil Nadu, India (Remote)',
      isCurrent: true,
      description:
        'Leading full-stack engineering across 19+ small-to-medium-sized web applications, enterprise ERP systems, and cloud automation platforms using Django REST Framework and React.js.',
      keyAchievements: [
        'Architected and delivered flagship systems: VPS Automation ERP, MKS Multi-Entity ERP, VELVET CAKES Automation, RN Broiler ERP, AK Mobiles ERP, and AI-Powered Business Advisor.',
        'Engineered high-concurrency RESTful APIs, multi-tenant RBAC security, dynamic ORM queries, and integrated responsive React frontends.',
        'Developed international production systems for Singapore clients including GEMSTOCK (Live Auction Platform) and TUTOR ME.',
        'Spearheaded team code reviews, bug resolution, and scalable production deployments.',
      ],
      technologies: [
        'Python',
        'Django',
        'Django REST Framework',
        'React.js',
        'PostgreSQL',
        'RBAC',
        'JWT Auth',
      ],
    },
    {
      id: 'hawk-intern',
      role: 'Software Developer Intern',
      company: "Hawk'N Technologies",
      period: 'May 2025 – July 2025',
      location: 'Tamil Nadu, India (Remote)',
      isCurrent: false,
      description:
        'Contributed to core business application modules, REST API endpoints, and database models, earning rapid promotion to full Software Developer.',
      keyAchievements: [
        'Built full-stack features using Python, Django, DRF, React.js, and PostgreSQL for live business clients.',
        'Collaborated on database migrations, schema optimizations, and API integration testing.',
      ],
      technologies: ['Python', 'Django', 'React.js', 'PostgreSQL', 'Git', 'REST APIs'],
    },
    {
      id: 'cybrosys-trainee',
      role: 'Software Developer Trainee',
      company: 'Cybrosys Technologies',
      period: 'September 2024 – December 2024',
      location: 'Kozhikode, Kerala',
      isCurrent: false,
      description:
        'Completed rigorous practical training in Python architecture, database engineering, and dynamic web UI logic.',
      keyAchievements: [
        'Implemented interactive web components using jQuery and MySQL database backends.',
        'Strengthened core algorithm fundamentals, object-oriented design, and debugging methodologies.',
      ],
      technologies: ['Python', 'MySQL', 'jQuery', 'JavaScript', 'HTML5/CSS3'],
    },
    {
      id: 'riss-intern',
      role: 'Software Developer Intern',
      company: 'Riss Technologies',
      period: 'May 2024 – September 2024',
      location: 'Kannur, Kerala',
      isCurrent: false,
      description:
        'Developed responsive client web applications and cross-platform integrations using Django, JavaScript, and Bootstrap 5.',
      keyAchievements: [
        'Designed modular RESTful endpoints and asynchronous AJAX/jQuery client interactions.',
        'Integrated Django backend services with Android mobile applications for cross-platform workflows.',
      ],
      technologies: ['Django', 'JavaScript', 'Bootstrap 5', 'AJAX', 'Android Integration'],
    },
  ];

  const skillCategories = [
    {
      title: 'Frontend Engineering',
      icon: <Globe className="w-4 h-4 text-blue-400" />,
      color: 'blue',
      skills: [
        { name: 'React.js', level: 'Advanced' },
        { name: 'React Redux', level: 'Proficient' },
        { name: 'JavaScript (ES6+)', level: 'Advanced' },
        { name: 'Tailwind CSS', level: 'Advanced' },
        { name: 'HTML5 & CSS3', level: 'Advanced' },
        { name: 'Bootstrap 5', level: 'Proficient' },
        { name: 'AJAX / jQuery', level: 'Proficient' },
      ],
    },
    {
      title: 'Backend Architecture',
      icon: <Server className="w-4 h-4 text-emerald-400" />,
      color: 'emerald',
      skills: [
        { name: 'Python', level: 'Advanced' },
        { name: 'Django', level: 'Advanced' },
        { name: 'Django REST Framework', level: 'Advanced' },
        { name: 'Django ORM', level: 'Advanced' },
        { name: 'JWT Authentication', level: 'Advanced' },
        { name: 'Role-Based Access (RBAC)', level: 'Advanced' },
        { name: 'REST API Design', level: 'Advanced' },
      ],
    },
    {
      title: 'Databases & Cloud',
      icon: <Database className="w-4 h-4 text-amber-400" />,
      color: 'amber',
      skills: [
        { name: 'PostgreSQL', level: 'Advanced' },
        { name: 'MySQL', level: 'Advanced' },
        { name: 'Firebase', level: 'Proficient' },
        { name: 'AWS Basics', level: 'Familiar' },
        { name: 'Database Normalization', level: 'Advanced' },
      ],
    },
    {
      title: 'DevOps, Tools & Workflow',
      icon: <Terminal className="w-4 h-4 text-purple-400" />,
      color: 'purple',
      skills: [
        { name: 'Git & GitHub', level: 'Advanced' },
        { name: 'Postman (API Testing)', level: 'Advanced' },
        { name: 'Vite & Webpack', level: 'Advanced' },
        { name: 'Linux / Bash', level: 'Proficient' },
        { name: 'Agile / Scrum', level: 'Proficient' },
      ],
    },
  ];

  const coreStackPills = [
    { name: 'React', desc: 'Frontend Framework', color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-300' },
    { name: 'Django & DRF', desc: 'Backend Engine', color: 'from-emerald-500/20 to-green-500/20 border-emerald-500/30 text-emerald-300' },
    { name: 'Python', desc: 'Core Language', color: 'from-amber-500/20 to-yellow-500/20 border-amber-500/30 text-amber-300' },
    { name: 'PostgreSQL', desc: 'Enterprise DB', color: 'from-sky-500/20 to-blue-500/20 border-sky-500/30 text-sky-300' },
    { name: 'JavaScript', desc: 'ES6+ Logic', color: 'from-yellow-500/20 to-amber-500/20 border-yellow-500/30 text-yellow-300' },
    { name: 'Tailwind CSS', desc: 'Modern Styling', color: 'from-teal-500/20 to-cyan-500/20 border-teal-500/30 text-teal-300' },
    { name: 'Firebase', desc: 'Realtime Backend', color: 'from-orange-500/20 to-amber-500/20 border-orange-500/30 text-orange-300' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate timeline cards
      const timelineCards = timelineRef.current?.querySelectorAll('.timeline-item');
      if (timelineCards && timelineCards.length > 0) {
        gsap.fromTo(
          timelineCards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Animate skills cards
      const skillCards = skillsRef.current?.querySelectorAll('.skill-card');
      if (skillCards && skillCards.length > 0) {
        gsap.fromTo(
          skillCards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: skillsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative z-20 w-full min-h-screen bg-black py-24 px-4 sm:px-6 lg:px-12 selection:bg-white selection:text-black border-t border-white/5 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-satoshi text-zinc-300">
            <Briefcase className="w-3.5 h-3.5 text-blue-400" />
            <span>Career Journey & Technical Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-syne tracking-tight text-white">
            Experience & <span className="text-blue-400">Skills.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-satoshi max-w-3xl">
            Software engineering track record delivering 19+ enterprise ERP systems, international client solutions, and high-performance full-stack web applications.
          </p>
        </div>

        {/* Featured Core Tech Strip */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Core Production Stack</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2.5 sm:gap-3">
            {coreStackPills.map((tech, idx) => (
              <div
                key={idx}
                className={`p-3 sm:p-3.5 rounded-2xl bg-gradient-to-br ${tech.color} border backdrop-blur-xl flex flex-col justify-between hover:scale-105 transition-all duration-300`}
              >
                <span className="font-syne font-bold text-xs sm:text-sm text-white tracking-tight">
                  {tech.name}
                </span>
                <span className="text-[10px] sm:text-[11px] font-satoshi text-zinc-400 mt-1">
                  {tech.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Split Grid: Left = Experience Timeline, Right = Categorized Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Professional Experience Timeline (7 cols) */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400">
                <Briefcase className="w-4 h-4" />
                <span>Professional Experience</span>
              </div>
              <span className="text-xs text-zinc-400 font-mono">2024 – Present</span>
            </div>

            {/* Timeline Container */}
            <div ref={timelineRef} className="relative pl-6 sm:pl-8 space-y-6 sm:space-y-8 border-l border-white/10">
              {experiences.map((item) => (
                <div
                  key={item.id}
                  className="timeline-item relative group rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-blue-500/40 p-4 sm:p-7 shadow-lg transition-all duration-300"
                >
                  {/* Timeline Dot on the left border */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-6 sm:top-7 w-3.5 h-3.5 rounded-full bg-black border-2 border-blue-400 group-hover:scale-125 group-hover:border-emerald-400 transition-all duration-300">
                    {item.isCurrent && (
                      <span className="animate-ping absolute inset-0 rounded-full bg-emerald-400 opacity-75"></span>
                    )}
                  </div>

                  {/* Role Header */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold font-syne text-white tracking-tight group-hover:text-blue-300 transition-colors">
                        {item.role}
                      </h3>
                      {item.isCurrent && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                          <span>Current Role</span>
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-400 font-satoshi">
                      <span className="font-semibold text-zinc-200 font-syne text-sm">
                        {item.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{item.period}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{item.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-zinc-300 font-satoshi leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullet Achievements */}
                  <div className="mt-4 space-y-2">
                    {item.keyAchievements.map((ach, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 font-satoshi">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                    {item.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Categorized Skills Matrix (5 cols) */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400">
                <Code2 className="w-4 h-4" />
                <span>Technical Skills Matrix</span>
              </div>
              <span className="text-xs text-zinc-400 font-mono">Expertise Breakdown</span>
            </div>

            <div ref={skillsRef} className="space-y-5">
              {skillCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="skill-card relative overflow-hidden rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/20 p-4 sm:p-6 shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-2.5 pb-3 border-b border-white/5">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                      {cat.icon}
                    </div>
                    <h4 className="font-syne font-bold text-sm sm:text-base text-white tracking-tight">
                      {cat.title}
                    </h4>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-1.5 sm:gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="group/item flex items-center justify-between gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[11px] sm:text-xs font-satoshi text-zinc-200 transition-all"
                      >
                        <span>{skill.name}</span>
                        <span className="text-[9px] sm:text-[10px] font-mono text-zinc-400 uppercase group-hover/item:text-emerald-400 transition-colors">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Engineering Superpower Callout */}
              <div className="skill-card relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900/20 via-emerald-900/20 to-purple-900/20 backdrop-blur-xl border border-white/15 p-5 sm:p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Full-Stack Engineering Philosophy</span>
                </div>
                <p className="text-xs text-zinc-300 font-satoshi leading-relaxed">
                  Specialized in building modular Django REST backends paired with high-performance React frontends. Proven capability in scalable database design, multi-tenant RBAC permissions, and real-time business telemetry.
                </p>
              </div>

              {/* AI in My Workflow Callout */}
              <div className="skill-card relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-950/30 via-indigo-950/20 to-blue-950/30 backdrop-blur-xl border border-white/15 hover:border-purple-500/30 p-5 sm:p-7 space-y-4 shadow-xl transition-all duration-300">
                {/* Ambient Subtle Glow */}
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

                {/* Header & Badge */}
                <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400">
                    <Bot className="w-4 h-4 text-purple-400" />
                    <span>AI in My Workflow</span>
                  </div>
                  <span className="text-[10px] font-mono text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2.5 py-0.5 rounded-full">
                    Engineering Mindset
                  </span>
                </div>

                {/* Content Paragraphs */}
                <div className="relative z-10 space-y-3.5 text-xs sm:text-[13px] text-zinc-300 font-satoshi leading-relaxed">
                  <p>
                    Before using AI, I first understand the <strong className="text-white font-semibold">problem, requirements, and business logic</strong> myself. I then provide the AI tool with a clear, structured prompt containing the necessary context, business rules, technical constraints, and development approach.
                  </p>

                  <p>
                    I use AI as an <strong className="text-white font-semibold">engineering assistant</strong>, not simply as a code generator. It helps me accelerate development, explore different approaches, identify potential issues, debug problems, and reduce repetitive work.
                  </p>

                  <p>
                    I always <strong className="text-white font-semibold">review, understand, test, and validate</strong> AI-generated code before using it. I maintain control over the architecture, business logic, implementation, and features, and take full responsibility for the code I deliver.
                  </p>

                  <p className="pt-2.5 border-t border-white/5 text-purple-200/90 font-medium">
                    For me, AI is not a replacement for engineering fundamentals. It is a tool that helps me <strong className="text-white font-semibold underline decoration-purple-400/50 underline-offset-2">think faster, build better, and continuously improve as a developer.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
