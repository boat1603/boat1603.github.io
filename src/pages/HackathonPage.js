import { ProjectCard, SectionHeader } from "./components/PortfolioSections";
import { hackathonExperiences } from "./content/profileData";

export default function HackathonPage() {
  return (
    <div className="portfolio-page">
      <section className="page-intro">
        <p className="eyebrow">Hackathon Experience</p>
        <h1>Competition work across AI domains</h1>
        <p>
          A modern archive of hackathon experience from the old portfolio,
          focused on visible artifacts, practical tasks, and the range of AI
          problems tackled under time pressure.
        </p>
      </section>

      <section className="section-band">
        <SectionHeader
          eyebrow="Archive"
          title="Hackathons and AI competitions"
          description="Each card keeps the old project context, but presents it in the same visual language as the redesigned portfolio."
        />
        <div className="project-grid project-grid-archive">
          {hackathonExperiences.map((experience) => (
            <ProjectCard project={experience} key={experience.title} />
          ))}
        </div>
      </section>
    </div>
  );
}
