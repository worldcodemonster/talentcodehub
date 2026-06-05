import React from 'react';
import {
  Zap, Twitter, Linkedin, Github, Mail, ArrowRight,
  Globe, Shield, BookOpen
} from 'lucide-react';

const FOOTER_LINKS = {
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Our Team', href: '#about' },
    { label: 'Blog', href: '#' },
    { label: 'Press Kit', href: '#' },
  ],
  Services: [
    { label: 'Software Development', href: '#services' },
    { label: 'Global Outsourcing', href: '#services' },
    { label: 'AI Training', href: '#services' },
    { label: 'Data Annotation', href: '#services' },
    { label: 'Staff Augmentation', href: '#services' },
  ],
  Careers: [
    { label: 'Open Positions', href: '#careers' },
    { label: 'Engineering', href: '#careers' },
    { label: 'AI & Data', href: '#careers' },
    { label: 'Design', href: '#careers' },
    { label: 'Open Application', href: '#contact' },
  ],
  Resources: [
    { label: 'Contact Us', href: '#contact' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Security', href: '#' },
  ],
};

const SOCIALS = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Mail, href: 'mailto:hello@talentcodehub.com', label: 'Email' },
];

const TRUST_BADGES = [
  { icon: Shield, text: 'SOC 2 Compliant' },
  { icon: Globe, text: 'GDPR Ready' },
  { icon: BookOpen, text: 'ISO 27001' },
];

export default function Footer() {
  const scrollTo = (href) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      {/* Newsletter banner */}
      <div className="relative bg-gradient-to-r from-indigo-50/80 via-white/60 to-purple-50/80 dark:from-indigo-950/50 dark:via-slate-950 dark:to-purple-950/50 border-b border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Stay in the loop</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Get the latest on tech trends, open positions, and company news.
              </p>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="input-field flex-1 sm:w-64 text-slate-900 dark:text-white"
              />
              <button className="btn-primary flex-shrink-0 px-5 py-3">
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* Brand */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className="relative w-9 h-9 flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl rotate-6" />
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white fill-white" />
                  </div>
                </div>
                <span className="text-xl font-bold tracking-tight">
                  <span className="gradient-text">Talent</span>
                  <span className="text-slate-900 dark:text-white">Code</span>
                  <span className="text-slate-400 dark:text-slate-500">Hub</span>
                </span>
              </div>

              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5 max-w-xs">
                The world's most trusted platform for tech talent, software delivery,
                and AI training data. Building tomorrow's technology, today.
              </p>

              {/* Social links */}
              <div className="flex gap-3 mb-6">
                {SOCIALS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-lg glass-card flex items-center justify-center
                      text-slate-400 hover:text-indigo-600 dark:hover:text-white
                      hover:border-indigo-500/40 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2">
                {TRUST_BADGES.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/10 text-slate-500 dark:text-slate-500 text-xs">
                    <Icon className="w-3 h-3" /> {text}
                  </div>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(FOOTER_LINKS).map(([section, links]) => (
              <div key={section}>
                <h4 className="text-xs font-bold tracking-widest uppercase text-slate-700 dark:text-slate-300 mb-4">
                  {section}
                </h4>
                <ul className="space-y-2.5">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <button
                        onClick={() => scrollTo(href)}
                        className="text-slate-500 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-slate-300 text-sm transition-colors text-left"
                      >
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
        <div className="border-t border-black/5 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 dark:text-slate-600 text-sm">
              © {new Date().getFullYear()} TalentCodeHub. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-slate-400 dark:text-slate-600 text-xs">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
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
