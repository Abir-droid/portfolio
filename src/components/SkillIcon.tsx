import React from 'react';

interface SkillIconProps {
  name: string;
  size?: number;
  className?: string;
}

export const SkillIcon: React.FC<SkillIconProps> = ({ name, size = 18, className = '' }) => {
  const s = size;

  const icons: Record<string, JSX.Element> = {
    Python: (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.5 2 8 3.6 8 5v2h4v.5H5.5C4.1 7.5 3 8.6 3 10.5v3C3 15.4 4.1 16.5 5.5 16.5H7v-2.5c0-1.7 1.4-2.5 2.5-2.5h5c1.1 0 2-1 2-2V5C16.5 3.1 14.5 2 12 2zM10 5.5a.75.75 0 110 1.5.75.75 0 010-1.5z" fill="#3776AB"/>
        <path d="M12 22c3.5 0 4-1.6 4-3v-2h-4v-.5h6.5c1.4 0 2.5-1.1 2.5-3v-3C21 8.6 19.9 7.5 18.5 7.5H17v2.5c0 1.7-1.4 2.5-2.5 2.5h-5c-1.1 0-2 1-2 2V19C7.5 20.9 9.5 22 12 22zM14 18.5a.75.75 0 110-1.5.75.75 0 010 1.5z" fill="#FFD43B"/>
      </svg>
    ),
    JavaScript: (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
        <text x="4" y="19" fontFamily="Arial Black,sans-serif" fontSize="13" fontWeight="900" fill="#000">JS</text>
      </svg>
    ),
    'JavaScript / TypeScript': (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="12" height="24" rx="3" fill="#F7DF1E"/>
        <rect x="12" width="12" height="24" rx="3" fill="#3178C6"/>
        <text x="2" y="18" fontFamily="Arial Black,sans-serif" fontSize="10" fontWeight="900" fill="#000">J</text>
        <text x="14" y="18" fontFamily="Arial Black,sans-serif" fontSize="10" fontWeight="900" fill="#fff">T</text>
      </svg>
    ),
    TypeScript: (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="3" fill="#3178C6"/>
        <text x="3" y="19" fontFamily="Arial Black,sans-serif" fontSize="13" fontWeight="900" fill="#fff">TS</text>
      </svg>
    ),
    'C': (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11" fill="#00599C"/>
        <text x="6" y="17.5" fontFamily="Arial Black,sans-serif" fontSize="15" fontWeight="900" fill="#fff">C</text>
      </svg>
    ),
    'Go': (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#00ADD8"/>
        <text x="2" y="18" fontFamily="Arial Black,sans-serif" fontSize="13" fontWeight="900" fill="#fff">Go</text>
      </svg>
    ),
    'Go (Golang)': (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#00ADD8"/>
        <text x="2" y="18" fontFamily="Arial Black,sans-serif" fontSize="13" fontWeight="900" fill="#fff">Go</text>
      </svg>
    ),
    'Bash & Shell': (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#293138"/>
        <text x="2" y="17" fontFamily="monospace" fontSize="11" fontWeight="bold" fill="#4EAA25">$_</text>
      </svg>
    ),
    'Bash': (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#293138"/>
        <text x="2" y="17" fontFamily="monospace" fontSize="11" fontWeight="bold" fill="#4EAA25">$_</text>
      </svg>
    ),
    HTML5: (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M3 2l1.68 18.4L12 22l7.32-1.6L21 2H3z" fill="#E34F26"/>
        <path d="M12 20.4l5.95-1.63L19.14 4H12v16.4z" fill="#EF652A"/>
      </svg>
    ),
    'HTML5 & Modern CSS3': (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M3 2l1.68 18.4L12 22l7.32-1.6L21 2H3z" fill="#E34F26"/>
        <path d="M12 20.4l5.95-1.63L19.14 4H12v16.4z" fill="#264de4"/>
      </svg>
    ),
    CSS3: (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M3 2l1.68 18.4L12 22l7.32-1.6L21 2H3z" fill="#1572B6"/>
        <path d="M12 20.4l5.95-1.63L19.14 4H12v16.4z" fill="#33A9DC"/>
      </svg>
    ),
    Django: (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#092E20"/>
        <text x="2" y="18" fontFamily="Arial Black,sans-serif" fontSize="12" fontWeight="900" fill="#44B78B">dj</text>
      </svg>
    ),
    React: (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
      </svg>
    ),
    'React & Tailwind CSS': (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="2.5" fill="#38BDF8"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#38BDF8" strokeWidth="1.2" fill="none"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#38BDF8" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
      </svg>
    ),
    'WebRTC & WebSockets': (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="6" cy="12" r="3" stroke="#10B981" strokeWidth="2"/>
        <circle cx="18" cy="12" r="3" stroke="#38BDF8" strokeWidth="2"/>
        <path d="M9 10c1.5-1.5 4.5-1.5 6 0M9 14c1.5 1.5 4.5 1.5 6 0" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    WebRTC: (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="6" cy="12" r="3" stroke="#10B981" strokeWidth="2"/>
        <circle cx="18" cy="12" r="3" stroke="#38BDF8" strokeWidth="2"/>
        <path d="M9 10c1.5-1.5 4.5-1.5 6 0M9 14c1.5 1.5 4.5 1.5 6 0" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    WebSockets: (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3v18M7 8l5-5 5 5M17 16l-5 5-5-5" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    PostgreSQL: (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#336791"/>
        <path d="M17.5 11c-.2-1.5-1-2.8-2.3-3.6-1.5-.9-3.4-1-5-.3C8.8 7.7 7.7 9 7.2 10.6c-.6 1.8-.4 3.7.5 5.3.8 1.3 2.1 2.2 3.6 2.5 1.5.3 3.1-.1 4.4-.9" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
        <path d="M12 10v4l2.5 1.5" stroke="#68B9E3" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="10" cy="11.5" r="1" fill="#68B9E3"/>
      </svg>
    ),
    MySQL: (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8 2 5 3.3 5 5v14c0 1.7 3 3 7 3s7-1.3 7-3V5c0-1.7-3-3-7-3z" fill="#005C84"/>
        <ellipse cx="12" cy="5" rx="7" ry="2.5" fill="#00758F"/>
        <path d="M5 9c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" stroke="#fff" strokeWidth="0.8" fill="none"/>
        <path d="M5 13c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" stroke="#fff" strokeWidth="0.8" fill="none"/>
      </svg>
    ),
    SQLite: (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8 2 5 3.3 5 5v14c0 1.7 3 3 7 3s7-1.3 7-3V5c0-1.7-3-3-7-3z" fill="#003B57"/>
        <ellipse cx="12" cy="5" rx="7" ry="2.5" fill="#0F80CC"/>
        <path d="M5 9c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" stroke="#53B0D8" strokeWidth="0.8" fill="none"/>
      </svg>
    ),
    'Debian Linux': (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11" fill="#A80030"/>
        <path d="M12 5.5c-3.6 0-6.5 2.9-6.5 6.5 0 2.4 1.3 4.5 3.3 5.6.3-.5.7-.9 1.2-1.2-1.3-.8-2.2-2.3-2.2-3.9 0-2.6 2.1-4.7 4.7-4.7 2.4 0 4.4 1.8 4.7 4.1.6.2 1.1.4 1.6.7C18.2 8.9 15.3 5.5 12 5.5z" fill="#fff"/>
      </svg>
    ),
    'Arch Linux': (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L4 20h4l1.5-4h5L16 20h4L12 2z" fill="#1793D1"/>
        <path d="M12 7l2.5 7h-5L12 7z" fill="#fff" opacity="0.8"/>
      </svg>
    ),
    '15+ Linux Distributions': (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11" fill="#2D3748"/>
        <ellipse cx="12" cy="9.5" rx="3.5" ry="4" fill="#FFD700"/>
        <circle cx="10.5" cy="8.5" r="0.7" fill="#1A202C"/>
        <circle cx="13.5" cy="8.5" r="0.7" fill="#1A202C"/>
        <path d="M10 11.5c.8.8 3.2.8 4 0" stroke="#1A202C" strokeWidth="0.8" fill="none"/>
        <path d="M9 13.5c-1.5 1-2 3-1.5 4.5M15 13.5c1.5 1 2 3 1.5 4.5" stroke="#FFD700" strokeWidth="1.2" fill="none"/>
      </svg>
    ),
    'Docker & Compose': (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M22.5 11.5a4 4 0 00-2.5-.5c-.3-2-1.8-3-3-3.5l-.5-.3-.3.5c-.3.6-.4 1.5-.4 2.1.1.5.3 1 .6 1.4a4.8 4.8 0 01-2.1.5H2.5A5 5 0 002 15c.3 2.6 2 4.5 4.5 5.5 2 .8 4.2.8 6.2 0 2-.9 3.5-2.4 4.3-4.5H17c1 0 2.3-.5 2.8-1.5.3-.5.5-1.2.7-2l.2-.8-.2-.2z" fill="#2496ED"/>
        <path d="M4 11.5h2V14H4zM7 11.5h2V14H7zM10 11.5h2V14h-2zM13 11.5h2V14h-2zM10 8.5h2v2.5h-2zM13 8.5h2v2.5h-2z" fill="#fff"/>
      </svg>
    ),
    Docker: (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M22.5 11.5a4 4 0 00-2.5-.5c-.3-2-1.8-3-3-3.5l-.5-.3-.3.5c-.3.6-.4 1.5-.4 2.1.1.5.3 1 .6 1.4a4.8 4.8 0 01-2.1.5H2.5A5 5 0 002 15c.3 2.6 2 4.5 4.5 5.5 2 .8 4.2.8 6.2 0 2-.9 3.5-2.4 4.3-4.5H17c1 0 2.3-.5 2.8-1.5.3-.5.5-1.2.7-2l.2-.8-.2-.2z" fill="#2496ED"/>
        <path d="M4 11.5h2V14H4zM7 11.5h2V14H7zM10 11.5h2V14h-2zM13 11.5h2V14h-2zM10 8.5h2v2.5h-2zM13 8.5h2v2.5h-2z" fill="#fff"/>
      </svg>
    ),
    'Coolify PaaS': (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#6366F1" strokeWidth="1.8"/>
        <path d="M8 12a4 4 0 004 4 4 4 0 004-4 4 4 0 00-4-4" stroke="#6366F1" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="1.8" fill="#6366F1"/>
      </svg>
    ),
    Coolify: (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#6366F1" strokeWidth="1.8"/>
        <path d="M8 12a4 4 0 004 4 4 4 0 004-4 4 4 0 00-4-4" stroke="#6366F1" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="1.8" fill="#6366F1"/>
      </svg>
    ),
    'Traefik & Reverse Proxies': (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="16" rx="3" stroke="#24A1C1" strokeWidth="1.8"/>
        <path d="M7 8h10M7 12h7M7 16h4" stroke="#24A1C1" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    'Git & GitHub': (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M22.65 11.4L12.6 1.35a1.2 1.2 0 00-1.7 0L8.8 3.45l2.15 2.15a1.42 1.42 0 011.8 1.82l2.07 2.07a1.42 1.42 0 11-.85.85L12 8.37v5.6a1.42 1.42 0 11-1.17-.04v-5.65a1.42 1.42 0 01-.77-1.86L7.93 4.3l-6.58 6.59a1.2 1.2 0 000 1.7l10.05 10.06a1.2 1.2 0 001.7 0l9.55-9.55a1.2 1.2 0 000-1.7z" fill="#F05032"/>
      </svg>
    ),
    'Local LLMs & Ollama': (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="4" stroke="#EC4899" strokeWidth="1.8"/>
        <circle cx="8.5" cy="9.5" r="1.5" fill="#EC4899"/>
        <circle cx="15.5" cy="9.5" r="1.5" fill="#EC4899"/>
        <path d="M8 15s1.5 2 4 2 4-2 4-2" stroke="#EC4899" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    'Speech & Audio Processing': (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="2" width="8" height="12" rx="4" stroke="#8B5CF6" strokeWidth="1.8"/>
        <path d="M4 10v2a8 8 0 0016 0v-2M12 20v2M8 22h8" stroke="#8B5CF6" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    Debian: (
      <svg viewBox="0 0 24 24" width={s} height={s} className={className} xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11" fill="#A80030"/>
        <path d="M12 5.5c-3.6 0-6.5 2.9-6.5 6.5 0 2.4 1.3 4.5 3.3 5.6.3-.5.7-.9 1.2-1.2-1.3-.8-2.2-2.3-2.2-3.9 0-2.6 2.1-4.7 4.7-4.7 2.4 0 4.4 1.8 4.7 4.1.6.2 1.1.4 1.6.7C18.2 8.9 15.3 5.5 12 5.5z" fill="#fff"/>
      </svg>
    ),
  };

  return icons[name] || (
    <svg viewBox="0 0 24 24" width={s} height={s} className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="rgba(56, 189, 248, 0.15)"/>
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="10"
        fontWeight="bold"
        fill="#38BDF8"
      >
        {name.slice(0, 2).toUpperCase()}
      </text>
    </svg>
  );
};
