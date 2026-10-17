import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrgGrid from '../components/OrgGrid';
import orgsData from '../data/orgs.json';
import { GitPullRequest, Users, Trophy, Code2 } from 'lucide-react';

export default function Home() {
  const { orgs = [] } = orgsData;

  return (
    <div className="min-h-screen flex flex-col bg-[#172D24] text-[#F1F3EC]">
      {/* Header with full poster hero & partner branding */}
      <Header />

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6">
        
        {/* Hack Day Action Highlights */}
        <section className="mt-8 bg-[#1A3328] rounded-2xl border border-[#2A4D3D] p-5 sm:p-6 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#234537] text-[#4D96FF] flex items-center justify-center shrink-0 border border-[#305946]">
                <GitPullRequest className="w-5 h-5 text-[#4D96FF]" />
              </div>
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                  Beginner Friendly
                </h3>
                <p className="text-xs text-[#8BAEA0] mt-1 leading-relaxed">
                  Every booth maintainer has curated Good First Issues prepared for first-time open-source contributors.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#234537] text-[#FF5757] flex items-center justify-center shrink-0 border border-[#305946]">
                <Users className="w-5 h-5 text-[#FF5757]" />
              </div>
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                  In-Person Mentorship
                </h3>
                <p className="text-xs text-[#8BAEA0] mt-1 leading-relaxed">
                  Get real-time code reviews, architecture discussions, and merge assistance right at the physical booth.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#234537] text-[#F5B041] flex items-center justify-center shrink-0 border border-[#305946]">
                <Trophy className="w-5 h-5 text-[#F5B041]" />
              </div>
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                  Hacktoberfest Swag &amp; Track
                </h3>
                <p className="text-xs text-[#8BAEA0] mt-1 leading-relaxed">
                  Your accepted contributions count towards global Hacktoberfest badges, MLH challenges, and hackathon prizes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Organization Directory */}
        <OrgGrid orgs={orgs} />

      </main>

      {/* Proper Footer with NST, ADYPU, MLH & NSTSDC branding */}
      <Footer />
    </div>
  );
}
