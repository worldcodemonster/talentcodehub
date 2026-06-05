import React, { useRef, useState } from 'react';
import {
  Briefcase, MapPin, Clock, DollarSign, ArrowRight,
  Search, Zap, Brain, Code2, PenTool, BarChart,
  Globe, Shield, Database, ExternalLink
} from 'lucide-react';
import { useInView } from '../hooks/useInView';

const CATEGORIES = ['All', 'Engineering', 'AI & Data', 'Design', 'Product', 'DevOps'];

const JOBS = [
  {
    title: 'Senior Full-Stack Engineer',
    category: 'Engineering',
    icon: Code2,
    type: 'Full-time',
    location: 'Remote · Global',
    salary: '$120K–$180K',
    tags: ['React', 'Node.js', 'TypeScript', 'AWS'],
    grad: 'from-indigo-500 to-blue-600',
    hot: true,
    desc: 'Build scalable web applications for our global client portfolio. Lead architecture decisions and mentor junior engineers.',
  },
  {
    title: 'AI Training Specialist',
    category: 'AI & Data',
    icon: Brain,
    type: 'Contract',
    location: 'Remote · Flexible',
    salary: '$40–$80/hr',
    tags: ['RLHF', 'LLM', 'Annotation', 'Python'],
    grad: 'from-purple-500 to-violet-600',
    hot: true,
    desc: 'Work directly with frontier AI models on RLHF and data annotation projects for leading AI research labs.',
  },
  {
    title: 'Machine Learning Engineer',
    category: 'Engineering',
    icon: Zap,
    type: 'Full-time',
    location: 'Remote · APAC',
    salary: '$100K–$160K',
    tags: ['PyTorch', 'Python', 'MLOps', 'CUDA'],
    grad: 'from-cyan-500 to-teal-600',
    hot: false,
    desc: 'Design and implement ML pipelines for enterprise clients. Own model training, evaluation, and deployment workflows.',
  },
  {
    title: 'Senior UX/UI Designer',
    category: 'Design',
    icon: PenTool,
    type: 'Full-time',
    location: 'Remote · EU/US',
    salary: '$90K–$140K',
    tags: ['Figma', 'Design Systems', 'Prototyping', 'Research'],
    grad: 'from-pink-500 to-rose-600',
    hot: false,
    desc: 'Create beautiful, user-centered interfaces for complex enterprise software. Own design systems for multi-product ecosystems.',
  },
  {
    title: 'Data Annotation Lead',
    category: 'AI & Data',
    icon: Database,
    type: 'Full-time',
    location: 'Remote · Global',
    salary: '$60K–$90K',
    tags: ['QA', 'NLP', 'Computer Vision', 'Label Studio'],
    grad: 'from-emerald-500 to-green-600',
    hot: true,
    desc: 'Lead teams of annotators on high-impact AI training projects. Own quality assurance processes and client relationships.',
  },
  {
    title: 'DevOps / Platform Engineer',
    category: 'DevOps',
    icon: Shield,
    type: 'Full-time',
    location: 'Remote · Global',
    salary: '$110K–$170K',
    tags: ['Kubernetes', 'Terraform', 'AWS', 'GitOps'],
    grad: 'from-amber-500 to-orange-600',
    hot: false,
    desc: 'Build and maintain world-class cloud infrastructure for our engineering teams and client deployments.',
  },
  {
    title: 'Product Manager — AI',
    category: 'Product',
    icon: BarChart,
    type: 'Full-time',
    location: 'Remote · US/EU',
    salary: '$130K–$190K',
    tags: ['Product Strategy', 'AI/ML', 'Agile', 'Data-driven'],
    grad: 'from-violet-500 to-purple-600',
    hot: false,
    desc: 'Define and drive the product roadmap for our AI training platform. Bridge technical capabilities and client needs.',
  },
  {
    title: 'React Native Developer',
    category: 'Engineering',
    icon: Code2,
    type: 'Contract',
    location: 'Remote · Flexible',
    salary: '$70–$120/hr',
    tags: ['React Native', 'iOS', 'Android', 'TypeScript'],
    grad: 'from-sky-500 to-blue-600',
    hot: false,
    desc: 'Build high-performance mobile applications for our startup and enterprise clients. Cross-platform expertise required.',
  },
];

const PERKS = [
  { icon: Globe, label: '100% Remote', sub: 'Work from anywhere' },
  { icon: DollarSign, label: 'Competitive Pay', sub: 'Above-market rates' },
  { icon: Clock, label: 'Flexible Hours', sub: 'Own your schedule' },
  { icon: Zap, label: 'Fast Hiring', sub: '48hr process' },
];

function JobCard({ job, index, inView }) {
  const Icon = job.icon;
  return (
    <div
      className={`glass-card p-5 sm:p-6 group transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${(index % 4) * 100}ms` }}
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${job.grad} flex items-center justify-center flex-shrink-0`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                {job.title}
              </h3>
              {job.hot && (
                <span className="px-2 py-0.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-500 dark:text-red-400 text-xs font-bold">
                  🔥 Hot
                </span>
              )}
            </div>
            <div className="text-slate-400 dark:text-slate-500 text-xs mt-0.5">{job.category}</div>
          </div>
        </div>
        <button className="flex-shrink-0 w-8 h-8 rounded-lg glass-card flex items-center justify-center text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>

      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">{job.desc}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {job.tags.map((tag) => (
          <span key={tag} className="px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/10 text-slate-500 dark:text-slate-400 text-xs">
            {tag}
          </span>
        ))}
      </div>

      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 dark:text-slate-500">
        <span className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" /> {job.type}
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5" /> {job.location}
        </span>
        <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
          <DollarSign className="w-3.5 h-3.5" /> {job.salary}
        </span>
      </div>

      {/* Apply button */}
      <button
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="mt-4 w-full py-2.5 rounded-xl text-sm font-semibold
          text-indigo-600 dark:text-indigo-400
          border border-indigo-500/20
          hover:bg-indigo-500/10 hover:border-indigo-500/40 hover:text-indigo-700 dark:hover:text-white
          transition-all flex items-center justify-center gap-2"
      >
        Apply Now <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

export default function Careers() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.05 });
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = JOBS.filter((j) => {
    const matchCat = activeCategory === 'All' || j.category === activeCategory;
    const matchSearch =
      !searchTerm ||
      j.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      j.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <section id="careers" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60 dark:opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="section-label mb-5">
            <Briefcase className="w-4 h-4" />
            Open Positions
          </div>
          <h2 className="section-title mb-5">
            <span className="text-slate-900 dark:text-white">Join the </span>
            <span className="gradient-text">World's Best</span>
            <br />
            <span className="text-slate-900 dark:text-white">Tech Team</span>
          </h2>
          <p className="section-subtitle mx-auto text-center mb-8">
            Work on groundbreaking projects from anywhere in the world. Competitive pay,
            flexible hours, and a team that actually cares.
          </p>

          {/* Perks */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {PERKS.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass-card">
                <Icon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <div className="text-left">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">{label}</div>
                  <div className="text-xs text-slate-400 dark:text-slate-500">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className={`flex flex-col sm:flex-row gap-4 mb-8 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search roles or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10 text-slate-900 dark:text-white"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                    : 'glass-card text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className={`text-slate-400 dark:text-slate-500 text-sm mb-6 transition-all duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          Showing <span className="text-slate-900 dark:text-white font-medium">{filtered.length}</span> open position{filtered.length !== 1 ? 's' : ''}
          {activeCategory !== 'All' && ` in ${activeCategory}`}
        </div>

        {/* Job Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((job, i) => (
            <JobCard key={job.title} job={job} index={i} inView={inView} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-400 dark:text-slate-500">
            <Search className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>No positions found. Try a different search or category.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-slate-500 dark:text-slate-400 mb-4">
            Don't see the right fit? We're always looking for exceptional talent.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary"
          >
            Send Open Application <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
