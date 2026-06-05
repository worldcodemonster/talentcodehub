import React, { useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const TESTIMONIALS = [
  { name: 'Sarah Chen', role: 'CTO', company: 'NexAI Labs', country: '🇺🇸 United States', avatar: 'SC', avatarGrad: 'from-rose-500 to-pink-600', rating: 5, project: 'ML Infrastructure',
    text: 'Felovy assembled our entire ML engineering team in under 72 hours. The quality of talent is extraordinary — every engineer they sent us has exceeded expectations. Our model training pipeline is now 3x faster than before.' },
  { name: 'Marcus Weber', role: 'VP Engineering', company: 'FinTech Pro GmbH', country: '🇩🇪 Germany', avatar: 'MW', avatarGrad: 'from-violet-500 to-purple-600', rating: 5, project: 'Banking Platform',
    text: 'We needed a senior React/Node.js team for a critical banking platform. Felovy delivered 8 engineers within 48 hours, all with relevant fintech experience. The project launched on time with zero critical bugs. Remarkable.' },
  { name: 'Priya Sharma', role: 'Head of AI', company: 'DataMind Asia', country: '🇸🇬 Singapore', avatar: 'PS', avatarGrad: 'from-pink-500 to-rose-600', rating: 5, project: 'AI Data Annotation',
    text: "The data annotation quality from Felovy is in a different league. We ran extensive QA on 500K samples and hit 98.7% accuracy. Their annotators deeply understood the domain context, not just button-clicking." },
  { name: "James O'Sullivan", role: 'Founder & CEO', company: 'CloudShift', country: '🇬🇧 United Kingdom', avatar: 'JO', avatarGrad: 'from-emerald-500 to-teal-600', rating: 5, project: 'SaaS Product',
    text: "As a bootstrapped startup, we couldn't afford to mis-hire. Felovy gave us a battle-tested senior team at a fraction of the cost of in-house hiring. Six months in, we raised a Series A. They were instrumental." },
  { name: 'Akira Tanaka', role: 'Director of Technology', company: 'Kumo Systems', country: '🇯🇵 Japan', avatar: 'AT', avatarGrad: 'from-amber-500 to-orange-500', rating: 5, project: 'Enterprise Software',
    text: 'Felovy has been our preferred outsourcing partner for 3 years. What sets them apart is the consistency — every project, every team, every time. The communication is seamless despite timezone differences.' },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200 dark:text-slate-600'}`} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1 });
  const [active, setActive] = useState(0);
  const prev = () => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length);
  const visible = [
    (active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
    active,
    (active + 1) % TESTIMONIALS.length,
  ];

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(250,245,255,0.6) 0%, rgba(253,242,248,0.5) 50%, rgba(255,247,237,0.6) 100%)' }} />
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-[#0d0010] dark:via-[#1a0030]/30 dark:to-[#0d0010]" />
      <div className="absolute inset-0 dot-grid opacity-40 dark:opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-label mb-5"><MessageCircle className="w-4 h-4" /> Client Stories</div>
          <h2 className="section-title mb-5">
            <span className="text-slate-900 dark:text-white">Don't Take </span>
            <span className="gradient-text">Our Word For It</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Real results from real clients across industries and continents.
          </p>
        </div>

        <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="glass-card p-8 sm:p-10 mb-8 relative overflow-hidden max-w-3xl mx-auto card-shine">
            <Quote className="absolute top-6 right-6 w-20 h-20 text-rose-200 dark:text-rose-500/10" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <StarRating rating={TESTIMONIALS[active].rating} />
                <span className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: 'rgba(244,63,94,0.08)', border: '1px solid rgba(244,63,94,0.18)', color: '#f43f5e' }}>
                  {TESTIMONIALS[active].project}
                </span>
              </div>
              <blockquote className="text-lg sm:text-xl text-slate-700 dark:text-slate-200 leading-relaxed mb-8 italic">
                "{TESTIMONIALS[active].text}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${TESTIMONIALS[active].avatarGrad} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                  {TESTIMONIALS[active].avatar}
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">{TESTIMONIALS[active].name}</div>
                  <div className="text-slate-500 dark:text-slate-400 text-sm">{TESTIMONIALS[active].role} · {TESTIMONIALS[active].company}</div>
                  <div className="text-slate-400 dark:text-slate-500 text-xs mt-0.5">{TESTIMONIALS[active].country}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Nav */}
          <div className="flex items-center justify-center gap-4">
            <button onClick={prev} className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-300 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === active ? '24px' : '8px', height: '8px',
                    background: i === active ? 'linear-gradient(90deg, #f43f5e, #ec4899)' : '#e2e8f0',
                  }} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-300 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mini cards */}
        <div className={`mt-12 grid sm:grid-cols-3 gap-4 transition-all duration-700 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {visible.map((idx, position) => {
            const t = TESTIMONIALS[idx];
            return (
              <button key={idx} onClick={() => setActive(idx)}
                className={`glass-card p-5 text-left transition-all duration-300 ${position === 1 ? 'border-rose-300 dark:border-rose-500/40' : ''}`}
                style={position === 1 ? { background: 'rgba(244,63,94,0.04)' } : {}}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.avatarGrad} flex items-center justify-center text-white font-bold text-sm`}>{t.avatar}</div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">{t.name}</div>
                    <div className="text-xs text-slate-400 dark:text-slate-500">{t.company}</div>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed line-clamp-2">"{t.text}"</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
