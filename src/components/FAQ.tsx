import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      qBn: 'প্রজেক্ট শুরু করতে কি সরাসরি হোয়াটসঅ্যাপে কথা বলা যাবে?',
      qEn: 'Can I discuss my project requirements directly via WhatsApp?',
      aBn: 'হ্যাঁ! আমাদের অফিসিয়াল হোয়াটসঅ্যাপ হটলাইন নম্বরে (01602867954) যেকোনো সময় মেসেজ বা কল দিয়ে আপনার রিকোয়ারমেন্টস শেয়ার করতে পারেন। আমরা তাৎক্ষণিক রেসপন্স করে থাকি।',
      aEn: 'Yes! You can contact us directly at 01602867954 via WhatsApp or call anytime. Our engineering team provides instant response and free technical consultation.',
    },
    {
      qBn: 'ভবিষ্যতে কি এই সাইটটিকে আরও বড় বড় ফিচার যুক্ত করে বিশাল প্ল্যাটফর্মে রূপ দেওয়া যাবে?',
      qEn: 'Can this website be later expanded into a massive full-scale enterprise platform?',
      aBn: 'অবশ্যই! Hhaq Plus IT সম্পূর্ণ মডুলার Architecture এবং TanStack Start / React ব্যাকবোন ব্যবহার করে প্রজেক্ট তৈরি করে। পরবর্তীতে নতুন পেজ, মোবাইল অ্যাপ বা জটিল ERP ফিচার খুব সহজেই যুক্ত করা যাবে।',
      aEn: 'Absolutely! We engineer our base systems using TanStack Start & modular clean architecture so you can scale and add complex features, mobile apps, or enterprise tools anytime.',
    },
    {
      qBn: 'একটি পূর্ণাঙ্গ ওয়েবসাইট বানাতে কত সময় লাগে?',
      qEn: 'How long does it take to deliver a completed project?',
      aBn: 'সাধারণ ল্যান্ডিং পেজ 1-3 কর্মদিবস এবং জটিল ওয়েব অ্যাপ বা ই-কমার্স প্রজেক্ট 2-4 সপ্তাহের মধ্যে ডেলিভারি করা হয়। জরুরি প্রয়োজনে ফাস্ট-ট্র্যাক অপশন রয়েছে।',
      aEn: 'Standard landing pages take 1-3 business days, while full web apps or e-commerce platforms take 2-4 weeks. Urgent fast-track delivery is also available.',
    },
    {
      qBn: 'প্রজেক্ট পেমেন্ট টার্মস এবং সাপোর্ট সিস্টেম কেমন?',
      qEn: 'What are the payment terms and post-delivery support?',
      aBn: 'আমরা সাধারণত ৫০% অ্যাডভান্স দিয়ে কাজ শুরু করি এবং প্রজেক্ট ডেলিভারির পর বাকি ৫০% গ্রহণ করি। ডেলিভারির পর ৩ মাস বিনামূল্যে মেইনটেন্যান্স ও টেকনিক্যাল সাপোর্ট দেওয়া হয়।',
      aEn: 'We start work with a 50% initial deposit and the remaining 50% upon final testing & launch. Every project includes 3 months of free maintenance support.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-[#090d16] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t('সাধারণ জিজ্ঞাসাসমূহ', 'Frequently Asked Questions')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t('আপনার মনের কিছু ', 'Answers To Your ')}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              {t('সাধারণ প্রশ্ন', 'Questions')}
            </span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl glass-panel border border-slate-800 overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-5 sm:p-6 text-left font-bold text-sm sm:text-base text-white flex items-center justify-between gap-4 hover:text-cyan-300 transition-colors"
              >
                <span>{t(faq.qBn, faq.qEn)}</span>
                <ChevronDown
                  className={`w-5 h-5 text-cyan-400 flex-shrink-0 transition-transform duration-300 ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIdx === idx && (
                <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80 pt-4 leading-relaxed animate-fadeIn">
                  {t(faq.aBn, faq.aEn)}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-6 rounded-3xl glass-panel border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-white text-sm">{t('আরও কোনো প্রশ্ন আছে?', 'Have more specific questions?')}</h4>
            <p className="text-xs text-slate-400">{t('সরাসরি হোয়াটসঅ্যাপের মাধ্যমে আমাদের সাথেই কথা বলুন (01602867954)', 'Chat directly with our tech team on WhatsApp (01602867954)')}</p>
          </div>
          <a
            href="https://wa.me/8801602867954"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-lg glow-whatsapp flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
            <span>01602867954</span>
          </a>
        </div>

      </div>
    </section>
  );
};
