import React from 'react';
import SectionWithTitle from './SectionWithTitle';
import { certificates } from '../data/data';

const Certificate: React.FC = () => {
  return (
    <SectionWithTitle title="자격증/외국어">
      <ul>
        {certificates.map(cert => (
          <dl className="certificate-content">
            <dt className="section__title-s">{cert.title}</dt>
            <dd className="section__subtitle-s">{cert.period}</dd>
            <dd className="section__subtitle-s">{cert.publisher}</dd>
          </dl>
        ))}
      </ul>
    </SectionWithTitle>
  );
};

export default Certificate;
