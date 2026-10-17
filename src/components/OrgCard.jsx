import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Building2 } from 'lucide-react';

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
    <article className="group bg-white rounded-2xl border border-slate-200/90 hover:border-orange-300 p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between relative overflow-hidden">
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

      <div>
        {/* Header: Logo & Name */}
        <div className="flex items-start gap-3.5 mb-3.5">
          <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-200/80 p-2 shrink-0 flex items-center justify-center overflow-hidden group-hover:border-orange-200 transition-colors">
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
                className="w-full h-full rounded-lg bg-orange-100 text-orange-700 font-bold text-sm flex items-center justify-center select-none"
                aria-label={`${org.name} monogram`}
              >
                {initials}
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors truncate">
              {org.name}
            </h2>
            <span className="inline-flex items-center text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Open Source Project
            </span>
          </div>
        </div>

        {/* Short one-line description */}
        <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
          {org.tagline}
        </p>
      </div>

      {/* Footer Area: Booth Location (if provided) & Action Link */}
      <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
        {hasBoothLocation && (
          <div className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200/60">
            <MapPin className="w-3.5 h-3.5 text-orange-600 shrink-0" />
            <span className="truncate">
              {hasFloor && <span>{org.booth_location.floor}</span>}
              {hasFloor && hasLandmark && <span className="text-slate-400 mx-1">•</span>}
              {hasLandmark && <span className="text-slate-600">{org.booth_location.landmark}</span>}
            </span>
          </div>
        )}

        {/* Explore Project Button */}
        <Link
          to={`/org/${org.id}`}
          className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-orange-600 active:bg-orange-700 text-white text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 min-h-[44px]"
          aria-label={`Explore ${org.name} project details`}
        >
          <span>Explore Project</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
