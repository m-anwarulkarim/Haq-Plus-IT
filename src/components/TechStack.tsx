import React from 'react';
import { Cpu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TechStack: React.FC = () => {
  const { t } = useLanguage();

  const techItems = [
    { name: 'Node.js', category: 'Backend & APIs', desc: 'Fast, asynchronous server-side engine', highlight: true },
    { name: 'Next.js', category: 'React Framework', desc: 'SEO-ready Full-stack React framework', highlight: true },
    { name: 'React', category: 'Frontend UI', desc: 'Component-based modern web interfaces', highlight: true },
    { name: 'TanStack Start', category: 'Modern Stack', desc: 'Full-stack type-safe Router & Query framework', highlight: true },
    { name: 'PHP', category: 'Backend Power', desc: 'Classic & reliable web server technology', highlight: true },
    { name: 'Laravel', category: 'PHP Framework', desc: 'Elegant MVC framework for web artisans', highlight: true },
    { name: 'Python', category: 'AI & Data Backend', desc: 'Robust Django/FastAPI microservices', highlight: true },
    { name: 'Tailwind CSS', category: 'Styling Engine', desc: 'Utility-first modern design system', highlight: false },
    { name: 'MySQL / Postgres', category: 'Databases', desc: 'Relational data storage & reliability', highlight: false },
    { name: 'Custom Architecture', category: 'Tailor-Made', desc: 'Built with any tech stack per client choice', highlight: true },
  ];

  return (
    <section id="tech-stack" className="py-24 bg-[#070a12] relative border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t('আমাদের টেকনোলজি স্ট্যাক', 'Supported Technology Stack')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t('আপনার পছন্দের যেকোনো টেকনোলজিতে ', 'Custom Website Built On Any ')}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              {t('কাস্টম ওয়েবসাইট ডেভেলপমেন্ট', 'Technology Stack')}
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            {t(
              'Node.js, Next.js, React, TanStack, PHP, Laravel কিংবা Python — আপনার প্রয়োজন অনুযায়ী সম্পূর্ণ কাস্টম টেকনোলজিতে আমরা ওয়েবসাইট ও ল্যান্ডিং পেজ তৈরি করি।',
              'Node.js, Next.js, React, TanStack, PHP, Laravel, or Python — we develop custom websites and landing pages using your preferred tech stack.'
            )}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {techItems.map((tech, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border text-center transition-all duration-300 hover:scale-105 ${
                tech.highlight
                  ? 'bg-gradient-to-b from-cyan-950/60 to-slate-900 border-cyan-500/60 shadow-lg shadow-cyan-500/10'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              {tech.highlight && (
                <span className="inline-block px-2 py-0.5 mb-2 rounded bg-cyan-500 text-slate-950 font-bold text-[9px] uppercase tracking-wider">
                  Supported
                </span>
              )}
              <h4 className="font-extrabold text-base text-white font-mono">{tech.name}</h4>
              <p className="text-[11px] text-cyan-400 font-semibold mt-1">{tech.category}</p>
              <p className="text-[10px] text-slate-400 mt-1 leading-snug">{tech.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
