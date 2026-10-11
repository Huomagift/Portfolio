'use client';

import { skillCategories, marqueeTools } from '@/data/skills';
import { Terminal, Cpu, Smartphone, Globe, MessageSquare, Database } from 'lucide-react';

export default function SkillsSection() {
  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'frontend':
        return <Globe className="w-5 h-5 text-coral" />;
      case 'mobile':
        return <Smartphone className="w-5 h-5 text-coral" />;
      case 'backend':
        return <Database className="w-5 h-5 text-coral" />;
      case 'ai':
        return <Cpu className="w-5 h-5 text-coral" />;
      case 'integrations':
        return <MessageSquare className="w-5 h-5 text-coral" />;
      default:
        return <Terminal className="w-5 h-5 text-coral" />;
    }
  };

  return (
    <section id="skills" className="relative py-20 sm:py-28 bg-bone border-t border-ink/10 text-ink overflow-hidden">
      
      {/* Flat Solid Marquee Ribbon (Zero Gradients) */}
      <div className="w-full overflow-hidden bg-ink text-bone py-3.5 mb-14 sm:mb-20 -rotate-1 scale-[1.01] shadow-md">
        <div className="flex w-max animate-marquee">
          {[...marqueeTools, ...marqueeTools].map((tool, idx) => (
            <span
              key={idx}
              className="mx-5 font-mono text-xs sm:text-sm uppercase tracking-widest flex items-center gap-2.5 text-bone/90"
            >
              <span>{tool}</span>
              <span className="text-coral">•</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-coral" />
            <p className="font-mono text-xs uppercase tracking-widest text-coral font-bold">
              Engineering Stack
            </p>
          </div>
          <h2 className="font-display italic font-extrabold text-3xl sm:text-5xl md:text-6xl text-ink uppercase tracking-tight leading-[1.02]">
            Tools I actually <span className="font-accent not-italic text-coral lowercase">ship</span> with.
          </h2>
          <p className="font-body text-ink/75 text-sm sm:text-base md:text-lg mt-3 max-w-xl">
            Strictly what I use in active production and hackathons. No inflated lists of languages touched once.
          </p>
        </div>

        {/* Grouped Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((group) => (
            <div
              key={group.key}
              className="bg-bone-surface rounded-3xl p-6 sm:p-7 border border-ink/10 flex flex-col justify-between hover:border-coral transition-colors shadow-sm"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="p-2 rounded-xl bg-ink/5">
                    {getCategoryIcon(group.key)}
                  </div>
                  <h3 className="font-display italic font-bold text-lg sm:text-xl text-ink uppercase tracking-tight">
                    {group.title}
                  </h3>
                </div>

                <p className="font-body text-xs text-ink/65 mb-5">
                  {group.description}
                </p>

                {/* Skills */}
                <div className="space-y-2.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-bone-darker border border-ink/5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-xs sm:text-sm text-ink">{skill.name}</span>
                      </div>
                      {skill.note && (
                        <p className="font-body text-xs text-ink/70 mt-0.5">
                          {skill.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-ink/5">
                <span className="text-[10px] sm:text-[11px] font-mono text-ink/50 uppercase tracking-wider">
                  Production Tested
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
