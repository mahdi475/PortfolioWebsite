import React from 'react';

// Links to other sites open in a new tab.
const ExternalLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export default ExternalLink;
