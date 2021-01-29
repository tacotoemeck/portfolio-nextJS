import Reatc from 'react';

const ExternalLink = ({ text, href }) => (
  <a className="text-blue-400 hover:underline hover:text-blue-900 font-bold" href={href}>
    {text}
  </a>
);

export default ExternalLink;
