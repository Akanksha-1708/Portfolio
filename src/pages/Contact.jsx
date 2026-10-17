
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { profile } from '../data.js';

export default function Contact() {
  const pageRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      '.contact-reveal',
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
  }, { scope: pageRef });

  return (
    <main className="contact-page" ref={pageRef}>
      <section className="contact-hero">
        <p className="contact-kicker contact-reveal">
          CONTACT · LET'S CONNECT
        </p>

        <h1 className="contact-title contact-reveal">
          Have an idea? <span>Let's talk.</span>
        </h1>

        <p className="contact-intro contact-reveal">
          I'm interested in AI, machine learning, and software
          engineering opportunities. If you'd like to connect,
          discuss a project, or talk about an opportunity, feel
          free to reach out.
        </p>

        <a
          className="contact-email contact-reveal"
          href={`mailto:${profile.email}`}
        >
          {profile.email}
          <span aria-hidden="true"> ↗</span>
        </a>

        <div className="contact-links contact-reveal">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <Link to="/work">Explore my work ↗</Link>
        </div>
      </section>
    </main>
  );
}
