import React from 'react';
import SectionWithTitle from './SectionWithTitle';
import { educations } from '../data/data';

const Education: React.FC = () => {
  return (
    <SectionWithTitle title="교육">
      <ul>
        {educations.map(project => (
          <li className="section__project">
            <header>
              <h3 className="section__subtitle">{project.title}</h3>
              <span className="section__subtitle-s">{project.period}</span>
            </header>
            <div className="section__project-content">
              <ul className="section__project-desc">
                {project.description.map(desc => (
                  <li>{desc}</li>
                ))}
              </ul>
              <ul className="section__project-stack">
                {project.stack.map(stack => (
                  <li className="stack">{stack}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </SectionWithTitle>
  );
};

export default Education;
