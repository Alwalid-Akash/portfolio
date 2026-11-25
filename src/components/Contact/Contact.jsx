import { useEffect, useState } from 'react';

const EMAIL = 'alwalidakash@gmail.com';

function Contact() {
  // 'idle' | 'copied' | 'failed'
  const [copyState, setCopyState] = useState('idle');

  // Reset the button label after 2 seconds, and clean up if the component unmounts
  useEffect(() => {
    if (copyState === 'idle') return undefined;
    const timer = setTimeout(() => setCopyState('idle'), 2000);
    return () => clearTimeout(timer);
  }, [copyState]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopyState('copied');
    } catch {
      setCopyState('failed');
    }
  };

  const buttonLabel = { idle: 'Copy email', copied: 'Copied', failed: 'Copy failed' }[copyState];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2>Contact</h2>
        <p className="contact-lede">
          Hiring a working student or intern? Send me an email and I’ll get back to you quickly.
        </p>

        <div className="contact-email">
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <button type="button" className="btn-quiet btn-small" onClick={copyEmail}>
            {buttonLabel}
          </button>
          <span className="visually-hidden" aria-live="polite">
            {copyState === 'copied' ? 'Email address copied' : ''}
            {copyState === 'failed' ? 'Could not copy. Select the address to copy it.' : ''}
          </span>
        </div>

        <ul className="contact-links">
          <li>
            <a href="https://github.com/Alwalid-Akash" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/md-alwalid" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="/Md_Al_Walid_CV.pdf" target="_blank" rel="noreferrer">
              CV (PDF)
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
