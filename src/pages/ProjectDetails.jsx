
import { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { projects } from '../data.js';

export default function ProjectDetails() {
  const { slug } = useParams();
  const pageRef = useRef(null);
  const project = projects.find((item) => item.slug === slug);

  useGSAP(
    () => {
      gsap.fromTo(
        '.project-detail-reveal',
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          clearProps: 'transform',
        }
      );
    },
    { scope: pageRef, dependencies: [slug] }
  );

  if (!project) {
    return (
      <section className="page project-not-found">
        <p className="project-detail-kicker">PROJECT NOT FOUND</p>
        <h1>Looks like this page doesn't exist.</h1>
        <Link to="/work" className="project-back-link">
          ← Back to all projects
        </Link>
      </section>
    );
  }

  const hasRealUrl = (url) =>
    typeof url === 'string' &&
    url.startsWith('https://') &&
    !url.includes('ADD_');

  return (
    <section className="project-detail-page" ref={pageRef}>
      <div className="project-detail-hero">
        <Link to="/work" className="project-back-link project-detail-reveal">
          ← Back to all projects
        </Link>

        <p className="project-detail-kicker project-detail-reveal">
          {project.category} · {project.year}
        </p>

        <h1 className="project-detail-title project-detail-reveal">
          {project.title}
        </h1>

        <p className="project-detail-description project-detail-reveal">
          {project.blurb}
        </p>

        <div className="project-detail-actions project-detail-reveal">
          {hasRealUrl(project.github) && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-detail-button"
            >
              View source <span aria-hidden="true">↗</span>
            </a>
          )}

          {hasRealUrl(project.url) && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="project-detail-button project-detail-button-secondary"
            >
              Live demo <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>

      <div className="project-detail-content">
        <section className="project-detail-section project-detail-reveal">
          <p className="project-detail-label">01 / OVERVIEW</p>
          <h2>About the project</h2>
          <p>{project.blurb}</p>
        </section>

        <section className="project-detail-section project-detail-reveal">
          <p className="project-detail-label">02 / TECHNOLOGIES</p>
          <h2>Built with</h2>
          <div className="project-detail-stack">
            {project.stack.map((technology) => (
              <span className="project-detail-tag" key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
