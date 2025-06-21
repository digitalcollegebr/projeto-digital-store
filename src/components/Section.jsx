import React from "react";
import { Link } from "react-router-dom";


const Section = ({ title, titleAlign = "left", link, children }) => (
  <section className="mb-8">
    <div
      className={`flex items-center ${
        title && link
          ? "justify-between"
          : titleAlign === "center"
          ? "justify-center"
          : "justify-start"
      }`}
    >
      <h2
        className={`text-dark-gray-2 text-2xl font-bold mb-4 ${
          titleAlign === "center" && !link ? "text-center w-full" : ""
        }`}
        style={{ fontSize: 24 }}
      >
        {title}
      </h2>
      {link && (
        <Link
          to={link.href}
          className="text-primary text-lg ml-4"
          style={{ fontSize: 18 }}
        >
          {link.text}
        </Link>
      )}
    </div>
    {children}
  </section>
);

export default Section;