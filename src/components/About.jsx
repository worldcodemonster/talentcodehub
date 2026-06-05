import React, { useRef } from 'react';
import { Target, Eye, Heart, Globe2, Layers, Cpu, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const PILLARS = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To bridge the global talent gap by connecting world-class tech professionals with companies that need them — enabling projects that change the world.',
    color: 'text-indigo-600 dark:text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'A future where geography is no longer a barrier to innovation — where the best mind for any problem can be found, engaged, and empowered in hours.',
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    icon: Heart,
    title: 'Our Values',
    text: 'Radical transparency, relentless quality, and genuine partnership. We succeed only when our clients succeed — and we take that seriously.',
    color: 'text-pink-600 dark:text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
  },
];

const HIGHLIGHTS = [
  {
    icon: Globe2,
    title: 'Global Reach',
    text: 'Offices and talent networks spanning 50+ countries across 6 continents — we operate where you need us.',
  },
  {
    icon: Layers,
    title: 'Full Spectrum',
    text: 'From a single hire to a 50-person dedicated engineering org — we scale with your ambition.',
  },
  {
    icon: Cpu,
    title: 'AI-First',
    text: 'Not just building AI products — we use AI at every step: talent matching, project management, quality assurance.',
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1 });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { threshold: 0.1 });

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-indigo-50/20 to-slate-50/50 dark:from-slate-950 dark:via-indigo-950/10 dark:to-slate-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Left */}
          <div
            ref={ref}
            className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <div className="section-label mb-6">
              <Heart className="w-4 h-4" />
              Who We Are
            </div>
            <h2 className="section-title mb-6">
              <span className="text-slate-900 dark:text-white">The Team </span>
              <span className="gradient-text">Behind the Magic</span>
            </h2>
            <div className="space-y-5 leading-relaxed">
              <p className="text-slate-600 dark:text-slate-400">
                <strong className="text-slate-900 dark:text-white">TalentCodeHub</strong> was founded by
                engineers and entrepreneurs who experienced firsthand the frustration of finding the right
                talent at the right time. We built the solution we wished existed.
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                Today we're a global force of 200+ in-house experts orchestrating thousands of elite
                contractors and developers across every timezone. Our proprietary matching technology
                combined with human expertise ensures cultural fit, technical excellence, and delivery confidence.
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                When the world's biggest AI labs need high-quality training data, they call us.
                When fast-growing startups need an engineering team yesterday, they call us.
                When enterprises need to modernize legacy systems, they call us.
              </p>
            </div>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 btn-primary"
            >
              Work With Us <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right: Pillar cards */}
          <div
            className={`space-y-4 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className={`glass-card p-5 flex gap-4 border ${p.border}`}>
                  <div className={`w-11 h-11 rounded-xl ${p.bg} border ${p.border} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${p.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">{p.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{p.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Highlights row */}
        <div ref={gridRef} className="grid sm:grid-cols-3 gap-6">
          {HIGHLIGHTS.map((h, i) => {
            const Icon = h.icon;
            return (
              <div
                key={h.title}
                className={`glass-card p-6 text-center transition-all duration-700 ${
                  gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/15 to-purple-500/15 border border-indigo-500/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{h.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{h.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
