import React from 'react';
import { Shield, Zap, Cpu, Headphones, Lock, Flame, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhyUs: React.FC = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Cpu,
      titleBn: 'অত্যাধুনিক কাস্টম ফুল-স্ট্যাক টেকনোলজি',
      titleEn: 'Modern Custom Full-Stack Tech',
      descBn: 'আমরা Node.js, Next.js, React, Tanstack Start,  PHP, Laravel ও Python এর মতো পাওয়ারফুল ও হাই-পারফরম্যান্স ফ্রেমওয়ার্ক ব্যবহার করি।',
      descEn: 'We leverage ultra-fast Node.js, Next.js, React, PHP, Laravel, and Python stack ensuring optimal speed & security.',
    },
    {
      icon: Zap,
      titleBn: 'র‍্যাপিড ডেলিভারি ও টাইট ডেডলাইন',
      titleEn: 'Rapid Delivery & On-Time Launch',
      descBn: 'অ্যাজাইল মেথডোলজি মেনে আমরা নির্দিষ্ট সময়ের আগেই আপনার প্রজেক্ট রেডি করে থাকি।',
      descEn: 'Agile development workflows ensure your website or landing page is built and deployed ahead of deadline.',
    },
    {
      icon: Headphones,
      titleBn: '২৪/৭ ডাইরেক্ট হোয়াটসঅ্যাপ সাপোর্ট',
      titleEn: '24/7 Direct WhatsApp Support',
      descBn: 'প্রজেক্ট চলাকালীন বা ডেলিভারির পর যেকোনো প্রয়োজনে সরাসরি হোয়াটসঅ্যাপ (01602867954) অথবা কলে সাপোর্ট পাবেন।',
      descEn: 'Instant client assistance via direct WhatsApp hotline (01602867954) and dedicated project managers.',
    },
    {
      icon: Shield,
      titleBn: 'সিকিউর ও স্কেলেবল কোডবেস',
      titleEn: 'Scalable & Future-Proof Architecture',
      descBn: 'আপনার ব্যবসা ছোট থেকে পরবর্তীতে বড় এন্টারপ্রাইজে রূপ নিলে অ্যাপটি অনায়াসে লাখ লাখ ইউজারের লোড সহ্য করতে পারবে।',
      descEn: 'Modular clean architecture built so your website can seamlessly expand into a massive ecosystem later.',
    },
    {
      icon: Lock,
      titleBn: 'সিকিউরিটি ও ব্যাকআপ সিস্টেম',
      titleEn: 'Enterprise Security & Daily Backups',
      descBn: 'ক্লাউডফ্লেয়ার ও SSL এনক্রিপশন যুক্ত করে আপনার ব্যবসায়িক ও গ্রাহকদের তথ্য ১০০% নিরাপদ রাখা হয়।',
      descEn: 'Enterprise Cloudflare security rules and encrypted daily backups protect your assets from threats.',
    },
    {
      icon: Flame,
      titleBn: 'স্বচ্ছ প্রাইজ ও হাই আর-ও-আই (ROI)',
      titleEn: 'Transparent Pricing & High ROI',
      descBn: 'কোনো হিডেন চার্জ নেই। প্রতি টাকা খরচে আমরা সর্বোচ্চ রিটার্ন অন ইনভেস্টমেন্ট সুনিশ্চিত করি।',
      descEn: 'No hidden fees or unexpected costs. Transparent pricing crafted for maximum return on investment.',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#070a12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t('কেন Hhaq Plus IT বেছে নেবেন?', 'Why Choose Hhaq Plus IT')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            {t('আমাদের বিশ্বস্ততার মূল ', 'The Core Advantages Of Working With ')}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              {t('পিলারসমূহ', 'Hhaq Plus IT')}
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            {t(
              'আমরা শুধু সফটওয়্যার বানাই না, আপনার বিজনেসের গ্রোথ ইঞ্জিনিয়ার হিসেবে কাজ করি।',
              'We do not just build software—we engineer growth systems for your enterprise.'
            )}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-3xl glass-panel hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 group border border-slate-800"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {t(reason.titleBn, reason.titleEn)}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t(reason.descBn, reason.descEn)}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
