import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';

export default function OrgCard({ org }) {
  const navigate = useNavigate();
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

  const savePosition = () => {
    sessionStorage.setItem('scroll_pos_/', String(window.scrollY));
    sessionStorage.setItem('last_viewed_org', String(org.id));
  };

  const handleCardClick = (e) => {
    savePosition();
    // If not clicking directly on an anchor (which handles navigation itself)
    if (!e.target.closest('a')) {
      navigate(`/org/${org.id}`);
    }
  };

  return (
    <article
      id={`org-card-${org.id}`}
      onClick={handleCardClick}
      className="brutal-card bg-white rounded-lg p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group cursor-pointer"
    >
      <div>
        {/* Header: Official PNG Logo & Name */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-lg bg-[#f7f7f2] border-2 border-[#10201d] p-2 shrink-0 flex items-center justify-center overflow-hidden brutal-shadow-sm group-hover:bg-white transition-colors">
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
                className="w-full h-full rounded bg-[#e97b77] text-[#10201d] font-mono font-bold text-sm flex items-center justify-center select-none"
                aria-label={`${org.name} monogram`}
              >
                {initials}
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-xl font-display font-extrabold text-[#10201d] group-hover:text-[#e53927] transition-colors truncate leading-tight">
              {org.name}
            </h3>
          </div>
        </div>

        {/* Short one-line description */}
        <p className="text-xs sm:text-sm text-[#34433f] line-clamp-2 leading-relaxed mb-4">
          {org.tagline}
        </p>
      </div>

      {/* Footer Area: Booth Location (if provided) & Action Link */}
      <div className="pt-4 border-t-2 border-[#10201d]/15 flex flex-col gap-3">
        {hasBoothLocation && (
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#10201d] bg-[#f7f7f2] px-3 py-1.5 rounded border border-[#10201d]">
            <MapPin className="w-3.5 h-3.5 text-[#e53927] shrink-0" />
            <span className="truncate">
              {hasFloor && <span>{org.booth_location.floor}</span>}
              {hasFloor && hasLandmark && <span className="text-slate-400 mx-1">•</span>}
              {hasLandmark && <span>{org.booth_location.landmark}</span>}
            </span>
          </div>
        )}

        {/* Explore Project Button matching Hacktoberfest brutalist buttons */}
        <Link
          to={`/org/${org.id}`}
          onClick={savePosition}
          className="brutal-btn inline-flex items-center justify-between w-full px-4 py-2.5 rounded text-xs uppercase tracking-wider"
          aria-label={`Explore ${org.name} project details`}
        >
          <span>Explore Project</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
