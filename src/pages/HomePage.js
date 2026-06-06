import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link } from "react-router-dom";

import {
  capabilities,
  credentials,
  experiences,
  heroHighlights,
  profile,
  projects,
} from "./content/profileData";
import {
  LogoMark,
  PillList,
  ProjectCard,
  SectionHeader,
} from "./components/PortfolioSections";

export default function HomePage() {
  const githubLink = profile.links.find((link) => link.label === "GitHub");
  const featuredProjects = projects.filter((project) =>
    [
      "LINE SHOPPING Incubation 2024",
      "Super AI Engineer Season 2 Gold Medal",
    ].includes(project.title)
  );
  const homeCredentials = credentials.filter(
    (item) =>
      ![
        "SCBX Thai-native AI patent work",
        "Super AI Engineer Season 2",
        "LINE SHOPPING Incubation 2024",
      ].includes(item.title)
  );
  const recentExperience = experiences.slice(0, 3);

  return (
    <div className="portfolio-page">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">{profile.current}</p>
          <h1>{profile.name}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-summary">{profile.headline}</p>
          <p className="hero-detail">{profile.summary}</p>
          <div className="cta-row">
            <a
              className="button button-primary"
              href={profile.resumeUrl}
              rel="noreferrer"
              target="_blank"
            >
              <DownloadIcon fontSize="small" />
              Download resume
            </a>
            <a className="button button-secondary" href={`mailto:${profile.email}`}>
              <MailOutlineIcon fontSize="small" />
              Contact
            </a>
            {githubLink && (
              <a
                className="button button-secondary"
                href={githubLink.href}
                rel="noreferrer"
                target="_blank"
              >
                <GitHubIcon fontSize="small" />
                GitHub
              </a>
            )}
            <Link className="button button-ghost" to="/projects">
              View projects
              <ArrowForwardIcon fontSize="small" />
            </Link>
          </div>
        </div>

        <aside className="profile-panel" aria-label="Profile overview">
          <img
            src={profile.image}
            alt={`${profile.name} profile`}
            style={{ objectPosition: profile.imagePosition }}
          />
          <div>
            <p className="panel-label">Based in</p>
            <p>{profile.location}</p>
          </div>
          <div>
            <p className="panel-label">Focus</p>
            <p>LLM, Speech AI, Cloud, MLOps</p>
          </div>
          <div>
            <p className="panel-label">Languages</p>
            <p>{profile.languages}</p>
          </div>
        </aside>
      </section>

      <section className="highlight-band" aria-labelledby="selected-highlights-title">
        <div className="section-header">
          <p className="eyebrow">Selected highlights</p>
          <h2 id="selected-highlights-title">
            AI systems, product awards, and national AI recognition
          </h2>
        </div>

        <div className="highlight-grid">
          {heroHighlights.map((item) => (
            <Link
              className="highlight-card"
              key={item.title}
              to={{ pathname: item.link, hash: `#${item.targetId}` }}
            >
              <LogoMark
                label={item.label}
                logo={item.logo}
                logoText={item.label}
                logoVariant={item.logoVariant}
                size="small"
              />
              <div className="highlight-copy">
                <p className="highlight-label">{item.label}</p>
                <h3>{item.title}</h3>
              </div>
              <span className="highlight-meta">{item.meta}</span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Capabilities"
          title="AI systems from prototype to production deployment"
          description="Capability across model integration, backend services, product surfaces, cloud deployment, CI/CD, Kubernetes, and training workflows."
        />
        <div className="capability-grid">
          {capabilities.map((group) => (
            <article className="capability-card" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <PillList items={group.skills} />
            </article>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div>
          <SectionHeader
            eyebrow="Recent experience"
            title="Latest roles"
            description="The most relevant professional work for senior AI engineering roles."
          />
          <div className="timeline-list">
            {recentExperience.map((item) => (
              <article className="timeline-item" key={`${item.company}-${item.period}`}>
                <LogoMark
                  label={item.company}
                  logo={item.logo}
                  logoText={item.logoText}
                  size="small"
                />
                <div>
                  <p className="period">{item.period}</p>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <p>{item.summary}</p>
                  <PillList items={item.tags.slice(0, 5)} />
                </div>
              </article>
            ))}
          </div>
          <Link className="text-link" to="/experience">
            View full experience
            <ArrowForwardIcon fontSize="small" />
          </Link>
        </div>

        <div>
          <SectionHeader
            eyebrow="Education"
            title="Academic foundation"
            description="Formal engineering background kept short so the work highlights stay first."
          />
          <div className="credential-list">
            {homeCredentials.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <SectionHeader
          eyebrow="Featured projects"
          title="Awards and practical AI work"
          description="Two public highlights that show applied AI delivery, competition experience, and product-oriented thinking."
        />
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
        <Link className="text-link" to="/projects">
          See all projects
          <ArrowForwardIcon fontSize="small" />
        </Link>
      </section>

      <section className="contact-strip">
        <div>
          <p className="eyebrow">Open to applied AI engineering conversations</p>
          <h2>Happy to discuss practical AI systems, deployment, and product-focused ML work.</h2>
        </div>
        <a className="button button-primary" href={`mailto:${profile.email}`}>
          <MailOutlineIcon fontSize="small" />
          {profile.email}
        </a>
      </section>
    </div>
  );
}
