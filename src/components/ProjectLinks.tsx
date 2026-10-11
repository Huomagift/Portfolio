import { ProjectLink } from '@/types';
import { ExternalLink, Github, Video, Clock } from 'lucide-react';

interface ProjectLinksProps {
  links: ProjectLink[];
  className?: string;
  compact?: boolean;
}

export default function ProjectLinks({ links, className = '', compact = false }: ProjectLinksProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'Live':
        return <ExternalLink className="w-3.5 h-3.5" />;
      case 'GitHub':
        return <Github className="w-3.5 h-3.5" />;
      case 'Pitch':
        return <Video className="w-3.5 h-3.5" />;
      default:
        return <ExternalLink className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {links.map((link, idx) => {
        const label = link.label || (link.type === 'Live' ? 'Live Demo' : link.type === 'GitHub' ? 'GitHub' : 'Pitch / Video');

        if (link.url) {
          return (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 rounded-full font-mono font-medium transition-all duration-200 ${
                compact
                  ? 'px-3 py-1 text-[11px] bg-coral text-white hover:bg-coral-hover shadow-sm'
                  : 'px-4 py-2 text-xs bg-coral text-white hover:bg-coral-hover shadow-md hover:-translate-y-0.5'
              }`}
            >
              <span>{label}</span>
              {getIcon(link.type)}
            </a>
          );
        }

        // Missing link: Render strictly as muted "Link coming soon" chip, NEVER '#' or dead link
        return (
          <span
            key={idx}
            className={`inline-flex items-center gap-1.5 rounded-full font-mono text-bone/40 bg-white/5 border border-white/10 cursor-not-allowed select-none ${
              compact ? 'px-2.5 py-1 text-[10px]' : 'px-3.5 py-1.5 text-xs'
            }`}
            title="Link coming soon"
          >
            <Clock className="w-3 h-3 text-bone/30" />
            <span>{link.type}: Coming soon</span>
          </span>
        );
      })}
    </div>
  );
}
