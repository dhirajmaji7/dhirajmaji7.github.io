import React, { useEffect, useRef, useState } from "react";
import "./education.css";
import logo_umich from "../../assets/logo_umich.png";
import logo_manipal from "../../assets/logo_manipal.png";

const schoolLogoMap = {
  umich: logo_umich,
  manipal: logo_manipal,
};

const supportsHover = typeof window !== "undefined"
  ? window.matchMedia("(hover: hover) and (pointer: fine)").matches
  : false;

const EducationCard = ({ item, index }) => {
  const cardRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Reveal on scroll
  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (cardRef.current) io.observe(cardRef.current);
    return () => io.disconnect();
  }, []);

  // Cursor-follow tilt + sheen
  useEffect(() => {
    if (!supportsHover) return; // skip on touch devices
    const node = cardRef.current;
    if (!node) return;

    const maxTilt = 8; // deg
    const handleMove = (e) => {
      const rect = node.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rx = (0.5 - y) * maxTilt;
      const ry = (x - 0.5) * maxTilt;

      node.style.setProperty("--rx", `${rx}deg`);
      node.style.setProperty("--ry", `${ry}deg`);
      node.style.setProperty("--px", `${x * 100}%`);
      node.style.setProperty("--py", `${y * 100}%`);
    };

    const handleEnter = () => {
      node.style.setProperty("--tiltScale", "1.005");
    };
    const handleLeave = () => {
      node.style.setProperty("--rx", "0deg");
      node.style.setProperty("--ry", "0deg");
      node.style.setProperty("--px", "50%");
      node.style.setProperty("--py", "50%");
      node.style.setProperty("--tiltScale", "1");
    };

    node.addEventListener("pointermove", handleMove);
    node.addEventListener("pointerenter", handleEnter);
    node.addEventListener("pointerleave", handleLeave);
    return () => {
      node.removeEventListener("pointermove", handleMove);
      node.removeEventListener("pointerenter", handleEnter);
      node.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  const logoSrc = schoolLogoMap[item.logoKey];
  const revealX = index % 2 === 0 ? "-50px" : "50px";

  return (
    <article
      ref={cardRef}
      className={`education-card ${inView ? "in-view" : ""}`}
      style={{ "--revealX": revealX }}
      aria-label={`${item.degree} at ${item.school}`}
    >
      <div className="edu-logo">
        <img src={logoSrc} alt={`${item.school} logo`} className="school-logo-img" loading="lazy" />
      </div>

      <div className="edu-meta">
        <h3 className="degree">{item.degree}</h3>
        <h4 className="school">{item.school}</h4>
        <p className="period">{item.period}</p>
        <span className="gpa">GPA: {item.gpa}</span>
      </div>

      <div className="edu-courses">
        <div className="courses-wrap" role="list" aria-label="Coursework">
          {item.coursework.map((c, i) => (
            <span className="course-chip" role="listitem" key={i}>{c}</span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default EducationCard;