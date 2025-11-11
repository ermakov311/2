'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import SecondSection from '@/components/sections/SecondSection';
import SpecializedCenter from '@/components/sections/SpecializedCenter';
import ServiceLevel from '@/components/sections/ServiceLevel';
import Toyota from '@/components/sections/Toyota';
import CostSection from '@/components/sections/CostSection';
import AcquaintanceSection from '@/components/sections/AcquaintanceSection';
import FiveFactsSection from '@/components/sections/FiveFactsSection';
import FeedbackSection from '@/components/sections/FeedbackSection';
import OrtusSection from '@/components/sections/OrtusSection';
import BranchesSection from '@/components/sections/BranchesSection';
import FromSection from '@/components/sections/FromSection';
import Footer from '@/components/layout/Footer';
import StartButton from '@/components/ui/StartButton';
import CatalogSection from '@/components/sections/CatalogSection';
import PriorityLineSection from '@/components/sections/PriorityLineSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1c1c20]">
      <Header />
      
      <main>
        <Hero />
        <div className="relative">
          <SecondSection />
          <StartButton />
        </div>
        
        <SpecializedCenter />
        <PriorityLineSection />
        <ServiceLevel />
        <Toyota />
        <CostSection />
        <AcquaintanceSection />
        <CatalogSection />
        <FiveFactsSection />
        <FeedbackSection />
        <OrtusSection />
        <BranchesSection />
        <FromSection />
        <Footer />
      </main>
    </div>
  );
}