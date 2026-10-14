'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import ProjectLinks from './ProjectLinks';
import { ArrowUpRight, Award, Layers } from 'lucide-react';

export default function ProjectsShowcase() {
  const flagship = projects[0]; // Rights Compass
  const otherProjects = projects.slice(1);

  return (
    <section id="projects" className="relative py-20 sm:py-28 bg-ink border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-white/10 gap-4">
          <div>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-bone uppercase tracking-tight">
              Selected <span className="text-coral">Projects</span>
            </h2>
          </div>
          <p className="font-body text-bone/70 text-sm sm:text-base max-w-md">
            Real products built for real problems: legal access, farming resilience, classroom attendance, and trade.
          </p>
        </div>

        {/* ============================================================== */}
        {/* FLAGSHIP PROJECT: 01. RIGHTS COMPASS (Featured Largest) */}
        {/* ============================================================== */}
        <div className="mb-16 sm:mb-20">
          <div className="relative rounded-3xl bg-ink-surface border border-white/15 p-5 sm:p-8 lg:p-12 overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Flagship Meta & Story (6 cols) */}
              <div className="lg:col-span-6 flex flex-col items-start">
                
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                  <span className="font-mono text-2xl sm:text-4xl font-black text-coral">
                    {flagship.number}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-coral/15 text-coral border border-coral/30">
                    Flagship • In Active Development
                  </span>
                </div>

                <Link href={`/projects/${flagship.slug}`}>
                  <h3 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-bone uppercase tracking-tight hover:text-coral transition-colors mb-4 flex items-center gap-2">
                    <span>{flagship.title}</span>
                    <ArrowUpRight className="w-6 h-6 text-coral" />
                  </h3>
                </Link>

                <p className="font-body text-sm sm:text-base lg:text-lg text-bone/80 mb-6 leading-relaxed">
                  {flagship.oneLiner}
                </p>

                {/* Key decisions pill list */}
                <div className="space-y-2 mb-6 text-xs sm:text-sm font-body text-bone/70">
                  <div className="flex items-start gap-2">
                    <span className="text-coral mt-0.5">•</span>
                    <span>Works offline with bundled statutory rights and local device storage.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-coral mt-0.5">•</span>
                    <span>Lawyer marketplace protected by upfront escrow and manual NBA verification.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-coral mt-0.5">•</span>
                    <span>Live voice failover when emergencies are flagged.</span>
                  </div>
                </div>

                {/* Stack Tags */}
                {flagship.stack && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
                    {flagship.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-white/5 border border-white/10 text-bone/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Actions & Links Block */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full pt-4 border-t border-white/10">
                  <Link
                    href={`/projects/${flagship.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-bone text-ink font-mono text-xs uppercase tracking-wider font-bold hover:bg-coral hover:text-white transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <ProjectLinks links={flagship.links} />
                </div>
              </div>

              {/* Right Column: Visual Preview (6 cols) - Fits Properly Edge-to-Edge */}
              <div className="lg:col-span-6 relative">
                <Link
                  href={`/projects/${flagship.slug}`}
                  className="group/img block relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/15 bg-ink shadow-2xl"
                >
                  <Image
                    src={flagship.image}
                    alt={flagship.imageAlt}
                    fill
                    className="object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                  
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-md bg-ink/90 border border-white/15 text-[11px] font-mono text-bone/80 flex items-center gap-1.5 backdrop-blur-sm">
                    <Layers className="w-3.5 h-3.5 text-coral" />
                    <span>View Architecture</span>
                  </div>
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* PROJECTS 02 TO 05: FLAT SOLID ASYMMETRIC GRID */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8">
          {otherProjects.map((project) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group relative flex flex-col justify-between rounded-3xl bg-ink-surface border border-white/10 p-5 sm:p-7 hover:border-coral transition-colors"
            >
              <div>
                {/* Header Row: Number + Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="font-mono text-xl sm:text-2xl font-black text-coral">
                    {project.number}
                  </span>

                  {project.achievement ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-coral/15 text-coral border border-coral/30">
                      <Award className="w-3 h-3" />
                      <span>{project.achievement}</span>
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-white/5 border border-white/10 text-bone/70">
                      {project.status}
                    </span>
                  )}
                </div>

                {/* Project Image Preview Slot - Properly Fitted with object-cover object-top, zero awkward gaps */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="group/img block relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl overflow-hidden bg-ink border border-white/10 mb-4 hover:border-coral/40 transition-colors"
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                  />
                  {project.slug === 'artza' && (
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[9px] font-mono bg-coral text-white font-bold tracking-wider">
                      LIVE SITE
                    </div>
                  )}
                </Link>

                {/* Title */}
                <Link href={`/projects/${project.slug}`}>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-bone uppercase tracking-tight hover:text-coral transition-colors mb-2 flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-coral" />
                  </h3>
                </Link>

                {/* One Liner */}
                <p className="font-body text-xs sm:text-sm text-bone/70 leading-relaxed mb-4">
                  {project.oneLiner}
                </p>

                {/* Stack */}
                {project.stack && project.stack.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono bg-white/5 text-bone/70 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Row */}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-xs font-mono uppercase tracking-wider text-bone/90 hover:text-coral font-bold flex items-center gap-1 hover-link-underline"
                  >
                    <span>Details &amp; Decisions</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <ProjectLinks links={project.links} compact />
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
