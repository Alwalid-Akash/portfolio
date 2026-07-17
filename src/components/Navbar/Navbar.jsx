import { useState } from 'react';

const NAV_LINKS = [
  { href: '#about', label: 'about' },
  { href: '#skills', label: 'skills' },
  { href: '#projects', label: 'projects' },
  { href: '#contact', label: 'contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="site-nav navbar navbar-expand-md fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#top">
          MD AL Walid<span className="brand-dot">.dev</span>
        </a>

        <button
          className="navbar-toggler border-0 text-light"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${open ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-md-center">
            {NAV_LINKS.map((link) => (
              <li className="nav-item" key={link.href}>
                <a
                  className="nav-link"
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-item ms-md-2">
              <a
                className="btn btn-signature btn-sm"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
