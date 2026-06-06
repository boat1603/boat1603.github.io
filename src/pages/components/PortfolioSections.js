export function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function PillList({ items }) {
  return (
    <div className="pill-list">
      {items.map((item) => (
        <span className="pill" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}

export function LogoMark({
  logo,
  logoText,
  label,
  logoVariant = "square",
  size = "default",
}) {
  const className = [
    "logo-mark",
    size === "small" && "logo-mark-small",
    logoVariant === "wide" && "logo-mark-wide",
    logoVariant === "emblem" && "logo-mark-emblem",
    logoVariant === "full" && "logo-mark-full",
  ]
    .filter(Boolean)
    .join(" ");

  if (logo) {
    return (
      <span className={className}>
        <img src={logo} alt={`${label} logo`} />
      </span>
    );
  }

  return (
    <span className={`${className} logo-mark-text`} aria-label={`${label} logo`}>
      {logoText || getInitials(label)}
    </span>
  );
}

export function ProjectMedia({ project, compact = false }) {
  const media = getProjectMedia(project);

  if (!media.length) {
    return null;
  }

  const visibleMedia = compact ? media.slice(0, 1) : media.slice(0, 6);

  return (
    <div className={compact ? "project-media project-media-compact" : "project-media"}>
      {visibleMedia.map((item) => {
        if (item.type === "audio") {
          return (
            <figure className="media-audio" key={item.src}>
              <figcaption>{item.label}</figcaption>
              <audio controls src={item.src}>
                {item.label}
              </audio>
            </figure>
          );
        }

        return (
          <figure className="media-image" key={item.src}>
            <img src={item.src} alt={item.alt} loading="lazy" />
            {item.label && <figcaption>{item.label}</figcaption>}
          </figure>
        );
      })}
    </div>
  );
}

export function ProjectCard({ project, compact = false, id }) {
  return (
    <article
      className={compact ? "project-card project-card-compact" : "project-card"}
      id={id}
    >
      <ProjectMedia compact project={project} />
      <div className="project-card-title-row">
        <LogoMark
          label={project.title}
          logo={project.logo}
          logoVariant={project.logoVariant}
          logoText={project.logoText}
          size="small"
        />
        <div>
          <div className="project-card-header">
            <span className="project-type">{project.type}</span>
            <span>{project.period}</span>
          </div>
          <h3>{project.title}</h3>
        </div>
      </div>
      <p className="project-impact">{project.impact}</p>
      {!compact && <p>{project.description}</p>}
      {!compact && project.details && (
        <ul className="detail-list">
          {project.details.slice(0, 3).map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      )}
      <PillList items={project.stack.slice(0, compact ? 4 : 6)} />
      {project.references && (
        <div className="reference-list">
          {project.references.slice(0, compact ? 1 : 3).map((reference) => (
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
    </article>
  );
}

function getProjectMedia(project) {
  if (project.gallery) {
    return project.gallery.map((item) => ({
      type: item.type || "image",
      src: item.src,
      alt: item.alt || `${project.title} visual`,
      label: item.label,
    }));
  }

  if (project.image) {
    return [
      {
        type: "image",
        src: project.image,
        alt: project.imageAlt || `${project.title} visual`,
        label: project.visualLabel,
      },
    ];
  }

  return [];
}

function getInitials(label = "") {
  const words = label
    .replace(/[^a-zA-Z0-9 ]/g, " ")
    .split(" ")
    .filter(Boolean);

  return words
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}
