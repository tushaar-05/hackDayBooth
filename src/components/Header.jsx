import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Calendar, Search, ArrowRight, ExternalLink } from 'lucide-react';

export default function Header({ compact = false, onSearchChange, searchQuery = '' }) {
  if (compact) {
    return (
      <header className="sticky top-0 z-40 bg-[#36544e] border-b-2 border-[#10201d]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#e97b77] rounded-md"
            aria-label="Back to Hack Day Booth Directory"
          >
            {/* White pill with NST & ADYPU Logos and black border */}
            <div className="bg-[#f7f7f2] px-3 py-1.5 rounded-md border-2 border-[#10201d] brutal-shadow-sm flex items-center gap-2.5">
              <img
                src="/images/nstLogo.png"
                alt="Newton School of Technology"
                className="h-5 sm:h-6 object-contain"
              />
              <span className="w-px h-4 bg-[#10201d]"></span>
              <img
                src="/images/adypuLogo.png"
                alt="Ajeenkya DY Patil University"
                className="h-4 sm:h-5 object-contain"
              />
            </div>

            <div className="hidden sm:block">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#f7f7f2] block">
                NSTSDC • HACKTOBERFEST 2026
              </span>
              <span className="text-sm font-display font-extrabold text-white tracking-tight">
                Booth Directory
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <img
              src="/images/mlh-logo.png"
              alt="Major League Hacking"
              className="h-6 object-contain hidden md:block"
            />
            <Link
              to="/"
              className="brutal-btn px-4 py-2 rounded-md text-xs uppercase tracking-wider"
            >
              ← All Booths
            </Link>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-[#36544e] text-[#f7f7f2] border-b-2 border-[#10201d] relative">
      
      {/* Top Navbar */}
      <div className="border-b-2 border-[#10201d] bg-[#2e4742]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          
          {/* Left: Hacktoberfest 26 Text Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-white uppercase flex items-center">
              HACKTOBERFEST
              <span className="ml-1 text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-[#e97b77] text-[#10201d] border border-[#10201d]">
                26
              </span>
            </span>
          </Link>

          {/* Center: Institutional Logos (NST & ADYPU) */}
          <div className="bg-[#f7f7f2] px-3 sm:px-4 py-1.5 rounded-md border-2 border-[#10201d] brutal-shadow-sm flex items-center gap-3">
            <img
              src="/images/nstLogo.png"
              alt="Newton School of Technology"
              className="h-5 sm:h-6 object-contain"
            />
            <span className="w-px h-5 bg-[#10201d]"></span>
            <img
              src="/images/adypuLogo.png"
              alt="Ajeenkya DY Patil University"
              className="h-4 sm:h-5 object-contain"
            />
          </div>

          {/* Right Action Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="/images/nstsdc-logo.png"
              alt="NST SDC"
              className="h-7 object-contain hidden sm:block"
            />
            <a
              href="#directory"
              className="brutal-btn px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs uppercase tracking-wider hidden xs:inline-block"
            >
              View Booths
            </a>
          </div>

        </div>
      </div>

      {/* Main Hero Section: Styled after the official Hacktoberfest website */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-14 text-center">
        
        {/* Top Tagline */}
        <div className="inline-block font-mono text-xs font-bold tracking-widest uppercase text-[#88baaf] mb-4">
          OCTOBER 2026 • IN-PERSON OPEN SOURCE BOOTHS • PUNE
        </div>

        {/* Big Bold Headline with Coral Accent (Matches "500+ Fests. One is near you.") */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#f7f7f2] font-display tracking-tight leading-none mb-6">
          7 Open Source Booths.{' '}
          <span className="text-[#f18379] block sm:inline">Find your project.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#cfdeda] leading-relaxed mb-8">
          Welcome to the official booth directory for Hacktoberfest Hack Day 2026, organized by <strong className="text-white">NSTSDC</strong> at <strong className="text-white">NST x ADYPU</strong>. Discover participating projects, connect with mentors, and start contributing.
        </p>

        {/* Search Bar directly in Hero matching Hacktoberfest search design */}
        <div className="max-w-2xl mx-auto mb-10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const el = document.getElementById('directory');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col sm:flex-row items-stretch brutal-shadow rounded-lg overflow-hidden"
          >
            <div className="relative flex-1 bg-white flex items-center border-2 sm:border-r-0 border-[#10201d]">
              <Search className="w-5 h-5 text-slate-400 ml-4 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
                placeholder="Search organizations (e.g. Kubernetes, Oppia, Docs)..."
                aria-label="Search organizations"
                className="w-full px-3.5 py-3.5 text-sm text-[#10201d] placeholder:text-slate-400 focus:outline-none font-sans"
              />
            </div>
            <button
              type="submit"
              className="bg-[#e97b77] hover:bg-[#f08985] text-[#10201d] font-mono font-bold text-sm px-6 py-3.5 border-2 border-[#10201d] transition-colors shrink-0 flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
            >
              <span>Explore Booths</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Event Schedule & Location Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
          
          {/* Badge 1: Venue */}
          <div className="bg-[#2e4742] border-2 border-[#10201d] brutal-shadow-sm p-4 rounded-lg flex items-start gap-3">
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
          <div className="bg-[#f2a900] text-[#10201d] border-2 border-[#10201d] brutal-shadow-sm p-4 rounded-lg flex items-start gap-3">
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
          <div className="bg-[#2e4742] border-2 border-[#10201d] brutal-shadow-sm p-4 rounded-lg flex items-start gap-3">
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
