import React, { useRef } from 'react';
import { TrendingUp, Globe, Users, Award, Zap } from 'lucide-react';
import { useInView, useCounter } from '../hooks/useInView';

const STATS = [
  { icon: Users,      value: 200,  suffix: '+',  label: 'Global Clients',       desc: 'From startups to Fortune 500',   color: 'text-rose-600 dark:text-rose-400',   bg: 'bg-rose-50 dark:bg-rose-500/10',   border: 'border-rose-200 dark:border-rose-500/20' },
  { icon: TrendingUp, value: 500,  suffix: '+',  label: 'Projects Delivered',   desc: 'On-time & within budget',        color: 'text-violet-600 dark:text-violet-400', bg: 'bg-violet-50 dark:bg-violet-500/10', border: 'border-violet-200 dark:border-violet-500/20' },
  { icon: Globe,      value: 50,   suffix: '+',  label: 'Countries Reached',    desc: 'Truly global operations',        color: 'text-pink-600 dark:text-pink-400',   bg: 'bg-pink-50 dark:bg-pink-500/10',   border: 'border-pink-200 dark:border-pink-500/20' },
  { icon: Users,      value: 1000, suffix: '+',  label: 'Talents Connected',    desc: 'Pre-vetted professionals',       color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-50 dark:bg-purple-500/10', border: 'border-purple-200 dark:border-purple-500/20' },
  { icon: Award,      value: 99,   suffix: '%',  label: 'Satisfaction Rate',    desc: 'Client happiness is our metric', color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-500/10', border: 'border-emerald-200 dark:border-emerald-500/20' },
  { icon: Zap,        value: 48,   suffix: 'hr', label: 'Avg Team Assembly',    desc: 'From request to ready',          color: 'text-amber-600 dark:text-amber-400',  bg: 'bg-amber-50 dark:bg-amber-500/10',  border: 'border-amber-200 dark:border-amber-500/20' },
];

const TECH_LOGOS = [
  'React', 'Python', 'Node.js', 'TypeScript', 'AWS', 'GCP', 'Azure',
  'TensorFlow', 'PyTorch', 'Docker', 'Kubernetes', 'GraphQL',
  'React', 'Python', 'Node.js', 'TypeScript', 'AWS', 'GCP', 'Azure',
  'TensorFlow', 'PyTorch', 'Docker', 'Kubernetes', 'GraphQL',
];

function StatCard({ stat, index, inView }) {
  const count = useCounter(stat.value, 2500, inView);
  return (
    <div className={`glass-card p-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}>
      <div className={`w-12 h-12 rounded-xl ${stat.bg} border ${stat.border} flex items-center justify-center mb-4`}>
        <stat.icon className={`w-6 h-6 ${stat.color}`} />
      </div>
      <div className={`text-4xl font-black counter ${stat.color} mb-1`}>{count.toLocaleString()}{stat.suffix}</div>
      <div className="text-slate-900 dark:text-white font-semibold mb-1">{stat.label}</div>
      <div className="text-slate-500 text-sm">{stat.desc}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1 });

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, rgba(253,242,248,0.8) 0%, rgba(250,245,255,0.5) 50%, rgba(255,247,237,0.8) 100%)'
      }} />
      <div className="absolute inset-0 dark:bg-gradient-to-r dark:from-rose-950/30 dark:via-[#0d0010] dark:to-violet-950/30" />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(244,63,94,0.3), transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="section-label mb-5"><TrendingUp className="w-4 h-4" /> Our Impact</div>
          <h2 className="section-title mb-4">
            <span className="text-slate-900 dark:text-white">Numbers That </span>
            <span className="gradient-text">Speak Volumes</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Our track record of excellence spans continents, industries, and technologies.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {STATS.map((stat, i) => <StatCard key={stat.label} stat={stat} index={i} inView={inView} />)}
        </div>

        {/* Ticker */}
        <div className="relative overflow-hidden py-6">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: `linear-gradient(to right, var(--ticker-fade), transparent)` }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: `linear-gradient(to left, var(--ticker-fade), transparent)` }} />
          <div className="ticker-track">
            {TECH_LOGOS.map((tech, i) => (
              <div key={`${tech}-${i}`}
                className="flex-shrink-0 mx-4 px-5 py-2 rounded-full glass-card text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-rose-600 dark:hover:text-rose-300 transition-colors">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
