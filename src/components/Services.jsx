import React from 'react';
import {
  Code2, Users, Brain, ArrowRight, CheckCircle2,
  Globe, Layers, Cpu, ShieldCheck, Rocket, Database
} from 'lucide-react';
import { useInView } from '../hooks/useInView';

const SERVICES = [
  {
    icon: Code2,
    gradient: 'from-indigo-500 to-blue-600',
    glow: 'shadow-indigo-500/30',
    tag: 'Core Service',
    title: 'Software Development',
    description:
      'End-to-end software engineering from idea to production. Our elite teams build scalable, battle-tested applications that power global businesses.',
    features: [
      'Full-stack web & mobile apps',
      'Cloud-native architecture',
      'API design & microservices',
      'DevOps & CI/CD pipelines',
      'Quality assurance & testing',
    ],
    stats: { value: '500+', label: 'Projects Shipped' },
    badge: 'Most Popular',
    badgeColor: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border-indigo-500/30',
  },
  {
    icon: Globe,
    gradient: 'from-purple-500 to-pink-600',
    glow: 'shadow-purple-500/30',
    tag: 'Outsourcing',
    title: 'Global Talent Network',
    description:
      'Instantly extend your team with pre-vetted senior engineers, designers, and product specialists from our curated global talent pool.',
    features: [
      'Dedicated development teams',
      'Staff augmentation',
      'Project-based outsourcing',
      'Global talent sourcing',
      'On-demand scaling',
    ],
    stats: { value: '1000+', label: 'Talents Placed' },
    badge: 'Fast Hire',
    badgeColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-300 border-purple-500/30',
  },
  {
    icon: Brain,
    gradient: 'from-cyan-500 to-teal-600',
    glow: 'shadow-cyan-500/30',
    tag: 'AI & Data',
    title: 'AI Training & Annotation',
    description:
      'Power next-generation AI models with high-quality training data. Our specialists deliver precision data annotation and RLHF at scale.',
    features: [
      'Data labeling & annotation',
      'RLHF & model alignment',
      'Synthetic data generation',
      'AI model evaluation',
      'Multilingual annotation',
    ],
    stats: { value: '50M+', label: 'Data Points Annotated' },
    badge: 'Hot',
    badgeColor: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border-cyan-500/30',
  },
];

const CAPABILITIES = [
  { icon: Rocket, text: 'Rapid 48-hr team assembly' },
  { icon: ShieldCheck, text: 'Enterprise-grade security' },
  { icon: Database, text: 'Scalable cloud infrastructure' },
  { icon: Layers, text: 'Agile & transparent workflows' },
  { icon: Cpu, text: 'Cutting-edge tech stack' },
  { icon: Globe, text: 'Follow-the-sun development' },
];

function ServiceCard({ service, index }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { threshold: 0.15 });
  const { icon: Icon, gradient, glow, tag, title, description, features, stats, badge, badgeColor } = service;

  return (
    <div
      ref={ref}
      className={`service-card group relative glass-card p-7 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Badge */}
      <div className={`absolute top-5 right-5 px-2.5 py-1 rounded-full text-xs font-semibold border ${badgeColor}`}>
        {badge}
      </div>

      {/* Icon */}
      <div className={`service-icon w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} shadow-xl ${glow} flex items-center justify-center mb-5 transition-all duration-300`}>
        <Icon className="w-7 h-7 text-white" />
      </div>

      {/* Tag */}
      <div className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-2">{tag}</div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>

      {/* Description */}
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{description}</p>

      {/* Features */}
      <ul className="space-y-2.5 mb-6">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300 text-sm">
            <CheckCircle2 className="w-4 h-4 text-indigo-500 dark:text-indigo-400 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      {/* Divider + Stats */}
      <div className="border-t border-black/5 dark:border-white/5 pt-5 flex items-center justify-between">
        <div>
          <div className="text-2xl font-black text-slate-900 dark:text-white">{stats.value}</div>
          <div className="text-xs text-slate-400 dark:text-slate-500">{stats.label}</div>
        </div>
        <button className="group/btn flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-white transition-colors">
          Learn More
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Hover gradient overlay */}
      <div className={`absolute inset-0 rounded-[20px] bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
    </div>
  );
}

export default function Services() {
  const titleRef = React.useRef(null);
  const inView = useInView(titleRef, { threshold: 0.2 });

  return (
    <section id="services" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100/50 via-white/60 to-slate-100/50 dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950" />
      <div className="absolute inset-0 dot-grid opacity-60 dark:opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="section-label mb-5">
            <Code2 className="w-4 h-4" />
            What We Do
          </div>
          <h2 className="section-title mb-5">
            <span className="text-slate-900 dark:text-white">Three Pillars of </span>
            <span className="gradient-text">Excellence</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            From building complex software systems to training cutting-edge AI models —
            we deliver the full spectrum of technology services your business needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Capabilities strip */}
        <div className="glass-card p-6 sm:p-8">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Why leading companies choose <span className="gradient-text">TalentCodeHub</span>
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CAPABILITIES.map(({ icon: Icon, text }) => (
              <div key={text} className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-center">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                </div>
                <span className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-tight">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
