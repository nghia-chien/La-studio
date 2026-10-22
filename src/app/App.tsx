import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { MusePinnedSection } from '../components/MusePinnedSection';
import { ConceptsSection } from '../components/ConceptsSection';
import { ProcessSection } from '../components/ProcessSection';
import { PackagesSection } from '../components/PackagesSection';
import { GalleryWall } from '../components/GalleryWall';
import { BookingSection } from '../components/BookingSection';
import { Footer } from '../components/Footer';
import { QuickZaloButton } from '../components/QuickZaloButton';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#221F1F] font-sans antialiased overflow-x-clip selection:bg-[#E8C5C8] selection:text-[#221F1F]">
      {/* 1. Header Navigation */}
      <Header />

      <main>
        {/* 2. Hero Section */}
        <Hero />


        {/* 4. Signature Concepts Filter & Detail Showcase */}
        <ConceptsSection />

        {/* 3. Signature Pinned "MUSE" Showcase with Floating Asymmetric Cards */}
        <MusePinnedSection />

        

        {/* 5. 4-Step Experience Workflow */}
        <ProcessSection />
<GalleryWall />
        {/* 7. Transparent Service Packages */}
        <PackagesSection />

        {/* 8. Client Moments Gallery Wall */}
        

        {/* 9. Booking Form & Studio Location */}
        <BookingSection />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* 11. Quick Zalo Consultation Button */}
      <QuickZaloButton />
    </div>
  );
};

export default App;
