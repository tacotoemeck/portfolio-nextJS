import React from 'react';
import Header from '../Header/Header';
import GithubSquareIcon from '../icons/githubSquare';
import TwitterIcon from '../icons/twitter';
import LinkedinIcon from '../icons/linkedin';

const BaseLayout = ({ children }) => {
  const commonLink = {
    className: 'hover:opacity-75 px-1 md:px-0',
    fill: 'black',
    size: 30,
  };

  const links = [
    {
      component: <GithubSquareIcon {...commonLink} />,
      href: 'https://github.com/tacotoemeck',
    },
    {
      component: <TwitterIcon {...commonLink} />,
      href: 'https://twitter.com/TomaszWagner1',
    },
    {
      component: <LinkedinIcon {...commonLink} />,
      href: 'https://www.linkedin.com/in/tomasz-wagner/',
    },
  ];
  return (
    <div className="">
      <Header />
      <div
        className="fixed hidden md:flex flex-col justify-between items-center h-40 w-12 md:w-16 z-20"
        style={{ top: '40%' }}
      >
        {links.map((link) => (
          <a href={link.href}>{link.component}</a>
        ))}
      </div>
      {/* 80px - navbar height */}
      <main style={{ marginTop: '80px' }}>{children}</main>
    </div>
  );
};

export default BaseLayout;
