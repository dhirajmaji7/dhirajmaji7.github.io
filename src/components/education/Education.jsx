import React from "react";
import "./education.css";
import EducationData from './educationData';
import EducationCard from './educationCard';

const Education = () => {
  return (
    <section id="education">
      <h4>Academics</h4>
      <h2>Education</h2>

      <div className="container education__container">
        {EducationData.map((item, idx) => (
          <EducationCard key={idx} item={item} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default Education;
