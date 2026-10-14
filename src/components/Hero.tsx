'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { profile } from '@/data/profile';
import { ArrowDownRight, Send, Mail, Check, Sparkles } from 'lucide-react';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 24;
      const y = (e.clientY / innerHeight - 0.5) * 24;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 md:py-32 bg-ink overflow-hidden border-b border-white/5"
    >
      {/* Flat Subtle Grid Overlay (Zero Gradients) */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '3.5rem 3.5rem',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Status Chip linking directly to Rights Compass */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <Link
                href="/projects/rights-compass"
                className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-coral/50 hover:bg-white/10 transition-colors text-xs font-mono"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-coral" />
                </span>
                <span className="text-bone/90 group-hover:text-coral transition-colors tracking-wide text-[11px] sm:text-xs">
                  {profile.status}
                </span>
              </Link>
            </motion.div>

            {/* Small Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="font-mono text-coral text-xs sm:text-sm font-bold tracking-wider uppercase mb-3 flex items-center gap-2"
            >
              <span>Hi, I&apos;m Gift Amadi</span>
              <span className="text-bone/30">•</span>
              <span className="text-bone/60">huomagift</span>
            </motion.p>

            {/* Massive Display Headline in Lato Black */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-display font-black text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.96] text-bone uppercase mb-7"
            >
              I BUILD PRODUCTS THAT SOLVE PROBLEMS.
            </motion.h1>

            {/* Short Declarative Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="font-body text-base sm:text-lg md:text-xl text-bone/80 max-w-xl leading-relaxed mb-8 font-normal"
            >
              Software and AI Product Developer based in Nigeria. I take ideas from a blank file to a working MVP across web, mobile, and practical AI. Specific beats impressive.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-coral text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-bold transition-colors hover:bg-coral-hover shadow-md active:scale-95"
              >
                <span>View My Projects</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full bg-white/5 border border-white/15 text-bone hover:text-coral hover:border-coral/50 font-mono text-xs sm:text-sm uppercase tracking-wider transition-colors active:scale-95"
              >
                <span>Say Hello</span>
                <Send className="w-3.5 h-3.5 text-coral" />
              </a>
            </motion.div>

            {/* Stats Summary Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-12 pt-6 border-t border-white/10 flex flex-wrap gap-6 sm:gap-10 text-xs font-mono text-bone/60"
            >
              <div>
                <span className="block text-bone font-black text-lg font-display">5+</span>
                <span>Shipped &amp; Active Projects</span>
              </div>
              <div>
                <span className="block text-coral font-black text-lg font-display">Top 5</span>
                <span>2024 3MTT Rivers State</span>
              </div>
              <div>
                <span className="block text-tealAccent font-black text-lg font-display">9th</span>
                <span>CS Girlies Hackathon 2025</span>
              </div>
            </motion.div>

          </div>
          
          <div className="lg:col-span-5 flex items-center justify-center">
            {/* Central Swappable Visual Card (Zero Gradients, Crisp Flat Frame) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] rounded-3xl overflow-hidden bg-ink-surface border border-white/10 p-2 shadow-2xl"
            >
              <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-ink">
                <Image
                  src="/personal.jpg"
                  alt="Gift Amadi - Software Developer"
                  fill
                  priority
                  className="object-cover object-top filter contrast-[1.05]"
                  sizes="(max-width: 768px) 100vw, 380px"
                />

                {/* Flat Crisp Bottom Overlay Tag (No gradient) */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-ink/90 border border-white/15 backdrop-blur-none">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-display font-bold text-bone text-sm sm:text-base">
                        Gift Amadi (huomagift)
                      </p>
                      <p className="font-mono text-[11px] text-coral">Software Developer • Nigeria</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-mono text-bone text-green-500">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
