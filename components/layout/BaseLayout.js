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

  const contactLinks = links.map((link) => (
    <a key={link.href} href={link.href}>
      {link.component}
    </a>
  ));

  return (
    <div className="">
      <Header />
      <div
        className="fixed hidden md:flex flex-col justify-around items-center h-64 w-12 md:w-16 z-20 bg-white opacity-80 rounded-r-xl"
        style={{ top: '40%' }}
      >
        {contactLinks}
      </div>
      {/* 80px - navbar height */}
      <main style={{ marginTop: '80px' }}>{children}</main>
      <footer className="sticky bottom-0 flex w-full md:hidden justify-around z-20 bg-white opacity-80 rounded-r-xl">
        {contactLinks}
      </footer>
    </div>
  );
};

export default BaseLayout;
