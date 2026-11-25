import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu with the Escape key
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  // Highlight the link of the section currently in the middle of the screen
  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Show a border under the nav once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`site-nav ${scrolled ? 'is-scrolled' : ''}`} aria-label="Main">
      <div className="container nav-inner">
        <a className="nav-brand" href="#top">
          <span className="nav-mark" aria-hidden="true">
            MW
          </span>
          Md Al Walid
        </a>

        <button
          className="nav-toggle d-md-none"
          type="button"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <ul id="nav-links" className={`nav-links ${open ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={active === link.id ? 'is-active' : ''}
                aria-current={active === link.id ? 'true' : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a className="btn-primary-solid btn-small" href="/Md_Al_Walid_CV.pdf" target="_blank" rel="noreferrer">
              CV (PDF)
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
