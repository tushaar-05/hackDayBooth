import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';

export default function OrgCard({ org }) {
  const [imgError, setImgError] = useState(false);

  // Check if booth location details exist and are non-empty
  const hasFloor = Boolean(org.booth_location?.floor && org.booth_location.floor.trim());
  const hasLandmark = Boolean(org.booth_location?.landmark && org.booth_location.landmark.trim());
  const hasBoothLocation = hasFloor || hasLandmark;

  // Format initials for placeholder fallback
  const initials = org.name
    ? org.name
        .split(' ')
        .map((w) => w[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : 'OS';

  return (
    <article className="group bg-[#1A3328] hover:bg-[#1E3B2F] rounded-2xl border border-[#2B4E3E] hover:border-[#F5B041] p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between relative overflow-hidden shadow-md">
      {/* Top subtle pixel accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF5757] via-[#F5B041] to-[#55EFC4] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

      <div>
        {/* Header: PNG Logo & Name */}
        <div className="flex items-start gap-4 mb-3.5">
          <div className="w-14 h-14 rounded-xl bg-white p-2 shrink-0 flex items-center justify-center overflow-hidden border border-white/20 shadow-xs">
            {org.logo && !imgError ? (
              <img
                src={org.logo}
                alt={`${org.name} logo`}
                onError={() => setImgError(true)}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            ) : (
              <div
                className="w-full h-full rounded-lg bg-[#FF5757]/20 text-[#FF7675] font-extrabold text-sm flex items-center justify-center select-none font-mono"
                aria-label={`${org.name} monogram`}
              >
                {initials}
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="text-lg font-bold text-white group-hover:text-[#F5B041] transition-colors truncate font-display">
              {org.name}
            </h2>
            <span className="inline-flex items-center text-[10px] font-mono font-bold text-[#8FAFA1] uppercase tracking-wider">
              Open Source Booth
            </span>
          </div>
        </div>

        {/* Short one-line description */}
        <p className="text-sm text-[#A9C4B7] line-clamp-2 leading-relaxed mb-4">
          {org.tagline}
        </p>
      </div>

      {/* Footer Area: Booth Location (if provided) & Action Link */}
      <div className="pt-3 border-t border-[#264839] flex flex-col gap-3">
        {hasBoothLocation && (
          <div className="flex items-center gap-2 text-xs font-medium text-[#CDE0D6] bg-[#142820] px-3 py-1.5 rounded-lg border border-[#2B4E3E]">
            <MapPin className="w-3.5 h-3.5 text-[#FF7675] shrink-0" />
            <span className="truncate">
              {hasFloor && <span>{org.booth_location.floor}</span>}
              {hasFloor && hasLandmark && <span className="text-[#6C8E7E] mx-1">•</span>}
              {hasLandmark && <span>{org.booth_location.landmark}</span>}
            </span>
          </div>
        )}

        {/* Explore Project Button */}
        <Link
          to={`/org/${org.id}`}
          className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-[#234536] hover:bg-[#FF5757] active:bg-[#E04848] text-white text-sm font-semibold transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#FF5757] focus:ring-offset-2 focus:ring-offset-[#172D24] min-h-[44px] shadow-xs group-hover:bg-[#FF5757]"
          aria-label={`Explore ${org.name} project details`}
        >
          <span className="font-medium">Explore Project</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
