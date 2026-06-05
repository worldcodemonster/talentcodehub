import React, { useRef } from 'react';
import { TrendingUp, Globe, Users, Award, Zap } from 'lucide-react';
import { useInView, useCounter } from '../hooks/useInView';

const STATS = [
  {
    icon: Users,
    value: 200, suffix: '+',
    label: 'Global Clients',
    desc: 'From startups to Fortune 500',
    color: 'text-indigo-600 dark:text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
  },
  {
    icon: TrendingUp,
    value: 500, suffix: '+',
    label: 'Projects Delivered',
    desc: 'On-time & within budget',
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    icon: Globe,
    value: 50, suffix: '+',
    label: 'Countries Reached',
    desc: 'Truly global operations',
    color: 'text-cyan-600 dark:text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  {
    icon: Users,
    value: 1000, suffix: '+',
    label: 'Talents Connected',
    desc: 'Pre-vetted professionals',
    color: 'text-pink-600 dark:text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
  },
  {
    icon: Award,
    value: 99, suffix: '%',
    label: 'Satisfaction Rate',
    desc: 'Client happiness is our metric',
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
  {
    icon: Zap,
    value: 48, suffix: 'hr',
    label: 'Average Team Assembly',
    desc: 'From request to ready',
    color: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
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
    <div
      className={`glass-card p-6 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`w-12 h-12 rounded-xl ${stat.bg} border ${stat.border} flex items-center justify-center mb-4`}>
        <stat.icon className={`w-6 h-6 ${stat.color}`} />
      </div>
      <div className={`text-4xl font-black counter ${stat.color} mb-1`}>
        {count.toLocaleString()}{stat.suffix}
      </div>
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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/60 via-white/40 to-purple-50/60 dark:from-indigo-950/30 dark:via-slate-950 dark:to-purple-950/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="section-label mb-5">
            <TrendingUp className="w-4 h-4" />
            Our Impact
          </div>
          <h2 className="section-title mb-4">
            <span className="text-slate-900 dark:text-white">Numbers That </span>
            <span className="gradient-text">Speak Volumes</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Our track record of excellence spans continents, industries, and technologies.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} inView={inView} />
          ))}
        </div>

        {/* Tech Ticker */}
        <div className="relative overflow-hidden py-6">
          <div
            className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: `linear-gradient(to right, var(--ticker-fade), transparent)` }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: `linear-gradient(to left, var(--ticker-fade), transparent)` }}
          />
          <div className="ticker-track">
            {TECH_LOGOS.map((tech, i) => (
              <div
                key={`${tech}-${i}`}
                className="flex-shrink-0 mx-4 px-5 py-2 rounded-full glass-card
                  text-slate-500 dark:text-slate-400 text-sm font-medium
                  hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
