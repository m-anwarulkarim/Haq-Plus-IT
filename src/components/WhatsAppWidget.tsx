import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, CheckCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');
  const [hasPrompted, setHasPrompted] = useState(false);
  const { t, lang } = useLanguage();

  const phoneNumber = '8801602867954';
  const formattedPhone = '01602867954';

  const quickMessages = [
    {
      bn: 'হ্যালো! আমি একটি ওয়েবসাইট/অ্যাপ বানাতে চাই। তথ্য দিন।',
      en: 'Hi! I want to build a website/app. Please give me details.',
    },
    {
      bn: 'Hhaq Plus IT এর সার্ভিস প্যাকেজ ও প্রাইসিং সম্পর্কে জানতে চাই।',
      en: 'I would like to know about Hhaq Plus IT service packages and pricing.',
    },
    {
      bn: 'আমার একটি কাস্টম আইটি প্রজেক্ট আছে, ডেমো বা মিটিং বুক করতে চাই।',
      en: 'I have a custom IT project, I would like to book a demo or meeting.',
    },
  ];

  // Auto show mini popup preview after 4 seconds to grab user attention
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasPrompted(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenWhatsApp = (messageText: string) => {
    const textToSend = messageText || (lang === 'bn' ? 'হ্যালো Hhaq Plus IT! আমি সার্ভিস সম্পর্কে কথা বলতে চাই।' : 'Hello Hhaq Plus IT! I want to discuss your services.');
    const encodedText = encodeURIComponent(textToSend);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (customMsg.trim()) {
      handleOpenWhatsApp(customMsg);
      setCustomMsg('');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Mini notification prompt (Appears briefly to attract attention) */}
      {!isOpen && hasPrompted && (
        <div className="mb-3 max-w-xs p-3.5 rounded-2xl glass-panel-glow border-emerald-500/40 text-slate-100 text-xs shadow-2xl animate-bounce flex items-center gap-3 relative group cursor-pointer"
             onClick={() => setIsOpen(true)}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setHasPrompted(false);
            }}
            className="absolute -top-1.5 -right-1.5 bg-slate-800 text-slate-400 hover:text-white rounded-full p-0.5 border border-slate-700"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="relative flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
              <MessageCircle className="w-5 h-5 fill-emerald-400/30" />
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-slate-900 animate-ping"></span>
          </div>
          <div>
            <p className="font-semibold text-emerald-400">
              {t('সরাসরি হোয়াটসঅ্যাপে কথা বলুন!', 'Chat directly on WhatsApp!')}
            </p>
            <p className="text-[11px] text-slate-300">
              {t('তাৎক্ষণিক উত্তর পাবেন: 01602867954', 'Instant Response: 01602867954')}
            </p>
          </div>
        </div>
      )}

      {/* Expanded Interactive Chat Modal */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 rounded-3xl glass-panel border border-emerald-500/30 shadow-2xl overflow-hidden transition-all duration-300 transform scale-100 origin-bottom-right">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 p-4 text-white relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src="/hhaq-logo.jpg"
                    alt="Hhaq Plus IT"
                    className="w-10 h-10 rounded-full border-2 border-white/40 object-cover shadow-md"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-slate-900"></span>
                </div>
                <div>
                  <h4 className="font-bold text-sm leading-tight">Hhaq Plus IT Support</h4>
                  <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                    {t('অনলাইন | ২ মিনিটে উত্তর দেওয়া হয়', 'Online | Replies within 2 mins')}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-emerald-100">
              <span>WhatsApp: <strong className="font-mono text-white">{formattedPhone}</strong></span>
              <span className="bg-white/20 px-2 py-0.5 rounded-full font-medium text-[10px]">Verified Business</span>
            </div>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-950/80 space-y-3 max-h-80 overflow-y-auto">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 text-xs text-slate-200 shadow-sm relative">
              <div className="flex items-center gap-2 mb-1.5 text-emerald-400 font-semibold text-[11px]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Hhaq Plus IT Assistant</span>
              </div>
              <p className="leading-relaxed">
                {t(
                  'আসসালামু আলাইকুম! Hhaq Plus IT-তে আপনাকে স্বাগতম। আপনার প্রজেক্ট বা যেকোনো প্রশ্নের জন্য সরাসরি হোয়াটসঅ্যাপে মেসেজ দিন।',
                  'Welcome to Hhaq Plus IT! Send us a message on WhatsApp for instant assistance with your projects or queries.'
                )}
              </p>
              <div className="mt-2 text-[10px] text-slate-500 text-right flex items-center justify-end gap-1">
                <span>Just now</span>
                <CheckCheck className="w-3 h-3 text-emerald-400" />
              </div>
            </div>

            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-1">
              {t('দ্রুত মেসেজ সিলেক্ট করুন:', 'Select Quick Message:')}
            </p>

            {/* Quick Prompts */}
            <div className="space-y-2">
              {quickMessages.map((msg, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOpenWhatsApp(t(msg.bn, msg.en))}
                  className="w-full text-left p-2.5 rounded-xl bg-slate-900/60 hover:bg-emerald-950/50 border border-slate-800 hover:border-emerald-500/50 text-xs text-slate-300 hover:text-emerald-300 transition-all flex items-center justify-between group"
                >
                  <span className="line-clamp-2">{t(msg.bn, msg.en)}</span>
                  <Send className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 flex-shrink-0 ml-2 group-hover:translate-x-0.5 transition-transform" />
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <form onSubmit={handleSendCustom} className="pt-2">
              <div className="relative">
                <input
                  type="text"
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  placeholder={t('মেসেজ লিখুন (WhatsApp-এ পাঠাতে)...', 'Type your message for WhatsApp...')}
                  className="w-full pl-3 pr-10 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>

          {/* Modal Footer */}
          <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800/80 text-[10px] text-center text-slate-500">
            Powered by <span className="text-slate-300 font-semibold">Hhaq Plus IT</span> • Direct Connect: {formattedPhone}
          </div>
        </div>
      )}

      {/* Main Floating Animated WhatsApp Action Button */}
      <div className="relative group">
        {/* Ripple Wave Outer Animation Rings */}
        <span className="absolute -inset-2 rounded-full bg-emerald-500/30 animate-ping opacity-75"></span>
        <span className="absolute -inset-1 rounded-full bg-emerald-500/20 animate-pulse"></span>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white flex items-center justify-center shadow-2xl glow-whatsapp transform hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-emerald-300/40 z-10 ${
            isOpen ? 'rotate-90' : 'animate-float'
          }`}
          aria-label="WhatsApp Contact"
        >
          {isOpen ? (
            <X className="w-7 h-7 stroke-[2.5]" />
          ) : (
            <div className="relative">
              <MessageCircle className="w-8 h-8 fill-white text-emerald-600" />
              {/* Unread badge dot */}
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 border-2 border-slate-900 rounded-full animate-pulse"></span>
            </div>
          )}
        </button>

        {/* Hover Label Tooltip */}
        {!isOpen && (
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-xl bg-slate-900 text-slate-100 text-xs font-semibold whitespace-nowrap shadow-xl border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>WhatsApp: {formattedPhone}</span>
          </div>
        )}
      </div>
    </div>
  );
};
