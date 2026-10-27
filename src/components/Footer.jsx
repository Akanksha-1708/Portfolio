
import { Link } from 'react-router-dom';
import { profile } from '../data.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="footer-name">
            {profile.name}
          </Link>
          <p>{profile.tagline}</p>
        </div>

        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
          {profile.email && (
            <a href={`mailto:${profile.email}`}>
              Email <span aria-hidden="true">↗</span>
            </a>
          )}
          <Link to="/work">Projects <span aria-hidden="true">↗</span></Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <a href="#top" onClick={(event) => {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
