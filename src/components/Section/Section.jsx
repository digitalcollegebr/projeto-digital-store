import './Section.css';

export const Section = ({ title, titleAlign = "left", link, children }) => {
  const isCentered = titleAlign === "center";

  return (
    <section className="section-container">
      {(title || link) && (
        <div className={`section-header ${isCentered ? "center" : ""}`}>
          {title && (
            <h2 className={`section-title ${isCentered ? "center" : ""}`}>
              {title}
            </h2>
          )}

          {link && (
            <a
              href={link.href}
              className={`section-link ${isCentered ? "absolute" : ""}`}
            >
              {link.text}
            </a>
          )}
        </div>
      )}

      <div>{children}</div>
    </section>
  );
};