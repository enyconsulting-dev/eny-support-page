"use client";

import { useRef, useState } from "react";
import type { TeamMember } from "@/data/team";
import { waLink } from "@/data/team";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" width="20" height="20" aria-hidden="true" fill="currentColor">
      <path d="M16.04 3C8.84 3 3 8.83 3 16.02c0 2.3.6 4.54 1.74 6.52L3 29l6.62-1.7a13 13 0 0 0 6.42 1.64h.01C23.24 28.94 29 23.2 29 16.01 29 8.83 23.24 3 16.04 3Zm0 23.7h-.01a10.8 10.8 0 0 1-5.5-1.5l-.4-.23-3.93 1.01 1.05-3.83-.26-.4a10.7 10.7 0 0 1-1.65-5.74c0-5.95 4.86-10.8 10.83-10.8 2.9 0 5.6 1.12 7.65 3.17a10.72 10.72 0 0 1 3.17 7.64c0 5.96-4.87 10.68-10.95 10.68Zm5.95-8.1c-.33-.16-1.93-.95-2.23-1.06-.3-.11-.52-.16-.74.16-.22.33-.85 1.06-1.04 1.28-.19.22-.38.25-.7.08-.33-.16-1.38-.51-2.62-1.62a9.8 9.8 0 0 1-1.81-2.25c-.19-.33 0-.5.14-.67.15-.15.33-.38.5-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.14 1.11-1.14 2.7s1.17 3.13 1.33 3.35c.16.22 2.3 3.5 5.57 4.91.78.34 1.38.54 1.86.69.78.25 1.49.21 2.05.13.63-.09 1.93-.79 2.2-1.55.27-.76.27-1.41.19-1.55-.08-.14-.3-.22-.63-.38Z" />
    </svg>
  );
}

export default function SupportCard({
  member,
  index,
  defaultMessage,
}: {
  member: TeamMember;
  index: number;
  defaultMessage: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [imgOk, setImgOk] = useState(Boolean(member.image));

  // subtle 3D tilt + moving highlight following the cursor
  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
    el.style.setProperty("--rx", `${(0.5 - y) * 7}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * 9}deg`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  const href = waLink(member.whatsapp, member.message ?? defaultMessage);

  return (
    <article
      ref={ref}
      className="card"
      style={{ animationDelay: `${0.15 + index * 0.1}s` }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <div className="card__glow" />
      <div className="card__inner">
        <div className="avatar">
          <div className="avatar__ring" />
          <div className="avatar__img">
            {imgOk && member.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={member.image}
                alt={`${member.name}, ${member.role}`}
                loading="lazy"
                onError={() => setImgOk(false)}
              />
            ) : (
              <span className="avatar__initials">{initials(member.name)}</span>
            )}
          </div>
          <span className="avatar__status" title="Available">
            <i />
          </span>
        </div>

        <h3 className="card__name">{member.name}</h3>
        <p className="card__role">{member.role}</p>
        <p className="card__blurb">{member.blurb}</p>

        {member.tags && member.tags.length > 0 && (
          <ul className="card__tags">
            {member.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}

        <a
          className="cta"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat with ${member.name} on WhatsApp`}
        >
          <WhatsAppIcon />
          <span>Chat on WhatsApp</span>
          <svg className="cta__arrow" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        {member.email && (
          <a className="card__email" href={`mailto:${member.email}`}>
            {member.email}
          </a>
        )}
      </div>
    </article>
  );
}
