import React from 'react';
import { Home, Package, Calculator, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const MobileBottomNav: React.FC = () => {
  const { t } = useLanguage();

  const navItems = [
    { href: '#', icon: Home, labelBn: 'হোম', labelEn: 'Home' },
    { href: '#pricing', icon: Package, labelBn: 'প্রাইসিং', labelEn: 'Pricing' },
    { href: '#calculator', icon: Calculator, labelBn: 'হিসাব', labelEn: 'Estimate' },
    { href: '#contact', icon: Phone, labelBn: 'যোগাযোগ', labelEn: 'Contact' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/80 shadow-[0_-8px_30px_rgba(0,0,0,0.3)] px-2 pb-safe pt-2">
      <div className="flex justify-around items-center h-14">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center w-full h-full space-y-1 group hover:bg-slate-900/50 rounded-xl transition-all"
            >
              <Icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              <span className="text-[10px] font-semibold text-slate-400 group-hover:text-cyan-400 transition-colors">
                {t(item.labelBn, item.labelEn)}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
};
