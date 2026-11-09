/**
 * Pure-CSS animated backdrop (no JS, no layout cost):
 * drifting gradient orbs + masked grid + floating particles + grain.
 * Honors prefers-reduced-motion (see globals.css).
 */
const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  size: 2 + ((i * 7) % 4),
  delay: -((i * 3.7) % 24),
  duration: 18 + ((i * 5) % 16),
  opacity: 0.25 + ((i * 13) % 50) / 100,
}));

export default function AnimatedBackground() {
  return (
    <div className="bg" aria-hidden="true">
      <div className="bg__base" />
      <div className="bg__orb bg__orb--a" />
      <div className="bg__orb bg__orb--b" />
      <div className="bg__orb bg__orb--c" />
      <div className="bg__orb bg__orb--d" />
      <div className="bg__grid" />
      <div className="bg__beam" />
      <div className="bg__particles">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            style={{
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>
      <div className="bg__vignette" />
    </div>
  );
}
