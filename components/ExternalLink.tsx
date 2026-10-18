import React from 'react';

export const linkClass = 'font-medium text-blue-600 underline-offset-4 hover:underline dark:text-blue-400';

// Links to other sites open in a new tab.
const ExternalLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
    {children}
  </a>
);

export default ExternalLink;
