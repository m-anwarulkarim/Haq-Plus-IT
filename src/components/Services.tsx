import React from 'react';
import { Code2, Check, MessageCircle, ArrowRight, Sparkles, ShoppingBag, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const servicesList = [
    {
      id: 'landing',
      icon: Layers,
      titleBn: '১. কাস্টম ল্যান্ডিং পেজ (Landing Page)',
      titleEn: '1. Custom Sales Landing Page',
      priceTag: '৳১,০০০ (সেটআপ) + ৳২০০/মাস',
      descriptionBn: 'React, Next.js, TanStack বা PHP দিয়ে নির্মিত হাই-কনভার্টিং ল্যান্ডিং পেজ।',
      descriptionEn: 'High-converting sales landing page built with React, Next.js, TanStack or PHP.',
      featuresBn: [
        'ফ্রি সাবডোমেইন + ফ্রি হোস্টিং অন্তর্ভুক্ত',
        'অর্ডার ম্যানেজমেন্ট এডমিন ড্যাশবোর্ড',
        'মেটা (Facebook) পিক্সেল ট্র্যাকিং সেটআপ',
        'Node.js / PHP / Laravel ব্যাকএন্ড অপশন',
        'নিজের মতো কাস্টমাইজ করার ১০০% স্বাধীনতা',
      ],
      featuresEn: [
        'Free Subdomain + Free Hosting Included',
        'Order Management Admin Dashboard',
        'Meta (Facebook) Pixel Tracking Setup',
        'Node.js / PHP / Laravel backend option',
        '100% Customizable per requirement',
      ],
      technologies: ['React', 'Next.js', 'TanStack', 'PHP', 'Tailwind'],
      badge: '৳১,০০০ / ল্যান্ডিং পেজ',
    },
    {
      id: 'website',
      icon: ShoppingBag,
      titleBn: '২. ফুল কাস্টম ওয়েবসাইট (E-Commerce & Business)',
      titleEn: '2. Full Custom Website (E-Commerce & Corporate)',
      priceTag: '৳১০,০০০ (সেটআপ) + ৳২০০/মাস',
      descriptionBn: 'Laravel, Node.js, Next.js বা Python ব্যাকএন্ডে নির্মিত অটো কুরিয়ার সহ ফুল ওয়েবসাইট।',
      descriptionEn: 'Full website built on Laravel, Node.js, Next.js or Python backend with courier API & fraud checker.',
      featuresBn: [
        'ফ্রি সাবডোমেইন + ফ্রি হোস্টিং সার্ভিস',
        'স্টিডফাস্ট কাস্টমার ফ্রড চেক (Steadfast Fraud Check Free!)',
        'অটো কুরিয়ার ইন্টিগ্রেশন (Steadfast / Pathao API)',
        'অর্ডার, কাস্টমার & ইনভেন্টরি ড্যাশবোর্ড',
        'মেটা পিক্সেল + গুগল এনালিটিক্স সেটআপ',
        'যেকোনো কাস্টম টেকনোলজিতে (Laravel/Node/PHP) কাস্টমাইজেশন',
      ],
      featuresEn: [
        'Free Subdomain + Free Hosting Included',
        'Steadfast Customer Fraud Check FREE!',
        'Auto Courier Integration (Steadfast/Pathao API)',
        'Order & Stock Inventory Dashboard',
        'Meta Pixel & Google Analytics Setup',
        'Custom Tech (Laravel/Node/PHP/Python)',
      ],
      technologies: ['Laravel', 'Node.js', 'Next.js', 'PHP', 'Python', 'MySQL'],
      badge: '🔥 জনপ্রিয় অফার (৳১০,০০০)',
    },
    {
      id: 'webapp',
      icon: Code2,
      titleBn: '৩. কাস্টম ওয়েব অ্যাপ্লিকেশন (Web App)',
      titleEn: '3. Custom Web Application (Web App)',
      priceTag: 'কাস্টম রিকোয়ারমেন্ট সাপেক্ষে',
      descriptionBn: 'Node.js, TanStack Start, Python বা Laravel ভিত্তিক এন্টারপ্রাইজ ওয়েব অ্যাপ্লিকেশন।',
      descriptionEn: 'Custom scalable Web Applications built with Node.js, TanStack Start, Python, or Laravel.',
      featuresBn: [
        'TanStack Start & Next.js Architecture',
        'Laravel / Node.js / Python REST API',
        'মাল্টি-ইউজার রোল ও পারমিশন সিস্টেম',
        'রিয়েল-টাইম ডাটা সিঙ্ক ও রিপোর্টস',
        '২৪/৭ স্পেশাল টেকনিক্যাল সাপোর্ট',
      ],
      featuresEn: [
        'TanStack Start & Next.js Architecture',
        'Laravel / Node.js / Python REST API',
        'Multi-user Access Control & Roles',
        'Real-time Analytics & Data Sync',
        '24/7 Dedicated Technical Support',
      ],
      technologies: ['TanStack', 'Node.js', 'Laravel', 'Python', 'PostgreSQL'],
      badge: 'High Performance',
    },
  ];

  const handleWhatsAppService = (serviceTitle: string) => {
    const text = encodeURIComponent(`হ্যালো Hhaq Plus IT! আমি "${serviceTitle}" সার্ভিসের কাস্টম টেকনোলজি ওয়েবসাইট সম্পর্কে কথা বলতে চাই।`);
    window.open(`https://wa.me/8801602867954?text=${text}`, '_blank');
  };

  return (
    <section id="services" className="py-24 bg-[#090d16] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t('কাস্টম ওয়েবসাইট সলিউশন', 'Custom Tech Website Solutions')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            {t('ওয়েবসাইট, ল্যান্ডিং পেজ ও ', 'Website, Landing Page & ')}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              {t('ওয়েব অ্যাপ সলিউশন', 'Web App Services')}
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            {t(
              'Node.js, Next.js, React, TanStack, PHP, Laravel, Python — আপনার প্রয়োজনীয় যেকোনো কাস্টম টেকনোলজি ব্যবহার করে আমরা ওয়েবসাইট ও ল্যান্ডিং পেজ তৈরি করি।',
              'Built on Node.js, Next.js, React, TanStack, PHP, Laravel, or Python. Free Subdomain & Free Hosting included!'
            )}
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-3xl glass-panel p-6 sm:p-8 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between border border-slate-800 shadow-xl"
              >
                {/* Glow outline on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:bg-cyan-950/30 transition-all shadow-inner">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    {service.badge && (
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] font-bold">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {t(service.titleBn, service.titleEn)}
                  </h3>
                  <div className="text-xs font-mono font-bold text-cyan-400 mb-3 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800 inline-block">
                    {service.priceTag}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {t(service.descriptionBn, service.descriptionEn)}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6 border-t border-slate-800/80 pt-4">
                    {(t(service.featuresBn.join('||'), service.featuresEn.join('||')).split('||')).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-900/90 text-cyan-400 text-[11px] font-mono border border-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action CTA */}
                <button
                  onClick={() => handleWhatsAppService(t(service.titleBn, service.titleEn))}
                  className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-emerald-950/60 border border-slate-800 hover:border-emerald-500/50 text-xs font-bold text-slate-200 hover:text-emerald-300 transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>{t('এই সার্ভিসের জন্য মেসেজ দিন (01602867954)', 'Inquire Service on WhatsApp')}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
