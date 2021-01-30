import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import Image from 'next/image';
import Head from 'next/head';
import ReactTyped from 'react-typed';
import style from './style.module.scss';

const Home = () => {
  return (
    <BaseLayout>
      <div className={style.main}>
        <Head>
          <title>Tom W</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Tom Wagner JavaScript, React, React Native developer" />
          <meta
            name="keywords"
            content="developer, react, react native, frontend developer, tom wagner, tomasz wagner, tomek wagner"
          />
          <meta name="og:title" content="Tom Wagner Frontend Devloper" />
          <meta
            name="og:description"
            content="developer, react, react native, frontend developer, tom wagner, tomasz wagner, tomek wagner"
          />
          <meta name="og:image" content="/img/seoMain.jpg" />
          <meta name="og:url" content="https://twagner.me" />
        </Head>
        <div className="w-full md:w-2/3 xl:w-1/2 md:px-20 px-6">
          <Image
            className="rounded-2xl opacity-60"
            src="/img/me.gif"
            alt="profile"
            height="300"
            width="300"
            layout="responsive"
          />
        </div>
        <div className="md:w-2/3 md:py-8 lg:w-1/2 flex flex-col lg:justify-center">
          <div className="flex flex-col p-4  lg:px-20 xl:pr-48 xl:border-solid xl:border-l-2 xl:border-black">
            <h2 className="text-2xl md:text-5xl lg:text-7xl font-bold roboto">
              Frontend Developer
            </h2>
            <ReactTyped
              strings={[
                'JavaScript',
                'React',
                'React Native',
                'NextJS',
                'NodeJS',
                '...',
                'Here to learn',
                'Here to help',
              ]}
              typeSpeed={70}
              backSpeed={70}
              backDelay={1000}
              showCursor
              loop
              loopCount={0}
              cursorChar="|"
              className="text-gray-500 md:text-2xl md:py-4"
            >
              <input type="text" />
            </ReactTyped>

            <button
              className="text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase px-8 py-3 rounded-full outline-none focus:outline-none my-6"
              type="button"
              style={{ transition: 'all .15s ease' }}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;
