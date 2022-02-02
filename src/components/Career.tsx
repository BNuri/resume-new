import React from 'react';
import SectionWithTitle from './SectionWithTitle';
import { careers } from '../data/data';

const Career: React.FC = () => {
  return (
    <SectionWithTitle title="업무 경험">
      {careers.map(company => (
        <>
          <dl>
            <dt className="section__title-s">{company.companyName}</dt>
            <dd className="section__subtitle-s">{company.period}</dd>
            <dd className="section__subtitle">[진행 프로젝트]</dd>
          </dl>
          <ul>
            {company.projects.map(project => (
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
        </>
      ))}
    </SectionWithTitle>
  );
};

export default Career;
