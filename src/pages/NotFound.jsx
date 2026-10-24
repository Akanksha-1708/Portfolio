import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function NotFound() {
  const pageRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      '.not-found-reveal',
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
    <main className="not-found-page" ref={pageRef}>
      <p className="not-found-code not-found-reveal">ERROR · 404</p>
      <h1 className="not-found-title not-found-reveal">
        Lost in <span>space?</span>
      </h1>
      <p className="not-found-description not-found-reveal">
        Looks like you've wandered into an unknown corner of the
        internet. Let's get you back on track.
      </p>
      <div className="not-found-actions not-found-reveal">
        <Link to="/" className="not-found-button">Back to Home ↗</Link>
        <Link to="/work" className="not-found-secondary">Explore Projects</Link>
      </div>
    </main>
  );
}