import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Calendar, Search, ArrowRight } from 'lucide-react';

export default function Header({ compact = false, onSearchChange, searchQuery = '' }) {
  if (compact) {
    return (
      <header className="sticky top-0 z-40 bg-[#36544e] border-b-2 border-[#10201d]">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between relative">
          
          {/* Left: MLH Logo */}
          <div className="flex items-center shrink-0">
            <Link
              to="/"
              className="flex items-center group focus:outline-none focus:ring-2 focus:ring-[#e97b77] rounded-md"
              aria-label="Back to Hack Day Booth Directory"
            >
              <img
                src="/images/mlh.png"
                alt="Major League Hacking"
                className="h-5 sm:h-7 object-contain"
              />
            </Link>
          </div>

          {/* Center: NST x ADYPU Logo (Centered on all screen sizes) */}
          <div className="absolute left-1/2 -translate-x-1/2 bg-[#f7f7f2] px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-md border-2 border-[#10201d] brutal-shadow-sm flex items-center gap-2 sm:gap-2.5 shrink-0 z-10">
            <img
              src="/images/nstLogo.png"
              alt="Newton School of Technology"
              className="h-4 sm:h-5 object-contain"
            />
            <span className="w-px h-3.5 sm:h-4 bg-[#10201d]"></span>
            <img
              src="/images/adypuLogo.png"
              alt="Ajeenkya DY Patil University"
              className="h-3.5 sm:h-4 object-contain"
            />
          </div>

          {/* Right: Club Logo */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <img
              src="/images/devClub.png"
              alt="NST-SDC Developers Club"
              className="h-6 sm:h-7 object-contain"
            />
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-[#f7f7f2]">
              NST-SDC
            </span>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-[#36544e] text-[#f7f7f2] border-b-2 border-[#10201d] relative">
      
      {/* Top Navbar */}
      <div className="border-b-2 border-[#10201d] bg-[#2e4742]">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between relative">
          
          {/* Left: MLH Logo */}
          <div className="flex items-center shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="/images/mlh.png"
                alt="Major League Hacking"
                className="h-5 sm:h-7 object-contain"
              />
            </Link>
          </div>

          {/* Center: NST x ADYPU Logos (Centered on all screen sizes) */}
          <div className="absolute left-1/2 -translate-x-1/2 bg-[#f7f7f2] px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-md border-2 border-[#10201d] brutal-shadow-sm flex items-center gap-2 sm:gap-3 shrink-0 z-10">
            <img
              src="/images/nstLogo.png"
              alt="Newton School of Technology"
              className="h-4 sm:h-6 object-contain"
            />
            <span className="w-px h-3.5 sm:h-5 bg-[#10201d]"></span>
            <img
              src="/images/adypuLogo.png"
              alt="Ajeenkya DY Patil University"
              className="h-3.5 sm:h-5 object-contain"
            />
          </div>

          {/* Right: Developers Club Logo */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <img
              src="/images/devClub.png"
              alt="NST-SDC Developers Club"
              className="h-6 sm:h-8 object-contain"
            />
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-[#f7f7f2]">
              NST-SDC
            </span>
          </div>

        </div>
      </div>

      {/* Main Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-12 pb-12 sm:pb-14 text-center">
        
        {/* Top Tagline */}
        <div className="inline-block font-mono text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#88baaf] mb-3 sm:mb-4">
          OCTOBER 2026 • IN-PERSON OPEN SOURCE BOOTHS • PUNE
        </div>

        {/* Big Bold Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#f7f7f2] font-display tracking-tight leading-none mb-5 sm:mb-6">
          7 Open Source Booths.{' '}
          <span className="text-[#f18379] block sm:inline">Find your project.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-xs sm:text-base text-[#cfdeda] leading-relaxed mb-7 sm:mb-8 px-2">
          Welcome to the official booth directory for Hack Day 2026, organized by the <strong className="text-white">Developers Club</strong> at <strong className="text-white">NST x ADYPU</strong> in partnership with <strong className="text-white">Major League Hacking (MLH)</strong>. Discover participating projects, connect with mentors, and start contributing.
        </p>

        {/* Search Bar directly in Hero */}
        <div className="max-w-2xl mx-auto mb-8 sm:mb-10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const el = document.getElementById('directory');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col sm:flex-row items-stretch brutal-shadow rounded-lg overflow-hidden"
          >
            <div className="relative flex-1 bg-white flex items-center border-2 sm:border-r-0 border-[#10201d]">
              <Search className="w-4 sm:w-5 h-4 sm:h-5 text-slate-400 ml-3.5 sm:ml-4 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
                placeholder="Search organizations (e.g. Kubernetes, Oppia, Docs)..."
                aria-label="Search organizations"
                className="w-full px-3 py-3 sm:py-3.5 text-xs sm:text-sm text-[#10201d] placeholder:text-slate-400 focus:outline-none font-sans"
              />
            </div>
            <button
              type="submit"
              className="bg-[#e97b77] hover:bg-[#f08985] text-[#10201d] font-mono font-bold text-xs sm:text-sm px-5 sm:px-6 py-3 sm:py-3.5 border-2 border-[#10201d] transition-colors shrink-0 flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
            >
              <span>Explore Booths</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Event Schedule & Location Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 max-w-4xl mx-auto text-left">
          
          {/* Badge 1: Venue */}
          <div className="bg-[#2e4742] border-2 border-[#10201d] brutal-shadow-sm p-3.5 sm:p-4 rounded-lg flex items-start gap-3">
            <div className="w-8 h-8 rounded bg-[#3d5f58] border border-[#10201d] text-[#f18379] flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#88baaf] block">
                Venue Location
              </span>
              <p className="text-xs font-semibold text-white leading-snug mt-0.5">
                Newton School of Technology, ADYPU Campus, Lohegaon, Pune
              </p>
            </div>
          </div>

          {/* Badge 2: Booth Timings */}
          <div className="bg-[#f2a900] text-[#10201d] border-2 border-[#10201d] brutal-shadow-sm p-3.5 sm:p-4 rounded-lg flex items-start gap-3">
            <div className="w-8 h-8 rounded bg-[#10201d] text-[#f2a900] flex items-center justify-center shrink-0 font-mono font-bold text-xs">
              <Clock className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#10201d] block">
                Booth Timings
              </span>
              <p className="text-sm font-extrabold text-[#10201d] leading-tight mt-0.5">
                11:00 AM – 4:00 PM
              </p>
              <p className="text-[11px] font-medium text-[#10201d]">
                Saturday, 24 October 2026
              </p>
            </div>
          </div>

          {/* Badge 3: Overnight Hackathon */}
          <div className="bg-[#2e4742] border-2 border-[#10201d] brutal-shadow-sm p-3.5 sm:p-4 rounded-lg flex items-start gap-3">
            <div className="w-8 h-8 rounded bg-[#3d5f58] border border-[#10201d] text-[#55EFC4] flex items-center justify-center shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#88baaf] block">
                12-Hour Hackathon
              </span>
              <p className="text-xs font-semibold text-white leading-snug mt-0.5">
                4:00 PM 24 Oct – 4:00 AM 25 Oct (Overnight)
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Signature Multi-Color Mosaic Bar at Bottom of Header */}
      <div className="mosaic-bar border-t-2 border-[#10201d]">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
