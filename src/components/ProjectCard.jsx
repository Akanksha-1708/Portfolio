
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function ProjectCard({ p, hidden = false }) {
  const ref = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(
      '(hover: hover) and (prefers-reduced-motion: no-preference)',
      () => {
        const el = ref.current;
        const inner = el.querySelector('.card-inner');
        const mono = el.querySelector('.mono');

        gsap.set(inner, { transformPerspective: 900 });

        const rx = gsap.quickTo(inner, 'rotationX', {
          duration: 0.5,
          ease: 'power3',
        });
        const ry = gsap.quickTo(inner, 'rotationY', {
          duration: 0.5,
          ease: 'power3',
        });
        const mx = gsap.quickTo(mono, 'x', {
          duration: 0.6,
          ease: 'power3',
        });
        const my = gsap.quickTo(mono, 'y', {
          duration: 0.6,
          ease: 'power3',
        });

        const move = (e) => {
          const r = el.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;

          ry(px * 9);
          rx(-py * 9);
          mx(-px * 36);
          my(-py * 36);

          el.style.setProperty('--mx', `${(px + 0.5) * 100}%`);
          el.style.setProperty('--my', `${(py + 0.5) * 100}%`);
        };

        const leave = () => {
          rx(0);
          ry(0);
          mx(0);
          my(0);
        };

        el.addEventListener('pointermove', move);
        el.addEventListener('pointerleave', leave);

        return () => {
          el.removeEventListener('pointermove', move);
          el.removeEventListener('pointerleave', leave);
        };
      }
    );

    return () => mm.revert();
  }, { scope: ref });

  return (
    <Link
      ref={ref}
      to={`/work/${p.slug}`}
      className={`card${hidden ? ' is-hidden' : ''}`}
      data-c={p.category}
      aria-label={`View project: ${p.title}`}
    >
      <div className="card-inner">
        <div className="cover" aria-hidden="true">
          <span className="mono">{p.title[0].toLowerCase()}</span>
        </div>

        <div className="card-body">
          <div className="card-meta">
            <span>{p.category}</span>
            <span>{p.year}</span>
          </div>

          <h3>{p.title}</h3>
          <p>{p.blurb}</p>
          <p className="stack">{p.stack.join(', ')}</p>
        </div>
      </div>
    </Link>
  );
}
