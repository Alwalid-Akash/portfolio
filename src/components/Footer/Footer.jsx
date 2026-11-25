function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>© {year} Md Al Walid</span>
        <span>
          Built with React, Vite and Bootstrap.{' '}
          <a href="https://github.com/Alwalid-Akash/Portfolio" target="_blank" rel="noreferrer">
            Source on GitHub
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
