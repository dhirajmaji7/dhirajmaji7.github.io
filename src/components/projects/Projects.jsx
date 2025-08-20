import React, { useEffect, useRef, useState } from 'react';
import './projects.css';
import { FaExternalLinkAlt } from "react-icons/fa";
import { featuredProjects, otherProjects } from './projectsData';

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function FeaturedProjectCard({ fp, index = 0 }) {
  const [featRef, featInView] = useInView(0.15);
  const orientation = (fp.orientation || 'left').toLowerCase();

  const Img = (
    <div className="featured__project-img">
      {fp.image && <img src={fp.image} alt={fp.title} />}
    </div>
  );

  const Content = (
    <div className="featured__project-content">
      <div className="featured__project-header">
        {fp.link ? (
          <a href={fp.link} target='__blank' rel="noreferrer">
            <span className='featured__project-header-title'>{fp.title}</span>
            <span className='icon'><FaExternalLinkAlt/></span>
          </a>
        ) : (
          <span className='featured__project-header-title'>{fp.title}</span>
        )}
      </div>

      {fp.bullets && (
        <ul className='project__content-points'>
          {fp.bullets.map((b, i) => (<li key={i}>{b}</li>))}
        </ul>
      )}

      {fp.tags && (
        <div className="featured__project-footer">
          {fp.tags.map((t, i) => (<span key={i}>{t}</span>))}
        </div>
      )}
    </div>
  );

  return (
    <div
      ref={featRef}
      className={`featured__project-card reveal ${featInView ? 'in-view' : ''} ${orientation === 'right' ? 'orientation-right' : 'orientation-left'}`}
      style={{ '--stagger': `${index * 120}ms` }}
    >
      {orientation === 'right' ? (<>{Content}{Img}</>) : (<>{Img}{Content}</>)}
    </div>
  );
}

function OtherProjectItem({ p, index = 0 }) {
  const [ref, inView] = useInView(0.2);
  return (
    <article
      ref={ref}
      className={`project__item reveal ${inView ? 'in-view' : ''}`}
      style={{ '--stagger': `${(index + 1) * 100}ms` }}
    >
      <h3 className='project-header'>{p.title}</h3>
      {p.bullets && (
        <ul className='project-content'>
          {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}
      {p.tags && (
        <div className="project-footer">
          {p.tags.map((t, i) => <span key={i}>{t}</span>)}
        </div>
      )}
    </article>
  );
}

const Projects = () => {
  return (
    <section id='projects'>
      <h4>Some Things I've Built</h4>
      <h2>Projects</h2>

      <div className="container projects__container">
        <div className="featured__project">
          <article className='featured__project-item'>
            <div className="featured__project-group">
              <h4>Featured Project{featuredProjects.length > 1 ? 's' : ''}</h4>
            </div>

            {featuredProjects.map((fp, fidx) => (
              <FeaturedProjectCard key={fp.id || fp.title} fp={fp} index={fidx} />
            ))}
          </article>
        </div>

        <div className="other__projects">
          {otherProjects.map((p, idx) => (
            <OtherProjectItem key={p.id || p.title} p={p} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
