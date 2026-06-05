import React from 'react';
import { Sparkles, Twitter, Linkedin, Github, Mail, ArrowRight, Globe, Shield, BookOpen } from 'lucide-react';

const FOOTER_LINKS = {
  Company:   [{ label: 'About Us', href: '#about' }, { label: 'How It Works', href: '#how-it-works' }, { label: 'Our Team', href: '#about' }, { label: 'Blog', href: '#' }, { label: 'Press Kit', href: '#' }],
  Services:  [{ label: 'Software Development', href: '#services' }, { label: 'Global Outsourcing', href: '#services' }, { label: 'AI Training', href: '#services' }, { label: 'Data Annotation', href: '#services' }, { label: 'Staff Augmentation', href: '#services' }],
  Careers:   [{ label: 'Open Positions', href: '#careers' }, { label: 'Engineering', href: '#careers' }, { label: 'AI & Data', href: '#careers' }, { label: 'Design', href: '#careers' }, { label: 'Open Application', href: '#contact' }],
  Resources: [{ label: 'Contact Us', href: '#contact' }, { label: 'Privacy Policy', href: '#' }, { label: 'Terms of Service', href: '#' }, { label: 'Cookie Policy', href: '#' }, { label: 'Security', href: '#' }],
};

const SOCIALS = [
  { icon: Twitter,  href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github,   href: '#', label: 'GitHub' },
  { icon: Mail,     href: 'mailto:hello@felovy.com', label: 'Email' },
];

const TRUST_BADGES = [
  { icon: Shield,   text: 'SOC 2 Compliant' },
  { icon: Globe,    text: 'GDPR Ready' },
  { icon: BookOpen, text: 'ISO 27001' },
];

export default function Footer() {
  const scrollTo = (href) => {
    if (href.startsWith('#')) document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(244,63,94,0.35), transparent)' }} />

      {/* Newsletter */}
      <div className="relative border-b border-rose-100 dark:border-white/5" style={{ background: 'linear-gradient(135deg, rgba(253,242,248,0.9), rgba(250,245,255,0.9), rgba(255,247,237,0.9))' }}>
        <div className="absolute inset-0 dark:bg-gradient-to-r dark:from-rose-950/40 dark:via-[#0d0010] dark:to-violet-950/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Stay in the loop</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Get the latest on tech trends, open positions, and company news.</p>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <input type="email" placeholder="your@email.com" className="input-field flex-1 sm:w-64 text-slate-900 dark:text-white" />
              <button className="btn-primary flex-shrink-0 px-5 py-3">
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="bg-white/85 dark:bg-[#0d0010]/85 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* Brand */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="relative w-9 h-9 flex-shrink-0">
                  <div className="absolute inset-0 rounded-xl rotate-6" style={{ background: 'linear-gradient(135deg, #f43f5e, #ec4899, #8b5cf6)' }} />
                  <div className="absolute inset-0 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #fb7185, #f472b6, #a78bfa)' }}>
                    <Sparkles className="w-5 h-5 text-white fill-white" />
                  </div>
                </div>
                <span className="text-xl font-bold tracking-tight gradient-text">Felovy</span>
              </div>

              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5 max-w-xs">
                The world's most trusted platform for tech talent, software delivery, and AI training data. Building tomorrow's technology, today.
              </p>

              <div className="flex gap-3 mb-6">
                {SOCIALS.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} aria-label={label}
                    className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-slate-400 hover:text-rose-600 dark:hover:text-rose-300 transition-all">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {TRUST_BADGES.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs text-slate-500"
                    style={{ background: 'rgba(244,63,94,0.06)', border: '1px solid rgba(244,63,94,0.12)' }}>
                    <Icon className="w-3 h-3 text-rose-400" /> {text}
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            {Object.entries(FOOTER_LINKS).map(([section, links]) => (
              <div key={section}>
                <h4 className="text-xs font-bold tracking-widest uppercase text-slate-700 dark:text-slate-300 mb-4">{section}</h4>
                <ul className="space-y-2.5">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <button onClick={() => scrollTo(href)} className="text-slate-500 hover:text-rose-600 dark:hover:text-rose-300 text-sm transition-colors text-left">
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-rose-100 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Felovy. All rights reserved.</p>
            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>All systems operational</span>
              <span className="mx-2">·</span>
              <span>Trusted by 200+ companies worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
