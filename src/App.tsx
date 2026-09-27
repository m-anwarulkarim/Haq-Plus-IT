import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PricingPackages } from './components/PricingPackages';
import { Calculator } from './components/Calculator';
import { WhyUs } from './components/WhyUs';
import { TechStack } from './components/TechStack';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { MobileBottomNav } from './components/MobileBottomNav';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-['Hind_Siliguri','Outfit',sans-serif]">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections (with padding bottom for mobile nav) */}
        <main className="flex-grow pb-16 md:pb-0">
          <Hero />
          <PricingPackages />
          <WhyUs />
          <Calculator />
          <TechStack />
          <FAQ />
          <ContactForm />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Animated WhatsApp Button Widget */}
        <WhatsAppWidget />
        
        {/* Mobile Bottom Navigation (Telegram Style) */}
        <MobileBottomNav />
      </div>
    </LanguageProvider>
  );
};

export default App;
