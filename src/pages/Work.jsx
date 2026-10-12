import { projects } from '../data.js';
import ProjectCard from '../components/ProjectCard.jsx';

export default function Work() {
  return (
    <main className="work-page">
      <section className="sec work-section">
        <div className="work-header">
          <p className="work-eyebrow">SELECTED WORK · 2026</p>
          <div>
            <h1 className="work-title">Projects &amp; Experiments</h1>
            <p className="work-intro">
              A collection of things I've built while exploring web
              development, artificial intelligence, and software engineering.
            </p>
          </div>
        </div>

        <div className="grid work-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} p={project} />
          ))}
        </div>
      </section>
    </main>
  );
}