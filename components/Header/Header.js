import React from 'react';
import Burger from '../icons/Burger';
import { useSpring, animated } from 'react-spring';
import Link from 'next/link';
import routes from '../../utils/routes';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const menuStyles = useSpring({
    height: navbarOpen ? '15rem' : '0rem',
    opacity: navbarOpen ? 1 : 0,
  });

  const displayLinks = routes.map((route) => (
    <li key={route}>
      <button onClick={() => setNavbarOpen(false)} type="button">
        <Link href={`/${route}`}>
          <a
            className="AbrilFat px-5 py-6 flex items-center  text-2xl md:text-xl hover:opacity-75"
            role="link"
          >
            {route}
          </a>
        </Link>
      </button>
    </li>
  ));

  return (
    <nav className="flex justify-between fixed w-full items-center top-0 border-solid border-b-2 border-black bg-white z-40">
      <div className="container px-4 lg:px-0 mx-auto flex justify-between flex-col lg:flex-row">
        <div className="flex flex-1 lg:w-auto lg:justify-start items-center">
          <button
            className="px-3 py-6 border-transparent rounded lg:hidden outline-none focus:outline-none md:w-32"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <Burger isOpen={navbarOpen} />
          </button>
          <div className="flex-1 text-center xl:text-left">
            <Link href="/">
              <a className="AbrilFat px-5 py-6 flex items-center text-2xl hover:opacity-75 justify-end lg:justify-start">
                t. wagner
              </a>
            </Link>
          </div>
        </div>
        <animated.div
          className="mr-12 lg:flex items-center lg:h-full lg:opacity-100"
          style={menuStyles}
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">{displayLinks}</ul>
        </animated.div>
      </div>
    </nav>
  );
};

export default Header;
