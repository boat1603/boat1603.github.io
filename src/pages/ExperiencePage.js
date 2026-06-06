import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { experiences } from "./content/profileData";
import {
  LogoMark,
  PillList,
  ProjectMedia,
  SectionHeader,
} from "./components/PortfolioSections";

export default function ExperiencePage() {
  useHashScroll();

  return (
    <div className="portfolio-page">
      <section className="page-intro">
        <p className="eyebrow">Experience</p>
        <h1>AI systems from prototype to production deployment</h1>
        <p>
          A deeper view than the resume: role scope, workstreams, stack,
          outcomes, and visual artifacts where the work can be shown publicly.
        </p>
      </section>

      <section>
        <SectionHeader
          eyebrow="Work detail"
          title="More detail than a resume, still public-safe"
          description="Current banking work is summarized at the capability and scope level. Older work includes more visual demos because the assets are public and less sensitive."
        />
        <div className="experience-detail-list">
          {experiences.map((item) => (
            <ExperienceSection
              id={
                item.company === "SCBX Public Company Limited"
                  ? "experience-scbx-highlight"
                  : undefined
              }
              item={item}
              key={`${item.company}-${item.period}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function ExperienceSection({ item, id }) {
  return (
    <article className="experience-detail-card" id={id}>
      <header className="experience-detail-header">
        <LogoMark
          label={item.company}
          logo={item.logo}
          logoText={item.logoText}
        />
        <div>
          <p className="eyebrow">{item.company}</p>
          <h2>{item.role}</h2>
          <div className="experience-meta-row">
            <span>{item.period}</span>
            <span>{item.location}</span>
          </div>
        </div>
      </header>

      <div className="experience-detail-grid">
        <div className="experience-detail-main">
          <p className="experience-summary">{item.summary}</p>
          {item.overview && <p>{item.overview}</p>}

          <DetailBlock title="Role scope" items={item.responsibilities} />
          <DetailBlock title="Systems / workstreams" items={item.systems} />
        </div>

        <aside className="experience-detail-aside">
          <div className="outcome-panel">
            <h3>Outcomes / context</h3>
            <ul>
              {item.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </div>

          <div className="stack-panel">
            <h3>Stack</h3>
            <PillList items={item.stack || item.tags} />
          </div>

          {item.references && (
            <div className="reference-list">
              {item.references.map((reference) => (
                <a
                  href={reference.href}
                  key={reference.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {reference.label}
                </a>
              ))}
            </div>
          )}
        </aside>
      </div>

      {item.visuals && (
        <div className="experience-visuals">
          <h3>Related visuals</h3>
          <ProjectMedia
            project={{ title: item.company, gallery: item.visuals }}
          />
        </div>
      )}
    </article>
  );
}

function useHashScroll() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      return undefined;
    }

    const targetId = decodeURIComponent(hash.replace("#", ""));
    const timeoutId = window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 120);

    return () => window.clearTimeout(timeoutId);
  }, [hash]);
}

function DetailBlock({ title, items }) {
  if (!items || !items.length) {
    return null;
  }

  return (
    <section className="detail-block">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
