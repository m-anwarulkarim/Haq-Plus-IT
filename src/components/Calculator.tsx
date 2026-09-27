import React, { useState } from 'react';
import { Calculator as CalcIcon, CheckSquare, Square, Sparkles, Send, ShieldCheck, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';


export const Calculator: React.FC = () => {
  const { t } = useLanguage();

  const [projectType, setProjectType] = useState<'landing' | 'full_website' | 'custom_erp'>('landing');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['dashboard', 'pixel', 'fraud_check']);

  const projectTypes = [
    {
      id: 'landing',
      nameBn: 'স্মার্ট ল্যান্ডিং পেজ (Landing Page)',
      nameEn: 'Smart Landing Page',
      basePrice: 1000,
      monthly: 200,
      badge: '৳১,০০০ + ৳২০০/মাস',
    },
    {
      id: 'full_website',
      nameBn: 'ফুল ই-কমার্স / বিজনেস ওয়েবসাইট',
      nameEn: 'Full E-Commerce Website',
      basePrice: 10000,
      monthly: 200,
      badge: '৳১০,০০০ + ৳২০০/মাস',
    },
    {
      id: 'custom_erp',
      nameBn: 'কাস্টম এন্টারপ্রাইজ সফটওয়্যার / ERP',
      nameEn: 'Custom Enterprise Software / ERP',
      basePrice: 25000,
      monthly: 500,
      badge: '৳২৫,০০০+',
    },
  ];

  const featuresList = [
    { id: 'subdomain_hosting', nameBn: 'ফ্রি সাবডোমেইন ও হোস্টিং (Included Free)', nameEn: 'Free Subdomain & Hosting Included', price: 0 },
    { id: 'dashboard', nameBn: 'ড্যাশবোর্ডে অর্ডার ম্যানেজমেন্ট (Order Dashboard)', nameEn: 'Order Management Dashboard', price: 0 },
    { id: 'pixel', nameBn: 'মেটা (Facebook) পিক্সেল ট্র্যাকিং সেটআপ', nameEn: 'Meta Pixel & Ad Tracking Setup', price: 0 },
    { id: 'fraud_check', nameBn: 'স্টিডফাস্ট কাস্টমার ফ্রড চেক (Steadfast Fraud Check)', nameEn: 'Steadfast Fraud Check API', price: 0 },
    { id: 'courier', nameBn: 'অটো কুরিয়ার ইন্টিগ্রেশন (Steadfast/Pathao)', nameEn: 'Auto Courier Integration', price: 1000 },
    { id: 'customization', nameBn: 'নিজের ইচ্ছা অনুযায়ী কাস্টমাইজেশন', nameEn: 'Full Customization Freedom', price: 0 },
  ];

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((item) => item !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const selectedTypeObj = projectTypes.find((p) => p.id === projectType) || projectTypes[0];

  const calculateSetupTotal = () => {
    const base = selectedTypeObj.basePrice;
    const addOnCost = selectedFeatures.reduce((acc, featId) => {
      const feat = featuresList.find((f) => f.id === featId);
      return acc + (feat ? feat.price : 0);
    }, 0);
    return base + addOnCost;
  };

  const handleSendToWhatsApp = () => {
    const selectedPType = selectedTypeObj.nameBn;
    const selectedFeatNames = selectedFeatures
      .map((fid) => featuresList.find((f) => f.id === fid)?.nameBn)
      .filter(Boolean)
      .join(', ');
    const setupTotal = calculateSetupTotal();
    const monthlyFee = selectedTypeObj.monthly;

    const textMessage = `হ্যালো Hhaq Plus IT! আমি ওয়েবসাইটের বাজেট এস্টিমেট পেয়েছি:

📌 প্যাকেজ টাইপ: ${selectedPType}
💰 সেটআপ ফি: ৳${setupTotal.toLocaleString('en-BD')} BDT
🔄 মান্থলি চার্ট: ৳${monthlyFee} BDT / মাস
🎁 যুক্ত সুবিধা: ${selectedFeatNames} (ফ্রি সাবডোমেইন + হোস্টিং সহ!)

দয়া করে কাজ শুরু করতে যোগোযোগ করুন। ফোন: 01602867954`;

    window.open(`https://wa.me/8801602867954?text=${encodeURIComponent(textMessage)}`, '_blank');
  };

  return (
    <section id="calculator" className="py-24 bg-[#070a12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <CalcIcon className="w-3.5 h-3.5" />
            <span>{t('ইনস্ট্যান্ট বাজেট এস্টিমেটর', 'Instant Cost Estimator')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t('আপনার ওয়েবসাইটের খরচ ', 'Calculate Estimated Cost For Your ')}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              {t('গণনা করুন', 'Website Package')}
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t(
              'ল্যান্ডিং পেজ মাত্র ৳১,০০০ (মাসিক ৳২০০) এবং ফুল ওয়েবসাইট ৳১০,০০০ (মাসিক ৳২০০)। ফ্রি সাবডোমেইন ও হোস্টিং সহ!',
              'Landing Page at 1,000 BDT + 200/mo and Full Website at 10,000 BDT + 200/mo with Free Subdomain & Hosting.'
            )}
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form */}
          <div className="lg:col-span-8 rounded-3xl glass-panel p-6 sm:p-8 border border-slate-800 space-y-8">
            
            {/* Step 1: Package Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                ১. আপনার প্রয়োজনীয় প্যাকেজ বেছে নিন (Step 1: Choose Package)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setProjectType(type.id as any)}
                    className={`p-4 rounded-2xl text-left border transition-all ${
                      projectType === type.id
                        ? 'bg-cyan-950/50 border-cyan-500 text-white shadow-lg shadow-cyan-500/10'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-bold text-sm">{t(type.nameBn, type.nameEn)}</div>
                    <div className="text-xs text-emerald-400 font-mono mt-1 font-bold">
                      {type.badge}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Features Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                ২. প্যাকেজের সাথে অন্তর্ভুক্ত সুবিধাসমূহ (Step 2: Included Features)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {featuresList.map((feat) => {
                  const isSelected = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3.5 rounded-xl text-left border flex items-center justify-between transition-all ${
                        isSelected
                          ? 'bg-emerald-950/40 border-emerald-500/80 text-emerald-200'
                          : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {isSelected ? (
                          <CheckSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-600 flex-shrink-0" />
                        )}
                        <span className="text-xs font-medium">{t(feat.nameBn, feat.nameEn)}</span>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-400 ml-2">
                        {feat.price === 0 ? 'FREE' : `+৳${feat.price}`}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Highlights notice */}
            <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 text-xs text-cyan-200 flex items-center gap-3">
              <ShieldAlert className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span>
                {t(
                  'সকল প্যাকেজের সাথেই পাবেন ফ্রি সাবডোমেইন, ফ্রি হোস্টিং এবং কাস্টমার অর্ডার ম্যানেজমেন্ট ড্যাশবোর্ড!',
                  'All packages include Free Subdomain, Free Hosting, and Order Management Dashboard!'
                )}
              </span>
            </div>

          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-4 rounded-3xl glass-panel-glow p-6 sm:p-8 border border-emerald-500/40 space-y-6 sticky top-28">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                {t('এস্টিমেটেড প্রাইস সামারি', 'Price Summary')}
              </span>
              <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
            </div>

            <div>
              <p className="text-xs text-slate-400">{t('ওয়ান-টাইম সেটআপ ফি:', 'One-Time Setup Fee:')}</p>
              <div className="text-3xl sm:text-4xl font-black text-white font-mono mt-1 text-emerald-300">
                ৳{calculateSetupTotal().toLocaleString('en-BD')}{' '}
                <span className="text-xs font-normal text-slate-400">BDT</span>
              </div>
              <div className="mt-2 text-xs text-cyan-400 font-semibold flex items-center justify-between border-t border-slate-800 pt-2">
                <span>🔄 {t('মাসিক বিলিং:', 'Monthly Fee:')}</span>
                <span className="font-mono text-white text-sm">৳{selectedTypeObj.monthly} BDT / মাস</span>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{t('ফ্রি সাবডোমেইন + ফ্রি হোস্টিং অন্তর্ভুক্ত', 'Free Subdomain + Hosting Included')}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{t('স্টিডফাস্ট কাস্টমার ফ্রড চেক সিস্টেম', 'Steadfast Fraud Check Included')}</span>
              </div>
            </div>

            {/* Direct WhatsApp Order Action Button */}
            <button
              onClick={handleSendToWhatsApp}
              className="w-full py-3.5 sm:py-4 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-bold text-xs sm:text-sm shadow-xl glow-whatsapp transition-all flex items-center justify-center gap-2 group"
            >
              <Send className="w-4 h-4 stroke-[2.5] flex-shrink-0" />
              <span className="whitespace-nowrap">{t('হোয়াটসঅ্যাপে অর্ডার পাঠান', 'Submit Order to WhatsApp')}</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
