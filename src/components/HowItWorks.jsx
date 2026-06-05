import React, { useRef } from 'react';
import {
  MessageSquare, Search, Rocket, CheckCircle,
  Handshake, Lightbulb, ArrowRight
} from 'lucide-react';
import { useInView } from '../hooks/useInView';

const STEPS = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Tell Us Your Vision',
    description:
      'Share your project requirements, team needs, or AI training objectives. Our solution architects will analyze your goals within 24 hours.',
    color: 'from-indigo-500 to-indigo-700',
    glow: 'shadow-indigo-500/40',
    border: 'border-indigo-500/30',
    highlight: 'text-indigo-600 dark:text-indigo-400',
    dot: 'bg-indigo-500',
    items: ['Free consultation call', 'Requirements analysis', 'Custom solution design'],
  },
  {
    number: '02',
    icon: Search,
    title: 'We Match & Assemble',
    description:
      'Our AI-powered talent matching system identifies the perfect professionals from our global pool — vetted, experienced, and ready to deliver.',
    color: 'from-purple-500 to-purple-700',
    glow: 'shadow-purple-500/40',
    border: 'border-purple-500/30',
    highlight: 'text-purple-600 dark:text-purple-400',
    dot: 'bg-purple-500',
    items: ['AI-powered talent matching', 'Skills & culture fit screening', 'Team assembled in 48hrs'],
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Build & Deliver',
    description:
      'Your dedicated team springs into action with agile methodologies, transparent communication, and relentless focus on quality outcomes.',
    color: 'from-cyan-500 to-teal-700',
    glow: 'shadow-cyan-500/40',
    border: 'border-cyan-500/30',
    highlight: 'text-cyan-600 dark:text-cyan-400',
    dot: 'bg-cyan-500',
    items: ['Agile sprints & daily standups', 'Real-time progress dashboard', 'QA & security testing'],
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Launch & Scale',
    description:
      'We handle deployment, handoff, and ongoing support. Scale your team up or down as your project evolves — we grow with you.',
    color: 'from-emerald-500 to-green-700',
    glow: 'shadow-emerald-500/40',
    border: 'border-emerald-500/30',
    highlight: 'text-emerald-600 dark:text-emerald-400',
    dot: 'bg-emerald-500',
    items: ['Production deployment', 'Knowledge transfer', 'Ongoing maintenance & scaling'],
  },
];

function StepCard({ step, index, inView }) {
  const { icon: Icon } = step;
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex flex-col lg:flex-row items-start gap-8 transition-all duration-700 ${
        inView
          ? 'opacity-100 translate-x-0'
          : isEven
          ? 'opacity-0 -translate-x-12'
          : 'opacity-0 translate-x-12'
      }`}
      style={{ transitionDelay: `${index * 180}ms` }}
    >
      {/* Number + Icon */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} shadow-xl ${step.glow} flex items-center justify-center relative z-10`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        {index < STEPS.length - 1 && (
          <div className="w-px h-16 bg-gradient-to-b from-slate-300 dark:from-white/10 to-transparent mt-2 hidden lg:block" />
        )}
      </div>

      {/* Content */}
      <div className={`glass-card p-6 flex-1 border ${step.border}`}>
        <div className={`text-xs font-bold tracking-widest uppercase ${step.highlight} mb-2`}>
          Step {step.number}
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-5">{step.description}</p>
        <ul className="space-y-2">
          {step.items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
              <span className={`w-1.5 h-1.5 rounded-full ${step.dot} flex-shrink-0`} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1 });

  return (
    <section id="how-it-works" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60 dark:opacity-20" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="section-label mb-5">
            <Lightbulb className="w-4 h-4" />
            Our Process
          </div>
          <h2 className="section-title mb-5">
            <span className="text-slate-900 dark:text-white">From Idea to </span>
            <span className="gradient-text">Reality in 4 Steps</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            We've refined our delivery process over hundreds of projects to guarantee outcomes —
            not just effort.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-3xl mx-auto space-y-6">
          {STEPS.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} inView={inView} />
          ))}
        </div>

        {/* CTA Banner */}
        <div className={`mt-16 transition-all duration-700 delay-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-card p-8 sm:p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-cyan-500/5" />
            <div className="relative z-10">
              <Handshake className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Ready to Get Started?</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md mx-auto">
                Join 200+ companies who trust TalentCodeHub to power their most critical projects.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-base px-8 py-3.5 shadow-xl shadow-indigo-500/30"
              >
                Start Your Project <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
