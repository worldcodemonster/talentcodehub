import React from 'react';
import { Code2, Globe, Brain, ArrowRight, CheckCircle2, Layers, Cpu, ShieldCheck, Rocket, Database } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const SERVICES = [
  {
    icon: Code2,
    gradient: 'from-rose-500 to-pink-600',
    glow: 'shadow-rose-400/30',
    iconBg: 'bg-gradient-to-br from-rose-500 to-pink-600',
    tag: 'Core Service',
    title: 'Software Development',
    description: 'End-to-end software engineering from idea to production. Our elite teams build scalable, battle-tested applications that power global businesses.',
    features: ['Full-stack web & mobile apps', 'Cloud-native architecture', 'API design & microservices', 'DevOps & CI/CD pipelines', 'Quality assurance & testing'],
    stats: { value: '500+', label: 'Projects Shipped' },
    badge: 'Most Popular',
    badgeStyle: { background: 'rgba(244,63,94,0.10)', border: '1px solid rgba(244,63,94,0.25)', color: '#f43f5e' },
    accentColor: 'text-rose-600 dark:text-rose-400',
    checkColor: 'text-rose-500',
  },
  {
    icon: Globe,
    gradient: 'from-violet-500 to-purple-600',
    glow: 'shadow-violet-400/30',
    iconBg: 'bg-gradient-to-br from-violet-500 to-purple-600',
    tag: 'Outsourcing',
    title: 'Global Talent Network',
    description: 'Instantly extend your team with pre-vetted senior engineers, designers, and product specialists from our curated global talent pool.',
    features: ['Dedicated development teams', 'Staff augmentation', 'Project-based outsourcing', 'Global talent sourcing', 'On-demand scaling'],
    stats: { value: '1000+', label: 'Talents Placed' },
    badge: 'Fast Hire',
    badgeStyle: { background: 'rgba(139,92,246,0.10)', border: '1px solid rgba(139,92,246,0.25)', color: '#7c3aed' },
    accentColor: 'text-violet-600 dark:text-violet-400',
    checkColor: 'text-violet-500',
  },
  {
    icon: Brain,
    gradient: 'from-amber-500 to-orange-500',
    glow: 'shadow-amber-400/30',
    iconBg: 'bg-gradient-to-br from-amber-500 to-orange-500',
    tag: 'AI & Data',
    title: 'AI Training & Annotation',
    description: 'Power next-generation AI models with high-quality training data. Our specialists deliver precision data annotation and RLHF at scale.',
    features: ['Data labeling & annotation', 'RLHF & model alignment', 'Synthetic data generation', 'AI model evaluation', 'Multilingual annotation'],
    stats: { value: '50M+', label: 'Data Points Annotated' },
    badge: 'Hot 🔥',
    badgeStyle: { background: 'rgba(245,158,11,0.10)', border: '1px solid rgba(245,158,11,0.25)', color: '#d97706' },
    accentColor: 'text-amber-600 dark:text-amber-400',
    checkColor: 'text-amber-500',
  },
];

const CAPABILITIES = [
  { icon: Rocket, text: 'Rapid 48-hr team assembly', color: 'text-rose-500' },
  { icon: ShieldCheck, text: 'Enterprise-grade security', color: 'text-violet-500' },
  { icon: Database, text: 'Scalable cloud infrastructure', color: 'text-amber-500' },
  { icon: Layers, text: 'Agile & transparent workflows', color: 'text-pink-500' },
  { icon: Cpu, text: 'Cutting-edge tech stack', color: 'text-purple-500' },
  { icon: Globe, text: 'Follow-the-sun development', color: 'text-orange-500' },
];

function ServiceCard({ service, index }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { threshold: 0.15 });

  return (
    <div ref={ref} className={`service-card group relative glass-card p-7 card-shine transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 150}ms` }}>
      {/* Badge */}
      <div className="absolute top-5 right-5 px-2.5 py-1 rounded-full text-xs font-semibold" style={service.badgeStyle}>
        {service.badge}
      </div>

      {/* Icon */}
      <div className={`service-icon w-14 h-14 rounded-2xl ${service.iconBg} shadow-xl ${service.glow} flex items-center justify-center mb-5 transition-all duration-300`}>
        <service.icon className="w-7 h-7 text-white" />
      </div>

      <div className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-2">{service.tag}</div>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{service.description}</p>

      <ul className="space-y-2.5 mb-6">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300 text-sm">
            <CheckCircle2 className={`w-4 h-4 ${service.checkColor} flex-shrink-0`} />
            {f}
          </li>
        ))}
      </ul>

      <div className="border-t border-rose-100 dark:border-white/5 pt-5 flex items-center justify-between">
        <div>
          <div className={`text-2xl font-black ${service.accentColor}`}>{service.stats.value}</div>
          <div className="text-xs text-slate-400">{service.stats.label}</div>
        </div>
        <button className="group/btn flex items-center gap-1.5 text-sm font-semibold text-rose-500 dark:text-rose-400 hover:text-rose-700 dark:hover:text-white transition-colors">
          Learn More <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

export default function Services() {
  const titleRef = React.useRef(null);
  const inView = useInView(titleRef, { threshold: 0.2 });

  return (
    <section id="services" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(253,242,248,0.6) 0%, rgba(255,255,255,0.8) 50%, rgba(250,245,255,0.6) 100%)' }} />
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-[#0d0010] dark:via-[#120018]/50 dark:to-[#0d0010]" />
      <div className="absolute inset-0 dot-grid opacity-60 dark:opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-label mb-5"><Code2 className="w-4 h-4" /> What We Do</div>
          <h2 className="section-title mb-5">
            <span className="text-slate-900 dark:text-white">Three Pillars of </span>
            <span className="gradient-text">Excellence</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            From building complex software systems to training cutting-edge AI models —
            we deliver the full spectrum of technology services your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SERVICES.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
        </div>

        {/* Capabilities strip */}
        <div className="glass-card p-6 sm:p-8">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Why leading companies choose <span className="gradient-text">Felovy</span>
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CAPABILITIES.map(({ icon: Icon, text, color }) => (
              <div key={text} className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-rose-50 dark:hover:bg-white/5 transition-colors text-center">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-white/5 border border-rose-100 dark:border-white/10 shadow-sm flex items-center justify-center">
                  <Icon className={`w-5 h-5 ${color}`} />
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
