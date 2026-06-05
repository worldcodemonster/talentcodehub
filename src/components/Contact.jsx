import React, { useRef, useState } from 'react';
import { Mail, Phone, MessageSquare, Send, Globe, CheckCircle2, Loader2, Building, User } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const INQUIRY_TYPES = ['Software Development Project', 'Team Outsourcing / Staff Aug', 'AI Training & Data Annotation', 'Career / Job Application', 'Partnership', 'Other'];

const CONTACT_INFO = [
  { icon: Mail,  label: 'Email Us',   value: 'hello@felovy.com',      sub: 'We reply within 24 hours',  href: 'mailto:hello@felovy.com', color: 'text-rose-600 dark:text-rose-400',   bg: 'bg-rose-50 dark:bg-rose-500/10',   border: 'border-rose-200 dark:border-rose-500/20' },
  { icon: Phone, label: 'Call Us',    value: '+1 (888) FEL-OVYX',     sub: 'Mon–Fri, 9AM–6PM EST',      href: 'tel:+18883356989',         color: 'text-violet-600 dark:text-violet-400', bg: 'bg-violet-50 dark:bg-violet-500/10', border: 'border-violet-200 dark:border-violet-500/20' },
  { icon: Globe, label: 'Global HQ', value: 'Singapore & New York',   sub: 'Follow-the-sun support',    href: '#',                         color: 'text-pink-600 dark:text-pink-400',   bg: 'bg-pink-50 dark:bg-pink-500/10',   border: 'border-pink-200 dark:border-pink-500/20' },
];

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', inquiryType: '', message: '' });
  const [status, setStatus] = useState('idle');
  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); setStatus('submitting'); setTimeout(() => setStatus('success'), 1800); };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-emerald-500" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Message Received!</h3>
        <p className="text-slate-500 dark:text-slate-400 max-w-sm">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
        <button onClick={() => setStatus('idle')} className="text-rose-500 hover:text-rose-700 text-sm transition-colors">Send another message →</button>
      </div>
    );
  }

  const labelClass = "text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className={labelClass}><User className="w-3.5 h-3.5" /> Full Name *</label>
          <input type="text" name="name" required placeholder="John Smith" value={form.name} onChange={handleChange} className="input-field text-slate-900 dark:text-white" />
        </div>
        <div className="space-y-1.5">
          <label className={labelClass}><Building className="w-3.5 h-3.5" /> Company</label>
          <input type="text" name="company" placeholder="Acme Corp" value={form.company} onChange={handleChange} className="input-field text-slate-900 dark:text-white" />
        </div>
      </div>
      <div className="space-y-1.5">
        <label className={labelClass}><Mail className="w-3.5 h-3.5" /> Email Address *</label>
        <input type="email" name="email" required placeholder="john@company.com" value={form.email} onChange={handleChange} className="input-field text-slate-900 dark:text-white" />
      </div>
      <div className="space-y-1.5">
        <label className={labelClass}><MessageSquare className="w-3.5 h-3.5" /> How Can We Help? *</label>
        <select name="inquiryType" required value={form.inquiryType} onChange={handleChange} className="input-field appearance-none cursor-pointer text-slate-900 dark:text-white">
          <option value="" className="bg-white dark:bg-slate-900 text-slate-400">Select an inquiry type...</option>
          {INQUIRY_TYPES.map((t) => <option key={t} value={t} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">{t}</option>)}
        </select>
      </div>
      <div className="space-y-1.5">
        <label className={labelClass}>Message *</label>
        <textarea name="message" required rows={4} placeholder="Tell us about your project, team needs, or how you'd like to work with us..." value={form.message} onChange={handleChange} className="input-field resize-none text-slate-900 dark:text-white" />
      </div>
      <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full justify-center py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed">
        {status === 'submitting' ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</> : <><Send className="w-5 h-5" /> Send Message</>}
      </button>
      <p className="text-slate-400 text-xs text-center">By submitting, you agree to our Privacy Policy. We never share your information.</p>
    </form>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1 });

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(253,242,248,0.7) 0%, rgba(250,245,255,0.5) 50%, rgba(253,242,248,0.7) 100%)' }} />
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-[#0d0010] dark:via-[#1a0030]/30 dark:to-[#0d0010]" />
      <div className="absolute inset-0 grid-bg opacity-60 dark:opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(244,63,94,0.25), transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-label mb-5"><MessageSquare className="w-4 h-4" /> Get In Touch</div>
          <h2 className="section-title mb-5">
            <span className="text-slate-900 dark:text-white">Let's Build </span>
            <span className="gradient-text">Something Great</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Whether you need a team, a single specialist, or world-class AI training data — we're ready to make it happen. Fast.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className={`space-y-6 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Reach Out Directly</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Our global team operates across all timezones. No matter where you are, there's always someone ready to help.</p>
            </div>
            <div className="space-y-4">
              {CONTACT_INFO.map((info) => (
                <a key={info.label} href={info.href} className={`flex items-center gap-4 p-4 glass-card border ${info.border} hover:scale-[1.01] transition-all`}>
                  <div className={`w-11 h-11 rounded-xl ${info.bg} border ${info.border} flex items-center justify-center flex-shrink-0`}>
                    <info.icon className={`w-5 h-5 ${info.color}`} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 mb-0.5">{info.label}</div>
                    <div className="text-slate-900 dark:text-white font-semibold">{info.value}</div>
                    <div className="text-slate-400 text-xs">{info.sub}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="glass-card p-5 border border-emerald-200 dark:border-emerald-500/20" style={{ background: 'rgba(16,185,129,0.04)' }}>
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span className="font-semibold text-slate-900 dark:text-white">Our Response Promise</span>
              </div>
              <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
                {[['4 business hours', 'Email replies within'], ['24 hours', 'Discovery call scheduled within'], ['48 hours', 'Team ready to start in']].map(([bold, prefix]) => (
                  <li key={bold} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {prefix} <span className="text-slate-900 dark:text-white font-medium">{bold}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`glass-card p-7 sm:p-8 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Send Us a Message</h3>
            <p className="text-slate-400 text-sm mb-6">Fill out the form and we'll get back to you quickly.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
