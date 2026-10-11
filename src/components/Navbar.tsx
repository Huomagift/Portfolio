'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '@/data/profile';
import { Github, Linkedin, Menu, X, ArrowUpRight, Mail } from 'lucide-react';

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.507 14.307l-.009.075c-.301-.15-1.782-.879-2.057-.98-.276-.1-.476-.15-.676.15s-.777.979-.952 1.18c-.176.2-.351.226-.652.075-.3-.151-1.268-.468-2.417-1.493-.894-.798-1.498-1.784-1.674-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.175.201-.301.301-.501.101-.2.051-.376-.025-.526-.075-.151-.676-1.63-.927-2.232-.244-.587-.492-.507-.676-.516l-.576-.01c-.201 0-.527.075-.802.376s-1.053 1.028-1.053 2.508 1.078 2.91 1.229 3.11c.15.201 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.38.197 1.9-.12.576-.352 1.782-1.28 2.032-1.782.25-.501.25-.93.175-1.053-.075-.125-.276-.201-.577-.352zm-5.467 7.693h-.002c-1.849 0-3.664-.498-5.249-1.44l-.376-.224-3.903 1.024 1.042-3.805-.245-.39c-1.038-1.652-1.587-3.565-1.587-5.525 0-5.748 4.677-10.426 10.428-10.426 2.785 0 5.404 1.085 7.373 3.054 1.969 1.97 3.052 4.588 3.051 7.375 0 5.75-4.678 10.427-10.427 10.427zm9.141-17.518c-2.441-2.443-5.688-3.79-9.144-3.79-7.126 0-12.924 5.798-12.925 12.926 0 2.278.595 4.502 1.725 6.463l-1.834 6.7 6.856-1.798c1.888 1.03 4.024 1.573 6.175 1.574h.005c7.125 0 12.925-5.798 12.926-12.926 0-3.454-1.345-6.702-3.784-9.149z" />
    </svg>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 30);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { label: 'Projects', href: '/#projects' },
    { label: 'About', href: '/#about' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Contact', href: '/#contact' },
  ];

  const activeSocials = profile.socials.filter((s) => s.active && s.url);
  const userEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || profile.email;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'bg-ink border-b border-white/10 py-3 shadow-lg shadow-black/40'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Wordmark with Mixa bold italic energy */}
          <Link
            href="/"
            className="group flex items-center gap-1.5 text-bone font-display italic font-extrabold text-2xl uppercase tracking-tight transition-transform active:scale-95"
          >
            <span className="text-bone group-hover:text-coral transition-colors">Gift Amadi</span>
            <span className="w-2 h-2 rounded-full bg-coral" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium tracking-wide text-bone/80 hover:text-coral transition-colors hover-link-underline font-body"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Email pill & Socials */}
          <div className="hidden md:flex items-center gap-3">
            {activeSocials.map((social) => {
              if (social.platform === 'LinkedIn') {
                return (
                  <a
                    key={social.platform}
                    href={social.url!}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Gift on LinkedIn"
                    className="p-2 rounded-full text-bone/70 hover:text-coral hover:bg-white/5 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                );
              }
              if (social.platform === 'GitHub') {
                return (
                  <a
                    key={social.platform}
                    href={social.url!}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Gift on GitHub"
                    className="p-2 rounded-full text-bone/70 hover:text-coral hover:bg-white/5 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                );
              }
              if (social.platform === 'WhatsApp') {
                return (
                  <a
                    key={social.platform}
                    href={social.url!}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Gift on WhatsApp"
                    className="p-2 rounded-full text-bone/70 hover:text-coral hover:bg-white/5 transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>
                );
              }
              return null;
            })}

            {/* Direct Email Link */}
            <a
              href={`mailto:${userEmail}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-bone/90 bg-white/5 border border-white/15 hover:border-coral hover:text-coral transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-coral" />
              <span>{userEmail}</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wide bg-coral text-white hover:bg-coral-hover transition-colors shadow-sm"
            >
              <span>Say Hello</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`mailto:${userEmail}`}
              className="p-2 rounded-full bg-white/5 text-bone/80 hover:text-coral"
              aria-label="Email Gift"
            >
              <Mail className="w-4 h-4 text-coral" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-bone/90 hover:text-coral transition-colors rounded-lg bg-white/5"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-x-0 top-[60px] z-30 bg-ink border-b border-white/10 px-5 py-6 md:hidden shadow-2xl"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-display italic font-bold text-bone hover:text-coral transition-colors py-1 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-5 border-t border-white/10 flex flex-col gap-4">
              {/* Direct email row */}
              <a
                href={`mailto:${userEmail}`}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-bone hover:text-coral"
              >
                <Mail className="w-4 h-4 text-coral" />
                <span>{userEmail}</span>
              </a>

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {activeSocials.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-white/5 text-bone hover:text-coral"
                    >
                      {social.platform === 'LinkedIn' && <Linkedin className="w-4 h-4" />}
                      {social.platform === 'GitHub' && <Github className="w-4 h-4" />}
                      {social.platform === 'WhatsApp' && <WhatsAppIcon className="w-4 h-4" />}
                    </a>
                  ))}
                </div>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-5 py-2.5 rounded-full text-xs font-mono font-bold tracking-wide bg-coral text-white"
                >
                  Say Hello
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
