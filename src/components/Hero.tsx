import React from 'react';
import { ArrowRight, MessageCircle, Zap, Code2, Sparkles, PhoneCall, Layers, Globe, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';


export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const handleWhatsAppHero = () => {
    const msg = encodeURIComponent('হ্যালো Hhaq Plus IT! আমি ওয়েবসাইট / ল্যান্ডিং পেজ / ওয়েব অ্যাপ সম্পর্কে কথা বলতে চাই।');
    window.open(`https://wa.me/8801602867954?text=${msg}`, '_blank');
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#090d16]">
      {/* Dynamic Background Glowing Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Cybernetic Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Offer Highlight Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-emerald-500/50 text-emerald-300 text-xs font-bold shadow-lg shadow-emerald-500/10 animate-fade-in">
              <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>{t('🎉 ল্যান্ডিং পেজ ৳১,০০০ | ফুল ওয়েবসাইট ৳১০,০০০ (ফ্রি সাবডোমেইন ও হোস্টিং!)', '🎉 Landing Page 1,000 BDT | Full Website 10,000 BDT (Free Hosting!)')}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
              {t('প্রিমিয়াম ওয়েবসাইট, ল্যান্ডিং পেজ ও ', 'High-Converting Website, Landing Page & ')}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent underline decoration-cyan-500/40 underline-offset-8">
                {t('স্মার্ট ওয়েব অ্যাপ্লিকেশন', 'Web App Agency')}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {t(
                'Hhaq Plus IT শুধুমাত্র আধুনিক ওয়েবসাইট, বিক্রয়যোগ্য ল্যান্ডিং পেজ এবং কাস্টম ওয়েব অ্যাপ ডেভেলপমেন্টে স্পেশালাইজড। সবগুলোর সাথেই পাচ্ছেন ফ্রি সাবডোমেইন, ফ্রি হোস্টিং এবং স্টিডফাস্ট কাস্টমার ফ্রড চেক সুবিধা!',
                'Hhaq Plus IT specializes exclusively in Websites, Sales Landing Pages, and Web Applications powered by TanStack Start, React & Cloud technology with Free Subdomain & Free Hosting.'
              )}
            </p>

            {/* Direct Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0 text-xs font-semibold text-slate-200">
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                <Layers className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{t('ল্যান্ডিং পেজ (৳১,০০০)', 'Landing Page (1k BDT)')}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                <ShoppingBag className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{t('ফুল ওয়েবসাইট (৳১০,০০০)', 'Full Website (10k BDT)')}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                <Code2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>{t('কাস্টম ওয়েব অ্যাপ', 'Custom Web App')}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              
              {/* WhatsApp Quick CTA */}
              <button
                onClick={handleWhatsAppHero}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-xl glow-whatsapp transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 group"
              >
                <div className="w-7 h-7 rounded-full bg-slate-950/20 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 fill-slate-950 text-emerald-500" />
                </div>
                <span>{t('হোয়াটসঅ্যাপে মেসেজ দিন (01602867954)', 'Chat on WhatsApp (01602867954)')}</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>

              {/* Call Us Direct */}
              <a
                href="tel:01602867954"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl glass-panel hover:border-cyan-500/60 text-slate-200 hover:text-cyan-400 font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span>01602867954</span>
              </a>
            </div>

            {/* Social Trust Ratings */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 border-2 border-slate-900 flex items-center justify-center font-bold text-slate-950 text-[10px]">H</div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 border-2 border-slate-900 flex items-center justify-center font-bold text-slate-950 text-[10px]">P</div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 border-2 border-slate-900 flex items-center justify-center font-bold text-slate-950 text-[10px]">IT</div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400 text-xs">
                  ★ ★ ★ ★ ★ <span className="text-white font-bold ml-1">4.9 / 5.0</span>
                </div>
                <p className="text-[11px] text-slate-400">{t('১০০+ সফল ওয়েবসাইট ও ল্যান্ডিং পেজ তৈরি', '100+ Websites & Landing Pages Built')}</p>
              </div>
            </div>

          </div>

          {/* Right Hero Graphic Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Glow frame */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 opacity-30 blur-xl animate-pulse"></div>

              {/* Main Card Container */}
              <div className="relative rounded-3xl overflow-hidden glass-panel border border-cyan-500/30 shadow-2xl p-3">
                <img
                  src="/hhaq-hero.jpg"
                  alt="Hhaq Plus IT Website & Landing Page Showcase"
                  className="w-full h-auto rounded-2xl object-cover transform hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Floating Badge 1: Free Subdomain */}
                <div className="absolute top-6 right-6 glass-panel-glow p-3 rounded-2xl text-xs flex items-center gap-2 animate-float">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="font-bold text-white text-xs">Free Subdomain</div>
                    <div className="text-[10px] text-emerald-400 font-bold">+ Free Hosting</div>
                  </div>
                </div>

                {/* Floating Badge 2: Rapid Response */}
                <div className="absolute bottom-6 left-6 glass-panel-glow p-3 rounded-2xl text-xs flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">
                    <Zap className="w-5 h-5 fill-emerald-400" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-xs">Order Management</div>
                    <div className="text-[10px] text-emerald-400 font-mono font-semibold">01602867954</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
