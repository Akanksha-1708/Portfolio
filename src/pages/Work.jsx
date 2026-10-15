
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { projects } from '../data.js';
import ProjectCard from '../components/ProjectCard.jsx';

export default function Work() {
  const pageRef = useRef(null);

  useGSAP(
    () => {
      const elements = gsap.utils.toArray(
        '.work-reveal',
        pageRef.current
      );

      gsap.fromTo(
        elements,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          clearProps: 'transform',
        }
      );
    },
    { scope: pageRef }
  );

  return (
    <main className="work-page" ref={pageRef}>
      <section className="work-hero">
        <p className="work-eyebrow work-reveal">
          SELECTED WORK · 2026
        </p>

        <h1 className="work-title work-reveal">
          Projects <span>&amp; Experiments.</span>
        </h1>

        <p className="work-intro work-reveal">
          A collection of things I've built while exploring web development,
          artificial intelligence, and software engineering.
        </p>

        <div className="work-hero-bottom work-reveal">
          <span>{String(projects.length).padStart(2, '0')} PROJECTS</span>
          <span>WEB DEVELOPMENT</span>
          <span>ARTIFICIAL INTELLIGENCE</span>
        </div>
      </section>

      <section className="work-projects">
        <div className="work-grid">
          {projects.map((project, index) => (
            <div
              className="work-card-reveal"
              key={project.id}
              data-index={index}
            >
              <ProjectCard p={project} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
