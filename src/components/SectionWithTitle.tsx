import React from 'react';

type SectionWithTitleProps = {
  title: string;
};

const SectionWithTitle: React.FC<SectionWithTitleProps> = ({
  title,
  children,
}) => {
  return (
    <section className="section">
      <h2 className="section__title">{title}</h2>
      {children}
    </section>
  );
};

export default SectionWithTitle;
