import React from 'react';
import SectionWithTitle from './SectionWithTitle';
import { toyprojects } from '../data/data';
import GlobeIcon from './svg/GlobeIcon';
import GithubIcon from './svg/GithubIcon';

const ToyProject: React.FC = () => {
  return (
    <SectionWithTitle title="개인 프로젝트">
      <ul>
        {toyprojects.map(project => (
          <li className="section__project">
            <header>
              <h3 className="section__project-title">{project.title}</h3>
              {project.siteLink && (
                <a href={project.siteLink}>
                  <GlobeIcon />
                </a>
              )}
              {project.gitHubLink && (
                <a href={project.gitHubLink}>
                  <GithubIcon />
                </a>
              )}
              <span className="section__project-subtitle">
                {project.period}
              </span>
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

export default ToyProject;
