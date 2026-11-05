import './Section.css'

function Section({ title, titleAlign="left", children, link }) {
    return (
        <section>
            <div className="containerTitle">
                <h2 className={`section-title ${titleAlign === "center" ? "section-title-column-2" : "section-title-column-1"}`}>{title}</h2>
                {link && <a className="link-title" href={link.href}>{link.text}</a>}
            </div>
            {children}
        </section>
    )
}

export default Section