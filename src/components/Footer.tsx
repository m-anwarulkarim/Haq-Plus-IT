import React from 'react';
import { MessageCircle, Phone, Mail, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';


export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs relative pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/hhaq-logo.jpg"
                alt="Hhaq Plus IT Logo"
                className="w-10 h-10 rounded-xl border border-cyan-500/40 object-cover"
              />
              <div>
                <span className="text-lg font-black tracking-tight text-white font-['Outfit']">
                  HHAQ PLUS IT
                </span>
                <p className="text-[10px] text-cyan-400 font-semibold uppercase tracking-wider">
                  Next-Gen Digital Agency
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {t(
                'Hhaq Plus IT হলো একটি প্রিমিয়াম ডিজিটাল ও আইটি এজেন্সি। আমরা TanStack Start, React ও Cloud টেকনোলজি ব্যবহার করে বিশ্বমানের সফটওয়্যার ও ওয়েব প্ল্যাটফর্ম তৈরি করি।',
                'Hhaq Plus IT is a modern software development agency specializing in TanStack Start, React, Mobile Apps, and Enterprise Cloud Solutions.'
              )}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/8801602867954"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 transition-all"
                title="WhatsApp Hotline"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-400/30" />
              </a>
              <a
                href="tel:01602867954"
                className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 transition-all"
                title="Phone Call"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:dev.anwarul@gmail.com   "
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                title="Email Support"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t('সার্ভিসসমূহ', 'Core Services')}
            </h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">TanStack Web Apps</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Mobile App Dev</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Custom Enterprise ERP</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Digital Marketing & SEO</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Cyber Security & Cloud</a></li>
            </ul>
          </div>

          {/* Quick Nav */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t('কুইক নেভিগেশন', 'Quick Navigation')}
            </h4>
            <ul className="space-y-2">
              <li><a href="#why-us" className="hover:text-cyan-400 transition-colors">{t('কেন আমরা', 'Why Choose Us')}</a></li>
              <li><a href="#calculator" className="hover:text-cyan-400 transition-colors">{t('বাজেট ক্যালকুলেটর', 'Cost Estimator')}</a></li>
              <li><a href="#tech-stack" className="hover:text-cyan-400 transition-colors">{t('টেকনোলজি സ്റ്റ্যাক', 'Tech Architecture')}</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">{t('প্রশ্নোত্তর', 'FAQ')}</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t('জরুরি লাইন (Hotline)', 'Emergency Hotline')}
            </h4>
            <p className="text-xs text-slate-300 font-mono">
              WhatsApp: <strong className="text-emerald-400 font-bold">01602867954</strong>
            </p>
            <p className="text-xs text-slate-300 font-mono">
              Phone: <strong className="text-cyan-400 font-bold">01602867954</strong>
            </p>
            <p className="text-[11px] text-slate-400">
              Dhaka, Bangladesh
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Support Status: Active</span>
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Hhaq Plus IT. All Rights Reserved.</p>
          <div className="flex items-center gap-2">
            <span>Powered by <strong className="text-slate-200">Haq Plus IT  </strong></span>
            <span>•</span>
            <span>Hotline: <strong className="text-emerald-400 font-mono">01602867954</strong></span>
          </div>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
