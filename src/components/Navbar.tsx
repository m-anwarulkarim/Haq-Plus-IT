import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const { lang, toggleLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#pricing', labelBn: 'প্রাইসিং', labelEn: 'Pricing' },
    { href: '#why-us', labelBn: 'কেন আমরা', labelEn: 'Why Us' },
    { href: '#calculator', labelBn: 'ক্যালকুলেটর', labelEn: 'Estimator' },
    { href: '#tech-stack', labelBn: 'টেকনোলজি', labelEn: 'Tech Stack' },
    { href: '#faq', labelBn: 'প্রশ্নোত্তর', labelEn: 'FAQ' },
    { href: '#contact', labelBn: 'যোগাযোগ', labelEn: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-xl border-b border-cyan-500/20 py-2.5 shadow-2xl'
          : 'bg-gradient-to-b from-slate-950/80 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo - flex-shrink-0 prevents squishing */}
          <a href="#" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative">
              <img
                src="/hhaq-logo.jpg"
                alt="Hhaq Plus IT Logo"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl object-cover border border-cyan-500/40 group-hover:scale-105 transition-transform duration-300 shadow-lg glow-cyan"
              />
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </div>
            <div className="whitespace-nowrap">
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-black tracking-tight bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent font-['Outfit']">
                  HHAQ PLUS IT
                </span>
                <span className="text-[9px] uppercase font-extrabold tracking-wider px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  Tech
                </span>
              </div>
              <p className="text-[9px] sm:text-[10px] text-slate-400 tracking-wider font-medium">
                {t('ওয়েবসাইট & ল্যান্ডিং পেজ', 'Websites & Landing Pages')}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Capsule - whitespace-nowrap prevents line wrapping */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-900/70 p-1.5 rounded-full border border-slate-800 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-cyan-300 hover:bg-slate-800/80 transition-all duration-200 whitespace-nowrap"
              >
                {t(link.labelBn, link.labelEn)}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center gap-2.5 flex-shrink-0">
            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700 hover:border-cyan-500/50 text-xs font-semibold text-slate-200 hover:text-cyan-400 transition-all whitespace-nowrap"
              title="Change Language"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{lang === 'bn' ? 'English' : 'বাংলা'}</span>
            </button>

            {/* Get Quote / Order CTA */}
            <a
              href="#pricing"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-xs font-extrabold text-slate-950 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <span>{t('অর্ডার করুন', 'Order Now')}</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </a>
          </div>

          {/* Mobile & Tablet Toggle Buttons */}
          <div className="flex xl:hidden items-center gap-2 flex-shrink-0">
            <button
              onClick={toggleLang}
              className="px-2.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-extrabold text-cyan-400"
            >
              {lang === 'bn' ? 'EN' : 'বাং'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-cyan-500/40 transition-all"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile & Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950/98 backdrop-blur-2xl border-b border-slate-800/90 px-4 pt-4 pb-6 mt-2 space-y-4 shadow-2xl animate-fadeIn max-h-[85vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900/60 hover:bg-cyan-950/50 hover:text-cyan-300 border border-slate-800/80 transition-all"
              >
                {t(link.labelBn, link.labelEn)}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
            <a
              href="https://wa.me/8801602867954"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg glow-whatsapp"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>হোয়াটসঅ্যাপ মেসেজ (01602867954)</span>
            </a>

            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 text-slate-950 font-black text-sm shadow-xl"
            >
              <span>{t('ওয়েবসাইট ও ল্যান্ডিং পেজ অর্ডার করুন', 'Order Website / Landing Page')}</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
