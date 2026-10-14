import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { projects, getProjectBySlug, getAdjacentProjects } from '@/data/projects';
import ProjectLinks from '@/components/ProjectLinks';
import Navbar from '@/components/Navbar';
import ContactFooter from '@/components/ContactFooter';
import { ArrowLeft, ArrowRight, Award, CheckCircle2 } from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} — Case Study | Gift (huomagift)`,
    description: project.oneLiner,
    openGraph: {
      title: `${project.title} — Gift (huomagift)`,
      description: project.oneLiner,
      images: [project.image],
    },
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const { next, prev } = getAdjacentProjects(project.slug);

  return (
    <div className="min-h-screen bg-ink text-bone relative selection:bg-coral selection:text-white">
      <Navbar />

      {/* Main Container */}
      <main className="pt-24 sm:pt-32 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8 sm:mb-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-bone/60 hover:text-coral transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Header with Mixa styling */}
        <header className="mb-10 sm:mb-14">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
            <span className="font-mono text-lg sm:text-xl font-bold text-coral">
              PROJECT {project.number}
            </span>
            <span className="text-bone/40">•</span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-bone/80">
              {project.status}
            </span>
            {project.achievement && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-coral/15 text-coral border border-coral/30">
                <Award className="w-3 h-3" />
                <span>{project.achievement}</span>
              </span>
            )}
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-bone mb-6 leading-[1.05]">
            {project.title}
          </h1>

          <p className="font-body text-base sm:text-lg md:text-xl text-bone/85 leading-relaxed max-w-3xl mb-8">
            {project.oneLiner}
          </p>

          {/* Links Block */}
          <div className="pt-1">
            <ProjectLinks links={project.links} />
          </div>
        </header>

        {/* Hero Architectural Preview Area (Zero Gradients, Edge-to-Edge Fit) */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-3xl overflow-hidden bg-ink-surface border border-white/15 mb-12 sm:mb-16 shadow-xl">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 960px"
          />
        </div>

        {/* ============================================================== */}
        {/* META ROW: ROLE, STACK, STATUS (Strictly ONLY where provided!) */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 sm:p-8 rounded-2xl bg-ink-surface border border-white/10 mb-12 sm:mb-16">
          {/* Status Row */}
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-bone/50 block mb-1">
              Project Status
            </span>
            <span className="font-mono text-xs sm:text-sm text-bone font-medium">
              {project.status}
            </span>
          </div>

          {/* Role Row (Omitted if not provided) */}
          {project.role && (
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-bone/50 block mb-1">
                My Role
              </span>
              <span className="font-mono text-xs sm:text-sm text-coral font-medium">
                {project.role}
              </span>
            </div>
          )}

          {/* Stack Row (Omitted if not provided) */}
          {project.stack && project.stack.length > 0 && (
            <div className={!project.role ? 'md:col-span-2' : ''}>
              <span className="font-mono text-xs uppercase tracking-wider text-bone/50 block mb-2">
                Technology Stack
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-xs font-mono bg-white/5 border border-white/10 text-bone/90"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Deep Dive Content */}
        <div className="space-y-12 sm:space-y-16">
          
          {/* Problem Statement */}
          <section className="border-t border-white/10 pt-8 sm:pt-10">
            <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-bone mb-4">
              The Problem
            </h2>
            <p className="font-body text-sm sm:text-base md:text-lg text-bone/80 leading-relaxed max-w-3xl">
              {project.problem}
            </p>
          </section>

          {/* What I Built */}
          <section className="border-t border-white/10 pt-8 sm:pt-10">
            <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-bone mb-4">
              What I Built
            </h2>
            <p className="font-body text-sm sm:text-base md:text-lg text-bone/80 leading-relaxed max-w-3xl">
              {project.whatIBuilt}
            </p>
          </section>

          {/* Key Decisions (Only if provided) */}
          {project.keyDecisions && project.keyDecisions.length > 0 && (
            <section className="border-t border-white/10 pt-8 sm:pt-10">
              <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-bone mb-6">
                Key Technical &amp; Product Decisions
              </h2>
              <div className="grid grid-cols-1 gap-3.5 sm:gap-4">
                {project.keyDecisions.map((decision, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-ink-surface border border-white/10 flex items-start gap-3.5"
                  >
                    <div className="mt-1 p-1 rounded-full bg-coral/20 text-coral flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <p className="font-body text-xs sm:text-sm md:text-base text-bone/85 leading-relaxed">
                      {decision}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Links Block */}
          <section className="border-t border-white/10 pt-8 sm:pt-10">
            <h2 className="font-display font-black text-xl uppercase tracking-tight text-bone mb-4">
              Project Links
            </h2>
            <ProjectLinks links={project.links} />
          </section>

        </div>

        {/* Adjacent Navigation */}
        <nav className="mt-16 sm:mt-24 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href={`/projects/${prev.slug}`}
            className="group flex items-center gap-3 text-left w-full sm:w-auto"
          >
            <ArrowLeft className="w-5 h-5 text-coral transition-transform group-hover:-translate-x-1" />
            <div>
              <span className="font-mono text-[10px] text-bone/40 uppercase block">Previous Project</span>
              <span className="font-display font-bold text-sm sm:text-base text-bone group-hover:text-coral transition-colors">
                {prev.title}
              </span>
            </div>
          </Link>

          <Link
            href={`/projects/${next.slug}`}
            className="group flex items-center gap-3 text-right w-full sm:w-auto justify-end"
          >
            <div>
              <span className="font-mono text-[10px] text-bone/40 uppercase block">Next Project</span>
              <span className="font-display font-bold text-sm sm:text-base text-bone group-hover:text-coral transition-colors">
                {next.title}
              </span>
            </div>
            <ArrowRight className="w-5 h-5 text-coral transition-transform group-hover:translate-x-1" />
          </Link>
        </nav>

      </main>

      <ContactFooter />
    </div>
  );
}
