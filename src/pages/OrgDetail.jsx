import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFound from './NotFound';
import orgsData from '../data/orgs.json';
import {
  ArrowLeft,
  ExternalLink,
  MessageSquare,
  Globe,
  MapPin,
  CheckCircle2,
  BookOpen,
  Sparkles,
  GitPullRequest
} from 'lucide-react';

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function OrgDetail() {
  const { id } = useParams();
  const [imgError, setImgError] = useState(false);

  // Find organization by id
  const org = orgsData.orgs?.find((item) => String(item.id) === String(id));

  // If organization not found or missing essential info, display NotFound
  if (!org || !org.name) {
    return <NotFound />;
  }

  // Location validation: only show if floor or landmark exists and is non-empty
  const hasFloor = Boolean(org.booth_location?.floor && org.booth_location.floor.trim());
  const hasLandmark = Boolean(org.booth_location?.landmark && org.booth_location.landmark.trim());
  const hasBoothLocation = hasFloor || hasLandmark;

  // Contributions validation: check if array has valid items
  const validContributions = Array.isArray(org.how_to_contribute)
    ? org.how_to_contribute.filter((item) => typeof item === 'string' && item.trim().length > 0)
    : [];
  const hasContributions = validContributions.length > 0;

  // Resource links validation
  const hasBeginnerIssues = Boolean(org.beginner_issues_url && org.beginner_issues_url.trim());
  const hasContributingGuide = Boolean(org.contributing_guide_url && org.contributing_guide_url.trim());
  const hasResourceLinks = hasBeginnerIssues || hasContributingGuide;

  // Community links validation
  const githubUrl = org.community?.github && org.community.github.trim();
  const chatUrl = org.community?.chat && org.community.chat.trim();
  const websiteUrl = org.community?.website && org.community.website.trim();
  const hasCommunity = Boolean(githubUrl || chatUrl || websiteUrl);

  // Split what_it_is into lines if present
  const whatItIsLines = org.what_it_is
    ? org.what_it_is.split('\n').filter((l) => l.trim().length > 0)
    : [];
  const hasWhatItIs = whatItIsLines.length > 0;

  // Initials for image fallback
  const initials = org.name
    ? org.name
        .split(' ')
        .map((w) => w[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : 'OS';

  return (
    <div className="min-h-screen flex flex-col bg-[#f2f2eb] text-[#10201d]">
      {/* Header with compact navigation */}
      <Header compact={true} />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-8">
        
        {/* Navigation Breadcrumb / Back Link */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#10201d] bg-white hover:bg-[#e97b77] transition-colors border-2 border-[#10201d] brutal-shadow-sm px-3 py-1.5 rounded"
            aria-label="Back to booth directory"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Booth Directory</span>
          </Link>
        </div>

        {/* Main Organization Hero Card */}
        <div className="bg-white rounded-lg border-2 border-[#10201d] brutal-shadow p-6 sm:p-8 mb-6 relative overflow-hidden">
          <div className="mosaic-bar absolute top-0 left-0 right-0 border-b-2 border-[#10201d]">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start gap-6 mt-3">
            {/* Org PNG Logo / Fallback Monogram */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-[#f7f7f2] border-2 border-[#10201d] p-3 shrink-0 flex items-center justify-center overflow-hidden brutal-shadow-sm">
              {org.logo && !imgError ? (
                <img
                  src={org.logo}
                  alt={`${org.name} logo`}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div
                  className="w-full h-full rounded bg-[#e97b77] text-[#10201d] font-mono font-bold text-2xl flex items-center justify-center select-none"
                  aria-label={`${org.name} monogram`}
                >
                  {initials}
                </div>
              )}
            </div>

            {/* Name, Tagline, and Location */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#10201d] bg-[#f2a900] px-2 py-0.5 rounded border border-[#10201d]">
                  Official Open Source Booth
                </span>
                {hasBoothLocation && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#f7f7f2] text-[#10201d] border border-[#10201d]">
                    <MapPin className="w-3.5 h-3.5 text-[#e53927]" />
                    {hasFloor && <span>{org.booth_location.floor}</span>}
                    {hasFloor && hasLandmark && <span className="text-slate-400">•</span>}
                    {hasLandmark && <span>{org.booth_location.landmark}</span>}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#10201d] tracking-tight font-display">
                {org.name}
              </h1>

              {org.tagline && (
                <p className="mt-2.5 text-sm sm:text-base text-[#34433f] leading-relaxed">
                  {org.tagline}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* What the Project Does */}
        {hasWhatItIs && (
          <section className="bg-white rounded-lg border-2 border-[#10201d] brutal-shadow p-6 sm:p-7 mb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#10201d] flex items-center gap-2.5 mb-3 font-display">
              <Sparkles className="w-5 h-5 text-[#f2a900]" />
              <span>About the Project</span>
            </h2>
            <div className="space-y-2.5 text-sm sm:text-base text-[#34433f] leading-relaxed">
              {whatItIsLines.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </section>
        )}

        {/* How to Contribute Section */}
        {hasContributions && (
          <section className="bg-white rounded-lg border-2 border-[#10201d] brutal-shadow p-6 sm:p-7 mb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#10201d] flex items-center gap-2.5 mb-2 font-display">
              <GitPullRequest className="w-5 h-5 text-[#3d5f58]" />
              <span>How to Contribute</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mb-5 font-mono">
              Beginner-friendly opportunities recommended for Hack Day participants:
            </p>

            <ul className="space-y-3">
              {validContributions.map((idea, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3.5 p-3.5 rounded bg-[#f7f7f2] border-2 border-[#10201d]"
                >
                  <div className="w-6 h-6 rounded bg-[#f1c40f] text-[#10201d] border border-[#10201d] flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <span className="text-sm font-semibold text-[#10201d] leading-snug">
                    {idea}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Contribution Links & Action Center */}
        {hasResourceLinks && (
          <section className="bg-white rounded-lg border-2 border-[#10201d] brutal-shadow p-6 sm:p-7 mb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#10201d] flex items-center gap-2.5 mb-5 font-display">
              <BookOpen className="w-5 h-5 text-[#e53927]" />
              <span>Get Started &amp; Issues</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hasBeginnerIssues && (
                <a
                  href={org.beginner_issues_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded bg-[#e97b77] hover:bg-[#f08985] text-[#10201d] font-bold text-sm border-2 border-[#10201d] brutal-shadow-sm transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded bg-[#10201d] text-white flex items-center justify-center shrink-0">
                      <GitPullRequest className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-extrabold uppercase font-mono text-xs">Good First Issues</div>
                      <div className="text-[11px] opacity-80 font-normal">Curated beginner tasks</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              )}

              {hasContributingGuide && (
                <a
                  href={org.contributing_guide_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded bg-[#f7f7f2] hover:bg-white text-[#10201d] font-bold text-sm border-2 border-[#10201d] brutal-shadow-sm transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded bg-[#3d5f58] text-white flex items-center justify-center shrink-0 border border-[#10201d]">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-extrabold uppercase font-mono text-xs">Contributing Guide</div>
                      <div className="text-[11px] text-slate-500 font-normal">Setup &amp; guidelines</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-600 group-hover:translate-x-0.5 transition-transform" />
                </a>
              )}
            </div>
          </section>
        )}

        {/* Community & Official Channels */}
        {hasCommunity && (
          <section className="bg-white rounded-lg border-2 border-[#10201d] brutal-shadow p-6 sm:p-7 mb-8">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#10201d] flex items-center gap-2.5 mb-5 font-display">
              <Globe className="w-5 h-5 text-[#3d5f58]" />
              <span>Community &amp; Official Channels</span>
            </h2>

            <div className="flex flex-wrap gap-3">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#10201d] text-white border-2 border-[#10201d] text-xs font-mono font-bold hover:bg-[#253e39] transition-colors brutal-shadow-sm"
                >
                  <GithubIcon className="w-4 h-4 text-white" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                </a>
              )}

              {chatUrl && (
                <a
                  href={chatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-white text-[#10201d] border-2 border-[#10201d] text-xs font-mono font-bold hover:bg-[#f7f7f2] transition-colors brutal-shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-[#3d5f58]" />
                  <span>Discussion &amp; Chat</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                </a>
              )}

              {websiteUrl && (
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-white text-[#10201d] border-2 border-[#10201d] text-xs font-mono font-bold hover:bg-[#f7f7f2] transition-colors brutal-shadow-sm"
                >
                  <Globe className="w-4 h-4 text-[#3d5f58]" />
                  <span>Official Website</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                </a>
              )}
            </div>
          </section>
        )}

        {/* Bottom Back Button */}
        <div className="pt-2 pb-6 text-center">
          <Link
            to="/"
            className="brutal-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-xs uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Booths</span>
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}
