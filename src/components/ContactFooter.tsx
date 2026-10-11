'use client';

import { useState } from 'react';
import { profile } from '@/data/profile';
import { Github, Linkedin, Send, CheckCircle2, ArrowUpRight, Mail, Copy, Check, ExternalLink } from 'lucide-react';

function WhatsAppIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
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

export default function ContactFooter() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const recipientEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
    profile.email ||
    'huomagift@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(recipientEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      let delivered = false;

      // 1. First attempt: Next.js API route
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formState.name,
            email: formState.email,
            message: formState.message,
          }),
        });

        const result = await response.json();
        if (response.ok && result.success) {
          delivered = true;
        }
      } catch (e) {
        // Fall back to direct client delivery
      }

      // 2. Client-side direct submission fallback (works directly in the browser)
      if (!delivered) {
        const clientRes = await fetch(
          `https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({
              name: formState.name,
              email: formState.email,
              message: formState.message,
              _subject: `New Portfolio Message from ${formState.name}`,
              _replyto: formState.email,
              _template: 'table',
            }),
          }
        );

        if (clientRes.ok) {
          delivered = true;
        }
      }

      if (delivered) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        throw new Error('Unable to dispatch email automatically');
      }
    } catch (err: any) {
      console.error('Contact form submission error:', err);
      setStatus('error');
      setErrorMessage(err?.message || 'Network dispatch issue');
    }
  };

  const activeSocials = profile.socials.filter((s) => s.active && s.url);

  return (
    <footer id="contact" className="relative bg-ink text-bone pt-20 sm:pt-28 pb-14 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pb-16 sm:pb-20 border-b border-white/10">
          
          {/* Left Column: CTA & Channels (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
                <p className="font-mono text-xs uppercase tracking-widest text-coral font-bold">
                  Get In Touch
                </p>
              </div>

              <h2 className="font-display italic font-extrabold text-3xl sm:text-5xl md:text-6xl text-bone uppercase tracking-tight leading-[0.96] mb-6">
                Let&apos;s build something <span className="font-display font-medium not-italic text-coral uppercase">useful</span>.
              </h2>

              <p className="font-body text-sm sm:text-base md:text-lg text-bone/75 max-w-lg mb-8 leading-relaxed">
                Whether you want to collaborate on an MVP, consult on systems, or discuss a project, send an email or reach out below.
              </p>

              {/* Dedicated Prominent Email Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-ink-surface border border-white/10 mb-8 max-w-md">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-coral text-white flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-bone/50 block">Direct Email</span>
                      <a
                        href={`mailto:${recipientEmail}`}
                        className="font-mono text-sm sm:text-base text-bone font-bold hover:text-coral transition-colors"
                      >
                        {recipientEmail}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-bone/70 hover:text-bone transition-colors"
                    title="Copy email address"
                  >
                    {copied ? <Check className="w-4 h-4 text-tealAccent" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Direct Channels with WhatsApp icon */}
            <div className="space-y-3 pt-6 border-t border-white/10">
              <span className="font-mono text-xs text-bone/60 uppercase tracking-wider block">
                Direct Channels
              </span>
              <div className="flex flex-wrap gap-2.5">
                {activeSocials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-coral hover:bg-white/10 text-xs font-mono text-bone transition-colors"
                  >
                    {social.platform === 'LinkedIn' && <Linkedin className="w-3.5 h-3.5 text-coral" />}
                    {social.platform === 'GitHub' && <Github className="w-3.5 h-3.5 text-coral" />}
                    {social.platform === 'WhatsApp' && <WhatsAppIcon className="w-3.5 h-3.5 text-coral" />}
                    <span>{social.platform} ({social.username || 'huomagift'})</span>
                    <ArrowUpRight className="w-3 h-3 text-bone/40" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form (6 cols) */}
          <div className="lg:col-span-6 bg-ink-surface rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-xl">
            <h3 className="font-display italic font-bold text-xl sm:text-2xl text-bone uppercase tracking-tight mb-1.5">
              Send a Message
            </h3>
            
            {status === 'success' ? (
              <div className="p-6 rounded-2xl bg-white/5 border border-tealAccent text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-tealAccent mx-auto" />
                <h4 className="font-display italic font-bold text-lg text-bone">Message Delivered</h4>
                <p className="font-body text-xs sm:text-sm text-bone/85">
                  Your message has been sent to me. I will get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-3 px-4 py-2 rounded-full text-xs font-mono bg-white/10 hover:bg-white/20 text-bone transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-[11px] font-mono uppercase tracking-wider text-bone/70 mb-1">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-ink border border-white/15 text-bone font-body text-sm placeholder:text-bone/30 focus:outline-none focus:border-coral transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-[11px] font-mono uppercase tracking-wider text-bone/70 mb-1">
                    Your Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="janedoe@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-ink border border-white/15 text-bone font-body text-sm placeholder:text-bone/30 focus:outline-none focus:border-coral transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[11px] font-mono uppercase tracking-wider text-bone/70 mb-1">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your product or idea..."
                    className="w-full px-4 py-3 rounded-xl bg-ink border border-white/15 text-bone font-body text-sm placeholder:text-bone/30 focus:outline-none focus:border-coral transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="p-3.5 rounded-xl bg-coral/10 border border-coral/30 space-y-2">
                    <p className="text-xs font-mono text-coral">
                      Could not dispatch automatically. Click below to open your email directly:
                    </p>
                    <a
                      href={`mailto:${recipientEmail}?subject=${encodeURIComponent('Portfolio Inquiry: ' + formState.name)}&body=${encodeURIComponent(formState.message + '\n\nFrom: ' + formState.name + ' (' + formState.email + ')')}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-coral text-white text-xs font-mono font-bold"
                    >
                      <span>Send via Email Client</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 sm:py-4 rounded-xl bg-coral text-white font-mono text-xs uppercase tracking-wider font-bold hover:bg-coral-hover transition-colors shadow-md disabled:opacity-50 active:scale-98"
                >
                  {status === 'submitting' ? (
                    <span>Transmitting to {recipientEmail}...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-bone/50">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>Built in Nigeria • Port Harcourt / Remote</span>
            <span>•</span>
            <span>© {new Date().getFullYear()} Gift (huomagift)</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#hero" className="hover:text-coral transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
