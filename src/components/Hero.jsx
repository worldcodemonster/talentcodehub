import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, ChevronDown, Code2, Globe, Brain, Sparkles } from 'lucide-react';

const TYPING_WORDS = [
  'Software Development',
  'Global Outsourcing',
  'AI Model Training',
  'Data Annotation',
  'Talent Matching',
];

const CODE_SNIPPET = `// Felovy Platform
const team = await felovy.talent.find({
  skills: ['React', 'Python', 'LLM'],
  availability: 'immediate',
  tier: 'senior',
});

await felovy.project.deploy({
  team,
  deadline: '2025-Q1',
  quality: 'enterprise',
});

// ✓ Team assembled in 48hrs
// ✓ Project delivered on time`;

const BADGES = [
  { icon: Globe, label: '50+ Countries' },
  { icon: Code2, label: '500+ Projects' },
  { icon: Brain, label: 'AI-Powered' },
];

const AVATAR_COLORS = ['bg-rose-500', 'bg-pink-500', 'bg-violet-500', 'bg-amber-500'];

function TypedText() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = TYPING_WORDS[idx];
    let timeout;
    if (!deleting && text.length < word.length)
      timeout = setTimeout(() => setText(word.slice(0, text.length + 1)), 60);
    else if (!deleting && text.length === word.length)
      timeout = setTimeout(() => setDeleting(true), 2200);
    else if (deleting && text.length > 0)
      timeout = setTimeout(() => setText(text.slice(0, -1)), 35);
    else if (deleting && text.length === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % TYPING_WORDS.length);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, idx]);

  return <span className="gradient-text typing-cursor">{text || ' '}</span>;
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-70 dark:opacity-30" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Floating dots */}
      {[...Array(18)].map((_, i) => (
        <div key={i} className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            background: i % 3 === 0 ? '#fda4af' : i % 3 === 1 ? '#c4b5fd' : '#fdba74',
            opacity: 0.4,
            left: `${(i * 19 + 5) % 95}%`,
            top: `${(i * 27 + 8) % 90}%`,
            animation: `float ${6 + (i % 4)}s ease-in-out ${i * 0.4}s infinite`,
          }} />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full animate-in"
              style={{ background: 'rgba(244,63,94,0.08)', border: '1px solid rgba(244,63,94,0.18)' }}>
              <Sparkles className="w-4 h-4 text-rose-500 animate-pulse" />
              <span className="text-rose-600 dark:text-rose-300 text-sm font-semibold">Global Tech Powerhouse</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-600 dark:text-emerald-400 text-xs font-medium">Hiring Now</span>
            </div>

            {/* Headline */}
            <div className="space-y-2 animate-in-delay-1">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
                <span className="text-slate-900 dark:text-white">Where</span><br />
                <span className="text-slate-900 dark:text-white">Talent </span>
                <span className="gradient-text">Meets</span><br />
                <span className="text-slate-900 dark:text-white">Innovation</span>
              </h1>
            </div>

            {/* Typed */}
            <div className="text-xl sm:text-2xl font-semibold h-8 animate-in-delay-2">
              <TypedText />
            </div>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-lg animate-in-delay-2">
              We connect world-class developers, AI specialists, and innovators with ambitious
              companies across the globe — delivering software excellence and powering the future of AI.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-in-delay-3">
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-base px-7 py-3.5">
                Explore Services <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => document.getElementById('careers')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary text-base px-7 py-3.5">
                <Play className="w-4 h-4 fill-current" /> Join Our Team
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-5 pt-4 animate-in-delay-4 border-t border-rose-100 dark:border-white/5">
              {BADGES.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(244,63,94,0.08)', border: '1px solid rgba(244,63,94,0.16)' }}>
                    <Icon className="w-4 h-4 text-rose-500" />
                  </div>
                  <span>{label}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                <div className="flex -space-x-2">
                  {AVATAR_COLORS.map((c, i) => (
                    <div key={i} className={`w-7 h-7 rounded-full ${c} border-2 border-white dark:border-[#0d0010] flex items-center justify-center text-xs font-bold text-white`}>
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <span>200+ Happy Clients</span>
              </div>
            </div>
          </div>

          {/* Right: Code card */}
          <div className="relative hidden lg:block animate-in-delay-2">
            <div className="relative glass-card p-6 card-shine">
              {/* Window chrome */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-rose-100 dark:border-white/5">
                <div className="w-3 h-3 rounded-full bg-rose-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="ml-3 text-slate-400 text-xs font-mono">felovy-api.js</span>
              </div>
              <pre className="text-sm font-mono leading-relaxed overflow-auto">
                <code>{CODE_SNIPPET.split('\n').map((line, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="select-none text-slate-300 dark:text-slate-600 w-4 text-right flex-shrink-0">{i + 1}</span>
                    <span className={
                      line.startsWith('//')  ? 'text-slate-400 dark:text-slate-500'
                      : line.includes('await') || line.includes('const') ? 'text-rose-600 dark:text-rose-300'
                      : line.includes("'")   ? 'text-violet-600 dark:text-violet-300'
                      : line.includes('✓')   ? 'text-emerald-600 dark:text-emerald-400'
                      : 'text-slate-700 dark:text-slate-300'
                    }>{line || ' '}</span>
                  </div>
                ))}</code>
              </pre>
              <div className="mt-4 pt-4 border-t border-rose-100 dark:border-white/5 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Connected · Felovy API v3.2</span>
                </div>
                <span>⚡ 48hr delivery</span>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -top-6 -right-6 glass-card px-4 py-3 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">✓</span>
                </div>
                <div>
                  <div className="text-slate-900 dark:text-white font-bold">99.2%</div>
                  <div className="text-slate-500 dark:text-slate-400 text-xs">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 glass-card px-4 py-3 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-500/20 border border-violet-200 dark:border-violet-500/30 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <div className="text-slate-900 dark:text-white font-bold">1000+</div>
                  <div className="text-slate-500 dark:text-slate-400 text-xs">AI Models Trained</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-rose-300 dark:text-rose-500 hover:text-rose-500 dark:hover:text-rose-300 transition-colors animate-bounce"
        aria-label="Scroll down">
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
}
