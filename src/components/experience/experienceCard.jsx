import React, { useRef, useEffect, useState } from 'react';
import './experience.css';
import logo_arcbest from '../../assets/logo_arcbest.png';
import logo_amazon_robotics from '../../assets/logo_amazon_robotics.png';
import logo_swaayatt_robots from '../../assets/logo_swaayatt_robots.png';

const logoMap = {
  arcbest: logo_arcbest,
  amazon_robotics: logo_amazon_robotics,
  swaayatt_robots: logo_swaayatt_robots
};

const ExperienceCard = ({ company }) => {
  const logoSrc = logoMap[company.logoKey];
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    },
    { threshold: 0.4 }
  );

  if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`experience-card ${isVisible ? 'in-view' : ''}`}
    >
      <a href={company.link} target="_blank"
        rel="noopener noreferrer" className="experience-column logo-column" >
        <img src={logoSrc} alt={`${company.companyName} logo`}
          className="company-logo" />
      </a>
      <div className="experience-column meta-column">
        <div className="experience-meta">
          <h3 className='job-title'>{company.role}</h3>
          <h4>{company.companyName}</h4>
          <p className="period">{company.period}</p>
        </div>
      </div>
      <div className="experience-column description-column">
        <ul>
          {company.description.map((point, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
