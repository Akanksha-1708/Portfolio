
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const skills = [
  'C++',
  'JavaScript',
  'React',
  'Python',
  'Git & GitHub',
  'Generative AI',
  'LangChain',
  'LangGraph',
];

const education = [
  {
    period: '2024 — Present',
    title: 'Bachelor of Technology',
    detail: 'Computer Science and Engineering',
  },
];

export default function About() {
  const pageRef = useRef(null);

  useGSAP(
    () => {
      const elements = gsap.utils.toArray('.about-reveal', pageRef.current);

      gsap.fromTo(
        elements,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          clearProps: 'transform',
        }
      );
    },
    { scope: pageRef }
  );

  return (
    <main className="about-page" ref={pageRef}>
      <section className="about-hero">
        <p className="about-kicker about-reveal">A LITTLE ABOUT ME</p>

        <h1 className="about-heading about-reveal">
          Curious by nature.
          <br />
          <span>Builder by choice.</span>
        </h1>

        <p className="about-intro about-reveal">
          I'm a computer science student interested in web development,
          artificial intelligence, and building useful software. I enjoy
          exploring new technologies and turning ideas into practical projects.
        </p>

        <div className="about-hero-bottom about-reveal">
          <span>COMPUTER SCIENCE</span>
          <span>WEB DEVELOPMENT</span>
          <span>GENERATIVE AI</span>
        </div>
      </section>

      <section className="sec about-section">
        <h2>My toolbox</h2>
        <div>
          <p className="about-section-lead">
            Technologies I'm exploring through hands-on learning and projects.
          </p>

          <ul className="tools about-skills">
            {skills.map((skill, index) => (
              <li
                className="about-skill"
                key={skill}
                style={{ '--skill-index': index }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec about-section">
        <h2>Education</h2>
        <div>
          <p className="about-section-lead">
            Building my foundation in computer science and software development.
          </p>

          <ol className="timeline about-timeline">
            {education.map((item) => (
              <li className="tl-item" key={item.title}>
                <span className="tl-when">{item.period}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
