import React, { useState, useMemo } from 'react';
import OrgCard from './OrgCard';
import { Search, Layers, X } from 'lucide-react';

export default function OrgGrid({ orgs = [] }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter organizations with valid required information
  const validOrgs = useMemo(() => {
    return orgs.filter((org) => org && org.id && org.name && org.tagline);
  }, [orgs]);

  // Filter by user search query (name, tagline, or contribution topics)
  const filteredOrgs = useMemo(() => {
    if (!searchQuery.trim()) return validOrgs;
    const query = searchQuery.toLowerCase().trim();
    return validOrgs.filter((org) => {
      const matchName = org.name?.toLowerCase().includes(query);
      const matchTagline = org.tagline?.toLowerCase().includes(query);
      const matchContrib = org.how_to_contribute?.some((tip) =>
        tip.toLowerCase().includes(query)
      );
      return matchName || matchTagline || matchContrib;
    });
  }, [validOrgs, searchQuery]);

  return (
    <section id="directory" className="py-8 sm:py-10">
      {/* Section Header & Search Input */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#244738] flex items-center justify-center text-[#F5B041] border border-[#34604C]">
              <Layers className="w-4 h-4" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display">
              Participating Booths
            </h2>
            <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#203D30] text-[#F5B041] border border-[#325A47]">
              {validOrgs.length} Organizations
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#8BAEA0] mt-1.5">
            Select any organization to review beginner issues, tech stacks, and in-person mentor details.
          </p>
        </div>

        {/* Quick Search Bar */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-[#7B9E8E] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search organizations or topics..."
            aria-label="Search organizations"
            className="w-full pl-9 pr-8 py-2.5 text-sm bg-[#1A3328] border border-[#2B4E3E] rounded-xl text-[#F1F3EC] placeholder:text-[#6E8F80] focus:outline-none focus:ring-2 focus:ring-[#F5B041] focus:border-transparent transition-all shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#7B9E8E] hover:text-white p-0.5 rounded-full"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Grid of Organization Cards */}
      {filteredOrgs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredOrgs.map((org) => (
            <OrgCard key={org.id} org={org} />
          ))}
        </div>
      ) : (
        <div className="bg-[#1A3328] rounded-2xl border border-[#2B4E3E] p-8 text-center max-w-md mx-auto my-6 shadow-md">
          <p className="text-white font-semibold mb-1">No organizations found</p>
          <p className="text-xs text-[#8BAEA0] mb-4">
            No booth matches &ldquo;{searchQuery}&rdquo;. Try clearing your query.
          </p>
          <button
            onClick={() => setSearchQuery('')}
            className="text-xs font-semibold text-[#F5B041] hover:text-white bg-[#244536] hover:bg-[#2C5543] px-4 py-2 rounded-lg transition-colors border border-[#38624E]"
          >
            Reset Search Filter
          </button>
        </div>
      )}
    </section>
  );
}
