import React from 'react';
import { Check, Sparkles, ShieldCheck, ArrowRight, MessageCircle, Server, Globe, ShieldAlert, ShoppingBag, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';


export const PricingPackages: React.FC = () => {
  const { t } = useLanguage();

  const handleOrderWhatsApp = (planName: string, setupPrice: string, monthlyPrice: string) => {
    const text = `হ্যালো Hhaq Plus IT! আমি আপনার "${planName}" প্যাকেজটি অর্ডার করতে চাই।

📌 প্যাকেজ: ${planName}
💰 সেটিংস ফি: ৳${setupPrice} BDT
🔄 মান্থলি চার্জ: ৳${monthlyPrice} BDT / মাস
🎁 স্পেশাল অফার: ফ্রি সাবডোমেইন + ফ্রি হোস্টিং

দয়া করে প্রজেক্ট শুরু করার পরবর্তী স্টেপ জানিয়ে দিন। ফোন: 01602867954`;

    window.open(`https://wa.me/8801602867954?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="pricing" className="py-24 bg-[#090d16] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-wider shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>{t('সেরা অফার ও বাজেট প্রাইসিং', 'Unbeatable Budget Pricing')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            {t('আপনার বাজেট অনুযায়ী সেরা ', 'Choose The Perfect Package For Your ')}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              {t('প্যাকেজ বেছে নিন', 'Business Scale')}
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            {t(
              'সবগুলো প্যাকেজের সাথেই পাচ্ছেন ফ্রি সাবডোমেইন ও ফ্রি হোস্টিং! কোনো হিডেন চার্জ নেই। আজই আপনার প্রজেক্ট শুরু করুন।',
              'All plans include FREE Subdomain + FREE Hosting! Transparent pricing with no hidden developer fees.'
            )}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Landing Page Plan */}
          <div className="group rounded-3xl glass-panel p-8 sm:p-10 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-slate-900 text-cyan-400 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl border-l border-b border-slate-800">
              Starter Choice
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {t('স্মার্ট ল্যান্ডিং পেজ (Landing Page)', 'Smart Landing Page')}
                  </h3>
                  <p className="text-xs text-cyan-400 font-medium">
                    {t('একক প্রোডাক্ট বা সেলস পেজের জন্য সেরা', 'Best for single product or lead conversion')}
                  </p>
                </div>
              </div>

              {/* Price Tag */}
              <div className="my-6 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black text-white font-mono">৳১,০০০</span>
                  <span className="text-xs text-slate-400 font-semibold">{t('সেটআপ ফি (One-Time)', 'Setup Fee')}</span>
                </div>
                <div className="mt-1 flex items-center justify-between text-xs font-medium text-emerald-400 border-t border-slate-800/80 pt-2">
                  <span>🔄 {t('মাসিক চার্জ:', 'Monthly Fee:')} <strong className="font-mono text-white">৳২০০ / মাস</strong></span>
                  <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-[10px]">ফ্রি সাবডোমেইন + হোস্টিং</span>
                </div>
              </div>

              {/* Feature Bullets */}
              <div className="space-y-3 mb-8 text-xs text-slate-200">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <strong className="text-white">{t('ফ্রি সাবডোমেইন + ফ্রি হোস্টিং অন্তর্ভুক্ত', 'Free Subdomain + Free Hosting Included')}</strong>
                    <p className="text-[11px] text-slate-400">{t('কোনো বাড়তি সার্ভার বা ডোমেইন ডাইরেক্ট খরচ নেই', 'Zero extra hosting setup charges')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <strong className="text-white">{t('অর্ডার ম্যানেজমেন্ট এডমিন ড্যাশবোর্ড', 'Order Management Admin Dashboard')}</strong>
                    <p className="text-[11px] text-slate-400">{t('সহজেই কাস্টমার অর্ডার দেখতে ও ম্যানেজ করতে পারবেন', 'Manage client orders in 1-click dashboard')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <strong className="text-white">{t('মেটা (Facebook) পিক্সেল সেটআপ', 'Meta (Facebook) Pixel Setup')}</strong>
                    <p className="text-[11px] text-slate-400">{t('বিজ্ঞাপনের নির্ভুল রিক্যাচিং ও কনভার্সন ট্র্যাকিং', 'Accurate ad tracking & retargeting setup')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <strong className="text-white">{t('নিজের মতো কাস্টমাইজ করার সুবিধা', 'Fully Customizable Design')}</strong>
                    <p className="text-[11px] text-slate-400">{t('আপনার পছন্দমতো টেক্সট, কালার ও ইমেজ সাজান', 'Customize layout & colors per requirement')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <strong className="text-white">{t('হোয়াটসঅ্যাপ সরাসরি কাস্টমার কানেক্ট (01602867954)', 'Direct WhatsApp Customer Connect')}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Button */}
            <button
              onClick={() => handleOrderWhatsApp('স্মার্ট ল্যান্ডিং পেজ (Landing Page)', '1,000', '200')}
              className="w-full py-4 rounded-2xl bg-slate-900 hover:bg-cyan-950/60 border border-slate-700 hover:border-cyan-500 text-xs font-bold text-cyan-300 transition-all flex items-center justify-center gap-2 group/btn shadow-lg"
            >
              <MessageCircle className="w-4 h-4 text-cyan-400" />
              <span>{t('ল্যান্ডিং পেজ অর্ডার করুন (৳১,০০০)', 'Order Landing Page (1,000 BDT)')}</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>

          </div>

          {/* Card 2: Full Website Plan (Recommended) */}
          <div className="group rounded-3xl glass-panel-glow p-8 sm:p-10 border-2 border-cyan-500/60 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 text-[10px] font-black uppercase tracking-widest px-5 py-1.5 rounded-bl-2xl shadow-md">
              🔥 Most Popular / Best Value
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-bold shadow-lg">
                  <ShoppingBag className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {t('ফুল ই-কমার্স / বিজনেসব্যাপী ওয়েবসাইট', 'Full E-Commerce / Enterprise Website')}
                  </h3>
                  <p className="text-xs text-emerald-400 font-semibold">
                    {t('সম্পূর্ণ অনলাইন শপ ও বিজনেস অটোমেশন', 'Complete e-commerce shop with courier integration')}
                  </p>
                </div>
              </div>

              {/* Price Tag */}
              <div className="my-6 p-4 rounded-2xl bg-slate-900/90 border border-cyan-500/40">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black text-white font-mono">৳১০,০০০</span>
                  <span className="text-xs text-slate-300 font-semibold">{t('সেটআপ ফি (One-Time)', 'Setup Fee')}</span>
                </div>
                <div className="mt-1 flex items-center justify-between text-xs font-medium text-emerald-400 border-t border-slate-800 pt-2">
                  <span>🔄 {t('মাসিক চার্জ:', 'Monthly Fee:')} <strong className="font-mono text-white">৳২০০ / মাস</strong></span>
                  <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-[10px]">ফ্রি সাবডোমেইন + হোস্টিং</span>
                </div>
              </div>

              {/* Feature Bullets */}
              <div className="space-y-3 mb-8 text-xs text-slate-200">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <strong className="text-white">{t('ফ্রি সাবডোমেইন + ফ্রি হোস্টিং সার্ভিস', 'Free Subdomain + Free Hosting Included')}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <strong className="text-emerald-400 flex items-center gap-1.5">
                      <ShieldAlert className="w-4 h-4 text-emerald-400" />
                      {t('স্টিডফাস্ট কাস্টমার ফ্রড চেক (Steadfast Fraud Check Free!)', 'Steadfast Customer Fraud Check FREE!')}
                    </strong>
                    <p className="text-[11px] text-slate-400">{t('ফেক অর্ডার ও ফেক কাস্টমার স্বয়ংক্রিয়ভাবে ডিটেক্ট হবে', 'Detect fake customer orders automatically before shipping')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <strong className="text-white">{t('অটো কুরিয়ার ইন্টিগ্রেশন (Steadfast / Pathao / RedX)', 'Auto Courier API Integration (Steadfast / Pathao)')}</strong>
                    <p className="text-[11px] text-slate-400">{t('১-ক্লিকে কুরিয়ারে বুকিং ও পার্সেল ট্র্যাকিং', 'Send order details directly to courier API')} </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <strong className="text-white">{t('এডভান্সড অর্ডার, স্টক & সেলস ড্যাশবোর্ড', 'Advanced Order, Inventory & Sales Dashboard')}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <strong className="text-white">{t('মেটা পিক্সেল + গুগল এনালিটিক্স ফুল কনফিগারেশন', 'Meta Pixel & Google Analytics Setup')}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <strong className="text-white">{t('নিজের ইচ্ছা মতো সম্পূর্ণ কাস্টমাইজেশন সুবিধা', 'Unlimited Customization Freedom')}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Button */}
            <button
              onClick={() => handleOrderWhatsApp('ফুল ই-কমার্স / বিজনেসব্যাপী ওয়েবসাইট', '10,000', '200')}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 hover:from-emerald-400 hover:to-cyan-300 text-slate-950 font-bold text-sm shadow-xl glow-whatsapp transition-all flex items-center justify-center gap-2 group/btn"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>{t('ফুল ওয়েবসাইট অর্ডার করুন (৳১০,০০০)', 'Order Full Website (10,000 BDT)')}</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>

          </div>

        </div>

        {/* Feature Guarantee Bar */}
        <div className="mt-12 p-6 rounded-3xl glass-panel border border-slate-800 text-center max-w-4xl mx-auto flex flex-wrap items-center justify-around gap-4 text-xs font-semibold text-slate-300">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-cyan-400" />
            <span>{t('ফ্রি সাবডোমেইন রেডি', 'Free Subdomain Included')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4 text-cyan-400" />
            <span>{t('ফ্রি হাই-স্পিড হোস্টিং', 'Free Fast Hosting')}</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-emerald-400" />
            <span>{t('স্টিডফাস্ট ফ্রড কাস্টমার চেক', 'Steadfast Fraud Check')}</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>{t('২৪/৭ হেল্পলাইন (01602867954)', '24/7 Hotline 01602867954')}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
