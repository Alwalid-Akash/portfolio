function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container d-flex flex-column flex-sm-row justify-content-between gap-2">
        <span>© {year} Md Al Walid.dev — built with React &amp; Bootstrap</span>
        <span>deployed via Vercel</span>
      </div>
    </footer>
  );
}

export default Footer;
