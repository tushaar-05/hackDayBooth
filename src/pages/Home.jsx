import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrgGrid from '../components/OrgGrid';
import orgsData from '../data/orgs.json';
import { GitPullRequest, Users, Trophy, ArrowDown, Sparkles } from 'lucide-react';

export default function Home() {
  const { orgs = [] } = orgsData;
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-[#f2f2eb] text-[#10201d]">
      
      {/* Official Hacktoberfest Header with Search & Branding */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* "HOW IT WORKS" SECTION - Modeled Directly After Official Hacktoberfest Screenshot */}
      <section className="bg-[#36544e] text-[#f7f7f2] border-b-2 border-[#10201d] py-14 sm:py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Top Cyan Label */}
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#71bcaf] block mb-2">
            HOW IT WORKS
          </span>

          {/* Big Headline with Yellow Accent matching screenshot */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight leading-tight mb-10 text-white">
            Explore booths, show up, <span className="text-[#f1c40f]">collect stickers.</span>
          </h2>

          {/* Timeline Rule Header (Before / In October) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-[11px] font-mono font-bold uppercase tracking-wider text-[#98c5bc] border-b-2 border-[#28423d] pb-2">
            <div>BEFORE YOU ARRIVE</div>
            <div className="md:col-span-2">AT THE BOOTHS (11:00 AM – 4:00 PM)</div>
          </div>

          {/* 3 Step Items with Yellow Badges matching screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Step 01 */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded bg-[#f1c40f] text-[#10201d] border-2 border-[#10201d] flex items-center justify-center font-mono font-extrabold text-xs shrink-0 brutal-shadow-sm">
                  01
                </div>
                <h3 className="text-xl font-bold font-display text-white">
                  Pick an Organization
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#cfdeda] leading-relaxed">
                Browse our 7 featured open-source repositories below. Check their curated Good First Issues and read setup guides before heading in.
              </p>
            </div>

            {/* Step 02 */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded bg-[#f1c40f] text-[#10201d] border-2 border-[#10201d] flex items-center justify-center font-mono font-extrabold text-xs shrink-0 brutal-shadow-sm">
                  02
                </div>
                <h3 className="text-xl font-bold font-display text-white">
                  Meet Mentors In-Person
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#cfdeda] leading-relaxed">
                Visit the physical booths at NST x ADYPU campus. Get 1-on-1 code walkthroughs, architecture discussions, and live PR reviews.
              </p>
            </div>

            {/* Step 03 */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded bg-[#f1c40f] text-[#10201d] border-2 border-[#10201d] flex items-center justify-center font-mono font-extrabold text-xs shrink-0 brutal-shadow-sm">
                  03
                </div>
                <h3 className="text-xl font-bold font-display text-white">
                  Get Swag &amp; Track Points
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#cfdeda] leading-relaxed">
                Every verified contribution qualifies you for official Hacktoberfest badges, MLH challenge swag packs, and exclusive stickers.
              </p>
            </div>

          </div>

          {/* Bottom Action CTA matching screenshot */}
          <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href="#directory"
              className="brutal-btn inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded text-xs uppercase tracking-wider self-start cursor-pointer"
            >
              <span>Explore 7 Booths</span>
              <ArrowDown className="w-4 h-4" />
            </a>
            <span className="text-xs text-[#98c5bc] font-mono">
              Booths open Saturday, 24 October 2026 • 11:00 AM – 4:00 PM
            </span>
          </div>

        </div>
      </section>

      {/* Main Directory Container */}
      <main className="max-w-6xl w-full mx-auto px-4 sm:px-6">
        <OrgGrid
          orgs={orgs}
          externalQuery={searchQuery}
          onQueryChange={setSearchQuery}
        />
      </main>

      {/* Official Hacktoberfest Style Footer */}
      <Footer />
    </div>
  );
}
