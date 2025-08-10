import React from 'react';
import ExperienceData from './experienceData';
import ExperienceCard from './experienceCard';

const Experience = () => {
  return (
    <section id="experience">
      <h4>My Journey</h4>
      <h2>Experience</h2>
      <div className="container experience__container">
        {ExperienceData.map((company, index) => (
          <ExperienceCard key={index} company={company} />
        ))}
      </div>
    </section>
  );
};

export default Experience;