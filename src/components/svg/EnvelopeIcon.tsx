import React from 'react';

const EnvelopeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <linearGradient id="hover-gradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#c0392b" />
        <stop offset="100%" stop-color="#8e44ad" />
      </linearGradient>
      <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
    </svg>
  );
};

export default EnvelopeIcon;
