// Shows a screenshot inside a simple browser window, with the real address
// of the live demo in the address bar.
function BrowserFrame({ src, alt, url, size = 'large' }) {
  let host = '';
  try {
    host = url ? new URL(url).host : '';
  } catch {
    host = '';
  }

  return (
    <figure className={`browser browser-${size}`}>
      <div className="browser-bar" aria-hidden="true">
        <span className="browser-dots">
          <i />
          <i />
          <i />
        </span>
        {host && <span className="browser-url">{host}</span>}
      </div>
      <img src={src} alt={alt} loading="lazy" />
    </figure>
  );
}

export default BrowserFrame;
