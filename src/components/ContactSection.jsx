import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Mail,
  Send,
  User,
  Phone,
  Tag,
  MessageSquare,
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
  MapPin,
  Clock,
  ArrowUpRight,
  Github,
  Linkedin,
  AlertCircle,
  Loader2
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const formCardRef = useRef(null);

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [localTime, setLocalTime] = useState('');

  // Live Clock locked to Asia/Kolkata (IST)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(now);
      setLocalTime(formatted);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const EMAIL_ADDRESS = 'abhinandbhaskar43@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = e.target;
    const data = new FormData(form);
    const accessKey =
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
      'baa4bd95-afc6-4c79-be66-2505072d518a';

    data.append('access_key', accessKey);
    data.append('from_name', 'Portfolio Contact Form');
    // Ensure Web3Forms maps 'name' from 'fullname'
    if (formData.fullname) {
      data.set('name', formData.fullname);
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });

      const resData = await response.json();

      if (resData.success) {
        setStatus('success');
        setFormData({
          fullname: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(resData.message || 'Something went wrong. Please try emailing directly.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Unable to send message at this moment.');
    }
  };

  // GSAP Entrance Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (leftColRef.current && formCardRef.current) {
        gsap.fromTo(
          leftColRef.current,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );

        gsap.fromTo(
          formCardRef.current,
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
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
      id="contact"
      className="relative z-20 w-full min-h-screen bg-black py-24 px-4 sm:px-6 lg:px-12 selection:bg-white selection:text-black border-t border-white/5 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-[550px] h-[550px] bg-emerald-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Contact Intro, Availability & Direct Cards */}
          {/* ========================================================= */}
          <div ref={leftColRef} className="lg:col-span-5 space-y-8">
            {/* Header Badge & Title */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-satoshi text-zinc-300">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Let's Connect</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-syne tracking-tight text-white leading-tight">
                Contact <span className="text-emerald-400">Me!</span>
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 font-satoshi leading-relaxed">
              Looking for a developer for your next project, have a job opportunity, or simply want to connect? I'm always open to discussing interesting ideas, opportunities, and software projects.
              </p>
            </div>

            {/* Live Availability Status Card */}
            <div className="relative overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-4 sm:p-5 flex items-center gap-4">
              <div className="relative flex h-3.5 w-3.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  Status: Open to Opportunities
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 font-satoshi font-medium">
                  Open to Full-Time Roles
                </p>
              </div>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-3.5">
              {/* Direct Email Card with 1-Click Copy */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-emerald-500/30 p-4 sm:p-5 transition-all duration-300">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5 overflow-hidden">
                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                        Direct Email
                      </span>
                      <a
                        href={`mailto:${EMAIL_ADDRESS}`}
                        className="text-xs sm:text-sm font-semibold font-syne text-white hover:text-emerald-300 transition-colors truncate block"
                      >
                        {EMAIL_ADDRESS}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white border border-white/10 text-xs font-satoshi transition-all flex-shrink-0"
                    title="Copy Email to Clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location & Dynamic Live Clock Card */}
              <div className="relative overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-4 sm:p-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                        Location
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-zinc-200">
                        Kerala, India
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex-shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                          Local Time
                        </span>
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 pt-0.5">
                        <span className="text-xs sm:text-sm font-medium font-mono text-zinc-100">
                          {localTime || 'Loading...'}
                        </span>
                        <span className="text-[10px] font-mono font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded">
                          IST
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connect Badges */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://github.com/abhinandbhaskar"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white text-xs font-satoshi transition-all duration-200"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhinandbhaskar-m/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white text-xs font-satoshi transition-all duration-200"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-400" />
              </a>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Interactive Glassmorphic Netlify Form */}
          {/* ========================================================= */}
          <div
            ref={formCardRef}
            className="lg:col-span-7 relative rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-5 sm:p-8 md:p-10 shadow-2xl hover:shadow-emerald-500/5 transition-all duration-300"
          >
            {/* Inner top subtle gradient bar */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-amber-500 rounded-t-3xl opacity-70" />

            {status === 'success' ? (
              /* Success Confirmation Card */
              <div className="py-12 px-4 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2 max-w-md mx-auto">
                  <h3 className="text-2xl font-bold font-syne text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-zinc-300 font-satoshi leading-relaxed">
                    Thank you for reaching out! Your message has been delivered directly. I will review it and get back to you shortly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-syne font-semibold transition-all duration-200"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Web3Forms Botcheck anti-spam protection */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                {/* Form Top Title */}
                <div className="space-y-1 pb-2 border-b border-white/5">
                  <h3 className="text-lg sm:text-xl font-bold font-syne text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs text-zinc-400 font-satoshi">
                    Fill in the details below and I'll respond as soon as possible.
                  </p>
                </div>

                {/* Row 1: Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-300">
                      <User className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Full Name</span>
                      <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Alex Henderson"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm font-satoshi focus:outline-none focus:border-emerald-400/80 focus:ring-1 focus:ring-emerald-400/80 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-300">
                      <Mail className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Email Address</span>
                      <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm font-satoshi focus:outline-none focus:border-emerald-400/80 focus:ring-1 focus:ring-emerald-400/80 transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-300">
                      <Phone className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Phone Number</span>
                      <span className="text-[10px] text-zinc-400 font-sans">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm font-satoshi focus:outline-none focus:border-emerald-400/80 focus:ring-1 focus:ring-emerald-400/80 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-300">
                      <Tag className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Subject</span>
                      <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry / Role Opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm font-satoshi focus:outline-none focus:border-emerald-400/80 focus:ring-1 focus:ring-emerald-400/80 transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Message Textarea */}
                <div className="space-y-2">
                  <label className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-300">
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Your Message</span>
                    <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project, timeline, goals, or requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm font-satoshi focus:outline-none focus:border-emerald-400/80 focus:ring-1 focus:ring-emerald-400/80 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Error Banner if any */}
                {status === 'error' && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2.5 text-xs text-red-300">
                    <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span>{errorMessage || 'Something went wrong. Please try emailing directly.'}</span>
                  </div>
                )}

                {/* Submit Action Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] text-zinc-400 font-satoshi text-center sm:text-left">
                    Protected by Web3Forms anti-spam filtering.
                  </span>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-syne font-bold text-sm tracking-tight shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-60 disabled:pointer-events-none"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-black" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 text-black" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
