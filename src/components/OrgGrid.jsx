import React, { useState, useMemo } from 'react';
import OrgCard from './OrgCard';
import { Search, Layers, X } from 'lucide-react';

export default function OrgGrid({ orgs = [], externalQuery = '', onQueryChange }) {
  const [internalQuery, setInternalQuery] = useState('');

  const searchQuery = onQueryChange ? externalQuery : internalQuery;
  const setSearchQuery = onQueryChange || setInternalQuery;

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
    <section id="directory" className="py-12 sm:py-16">
      {/* Section Header & Search Input */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b-2 border-[#10201d]">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3d5f58] block mb-1">
            PARTICIPATING ORGANIZATIONS
          </span>
          <div className="flex items-center gap-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10201d] tracking-tight font-display">
              Open Source Booths
            </h2>
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#f2a900] text-[#10201d] border-2 border-[#10201d] brutal-shadow-sm">
              {validOrgs.length} BOOTHS
            </span>
          </div>
        </div>

        {/* Quick Filter */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter by name or tech..."
            aria-label="Filter organizations"
            className="w-full pl-9 pr-8 py-2 text-xs bg-white border-2 border-[#10201d] rounded text-[#10201d] placeholder:text-slate-400 focus:outline-none brutal-shadow-sm font-sans"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-[#10201d] p-0.5"
              aria-label="Clear filter"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Grid of Organization Cards */}
      {filteredOrgs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOrgs.map((org) => (
            <OrgCard key={org.id} org={org} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg border-2 border-[#10201d] brutal-shadow p-8 text-center max-w-md mx-auto my-6">
          <p className="text-[#10201d] font-bold text-lg mb-1 font-display">No booths match &ldquo;{searchQuery}&rdquo;</p>
          <p className="text-xs text-slate-600 mb-5">
            Try searching for another technology (e.g. Kubernetes, React, Python, EMR).
          </p>
          <button
            onClick={() => setSearchQuery('')}
            className="brutal-btn px-4 py-2 rounded text-xs uppercase"
          >
            Clear Search Filter
          </button>
        </div>
      )}
    </section>
  );
}
