'use client';

import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { Users, CheckCircle2, Trophy } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-bone text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-coral" />
            <p className="font-mono text-xs uppercase tracking-widest text-coral font-bold">
              Background &amp; Milestones
            </p>
          </div>
          <h2 className="font-display italic font-extrabold text-3xl sm:text-5xl md:text-6xl text-ink uppercase tracking-tight leading-[1.02]">
            Code, Hackathons, and <span className="font-display font-medium not-italic text-coral uppercase">shipping</span>.
          </h2>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-16 sm:mb-20">
          
          {/* Main Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base md:text-lg text-ink/85 font-body leading-relaxed">
            <p className="font-display italic font-bold text-lg sm:text-xl md:text-2xl text-ink uppercase tracking-tight">
              I build AI products that solve problems, and I ship them.
            </p>
            <p>
              The story starts in code and stays in code. I started building because theoretical discussions don&apos;t fix broken workflows. When legal guidance requires expensive consultations, when crop diseases wipe out farms without warning, or when schools lose hours to paper attendance rolls, software is the most direct lever.
            </p>
            <p>
              I work across frontend (Next.js, React, React Native), backend systems (Supabase, FastAPI, Node.js), and practical AI & autonomous agents. No endless research papers: from an empty Git repository to a functioning MVP in production.
            </p>
            <p>
              Why spend six months on slide decks when you can deploy a testable prototype in few weeks?
            </p>
          </div>

          {/* Community & Leadership Card (5 cols) */}
          <div className="lg:col-span-5 bg-bone-darker rounded-3xl p-6 sm:p-8 border border-ink/10 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <Users className="w-5 h-5 text-coral" />
              <h3 className="font-display italic font-bold text-lg sm:text-xl uppercase tracking-tight text-ink">
                Community &amp; Leadership
              </h3>
            </div>

            <div className="space-y-4">
              {profile.leadership.map((item, idx) => (
                <div key={idx} className="pb-3 border-b border-ink/10 last:border-none last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <h4 className="font-display italic font-bold text-sm sm:text-base text-ink">{item.role}</h4>
                    <span className="font-mono text-xs text-coral font-bold">{item.organization}</span>
                  </div>
                  <p className="font-body text-xs sm:text-sm text-ink/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Milestones Strip */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-5 h-5 text-coral" />
            <h3 className="font-display italic font-bold text-xl sm:text-2xl uppercase tracking-tight text-ink">
              Milestones Strip
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {profile.milestones.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="bg-bone-surface border border-ink/10 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-coral transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-ink/5 text-ink/80">
                      {m.year}
                    </span>
                    {m.badge && (
                      <span className="font-mono text-[11px] font-bold text-coral">
                        {m.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="font-display italic font-bold text-base sm:text-lg text-ink mb-1.5">
                    {m.title}
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-ink/70 leading-relaxed">
                    {m.context}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-ink/5 flex items-center gap-1.5 text-xs font-mono text-coral font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Tech Milestone</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
