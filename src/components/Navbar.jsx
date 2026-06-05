import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Sun, Moon } from 'lucide-react';
import { useThemeContext } from '../context/ThemeContext';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
];

function ThemeToggle() {
  const { theme, toggle } = useThemeContext();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300
        text-rose-400 hover:text-rose-600 dark:text-rose-300 dark:hover:text-rose-200
        bg-rose-50 hover:bg-rose-100 dark:bg-white/5 dark:hover:bg-white/10
        border border-rose-200 dark:border-white/10"
    >
      <Sun className={`absolute w-4 h-4 transition-all duration-300 ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'}`} />
      <Moon className={`absolute w-4 h-4 transition-all duration-300 ${theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} />
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navItems.map((n) => n.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/92 dark:bg-[#0d0010]/90 backdrop-blur-xl border-b border-rose-100 dark:border-white/5 shadow-lg shadow-rose-100/40 dark:shadow-black/20'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }} className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 flex-shrink-0">
              <div className="absolute inset-0 rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300"
                style={{ background: 'linear-gradient(135deg, #f43f5e, #ec4899, #8b5cf6)' }} />
              <div className="absolute inset-0 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #fb7185, #f472b6, #a78bfa)' }}>
                <Sparkles className="w-5 h-5 text-white fill-white" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="gradient-text">Felovy</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button key={item.label} onClick={() => scrollTo(item.href)}
                className={`nav-link text-sm pb-0.5 ${activeSection === item.href.slice(1) ? 'active' : ''}`}>
                {item.label}
              </button>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <button onClick={() => scrollTo('#careers')}
              className="text-sm text-slate-500 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-300 transition-colors font-medium">
              Join Our Team
            </button>
            <button onClick={() => scrollTo('#contact')} className="btn-primary text-sm py-2.5 px-5">
              Get Started
            </button>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu"
              className="p-2 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-white/5 transition-all">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white/95 dark:bg-[#0d0010]/95 backdrop-blur-xl border-t border-rose-100 dark:border-white/5 px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <button key={item.label} onClick={() => scrollTo(item.href)}
              className="w-full text-left px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-white hover:bg-rose-50 dark:hover:bg-white/5 transition-all font-medium">
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-rose-100 dark:border-white/5">
            <button onClick={() => scrollTo('#contact')} className="w-full btn-primary justify-center">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
