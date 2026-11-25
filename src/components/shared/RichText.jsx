// Renders a string where `backticks` mark code, e.g. tool or route names.
function RichText({ text }) {
  const parts = text.split('`');
  return parts.map((part, i) =>
    i % 2 === 1 ? <code key={i}>{part}</code> : <span key={i}>{part}</span>,
  );
}

export default RichText;
