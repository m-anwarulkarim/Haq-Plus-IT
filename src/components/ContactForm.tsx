import React, { useState } from 'react';
import { Send, Phone, MapPin, MessageCircle, CheckCircle2, Sparkles, ArrowRight, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

import { trackMetaEvent } from '../lib/metaPixel';

export const ContactForm: React.FC = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'স্মার্ট ল্যান্ডিং পেজ (৳১,০০০)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const buildWhatsAppMessage = () => {
    return `হ্যালো Hhaq Plus IT! আমি ওয়েবসাইটের জন্য ইনকোয়ারি ফর্ম পূরণ করেছি:

👤 নাম: ${formData.name}
📱 ফোন/হোয়াটসঅ্যাপ: ${formData.phone}
📧 ইমেইল: ${formData.email || 'N/A'}
💻 প্রয়োজনীয় সার্ভিস: ${formData.service}
📝 প্রজেক্ট বার্তা: ${formData.message || 'I want to start a project.'}

দয়া করে আমার সাথে দ্রুত যোগাযোগ করুন।`;
  };

  const handleOpenWhatsApp = () => {
    const msg = buildWhatsAppMessage();
    window.open(`https://wa.me/8801602867954?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    trackMetaEvent({
      eventName: 'Lead',
      customData: { content_name: formData.service },
      userData: {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
      },
    });

    // Trigger celebratory confetti
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
    });

    setSubmitted(true);

    // Auto open WhatsApp in 1.5 seconds
    setTimeout(() => {
      handleOpenWhatsApp();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#070a12] relative overflow-hidden">
      {/* Glow gradient */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <Badge variant="outline" className="px-3.5 py-1.5 rounded-full bg-slate-900 border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t('যোগাযোগ ও ফ্রি কনসাল্টেশন', 'Get In Touch')}</span>
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                {t('আপনার প্রজেক্ট নিয়ে ', 'Let us Build Your Next ')}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  {t('আজই কথা বলুন', 'Digital Breakthrough')}
                </span>
              </h2>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                {t(
                  'ফর্মটি পূরণ করুন এবং সরাসরি হোয়াটসঅ্যাপে (01602867954) আপনার মেসেজটি পাঠিয়ে দিন। আমাদের ইঞ্জিনিয়ারিং টিম ফ্রি টেকনিক্যাল কনসাল্টেশন প্রদান করবে।',
                  'Fill out the consultation form below to send your project requirements directly to WhatsApp 01602867954 for immediate response.'
                )}
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4">
              
              {/* WhatsApp Item */}
              <a
                href="https://wa.me/8801602867954"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl glass-panel-glow border-emerald-500/40 hover:border-emerald-400 flex items-center gap-4 group transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 fill-emerald-400/30" />
                </div>
                <div>
                  <p className="text-[11px] uppercase font-bold tracking-wider text-emerald-400">
                    {t('অফিশিয়াল হোয়াটসঅ্যাপ হটলাইন (২৪/৭)', 'Official WhatsApp Hotline (24/7)')}
                  </p>
                  <p className="text-lg font-black text-white font-mono">01602867954</p>
                </div>
              </a>

              {/* Direct Call Item */}
              <a
                href="tel:01602867954"
                className="p-4 rounded-2xl glass-panel border border-slate-800 hover:border-cyan-500/50 flex items-center gap-4 group transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[11px] uppercase font-bold tracking-wider text-slate-400">
                    {t('সরাসরি ফোন হটলাইন', 'Direct Phone Hotline')}
                  </p>
                  <p className="text-lg font-black text-white font-mono">01602867954</p>
                </div>
              </a>

              {/* Location Item */}
              <div className="p-4 rounded-2xl glass-panel border border-slate-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[11px] uppercase font-bold tracking-wider text-slate-400">
                    {t('হেড অফিস অবস্থান', 'Headquarters Location')}
                  </p>
                  <p className="text-xs font-semibold text-slate-200">
                    {t('ঢাকা, বাংলাদেশ (সরাসরি অনলাইন অ্যান্ড রিমোট সাপোর্ট)', 'Dhaka, Bangladesh (Global Remote & Online Support)')}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Form Card Column */}
          <div className="lg:col-span-7">
            <Card className="rounded-3xl glass-panel p-6 sm:p-10 border border-slate-800 shadow-2xl relative bg-transparent">
              <CardContent className="p-0">
                {submitted ? (
                  <div className="text-center py-10 space-y-6 animate-fadeIn">
                    <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 mx-auto shadow-2xl animate-bounce">
                      <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                    </div>

                    <div className="space-y-2">
                      <Badge variant="outline" className="bg-emerald-500/20 text-emerald-300 border-emerald-500/40 text-xs font-bold px-3 py-1">
                        {t('ধন্যবাদ! আপনার রিকোয়েস্ট সফলভাবে জমা হয়েছে', 'Thank You! Request Submitted Successfully')}
                      </Badge>
                      <h3 className="text-2xl font-black text-white">
                        {t('হোয়াটসঅ্যাপে মেসেজ পাঠান', 'Send Message on WhatsApp')}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                        {t(
                          'আপনার দেওয়া তথ্যগুলো (নাম, ফোন, সার্ভিস ও বার্তা) হোয়াটসঅ্যাপ মেসেজ আকারে তৈরি হয়েছে। নিচে "হোয়াটসঅ্যাপে মেসেজ পাঠান" বাটনে ক্লিক করে সরাসরি আমাদের টেক সাপোর্ট টিমের সাথে কথা বলুন।',
                          'Your submission details have been generated. Click the button below to send your request directly to WhatsApp for instant response.'
                        )}
                      </p>
                    </div>

                    {/* Main WhatsApp Direct Action Button */}
                    <Button
                      onClick={handleOpenWhatsApp}
                      className="w-full py-3.5 sm:py-4 h-auto px-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-extrabold text-xs sm:text-sm shadow-xl glow-whatsapp transition-all flex items-center justify-center gap-2 group border-none"
                    >
                      <MessageCircle className="w-5 h-5 fill-slate-950 flex-shrink-0 text-slate-950" />
                      <span className="whitespace-nowrap">{t('হোয়াটসঅ্যাপে মেসেজ পাঠান', 'Send Message on WhatsApp')}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[3] flex-shrink-0" />
                    </Button>

                    <div className="pt-2">
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-xs text-slate-400 hover:text-white underline flex items-center justify-center gap-1.5 mx-auto"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>{t('পুনরায় নতুন ফর্ম পূরণ করুন', 'Fill Out Form Again')}</span>
                      </button>
                    </div>

                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-xl font-bold text-white mb-6">
                      {t('ফ্রি কনসাল্টেশন বুক করুন (Instant Request)', 'Book Free Consultation')}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                          {t('আপনার নাম *', 'Your Full Name *')}
                        </label>
                        <Input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={t('যেমন: তানভীর আহমেদ', 'e.g. Tanvir Ahmed')}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border-slate-800 text-sm text-slate-100 placeholder:text-slate-500 focus-visible:ring-cyan-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                          {t('ফোন / হোয়াটসঅ্যাপ নম্বর *', 'Phone / WhatsApp Number *')}
                        </label>
                        <Input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="017XXXXXXXX"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border-slate-800 text-sm text-slate-100 placeholder:text-slate-500 focus-visible:ring-cyan-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                          {t('ইমেইল (ঐচ্ছিক)', 'Email Address (Optional)')}
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border-slate-800 text-sm text-slate-100 placeholder:text-slate-500 focus-visible:ring-cyan-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                          {t('প্রয়োজনীয় সার্ভিস', 'Select Service Needed')}
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-100 focus:outline-none focus:border-cyan-500"
                        >
                          <option value="স্মার্ট ল্যান্ডিং পেজ (৳১,০০০)">স্মার্ট ল্যান্ডিং পেজ (৳১,০০০)</option>
                          <option value="ফুল কাস্টম ওয়েবসাইট (৳১০,০০০)">ফুল কাস্টম ওয়েবসাইট (৳১০,০০০)</option>
                          <option value="কাস্টম ওয়েব অ্যাপ (Web App)">কাস্টম ওয়েব অ্যাপ (Web App)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        {t('প্রজেক্টের সংক্ষিপ্ত বিবরণ (Message)', 'Project Description / Requirements')}
                      </label>
                      <Textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={t('আপনার প্রজেক্টের রিকোয়ারমেন্ট বা যেকোনো প্রশ্ন লিখুন...', 'Briefly describe your project details or goals...')}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border-slate-800 text-sm text-slate-100 placeholder:text-slate-500 focus-visible:ring-cyan-500 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full py-3.5 sm:py-4 h-auto px-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 group border-none"
                    >
                      <Send className="w-4 h-4 flex-shrink-0 text-slate-950" />
                      <span className="whitespace-nowrap">{t('সাবমিট করুন ও হোয়াটসঅ্যাপে কানেক্ট হোন', 'Submit & Connect on WhatsApp')}</span>
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

        </div>

      </div>
    </section>
  );
};
