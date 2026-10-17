import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrgGrid from '../components/OrgGrid';
import orgsData from '../data/orgs.json';


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
