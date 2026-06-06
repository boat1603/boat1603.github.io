import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { hackathonExperiences, projects } from "./content/profileData";
import {
  LogoMark,
  PillList,
  ProjectCard,
  ProjectMedia,
  SectionHeader,
} from "./components/PortfolioSections";

const featuredProjectTargetIds = {
  "LINE SHOPPING Incubation 2024": "project-line-shopping-highlight",
  "Super AI Engineer Season 2 Gold Medal": "project-superai-highlight",
};

export default function ProjectsPage() {
  useHashScroll();

  const featured = projects.filter((project) => project.featured);
  const archive = projects.filter((project) => !project.featured);

  return (
    <div className="portfolio-page">
      <section className="page-intro">
        <p className="eyebrow">Projects</p>
        <h1>Open-source, awards, hackathons, and technical projects</h1>
        <p>
          Work from employers lives in Experience. This page focuses on visible
          artifacts outside day-to-day roles: open-source AI, incubations,
          competitions, hackathons, and independent technical experiments.
        </p>
      </section>

      <section>
        <SectionHeader
          eyebrow="Featured work"
          title="Selected public work"
          description="These items are framed around role, outcome, stack, and visible artifacts without repeating employer work."
        />
        <div className="case-study-list">
          {featured.map((project) => (
            <CaseStudy
              id={featuredProjectTargetIds[project.title]}
              project={project}
              key={project.title}
            />
          ))}
        </div>
      </section>

      <section className="section-band">
        <SectionHeader
          eyebrow="Visual project archive"
          title="Independent and incubation work with real visuals"
          description="Kept compact, but with enough context and screenshots to show what the work looked like."
        />
        <div className="project-grid project-grid-archive">
          {archive.map((project) => (
            <ProjectCard compact project={project} key={project.title} />
          ))}
        </div>
      </section>

      <section className="section-band" id="hackathon">
        <SectionHeader
          eyebrow="Hackathon Experience"
          title="Competition work across AI domains"
          description="A compact archive of hackathon experience, restored from the old portfolio and restyled to match the current site."
        />
        <div className="project-grid project-grid-archive">
          {hackathonExperiences.map((experience) => (
            <ProjectCard compact project={experience} key={experience.title} />
          ))}
        </div>
      </section>
    </div>
  );
}

function CaseStudy({ project, id }) {
  const hasMedia = project.image || project.gallery;

  return (
    <article
      className={hasMedia ? "case-study" : "case-study case-study-no-media"}
      id={id}
    >
      <div className="case-study-copy">
        <div className="case-study-title-row">
          <LogoMark
            label={project.title}
            logo={project.logo}
            logoVariant={project.logoVariant}
            logoText={project.logoText}
          />
          <div>
            <div className="project-card-header">
              <span className="project-type">{project.type}</span>
              <span>{project.period}</span>
            </div>
            <h2>{project.title}</h2>
            <p className="case-role">{project.role}</p>
          </div>
        </div>

        <p className="project-impact">{project.impact}</p>
        <p>{project.description}</p>

        {project.details && (
          <ul className="detail-list">
            {project.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        )}

        <PillList items={project.stack} />

        {project.references && (
          <div className="reference-list">
            {project.references.map((reference) => (
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
      </div>

      <ProjectMedia project={project} />
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
