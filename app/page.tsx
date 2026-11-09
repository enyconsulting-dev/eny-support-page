import AnimatedBackground from "@/components/AnimatedBackground";
import SupportCard from "@/components/SupportCard";
import { helpTopics, site, team } from "@/data/team";

export default function SupportPage() {
  return (
    <>
      <AnimatedBackground />

      <main className="page">
        {/* ---------- top bar ---------- */}
        <header className="topbar">
          <div className="brand">
            <span className="brand__mark">E</span>
            <span className="brand__name">{site.brand}</span>
          </div>
          <span className="pill pill--live">
            <i /> Support online
          </span>
        </header>

        {/* ---------- hero ---------- */}
        <section className="hero">
          <p className="eyebrow">{site.eyebrow}</p>
          <h1>
            {site.headline}
            <br />
            <span className="grad">{site.headlineAccent}</span>
          </h1>
          <p className="sub">{site.subheadline}</p>

          <div className="meta">
            <span className="meta__item">
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              {site.availability}
            </span>
            <span className="meta__item">
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              </svg>
              {site.responseTime}
            </span>
          </div>
        </section>

        {/* ---------- team ---------- */}
        <section className="team" aria-label="Support team">
          <div className="team__grid" data-count={team.length}>
            {team.map((m, i) => (
              <SupportCard key={m.whatsapp + m.name} member={m} index={i} defaultMessage={site.defaultMessage} />
            ))}
          </div>
        </section>

        {/* ---------- what we help with ---------- */}
        <section className="help">
          <h2>What we can help you with</h2>
          <div className="help__grid">
            {helpTopics.map((t) => (
              <div className="help__item" key={t.title}>
                <span className="help__icon" aria-hidden="true">{t.icon}</span>
                <h4>{t.title}</h4>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- footer ---------- */}
        <footer className="footer">
          <p>
            © {new Date().getFullYear()} {site.brand}. All rights reserved.
            {site.website && (
              <>
                {" · "}
                <a href={site.website} target="_blank" rel="noopener noreferrer">
                  {site.websiteLabel}
                </a>
              </>
            )}
          </p>
          <p className="footer__note">
            We will never ask for your password or card PIN on WhatsApp. Only message the numbers listed on this page.
          </p>
        </footer>
      </main>
    </>
  );
}
