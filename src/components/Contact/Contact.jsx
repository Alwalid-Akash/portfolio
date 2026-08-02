const CONTACT_LINKS = [
  { label: 'alwalidakash@gmail.com', href: 'mailto:alwalidakash@gmail.com', icon: '✉' },
  { label: 'github.com/Alwalid-Akash', href: 'https://github.com/Alwalid-Akash', icon: '⌥' },
  { label: 'linkedin.com/in/Md Al Walid', href: 'https://linkedin.com/in/md-alwalid', icon: 'in' },
];

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-card">
          <p className="eyebrow">04 — contact</p>
          <h2 className="section-title">Let's work together</h2>
          <p className="about-body mb-4">
            I'm currently looking for a junior developer role. Reach out — I
            reply quickly.
          </p>

          <div className="row g-3">
            {CONTACT_LINKS.map((link) => (
              <div className="col-md-4" key={link.href}>
                <a
                  className="contact-link"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{link.icon}</span>
                  {link.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
