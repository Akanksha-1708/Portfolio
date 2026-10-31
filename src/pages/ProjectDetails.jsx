
import { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { projects } from '../data.js';

import repoAnalytics from '../assets/gitverse/repo_analytics.png';
import userAnalytics from '../assets/gitverse/user_analytics.png';
import userComparison from '../assets/gitverse/user_comparison.png';
import userRepo from '../assets/gitverse/user_repo.png';

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

  const gitverseScreenshots = [
    {
      image: repoAnalytics,
      title: 'Compare Repository Analytics',
      description:
        'Analyze and compare the repositories of two GitHub users side by side. Explore repository statistics, activity, and development insights to understand their project contributions.',
    },
    {
      image: userAnalytics,
      title: 'Explore GitHub Profile Analytics',
      description:
        'Get a detailed overview of a GitHub user’s profile, including contributions, followers, public repositories, and coding activity to understand their development journey.',
    },
    {
      image: userComparison,
      title: 'Compare GitHub Developers',
      description:
        'Compare two GitHub profiles in one place using key metrics such as followers, repositories, contributions, and programming activity to identify differences in their development profiles.',
    },
    {
      image: userRepo,
      title: 'Discover User Repositories',
      description:
        'Browse a GitHub user’s public repositories and explore project-level information, including repository details, programming languages, and other available statistics.',
    },
  ];

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

      {project.slug === 'gitverse' && (
        <section className="project-gallery project-detail-reveal">
          <p className="project-detail-label">03 / PROJECT PREVIEW</p>
          <h2>Explore GitVerse</h2>
          <p className="project-gallery-intro">
            A closer look at the different features and interfaces of GitVerse.
          </p>

          <div className="project-gallery-grid">
            {gitverseScreenshots.map((screenshot) => (
              <article className="project-gallery-item" key={screenshot.title}>
                <div className="project-gallery-image">
                  <img
                    src={screenshot.image}
                    alt={screenshot.title}
                    loading="lazy"
                  />
                </div>
                <h3>{screenshot.title}</h3>
                <p>{screenshot.description}</p>
              </article>
            ))}
          </div>
        </section>
      )}
    </section>
  );
}
